
# Archive Navigation Specification

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document defines the information architecture and navigation principles for the Verse & Variable literary archive.

The publication brings together individual literary explorations, multilingual collections, philosophical reflections, cultural traditions, and scientific discussions.

As the archive expands, readers should be able to discover its contents through more than one route.

A visitor may arrive with the name of a poet, an individual literary work, a language, a particular theme, or a scientific concept in mind. The navigation system should accommodate these different approaches without making the archive difficult to understand.

This specification establishes:

- Primary website navigation.
- Archive organisation.
- Weekly collection discovery.
- Language-based browsing.
- Literary-form discovery.
- Thematic navigation.
- Author and contributor discovery.
- Scientific subject discovery.
- Article relationships.
- Search and filtering principles.
- URL and navigation conventions.
- Accessibility requirements.
- Technical implementation priorities.

## 2. Navigation Philosophy

The archive should be organised around the reader's experience rather than the internal structure of the repository alone.

The navigation system should follow these principles.

### 2.1 Multiple Routes to Discovery

Readers should be able to reach the same article through different meaningful routes.

For example, an Urdu ghazal may be discoverable through:

- The latest weekly collection.
- The Urdu language directory.
- The poetry category.
- A theme such as memory.
- The poet's author index.
- A relevant philosophical subject.

These routes should lead to the same permanent article page rather than generating unnecessary duplicate content.

### 2.2 Literary Priority

The archive should preserve the identity of the original literary work.

Scientific classifications, thematic labels, and technical navigation should supplement literary discovery rather than dominate it.

### 2.3 Progressive Complexity

The initial navigation should remain simple.

More specialised indexes and filters may be introduced as the archive develops and contains enough material to justify them.

A large collection of empty categories is less useful than a small, well-maintained archive.

### 2.4 Consistency

Navigation labels, URL structures, language identifiers, collection identifiers, categories, and tags should use consistent conventions.

Changes to the information architecture should be reflected in the corresponding templates and documentation.

### 2.5 Accessibility

Every important navigation route should be usable through keyboards, assistive technologies, and different screen sizes.

Core content should remain accessible without depending exclusively on JavaScript.

## 3. Information Architecture

The intended archive has the following high-level organisation.

    Verse & Variable
    |
    |-- Home
    |
    |-- Archive
    |   |
    |   |-- Latest explorations
    |   |-- Weekly collections
    |   |-- All individual entries
    |   |-- Historical collections
    |
    |-- Languages
    |   |
    |   |-- Urdu
    |   |-- Hindi
    |   |-- Marathi
    |   |-- Kannada
    |   |-- Tamil
    |   |-- Malayalam
    |   |-- Telugu
    |   |-- Additional languages
    |
    |-- Literary Forms
    |   |
    |   |-- Ghazal
    |   |-- Nazm
    |   |-- Poetry
    |   |-- Song lyrics
    |   |-- Folk literature
    |   |-- Other literary forms
    |
    |-- Themes
    |   |
    |   |-- Memory
    |   |-- Time
    |   |-- Love
    |   |-- Identity
    |   |-- Nature
    |   |-- Human experience
    |   |-- Other themes
    |
    |-- Authors and Contributors
    |   |
    |   |-- Poets
    |   |-- Writers
    |   |-- Lyricists
    |   |-- Translators
    |   |-- Other contributors
    |
    |-- Scientific Explorations
    |   |
    |   |-- Nonlinear waves
    |   |-- Mechanics
    |   |-- Acoustics
    |   |-- Metamaterials
    |   |-- Computational science
    |   |-- Other disciplines
    |
    |-- About
    |
    |-- Editorial and Publication Policies

This diagram describes the intended information architecture. It does not imply that every section already has a corresponding public page.

## 4. Primary Website Navigation

Primary navigation should expose the most important areas of the publication.

The recommended structure is:

| Navigation item | Purpose |
|---|---|
| Home | Introduce the publication and highlight recent content |
| Archive | Provide access to published literary explorations |
| Languages | Allow discovery through original languages |
| About | Explain the publication's identity and editorial philosophy |

