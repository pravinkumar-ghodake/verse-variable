# Weekly Publication Workflow

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the editorial and technical workflow for preparing and publishing weekly editions of Verse & Variable.

The publication follows a distinctive content structure in which three independent literary explorations are brought together within one weekly collection.

Each article should have its own permanent page, independent editorial identity, original commentary, source attribution and supporting references, where appropriate.

The weekly collection page should introduce the edition and provide readers with an organised way to explore its three articles.

This workflow aims to ensure that:

- The three articles are independently developed.
- Each article receives appropriate editorial attention.
- Literary and historical sources are checked.
- Translations and attributions are verified.
- Cultural and linguistic contexts are respected.
- Scientific claims are appropriately qualified where they occur.
- Rights and ethical requirements are addressed.
- The weekly collection accurately represents its individual articles.
- Metadata remains consistent across the edition.
- Publication and deployment are checked.
- Corrections can be made without losing editorial history.

The workflow is a quality framework, not a requirement to make every article follow the same interpretative pattern or establish a connection with another discipline.

This is an editorial workflow specification. It does not claim that the current Jekyll website automatically performs every step described here.

## 2. The Weekly Publication Structure

Each weekly edition is designed around four connected website pages.

### 2.1 Article One

The first individual article explores a selected literary expression.

It has its own permanent URL and remains independently accessible.

### 2.2 Article Two

The second individual article explores another literary expression.

It should have its own literary and interpretative identity rather than merely repeating Article One.

### 2.3 Article Three

The third individual article completes the weekly selection.

It may introduce another language, literary form, period, voice or dimension of human experience.

### 2.4 Weekly Collection Page

The weekly collection page brings the three articles together.

It provides:

- The edition title.
- A short introduction.
- The publication week or date range.
- Links to all three individual articles.
- Brief descriptions.
- Language and literary-form information.
- An editorial overview where appropriate.

The collection page should not replace the individual articles.

<escape>
Weekly Edition
|
+-- Article 01 — Permanent article page
|
+-- Article 02 — Permanent article page
|
+-- Article 03 — Permanent article page
|
+-- Weekly Collection — Page linking all three articles
</escape>

## 3. Editorial Principles

The weekly format should preserve the publication's underlying editorial philosophy.

### 3.1 Three Independent Explorations

Each article should make a meaningful literary contribution on its own.

The weekly structure should not force unrelated material into a single narrative.

### 3.2 Literary and Linguistic Diversity

The three selections may explore different languages, periods, literary forms, traditions and emotional worlds.

Where suitable, the selection may include contrasting literary voices, established works, lesser-known expressions and different cultural contexts.

Diversity should arise from meaningful editorial choices rather than an arbitrary language quota.

### 3.3 Meaningful Cohesion

Where possible, the three articles may have an editorial relationship.

That relationship may arise through:

- A shared human question.
- Contrasting literary perspectives.
- Different cultural or linguistic expressions.
- Related emotional experiences.
- Complementary philosophical ideas.
- A meaningful contrast between literary voices.
- A broader subject that emerges naturally from the selections.

A shared theme is desirable when it genuinely exists, but it is not mandatory.

### 3.4 No Forced Connections

The articles should never be linked through artificial thematic, scientific or philosophical claims merely to make the weekly edition appear uniform.

A scientific connection is not required in any particular article or in the weekly collection as a whole.

### 3.5 Quality Over Schedule

The three-article format is an editorial target, not a reason to publish incomplete or inadequately checked material.

If an edition is not ready, the publication may adjust its schedule rather than compromise its standards.

## 4. Weekly Edition Identification

Every weekly edition should have a stable identifier.

Suggested format:

`YYYY-WNN`

Where:

- `YYYY` represents the year.
- `W` indicates the week.
- `NN` represents the week number.

Example:

`2026-W46`

Use an unambiguous week-numbering convention, preferably ISO week numbering, when the identifier represents a calendar week.

The editorial date range should also be recorded.

### 4.1 Week Identifier

The same `week_id` should be used in:

- The weekly collection page.
- Article One.
- Article Two.
- Article Three.
- Relevant internal editorial records.

### 4.2 Article Numbers

Use the following sequence:

| Article | `entry_number` |
|---|---:|
| Article One | 1 |
| Article Two | 2 |
| Article Three | 3 |

These numbers establish an ordering within that weekly edition.

They do not replace the article's permanent URL or unique identity.

### 4.3 Stable URLs

Once an article is published, avoid changing its URL without a specific editorial or technical reason.

Where a change is necessary, update relevant internal links and redirects where supported.

## 5. Weekly Planning

The edition should begin with a clear editorial plan.

### 5.1 Selection

Identify three prospective literary expressions.

Selection may consider:

- Literary merit.
- Originality and depth of expression.
- Cultural and linguistic significance.
- Emotional resonance.
- Philosophical substance.
- Quality of language and imagery.
- Availability of reliable source material.
- Translation and interpretation possibilities.
- Rights and permissions.
- Available editorial capacity.

The present publication scope is focused on Indian literature, including its diverse languages, historical periods and literary traditions.

The editor's wider interests in international literature, science and other disciplines may inform the editorial perspective but do not create additional publication categories.

### 5.2 Selection Diversity

Where suitable, the selection may include different literary traditions, languages, periods or forms.

However, diversity should arise from meaningful editorial choices rather than an arbitrary language quota or predetermined distribution of subjects.

The three selections may be related or entirely distinct.

### 5.3 Editorial Cohesion

The editor may identify a shared idea, emotional question, philosophical concern or literary contrast when one genuinely emerges from the selected works.

There is no requirement to allocate articles between scientific and non-scientific subjects.

There is also no requirement that all three selections address the same theme.

A weekly collection should represent the actual character of its three articles rather than manufacture a connection among them.

### 5.4 Preliminary Rights Assessment

Before investing substantial effort, identify whether the proposed literary or visual material may involve:

- Copyright restrictions.
- Uncertain attribution.
- Published translations.
- Restricted archives.
- Private correspondence.
- Sensitive cultural material.
- Third-party figures or images.

Avoid building an article around material whose intended use cannot be established responsibly.

### 5.5 Weekly Planning Record

Prepare an internal planning record.

| Field | Description |
|---|---|
| Week ID | Unique weekly identifier |
| Working title | Proposed edition title |
| Date range | Intended publication period |
| Article One | Proposed literary expression |
| Article Two | Proposed literary expression |
| Article Three | Proposed literary expression |
| Shared theme | Optional editorial connection |
| Primary languages | Languages represented |
| Editorial considerations | Relevant literary or contextual matters |
| Source status | Initial research assessment |
| Rights status | Preliminary assessment |
| Optional scientific context | Only where a genuine connection is anticipated |
| Editorial status | Planning stage |
| Responsible editor | Responsible person |

## 6. Article Preparation

Each individual article should be prepared independently using the relevant publication template.

### 6.1 Article Template

Use `ARTICLE_TEMPLATE.md` as the primary article preparation reference.

External contributors may use `SUBMISSION_TEMPLATE.md`.

### 6.2 Article Structure

A standard literary exploration should include, as appropriate:

1. Original literary expression or a properly limited quotation.
2. Appropriate transliteration or pronunciation guidance.
3. English translation.
4. Accurate attribution.
5. Original editorial reflection.
6. Supporting references and contextual notes.
7. Relevant disclosures and supplementary material.

The editorial reflection should contain no more than four concise English prose paragraphs.

Fewer paragraphs are entirely acceptable.

There is no mandatory paragraph-by-paragraph formula and no paragraph reserved for interdisciplinary or scientific discussion.

The reflection should develop naturally from the literary work, following its imagery, emotional movement, language and possibilities for interpretation.

### 6.3 Article Independence

Each article must be understandable without requiring the reader to visit the other two articles.

The weekly collection may provide additional context but should not contain information essential to understanding an individual article.

### 6.4 Originality

Each article should have its own clear interpretative contribution.

Avoid preparing three superficially different articles that repeat the same commentary with minor changes.

### 6.5 Article Drafting Record

For each article, record:

- Working title.
- Original literary expression.
- Primary language.
- Source material.
- Contributor, where applicable.
- Draft version.
- Relevant references.
- Translation details.
- Rights assessment.
- Research ethics concerns, where applicable.
- Expected publication URL.
- Editorial status.

