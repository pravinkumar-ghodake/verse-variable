# Categories and Tags

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the classification and tagging conventions for the Verse & Variable archive.

Verse & Variable is an independent Indian literary journal devoted to poetry, shayari, ghazals, nazms, literary prose and other expressions across India's diverse languages and literary traditions.

The classification system exists to help readers discover and explore the archive through its literary forms, languages, subjects, cultural traditions and meaningful intellectual connections.

As the archive develops, a consistent classification system will help readers:

- Discover articles by literary form.
- Explore recurring literary and human themes.
- Identify relevant philosophical subjects.
- Browse works across Indian languages and literary traditions.
- Find related explorations through meaningful subject connections.
- Navigate the archive without relying exclusively on publication dates.

Scientific or technical classifications may be used when an individual literary exploration contains substantive engagement with those subjects. They are not a defining requirement of the archive.

The classification system should improve discovery without reducing complex literary works to simplistic labels or imposing interpretations that are not supported by their content.

## 2. Fundamental Classification Principles

The classification system follows the principles below.

### 2.1 Literature Comes First

The primary purpose of classification is to represent the literary expression accurately.

Literary form, original language, author attribution, cultural context and meaningful themes take precedence over optional interdisciplinary subjects.

An article should not receive scientific or technical classifications simply because a word or metaphor in the literary expression resembles a scientific concept.

### 2.2 Meaningful Classification

Every category or tag should communicate something useful about the article.

Do not add labels merely to increase the number of search terms associated with an article.

A classification should reflect something materially present in the original work or its editorial exploration.

### 2.3 Controlled Vocabulary

Use established terms consistently.

Avoid creating multiple spellings, synonyms or near-identical tags for the same concept.

For example, use one preferred archive term for a recurring subject rather than independently creating:

- `memory`
- `remembrance`
- `recollection`
- `memories`

These expressions may have different meanings in literature and ordinary language. They do not automatically need to become separate archive labels.

### 2.4 Multiple Dimensions

A literary exploration may belong to several intellectual dimensions simultaneously.

For example, a literary work may meaningfully explore memory, loss and the passage of time.

Its classification should distinguish:

- Original language.
- Literary form.
- Principal themes.
- Philosophical subjects, where applicable.
- Cultural or literary tradition, where relevant.
- Specialist subjects, only when substantively discussed.

One label should not be forced to perform all these functions.

### 2.5 Classification Is Not Interpretation

A category or tag helps readers discover content. It does not establish the definitive meaning of a literary work.

The intellectual and emotional complexity of an article should remain greater than its classification labels.

### 2.6 Scientific Classification Is Conditional

Scientific tags should describe genuine scientific or technical engagement.

A poem containing the word "time" should not automatically receive a physics-related tag.

Likewise, a literary metaphor involving resonance should not automatically be classified as a scientific discussion of mechanical resonance.

A scientific concept should only be classified when the article actually examines it with sufficient intellectual or technical substance.

## 3. Categories and Tags: Distinct Roles

Categories and tags serve different purposes.

### 3.1 Categories

Categories describe the broad literary nature of an article.

They should be relatively few, stable and understandable.

A category answers:

**What broad kind of literary work is being explored?**

### 3.2 Tags

Tags describe more specific attributes, subjects and intellectual connections.

They may represent:

- Literary forms.
- Themes and human experiences.
- Philosophical concepts.
- Cultural and literary traditions.
- Specialist subjects, where genuinely relevant.

A tag answers:

**What particular forms, subjects or concepts does this article explore?**

### 3.3 Language Metadata Is Separate

The original language of an article is represented through the established language metadata fields:

- `language_id`
- `language_code`

The language configuration in `_data/languages.yml` remains the reference for language identity.

Do not duplicate every language identifier as a category or tag.

### 3.4 Literary Form Metadata Is Separate

The established entry metadata uses `literary_form` to identify the principal form of the selected work.

This field should remain the primary structured reference for literary form.

A `form:` tag may be useful where the technical implementation requires additional form-based browsing or where an article genuinely involves multiple literary forms.