A search control may be added when the search functionality is implemented and tested.

The primary navigation should remain compact.

Additional classification systems should generally be accessed through the archive rather than adding every category to the main header.

### 4.1 Desktop Navigation

On wider screens, the primary navigation may be displayed horizontally.

The header should provide:

- The publication wordmark.
- Primary navigation links.
- A clearly identifiable theme control, where supported.
- Responsive behaviour when the available width becomes limited.

### 4.2 Mobile Navigation

On smaller screens, navigation may collapse into an accessible menu.

The mobile menu should:

- Be operable through a keyboard.
- Have a clearly identifiable control.
- Communicate its expanded or collapsed state.
- Preserve logical focus order.
- Close appropriately after navigation.
- Avoid obstructing the article's main content.

Navigation must remain usable without pointer hover.

## 5. Homepage Navigation

The homepage acts as the main entrance to the publication.

It should help visitors understand both the identity of the archive and the different ways to explore it.

Recommended content areas include:

### 5.1 Publication Introduction

A concise presentation of the publication's identity:

**A line of verse. A line of inquiry.**

**لفظ سے لہر تک — Lafz se Lehar tak**

The homepage should communicate the relationship between literary expression and intellectual exploration without implying that every article combines literature with science.

### 5.2 Latest Weekly Collection

The latest published collection should be discoverable from the homepage.

The presentation may include:

- Collection title.
- Publication date.
- Short description.
- Links to the three individual explorations.

Only published and successfully rendered collections should be presented as available content.

### 5.3 Featured Literary Explorations

Selected individual articles may be highlighted.

Selection may consider:

- Recent publication.
- Editorial significance.
- Language diversity.
- Literary variety.
- Meaningful interdisciplinary exploration.

Featured status should not imply that other archive entries are less important.

### 5.4 Language Discovery

The homepage may present a language directory linking to the main language index.

Each language should be identified using its established name and appropriate script where useful.

### 5.5 Archive Access

Provide a clear route to the complete archive.

Readers should not have to navigate through multiple weekly pages merely to locate an individual article.

## 6. Main Archive

The main archive provides a consolidated view of published individual explorations.

Its primary purpose is to make the growing collection easy to browse.

### 6.1 Archive Listing

Each archive item should present relevant information, such as:

- Article title.
- Original language.
- Author or creator, where verified.
- Publication date.
- Literary form, where available.
- Brief description.
- Permanent article link.

The presentation should remain compact enough to support reading through a substantial list.

### 6.2 Sorting

The default archive order should generally be reverse chronological.

The newest published entries appear first.

Where users need alternative browsing approaches, additional views may be introduced later.

Potential sorting options include:

- Newest first.
- Oldest first.
- Language.
- Literary form.
- Author.
- Theme.

Sorting should not alter the permanent URL of an article.

### 6.3 Archive Completeness

The archive should display published content accurately.

Avoid:

- Placeholder cards.
- Duplicate entries.
- Broken links.
- Unpublished articles presented as available.
- Inconsistent author names.
- Incorrect language labels.
- Empty classification sections.

### 6.4 Pagination

If the archive becomes sufficiently large, pagination may be introduced.

Pagination should:

- Preserve a predictable URL structure.
- Provide clear previous and next navigation.
- Identify the current page.
- Remain keyboard accessible.
- Avoid hiding content from visitors who do not execute JavaScript.

Pagination should be introduced when it improves usability rather than simply because the archive reaches an arbitrary number of entries.

## 7. Weekly Collection Navigation

Weekly collections are one of the principal organisational structures of Verse & Variable.

Each collection brings together three independent literary explorations.

### 7.1 Weekly Index

A weekly index should eventually provide access to all published collections.

Each collection item may display:

- Week identifier.
- Collection title.
- Publication date.
- Brief description.
- Links to the associated articles.

### 7.2 Individual Weekly Page

A weekly collection page should display the three associated articles in their intended order.