## 7. Source Verification

Source verification should begin during preparation rather than being postponed until publication.

### 7.1 Literary Sources

Check original texts, editions, author attribution and variant readings.

### 7.2 Linguistic Sources

Verify important vocabulary, idioms, grammatical relationships and transliteration choices.

### 7.3 Translation Sources

Identify the original translator or prepare a clearly identified new translation.

Check that the translation reflects the original meaning.

### 7.4 Historical and Cultural Sources

Verify important dates, events, names and documentary claims.

Distinguish established historical information from later interpretation or contested accounts.

### 7.5 Scientific Sources

Where an article contains substantive scientific claims, check relevant research references, theoretical claims, mathematical formulations and methodological explanations.

Scientific sources are not required for literary reflections that make no scientific assertions.

### 7.6 Source Register

Maintain a source register for substantial articles using `SOURCE_REGISTER.md`.

Do not cite sources that have not been identified or verified sufficiently for the claims being made.

## 8. Rights and Ethical Assessment

Every article should undergo the relevant rights and ethical checks.

### 8.1 Copyright

Identify third-party literary material, translations, figures, images, recordings, datasets and other protected resources.

### 8.2 Permissions

Obtain permissions where necessary and document the applicable legal basis for use.

### 8.3 Ethical Considerations

Consider privacy, consent, cultural sensitivity, confidentiality, participant protection and potential harm.

### 8.4 Interviews

Where interview material is used, follow the interview and oral-history protocol.

### 8.5 Registers

Update the relevant internal records where applicable:

- `RIGHTS_AND_PERMISSIONS_REGISTER.md`
- `ASSET_CREDITS.md`
- `SOURCE_REGISTER.md`

### 8.6 Unresolved Issues

Do not publish material with a serious unresolved rights, privacy, consent or safety concern.

## 9. Specialist Review, Where Needed

Where an article contains substantive technical, historical, linguistic or other specialist claims, consider whether specialist consultation is appropriate.

Such consultation is not a mandatory stage for every literary exploration.

### 9.1 Scope

Identify the precise claims requiring assessment.

Do not ask a reviewer to certify material outside their expertise.

### 9.2 Relevant Expertise

Different aspects of an article may require different expertise.

For example:

- Literary interpretation may benefit from linguistic or literary expertise.
- Historical attribution may require historical expertise.
- Regional vocabulary may require language-specific expertise.
- Nonlinear elasticity may require mechanics expertise.
- Wave-scattering claims may require acoustics or wave-physics expertise.
- Numerical modelling may require computational-method expertise.

### 9.3 Review Records

Record significant feedback and the editorial response where appropriate.

### 9.4 Review Disclosure

Describe specialist feedback accurately.

Do not represent informal consultation as formal journal peer review.

## 10. Editing and Revision

Each article should pass through an editorial revision stage.

### 10.1 Structural Editing

Examine the organisation, sequence, clarity and coherence of the article.

### 10.2 Literary Editing

Improve readability while preserving the meaning and character of the original work.

### 10.3 Scientific Editing

Where scientific claims occur, check terminology, qualifications, mathematical explanations and unsupported technical statements.

Scientific editing is unnecessary when an article contains no substantive scientific discussion.

### 10.4 Language Editing

Check grammar, spelling, punctuation and consistency.

### 10.5 Translation Editing

Check the original text against the translation.

### 10.6 Revision History

Record substantial revisions.

Use stable article filenames and appropriate version-control history.

### 10.7 Final Article Decision

Complete the relevant editorial decision record using `EDITORIAL_DECISION_RECORD.md`.

## 11. Weekly Collection Preparation

Once the three articles have reached an appropriate editorial stage, prepare the weekly collection page.

The collection page should represent the edition as a whole without duplicating all three articles.

### 11.1 Weekly Title

Use a meaningful title that reflects the character of the selection or a genuine editorial theme, where one exists.

The title need not force all three articles into a single subject.

Avoid misleading or exaggerated titles.

### 11.2 Introduction

Prepare a short introduction describing:

- The character of the weekly selection.
- The three literary expressions.
- Their individual emotional or intellectual directions.
- Any meaningful relationship between the articles, where one exists.
- The languages or traditions represented, where useful.

