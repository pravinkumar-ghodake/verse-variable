
/* ============================================================
   VERSE & VARIABLE — PRIVATE READERSHIP ANALYTICS
   File: analytics/worker/index.js

   Runtime: Cloudflare Workers
   Database: Cloudflare D1
   Database binding: env.DB

   PURPOSE
   -------
   Receive validated page-view events and update aggregate
   readership statistics.

   PRIVACY PRINCIPLES
   ------------------
   1. Never store raw IP addresses.
   2. Never store cookies or visitor identifiers.
   3. Never fingerprint visitors or devices.
   4. Never store complete URLs, query strings, or fragments.
   5. Never store names, email addresses, or personal details.
   6. Store daily aggregate counts only.

   IMPORTANT
   ---------
   CORS and Origin checks are browser access controls, not
   authentication. Non-browser clients can forge an Origin
   header. This endpoint is only for low-sensitivity aggregate
   collection. It must never expose dashboard or reporting data.

   ============================================================ */


/* ------------------------------------------------------------
   1. WEBSITE CONFIGURATION
   ------------------------------------------------------------ */

const SITE_ORIGIN = "https://pravinkumar-ghodake.github.io";

const SITE_PATH_PREFIX = "/verse-variable/";

const SITE_BASE_URL = SITE_ORIGIN + SITE_PATH_PREFIX;

const SITE_HOST = new URL(SITE_ORIGIN).hostname.toLowerCase();


/* ------------------------------------------------------------
   2. COLLECTION CONFIGURATION
   ------------------------------------------------------------ */

const MAX_BODY_BYTES = 2048;

const DIRECT_REFERRER = "direct_or_unattributed";

const ALLOWED_PAGE_TYPES = new Set([
    "home",
    "article",
    "collection",
    "archive",
    "language",
    "about",
    "other"
]);

const ALLOWED_LANGUAGES = new Set([
    "en",
    "ur",
    "hi",
    "mr",
    "kn",
    "ta",
    "ml",
    "te"
]);

const ALLOWED_ORIGINS = new Set([
    SITE_ORIGIN
]);


/* ------------------------------------------------------------
   3. COMMON RESPONSE HELPERS
   ------------------------------------------------------------ */

function isAllowedOrigin(origin) {
    return typeof origin === "string"
        && ALLOWED_ORIGINS.has(origin);
}


function jsonResponse(data, status = 200, origin = null) {
    const headers = new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
    });

    if (isAllowedOrigin(origin)) {
        headers.set("Access-Control-Allow-Origin", origin);
        headers.set("Vary", "Origin");
    }

    return new Response(JSON.stringify(data), {
        status,
        headers
    });
}


function notFoundResponse() {
    return jsonResponse({
        ok: false,
        error: "not_found"
    }, 404);
}


/* ------------------------------------------------------------
   4. CORS PREFLIGHT
   ------------------------------------------------------------ */

function handlePreflight(request) {
    const origin = request.headers.get("Origin");

    if (!isAllowedOrigin(origin)) {
        return jsonResponse({
            ok: false,
            error: "origin_not_allowed"
        }, 403);
    }

    const requestedMethod = request.headers.get(
        "Access-Control-Request-Method"
    );

    if (
        requestedMethod
        && requestedMethod.toUpperCase() !== "POST"
    ) {
        return jsonResponse({
            ok: false,
            error: "method_not_allowed"
        }, 405, origin);
    }

    const requestedHeaders = (
        request.headers.get("Access-Control-Request-Headers") || ""
    )
        .split(",")
        .map(header => header.trim().toLowerCase())
        .filter(Boolean);

    const unsupportedHeader = requestedHeaders.some(
        header => header !== "content-type"
    );

    if (unsupportedHeader) {
        return jsonResponse({
            ok: false,
            error: "header_not_allowed"
        }, 403, origin);
    }

    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
            "Cache-Control": "no-store",
            "Vary": "Origin"
        }
    });
}


/* ------------------------------------------------------------
   5. PAGE PATH VALIDATION
   ------------------------------------------------------------ */

/*
   Only paths belonging to the Verse & Variable project site
   are accepted.

   URL parsing also removes query strings and fragments because
   only the pathname is returned.

   Examples:

   Accepted:
   /verse-variable/
   /verse-variable/about/
   /verse-variable/archive/2026/
   /verse-variable/poetry/example/

   Rejected:
   /another-project/
   https://example.com/
   /private/
*/

function normalizePagePath(value) {
    if (
        typeof value !== "string"
        || value.length > 1024
    ) {
        return null;
    }

    const candidate = value.trim();

    if (!candidate) {
        return null;
    }

    let parsed;

    try {
        parsed = new URL(candidate, SITE_BASE_URL);
    } catch {
        return null;
    }

    if (parsed.origin !== SITE_ORIGIN) {
        return null;
    }

    const pathname = parsed.pathname;

    const prefixWithoutSlash = SITE_PATH_PREFIX.slice(0, -1);

    const belongsToSite = (
        pathname === prefixWithoutSlash
        || pathname.startsWith(SITE_PATH_PREFIX)
    );

    if (!belongsToSite || pathname.length > 512) {
        return null;
    }

    return pathname;
}


