# Article Template

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document provides the standard preparation template for individual literary explorations published in Verse & Variable.

Every exploration should have its own permanent article page and should contribute independently to the larger archive.

The template establishes a consistent structure for:

- Article identification and metadata.
- Original literary material.
- Transliteration and pronunciation guidance, where appropriate.
- Translation and attribution.
- Literary and cultural context.
- Original editorial reflection.
- Optional references and supplementary material.
- Editorial, copyright and technical verification.

The template should be adapted to the nature of each literary work without compromising the publication's fundamental standards.

The literary expression is the foundation of every article. The reflection should follow its language, imagery, emotional movement and intellectual possibilities rather than conform to a predetermined interpretive structure.

## 2. Article File Organisation

Individual articles belong to the Jekyll `entries` collection.

**Recommended file location:**

`_entries/<article-slug>.md`

Use descriptive, lowercase filenames with hyphens separating words.

Examples:

- `a-ghazal-on-time-and-memory.md`
- `the-poetry-of-impermanence.md`
- `a-marathi-reflection-on-human-nature.md`

Avoid spaces, unnecessary punctuation, and ambiguous filenames.

Each entry should have a permanent URL generated through the collection's configured permalink structure.

## 3. Article Metadata Template

The following is a reusable YAML frontmatter starting point.

Replace the placeholders before creating an actual article. Include optional attribution and pronunciation fields only where relevant and supported by the existing entry layout.

```yaml
---
layout: entry
title: "Article Title"
date: YYYY-MM-DD
description: "A concise and accurate description of the literary exploration."

week_id: "week-YYYY-NN"
entry_number: 1

language_id: "urdu"
language_code: "ur"

work_title: "Original Literary Work"
literary_form: "Ghazal"
author_name: "Original Author or Poet"

original_text: |
  [Insert the verified original literary expression.]

transliteration: |
  [Insert transliteration, where appropriate.]

pronunciation_guide: |
  [Insert an additional pronunciation guide, where appropriate.]

translation: |
  [Insert English translation.]

---
```

### 3.1 Essential Fields

| Field | Purpose |
|---|---|
| `layout` | Selects the individual article layout |
| `title` | Title of the published exploration |
| `date` | Article publication date |
| `description` | Concise description of the article |
| `week_id` | Associates the article with its weekly collection |
| `entry_number` | Establishes its position within the weekly collection |
| `language_id` | Identifies the language using the site's language metadata |
| `language_code` | Provides the relevant language code |
| `original_text` | Contains the original literary expression |

The following fields should be included when relevant and supported by the article layout:

- `literary_form`
- `work_title`
- `author_name`
- `transliteration`
- `translation`
- `pronunciation_guide`

### 3.2 Additional Metadata

Where relevant, individual entries may also contain:

- `translator_name`
- `translator`
- `lyricist`
- `composer`
- `performer`
- `source`
- `source_url`
- `pronunciation_language`
- `transliteration_label`
- `categories`
- `tags`

These additional fields should be included consistently with the actual requirements of the article layout and associated components.

Do not invent metadata merely to complete an empty field.

**Important:** Keep `week_id`, `entry_number`, `language_id`, and other layout-dependent fields consistent with `_config.yml`, `_data/languages.yml`, `_layouts/entry.html`, and `_layouts/week.html`. This documentation template does not change the existing Jekyll layout's expected field names.

## 4. Article Title

Choose a title that captures the central literary or reflective direction of the exploration.

A good title should be:

- Meaningful.
- Descriptive.
- Specific to the selected work.
- Natural rather than promotional.
- Suitable for independent discovery.
- Consistent with the publication's editorial voice.

The title of the original literary work and the title of the accompanying exploration need not be identical.

Where the original title is in another language, preserve it in its original script where appropriate.

The exploration title should emerge from the actual character of the work. Avoid imposing a dramatic, motivational or scientific interpretation merely to make the title appear distinctive.

## 5. Original Literary Expression