The introduction should not claim that all three articles share a connection that does not exist.

The three selections may be introduced as distinct works, each deserving its own reading.

### 11.3 Article Cards

Each article should be represented with:

- Article title.
- Short description.
- Primary language.
- Article number.
- Permanent article link.
- Relevant visual material, where available.

### 11.4 Sequence

Display the articles in the intended editorial sequence.

The sequence should remain consistent with their `entry_number` values.

### 11.5 Independent URLs

The weekly collection should link to each individual article page.

Do not rely on a single weekly page containing all article text as a substitute for the permanent article pages.

### 11.6 Collection Independence

The weekly collection should remain useful even if one article is later corrected, updated or withdrawn.

If an article becomes unavailable, update the collection page appropriately.

## 12. Weekly Metadata Coordination

The metadata of all four pages should be checked together.

### 12.1 Article Metadata

Each article should have the correct:

- `layout`.
- `title`.
- `description`.
- `date`.
- `language_id`.
- `language_code`, where required.
- `week_id`.
- `entry_number`.
- `permalink`, where explicitly used.
- Categories and tags, where supported.

### 12.2 Weekly Metadata

The weekly collection should have:

- Correct weekly identifier.
- Correct title.
- Accurate date information.
- Meaningful description.
- Appropriate layout.
- Correct collection permalink.
- Consistent article membership.

### 12.3 Shared Identifier

All three individual article pages must use the same weekly identifier as the collection page.

For example:

`week_id: "2026-W46"`

### 12.4 Article Ordering

Use the intended ordering:

`entry_number: 1`

`entry_number: 2`

`entry_number: 3`

### 12.5 Layout Compatibility

Before publication, verify the actual fields consumed by `_layouts/entry.html` and `_layouts/week.html`.

A metadata field written in front matter is not necessarily displayed automatically.

### 12.6 Language Configuration

Check that language identifiers match `_data/languages.yml`.

Do not invent new identifiers without updating the language configuration and relevant site functionality.

### 12.7 Optional Scientific Metadata

Scientific terminology should be included in article metadata only when the article genuinely contains scientific discussion.

Do not add scientific keywords to an entry simply because the editor's research interests include those subjects.

## 13. Recommended Weekly File Organisation

The publication uses the Jekyll collections configured in `_config.yml`.

Individual article files should be stored in the configured `_entries` collection directory, and weekly collection files in the configured `_weeks` collection directory.

A recommended conceptual structure is:

<escape>
_entries/
  2026-11-09-literary-exploration-one.md
  2026-11-09-literary-exploration-two.md
  2026-11-09-literary-exploration-three.md

_weeks/
  2026-W46.md
</escape>

The exact filenames should be adapted to the repository's existing naming conventions.

The permanent URL structure should follow the configured collection permalinks rather than being inferred from filenames alone.

### 13.1 Article Files

Each article should contain valid front matter and the full article content.

### 13.2 Weekly File

The weekly file should contain the collection introduction and the metadata needed by `_layouts/week.html`.

### 13.3 Supporting Assets

Images and other supporting files should be stored under the repository's established asset structure.

Do not commit confidential interview records, permission correspondence or sensitive research material to public directories.

## 14. Example Weekly Metadata

The following examples illustrate the intended relationship between one weekly collection and its three articles.

They must be adapted to the actual templates and fields supported by the repository.

### 14.1 Weekly Collection Example

```yaml
---
layout: week
title: "The Language of Memory"
description: "Three literary explorations of memory, longing and the ways human experience finds expression in language."
week_id: "2026-W46"
date: 2026-11-09
---
```

### 14.2 Article One Example

```yaml
---
layout: entry
title: "A Literary Exploration of Memory"
description: "An exploration of memory through an original literary expression."
date: 2026-11-09
week_id: "2026-W46"
entry_number: 1
language_id: "urdu"
language_code: "ur"
---
```

### 14.3 Article Two Example

```yaml
---
layout: entry
title: "Time, Absence, and Human Experience"
description: "A reflection on time, absence and the experience of loss."
date: 2026-11-10
week_id: "2026-W46"
entry_number: 2
language_id: "marathi"
language_code: "mr"
---
```

