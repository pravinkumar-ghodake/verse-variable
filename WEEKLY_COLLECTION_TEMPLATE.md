# Weekly Collection Template

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document provides a reusable blueprint for creating weekly literary collections on Verse & Variable.

Verse & Variable is an independent Indian literary journal focused on Indian literature across languages, traditions, and forms.

The editor's wider intellectual interests include Indian and international literature, scientific research, mechanics, philosophy, books, music, cinema, sport, and lived experience. These wider interests may inform the editorial perspective, but they do not expand the journal's publication scope or require individual selections to adopt an interdisciplinary approach.

The publication's intended weekly format consists of three independent literary explorations, each published as a separate article, accompanied by one weekly collection page.

The weekly collection serves as an editorial entry point into those articles.

It should:

- Introduce the week's literary selections.
- Identify the languages, traditions, and literary forms represented.
- Present all three explorations in a clear sequence.
- Provide direct links to their permanent article pages.
- Offer brief editorial context for the selections.
- Highlight meaningful connections where they genuinely exist.
- Preserve the independence of each individual work.
- Offer readers a coherent way to explore the week's material without imposing a common interpretation.

The collection should complement the individual articles rather than reproduce their complete contents.

## 2. Weekly Collection Structure

Each weekly collection should contain:

1. A collection title.
2. Week identification.
3. Publication date.
4. A concise collection introduction.
5. Three individual literary entries.
6. Direct links to the original articles.
7. Optional contextual notes or supplementary references, where useful.

A brief editorial perspective may be included when it adds something meaningful to the collection. It is not necessary to provide a separate synthesis of the three works.

The three explorations should remain independently meaningful.

A shared theme is welcome when it emerges naturally from the selected works, but it is not compulsory. The selections may differ in language, literary form, historical period, emotional character, and subject.

Their independence is not a weakness in the collection. It is part of its character.

## 3. File Organisation

Weekly collections belong to the Jekyll `weeks` collection.

**Recommended file location:**

`_weeks/week-YYYY-NN.md`

Example:

`_weeks/week-2026-01.md`

The corresponding collection page should use the configured weekly layout and permalink structure.

The established Jekyll configuration uses:

- Collection: `weeks`
- Layout: `week`
- Permalink pattern: `/weeks/:name/`

The article entries should use the same `week_id` value as the corresponding weekly collection.

For example:

`week-2026-01`

This shared identifier allows the weekly layout to identify and organise the relevant articles.

## 4. Weekly Collection Metadata Template

Use the following YAML frontmatter as the starting point for an individual weekly collection.

    ---
    layout: week
    title: "Week 01 — Literary Explorations"
    date: "YYYY-MM-DD"
    description: "Three independent literary explorations."
    week_id: "week-YYYY-NN"
    ---

Replace all placeholders before publication.

### Metadata conventions

| Field | Purpose |
|---|---|
| `layout` | Selects the weekly collection layout |
| `title` | Displays the collection title |
| `date` | Identifies the collection's publication date |
| `description` | Provides a concise and accurate introduction |
| `week_id` | Connects the collection with its three individual articles |

The `week_id` must match exactly across the weekly collection and all three associated article entries.

Do not assume that an article belongs to a weekly collection merely because its publication date falls within the same calendar week.

The collection relationship should be established through the explicit identifier.

## 5. Collection Title

Choose a title that represents the week's literary selections.

Two approaches are suitable.

### 5.1 Numbered Collections

A consistent numbered format can be used:

- Week 01 — Literary Explorations
- Week 02 — Voices and Reflections
- Week 03 — Poetry, Memory, and Time

This approach makes the archive predictable and easy to navigate.

### 5.2 Thematic Collections

Where the three explorations share a genuine literary, emotional, cultural, or intellectual connection, a thematic title may be used.

Examples:

- Between Memory and Time
- The Language of Longing
- Silence, Absence, and Expression
- The Nature of Change
- Reflections on Human Experience

A thematic title should reflect the actual content.

Avoid imposing a shared theme merely to make the collection appear more unified.

A numbered title is entirely appropriate when the selections do not share a particular theme.

## 6. Collection Introduction

### Editorial Introduction

