
# Language and Style Guide

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the language and presentation conventions used throughout Verse & Variable.

The publication brings together original literary expressions, translations, transliterations, cultural commentary, historical references, and scientific discussions across multiple languages.

A consistent editorial framework is necessary to make these materials accessible and recognisable without imposing the conventions of one language upon another.

This guide covers:

- Language identification and naming.
- Original scripts and multilingual typography.
- Transliteration conventions.
- Translation presentation.
- Punctuation and quotation practices.
- Names and literary attribution.
- English commentary and prose style.
- Scientific terminology and notation.
- Dates, numerals, and measurements.
- Headings, metadata, and article structure.
- Digital text encoding and presentation.

These conventions should be applied alongside `EDITORIAL_POLICY.md`, `TRANSLATION_GUIDELINES.md`, and `ACCESSIBILITY.md`.

## 2. Fundamental Language Principles

### 2.1 Respect the Original Language

The original language of a literary work is an essential part of its identity.

Do not treat English as the default replacement for an original expression.

Where appropriate, preserve the original script and provide transliteration, translation, or explanatory notes as supplementary material.

### 2.2 Linguistic Accuracy Before Visual Uniformity

Different languages have different grammatical systems, writing conventions, punctuation practices, and typographic requirements.

A consistent publication design should not force every language into identical linguistic conventions.

Preserve language-specific features wherever they are meaningful.

### 2.3 Consistency Without Artificial Standardisation

Consistency is desirable in metadata, navigation, article organisation, and editorial terminology.

It should not be achieved by erasing regional vocabulary, dialectal variation, historical spelling, poetic conventions, or distinctive expressions.

### 2.4 Clear Distinction Between Language Layers

Readers should be able to distinguish clearly between:

- Original literary text.
- Transliteration.
- English translation.
- Translator's notes.
- Editorial commentary.
- Scientific explanations.
- Bibliographic references.

These elements should not be visually or semantically merged.

## 3. Supported Languages

The publication's initial language framework covers the following traditions.

| Language | Preferred English name | ISO 639-1 code | Primary script |
|---|---|---|---|
| Urdu | Urdu | `ur` | Arabic-derived Urdu script |
| Hindi | Hindi | `hi` | Devanagari |
| Marathi | Marathi | `mr` | Devanagari |
| Kannada | Kannada | `kn` | Kannada |
| Tamil | Tamil | `ta` | Tamil |
| Malayalam | Malayalam | `ml` | Malayalam |
| Telugu | Telugu | `te` | Telugu |

Additional languages and traditions may be included when they contribute meaningfully to the archive.

### 3.1 Language Names

Use established English language names consistently in navigation, metadata, article descriptions, and language indexes.

Use the language's own name in its original script when it adds value.

For example:

- Urdu — اردو
- Hindi — हिन्दी
- Marathi — मराठी
- Kannada — ಕನ್ನಡ
- Tamil — தமிழ்
- Malayalam — മലയാളം
- Telugu — తెలుగు

Do not substitute a script name for a language name.

A language and a writing system are related but distinct concepts.

### 3.2 Language Codes

Use ISO 639-1 language codes where available.

Where greater specificity is necessary, use the appropriate BCP 47 language tag.

Examples include:

- `ur`
- `hi`
- `mr`
- `kn`
- `ta`
- `ml`
- `te`

Script or regional subtags may be added when they provide useful information.

For example, `ur-Arab` and `hi-Deva` identify language and script combinations.

Avoid adding unnecessary subtags to ordinary article content.

## 4. Original Scripts

Original-script presentation is a central feature of the archive.

### 4.1 Script Preservation

Where an original text is available and suitable for publication, retain its original writing system.

Do not replace original-script material with transliteration alone merely for visual convenience.

### 4.2 Character Accuracy

Check the actual characters used in the source.

Pay attention to:

- Diacritical marks.
- Combining characters.
- Ligatures.
- Joining behaviour.
- Character order.
- Orthographic conventions.
- Historical spelling.
- Script-specific punctuation.

Visually similar characters from different writing systems must not be substituted casually.

### 4.3 Unicode

Use Unicode text rather than images of ordinary literary passages wherever practical.

This allows text to remain selectable, searchable, scalable, and more accessible to assistive technologies.

Avoid unnecessary conversion between Unicode characters when preserving the original text.

Where text is normalised for technical consistency, Unicode NFC is a suitable default for ordinary stored textual content, provided that the transformation does not alter the intended literary expression.