### 14.4 Article Three Example

```yaml
---
layout: entry
title: "The Quiet Persistence of Memory"
description: "A literary reflection on memory, emotional continuity and the experiences that remain with us."
date: 2026-11-11
week_id: "2026-W46"
entry_number: 3
language_id: "hindi"
language_code: "hi"
---
```

These are illustrative values, not actual publication records.

Confirm that each language identifier exists in `_data/languages.yml` and that the required fields are supported by the relevant layout.

## 15. Pre-Publication Quality Control

Each article must pass the relevant requirements in `PUBLICATION_CHECKLIST.md`.

### 15.1 Individual Article Checks

For each of the three articles:

- [ ] Article title and URL are correct.
- [ ] Original material has been verified.
- [ ] Attribution has been checked.
- [ ] Translation has been checked where applicable.
- [ ] The reflection contains no more than four concise prose paragraphs.
- [ ] The reflection has appropriate emotional and intellectual continuity.
- [ ] References are accurate and relevant.
- [ ] Scientific claims are appropriately supported, where applicable.
- [ ] Rights and permissions have been addressed.
- [ ] Ethical concerns are resolved where relevant.
- [ ] Metadata is valid.
- [ ] Accessibility has been considered.
- [ ] Article page renders correctly.
- [ ] Editorial decision is recorded.

### 15.2 Weekly Collection Checks

- [ ] Weekly title is final.
- [ ] Weekly introduction is complete.
- [ ] Correct three articles are included.
- [ ] All three articles share the correct `week_id`.
- [ ] Entry numbers are correct.
- [ ] Article links are valid.
- [ ] Article descriptions are accurate.
- [ ] Language information is consistent.
- [ ] Collection layout renders correctly.
- [ ] No unintended placeholder text remains.
- [ ] No unsupported common theme or connection is claimed.

### 15.3 Edition-Wide Checks

- [ ] The three article subjects are represented accurately.
- [ ] No article is duplicated.
- [ ] No incorrect contributor information is present.
- [ ] No artificial common theme is imposed.
- [ ] All pages have appropriate navigation.
- [ ] All required source and asset credits are present.
- [ ] No private editorial information is exposed.
- [ ] The publication edition is internally consistent.

## 16. Weekly Publication Decision

The editor should make a decision about the complete edition as well as the individual articles.

Possible outcomes include:

| Decision | Meaning |
|---|---|
| Ready | All three articles and collection page are ready |
| Ready with minor changes | Limited changes remain |
| Partial edition | Fewer than three articles are ready, and separate publication is intentionally authorised |
| Delayed | One or more substantial issues remain |
| On hold | A critical editorial, rights, ethical or technical concern remains |
| Withdrawn | The proposed edition is no longer proceeding |

### 16.1 Complete Edition

The normal intended format is three independent article pages and one weekly collection page.

### 16.2 Partial Publication

If fewer than three articles are ready, the editor may:

- Delay the complete edition.
- Publish a clearly identified partial edition if the format and editorial policy permit.
- Move the article to another edition.
- Replace an article with another suitable contribution.

Do not publish incomplete material simply to meet a calendar deadline.

### 16.3 Delayed Edition

A delayed edition should be handled transparently.

Avoid presenting a revised date as an original publication date.

## 17. Publication Sequence

Once the edition has been approved, publish the material in a controlled sequence.

### Step 1 — Finalise Article One

- Confirm final article content.
- Check front matter.
- Verify sources and permissions.
- Confirm its permanent URL.
- Prepare the repository file.

### Step 2 — Finalise Article Two

- Complete the same checks.
- Confirm its independent URL.
- Verify its weekly identifier and entry number.

### Step 3 — Finalise Article Three

- Complete all relevant checks.
- Confirm its independent URL.
- Verify metadata.

### Step 4 — Finalise Weekly Collection

- Prepare the collection introduction.
- Link all three individual article pages.
- Check sequence and descriptions.
- Verify shared metadata.

### Step 5 — Commit the Edition

Commit the new files and supporting public assets to the repository.

Use a descriptive commit message.

Example:

`Publish 2026 Week 46 literary explorations`

