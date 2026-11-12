
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
- Transliteration and translation.
- Author and contributor attribution.
- Literary and cultural context.
- Four substantial paragraphs of original English commentary.
- Interdisciplinary scientific reflection, where appropriate.
- References and source documentation.
- Editorial and technical verification.

The template should be adapted to the nature of each literary work without compromising the publication's fundamental standards.

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

Replace the placeholders before creating an actual article. Optional attribution fields may be added where relevant and should use the corresponding field names expected by the existing entry layout.

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
    author: "Original Author or Poet"

    original_text: |
      [Insert the verified original literary expression.]

    transliteration: |
      [Insert transliteration, where appropriate.]

    translation: |
      [Insert English translation, where appropriate.]

    ---

### 3.1 Essential Fields

| Field | Purpose |
|---|---|
| `layout` | Selects the individual article layout |
| `title` | Title of the published exploration |
| `date` | Article publication date |
| `week_id` | Associates the article with its weekly collection |
| `entry_number` | Establishes its position within the weekly collection |
| `language_id` | Identifies the language using the site's language metadata |
| `language_code` | Provides the relevant language code |
| `original_text` | Contains the original literary expression |
| `translation` | Contains the accompanying translation, where available |
| `transliteration` | Contains the transliterated text, where appropriate |

### 3.2 Additional Metadata

Where relevant, individual entries may also contain:

- `work_title`
- `author`
- `lyricist`
- `composer`
- `performer`
- `translator`
- `source`
- `source_url`
- `description`
- `categories`
- `tags`

These additional fields should be included consistently with the actual requirements of the article layout and associated components.

Do not invent metadata merely to complete an empty field.

**Important:** Keep `week_id`, `entry_number`, `language_id`, and other layout-dependent fields consistent with `_config.yml`, `_data/languages.yml`, `_layouts/entry.html`, and `_layouts/week.html`. This documentation template does not change the existing Jekyll layout's expected field names.

## 4. Article Title

Choose a title that captures the central literary or intellectual direction of the exploration.

A good title should be:

- Meaningful.
- Descriptive.
- Specific to the selected work.
- Natural rather than promotional.
- Suitable for independent discovery.
- Consistent with the publication's editorial voice.

The title of the original literary work and the title of the accompanying exploration need not be identical.

Where the original title is in another language, preserve it in its original script where appropriate.

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

## 6. Transliteration

### Transliteration

[Insert the transliterated original text where appropriate.]

The transliteration should help readers approach the original expression while preserving its relationship with the source language.

It should:

- Follow a consistent transliteration approach.
- Preserve meaningful distinctions between words.
- Avoid misleading pronunciation representations.
- Remain clearly distinguishable from the English translation.

Where transliteration does not add meaningful value, it may be omitted.

## 7. English Translation

### English Translation

[Insert the English translation.]

**Translation status:** [Original translation / Published translation / Adapted translation]

**Translator:** [Name, where applicable]

**Translation source:** [Publication or source, where applicable]

The translation should communicate the meaning and literary character of the original as faithfully as practical.

Important ambiguities, cultural expressions, and translation decisions may be explained in a short translator's note.

Do not present an adapted translation as an unchanged literal translation.

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

[Include concise historical, cultural, literary, or linguistic information where it contributes to understanding the work.]

This section should not become an unnecessary biography or a generic introduction.

Include only information that has a meaningful relationship with the selected expression.

## 9. Principal Commentary

Every individual exploration must contain exactly four substantial paragraphs of original English commentary.

This is the principal intellectual contribution of the article.

The four paragraphs should form a coherent progression rather than four independent summaries.

### Paragraph One — The Literary Encounter

[Develop the opening interpretation.]

Introduce the literary expression through its language, emotional character, imagery, or central idea.

Explain what draws attention to the work and why it invites deeper reading.

The opening should establish a natural, reflective relationship with the original expression.

### Paragraph Two — Deeper Literary and Philosophical Exploration

[Develop the deeper interpretation.]

Examine the underlying meaning, contradictions, symbols, emotional relationships, philosophical dimensions, or cultural implications.

Engage closely with the language of the original work.

Avoid simply restating the translation or repeating the opening paragraph.

### Paragraph Three — Interdisciplinary Reflection

[Develop a meaningful scientific, mathematical, philosophical, cultural, or other interdisciplinary connection.]

Where appropriate, explore a relevant scientific concept or intellectual framework.