### Original Work

**Original title:** [Title]

**Language:** [Original language]

**Literary form:** [Ghazal, nazm, sher, poem, song lyric, etc.]

**Author / creator:** [Verified attribution]

**Source or edition:** [Original source]

### Original Text

[Insert the verified original expression in its original script.]

Preserve:

- Original wording.
- Meaningful line breaks.
- Couplet and stanza boundaries.
- Relevant punctuation.
- Orthographic conventions.
- Original literary structure.

Do not silently combine different editions or versions.

Where the source contains variant readings, identify the version used.

The selected passage should form a coherent literary unit. Avoid removing a line from its context when doing so changes its meaning or emotional movement.

## 6. Transliteration and Pronunciation

### Transliteration

[Insert the transliterated original text where appropriate.]

### Pronunciation Guide

[Insert an additional pronunciation guide where useful.]

Transliteration and pronunciation guidance should help readers approach the original expression while preserving its relationship with the source language.

They should:

- Follow a consistent transliteration approach.
- Preserve meaningful distinctions between words.
- Avoid misleading pronunciation representations.
- Remain clearly distinguishable from the English translation.
- Respect the original language and its pronunciation conventions.

Where multiple scripts or transliteration forms are used, label them clearly so readers can distinguish between transliteration and pronunciation assistance.

Where transliteration or an additional pronunciation guide does not add meaningful value, it may be omitted.

## 7. English Translation

### English Translation

[Insert the English translation.]

**Translation status:** [Original translation / Published translation / Adapted translation]

**Translator:** [Name, where applicable]

**Translation source:** [Publication or source, where applicable]

The translation should communicate the meaning and literary character of the original as faithfully as practical.

Important ambiguities, cultural expressions and translation decisions may be explained in a short translator's note.

Do not present an adapted translation as an unchanged literal translation.

The English rendering should help readers approach the original expression without implying that every linguistic, poetic or cultural nuance can be transferred exactly.

## 8. Attribution and Context

### Attribution

Record relevant creative contributions accurately.

| Role | Name |
|---|---|
| Poet / Author | [Name] |
| Lyricist | [Name, if applicable] |
| Composer | [Name, if applicable] |
| Singer / Performer | [Name, if applicable] |
| Translator | [Name, if applicable] |
| Publisher / Original source | [Source, if applicable] |

Remove roles that are not relevant to the selected work.

### Contextual Notes

[Include concise historical, cultural, literary or linguistic information where it contributes to understanding the work.]

This section should not become an unnecessary biography or a generic introduction.

Include only information that has a meaningful relationship with the selected expression.

Context should illuminate the literary work rather than replace direct engagement with it.

## 9. Original Editorial Reflection

The reflection is the principal interpretive contribution of an individual article.

It should arise from genuine engagement with the selected literary expression and develop a meaningful emotional, literary, philosophical or intellectual exploration.

**Length: No more than four concise English prose paragraphs.**

Fewer paragraphs are entirely acceptable. A reflection should never be artificially expanded to meet a paragraph count.

The writing should have emotional and intellectual continuity. Its direction should emerge from the selected work rather than from a prescribed scientific, philosophical or motivational framework.

### A Possible Movement of Thought

The following four movements may help guide the writing. They are not a compulsory four-paragraph structure. Two or more may naturally belong together, and some may receive little attention or be unnecessary for a particular work.

**1. The Encounter**

Begin with the poem's own imagery, voice, atmosphere, emotion or central tension. Let the reader enter the literary world rather than beginning with an abstract explanation.

**2. The Unfolding**

Explore what happens within that image or expression. Follow its emotional movement, contradictions, subtleties and human significance.

**3. The Personal Perspective**

Allow the editor's own observations, experiences, philosophical questions and wider intellectual interests to enter naturally. Scientific knowledge may contribute when it genuinely deepens the reading, but it is neither expected nor required.

**4. The Lasting Thought**