### 4.4 Original Text Verification

Before publication, compare the digital text against a reliable source.

Do not assume that copied text from a website, PDF, image transcription, or social media post is free from typographical or encoding errors.

## 5. Urdu Typography and Right-to-Left Presentation

Urdu requires dedicated attention because of its right-to-left writing direction and distinctive calligraphic conventions.

### 5.1 Reading Direction

Urdu passages should be identified as right-to-left content.

Use semantic language and direction metadata rather than relying exclusively on visual text alignment.

For example:

`<p lang="ur" dir="rtl">اردو کا اصل متن یہاں درج کریں۔</p>`

The `dir` attribute communicates text direction, while `lang` identifies the language.

### 5.2 Nastaliq Presentation

Nastaliq typography is particularly important to the visual and literary character of Urdu.

Where a suitable Nastaliq font is available:

- Provide adequate line height.
- Avoid clipping ascenders and descenders.
- Preserve comfortable paragraph spacing.
- Check rendering at different screen sizes.
- Provide appropriate fallback fonts.
- Avoid excessive compression of Urdu lines.

The publication should remain readable if an external font does not load.

### 5.3 Mixed Urdu and English

Urdu passages may contain English words, technical terminology, dates, or numerals.

Mixed-direction text should be structured carefully to prevent unexpected reordering.

Where necessary, isolate embedded left-to-right expressions using appropriate bidirectional markup.

For example:

`<bdi dir="ltr">nonlinear wave propagation</bdi>`

Do not use manual spaces or punctuation changes as substitutes for correct bidirectional text handling.

### 5.4 Urdu Punctuation and Literary Form

Preserve meaningful punctuation and literary structure from the original source.

Do not automatically replace Urdu conventions with English punctuation when doing so changes the appearance or reading of the original.

### 5.5 Urdu Titles and Names

Where an Urdu work has an established original title, preserve it in Urdu script.

An English transliteration or translation may be supplied as an additional reference, not as an automatic replacement.

## 6. Indic Scripts and Regional Typography

Hindi, Marathi, Kannada, Tamil, Malayalam, and Telugu use distinct writing systems and typographic conventions.

### 6.1 Devanagari

Hindi and Marathi both use Devanagari, but their linguistic identities must remain distinct.

Do not identify a Marathi work as Hindi merely because both use the same script.

Preserve language-specific vocabulary, grammar, spelling, and literary conventions.

### 6.2 Kannada

Use appropriate Kannada characters and shaping behaviour.

Check conjuncts, vowel signs, character combinations, and rendering across different browsers and devices.

### 6.3 Tamil

Preserve Tamil orthography and its language-specific conventions.

Do not substitute characters or spellings based on approximate visual similarities with other scripts.

### 6.4 Malayalam

Check Malayalam character shaping, combining signs, line spacing, and font support.

Ensure that the complete text remains readable at different display sizes.

### 6.5 Telugu

Preserve Telugu orthography and verify the rendering of syllabic signs and character combinations.

Avoid font fallbacks that distort character shapes or spacing.

### 6.6 General Presentation

For all regional scripts:

- Use suitable fonts and fallbacks.
- Preserve original spelling.
- Avoid clipping or overlapping glyphs.
- Maintain readable line height.
- Check mobile and desktop layouts.
- Test selectable and searchable text.
- Identify the language correctly in page metadata.

## 7. Transliteration Conventions

Transliteration provides a bridge between original scripts and readers who may not read those scripts.

It is a supplementary representation, not a replacement for the original.

### 7.1 Purpose

Transliteration may help readers:

- Recognise unfamiliar words.
- Approximate pronunciation.
- Follow literary expressions.
- Search for a work using Latin characters.
- Understand the structure of a phrase.

Its use should depend on the article's audience and subject.

### 7.2 Consistency

Use a consistent transliteration approach within an individual article.

Do not switch between unrelated transliteration systems without explanation.

Where a language has established scholarly transliteration conventions, consult them when technical precision is important.

For general literary presentation, readability may be prioritised, provided that the approach does not misrepresent the original.

### 7.3 Diacritics

Diacritics may be necessary to distinguish sounds that ordinary English spelling does not represent accurately.

Use them consistently where a transliteration system requires them.

Do not introduce diacritics inconsistently or merely for decorative effect.

Where a simplified transliteration is used, make no claim that it provides complete phonetic accuracy.

### 7.4 Pronunciation

