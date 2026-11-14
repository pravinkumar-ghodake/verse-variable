# Article Metadata Reference

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

---

## 1. Purpose

This document defines the metadata conventions for individual literary entries and weekly collections published through Verse & Variable.

Verse & Variable is an independent Indian literary journal. Its archive is centred on Indian literary expression across languages, traditions, and forms.

The editor's wider intellectual interests include Indian and international literature, scientific research, mechanics, philosophy, books, music, cinema, sport, and lived experience. These interests may inform the editor's perspective, but they do not expand the journal's publication scope or require individual articles to adopt an interdisciplinary approach.

Metadata connects the publication's collections, identifies original languages, supports article presentation, and enables consistent navigation and discovery.

This reference is intended to prevent inconsistent frontmatter, incorrect language identification, broken collection relationships, and unnecessary duplication of metadata.

## 2. Publication Architecture

The Jekyll configuration establishes the following collections:

| Collection | Purpose | Layout | URL structure |
|---|---|---|---|
| `entries` | Individual literary explorations | `entry` | `/entries/:path/` |
| `weeks` | Weekly collections containing associated literary explorations | `week` | `/weeks/:name/` |

The relevant configuration is maintained in `_config.yml`.

Both collections are configured to generate individual output pages.

The collection layouts are responsible for presenting their respective content.

### 2.1 Individual Entries

Each literary exploration belongs to the `entries` collection.

An entry should have:

- A descriptive title.
- A unique filename.
- An appropriate publication date.
- A valid weekly collection identifier.
- An entry number.
- Correct language metadata.
- Its original literary material, where applicable.
- Translation and transliteration where appropriate.
- Accurate original-author and contributor attribution.

Each entry has an independent permanent page.

### 2.2 Weekly Collections

Each weekly collection belongs to the `weeks` collection.

A weekly collection should have:

- A descriptive title.
- A unique weekly identifier.
- A publication date.
- A concise and accurate description.

The weekly layout identifies associated entries through the shared `week_id` value and sorts them using `entry_number`.

Each weekly collection brings together three independent literary explorations. The selections do not need to share a common theme, scientific connection, or disciplinary perspective.

The identifier and ordering fields are therefore particularly important.

## 3. YAML Frontmatter

Jekyll uses YAML frontmatter at the beginning of a Markdown document to define page metadata.

Frontmatter must begin and end with three hyphens.

Example:

    ---
    layout: entry
    title: "A Literary Exploration"
    date: 2026-11-12
    ---

The frontmatter should appear before the article's Markdown content.

### 3.1 General Rules

- Use valid YAML syntax.
- Use consistent indentation.
- Quote strings containing special YAML characters where appropriate.
- Use descriptive field names.
- Avoid duplicate keys.
- Use ISO-formatted dates where possible.
- Do not leave placeholder values in published entries.
- Keep field names consistent with those expected by the layouts and included templates.
- Do not introduce additional fields merely because they seem useful; first establish their editorial or technical purpose.

For multiline literary text, use YAML block scalars.

Example:

    original_text: |
      First line of the original expression.
      Second line of the original expression.

The `|` indicator preserves line breaks in the stored text.

This is useful for poetry, couplets, stanzas, and other literary structures.

## 4. Individual Article Metadata

The following example provides the recommended baseline structure for an individual article.

    ---
    layout: entry

    title: "A Literary Exploration"
    date: 2026-11-12
    description: "A reflective exploration of an Indian literary expression."

    week_id: "week-2026-46"
    entry_number: 1

    language_id: "urdu"
    language_code: "ur"

    work_title: "Original Literary Work"
    author_name: "Original Author"
    literary_form: "Ghazal"

    original_text: |
      [Verified original literary expression.]

    transliteration: |
      [Transliteration, where appropriate.]

    pronunciation_guide: |
      [Pronunciation guidance, where appropriate.]

    translation: |
      [English translation, where appropriate.]

    ---

This is a documentation example. Replace every placeholder before creating a real entry.

