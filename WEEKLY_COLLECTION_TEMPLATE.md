
# Weekly Collection Template

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document provides a reusable blueprint for creating weekly literary collections on Verse & Variable.

The publication's intended weekly format consists of three independent literary explorations, each published as a separate article, accompanied by one weekly collection page.

The weekly collection serves as an editorial entry point into those articles.

It should:

- Introduce the week's literary selections.
- Establish the context of the collection.
- Present all three explorations in a clear sequence.
- Provide direct links to their permanent article pages.
- Highlight meaningful connections where they genuinely exist.
- Preserve the independence of each individual work.
- Offer readers a coherent way to explore the week's material.

The collection should complement the individual articles rather than reproduce their complete contents.

## 2. Weekly Collection Structure

Each weekly collection should contain:

1. A collection title.
2. Week identification.
3. Publication date or relevant date range.
4. A concise collection introduction.
5. Three individual article entries.
6. A brief editorial perspective connecting the selections, where appropriate.
7. Links to the original articles.
8. Relevant supplementary references, if needed.

The three explorations should remain independently meaningful.

A shared theme is welcome when it emerges naturally from the selected works, but it is not compulsory.

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
    date: YYYY-MM-DD
    description: "A concise introduction to this week's three literary explorations."
    week_id: "week-YYYY-NN"
    ---

Replace all placeholders before publication.

### Metadata conventions

| Field | Purpose |
|---|---|
| `layout` | Selects the weekly collection layout |
| `title` | Displays the collection title |
| `date` | Identifies the collection's publication date |
| `description` | Provides a concise editorial introduction |
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

Where the three explorations share a genuine intellectual or literary connection, a thematic title may be used.

Examples:

- Between Memory and Time
- The Language of Longing
- Silence, Absence, and Expression
- The Nature of Change
- Reflections on Human Experience

A thematic title should reflect the actual content.

Avoid imposing a shared theme merely to make the collection appear more unified.

## 6. Collection Introduction

### Editorial Introduction

[Write a concise introduction to the week's selection of literary works.]

The introduction should establish:

- What brings the three explorations into the collection.
- The literary traditions or languages represented.
- Any meaningful similarities or contrasts.
- The broader ideas readers may encounter.
- The reason the selections are worth exploring together.

The introduction should not summarise all three articles in detail.

It should invite readers into the collection while allowing each work to retain its own character.

The writing should remain reflective, informative, and natural.

Avoid promotional announcements or exaggerated descriptions.

## 7. The Three Literary Explorations

Each weekly collection contains three individual literary explorations.

The following structure provides a standard presentation model.

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

## 8. Editorial Relationship Between the Three Works

A weekly collection may contain literary works that approach a shared idea from different directions.

However, their relationship should be established through careful interpretation rather than forced classification.

Possible relationships include:

- A shared emotional question.
- Different perspectives on the same human experience.
- Contrasting literary treatments of time or memory.
- Similar imagery across different languages.
- Different historical or cultural responses to a theme.
- A meaningful contrast between poetic forms.
- Independent expressions that reveal different dimensions of a broader idea.

The relationship may be thematic, philosophical, cultural, linguistic, or entirely editorial.

### When the Selections Are Unrelated

Not every collection requires a common intellectual theme.

Where the three works are independent selections, state this naturally.

The diversity of the collection may itself be meaningful.

Do not manufacture similarities merely to produce a concluding synthesis.

## 9. Weekly Editorial Perspective

### A Shared Reflection

[Write a short reflection on the relationship between the week's explorations, where appropriate.]

This section may consider:

- What the selections reveal collectively.
- How their approaches differ.
- Whether they raise related philosophical questions.
- What their cultural and linguistic differences contribute.
- Whether a meaningful interdisciplinary connection emerges.

The reflection should remain secondary to the individual articles.

It should not introduce scientific claims that have not been properly established.

A scientific connection may be explored when the literary material supports it, but it is not compulsory.

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

The weekly collection may include additional references when they provide useful context for the three selections as a group.

Examples include:

- Relevant literary archives.
- Historical or cultural studies.
- A publication about a literary tradition.
- A shared philosophical source.
- A relevant scientific review or research article.

Avoid duplicating every reference from the individual articles.

Article-specific sources should remain with their respective permanent pages.

The weekly collection should include only references that genuinely support its overall introduction or editorial reflection.

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
- [ ] Author and language metadata are verified.
- [ ] Permanent article links are correct.

### Editorial quality

- [ ] Introduction is original and meaningful.
- [ ] No artificial thematic connection has been imposed.
- [ ] Each work retains its independent identity.
- [ ] Shared reflection is supported by the actual material.
- [ ] Scientific claims are appropriately qualified.
- [ ] Language and cultural representation are accurate.

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

1. Identify the three literary explorations.
2. Verify their original sources and attribution.
3. Prepare the individual articles using `ARTICLE_TEMPLATE.md`.
4. Assign a unique weekly identifier.
5. Apply the same identifier to all three articles.
6. Assign entry numbers consistently.
7. Create the weekly collection file.
8. Prepare its introduction and editorial perspective.
9. Verify the weekly layout and automatic article collection.
10. Check all three article links.
11. Publish the collection through the established GitHub Pages workflow.
12. Inspect the live weekly page and the corresponding individual articles.

The weekly collection should not be treated as complete until the three individual articles and their links have been checked.

## 15. Reusable Weekly Preparation Sheet

Use this compact record when planning each new collection.

**Week identifier:** [week-YYYY-NN]

**Proposed title:** [Collection title]

**Publication date:** [Date]

**Exploration 01:** [Title, author, language]

**Exploration 02:** [Title, author, language]

**Exploration 03:** [Title, author, language]

**Shared theme, if applicable:** [Theme]

**Original sources verified:** [Yes / No]

**Attribution reviewed:** [Yes / No]

**Individual articles prepared:** [0 / 1 / 2 / 3]

**References checked:** [Yes / No]

**Weekly introduction completed:** [Yes / No]

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
- Scientific claims require correction.
- An article does not meet the publication's editorial standards.

Do not publish incomplete or unverified work solely to maintain a calendar.

If the publishing model changes substantially in the future, update the relevant collection policies and technical configuration together.

## 17. Relationship with Other Publication Documentation

This template should be used alongside:

- `ARTICLE_TEMPLATE.md`
- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
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

Each week should add something meaningful to the larger archive.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