The current Jekyll architecture uses:

- Collection: `weeks`
- Layout: `_layouts/week.html`
- Relationship field: `week_id`
- Entry ordering field: `entry_number`

The weekly layout uses the shared identifier to find related entries.

This relationship should remain consistent across all three articles.

### 7.3 Previous and Next Collections

When multiple weekly collections are available, provide navigation to:

- Previous weekly collection.
- Next weekly collection.
- Complete weekly archive.

The links should reflect actual publication order.

Do not generate links to collections that do not exist.

### 7.4 Weekly Continuity

A weekly collection should remain independently meaningful.

Readers should be able to open an individual article directly without first opening its weekly collection.

The weekly index should provide an additional discovery route, not become a mandatory intermediate page.

## 8. Language-Based Navigation

Language-based discovery is a central feature of the archive.

The language directory should allow visitors to explore works according to their original language.

### 8.1 Initial Language Directory

The initial directory covers:

| Language | Original name | Language code |
|---|---|---|
| Urdu | اردو | `ur` |
| Hindi | हिन्दी | `hi` |
| Marathi | मराठी | `mr` |
| Kannada | ಕನ್ನಡ | `kn` |
| Tamil | தமிழ் | `ta` |
| Malayalam | മലയാളം | `ml` |
| Telugu | తెలుగు | `te` |

Additional languages may be included when relevant material becomes available.

### 8.2 Language Index Pages

A dedicated index page for each language may be introduced as the archive grows.

A language page should display:

- Language name.
- Original-script name, where appropriate.
- Brief contextual description.
- Number of published entries, where reliably calculated.
- Related literary explorations.
- Relevant literary forms.
- Associated traditions, where appropriate.

### 8.3 Original Language Is Authoritative

Language classification should be based on the original work.

The language of an English translation should not replace the original language identifier.

A translated article remains associated with the language of the original literary work, unless the article itself examines a different work or a distinct multilingual creation.

### 8.4 Shared Scripts

Languages sharing a writing system must remain independently identifiable.

For example, Hindi and Marathi both use Devanagari.

They should not be merged into a single language category.

## 9. Literary-Form Navigation

Literary-form browsing allows visitors to explore works according to their structure and genre.

Potential index sections include:

- Ghazal.
- Nazm.
- Sher and couplets.
- Rubai.
- Free verse.
- Classical poetry.
- Song lyrics.
- Devotional poetry.
- Folk literature.
- Literary prose.

### 9.1 Classification Accuracy

The literary form should be established through the work's actual structure and tradition.

Do not assign a form merely because a text resembles another form superficially.

### 9.2 Multiple Forms

Some works may involve overlapping genres or mixed forms.

The archive should represent such cases accurately without forcing every work into an overly narrow classification.

### 9.3 Relationship to Categories and Tags

Literary-form discovery should use the controlled vocabulary established in `CATEGORIES_AND_TAGS.md`.

Avoid creating separate competing classifications through inconsistent spelling or naming.

## 10. Theme-Based Navigation

Thematic browsing allows readers to explore works that engage with related questions or human experiences.

Potential thematic groups include:

### Human Experience

- Love.
- Longing.
- Memory.
- Loss.
- Identity.
- Belonging.
- Solitude.
- Friendship.
- Compassion.

### Time and Existence

- Time.
- Impermanence.
- Mortality.
- Change.
- Absence.
- Continuity.
- Existence.
- Meaning.

### Nature and the World

- Nature.
- Seasons.
- Water.
- Rain.
- Light.
- Darkness.
- Landscape.
- Environment.

### Society and Culture

- Justice.
- Freedom.
- Tradition.
- Social change.
- Community.
- Conflict.
- Human dignity.

### Spiritual and Philosophical Reflection

- Devotion.
- Faith.
- Detachment.
- Contemplation.
- Consciousness.
- Ethics.
- Knowledge.
- Reality.

### 10.1 Meaningful Thematic Assignment

A theme should be assigned only when the article meaningfully explores it.