The example uses the principal field names established for the article presentation. Optional fields should be included only when relevant and supported by the corresponding layout or metadata include.

The actual implementation in `_layouts/entry.html` and its included templates remains the authoritative reference for what is rendered.

## 5. Core Article Fields

### 5.1 `layout`

Identifies the layout used to render the article.

**Expected value:**

`entry`

This corresponds to `_layouts/entry.html`.

### 5.2 `title`

The title displayed for the individual exploration.

Use a descriptive and meaningful title.

The article title should not be confused with the original literary work's title unless they are intentionally identical.

### 5.3 `date`

The publication date of the individual article.

Recommended format:

`YYYY-MM-DD`

Example:

`2026-11-12`

This date identifies the article's publication chronology. It should not automatically be interpreted as the date on which the original literary work was composed or published.

### 5.4 `description`

A concise description of the article.

It should accurately represent the literary subject and help readers understand what the exploration discusses.

Avoid promotional language, unsupported claims, and unnecessary technical terminology.

Where the site's metadata templates reference this field, it may also contribute to search and social descriptions.

### 5.5 `week_id`

Connects the individual article to its corresponding weekly collection.

Example:

`week-2026-46`

The value must match the `week_id` of the intended weekly collection exactly.

Do not use different spellings or inconsistent numbering for the same collection.

### 5.6 `entry_number`

Identifies the article's position within the weekly collection.

The intended values are:

| Entry number | Position |
|---|---|
| `1` | First exploration |
| `2` | Second exploration |
| `3` | Third exploration |

The weekly layout uses this field to establish the order of associated entries.

Use a numeric YAML value rather than a quoted string.

Correct:

`entry_number: 1`

Avoid:

`entry_number: "1"`

## 6. Language Metadata

Language metadata ensures that the original literary expression is identified correctly.

The publication maintains language information in:

`_data/languages.yml`

The individual entry references that information using `language_id` and `language_code`.

### 6.1 `language_id`

Identifies the corresponding language entry in the publication's language metadata.

The intended language identifiers are:

| Language | Expected identifier |
|---|---|
| Urdu | `urdu` |
| Hindi | `hindi` |
| Marathi | `marathi` |
| Kannada | `kannada` |
| Tamil | `tamil` |
| Malayalam | `malayalam` |
| Telugu | `telugu` |

These identifiers must match the actual keys defined in `_data/languages.yml`.

Do not assume that an identifier is valid merely because its spelling appears in this document. The data file is the authoritative implementation reference.

### 6.2 `language_code`

Identifies the original language using its recognised language code.

The initial language codes are:

| Language | Code |
|---|---|
| Urdu | `ur` |
| Hindi | `hi` |
| Marathi | `mr` |
| Kannada | `kn` |
| Tamil | `ta` |
| Malayalam | `ml` |
| Telugu | `te` |

Use the appropriate ISO 639-1 code where available.

Where script-specific identification is necessary, a more specific BCP 47 language tag may be used in the relevant HTML presentation.

### 6.3 Language and Script Are Different

A language and its writing system should not be treated as the same metadata category.

For example:

- Urdu uses an Arabic-derived script.
- Hindi and Marathi both use Devanagari.
- Kannada uses the Kannada script.
- Tamil uses the Tamil script.
- Malayalam uses the Malayalam script.
- Telugu uses the Telugu script.

The fact that Hindi and Marathi share a script does not make them the same language.

### 6.4 Right-to-Left Metadata

Urdu requires right-to-left presentation.

Its direction should be determined through the language configuration and appropriate HTML direction metadata.

The direction of the original text should not be inferred solely from its visual alignment.

Refer to `ACCESSIBILITY.md` and `LANGUAGE_STYLE_GUIDE.md`.

## 7. Literary Content Fields

The following fields describe the original literary material and its presentation.

### 7.1 `original_text`

Contains the verified original literary expression.

Use the original writing system wherever possible.

Preserve:

- Original wording.
- Meaningful line breaks.
- Couplets and stanzas.
- Important punctuation.
- Relevant orthographic conventions.

Do not silently combine different versions of a literary work.

### 7.2 `transliteration`

Contains a Latin-script or other transliterated representation of the original text.

Use this field when transliteration materially helps readers.

It should follow a consistent approach and should not be confused with translation.

### 7.3 `pronunciation_guide`

Provides pronunciation guidance where it is useful to understanding or reading the original expression.

This field is optional.

It may be especially useful for regional vocabulary, dialect forms, unfamiliar pronunciations, or words whose written form does not fully communicate their spoken character.

Do not duplicate the entire transliteration merely to populate this field.

### 7.4 `translation`

Contains the accompanying translated text.

Where appropriate, use an English translation.

Identify the translation's origin and translator accurately.

An original translation, published translation, and adaptation should not be treated as interchangeable.

### 7.5 `work_title`

Identifies the title of the original literary work, where known.

This is distinct from the article's `title`.

The two values may be identical when the article directly adopts the original work's title, but they serve different metadata purposes.

### 7.6 `author_name`

Identifies the original author, poet, or creator of the literary work.

Use an established and verifiable attribution where available.

For traditional, anonymous, or disputed material, use appropriately qualified wording rather than inventing a name.

The field should not be used to identify the article contributor unless the contributor is also the original creator.

### 7.7 `literary_form`

Identifies the literary or textual form of the original expression.

Examples include:

- Ghazal.
- Nazm.
- Rubai.
- Poem.
- Song.
- Folk expression.
- Prose passage.
- Other accurately described literary forms.

Use a specific form when it can be established. Do not assign a form merely for categorisation convenience.

### 7.8 Multiline Content

Use YAML block scalar notation to preserve the structure of literary material.

Example:

    original_text: |
      First poetic line.
      Second poetic line.

For multiple stanzas:

    original_text: |
      First line of the first stanza.
      Second line of the first stanza.

      First line of the second stanza.
      Second line of the second stanza.

Verify the resulting output in the live article because Markdown rendering and HTML whitespace behaviour may affect the final presentation.

## 8. Supplementary Literary Metadata

Individual articles may require additional attribution and source fields.

Possible supplementary fields include:

| Field | Meaning |
|---|---|
| `lyricist` | Writer of the lyrics |
| `composer` | Composer of the musical work |
| `performer` | Singer or performer |
| `translator` | Translator of an existing translation |
| `source` | Original or authoritative source description |
| `source_url` | Source link |

These fields are supplementary metadata conventions.

Their inclusion in YAML does not automatically display them on the published page.

Before using them systematically, confirm that `_layouts/entry.html` or the relevant metadata include actually references each field.

For example, a field named `composer` will remain available as frontmatter data but will not appear automatically unless the template renders it.

### 8.1 Creative Role Accuracy

Keep the roles distinct.

A singer is not automatically the lyricist.

A composer is not automatically the author of the written lyrics.

A published translator should not be identified as the original author.

A contributor's original translation should be identified accurately rather than attributed to another translator.

Where attribution is uncertain, use appropriately qualified wording rather than inventing a name.

## 9. Categorisation and Tags

Categories and tags may be useful for archive navigation and thematic discovery.

Potential literary and thematic examples include:

- Poetry.
- Ghazal.
- Memory.
- Time.
- Love.
- Nature.
- Philosophy.
- Language.
- Identity.
- Human experience.

A scientific or technical concept may be used as a tag only when it is genuinely relevant to the particular literary exploration and is discussed substantively.

Scientific terminology should not be added simply to make an entry appear interdisciplinary or to repeat the editor's research profile.

Do not introduce an uncontrolled collection of inconsistent tags.

A future taxonomy should establish standard category names and rules for their use.

Until a dedicated taxonomy is implemented, tags should be added only when they have a clear purpose and are supported by the site's actual templates.

## 10. Weekly Collection Metadata

