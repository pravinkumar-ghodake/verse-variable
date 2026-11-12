
# Categories and Tags

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the classification and tagging conventions for the Verse & Variable archive.

The publication explores literary expressions across multiple languages and connects them, where meaningful, with philosophy, cultural history, mathematics, mechanics, physics, and other areas of knowledge.

As the number of articles increases, a consistent classification system will help readers:

- Discover articles by literary form.
- Explore recurring themes.
- Browse related intellectual subjects.
- Identify interdisciplinary connections.
- Navigate material across languages.
- Find related explorations without relying exclusively on publication dates.

The classification system should improve discovery without reducing complex literary works to simplistic labels.

## 2. Fundamental Classification Principles

The classification system follows these principles.

### 2.1 Meaningful Classification

Every category or tag should communicate something useful about the article.

Do not add labels merely to increase the number of search terms associated with an article.

### 2.2 Controlled Vocabulary

Use established terms consistently.

Avoid creating multiple spellings, synonyms, or near-identical tags for the same concept.

For example, use one preferred term for a concept rather than separately creating:

- `memory`
- `remembrance`
- `recollection`
- `memories`

These expressions may have different literary meanings, but should not become separate archive labels unless there is a clear editorial reason.

### 2.3 Multiple Dimensions

A literary exploration may belong to several intellectual dimensions simultaneously.

For example, an Urdu ghazal about memory may also invite discussion of nonlinear oscillations.

Its classification should distinguish:

- Original language.
- Literary form.
- Central theme.
- Scientific discipline.
- Specific scientific concept.

One label should not be forced to perform all these functions.

### 2.4 The Literary Work Comes First

Scientific tags should describe genuine scientific engagement.

A poem containing the word "time" should not automatically receive a physics-related tag.

Likewise, a literary metaphor involving resonance should not automatically be classified as a scientific discussion of mechanical resonance.

### 2.5 Classification Is Not Interpretation

A category or tag helps readers discover content. It does not establish the definitive meaning of a literary work.

The intellectual complexity of an article should remain greater than its classification labels.

## 3. Categories and Tags: Distinct Roles

Categories and tags serve different purposes.

### 3.1 Categories

Categories describe the broad content type or principal editorial domain of an article.

They should be relatively few, stable, and understandable.

A category answers:

**What broad kind of exploration is this?**

### 3.2 Tags

Tags describe more specific attributes, subjects, and intellectual connections.

They can represent:

- Literary forms.
- Themes.
- Philosophical concepts.
- Scientific disciplines.
- Scientific phenomena.
- Research methods.
- Special subjects.

A tag answers:

**What particular subjects, forms, or concepts does this article explore?**

### 3.3 Language Metadata Is Separate

The original language of an article should be maintained through the established language metadata fields:

- `language_id`
- `language_code`

Do not duplicate every language identifier as a category or tag.

The language configuration in `_data/languages.yml` remains the reference for language identity.

### 3.4 Author and Contributor Metadata Is Separate

Author names, lyricists, composers, singers, performers, and translators should be recorded through appropriate attribution metadata.

They should not automatically become categories.

A future author index may use these fields independently.

## 4. Recommended Category Vocabulary

The following categories provide a controlled starting point for individual literary explorations.

| Category identifier | Display name | Scope |
|---|---|---|
| `poetry` | Poetry | Poetic works across different languages and traditions |
| `song-lyrics` | Song Lyrics | Literary exploration of songs and lyrics |
| `folk-literature` | Folk Literature | Folk poetry, oral traditions, and community expressions |
| `literary-prose` | Literary Prose | Prose passages and literary writing |
| `philosophical-writing` | Philosophical Writing | Works primarily concerned with philosophical ideas |
| `literary-reflection` | Literary Reflection | Explorations not adequately represented by the other categories |

### 4.1 Choosing a Category

Assign the category that best represents the principal literary nature of the selected work.

Examples:

| Selected work | Recommended category |
|---|---|
| Urdu ghazal | `poetry` |
| Hindi couplet | `poetry` |
| Marathi devotional song | `song-lyrics` or `poetry`, depending on the source and presentation |
| Kannada folk ballad | `folk-literature` |
| Tamil classical poetic passage | `poetry` |
| Malayalam literary prose passage | `literary-prose` |
| Philosophical literary essay | `philosophical-writing` |

