# Verse & Variable — Private Analytics

**A privately maintained readership measurement system for Verse & Variable.**

This directory contains the source code, database schema, dashboard and technical documentation for the journal's independently developed website analytics system.

The system is designed to measure readership while respecting visitor privacy, maintaining editorial independence and avoiding recurring financial expenditure.

---

## 1. Project Identity

**Publication:** Verse & Variable  
**Website:** https://pravinkumar-ghodake.github.io/verse-variable/  
**Repository:** https://github.com/pravinkumar-ghodake/verse-variable  
**Maintainer:** Pravinkumar Ghodake

The analytics system is an independent technical component of the journal. It is not intended to influence editorial decisions, encourage artificial traffic generation or turn readership figures into a measure of literary merit.

Its purpose is to understand how readers discover and engage with the publication.

## 2. Objectives

The system aims to provide the journal's creator with a private, continuously maintained overview of website readership.

The initial objectives are:

- Measure aggregate page views.
- Monitor daily and historical readership.
- Identify frequently visited literary articles.
- Understand readership across the seven initial language traditions.
- Monitor visits to weekly collections.
- Identify referring websites and discovery channels.
- Understand broad geographical readership where available.
- Maintain a historical record of the journal's growth.
- Preserve the option of publishing selected readership statistics in the future.

The system must remain lightweight and must not interfere with the normal reading experience.

## 3. Technical Architecture

The proposed implementation uses the following infrastructure:

| Component | Technology | Purpose |
|---|---|---|
| Publication website | GitHub Pages | Hosts the journal |
| Website generator | Jekyll | Builds publication pages |
| Analytics collector | Cloudflare Workers | Receives and processes anonymous events |
| Analytics database | Cloudflare D1 | Stores aggregated readership information |
| Database language | SQLite | Maintains structured statistics |
| Dashboard | HTML, CSS and JavaScript | Presents readership information |
| Version control | GitHub | Maintains the analytics source code |

### Data flow

```text
Reader
  |
  v
Verse & Variable
(GitHub Pages)
  |
  v
Lightweight analytics script
  |
  v
Cloudflare Worker
  |
  v
Cloudflare D1
  |
  v
Authenticated administration interface
  |
  v
Creator-only readership dashboard
```

GitHub Pages remains the primary publication platform.

Cloudflare provides the small server-side component required to receive and persist analytics events.

The analytics application code remains maintained in this repository.

## 4. Free-Tier Commitment

The analytics system is intended to operate exclusively within the available free offerings of its infrastructure providers.

The initial implementation targets:

- Cloudflare Workers Free.
- Cloudflare D1 Free.
- GitHub Pages.

The following restrictions are mandatory:

1. No paid subscription is required.
2. No paid trial is to be activated.
3. No credit or debit card is to be supplied for analytics setup.
4. No paid add-ons or optional billing services are to be enabled.
5. No automatic upgrade to a paid plan is authorised.
6. Usage must remain within the applicable free-tier limits.
7. If a free allowance is exhausted, collection may temporarily stop rather than incur a charge.

Free-tier allowances and provider policies can change. The maintainer should periodically verify the official documentation.

Official references:

- https://developers.cloudflare.com/workers/platform/pricing/
- https://developers.cloudflare.com/workers/platform/limits/
- https://developers.cloudflare.com/d1/platform/pricing/
- https://developers.cloudflare.com/d1/platform/limits/

## 5. Privacy Principles

Visitor privacy is a fundamental design requirement.

The initial implementation should collect only the information necessary to understand aggregate readership.

### Information that may be collected

- Page path.
- Page category.
- Publication or article identifier, where applicable.
- Language category, where applicable.
- Event date and time.
- Referring domain, where available.
- Broad country information, where available through the infrastructure provider.

### Information that must not be collected

- Raw visitor IP addresses.
- Personal names or email addresses.
- Login credentials.
- Browser fingerprints.
- Cross-site browsing histories.
- Precise geographical coordinates.
- Unnecessary device identifiers.
- Sensitive personal information.

The initial implementation should count page views rather than attempt intrusive individual-level visitor identification.

### Privacy safeguards

- No advertising trackers.
- No cross-site tracking.
- No unnecessary third-party scripts.
- No collection of personal information for analytics.
- No raw IP address storage.
- No exposure of administrative credentials.
- No public access to private readership records.

The system should be designed to minimise data collection rather than collect information merely because it is technically available.

Applicable privacy and data-protection obligations must be assessed before deployment.

## 6. Readership Statistics

The initial dashboard is intended to provide the following measurements.

| Metric | Description |
|---|---|
| Total page views | Aggregate number of recorded page views |
| Daily page views | Page-view activity by date |
| Monthly page views | Monthly readership trends |
| Most-read pages | Pages with the highest recorded readership |
| Language readership | Aggregate readership by language section |
| Weekly collections | Readership of weekly collection pages |
| Article readership | Readership of individual literary articles |
| Referrals | Broad sources from which readers arrive |
| Country distribution | Approximate country-level readership, where available |