Do not assume that the pronunciation of an original expression can always be reconstructed reliably through a simple Roman-letter representation.

Where pronunciation is important, consult an appropriate linguistic source or established transcription system.

### 7.5 Transliteration and Translation Are Different

Transliteration represents the original words using another writing system.

Translation communicates their meaning in another language.

For example:

- Original script: اردو
- Transliteration: Urdu
- English meaning: Urdu

These are distinct editorial elements and should be identified correctly.

### 7.6 Names and Titles

Use established or author-preferred Roman spellings for names whenever reliable information is available.

Do not repeatedly alter the spelling of the same person's name across articles.

Where multiple established spellings exist, choose one consistently and preserve the original-script form where appropriate.

### 7.7 No Invented Standardisation

The publication does not claim that one transliteration scheme is universally correct for all Indian and South Asian languages.

Language-specific systems should be recognised.

Where a particular transliteration choice materially affects interpretation, explain it.

## 8. Translation Presentation

Translations should be clearly distinguished from original material.

### 8.1 Recommended Article Order

Where all elements are available and useful, the presentation order should generally be:

1. Original literary text.
2. Transliteration.
3. English translation.
4. Attribution and source information.
5. Literary commentary.

This is a preferred presentation model rather than an inflexible requirement.

The original expression should remain visually prominent.

### 8.2 Translation Labels

Use clear labels such as:

- Original text.
- Transliteration.
- English translation.
- Translator's note.
- Adapted translation.

Avoid ambiguous labels such as simply "Meaning" where the material is actually a literary translation.

### 8.3 Translation Attribution

Identify the translator whenever an existing translation is used.

When the translation is prepared specifically for the publication, identify it accurately as an original translation prepared for Verse & Variable.

Where an adaptation is made, distinguish it from a close or literal translation.

### 8.4 Multiple Translations

When comparing multiple translations, identify each translator and source separately.

Do not combine selected phrases from different translators into a single text without disclosing the changes.

For further guidance, consult `TRANSLATION_GUIDELINES.md`.

## 9. Names, Authors, and Attribution

Accurate naming is essential for literary and scholarly integrity.

### 9.1 Author Names

Use a person's established publication name or preferred professional spelling where verified.

Where useful, include the original-script form.

Do not infer a person's full name, family relationship, title, or professional status without evidence.

### 9.2 Creative Roles

Distinguish accurately between:

- Poet.
- Author.
- Lyricist.
- Composer.
- Singer.
- Performer.
- Translator.
- Adapter.
- Editor.
- Publisher.

For a song, the lyricist and singer must not be treated as interchangeable roles.

### 9.3 Disputed Attribution

Where authorship is disputed, qualify the attribution.

Use language such as:

- Traditionally attributed to.
- Commonly attributed to.
- Authorship disputed.
- Author unknown.
- Attribution not independently verified.

Do not turn uncertain information into an established fact.

### 9.4 Honorifics and Titles

Use personal and literary honorifics consistently and respectfully.

Do not add honorifics selectively in ways that create misleading implications about status or attribution.

Historical titles should be retained where they are relevant and verifiable.

## 10. English Editorial Style

English is the principal language of the publication's original interpretative commentary.

The editorial voice should remain mature, reflective, precise, and accessible.

### 10.1 General Tone

Prefer:

- Thoughtful and natural expression.
- Clear sentence construction.
- Substantial interpretation.
- Precise vocabulary.
- Balanced intellectual curiosity.
- Respectful cultural description.
- Appropriate technical explanation.

Avoid:

- Promotional exaggeration.
- Unnecessary superlatives.
- Artificially dramatic conclusions.
- Repetitive paraphrasing.
- Excessive jargon.
- Unsupported claims.
- Generic inspirational language that adds little to the analysis.

### 10.2 First-Person Reflection

The principal commentary may use a first-person reflective perspective.

First-person language should emerge naturally from the interpretation rather than appearing in every paragraph as a mechanical stylistic requirement.

### 10.3 Paragraph Structure

Individual literary explorations should contain exactly four substantial paragraphs of principal English commentary.

Each paragraph should make a distinct contribution to the exploration.

Supplementary quotations, translations, attribution, notes, references, and headings do not count as part of those four paragraphs.

### 10.4 Sentence Construction

Vary sentence length naturally.

Use complex sentences where they improve precision, but avoid unnecessarily long constructions.