[Write a concise introduction to the week's selection of literary works.]

The introduction may establish:

- Which literary works are included.
- The languages and literary traditions represented.
- The reason these particular works were selected.
- Relevant historical, cultural, or literary context.
- Any meaningful similarities or contrasts, where they exist.
- What readers may encounter as they explore the collection.

The introduction does not need to establish a common theme or explain an intellectual relationship between all three works.

It may simply introduce the three selections and offer a little context about their individual character.

The introduction should not summarise all three articles in detail.

It should invite readers into the collection while allowing each work to retain its own identity.

The writing should remain reflective, informative, and natural.

Avoid promotional announcements, exaggerated descriptions, and artificial thematic connections.

## 7. The Three Literary Explorations

Each weekly collection contains three individual literary explorations.

The following structure provides a standard editorial preparation model.

### Exploration 01

**Article title:** [Title]

**Original work:** [Literary work]

**Author / creator:** [Verified attribution]

**Language:** [Original language]

**Literary form:** [Ghazal, nazm, poem, song lyric, etc.]

**Article URL:** [Permanent article URL]

**Editorial introduction:** [One or two sentences introducing the work and its significance.]

### Exploration 02

**Article title:** [Title]

**Original work:** [Literary work]

**Author / creator:** [Verified attribution]

**Language:** [Original language]

**Literary form:** [Ghazal, nazm, poem, song lyric, etc.]

**Article URL:** [Permanent article URL]

**Editorial introduction:** [One or two sentences introducing the work and its significance.]

### Exploration 03

**Article title:** [Title]

**Original work:** [Literary work]

**Author / creator:** [Verified attribution]

**Language:** [Original language]

**Literary form:** [Ghazal, nazm, poem, song lyric, etc.]

**Article URL:** [Permanent article URL]

**Editorial introduction:** [One or two sentences introducing the work and its significance.]

The weekly layout may generate these article cards automatically using the shared `week_id` and the article `entry_number`.

When automatic collection rendering is enabled, do not manually create a second set of duplicate article cards in the weekly page content.

The manual descriptions above are editorial preparation fields, not additional Jekyll frontmatter requirements.

Each individual article remains the authoritative location for its original text, translation, detailed interpretation, references, and supplementary material.

## 8. Independence and Possible Relationships Between the Works

The three selections should be treated as independent literary expressions.

A weekly collection may bring together works that approach a shared idea from different directions. It may equally bring together works that are distinct in subject, emotional character, language, literary form, or historical context.

Possible relationships, where they genuinely emerge, include:

- A shared emotional question.
- Different perspectives on the same human experience.
- Contrasting literary treatments of time or memory.
- Similar imagery across different languages.
- Different historical or cultural responses to a subject.
- A meaningful contrast between poetic forms.
- Independent expressions that reveal different dimensions of a broader idea.

The relationship may be thematic, philosophical, cultural, linguistic, historical, or editorial.

It need not be scientific or interdisciplinary.

### When the Selections Are Unrelated

Not every collection requires a common intellectual theme.

Where the three works are independent selections, state this naturally or simply introduce each work on its own terms.

The diversity of the collection may itself be meaningful.

Do not manufacture similarities, comparisons, or conclusions merely to produce a unified narrative.

Do not assume that all three works must answer the same question or contribute to a single argument.

## 9. Optional Editorial Perspective

### A Note on the Collection

[Include a short editorial note only when it adds something meaningful to the collection.]

This section is optional.

It may consider:

- Why the three works were selected together.
- What their literary or cultural differences reveal.
- Whether a meaningful relationship emerges between them.
- What the diversity of their languages or forms contributes.
- A particular impression or question that remains after reading the selections.

The note may also be omitted entirely when the introduction already provides sufficient context.

There is no requirement to connect the works through a common philosophical, scientific, or interdisciplinary idea.

Scientific knowledge may inform an editorial perspective when a genuine connection arises and materially deepens the discussion. It is neither expected nor required.

The individual articles remain the primary place for their respective literary interpretations.

## 10. Language and Cultural Representation

The weekly collection should identify the languages represented accurately.

Where possible, present the original language names in a suitable form.

Examples:

| Language | Original-language name |
|---|---|
| Urdu | اردو |
| Hindi | हिन्दी |
| Marathi | मराठी |
| Kannada | ಕನ್ನಡ |
| Tamil | தமிழ் |
| Malayalam | മലയാളം |
| Telugu | తెలుగు |

Do not treat two works as belonging to the same language merely because they share a script.

Each individual article should preserve its own original language identification and typographic presentation.

The collection page should also remain accessible when original scripts or right-to-left passages are displayed together with English text.

## 11. References and Supplementary Reading

The weekly collection may include additional references when they provide useful context for its selections or overall introduction.

Examples include:

- Relevant literary archives.
- Historical or cultural studies.
- Publications about a literary tradition.
- Relevant linguistic or translation studies.
- A shared philosophical source, where genuinely applicable.
- Other material that helps readers explore the selected works.

Avoid duplicating every reference from the individual articles.

Article-specific sources should remain with their respective permanent pages.

A scientific or technical reference is appropriate only when the weekly collection itself makes a substantive scientific or technical claim that requires support.

Do not add scientific references merely to give the collection an interdisciplinary appearance.

The weekly collection should include only references that genuinely support its content.

## 12. Navigation and Archive Integration

Every weekly collection should provide a clear route to all three individual articles.

Check that:

- All three article pages exist.
- Every article uses the correct `week_id`.
- Article numbers are assigned consistently.
- The weekly page displays the articles in the intended order.
- All generated links resolve correctly.
- The collection is discoverable through the archive.
- The homepage displays the appropriate latest collection.
- Previous and next weekly navigation works where implemented.

A weekly collection should remain independently accessible through its permanent URL.

Individual articles should also remain accessible without requiring visitors to open the weekly collection first.

## 13. Weekly Quality Review

Before publishing a weekly collection, complete the following checks.

### Collection identity

- [ ] Collection title is accurate.
- [ ] Week identifier is unique.
- [ ] Publication date is correct.
- [ ] Description reflects the actual selections.

### Individual articles

- [ ] Exactly three intended articles are associated with the collection.
- [ ] All three article pages are published or ready for publication.
- [ ] All three use the same `week_id`.
- [ ] Entry numbers are correctly assigned.
- [ ] Original authors and language metadata are verified.
- [ ] Literary forms are accurately identified where applicable.
- [ ] Permanent article links are correct.

### Editorial quality

- [ ] Introduction is original and meaningful.
- [ ] The selections have been introduced accurately.
- [ ] Each work retains its independent identity.
- [ ] No artificial thematic connection has been imposed.
- [ ] Any stated relationship is supported by the actual material.
- [ ] Language and cultural representation are accurate.
- [ ] The collection does not duplicate the individual articles.

### Additional claims and references

- [ ] Contextual claims are supported where necessary.
- [ ] Supplementary references genuinely contribute to the collection.
- [ ] Scientific or technical claims, if present, are appropriately qualified and supported.
- [ ] No unrelated scientific terminology or references have been introduced.

### Technical quality

- [ ] Weekly layout renders correctly.
- [ ] Article cards display in the correct order.
- [ ] Links resolve to the intended pages.
- [ ] Collection appears in the archive.
- [ ] Homepage integration is correct.
- [ ] Responsive presentation is checked.
- [ ] Accessibility requirements are reviewed.

## 14. Publication Procedure

Follow this sequence when preparing a new weekly collection.

1. Select three suitable Indian literary expressions.
2. Verify their original sources and attribution.
3. Confirm their languages, literary forms, and relevant context.
4. Prepare the individual articles using `ARTICLE_TEMPLATE.md`.
5. Assign a unique weekly identifier.
6. Apply the same identifier to all three articles.
7. Assign entry numbers consistently.
8. Create the weekly collection file.
9. Prepare its introduction and any optional editorial note.
10. Verify the weekly layout and automatic article collection.
11. Check all three article links.
12. Publish the collection through the established GitHub Pages workflow.
13. Inspect the live weekly page and the corresponding individual articles.

The weekly collection should not be treated as complete until the three individual articles and their links have been checked.

Do not publish incomplete or unverified work solely to maintain a calendar.

## 15. Reusable Weekly Preparation Sheet

Use this compact record when planning each new collection.

**Week identifier:** [week-YYYY-NN]

**Proposed title:** [Collection title]

**Publication date:** [Date]

**Exploration 01:** [Title, author, language]

**Exploration 02:** [Title, author, language]

**Exploration 03:** [Title, author, language]

**Selection rationale:** [Why these three works were selected together, if useful.]

**Shared theme, if applicable:** [Theme / Not applicable]

**Original sources verified:** [Yes / No]

**Attribution reviewed:** [Yes / No]

**Individual articles prepared:** [0 / 1 / 2 / 3]

**References checked:** [Yes / No]

**Weekly introduction completed:** [Yes / No]

**Optional editorial note:** [Completed / Not required]

**Collection layout verified:** [Yes / No]

**Publication status:** [Planning / In preparation / Ready / Published]

## 16. Exceptions and Editorial Flexibility

The three-exploration format is the intended weekly publishing model.

However, editorial quality remains more important than mechanical completion of a schedule.

A collection may be delayed when:

- An original text requires further verification.
- Authorship remains disputed.
- Translation requires additional research.
- Copyright permission is unresolved.
- An article contains claims requiring correction.
- An article does not meet the publication's editorial standards.

Do not publish incomplete or unverified work solely to maintain a calendar.

The three selections should be chosen for their literary merit and suitability, not to satisfy a predetermined thematic or scientific allocation.

If the publishing model changes substantially in the future, update the relevant collection policies and technical configuration together.

## 17. Relationship with Other Publication Documentation

This template should be used alongside:

- `ARTICLE_TEMPLATE.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
- `SUBMISSION_GUIDELINES.md`
- `RESEARCH_STANDARDS.md`
- `SOURCE_REGISTER.md`
- `TRANSLATION_GUIDELINES.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `GLOSSARY.md`
- `ACCESSIBILITY.md`
- `COPYRIGHT.md`
- `DISCLAIMER.md`

Together, these documents establish the standards for selecting, researching, preparing, and presenting the publication's weekly literary collections.

## 18. Continuing Development

The weekly collection format may evolve as the archive expands.

New presentation features, thematic indexes, language-based navigation, and supplementary materials may be introduced where they improve the reader's experience.

The fundamental objective remains unchanged:

Three independent literary explorations, presented together without losing their individual identities.

Each week should add something meaningful to the larger Indian literary archive.

The collection provides a shared place from which to encounter the works. It does not require them to speak with one voice.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