### Step 6 — Verify Deployment

Check the GitHub Pages deployment status.

Do not assume that a successful Git commit necessarily means that the live website has updated correctly.

### Step 7 — Inspect All Four Pages

Verify:

- Article One.
- Article Two.
- Article Three.
- Weekly collection page.

### Step 8 — Record Publication

Record publication dates, final URLs and the edition's status in the appropriate internal record.

## 18. Publication Timing and Schedule

The publication may aim for one weekly edition.

However, a weekly format should not create unnecessary pressure to publish incomplete material.

### 18.1 Flexible Scheduling

The publication date may be adjusted according to:

- Article readiness.
- Source-verification requirements.
- Translation complexity.
- Specialist feedback, where needed.
- Rights clearance.
- Ethical review.
- Technical problems.
- Editorial capacity.

### 18.2 Date Accuracy

Distinguish between:

- Draft creation date.
- Editorial approval date.
- Scheduled publication date.
- Actual publication date.
- Last substantive revision date.

Do not use a scheduled date as though it were an actual publication date.

### 18.3 Time Zone

The website configuration currently specifies:

`Asia/Kolkata`

Use this configured timezone consistently for publication-date handling unless the site configuration is deliberately changed.

### 18.4 Missed Weeks

If an edition is not ready, record the delay internally where useful.

Do not fabricate a publication date or backdate an article to create the appearance of a continuous archive.

## 19. Revision and Correction of a Weekly Edition

An article may require revision after the weekly collection has been published.

### 19.1 Individual Article Revision

An individual article may be corrected or updated without necessarily changing the entire weekly collection.

### 19.2 Collection Update

Update the weekly collection when:

- An article is added or removed.
- An article title changes.
- An article URL changes.
- A significant correction affects the edition introduction.
- The membership or order of the collection changes.

### 19.3 Historical Accuracy

Preserve the original publication date unless there is a legitimate editorial reason to correct it.

A revision date should not be misrepresented as the original publication date.

### 19.4 Withdrawal

If an article is withdrawn, determine whether the weekly collection should:

- Remove the link.
- Display a withdrawal notice.
- Provide a corrected article link.
- Retain a historical reference.
- Be updated in another appropriate way.

The action should follow the relevant correction and takedown policies.

## 20. Internal Weekly Edition Record

Use the following template for each weekly edition.

### Weekly Edition Record

**Week ID:** [YYYY-WNN]

**Edition title:** [Title]

**Date range:** [Date range]

**Planned publication date:** [Date]

**Actual publication date:** [Date]

**Responsible editor:** [Name]

### Article One

**Title:** [Title]

**Filename:** [Path]

**URL:** [URL]

**Language:** [Language]

**Entry number:** 1

**Editorial status:** [Status]

### Article Two

**Title:** [Title]

**Filename:** [Path]

**URL:** [URL]

**Language:** [Language]

**Entry number:** 2

**Editorial status:** [Status]

### Article Three

**Title:** [Title]

**Filename:** [Path]

**URL:** [URL]

**Language:** [Language]

**Entry number:** 3

**Editorial status:** [Status]

### Weekly Collection

**Title:** [Title]

**Filename:** [Path]

**URL:** [URL]

**Collection status:** [Status]

### Edition-Wide Checks

- [ ] All three articles are complete.
- [ ] All article metadata is consistent.
- [ ] Shared `week_id` is correct.
- [ ] Entry numbers are correct.
- [ ] Weekly collection is complete.
- [ ] All article links work.
- [ ] Permissions are resolved.
- [ ] Relevant ethical issues are resolved.
- [ ] Final editorial approval is recorded.
- [ ] Repository commit is complete.
- [ ] Deployment has been checked.
- [ ] All four live pages have been inspected.

**Final edition decision:** [Decision]

**Commit reference:** [Git commit hash]

**Additional notes:** [Notes]

## 21. Weekly Workflow Summary

The complete process may be represented as follows.

<escape>
Editorial planning
       |
       v
Select three Indian literary expressions
       |
       v
Preliminary source and rights assessment
       |
       v
Prepare three independent drafts
       |
       v
Literary, linguistic and cultural research
       |
       v