### Measurement terminology

Page views, visits and unique visitors are different measurements.

The first implementation prioritises accurate aggregate page-view counts.

It must not label page views as unique visitors or claim to measure individual readers without a properly defined and privacy-conscious methodology.

Statistics should always be presented with clear definitions.

## 7. Visibility and Access Control

The analytics system follows a private-first approach.

### Initial configuration

All readership statistics are accessible exclusively to the authorised creator.

The administration interface must use server-side authentication.

Hiding a dashboard URL or removing its navigation link does not constitute access control.

Private database queries and administrative endpoints must never be exposed through unauthenticated public requests.

### Future public reporting

The creator may decide to publish selected aggregate readership statistics at a later date.

Possible future additions include:

- A public readership overview.
- Annual readership reports.
- Language-wise readership summaries.
- Publication milestones.

Public reporting must be an explicit decision.

The default configuration remains private.

## 8. Security Requirements

The implementation must follow these requirements:

- Administrative secrets must be stored as Cloudflare Worker secrets.
- No credentials may be committed to this public GitHub repository.
- Database access must occur through the Worker.
- The browser must never receive administrative database credentials.
- Administrative endpoints must require authentication.
- Public collection endpoints must validate requests and restrict accepted event fields.
- Database queries must use parameterised statements.
- Appropriate request validation and abuse controls must be implemented.
- CORS must be restricted to the intended publication origin wherever applicable.
- Error responses must not expose secrets or internal database details.

The dashboard must not rely on client-side password checks as its security mechanism.

## 9. Repository Structure

The intended structure is:

```text
analytics/
│
├── README.md
│
├── worker/
│   ├── index.js
│   └── schema.sql
│
└── dashboard/
    ├── index.html
    ├── style.css
    └── script.js
```

### File responsibilities

| File | Responsibility |
|---|---|
| `README.md` | Project documentation and implementation guidance |
| `worker/index.js` | Analytics event collection, validation, database operations and protected administration endpoints |
| `worker/schema.sql` | Database tables, indexes and initial schema |
| `dashboard/index.html` | Dashboard structure |
| `dashboard/style.css` | Dashboard presentation |
| `dashboard/script.js` | Dashboard interactions and authenticated data retrieval |

The analytics source code must remain separate from the journal's editorial content and normal website layouts.

The deployment configuration must also prevent private administrative material or credentials from being accidentally exposed through the public website.

## 10. Implementation Sequence

The system will be developed incrementally.

| Stage | Work | Status |
|---|---|---|
| 1 | Establish analytics documentation | In progress |
| 2 | Design the database schema | Pending |
| 3 | Implement the Worker collector | Pending |
| 4 | Configure Cloudflare D1 | Pending |
| 5 | Establish secure administration | Pending |
| 6 | Develop the dashboard interface | Pending |
| 7 | Integrate the tracking script with Jekyll | Pending |
| 8 | Test event collection and data accuracy | Pending |
| 9 | Verify privacy and security controls | Pending |
| 10 | Begin private readership monitoring | Pending |

Each stage should be tested before proceeding to the next.

## 11. Data Preservation

The readership history is a useful record of the journal's development.

The system should support periodic exports of aggregated statistics.

Exports should preserve:

- Reporting period.
- Page-view counts.
- Page identifiers.
- Language categories.
- Publication identifiers.
- Source categories, where available.

The maintainer should retain independent copies of important historical reports.

The system should not depend exclusively on the continued availability of a third-party dashboard.

## 12. Maintenance and Reliability

The analytics system is supplementary to the publication.

If the analytics service becomes unavailable:

- The journal must remain accessible.
- Literary articles must continue to render normally.
- Navigation must remain functional.
- Readers must not receive disruptive analytics errors.
- Failed analytics requests must not prevent ordinary page loading.

The analytics collector should fail independently of the publication website.

The system should remain lightweight, understandable and maintainable over the long term.

## 13. Editorial Independence

Readership statistics are informational.

They may help the creator understand the reach and discovery of the journal, but they do not determine literary merit, editorial selection or the intellectual value of an exploration.

A literary work with a small readership may be just as meaningful as one with a large readership.

The purpose of measurement is understanding, not popularity-driven editorial control.

---

## Project Principle

**Measure readership. Respect readers. Preserve independence.**

The analytics system exists to help Verse & Variable understand its growing readership without compromising the privacy, accessibility or intellectual independence of the publication.

<div align="center">

**VERSE & VARIABLE**

*لفظ سے لہر تک*

*Lafz se Lehar tak — From the word to the wave.*

**Literature · Humanity · Science**

</div>