/* ------------------------------------------------------------
   6. PAGE TYPE VALIDATION
   ------------------------------------------------------------ */

function normalizePageType(value) {
    if (typeof value !== "string") {
        return null;
    }

    const pageType = value.trim().toLowerCase();

    if (!ALLOWED_PAGE_TYPES.has(pageType)) {
        return null;
    }

    return pageType;
}


/* ------------------------------------------------------------
   7. LANGUAGE NORMALISATION
   ------------------------------------------------------------ */

/*
   The journal has seven primary literary languages.

   English is also retained as a reporting category for English
   translations, editorial pages, and other English content.

   Regional tags such as ur-IN or hi-IN are reduced to their
   supported base language.

   Unsupported or missing values become "und".
*/

function normalizeLanguage(value) {
    if (typeof value !== "string") {
        return "und";
    }

    const language = value
        .trim()
        .toLowerCase()
        .split("-")[0];

    return ALLOWED_LANGUAGES.has(language)
        ? language
        : "und";
}


/* ------------------------------------------------------------
   8. REFERRER HOST VALIDATION
   ------------------------------------------------------------ */

/*
   The browser tracking script should send only the hostname
   obtained from document.referrer.

   It must not send the complete referring URL.

   Examples:

   www.google.com
   en.wikipedia.org
   example.com

   Internal navigation is excluded from referral statistics.

   An empty referrer is classified as direct or unattributed.
   This does not prove that a visit was genuinely direct.
*/