Do not duplicate `literary_form` mechanically into tags unless there is a clear discovery or implementation reason.

### 3.5 Author and Contributor Metadata Is Separate

Author names, lyricists, composers, singers, performers and translators should be recorded through the appropriate attribution metadata.

They should not automatically become categories or subject tags.

A future author or contributor index may use these fields independently.

## 4. Recommended Category Vocabulary

The following categories provide a controlled starting point for individual literary explorations.

| Category identifier | Display name | Scope |
|---|---|---|
| `poetry` | Poetry | Poetic works across different Indian languages and literary traditions |
| `song-lyrics` | Song Lyrics | Literary exploration of songs and lyrics |
| `folk-literature` | Folk Literature | Folk poetry, oral literary traditions and community expressions |
| `literary-prose` | Literary Prose | Prose passages, literary writing and selected prose expressions |
| `philosophical-literature` | Philosophical Literature | Original literary works principally concerned with philosophical expression |

These categories describe the nature of the selected work, not the editorial method used to explore it.

### 4.1 Choosing a Category

Assign the category that best represents the principal literary nature of the selected work.

Examples:

| Selected work | Recommended category |
|---|---|
| Urdu ghazal | `poetry` |
| Hindi couplet | `poetry` |
| Marathi devotional verse | `poetry` |
| Literary song lyrics | `song-lyrics` |
| Kannada folk ballad | `folk-literature` |
| Tamil classical poetic passage | `poetry` |
| Malayalam literary prose passage | `literary-prose` |
| Original philosophical literary work | `philosophical-literature` |

The classification should follow the actual work rather than assumptions based on its language, author or subject.

### 4.2 One Primary Category

As a general editorial rule, use one primary category per individual exploration.

Additional dimensions should be represented through appropriate metadata or tags.

This keeps the archive's broad classification understandable and prevents unnecessary fragmentation.

### 4.3 Editorial Commentary Is Not a Separate Literary Category

The personal reflection accompanying an entry does not turn the selected work into a separate literary genre.

For example, a ghazal remains poetry even when its accompanying commentary explores philosophy, human experience or a scientific idea.

Do not use `literary-reflection` as a general category for every published entry.

## 5. Tagging Structure

Tags should follow a namespaced structure whenever practical.

The namespace identifies the dimension to which a tag belongs.

Recommended namespaces:

| Namespace | Purpose | Example |
|---|---|---|
| `form:` | Additional literary-form classification | `form:ghazal` |
| `theme:` | Literary or human theme | `theme:memory` |
| `philosophy:` | Philosophical subject | `philosophy:existence` |
| `tradition:` | Cultural or literary tradition | `tradition:bhakti` |
| `discipline:` | Specialist academic or scientific discipline | `discipline:mechanics` |
| `concept:` | Specific scientific or intellectual concept | `concept:nonlinear-waves` |
| `method:` | Research or analytical method | `method:finite-element-analysis` |

The `discipline:`, `concept:` and `method:` namespaces are optional specialist classifications. They should be used sparingly and only when the corresponding subject is substantively addressed.

The use of a scientific namespace does not change the literary classification of an article.

These namespaces are editorial conventions for tag consistency. Jekyll does not automatically interpret their prefixes as separate taxonomic systems.

The site would need appropriate filtering or archive logic to present them as separate browsing dimensions.

## 6. Literary Form Tags

Literary-form tags describe the structure or genre of the selected work.

The established `literary_form` metadata remains the primary reference. Additional `form:` tags may be used when they provide useful classification or support an implemented browsing feature.

### 6.1 Poetry and Verse

Potential tags include:

- `form:ghazal`
- `form:nazm`
- `form:sher`
- `form:rubai`
- `form:couplet`
- `form:doha`
- `form:free-verse`
- `form:lyric-poetry`
- `form:classical-poetry`
- `form:devotional-poetry`
- `form:narrative-poetry`
- `form:abhang`
- `form:vachana`

### 6.2 Song and Performance

Potential tags include:

- `form:song`
- `form:folk-song`
- `form:devotional-song`
- `form:film-song`
- `form:spoken-word`
- `form:ballad`

### 6.3 Other Literary Forms

Potential tags include:

- `form:literary-prose`
- `form:philosophical-essay`
- `form:folk-narrative`
- `form:proverb`
- `form:dramatic-writing`

Use only the specific form that accurately describes the source material.

A song should not automatically receive a poetry classification merely because its lyrics are poetic. Its literary and musical identity should be considered together.

## 7. Literary and Human Themes

Themes represent ideas, experiences or subjects explored within a literary work and its accompanying reflection.

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
- `theme:dignity`
- `theme:freedom`
- `theme:compassion`

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
- `theme:inequality`
- `theme:tradition`
- `theme:community`
- `theme:history`
- `theme:conflict`
- `theme:human-rights`
- `theme:human-dignity`

### 7.5 Spiritual and Reflective Themes

- `theme:devotion`
- `theme:faith`
- `theme:spirituality`
- `theme:detachment`
- `theme:contemplation`
- `theme:inner-life`
- `theme:forgiveness`
- `theme:transcendence`

### 7.6 Applying Theme Tags

An article may explore several themes.

However, avoid assigning every possible theme suggested by a line.

Use a theme tag when the subject is materially developed in the article, not merely mentioned.

A work about love may also explore memory, but the second tag should be used only when memory forms a meaningful part of the literary expression or its interpretation.

## 8. Philosophical Tags

Philosophical tags identify concepts or traditions examined meaningfully in an article.

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

The use of a tradition tag should reflect actual engagement with its texts, ideas or historical context.

Do not treat distinct Indian philosophical schools as interchangeable.

### 8.3 Philosophical Caution

A literary expression may invite a philosophical reading without necessarily representing a formal philosophical position.

Do not assign a tradition or school merely because an article uses a similar word, image or metaphor.

A philosophical tag should identify a subject actually explored, not a theoretical interpretation imposed upon the work.

## 9. Cultural and Literary Tradition Tags

These tags help readers discover works associated with particular Indian literary and cultural traditions.

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

Use cultural and tradition labels carefully, especially where historical, geographical and linguistic boundaries are complex.

## 10. Optional Specialist Discipline Tags

Discipline tags identify academic or scientific fields substantively discussed in an individual literary exploration.

They are not general archive categories and should not be assigned merely because the editor has expertise in the relevant field.

Potential vocabulary includes:

### 10.1 Mechanics and Engineering

- `discipline:mechanics`
- `discipline:solid-mechanics`
- `discipline:continuum-mechanics`
- `discipline:nonlinear-dynamics`
- `discipline:materials-science`
- `discipline:computational-mechanics`
- `discipline:structural-engineering`

### 10.2 Physics and Acoustics

- `discipline:physics`
- `discipline:wave-physics`
- `discipline:nonlinear-acoustics`
- `discipline:physical-acoustics`
- `discipline:nonlinear-optics`
- `discipline:mathematical-physics`

### 10.3 Computational and Applied Research

- `discipline:applied-mathematics`
- `discipline:numerical-methods`
- `discipline:scientific-computing`
- `discipline:machine-learning`
- `discipline:signal-processing`
- `discipline:inverse-problems`

Use these terms only when the relevant discipline is genuinely part of the article's substantive discussion.

A literary reflection does not need a discipline tag simply because the editor refers briefly to an idea from physics, mechanics or mathematics.

## 11. Optional Specialist Concept Tags

Concept tags identify particular phenomena, mechanisms or technical ideas discussed substantively in an article.

These labels form an optional vocabulary rather than a required classification layer.

### 11.1 Waves and Vibrations

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

### 11.2 Nonlinear Mechanics

- `concept:nonlinear-elasticity`
- `concept:hysteresis`
- `concept:contact-nonlinearity`
- `concept:material-nonlinearity`
- `concept:amplitude-dependence`
- `concept:nonlinear-acoustics`
- `concept:nonlinear-ultrasonics`

### 11.3 Metamaterials and Wave Control