The classification should follow the actual work rather than assumptions based on its language or author.

### 4.2 One Primary Category

As a general editorial rule, use one primary category per individual exploration.

Additional dimensions should be represented through tags.

This keeps the archive's broad classification understandable and prevents unnecessary fragmentation.

## 5. Tagging Structure

Tags should follow a namespaced structure whenever practical.

The namespace identifies the dimension to which a tag belongs.

Recommended namespaces:

| Namespace | Purpose | Example |
|---|---|---|
| `form:` | Literary form | `form:ghazal` |
| `theme:` | Literary or human theme | `theme:memory` |
| `philosophy:` | Philosophical subject | `philosophy:existence` |
| `discipline:` | Scientific or academic discipline | `discipline:mechanics` |
| `concept:` | Specific intellectual or scientific concept | `concept:nonlinear-waves` |
| `method:` | Research or analytical method | `method:finite-element-analysis` |
| `tradition:` | Specific cultural or literary tradition | `tradition:bhakti` |

These namespaces are editorial conventions for tag consistency. Jekyll does not automatically interpret their prefixes as separate taxonomic systems.

The site would need appropriate filtering or archive logic to present them as separate browsing dimensions.

## 6. Literary Form Tags

Literary-form tags describe the structure or genre of the selected work.

### 6.1 Poetry and Verse

Recommended tags include:

- `form:ghazal`
- `form:nazm`
- `form:sher`
- `form:rubai`
- `form:couplet`
- `form:free-verse`
- `form:lyric-poetry`
- `form:classical-poetry`
- `form:devotional-poetry`
- `form:narrative-poetry`

### 6.2 Song and Performance

Recommended tags include:

- `form:song`
- `form:folk-song`
- `form:devotional-song`
- `form:film-song`
- `form:spoken-word`
- `form:ballad`

### 6.3 Other Literary Forms

Recommended tags include:

- `form:literary-prose`
- `form:philosophical-essay`
- `form:folk-narrative`
- `form:proverb`
- `form:dramatic-writing`

Use only the specific form that accurately describes the source material.

A song should not automatically receive a poetry classification merely because its lyrics are poetic. Its literary and musical identity should be considered together.

## 7. Literary and Human Themes

Themes represent ideas, experiences, or subjects explored within a literary work.

The following vocabulary provides a starting point.

### 7.1 Human Experience

- `theme:love`
- `theme:longing`
- `theme:memory`
- `theme:loss`
- `theme:identity`
- `theme:belonging`
- `theme:solitude`
- `theme:friendship`
- `theme:relationships`
- `theme:hope`
- `theme:despair`
- `theme:resilience`
- `theme:human-condition`

### 7.2 Time and Existence

- `theme:time`
- `theme:impermanence`
- `theme:existence`
- `theme:mortality`
- `theme:change`
- `theme:transience`
- `theme:continuity`
- `theme:absence`
- `theme:silence`
- `theme:meaning`

### 7.3 Nature and the World

- `theme:nature`
- `theme:seasons`
- `theme:landscape`
- `theme:environment`
- `theme:rain`
- `theme:water`
- `theme:light`
- `theme:darkness`
- `theme:sky`
- `theme:journey`

### 7.4 Society and Culture

- `theme:society`
- `theme:justice`
- `theme:freedom`
- `theme:inequality`
- `theme:tradition`
- `theme:change`
- `theme:community`
- `theme:history`
- `theme:conflict`
- `theme:human-dignity`

### 7.5 Spiritual and Reflective Themes

- `theme:devotion`
- `theme:faith`
- `theme:spirituality`
- `theme:detachment`
- `theme:contemplation`
- `theme:inner-life`
- `theme:compassion`
- `theme:forgiveness`

### 7.6 Applying Theme Tags

An article may explore several themes.

However, avoid assigning every possible theme suggested by a line.

Use a theme tag when the subject is materially developed in the article, not merely mentioned.

A work about love may also explore memory, but the second tag should be used only when memory forms a meaningful part of the interpretation.

## 8. Philosophical Tags

Philosophical tags identify concepts or traditions examined meaningfully in the article.