A single incidental mention of memory does not justify classifying an entire article as an exploration of memory.

### 10.2 Thematic Diversity

An article may appear under several thematic indexes.

This should help readers discover related material without implying that every work has one definitive interpretation.

## 11. Author and Contributor Navigation

An author and contributor index may be introduced when sufficient verified material is available.

It should distinguish between different creative and editorial roles.

Potential indexes include:

- Poets.
- Writers.
- Lyricists.
- Composers.
- Singers and performers.
- Translators.
- Adapters.
- Other contributors.

### 11.1 Name Consistency

Use an established display name consistently.

Where a creator's original-script name is available, it may be presented alongside the preferred English or transliterated form.

### 11.2 Attribution Roles

Do not combine different roles under an undifferentiated author label when doing so creates ambiguity.

A poet's collection should not automatically include musical performers as co-authors.

Likewise, the translator of an existing poem should not be listed as the original author.

### 11.3 Author Pages

An individual author page may eventually provide:

- Name.
- Original-script name, where appropriate.
- Brief verified biographical context.
- Relevant literary works.
- Published explorations.
- Bibliographic references.

Biographical details should be included only when supported by reliable sources.

### 11.4 Future Implementation

Author indexes are a proposed extension.

They should be introduced after the publication has established a reliable contributor metadata structure.

## 12. Scientific Subject Navigation

Scientific subject navigation provides an additional way to discover articles containing substantive scientific discussion.

The scientific index should remain complementary to the literary archive.

### 12.1 Principal Disciplines

Potential subject areas include:

- Mechanics.
- Nonlinear dynamics.
- Solid mechanics.
- Materials science.
- Physics.
- Wave physics.
- Nonlinear acoustics.
- Physical acoustics.
- Computational mechanics.
- Applied mathematics.
- Scientific computing.
- Inverse problems.
- Machine learning.

### 12.2 Scientific Concepts

More specialised navigation may include:

- Nonlinear waves.
- Nonlinear vibrations.
- Harmonic generation.
- Harmonic scattering.
- Wave mixing.
- Hysteresis.
- Contact nonlinearity.
- Nonlinear elasticity.
- Mechanical metamaterials.
- Phononic metamaterials.
- Nonlinear cloaking.
- Time modulation.
- Time crystals.
- Inverse design.

### 12.3 Relevance Requirements

A scientific label should be assigned only where the article engages meaningfully with the relevant concept.

A literary metaphor should not automatically become a scientific classification.

An article discussing resonance as an emotional metaphor should not automatically appear in a technical resonance index.

### 12.4 Scientific Subject Pages

A scientific subject page may eventually include:

- A concise introduction to the subject.
- Relevant terminology.
- Literary explorations that engage with it.
- Supporting scientific references.
- Links to related subjects.

Technical definitions should remain consistent with `GLOSSARY.md` and `RESEARCH_STANDARDS.md`.

## 13. Search Functionality

Search is a potentially valuable feature as the archive expands.

However, it should be implemented only after the underlying content and metadata structures have been validated.

### 13.1 Intended Search Coverage

Search may eventually support:

- Article titles.
- Original literary text.
- Transliteration.
- English translations.
- Author names.
- Language names.
- Literary forms.
- Themes.
- Scientific concepts.

### 13.2 Multilingual Search

Multilingual search requires care.

Search behaviour should account for:

- Original scripts.
- Transliteration variants.
- Alternative spellings.
- Diacritical marks.
- Unicode normalisation.
- Right-to-left text.
- Mixed-language queries.

An English query should not be assumed to identify every corresponding expression in another language.

### 13.3 Search Result Presentation

A search result should provide:

- Article title.
- Original language.
- Relevant excerpt, where available.
- Author attribution, where verified.
- Permanent article link.

Search results should make it clear why a result matched the query.

### 13.4 Empty Search Results

When no matching material is available, explain that no results were found.

Do not display fabricated suggestions or unrelated articles as though they matched the search.

### 13.5 Search Implementation