- `concept:mechanical-metamaterials`
- `concept:phononic-metamaterials`
- `concept:phononic-crystals`
- `concept:bandgaps`
- `concept:local-resonance`
- `concept:nonlinear-cloaking`
- `concept:inverse-design`
- `concept:time-modulation`
- `concept:time-crystals`

### 11.4 Mathematical and Computational Concepts

- `concept:nonlinear-equations`
- `concept:inverse-problems`
- `concept:parameter-estimation`
- `concept:finite-element-analysis`
- `concept:bayesian-inversion`
- `concept:optimisation`
- `concept:uncertainty-quantification`

These tags should be applied with technical precision.

For example, `concept:time-crystals` should not be assigned merely because an article discusses time, change or time-dependent experience.

Likewise, `concept:resonance` should not be used for a literary description of emotional or personal resonance unless the article also contains substantive discussion of the physical concept.

## 12. Optional Research Method Tags

Method tags describe research or analytical approaches substantively used or explained in an article.

Potential examples include:

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

Use method tags selectively.

Do not assign a research method tag merely because an article mentions the method.

A literary article that refers briefly to finite element analysis should not automatically be classified as a finite element research study.

## 13. Category and Tag Selection Rules

Each article should receive a classification appropriate to its actual content.

Recommended starting rules:

| Classification dimension | Recommended approach |
|---|---|
| Primary category | One category |
| Original language | Use `language_id` and `language_code` |
| Principal literary form | Use `literary_form` |
| Additional literary forms | Use relevant `form:` tags only when useful |
| Main themes | Select a small number of meaningful `theme:` tags |
| Philosophical subjects | Add only where substantially explored |
| Cultural tradition | Add where useful and historically appropriate |
| Scientific disciplines | Add only where substantive scientific engagement occurs |
| Scientific concepts | Add only where technically relevant |
| Research methods | Add only when actually used or explained |

These are editorial guidelines rather than mandatory numerical limits.

An article may need very few tags when its subject is focused.

A complex literary exploration may require additional classifications when they materially improve discovery.

Scientific tags are entirely optional and may be absent from most or all entries.

## 14. Illustrative Metadata Examples

The following examples illustrate possible classification conventions.

They are documentation examples, not confirmation that all the fields or tags shown are currently rendered or indexed by the website.

The established entry metadata remains governed by `ARTICLE_METADATA_REFERENCE.md` and the actual implementation of the Jekyll layouts and collections.

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
    literary_form: "Ghazal"

    categories:
      - poetry

    tags:
      - theme:memory
      - theme:time
      - philosophy:existence
    ---

### Example B — Literary Exploration with Substantive Scientific Context

The following classification is appropriate only for an individual article that genuinely contains a technically meaningful discussion of a scientific concept.

It does not suggest that a particular poem, metaphor or literary expression necessarily has a relationship with nonlinear mechanics.

    ---
    layout: entry
    title: "An Exploration of a Physical Concept"
    date: 2026-11-12
    description: "A literary reflection that includes a carefully qualified discussion of a physical concept."

    week_id: "week-2026-46"
    entry_number: 2

    language_id: "marathi"
    language_code: "mr"
    literary_form: "Poetry"

    categories:
      - poetry

    tags:
      - theme:rhythm
      - discipline:nonlinear-dynamics
      - concept:nonlinear-waves
    ---

### Example C — Devotional Literary Expression

    ---
    layout: entry
    title: "A Devotional Reflection"
    date: 2026-11-12
    description: "An exploration of devotion and philosophical expression."

    week_id: "week-2026-46"
    entry_number: 3

    language_id: "kannada"
    language_code: "kn"
    literary_form: "Devotional Poetry"

    categories:
      - poetry

    tags:
      - theme:devotion
      - theme:compassion
      - philosophy:indian-aesthetics
      - tradition:bhakti-literature
    ---

Before introducing `categories` and `tags` into actual article frontmatter, verify that the site's templates, collection configuration and metadata conventions support their intended use.

The examples above establish a proposed classification vocabulary. They do not independently implement archive filters or tag pages.