Recommended tags include:

### 8.1 General Philosophical Concepts

- `philosophy:existence`
- `philosophy:consciousness`
- `philosophy:identity`
- `philosophy:ethics`
- `philosophy:freedom`
- `philosophy:knowledge`
- `philosophy:reality`
- `philosophy:time`
- `philosophy:meaning`
- `philosophy:perception`
- `philosophy:determinism`
- `philosophy:duality`

### 8.2 Indian Philosophical Traditions

- `philosophy:advaita`
- `philosophy:vedanta`
- `philosophy:buddhist-thought`
- `philosophy:jain-philosophy`
- `philosophy:bhakti`
- `philosophy:indian-aesthetics`
- `philosophy:classical-indian-thought`

The use of a tradition tag should reflect actual engagement with its texts, ideas, or historical context.

Do not treat distinct Indian philosophical schools as interchangeable.

### 8.3 Philosophical Caution

A literary expression may invite a philosophical reading without necessarily representing a formal philosophical position.

Do not assign a tradition or school merely because an article uses a similar word or metaphor.

## 9. Scientific Discipline Tags

Scientific discipline tags identify the academic fields substantively discussed in an exploration.

Recommended tags include:

### 9.1 Mechanics and Engineering

- `discipline:mechanics`
- `discipline:solid-mechanics`
- `discipline:continuum-mechanics`
- `discipline:nonlinear-dynamics`
- `discipline:materials-science`
- `discipline:computational-mechanics`
- `discipline:structural-engineering`

### 9.2 Physics and Acoustics

- `discipline:physics`
- `discipline:wave-physics`
- `discipline:nonlinear-acoustics`
- `discipline:physical-acoustics`
- `discipline:nonlinear-optics`
- `discipline:mathematical-physics`

### 9.3 Computational and Applied Research

- `discipline:applied-mathematics`
- `discipline:numerical-methods`
- `discipline:scientific-computing`
- `discipline:machine-learning`
- `discipline:signal-processing`
- `discipline:inverse-problems`

Use discipline tags only when the article contains substantive engagement with the respective field.

## 10. Scientific Concept Tags

Concept tags identify particular phenomena, mechanisms, or technical ideas discussed in an article.

### 10.1 Waves and Vibrations

- `concept:nonlinear-waves`
- `concept:nonlinear-vibrations`
- `concept:wave-propagation`
- `concept:wave-scattering`
- `concept:wave-mixing`
- `concept:resonance`
- `concept:dispersion`
- `concept:harmonics`
- `concept:harmonic-generation`
- `concept:frequency-conversion`
- `concept:attenuation`

### 10.2 Nonlinear Mechanics

- `concept:nonlinear-elasticity`
- `concept:hysteresis`
- `concept:contact-nonlinearity`
- `concept:material-nonlinearity`
- `concept:amplitude-dependence`
- `concept:nonlinear-acoustics`
- `concept:nonlinear-ultrasonics`

### 10.3 Metamaterials and Wave Control

- `concept:mechanical-metamaterials`
- `concept:phononic-metamaterials`
- `concept:phononic-crystals`
- `concept:bandgaps`
- `concept:local-resonance`
- `concept:nonlinear-cloaking`
- `concept:inverse-design`
- `concept:time-modulation`
- `concept:time-crystals`

### 10.4 Mathematical and Computational Concepts

- `concept:nonlinear-equations`
- `concept:inverse-problems`
- `concept:parameter-estimation`
- `concept:finite-element-analysis`
- `concept:bayesian-inversion`
- `concept:optimisation`
- `concept:uncertainty-quantification`

These tags should be applied with technical precision.

For example, `concept:time-crystals` should not be assigned merely because an article discusses time-dependent systems.

## 11. Research Method Tags

Method tags describe the research or analytical approaches substantively used in an article.

Examples include:

- `method:literary-analysis`
- `method:comparative-analysis`
- `method:historical-analysis`
- `method:linguistic-analysis`
- `method:close-reading`
- `method:mathematical-modelling`
- `method:finite-element-analysis`
- `method:numerical-simulation`
- `method:experimental-analysis`
- `method:bayesian-inference`
- `method:inverse-design`

Do not assign a research method tag merely because the article mentions the method.