Avoid fragments in formal explanatory prose unless deliberately used for a clear literary effect.

### 10.5 British and American English

Use standard international English with a generally British spelling preference where alternatives exist.

For example:

- organisation
- analyse
- emphasise
- centre
- behaviour

However, preserve the original spelling of titles, quotations, published references, institutional names, and source material.

Consistency is more important than mechanically changing quoted material.

## 11. Punctuation and Quotation Conventions

### 11.1 English Quotation Marks

Use double quotation marks for ordinary English quotations.

Use single quotation marks for a quotation within another quotation.

Preserve the punctuation of quoted literary material where it is part of the original expression or source edition.

### 11.2 Ellipses

Use ellipses to indicate genuine omission or an intentionally incomplete expression.

Do not use ellipses merely as decorative punctuation.

When a quotation is shortened, ensure that the omission does not distort its meaning.

### 11.3 Em Dashes and Hyphens

Use hyphens for compound expressions where grammatically appropriate.

Use en dashes for ranges and em dashes for parenthetical interruptions where suitable.

Do not use dashes excessively as a substitute for clear sentence structure.

### 11.4 Original-Script Punctuation

Preserve the original punctuation where relevant.

Do not impose English quotation marks, commas, or full stops mechanically on every language.

### 11.5 Poetic Line Breaks

Preserve meaningful line breaks.

Do not reflow a poem into ordinary prose merely to fit a page layout.

For longer literary passages, retain stanza boundaries where appropriate.

## 12. Capitalisation and Titles

### 12.1 English Article Titles

Use consistent title capitalisation.

Avoid unnecessarily long titles or titles that promise more than the article actually explores.

### 12.2 Original Titles

Preserve the title in its original script when available and appropriate.

An English rendering or transliteration may be presented separately.

Do not invent an official English title when none exists.

### 12.3 Book, Film, and Publication Titles

Retain the established title of a referenced work.

Use italics for English-language book, film, journal, and publication titles where appropriate.

Preserve the original formatting conventions of source publications in formal bibliographic references.

### 12.4 Section Headings

Use descriptive, concise headings.

Headings should help readers navigate the article and should not be used merely for visual decoration.

## 13. Numerals, Dates, and Measurements

### 13.1 Numerals

Use Arabic numerals in English commentary unless a sentence or literary context makes written numbers more appropriate.

Preserve numbers in original source material as published unless an explicitly identified editorial conversion is necessary.

### 13.2 Dates

For publication metadata, prefer an unambiguous date format.

Use:

`12 November 2026`

For machine-readable metadata, use ISO 8601:

`2026-11-12`

Do not use ambiguous numeric-only dates such as `12/11/26`.

### 13.3 Year Ranges

Use an en dash for ranges.

Example:

`2020–2026`

### 13.4 Units

Use recognised SI units where appropriate.

Leave a space between a numerical value and its unit symbol.

Examples:

- 10 mm
- 2 MHz
- 5 s
- 300 K

Use scientific notation and unit symbols consistently.

### 13.5 Scientific Notation

Define variables and abbreviations at their first meaningful use.

Do not change established mathematical notation merely for visual uniformity.

For further detail, consult the relevant scientific references and research standards.

## 14. Scientific and Technical Terminology

The scientific dimension of Verse & Variable requires consistency in technical language.

### 14.1 Preferred Technical Language

Use established terminology from the relevant discipline.

For example:

- Nonlinear vibrations.
- Nonlinear elastic waves.
- Harmonic generation.
- Harmonic scattering.
- Wave mixing.
- Hysteresis.
- Contact nonlinearity.
- Phononic metamaterials.
- Mechanical metamaterials.
- Nonlinear ultrasonics.
- Inverse design.
- Computational mechanics.

Do not use technical terms as decorative substitutes for ordinary literary descriptions.

### 14.2 Define Specialised Terms

Explain specialised terminology when its meaning is essential to the reader's understanding.

Avoid assuming that every reader has an engineering, physics, or mathematics background.

### 14.3 Distinguish Similar Terms

Do not treat related concepts as interchangeable without justification.

For example:

- Frequency is not automatically equivalent to pitch.
- Resonance is not interchangeable with every form of oscillation.
- A numerical model is not an experiment.
- Correlation is not causation.
- An analogy is not a physical mechanism.
- A hypothesis is not an established result.

### 14.4 Acronyms

Write out the full term at its first important occurrence, followed by the abbreviation where useful.

For example:

`Structural Health Monitoring (SHM)`

Avoid excessive acronym use in literary commentary.

## 15. Metadata and Digital Language Identification

Accurate metadata helps browsers, assistive technologies, search systems, and indexing services understand the content.

### 15.1 Language Metadata

Every article should identify its principal language correctly.

Original-language passages should receive their own language identification where supported by the page structure.

### 15.2 Text Direction

Use appropriate direction metadata for right-to-left content.

Do not rely exclusively on CSS alignment to establish reading direction.

### 15.3 Semantic Markup

Use appropriate semantic HTML elements.

Examples include:

- `<p>` for paragraphs.
- `<blockquote>` for extended quotations.
- `<cite>` for source titles or citation context where appropriate.
- `<em>` and `<strong>` for meaningful emphasis.
- `<bdi>` for bidirectional text isolation.

Do not use HTML elements purely because their default visual appearance is convenient.

### 15.4 Character Encoding

The website should declare UTF-8 document encoding.

The character representation must preserve original text across different browsers and devices.

### 15.5 Language Metadata Consistency

Language metadata in individual articles should agree with the actual content.

The language directory, entry frontmatter, HTML attributes, and other structured metadata should remain consistent.

## 16. Search and Archive Terminology

Consistent terminology helps visitors explore the archive.

Use the same language names across:

- Navigation.
- Language directory.
- Article metadata.
- Weekly collections.
- Archive filters.
- Search descriptions.
- Structured data.

Where an author, poem, or work is known by several spellings or transliterations, relevant alternatives may be recorded to improve discoverability.

Alternative spellings should not replace the preferred display form without editorial justification.

## 17. Accessibility and Readability

Language presentation must support readers using different devices and assistive technologies.

The publication should:

- Preserve selectable original text.
- Identify languages programmatically.
- Apply correct text direction.
- Avoid images of text where ordinary text is practical.
- Maintain readable font sizes.
- Provide adequate line spacing.
- Avoid clipped characters.
- Preserve clear heading structure.
- Describe meaningful images.
- Keep links descriptive.
- Ensure that essential information is not conveyed through typography or colour alone.

For additional requirements, consult `ACCESSIBILITY.md`.

## 18. Article Presentation Checklist

Before publishing an article, review the following.

### Original language

- [ ] Language is correctly identified.
- [ ] Original script is accurate.
- [ ] Text is checked against a reliable source.
- [ ] Literary form is identified where relevant.
- [ ] Original line and stanza structure is preserved where meaningful.

### Transliteration and translation

- [ ] Transliteration follows a consistent approach.
- [ ] Translation is clearly distinguished from transliteration.
- [ ] Translator attribution is accurate.
- [ ] Important ambiguities are preserved or explained.
- [ ] Adaptations are identified correctly.

### Typography and formatting

- [ ] Correct font and fallback behaviour.
- [ ] Urdu right-to-left layout is checked where applicable.
- [ ] Regional scripts render correctly.
- [ ] Punctuation is appropriate to the language.
- [ ] Line breaks and paragraph spacing are readable.
- [ ] Mixed-direction passages are handled appropriately.

### English commentary

- [ ] English prose is clear and natural.
- [ ] British spelling preference is applied consistently where relevant.
- [ ] Exactly four principal commentary paragraphs are present.
- [ ] Technical terms are used accurately.
- [ ] Tone remains reflective and intellectually balanced.

### Metadata

- [ ] Author and creator names are accurate.
- [ ] Language codes are correct.
- [ ] Article title is consistent.
- [ ] Source references are identifiable.
- [ ] Dates and numerical values are unambiguous.

## 19. Exceptions and Editorial Judgement

Not every literary work can or should be forced into a single presentation format.

Some works may require:

- Historical spelling.
- Dialect-specific transliteration.
- Alternative script conventions.
- Multiple translations.
- Specialised phonetic representation.
- Explanatory notes.
- Original punctuation that differs from standard English presentation.

These exceptions are acceptable when they serve linguistic accuracy and literary integrity.

Where an important departure from the general style guide is made, explain the reason when necessary.

The guide provides consistency, not a restriction on legitimate linguistic variation.

## 20. Maintenance

This document may evolve as the publication incorporates additional languages, scripts, literary traditions, and technical capabilities.

Language-specific guidance may be developed further when the archive grows.

Revisions should preserve the fundamental commitment to original expression, accurate attribution, translation transparency, accessibility, and intellectual integrity.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