Arrive at an honest emotional or intellectual understanding. Allow the reflection to reach a natural conclusion without forcing a moral, a technical result or an artificial connection.

### Writing Considerations

The reflection should:

- Remain closely connected to the original expression.
- Develop rather than merely repeat its translation.
- Preserve its emotional and literary character.
- Maintain a natural progression of thought.
- Allow personal observations to emerge without dominating the work.
- Respect ambiguity and multiple possible interpretations.
- Avoid unnecessary technical explanations.
- Avoid forced scientific analogies or predetermined conclusions.
- Remain concise without sacrificing meaningful depth.

A reflection may remain entirely within literature, language, philosophy, relationships, memory, society or human experience.

There is no expectation that every article must contain an interdisciplinary connection.

## 10. Optional Scientific Context and Verification

Complete this section only when an article contains substantive scientific discussion, makes specific scientific claims or uses technical concepts that require clarification or verification.

**Scientific subject:** [Subject, where applicable]

**Relevant discipline:** [Discipline]

**Concept discussed:** [Specific concept]

**Scientific status:** [Established principle / Theoretical prediction / Numerical observation / Experimental finding / Hypothesis / Analogy]

**Supporting references:** [Source identifiers, where applicable]

**Relevant assumptions or limitations:** [Notes, where applicable]

Scientific terminology should be used precisely.

A literary similarity does not establish a physical mechanism, and a numerical simulation does not automatically constitute experimental validation.

Where a connection is metaphorical or conceptual rather than a scientific claim, that distinction should be clear.

Scientific discussion should be included only when it adds genuine value to the literary reflection. A purely literary or human-centred article does not need a scientific section, scientific references or a technical explanation.

## 11. References and Further Reading

Include identifiable and relevant sources that have actually been consulted.

### Literary Sources

1. [Original literary work or authoritative edition.]
2. [Relevant literary publication or archive.]

### Linguistic and Translation Sources

1. [Dictionary, linguistic reference or translation source.]
2. [Relevant scholarly work.]

### Historical and Cultural References

1. [Relevant historical or cultural source.]

### Scientific References

1. [Author, title, publication, year, DOI or stable URL.]
2. [Additional relevant research.]

### Further Reading

[Optional references that provide useful additional context.]

Include only the categories relevant to the article. Do not create empty reference sections or add scientific references merely to complete a template.

For detailed research records, follow `SOURCE_REGISTER.md`.

## 12. Copyright and Permissions

Before publishing the article, establish the rights status of the original literary expression and any separately reproduced material.

Record, where relevant:

- Original work copyright status.
- Translation copyright status.
- Quotation or reproduction basis.
- Permission, where required.
- Third-party illustrations or recordings.
- Required attribution.
- Relevant source links.

Public accessibility does not automatically establish permission to reproduce a protected work.

Refer to `COPYRIGHT.md` and `ASSET_CREDITS.md`.

## 13. Article Metadata and Discovery

Each article should have accurate information supporting its presentation and discovery.

Check:

- Descriptive title.
- Concise article description.
- Correct language identification.
- Correct collection identifier.
- Correct entry number.
- Appropriate canonical URL.
- Relevant original-work attribution.
- Suitable social and search metadata.

Metadata should accurately represent the literary work and the actual content of its reflection.

Avoid misleading keywords, exaggerated descriptions, unrelated scientific terminology or unsupported claims.

## 14. Optional Supplementary Elements

Depending on the literary work, an article may include additional material such as:

- Historical photographs.
- Original manuscripts or archival images.
- Musical context.
- Audio or video references.
- Author biographies.
- Translator's notes.
- Additional literary comparisons.
- Relevant historical or cultural material.
- Scientific illustrations or conceptual diagrams, where genuinely relevant.
- Equations or technical explanations, where genuinely necessary.

These elements should be included only when they contribute genuine value.

A supplementary element should support the literary experience rather than distract from it or create an obligation to introduce another discipline.

