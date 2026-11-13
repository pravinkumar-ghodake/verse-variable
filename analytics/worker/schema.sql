
-- ============================================================
-- Verse & Variable — Private Readership Analytics
-- File: analytics/worker/schema.sql
-- Database: Cloudflare D1 (SQLite)
-- Schema version: 1
--
-- PRINCIPLES
--   1. Store aggregate readership counts, not individual events.
--   2. Use UTC calendar dates for consistent reporting.
--   3. Never store raw IP addresses or personal identifiers.
--   4. Never store complete URLs, query strings, or fragments.
--   5. Keep page and referral statistics in separate tables.
--
-- The Worker is responsible for validating and normalising
-- incoming values before inserting or updating these tables.
-- ============================================================


-- ------------------------------------------------------------
-- TABLE 1: DAILY PAGE VIEWS
-- ------------------------------------------------------------
-- Each row represents the aggregate number of page views for
-- one date, page path, page type, and language combination.
--
-- Example:
-- 2026-11-13 | /verse-variable/ | home | en | 24
--
-- Repeated visits increment the aggregate count. This schema
-- does not identify or attempt to recognise individual readers.
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS page_views_daily (

    event_date TEXT NOT NULL
        CHECK (
            length(event_date) = 10
            AND event_date GLOB '????-??-??'
            AND date(event_date) IS NOT NULL
            AND date(event_date) = event_date
        ),

    page_path TEXT NOT NULL
        CHECK (
            length(page_path) BETWEEN 1 AND 512
            AND substr(page_path, 1, 1) = '/'
            AND instr(page_path, '?') = 0
            AND instr(page_path, '#') = 0
        ),

    page_type TEXT NOT NULL
        CHECK (
            page_type IN (
                'home',
                'article',
                'collection',
                'archive',
                'language',
                'about',
                'other'
            )
        ),

    language TEXT NOT NULL
        CHECK (
            length(language) BETWEEN 2 AND 12
            AND language = lower(language)
        ),

    views INTEGER NOT NULL DEFAULT 1
        CHECK (views > 0),

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (
        event_date,
        page_path,
        page_type,
        language
    )

);


-- ------------------------------------------------------------
-- INDEXES: PAGE VIEW REPORTING
-- ------------------------------------------------------------
-- The primary key already supports date-based queries.
-- These additional indexes support page, language, and
-- content-type comparisons in the private dashboard.
-- ------------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_page_views_daily_path_date
    ON page_views_daily (
        page_path,
        event_date
    );

CREATE INDEX IF NOT EXISTS idx_page_views_daily_language_date
    ON page_views_daily (
        language,
        event_date
    );

CREATE INDEX IF NOT EXISTS idx_page_views_daily_type_date
    ON page_views_daily (
        page_type,
        event_date
    );


-- ------------------------------------------------------------
-- TABLE 2: DAILY REFERRAL STATISTICS
-- ------------------------------------------------------------
-- Records aggregate counts by the referring website's domain.
--
-- Only the domain is retained, never the complete referring URL.
--
-- The reserved value 'direct_or_unattributed' represents visits
-- for which no usable external referral domain is available.
-- This may include direct visits and privacy-restricted referrers;
-- it should not be interpreted as a verified source of traffic.
-- ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS referrals_daily (

    event_date TEXT NOT NULL
        CHECK (
            length(event_date) = 10
            AND event_date GLOB '????-??-??'
            AND date(event_date) IS NOT NULL
            AND date(event_date) = event_date
        ),

    referrer_domain TEXT NOT NULL
        CHECK (
            length(referrer_domain) BETWEEN 1 AND 253
            AND referrer_domain = lower(referrer_domain)
            AND instr(referrer_domain, '/') = 0
            AND instr(referrer_domain, '?') = 0
            AND instr(referrer_domain, '#') = 0
            AND instr(referrer_domain, ' ') = 0
        ),

    views INTEGER NOT NULL DEFAULT 1
        CHECK (views > 0),

    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (
        event_date,
        referrer_domain
    )

);


-- ------------------------------------------------------------
-- INDEXES: REFERRAL REPORTING
-- ------------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_referrals_daily_domain_date
    ON referrals_daily (
        referrer_domain,
        event_date
    );


-- ============================================================
-- END OF SCHEMA
-- ============================================================
--
-- IMPLEMENTATION NOTES
--
-- 1. The Worker should calculate event_date using UTC.
--
-- 2. The Worker should normalise page paths and classify page
--    types and languages before writing to the database.
--
-- 3. The Worker should retain only an external referrer domain,
--    or use 'direct_or_unattributed' when no usable external
--    domain is available. Internal referrals should not be
--    counted as external referrals.
--
-- 4. Page-view and referral increments should be submitted
--    together using a D1 batch so both aggregates are updated
--    consistently.
--
-- 5. Use parameterised SQL statements and UPSERT operations.
--    Do not construct SQL by concatenating incoming values.
--
-- 6. The database stores aggregate page-view counts, not
--    unique visitors. Refreshes and repeat visits can increase
--    the count.
--
-- 7. Do not add personal identifiers, raw IP addresses,
--    cookies, fingerprinting data, or complete URLs without
--    a separately documented and justified design change.
--
-- 8. Future schema changes should be introduced through
--    deliberate database migrations, not by casually changing
--    an existing production table.
-- ============================================================