const HOSTNAME_PATTERN =
    /^(?=.{1,253}$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;


function normalizeReferrerHost(value) {
    if (
        value === undefined
        || value === null
        || value === ""
    ) {
        return {
            shouldRecord: true,
            domain: DIRECT_REFERRER
        };
    }

    if (typeof value !== "string") {
        return null;
    }

    const hostname = value
        .trim()
        .toLowerCase()
        .replace(/\.$/, "");

    if (!hostname) {
        return {
            shouldRecord: true,
            domain: DIRECT_REFERRER
        };
    }

    // Do not count internal navigation as an external referral.
    if (hostname === SITE_HOST) {
        return {
            shouldRecord: false,
            domain: null
        };
    }

    // Do not retain IP-address-shaped referral values.
    const looksLikeIPv4 = /^\d{1,3}(?:\.\d{1,3}){3}$/.test(hostname);

    if (
        looksLikeIPv4
        || !HOSTNAME_PATTERN.test(hostname)
    ) {
        return null;
    }

    return {
        shouldRecord: true,
        domain: hostname
    };
}


/* ------------------------------------------------------------
   9. EVENT VALIDATION
   ------------------------------------------------------------ */

/*
   Accepted JSON structure:

   {
       "page_path": "/verse-variable/",
       "page_type": "home",
       "language": "en",
       "referrer_host": "www.google.com"
   }

   Only these four properties are accepted.

   Unknown properties are rejected, helping prevent accidental
   collection of additional information.
*/

function validateEvent(payload) {
    if (
        payload === null
        || typeof payload !== "object"
        || Array.isArray(payload)
    ) {
        return null;
    }

    const allowedKeys = new Set([
        "page_path",
        "page_type",
        "language",
        "referrer_host"
    ]);

    const containsUnknownProperty = Object.keys(payload).some(
        key => !allowedKeys.has(key)
    );

    if (containsUnknownProperty) {
        return null;
    }

    const pagePath = normalizePagePath(payload.page_path);

    const pageType = normalizePageType(payload.page_type);

    if (!pagePath || !pageType) {
        return null;
    }

    const language = normalizeLanguage(payload.language);

    const referrer = normalizeReferrerHost(
        payload.referrer_host
    );

    if (!referrer) {
        return null;
    }

    return {
        pagePath,
        pageType,
        language,
        referrer
    };
}


/* ------------------------------------------------------------
   10. DATABASE COLLECTION
   ------------------------------------------------------------ */

/*
   Database binding:

       env.DB

   Required tables:

       page_views_daily
       referrals_daily

   Both tables are defined in:

       analytics/worker/schema.sql

   The Worker records the UTC date itself. Client-provided
   timestamps are not accepted.
*/

async function recordPageView(event, env) {
    if (!env.DB) {
        throw new Error("Database binding is unavailable.");
    }

    const eventDate = new Date()
        .toISOString()
        .slice(0, 10);

    const pageViewStatement = env.DB
        .prepare(`
            INSERT INTO page_views_daily (
                event_date,
                page_path,
                page_type,
                language,
                views
            )
            VALUES (?, ?, ?, ?, 1)

            ON CONFLICT (
                event_date,
                page_path,
                page_type,
                language
            )
            DO UPDATE SET
                views = page_views_daily.views + 1,
                updated_at = CURRENT_TIMESTAMP
        `)
        .bind(
            eventDate,
            event.pagePath,
            event.pageType,
            event.language
        );

    const statements = [
        pageViewStatement
    ];

    /*
       A referral row is added only when the visit has an
       external or unattributed source.

       Internal page-to-page navigation is not counted as a
       new referral.
    */

    if (event.referrer.shouldRecord) {
        const referralStatement = env.DB
            .prepare(`
                INSERT INTO referrals_daily (
                    event_date,
                    referrer_domain,
                    views
                )
                VALUES (?, ?, 1)

                ON CONFLICT (
                    event_date,
                    referrer_domain
                )
                DO UPDATE SET
                    views = referrals_daily.views + 1,
                    updated_at = CURRENT_TIMESTAMP
            `)
            .bind(
                eventDate,
                event.referrer.domain
            );

        statements.push(referralStatement);
    }

    /*
       D1 batch executes the prepared statements together.
       If a statement fails, the batch is rolled back.
    */

    const results = await env.DB.batch(statements);

    const failed = results.some(
        result => result.success === false
    );

    if (failed) {
        throw new Error("Database batch failed.");
    }
}


/* ------------------------------------------------------------
   11. COLLECTION ENDPOINT
   ------------------------------------------------------------ */

async function handleCollection(request, env) {
    const origin = request.headers.get("Origin");

    // Accept only the configured website origin.
    if (!isAllowedOrigin(origin)) {
        return jsonResponse({
            ok: false,
            error: "origin_not_allowed"
        }, 403);
    }

    // Only POST requests are accepted.
    if (request.method !== "POST") {
        return jsonResponse({
            ok: false,
            error: "method_not_allowed"
        }, 405, origin);
    }

    // Require JSON input.
    const contentType = (
        request.headers.get("Content-Type") || ""
    )
        .split(";")[0]
        .trim()
        .toLowerCase();

    if (contentType !== "application/json") {
        return jsonResponse({
            ok: false,
            error: "unsupported_content_type"
        }, 415, origin);
    }

    // Reject obviously oversized requests before parsing.
    const declaredLength = request.headers.get("Content-Length");

    if (
        declaredLength !== null
        && Number(declaredLength) > MAX_BODY_BYTES
    ) {
        return jsonResponse({
            ok: false,
            error: "payload_too_large"
        }, 413, origin);
    }

    let rawBody;
    let payload;

    try {
        rawBody = await request.text();

        const actualLength = new TextEncoder()
            .encode(rawBody)
            .byteLength;

        if (actualLength > MAX_BODY_BYTES) {
            return jsonResponse({
                ok: false,
                error: "payload_too_large"
            }, 413, origin);
        }

        payload = JSON.parse(rawBody);

    } catch {
        return jsonResponse({
            ok: false,
            error: "invalid_json"
        }, 400, origin);
    }

    const event = validateEvent(payload);

    if (!event) {
        return jsonResponse({
            ok: false,
            error: "invalid_event"
        }, 400, origin);
    }

    try {
        await recordPageView(event, env);

        return jsonResponse({
            ok: true
        }, 202, origin);

    } catch {
        // Do not expose database details or incoming event data.
        return jsonResponse({
            ok: false,
            error: "storage_unavailable"
        }, 503, origin);
    }
}


/* ------------------------------------------------------------
   12. DATABASE HEALTH CHECK
   ------------------------------------------------------------ */

/*
   GET /health

   Returns only a simple operational status.
   It does not reveal readership statistics or database contents.
*/

async function handleHealth(env) {
    if (!env.DB) {
        return jsonResponse({
            ok: false
        }, 503);
    }

    try {
        await env.DB
            .prepare("SELECT 1 AS healthy")
            .first();

        return jsonResponse({
            ok: true
        }, 200);

    } catch {
        return jsonResponse({
            ok: false
        }, 503);
    }
}


/* ------------------------------------------------------------
   13. MAIN WORKER ROUTER
   ------------------------------------------------------------ */

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Public, minimal health check.
        if (url.pathname === "/health") {
            if (request.method !== "GET") {
                return jsonResponse({
                    ok: false,
                    error: "method_not_allowed"
                }, 405);
            }

            return handleHealth(env);
        }

        // Collection endpoint.
        if (url.pathname === "/collect") {
            if (request.method === "OPTIONS") {
                return handlePreflight(request);
            }

            return handleCollection(request, env);
        }

        // All other routes remain unavailable.
        return notFoundResponse();
    }
};


/* ============================================================
   END OF WORKER
   ============================================================ */