The following example illustrates the baseline metadata for an individual weekly collection.

    ---
    layout: week

    title: "Week 46 — Literary Explorations"
    date: 2026-11-12
    description: "Three independent literary explorations."

    week_id: "week-2026-46"

    ---

### 10.1 `layout`

Expected value:

`week`

This corresponds to `_layouts/week.html`.

### 10.2 `title`

The title displayed on the weekly collection page.

It may use a numbered or thematic format.

A thematic title should reflect a genuine relationship between the selected works. A shared theme should not be invented simply because the entries belong to the same weekly collection.

### 10.3 `date`

The publication date associated with the weekly collection.

Use an unambiguous date format.

### 10.4 `description`

A concise introduction to the collection.

It should describe the actual selections rather than claim a thematic, scientific, or disciplinary connection that does not exist.

Three independent literary voices may be introduced without suggesting that they share a single intellectual subject.

### 10.5 `week_id`

The unique identifier used to associate the collection with its individual entries.

The same identifier must appear in all three associated articles.

## 11. Weekly Relationship and Ordering

The relationship between a weekly collection and its individual entries is established through two fields:

- `week_id`
- `entry_number`

Example:

| Page | `week_id` | `entry_number` |
|---|---|---|
| Weekly collection | `week-2026-46` | Not required |
| First article | `week-2026-46` | `1` |
| Second article | `week-2026-46` | `2` |
| Third article | `week-2026-46` | `3` |

The weekly layout uses the shared identifier to find matching entries and their entry numbers to establish their display order.

A mismatched identifier can cause an article to be omitted from its intended weekly collection.

A missing or duplicated entry number can produce unintended ordering.

### 11.1 Recommended Verification

Before publishing:

1. Confirm the weekly collection identifier.
2. Confirm all three articles use precisely the same identifier.
3. Assign entry numbers 1, 2, and 3.
4. Check that all three individual pages exist.
5. Inspect the generated weekly page.
6. Confirm that the entries appear in the correct sequence.

## 12. Field Types and YAML Values

Use appropriate YAML types.

| Type | Example | Appropriate use |
|---|---|---|
| String | `language_id: "urdu"` | Text values |
| String | `week_id: "week-2026-46"` | Identifiers |
| Integer | `entry_number: 1` | Ordering |
| Date | `date: 2026-11-12` | Publication chronology |
| Multiline string | `original_text: \|` | Original poetry and passages |
| Boolean | `published: true` | Only where explicitly supported |
| List | `tags: [poetry, ghazal]` | Only where a taxonomy is implemented |

Do not introduce arbitrary data types or field names without checking their intended use.

## 13. Permalinks and URL Conventions

The current publication configuration establishes these collection permalink patterns:

**Individual entries:**

`/entries/:path/`

**Weekly collections:**

`/weeks/:name/`

The generated URL depends on the collection configuration and the document's filename.

For example:

`_entries/example-literary-exploration.md`

is intended to produce a URL under the entries collection.

Similarly:

`_weeks/week-2026-46.md`

is intended to produce a URL under the weeks collection.

Avoid adding custom `permalink` frontmatter unless a specific URL override is intentional.

Any permalink modification should be checked against internal navigation, sitemap generation, canonical metadata, and existing links.

## 14. Metadata and Search Visibility

Metadata may support how search engines and other systems understand the publication.

Important fields include:

- `title`
- `description`
- `date`
- Language information.
- Relevant original-author attribution.
- Canonical URL generated by the layout or metadata include.

The actual output depends on `_includes/head.html` and other implemented templates.

Do not assume that creating a field automatically creates structured data or search metadata.

Verify the rendered HTML source after publication.

Entry-level metadata should describe the literary work and the actual content of the article.

The editor's broader scientific research identity should remain represented in the appropriate author profile, biography, structured data, and research-related pages. It should not be copied indiscriminately into individual literary entries.

Metadata should remain accurate and descriptive rather than optimised through misleading, repetitive, or unrelated keywords.

## 15. Metadata Errors to Avoid