A literary article that refers briefly to finite element analysis should not automatically be classified as a finite element research study.

## 12. Cultural and Literary Tradition Tags

These tags help readers discover works associated with particular literary and cultural traditions.

Potential tags include:

- `tradition:urdu-literature`
- `tradition:hindi-literature`
- `tradition:marathi-literature`
- `tradition:kannada-literature`
- `tradition:tamil-literature`
- `tradition:malayalam-literature`
- `tradition:telugu-literature`
- `tradition:sufi-literature`
- `tradition:bhakti-literature`
- `tradition:sangam-literature`
- `tradition:varkari-tradition`
- `tradition:folk-literature`
- `tradition:classical-indian-literature`

These tags are optional discovery labels.

The official original-language identity must remain in the language metadata rather than being replaced by a tradition tag.

Use cultural and tradition labels carefully, especially where historical, geographical, and linguistic boundaries are complex.

## 13. Category and Tag Selection Rules

Each article should receive a classification appropriate to its actual content.

Recommended starting rules:

| Classification dimension | Recommended approach |
|---|---|
| Primary category | One category |
| Original language | Use `language_id` and `language_code` |
| Literary form | One or more relevant `form:` tags |
| Main themes | Two to five meaningful `theme:` tags |
| Philosophical subjects | Add only where substantially explored |
| Scientific disciplines | Add only where substantive |
| Scientific concepts | Add only where technically relevant |
| Research methods | Add only when actually used |
| Cultural tradition | Add when useful and historically appropriate |

These are editorial guidelines rather than mandatory numerical limits.

An article may require fewer tags when its subject is focused.

A complex interdisciplinary article may require additional tags when they materially improve discovery.

## 14. Recommended YAML Examples

The following examples illustrate possible frontmatter conventions.

They are documentation examples and do not establish that archive filtering or category pages have already been implemented.

### Example A — Literary Exploration

    ---
    layout: entry
    title: "A Reflection on Memory"
    date: 2026-11-12
    description: "An exploration of memory and human experience."

    week_id: "week-2026-46"
    entry_number: 1

    language_id: "urdu"
    language_code: "ur"

    categories:
      - poetry

    tags:
      - form:ghazal
      - theme:memory
      - theme:time
      - philosophy:existence
    ---

### Example B — Literary and Scientific Exploration

    ---
    layout: entry
    title: "Rhythm, Resonance, and Human Experience"
    date: 2026-11-12
    description: "A literary exploration with a carefully qualified connection to nonlinear wave phenomena."

    week_id: "week-2026-46"
    entry_number: 2

    language_id: "marathi"
    language_code: "mr"

    categories:
      - poetry

    tags:
      - form:poetry
      - theme:rhythm
      - theme:memory
      - discipline:nonlinear-dynamics
      - discipline:mechanics
      - concept:resonance
      - concept:nonlinear-waves
    ---

### Example C — Devotional Literary Expression

    ---
    layout: entry
    title: "A Devotional Reflection"
    date: 2026-11-12
    description: "An exploration of devotion and philosophical reflection."

    week_id: "week-2026-46"
    entry_number: 3

    language_id: "kannada"
    language_code: "kn"

    categories:
      - poetry

    tags:
      - form:devotional-poetry
      - theme:devotion
      - theme:compassion
      - philosophy:indian-aesthetics
      - tradition:bhakti
    ---

The YAML category and tag values shown above are proposed conventions. Before using them across the archive, check that the site's actual templates and Jekyll configuration support their intended presentation.

## 15. What Should Not Become a Tag

Avoid using tags for information already represented adequately elsewhere.

Examples include:

### Language identifiers

Use the language metadata rather than creating redundant tags such as:

- `urdu`
- `hindi`
- `marathi`

### Author names

Maintain author attribution separately.

### Publication dates

Use the article's date metadata.

### Weekly identifiers

Use `week_id`.

### Generic descriptive words

Avoid tags that do not meaningfully distinguish content, such as:

- `interesting`
- `beautiful`
- `important`
- `great`
- `thoughts`
- `inspiration`

### Unsupported scientific labels

Do not classify a work under a scientific concept that it does not meaningfully examine.

## 16. Tag Naming Conventions