The current project should not assume that search functionality already exists.

Possible future approaches include client-side indexing or another lightweight search solution compatible with the static-site architecture.

Any selected approach should be assessed for:

- GitHub Pages compatibility.
- Build requirements.
- Index size.
- Browser performance.
- Multilingual support.
- Accessibility.
- Maintenance.
- Privacy implications.

The first implementation should favour simplicity and reliability.

## 14. Related Article Navigation

Related-content links can help readers explore connections between literary works and subjects.

Potential relationships include:

- Same author.
- Same language.
- Same literary form.
- Related theme.
- Same weekly collection.
- Related philosophical subject.
- Related scientific concept.

### 14.1 Relationship Quality

An article should not be labelled related merely because it shares a broad keyword.

Relationships should be meaningful and defensible.

### 14.2 Permanent Article Identity

Related links must point to the original permanent article URLs.

Do not create unnecessary duplicate copies of an article for different subject indexes.

### 14.3 Previous and Next Articles

Individual article navigation may include previous and next entries where the sequence is meaningful.

Weekly sequencing should use the actual entry ordering.

Where the archive contains no valid neighbouring entry, do not display a broken navigation control.

## 15. Navigation Within Individual Articles

Every individual literary exploration should provide a clear reading experience.

Recommended navigation elements include:

- Breadcrumbs, where useful.
- Article title.
- Original literary text.
- Translation and transliteration labels.
- Attribution and source information.
- Principal commentary.
- References.
- Related article links.
- Previous and next navigation, where available.
- A return route to the archive or weekly collection.

Navigation should not interrupt the literary experience with unnecessary interface elements.

The original literary work and its commentary should remain the principal visual focus.

## 16. URL and Permalink Principles

The publication uses stable, readable URLs for individual entries and weekly collections.

Current collection patterns:

**Individual entries**

`/entries/:path/`

**Weekly collections**

`/weeks/:name/`

Recommended future sections include:

- `/archive/`
- `/languages/`
- `/topics/`
- `/authors/`
- `/search/`

These are proposed URL structures and should not be treated as already implemented routes.

### 16.1 Permanent URLs

Once an article is published, its URL should remain stable wherever reasonably possible.

### 16.2 URL Changes

If an article URL must change:

- Review existing internal links.
- Update archive references.
- Update sitemap output.
- Update canonical metadata.
- Establish a suitable redirect where supported.
- Record significant changes.

Do not rename article files casually after publication.

### 16.3 Avoid Duplicate Pages

Different discovery routes should generally link to the same article page.

Do not create separate article copies for language, category, or thematic browsing.

## 17. Navigation Accessibility

The archive must remain usable by readers with different accessibility requirements.

Navigation should support:

- Keyboard operation.
- Visible focus indicators.
- Logical reading order.
- Semantic headings and landmarks.
- Descriptive link text.
- Accessible menu controls.
- Correct language metadata.
- Correct text direction.
- Screen-reader compatibility.
- Responsive presentation.

For Urdu and other right-to-left content, ensure that mixed-direction links and text labels remain understandable.

Filters and search controls should have meaningful labels and accessible states.

No essential navigation feature should require mouse hover alone.

## 18. Progressive Implementation Plan

The navigation system should be implemented in stages.

### Stage 1 — Existing Core Navigation

Prioritise:

- Homepage.
- Main archive.
- Language directory.
- Weekly collections.
- Individual article pages.
- About page.
- Existing primary navigation.

Validate the existing pages before adding new navigation complexity.

### Stage 2 — Archive Improvements

Introduce:

- Improved archive ordering.
- Consistent article metadata display.
- Weekly collection index.
- Better language-based discovery.
- Improved internal navigation.

### Stage 3 — Controlled Classification

After the category and tag metadata has been validated, introduce:

- Literary-form browsing.
- Theme-based indexes.
- Scientific subject indexes.
- Consistent category and tag presentation.

### Stage 4 — Contributors and Related Content

Once contributor metadata is sufficiently reliable, introduce:

- Author indexes.
- Translator indexes.
- Performer and lyricist indexes.
- Related article navigation.

### Stage 5 — Search and Advanced Discovery

Introduce multilingual search and additional filters after verifying the performance and accuracy of the underlying index.

This staged approach avoids building an elaborate navigation interface on top of incomplete or inconsistent metadata.

## 19. Technical Implementation Constraints

The existing publication is built on Jekyll and GitHub Pages.

Navigation changes must respect the current architecture.

Before implementing a new feature, verify:

- Whether the relevant collection or metadata exists.
- Whether the current Liquid templates can render it.
- Whether a supported Jekyll plugin is required.
- Whether the plugin is compatible with the GitHub Pages build environment.
- Whether the feature needs a separate generated page.
- Whether client-side JavaScript is necessary.
- Whether static HTML provides a simpler solution.

The current `_config.yml` has an intentionally lightweight configuration, including an empty plugin list.

Do not introduce plugin-dependent functionality without reviewing GitHub Pages compatibility and the publication's build settings.

A metadata field does not automatically generate an archive page.

Likewise, a tag does not automatically create a working tag index.

Every new navigation feature should be tested against the actual generated website.

## 20. Performance and Sustainability

The navigation system should remain lightweight.

Prefer:

- Static generated pages where practical.
- Reusable Jekyll includes.
- Simple and predictable URLs.
- Efficient archive rendering.
- Minimal external dependencies.
- Progressive enhancement.
- Semantic HTML.
- Limited client-side JavaScript.

Avoid unnecessary animation, excessive interface complexity, and features that provide little value to readers.

The navigation architecture should remain maintainable by someone familiar with ordinary Markdown, YAML, Liquid, HTML, CSS, and JavaScript.

## 21. Navigation Quality Checklist

Before introducing or modifying a navigation feature, review:

### Information architecture

- [ ] Navigation item has a clear purpose.
- [ ] Its placement is logical.
- [ ] It does not duplicate an existing destination.
- [ ] Related sections use consistent naming.

### Content accuracy

- [ ] Only existing and valid articles are listed.
- [ ] Language metadata is correct.
- [ ] Attribution is verified.
- [ ] Categories and tags are relevant.
- [ ] Scientific classifications are technically defensible.

### Technical correctness

- [ ] All URLs resolve.
- [ ] Permanent article links are preserved.
- [ ] No duplicate article pages are created.
- [ ] Jekyll renders the intended content.
- [ ] Sitemap output remains accurate.
- [ ] Canonical metadata is correct.

### Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus indicators are visible.
- [ ] Controls have accessible names.
- [ ] Language and direction metadata are correct.
- [ ] Mobile navigation is functional.
- [ ] Search and filtering controls are understandable.

### Performance

- [ ] Unnecessary JavaScript is avoided.
- [ ] External dependencies are justified.
- [ ] Archive pages remain responsive.
- [ ] Navigation remains usable if enhancement scripts fail.

## 22. Future Development

The archive may eventually support additional discovery dimensions.

Potential developments include:

- Cross-language literary comparisons.
- Chronological author indexes.
- Literary movement indexes.
- Historical-period browsing.
- Regional cultural collections.
- Philosophical school indexes.
- Scientific concept relationships.
- Thematic reading pathways.
- Curated interdisciplinary collections.
- Advanced multilingual search.

These features should be introduced only when the archive contains sufficient verified material to support them.

The publication should avoid presenting empty or superficial classification systems simply to appear comprehensive.

## 23. Relationship with Other Documentation

This specification should be maintained alongside:

- `ARTICLE_METADATA_REFERENCE.md`
- `CATEGORIES_AND_TAGS.md`
- `ARTICLE_TEMPLATE.md`
- `WEEKLY_COLLECTION_TEMPLATE.md`
- `EDITORIAL_POLICY.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `GLOSSARY.md`
- `ACCESSIBILITY.md`
- `ROADMAP.md`

Changes to metadata or navigation should be reflected in the relevant technical templates and documentation.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