The following mistakes should be avoided.

### Incorrect weekly identifiers

Using a different `week_id` between an article and its weekly collection.

### Incorrect entry ordering

Using duplicate entry numbers or non-numeric values.

### Inconsistent language identifiers

Using an identifier that does not match `_data/languages.yml`.

### Confusing dates

Using the original literary work's historical date as the article publication date without a clear distinction.

### Unsupported attribution fields

Adding names or creative roles that have not been verified.

### Confusing contributor and original author

Using the article contributor's name as the original poet's name, or vice versa.

### Unused metadata

Assuming that a field will appear automatically simply because it exists in YAML frontmatter.

### Unnecessary scientific metadata

Adding scientific terminology, concepts, or tags that do not materially relate to the actual literary exploration.

### Invalid YAML

Incorrect indentation, duplicate keys, malformed strings, or incorrectly formatted multiline blocks.

### Unnecessary permalink overrides

Changing URLs without checking the publication's existing permalink configuration.

## 16. Metadata Validation Checklist

Before publishing an individual entry:

### Article identity

- [ ] `layout` is correct.
- [ ] `title` is present.
- [ ] `date` is valid.
- [ ] `description` is meaningful.

### Collection relationship

- [ ] `week_id` matches the intended weekly collection.
- [ ] `entry_number` is numeric.
- [ ] Entry order is correct.
- [ ] Article filename is descriptive.

### Language information

- [ ] `language_id` matches `_data/languages.yml`.
- [ ] `language_code` is correct.
- [ ] Original text uses the correct script.
- [ ] Direction metadata works where required.

### Literary information

- [ ] Original text is verified where included.
- [ ] Transliteration is accurate where included.
- [ ] Pronunciation guidance is accurate where included.
- [ ] Translation is identified correctly where included.
- [ ] Original author and creative roles are verified.
- [ ] `literary_form` is appropriate where included.
- [ ] Supplementary fields are supported by the relevant layout.

### Sources and presentation

- [ ] Relevant sources are identified.
- [ ] Original and translated material are distinguished.
- [ ] Relevant permissions and rights are considered.
- [ ] Generated URL is correct.
- [ ] Article layout renders correctly.
- [ ] Weekly collection displays the article.
- [ ] Metadata output is inspected.

### Additional technical claims

- [ ] Scientific or technical claims, if present, are accurately represented.
- [ ] Scientific terminology is included in entry metadata only where relevant.
- [ ] No unrelated research keywords have been added.

## 17. Relationship with Other Project Files

This document should be read alongside:

- `_config.yml` — Jekyll collection and permalink configuration.
- `_data/languages.yml` — language metadata.
- `_data/site.yml` — publication configuration.
- `_layouts/entry.html` — individual article presentation.
- `_layouts/week.html` — weekly collection presentation.
- `_includes/metadata.html` — reusable attribution metadata.
- `_includes/head.html` — page metadata and search presentation.
- `ARTICLE_TEMPLATE.md` — article preparation template.
- `WEEKLY_COLLECTION_TEMPLATE.md` — weekly collection template.
- `LANGUAGE_STYLE_GUIDE.md` — language and typography conventions.
- `EDITORIAL_POLICY.md` — editorial requirements.

When the actual implementation changes, this reference should be updated accordingly.

## 18. Future Metadata Development

As the archive grows, additional metadata capabilities may be introduced.

Potential developments include:

- Dedicated contributor records.
- Structured literary-form classifications.
- Controlled thematic tags.
- Translation provenance fields.
- Original publication and edition details.
- Source identifiers.
- Article revision history.
- Cross-language relationships.
- More detailed structured metadata for search and discovery.
- Contextual scientific references where a particular literary exploration genuinely requires them.

Additional fields should be introduced only when they serve a clear editorial or technical purpose and are supported by the relevant templates.

The objective is to maintain a coherent and dependable metadata architecture that can support a substantial multilingual Indian literary archive without imposing unnecessary metadata on individual works.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