Use consistent lowercase identifiers.

Recommended conventions:

- Lowercase letters.
- Hyphens between words.
- Consistent namespace prefixes.
- No unnecessary punctuation.
- No duplicate spelling variants.
- No inconsistent singular and plural forms.

Examples:

Preferred:

`concept:wave-mixing`

Avoid:

- `Wave Mixing`
- `wave_mixing`
- `wave mixing`
- `WaveMixing`

The displayed label can be formatted separately from the underlying identifier.

For example:

`concept:nonlinear-ultrasonics`

may be displayed as:

**Nonlinear Ultrasonics**

## 17. New Tag Approval

Before creating a new tag, consider:

1. Does the concept already exist under another name?
2. Is it genuinely relevant to an article?
3. Is the terminology accurate?
4. Does it belong to an existing namespace?
5. Will it help future readers discover related material?
6. Is it distinct enough to justify its own classification?
7. Could the existing tag be extended instead?

New terms may be added to this document when there is a meaningful editorial or technical reason.

Do not create a new tag for every individual metaphor, phrase, or incidental reference.

## 18. Tag Revision and Consolidation

Classification systems naturally change as archives grow.

Tags may need to be:

- Renamed.
- Consolidated.
- Reclassified.
- Deprecated.
- Removed.
- Divided into more precise concepts.

Before changing an established tag, check whether existing articles use it.

Where classification changes affect published article metadata, update the relevant entries consistently.

If archive pages or search filters already depend on a tag, check those dependencies before modifying or removing it.

Important changes to the classification system should be recorded in `CHANGELOG.md`.

## 19. Technical Implementation Considerations

Jekyll frontmatter can store categories and tags, but storing metadata does not by itself create a complete browsing interface.

The current publication should be distinguished from possible future functionality.

Before introducing classification features, verify:

- Whether collection documents expose categories and tags as expected.
- Whether the templates render the relevant values.
- Whether category or tag archive pages are generated.
- Whether a suitable plugin is configured, if required.
- Whether archive links resolve correctly.
- Whether tags are available to the search interface.
- Whether the classification remains accessible on mobile and through assistive technologies.

Do not assume that the existing `entries` collection automatically generates fully functional category and tag archive pages.

Possible future improvements include:

- Dedicated category indexes.
- Tag-based browsing.
- Language and theme filters.
- Cross-disciplinary subject indexes.
- Related-article suggestions.
- Search across controlled vocabulary terms.

These features should be implemented only after the metadata structure has been validated against the actual Jekyll build.

## 20. Editorial Classification Checklist

Before assigning categories and tags, check:

- [ ] The primary category accurately describes the article.
- [ ] Original language is represented through language metadata.
- [ ] Literary-form tags are accurate.
- [ ] Theme tags reflect substantive discussion.
- [ ] Philosophical tags are supported by the article.
- [ ] Scientific discipline tags reflect genuine engagement.
- [ ] Scientific concepts are technically relevant.
- [ ] Research-method tags describe methods actually used.
- [ ] Cultural labels are historically and linguistically appropriate.
- [ ] Existing vocabulary has been checked before creating new tags.
- [ ] No redundant or decorative labels have been added.

## 21. Relationship with Other Publication Documentation

This classification system should be used alongside:

- `ARTICLE_METADATA_REFERENCE.md`
- `ARTICLE_TEMPLATE.md`
- `WEEKLY_COLLECTION_TEMPLATE.md`
- `EDITORIAL_POLICY.md`
- `RESEARCH_STANDARDS.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `GLOSSARY.md`
- `_data/languages.yml`
- `_config.yml`

The metadata reference establishes how information is stored.

This document establishes how classification values should be selected and maintained.

## 22. Future Development

As Verse & Variable expands, its classification system should evolve with the actual content of the archive.

Additional dimensions may be introduced for:

- Literary movements.
- Historical periods.
- Regional traditions.
- Authors and contributors.
- Philosophical schools.
- Scientific subdisciplines.
- Material systems.
- Wave phenomena.
- Research approaches.
- Thematic collections.

Such expansion should remain selective and controlled.

The objective is not to assign the largest possible number of labels to every article. It is to build a discovery system that reveals meaningful connections without simplifying the works themselves.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