Translation, attribution and ethical checks
       |
       v
Optional scientific research or specialist consultation
       |
       v
Editorial revision
       |
       v
Complete individual article decisions
       |
       v
Prepare weekly collection page
       |
       v
Check shared metadata and links
       |
       v
Complete publication checklist
       |
       v
Commit repository changes
       |
       v
Verify GitHub Pages deployment
       |
       v
Inspect all four live pages
       |
       v
Record publication and maintain archive
</escape>

## 22. Weekly Edition Final Checklist

Before declaring an edition complete, confirm:

### Editorial

- [ ] Three independent literary explorations have been prepared.
- [ ] Each article has a clear interpretative contribution.
- [ ] Literary and intellectual quality is appropriate.
- [ ] The articles do not contain forced connections.
- [ ] Each reflection contains no more than four concise paragraphs.
- [ ] Emotional and intellectual continuity is maintained.
- [ ] Any shared theme is genuinely supported by the selections.

### Research and Verification

- [ ] Important literary sources have been checked.
- [ ] Translations are appropriately attributed.
- [ ] Historical and cultural claims are verified where necessary.
- [ ] Scientific claims are qualified and supported where applicable.
- [ ] Relevant uncertainties are documented.
- [ ] References are complete and identifiable.

### Rights and Ethics

- [ ] Copyright has been assessed.
- [ ] Required permissions are established.
- [ ] Consent and privacy concerns are addressed.
- [ ] Cultural sensitivities are considered.
- [ ] Relevant disclosures are complete.

### Website

- [ ] Three individual article pages exist.
- [ ] All articles have permanent URLs.
- [ ] One weekly collection page exists.
- [ ] All three articles share the correct `week_id`.
- [ ] Article sequence is correct.
- [ ] All collection links work.
- [ ] Metadata is consistent.
- [ ] Responsive and accessible presentation is considered.
- [ ] Deployment is successful.
- [ ] Live pages are inspected.

### Publication Record

- [ ] The edition decision is recorded.
- [ ] Article URLs are preserved.
- [ ] The repository commit is recorded.
- [ ] Actual publication dates are accurate.
- [ ] Outstanding editorial matters are documented.

## 23. Relationship with Other Publication Documentation

This workflow should be read alongside:

- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
- `CONTENT_LIFECYCLE.md`
- `ARTICLE_TEMPLATE.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `WEEKLY_COLLECTION_TEMPLATE.md`
- `SUBMISSION_GUIDELINES.md`
- `SUBMISSION_TEMPLATE.md`
- `PUBLICATION_CHECKLIST.md`
- `EDITORIAL_DECISION_RECORD.md`
- `RESEARCH_STANDARDS.md`
- `RESEARCH_ETHICS.md`
- `SOURCE_REGISTER.md`
- `TRANSLATION_GUIDELINES.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `RIGHTS_AND_PERMISSIONS_REGISTER.md`
- `COPYRIGHT.md`
- `ASSET_CREDITS.md`
- `DISCLOSURE_POLICY.md`
- `AI_ASSISTANCE_POLICY.md`
- `EXPERT_REVIEW_POLICY.md`
- `REVIEWER_GUIDELINES.md`
- `INTERVIEW_AND_ORAL_HISTORY_PROTOCOL.md`
- `INTERVIEW_CONSENT_FORM.md`
- `PRIVACY.md`
- `ACCESSIBILITY.md`
- `CORRECTIONS_POLICY.md`
- `TAKEDOWN_POLICY.md`
- `SECURITY.md`
- `DISCLAIMER.md`

## 24. Continuing Commitment

The weekly structure of Verse & Variable is intended to create a growing archive of independent literary explorations rooted in Indian literature.

Each article should stand on its own. Each weekly collection should bring its articles together without forcing their differences into an artificial narrative.

The publication should value the integrity of individual contributions above the pressure of a recurring schedule.

Three carefully considered literary explorations are more valuable than three articles published merely to complete a weekly count.

The long-term objective is an archive that grows through literary depth, linguistic diversity, cultural sensitivity, intellectual curiosity and responsible editorial practice.

**Three independent literary explorations. One weekly collection. An expanding archive of Indian literary voices and human experience.**

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