Potential areas include nonlinear waves, mechanics, vibrations, acoustics, metamaterials, mathematics, physics, or other fields.

Clearly distinguish between:

- Literary metaphor.
- Conceptual analogy.
- Mathematical relationship.
- Established physical principle.
- Scientific hypothesis.
- Experimental or numerical evidence.

A scientific connection is optional. Where no meaningful connection exists, continue the literary, philosophical, cultural, or human exploration instead.

### Paragraph Four — Synthesis and Reflection

[Develop the concluding reflection.]

Bring together the important dimensions of the exploration without reducing the original work to a simplistic message.

Reflect on its emotional, intellectual, philosophical, or cultural significance.

The conclusion should feel considered and natural, leaving the reader with a meaningful point of reflection.

## 10. Scientific and Interdisciplinary Notes

Complete this section when an article contains substantive scientific discussion.

**Scientific subject:** [Subject]

**Relevant discipline:** [Discipline]

**Concept discussed:** [Specific concept]

**Scientific status:** [Established principle / Theoretical prediction / Numerical observation / Experimental finding / Hypothesis / Analogy]

**Supporting references:** [Source identifiers]

**Relevant assumptions or limitations:** [Notes]

Scientific terminology should be used precisely.

A literary similarity does not establish a physical mechanism, and a numerical simulation does not automatically constitute experimental validation.

Where the interdisciplinary connection is entirely metaphorical, state that clearly.

## 11. References and Further Reading

### Literary Sources

1. [Original literary work or authoritative edition.]
2. [Relevant literary publication or archive.]

### Linguistic and Translation Sources

1. [Dictionary, linguistic reference, or translation source.]
2. [Relevant scholarly work.]

### Historical and Cultural References

1. [Relevant historical or cultural source.]

### Scientific References

1. [Author, title, publication, year, DOI or stable URL.]
2. [Additional relevant research.]

### Further Reading

[Optional references that provide useful additional context.]

Include only identifiable and relevant sources that have actually been consulted.

For detailed research records, follow `SOURCE_REGISTER.md`.

## 12. Copyright and Permissions

Before publishing the article, establish the rights status of the original literary expression and any separately reproduced material.

Record:

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

Avoid misleading keywords, exaggerated descriptions, or unsupported claims.

## 14. Optional Supplementary Elements

Depending on the literary work, an article may include additional material such as:

- Historical photographs.
- Original manuscripts or archival images.
- Musical context.
- Audio or video references.
- Scientific illustrations.
- Conceptual diagrams.
- Relevant equations.
- Author biographies.
- Translator's notes.
- Additional literary comparisons.

These elements should be included only when they contribute genuine value.

All supplementary material must comply with the publication's copyright, asset attribution, and accessibility requirements.

They do not count towards the four principal commentary paragraphs.

## 15. Final Article Review

Before publishing an individual exploration, complete the following checks.

### Literary accuracy

- [ ] Original work identified.
- [ ] Original text verified.
- [ ] Literary form correctly identified.
- [ ] Author attribution checked.
- [ ] Original structure preserved.

### Translation

- [ ] Transliteration verified.
- [ ] Translation checked against the original.
- [ ] Translator correctly identified.
- [ ] Adaptations clearly distinguished.
- [ ] Important ambiguity preserved or explained.

### Commentary

- [ ] Exactly four substantial principal commentary paragraphs.
- [ ] Original interpretation developed.
- [ ] No unnecessary repetition.
- [ ] Cultural context respected.
- [ ] Scientific connections included only when meaningful.
- [ ] Scientific claims appropriately supported.

### References and rights

- [ ] Relevant references included.
- [ ] Bibliographic details checked.
- [ ] Copyright and permission requirements reviewed.
- [ ] Third-party assets attributed.
- [ ] Unverified claims qualified.

### Technical quality

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

Do not publish a weekly collection with placeholder entries or broken article links.

## 17. Editorial Exceptions

This template is a framework, not an inflexible restriction on literary presentation.

Some works may require a different supplementary structure because of their literary form, language, historical context, or source availability.

However, the following principles remain central:

- The original expression remains primary.
- Attribution must be accurate.
- Translation must be transparent.
- Principal commentary must contain exactly four substantial paragraphs.
- Scientific comparisons must be intellectually defensible.
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

Together, these documents establish the editorial, linguistic, research, technical, and intellectual standards of Verse & Variable.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