## 15. What Should Not Become a Tag

Avoid using tags for information already represented adequately elsewhere.

### 15.1 Language Identifiers

Use the language metadata rather than creating redundant tags such as:

- `urdu`
- `hindi`
- `marathi`

### 15.2 Author Names

Maintain author and contributor attribution separately.

### 15.3 Literary Forms Already Represented in Metadata

Use the established `literary_form` field as the principal structured reference.

Do not duplicate it automatically with a `form:` tag unless there is a clear implementation or discovery reason.

### 15.4 Publication Dates

Use the article's `date` metadata.

### 15.5 Weekly Identifiers

Use `week_id`.

### 15.6 Generic Descriptive Words

Avoid tags that do not meaningfully distinguish content, such as:

- `interesting`
- `beautiful`
- `important`
- `great`
- `thoughts`
- `inspiration`

### 15.7 Unsupported Scientific Labels

Do not classify a work under a scientific concept that it does not meaningfully examine.

A literary image, metaphor or ordinary word should not become a technical classification merely because it resembles scientific terminology.

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
2. Is it genuinely relevant to the article?
3. Is the terminology accurate?
4. Does it belong to an existing namespace?
5. Will it help future readers discover related material?
6. Is it distinct enough to justify its own classification?
7. Could an existing tag be used instead?

New terms may be added to this document when there is a meaningful editorial or technical reason.

Do not create a new tag for every individual metaphor, phrase or incidental reference.

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

Jekyll frontmatter can store classification information, but storing categories and tags does not by itself create a complete browsing interface.

The current publication should be distinguished from possible future functionality.

Before introducing classification features, verify:

- Whether collection documents expose categories and tags as expected.
- Whether the templates render the relevant values.
- Whether category or tag archive pages are generated.
- Whether a suitable plugin or custom Liquid logic is configured, if required.
- Whether archive links resolve correctly.
- Whether tags are available to the search interface.
- Whether the classification remains accessible on mobile and through assistive technologies.
- Whether `literary_form` and additional form tags are being used without unnecessary duplication.

Do not assume that the existing `entries` collection automatically generates fully functional category and tag archive pages.

Possible future improvements include:

- Dedicated literary category indexes.
- Tag-based browsing.
- Language and theme filters.
- Author and contributor indexes.
- Cross-references between related literary explorations.
- Optional specialist subject indexes for articles that genuinely require them.

These features should be implemented only after the metadata structure has been validated against the actual Jekyll build.

## 20. Editorial Classification Checklist

Before assigning categories and tags, check:

- [ ] The primary category accurately describes the selected literary work.
- [ ] Original language is represented through language metadata.
- [ ] The principal literary form is recorded accurately.
- [ ] Additional form tags are used only when useful.
- [ ] Theme tags reflect substantive literary or human subjects.
- [ ] Philosophical tags are supported by the article.
- [ ] Cultural labels are historically and linguistically appropriate.
- [ ] Scientific discipline tags reflect genuine scientific engagement.
- [ ] Scientific concepts are technically relevant and accurately described.
- [ ] Research-method tags describe methods actually used or explained.
- [ ] Existing vocabulary has been checked before creating new tags.
- [ ] No redundant, decorative or unsupported labels have been added.

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

The editorial policy establishes the publication's scope and principles.

This document establishes how classification values should be selected, used and maintained.

The actual implementation must remain consistent with the layouts, collections and metadata fields supported by the repository.

## 22. Future Development

As Verse & Variable expands, its classification system should evolve with the actual content of the archive.

Additional dimensions may be considered for:

- Literary movements.
- Historical periods.
- Indian regional traditions.
- Authors and contributors.
- Philosophical schools.
- Recurring literary themes.
- Specialised subjects discussed in individual entries.

Scientific and technical classifications may be retained where individual articles genuinely require them, but they should not become a parallel or compulsory taxonomy for the literary archive.

Such expansion should remain selective and controlled.

The objective is not to assign the largest possible number of labels to every article. It is to build a discovery system that reveals meaningful relationships without simplifying the works themselves.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