All supplementary material must comply with the publication's copyright, asset attribution and accessibility requirements.

They do not count towards the prose reflection.

## 15. Final Article Review

Before publishing an individual exploration, complete the following checks.

### Literary Accuracy

- [ ] Original work identified.
- [ ] Original text verified.
- [ ] Literary form correctly identified.
- [ ] Author attribution checked.
- [ ] Original structure preserved.
- [ ] Selected passage forms a coherent literary unit.

### Translation

- [ ] Transliteration verified, where applicable.
- [ ] Pronunciation guidance checked, where applicable.
- [ ] Translation checked against the original.
- [ ] Translator correctly identified.
- [ ] Adaptations clearly distinguished.
- [ ] Important ambiguity preserved or explained.

### Editorial Reflection

- [ ] Reflection begins from the literary expression.
- [ ] No more than four concise prose paragraphs.
- [ ] Shorter form used where sufficient.
- [ ] Emotional and intellectual continuity maintained.
- [ ] Original interpretation developed rather than merely summarised.
- [ ] No unnecessary repetition.
- [ ] Cultural context respected.
- [ ] Personal observations contribute naturally.
- [ ] No forced interdisciplinary or scientific connection.
- [ ] Conclusion feels natural rather than predetermined.

### Scientific Accuracy, Where Applicable

- [ ] Scientific concepts used precisely.
- [ ] Analogy, metaphor and physical claims distinguished.
- [ ] Scientific claims appropriately supported.
- [ ] Relevant assumptions and limitations identified.
- [ ] Numerical and experimental evidence not confused.

### References and Rights

- [ ] Relevant sources included.
- [ ] Bibliographic details checked.
- [ ] Copyright and permission requirements reviewed.
- [ ] Third-party assets attributed.
- [ ] Unverified claims qualified.

### Technical Quality

- [ ] Correct Jekyll layout.
- [ ] Correct frontmatter.
- [ ] Correct `week_id`.
- [ ] Correct `entry_number`.
- [ ] Correct language metadata.
- [ ] Correct permanent URL.
- [ ] Original script renders properly.
- [ ] Right-to-left direction works where applicable.
- [ ] Responsive presentation checked.
- [ ] Accessibility reviewed.

## 16. Weekly Collection Integration

Every article should be associated with the appropriate weekly collection.

The intended weekly format contains three independent literary explorations.

Before publication:

- Verify that the three articles use the same intended `week_id`.
- Assign entry numbers consistently.
- Confirm the order of the entries.
- Verify that the weekly page includes all three articles.
- Check that every article has its own permanent page.
- Confirm that the archive and homepage display the correct information.

The three selections should not be forced into a common scientific, philosophical or thematic framework. A weekly collection may bring together distinct literary voices and emotional worlds, allowing their differences to remain meaningful.

Do not publish a weekly collection with placeholder entries or broken article links.

## 17. Editorial Exceptions

This template is a framework, not an inflexible restriction on literary presentation.

Some works may require a different supplementary structure because of their literary form, language, historical context or source availability.

However, the following principles remain central:

- The original expression remains primary.
- Attribution must be accurate.
- Translation must be transparent.
- The reflection must contain no more than four concise prose paragraphs.
- Shorter reflections are entirely acceptable.
- Emotional and literary coherence take precedence over a prescribed structure.
- Scientific discussion is optional.
- Scientific claims must be intellectually defensible and appropriately supported.
- Copyright requirements must be respected.
- The article must remain independently meaningful.

## 18. Relationship with Other Documentation

This template should be used alongside:

- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
- `RESEARCH_STANDARDS.md`
- `SOURCE_REGISTER.md`
- `TRANSLATION_GUIDELINES.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `GLOSSARY.md`
- `COPYRIGHT.md`
- `ASSET_CREDITS.md`
- `ACCESSIBILITY.md`
- `DISCLAIMER.md`

Together, these documents establish the editorial, linguistic, research, technical and intellectual standards of Verse & Variable.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
