
# Search Specification

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document defines the functional, editorial, technical, and accessibility requirements for the search system planned for Verse & Variable.

The publication brings together literary expressions from several languages and connects them, where appropriate, with philosophical, historical, mathematical, and scientific subjects.

Readers may approach the archive using different kinds of information.

For example, someone may search for:

- An original Urdu poetic expression.
- A Hindi or Marathi literary work.
- A Kannada, Tamil, Malayalam, or Telugu word.
- A poet's name.
- A song lyric or literary title.
- A Latin-script transliteration.
- An English translation.
- A recurring theme such as memory or impermanence.
- A scientific concept such as nonlinear waves or harmonic generation.

The search system should support these different approaches without treating them as equivalent forms of information.

Its purpose is to make the archive discoverable while respecting linguistic accuracy, original literary expression, technical integrity, accessibility, and visitor privacy.

## 2. Search Design Principles

### 2.1 Multilingual by Design

Search should be designed around the actual writing systems and languages represented in the archive.

English should not be the only language in which meaningful searches can be performed.

### 2.2 Original Expression Takes Priority

Original literary text should remain independently searchable.

Search should not depend exclusively on English translations or transliterations.

### 2.3 Multiple Routes to Discovery

The same article may be discoverable through its title, original text, translation, author, literary form, theme, or scientific subject.

These routes should lead to the same permanent article rather than create duplicate article records.

### 2.4 Accurate Matching

A search result should reflect an actual match within the indexed content or metadata.

The system should not manufacture relationships between words that merely sound similar or belong to broadly related subjects.

### 2.5 Transparent Results

Readers should be able to understand why an article appeared in the results.

Where practical, the matching field or a relevant excerpt should be displayed.

### 2.6 Privacy-Conscious Operation

The initial implementation should preferably use a locally downloaded static search index and browser-side searching.

The search feature should not require a visitor account or transmit ordinary search queries to an external search service.

### 2.7 Progressive Development

Begin with reliable exact and partial text matching.

More advanced linguistic processing should be added only when it can be implemented and tested accurately for the relevant language.

## 3. Search Scope

The search system should cover the publicly published content intended for discovery.

### 3.1 Individual Literary Entries

The `entries` collection should form the principal search corpus.

Searchable article information may include:

- Article title.
- Article description.
- Original work title.
- Original literary text.
- Transliteration.
- English translation.
- Author.
- Lyricist.
- Composer.
- Performer.
- Translator.
- Literary category.
- Literary-form tags.
- Thematic tags.
- Philosophical tags.
- Scientific disciplines.
- Scientific concepts.
- Principal article commentary.

Only fields that actually exist in a published entry or are generated reliably from its content should be indexed.

### 3.2 Weekly Collections

The `weeks` collection may also be indexed for searches concerning:

- Weekly collection titles.
- Collection descriptions.
- Editorial introductions.
- Relevant dates.
- Weekly identifiers.

A weekly collection result should be distinguishable from an individual literary article.

### 3.3 Informational Pages

Selected public informational pages may be included when they improve discovery.

Examples include:

- About.
- Languages.
- Archive.
- Editorial policy.
- Publication documentation.

Technical documentation should not automatically dominate ordinary literary search results.

A future search implementation may provide a separate documentation-search option if there is sufficient demand.

### 3.4 Excluded Content

The search index should exclude:

- The custom 404 page.
- Unpublished content.
- Drafts not intended for public release.
- Duplicate representations of the same article.
- Administrative or build-only files.
- Private or confidential information.
- Temporary diagnostic output.

The index should contain only material intended for public discovery.

## 4. Search Entry Point

A dedicated search page may be introduced at:

`/search/`

This URL is a proposed route and should not be treated as an implemented page until it has been created and tested.

### 4.1 Search Interface

The search page should provide:

- A clearly labelled search input.
- A search action.
- An optional language filter.
- An optional result-type filter.
- An informative results area.
- A clear-results control where useful.
- A helpful empty-results message.

The initial interface should remain simple.

Avoid displaying many filters before there is sufficient archive content to make them useful.

### 4.2 Search Field

The search input should accept:

- Original-script text.
- Latin-script transliteration.
- English text.
- Names.
- Literary titles.
- Scientific terminology.
- Mixed-language queries.

The input should support ordinary copy-and-paste operations and correctly preserve Unicode text.

### 4.3 Search Activation

Search should support:

- Keyboard submission using Enter.
- Activation through a clearly labelled search control.
- Repeated searches without reloading the entire website unnecessarily.
- A way to clear the current query.

Do not require a mouse or pointer interaction.

## 5. Multilingual Search Requirements

Multilingual support is the most important distinguishing feature of this search system.

Different writing systems have different character properties, spelling conventions, and linguistic structures.

A single universal normalisation rule cannot safely handle every language.

### 5.1 Unicode Support

The search system should support Unicode text.

This includes the writing systems used for:

- Urdu.
- Hindi.
- Marathi.
- Kannada.
- Tamil.
- Malayalam.
- Telugu.
- English and Latin transliteration.

The implementation should preserve original text without converting the stored literary expression into a simplified representation.

### 5.2 Unicode Normalisation

Where appropriate, search matching should use Unicode normalisation, with NFC as a suitable initial baseline.

Normalisation should be applied to a separate search representation rather than replacing the original stored text.

This distinction is important because:

- Different Unicode sequences may represent visually equivalent text.
- Combining marks may affect matching.
- Some character transformations are language-specific.
- Literary orthography must remain intact.
- Normalisation may be inappropriate for particular historical or scholarly distinctions.

Do not apply destructive transformations to the original text merely to improve search convenience.

### 5.3 Original-Script Matching

A query in the original script should be able to find matching passages in the original literary text.

For example:

An Urdu query should be compared with the Urdu text field rather than requiring the visitor to know its English transliteration.

Likewise, a Tamil query should be able to find Tamil material directly.

### 5.4 Transliteration Matching

Where an article has a transliteration field, that field should be independently searchable.

A Latin-script query may therefore find an article whose original text is written in another script.

However, transliteration is not a universal one-to-one representation.

Different writers may use different Roman spellings for the same original expression.

Search should accommodate documented alternatives where useful without silently treating every possible spelling as identical.

### 5.5 English Translation Matching

Where an English translation is published, its text should also be indexed.

An English query may therefore discover an article through its translated expression.

Search results should identify that the match occurred in a translation rather than implying that the English phrase appears in the original work.

### 5.6 Language-Specific Matching

Language-specific matching rules may eventually be introduced for:

- Diacritics.
- Combining marks.
- Character variants.
- Orthographic alternatives.
- Transliteration variants.
- Search-term tokenisation.
- Language-specific word boundaries.

These rules should be implemented only after testing with real material from the relevant language.

### 5.7 Urdu Bidirectional Text

Search should support right-to-left Urdu input and mixed Urdu-English queries.

The interface should:

- Preserve the entered text.
- Display Urdu correctly.
- Avoid unexpected character reordering.
- Support appropriate text direction.
- Keep the result title and original excerpt readable.

Search input direction may be determined using suitable bidirectional handling rather than forcing every query to use the same direction.

## 6. Searchable Metadata

Search should include relevant metadata alongside article text.

### 6.1 Article Identity

Useful searchable fields include:

- `title`
- `description`
- `work_title`
- Article URL.
- Publication date.

### 6.2 Creator and Attribution Fields

Where present and verified:

- `author`
- `lyricist`
- `composer`
- `performer`
- `translator`

These fields should retain their distinct roles.

A search for a singer should not imply that the singer wrote the original lyrics.

### 6.3 Language Metadata

Include:

- Language display name.
- Original-script language name, where useful.
- Language identifier.
- Language code.

This allows a reader to search for a language by either its English or original-script name where the search index contains both.

The actual language identity must continue to come from `_data/languages.yml` and the article's corresponding metadata.

### 6.4 Categories and Tags

Where implemented and consistently maintained, search may index:

- Literary categories.
- Literary-form tags.
- Thematic tags.
- Philosophical tags.
- Scientific discipline tags.
- Scientific concept tags.

The search system should use the controlled vocabulary established in `CATEGORIES_AND_TAGS.md`.

### 6.5 Commentary

The article's principal English commentary may be indexed.

This allows readers to discover articles through ideas discussed in the commentary even when those ideas do not appear in the original literary expression.

A match in commentary should be distinguishable from a match in the original text or translation where practical.

## 7. Proposed Search Index

A lightweight generated search index is the preferred initial technical approach.

A possible generated resource is:

`/search-index.json`

This is a proposed output file, not a file that currently exists merely because it is documented here.

The search index should contain structured information derived from published pages.

### 7.1 Recommended Record Structure

An individual article record may contain:

- `id`
- `type`
- `title`
- `url`
- `description`
- `date`
- `week_id`
- `language_id`
- `language_code`
- `language_name`
- `work_title`
- `author`
- `lyricist`
- `composer`
- `performer`
- `translator`
- `original_text`
- `transliteration`
- `translation`
- `categories`
- `tags`
- `content`

Not every record requires every field.

Optional fields should be omitted or represented consistently when unavailable.

The index should avoid repeating information unnecessarily.

### 7.2 Example Record

The following illustrates the conceptual structure of one search record.

    {
      "id": "example-literary-exploration",
      "type": "entry",
      "title": "A Literary Exploration",
      "url": "/verse-variable/entries/example-literary-exploration/",
      "description": "An exploration of literary expression and meaning.",
      "date": "2026-11-12",
      "week_id": "week-2026-46",
      "language_id": "urdu",
      "language_code": "ur",
      "language_name": "Urdu",
      "author": "Example Author",
      "original_text": "Original literary text",
      "transliteration": "Original literary text in Latin script",
      "translation": "English translation",
      "categories": ["poetry"],
      "tags": ["form:ghazal", "theme:memory"],
      "content": "Published article commentary"
    }

This is a schema illustration, not actual article content.

### 7.3 Original URL Handling

Search results should link to the established canonical article URL.

The implementation must account for the project's base URL:

`/verse-variable`

Avoid generating broken URLs by confusing the repository's GitHub Pages project path with the domain root.

### 7.4 Index Generation

The search index should preferably be generated at build time from the actual published Jekyll collections.

This reduces the risk of maintaining a separate, manually edited copy of article metadata.

Where practical, the index should be generated automatically from the same source content used to build the website.

## 8. Search Matching and Ranking

Search results should be ordered according to relevance rather than merely publication date.

The ranking model should remain understandable and maintainable.

### 8.1 Initial Matching Priorities

A proposed relevance order is:

1. Exact article title.
2. Exact original literary text or work title.
3. Exact author or creator name.
4. Exact transliteration.
5. Exact English translation.
6. Partial title and metadata matches.
7. Original-text matches.
8. Translation and transliteration matches.
9. Main commentary matches.
10. Relevant category and tag matches.

The order may be refined after testing.

### 8.2 Phrase Matching

An exact phrase match should generally receive a higher relevance score than scattered individual word matches.

For example, a query containing several words in a specific order should prefer articles containing that phrase.

### 8.3 Partial Matching

Partial matching may help visitors who:

- Remember only part of a title.
- Enter an incomplete name.
- Remember a short passage.
- Make a small spelling error.

However, partial matching should be conservative.

Excessively broad matching can produce large numbers of irrelevant results.

### 8.4 Field Weighting

Different fields should receive different relevance weights.

Suggested initial priorities:

| Field | Relative importance |
|---|---|
| Article title | Very high |
| Original work title | Very high |
| Author or creator | Very high |
| Exact original passage | Very high |
| Transliteration | High |
| Translation | High |
| Main commentary | Medium |
| Description | Medium |
| Categories and tags | Medium |
| General metadata | Low to medium |

These are design priorities rather than final numerical ranking weights.

### 8.5 Publication Date

Publication date may be used as a secondary ordering factor when two results have comparable relevance.

A newly published article should not automatically outrank an exact match from an older article.

Relevance should remain the principal sorting criterion.

### 8.6 Duplicate Results

The same article should not appear multiple times merely because the query matches several fields.

Instead, one result should display the article once, with the most useful matching excerpt or information.

## 9. Search Result Presentation

Every result should be concise and informative.

### 9.1 Recommended Result Information

An individual result may display:

- Article title.
- Original language.
- Author or creator, where verified.
- Brief description.
- Publication date.
- Relevant matching excerpt.
- Permanent article link.

### 9.2 Match Context

Where practical, results should display a short excerpt showing why the article matched.

For example:

- Match in original text.
- Match in transliteration.
- Match in English translation.
- Match in author metadata.
- Match in commentary.

This distinction is particularly useful for multilingual literary searches.

### 9.3 Search Highlighting

Matching terms may be highlighted in the result excerpt.

Highlighting should:

- Preserve the original script.
- Avoid altering the actual literary text.
- Remain understandable to screen readers.
- Avoid relying on colour alone.
- Handle right-to-left text appropriately.

Search highlighting must not introduce HTML or character corruption into original passages.

### 9.4 Result Types

Where multiple content types are indexed, identify them clearly.

Potential labels include:

- Literary article.
- Weekly collection.
- Informational page.

Do not mix technical documentation and literary content without providing an understandable distinction.

## 10. Search Filters

Filters should be introduced progressively.

The initial search experience should not overwhelm visitors with unnecessary controls.

### 10.1 Language Filter

Potential language choices:

- Urdu.
- Hindi.
- Marathi.
- Kannada.
- Tamil.
- Malayalam.
- Telugu.
- Additional languages as the archive expands.

The filter should use the article's original language metadata.

### 10.2 Content-Type Filter

Possible options:

- Individual entries.
- Weekly collections.
- Informational pages.

### 10.3 Literary-Form Filter

Possible options:

- Ghazal.
- Nazm.
- Poetry.
- Couplet.
- Song lyrics.
- Folk literature.
- Other verified forms.

### 10.4 Theme Filter

Possible options:

- Memory.
- Time.
- Love.
- Identity.
- Nature.
- Human experience.
- Other established thematic classifications.

### 10.5 Scientific Subject Filter

Possible options:

- Nonlinear dynamics.
- Mechanics.
- Wave physics.
- Nonlinear acoustics.
- Metamaterials.
- Computational mechanics.
- Other established disciplines.

This filter should include only articles with substantive scientific engagement.

### 10.6 Filter Behaviour

Filters should operate consistently with the active search query.

Clearing a filter should not unexpectedly erase the query itself.

The interface should make the selected filtering conditions visible.

## 11. Search Query Behaviour

The initial search implementation should support ordinary user expectations.

### 11.1 Empty Queries

An empty query should not generate an unnecessarily large list of results.

Instead, display a useful instruction explaining how to search the archive.

### 11.2 Exact Phrase Queries

Quoted phrase searching may be supported when the selected search engine can implement it reliably.

If exact phrase syntax is not implemented, do not pretend that quotation marks have special meaning.

### 11.3 Multiple Words

The search engine should define how it handles queries containing multiple words.

A reasonable initial approach is to prioritise records containing all meaningful query terms while allowing partial matches with lower ranking where appropriate.

The precise behaviour should be documented in the search interface.

### 11.4 Case Handling

For languages with case distinctions, matching may use appropriate case-folding.

The original displayed content must remain unchanged.

### 11.5 Spelling Variants

Where reliable alternative spellings exist for a work or person, they may be indexed as supplementary search aliases.

Such aliases should not replace the preferred display name.

### 11.6 Search Corrections

Automatic spelling correction or fuzzy matching should not be introduced until its behaviour has been tested with all supported writing systems.

A correction suitable for English may be inappropriate for Urdu or another language.

## 12. Search Interface States

The search interface should handle the following states clearly.

### 12.1 Initial State

Explain that visitors can search by:

- Original text.
- Title.
- Author.
- Transliteration.
- Translation.
- Theme.
- Scientific subject.

### 12.2 Loading State

Where the search index must be loaded, communicate the loading state without unnecessarily delaying interaction.

### 12.3 Results State

Display the results and the number of matching records where reliably available.

### 12.4 No Results State

Provide a helpful message.

Suggested wording:

"No matching entries were found. Try another spelling, a shorter phrase, or a different language representation."

Do not imply that the archive contains a work when no verified matching entry exists.

### 12.5 Error State

If the search index cannot be loaded, explain that search is temporarily unavailable.

Where practical, provide a link back to the main archive.

Do not display an empty results page as though the search completed successfully.

### 12.6 Filtered State

Clearly communicate which filters are active and provide a way to remove them.

## 13. Accessibility Requirements

Search must support readers with different accessibility requirements.

The implementation should aim to support WCAG 2.2 Level AA.

### 13.1 Input Accessibility

- Provide a visible label for the search field.
- Use an appropriate input type.
- Support keyboard operation.
- Preserve the entered Unicode text.
- Provide a visible focus indicator.
- Avoid relying exclusively on placeholder text.

### 13.2 Result Accessibility

- Present results using semantic HTML.
- Use meaningful heading levels.
- Provide descriptive article links.
- Communicate result updates accessibly.
- Ensure match highlighting is understandable without colour.
- Avoid unexpected focus changes.

### 13.3 Multilingual Accessibility

- Identify the language of original-script excerpts.
- Apply appropriate text direction.
- Support Urdu right-to-left display.
- Preserve mixed-language reading order.
- Ensure that search results remain understandable when read aloud.

### 13.4 Keyboard Behaviour

Visitors should be able to:

- Focus the search input.
- Enter and edit a query.
- Submit the search.
- Navigate results.
- Operate filters.
- Clear a query.
- Return to the archive.

No essential operation should require a mouse.

## 14. Privacy and Data Handling

The preferred initial search architecture is local static search.

Under this design, the search index is downloaded from the publication's own hosting location and queries are processed in the visitor's browser.

### 14.1 No Account Requirement

Search should not require visitor registration or a personal account.

### 14.2 No External Query Transmission by Default

The initial implementation should not send ordinary search queries to third-party search providers or advertising services.

### 14.3 No Search Profiling

The publication should not intentionally build visitor profiles from search terms or browsing behaviour.

### 14.4 Browser Storage

Search history should not be stored persistently unless a clearly justified feature is introduced and its behaviour is documented.

Any optional browser-side preference should be distinguished from server-side visitor identification.

### 14.5 Hosting Infrastructure

Access to the search page and static search-index resource remains subject to the hosting provider's normal technical processing and privacy practices.

Refer to `PRIVACY.md` for the broader privacy policy.

### 14.6 Future External Search Services

If an external search service is considered in the future, evaluate:

- Whether queries leave the browser.
- What visitor information is transmitted.
- Whether the provider records queries.
- Data-retention practices.
- Privacy implications.
- Accessibility.
- Service availability.
- Additional dependencies.

Do not introduce external query processing without reviewing its implications and updating the privacy documentation where necessary.

## 15. Technical Implementation

### 15.1 Preferred Initial Architecture

The preferred implementation is:

1. Generate a static search index during the Jekyll build.
2. Make the index available as a public static resource.
3. Load the index in the browser when search is used.
4. Process queries locally.
5. Display matching article records.
6. Link each result to its permanent page.

This approach is compatible in principle with a static publishing architecture and avoids requiring a dedicated search server.

Actual implementation should be validated against the project's GitHub Pages build environment.

### 15.2 Jekyll Integration

The search index should be generated from the content collections rather than manually maintained.

Potential inputs include:

- `site.entries`.
- `site.weeks`.
- Selected public pages.
- Relevant language metadata.
- Supported article frontmatter.

The generated output must reflect the actual published content.

### 15.3 JavaScript

Client-side JavaScript may be used for:

- Loading the search index.
- Matching queries.
- Ranking results.
- Applying filters.
- Displaying excerpts.
- Updating accessible result information.

The feature should fail gracefully if JavaScript or the search index is unavailable.

The main archive should remain available as an alternative discovery route.

### 15.4 Search Engine Selection

The initial implementation should prefer a lightweight solution.

Potential approaches include:

- A small custom JavaScript search implementation.
- A lightweight static-site search library.
- A suitable client-side indexing and query library.

No specific library is mandatory.

Before selecting one, evaluate:

- Unicode support.
- Multilingual behaviour.
- Search-index size.
- Performance.
- Maintenance activity.
- Licence compatibility.
- Dependency footprint.
- GitHub Pages compatibility.
- Accessibility.

### 15.5 GitHub Pages Compatibility

The current project uses Jekyll with a lightweight configuration.

Do not introduce server-side search infrastructure or unsupported build plugins without reviewing the hosting arrangement.

Any additional dependency should be documented in the repository and its applicable licence recorded in `ASSET_CREDITS.md`.

### 15.6 Index Size and Performance

As the archive expands, search performance should be monitored.

Possible improvements include:

- Compact JSON records.
- Selective indexing of relevant content.
- Lazy loading.
- Efficient matching.
- Avoiding unnecessary duplicate fields.
- Caching static resources through appropriate browser behaviour.

Do not remove important original-language text solely to reduce index size without considering the consequences for multilingual discovery.

## 16. Security and Input Handling

Search queries and indexed content should be handled safely.

The implementation should:

- Treat visitor input as untrusted text.
- Avoid executing query contents as HTML or JavaScript.
- Render search excerpts safely.
- Avoid inserting untrusted values through unsafe HTML operations.
- Preserve encoded text correctly.
- Validate generated article URLs.
- Avoid exposing unpublished or private information.
- Avoid loading unnecessary third-party scripts.

Matching and highlighting should operate on safe text representations.

The search system must not interpret an ordinary search query as executable code.

## 17. Search Quality Testing

Testing should use actual material from the publication's supported languages.

### 17.1 English

Test:

- Full article title.
- Partial title.
- Author name.
- English translation.
- A phrase from the commentary.
- A scientific term.

### 17.2 Urdu

Test:

- Original-script query.
- Partial phrase.
- A word from a ghazal.
- A mixed Urdu-English query.
- Right-to-left result excerpts.

### 17.3 Hindi and Marathi

Test:

- Original Devanagari text.
- Relevant titles and names.
- Queries containing combining characters.
- Language-filter behaviour.
- Potentially ambiguous transliterations.

### 17.4 Kannada, Tamil, Malayalam, and Telugu

Test:

- Original-script matching.
- Full and partial phrases.
- Character rendering.
- Unicode normalisation.
- Result excerpts.
- Correct language identification.

### 17.5 Metadata

Test:

- Author searches.
- Work-title searches.
- Literary-form filters.
- Theme searches.
- Scientific-concept searches.
- Weekly collection searches.

### 17.6 Error Handling

Test:

- Empty query.
- No matching records.
- Unavailable search index.
- Invalid input.
- Repeated searches.
- Multiple active filters.
- Clearing search conditions.

### 17.7 Relevance

Review whether:

- Exact title matches rank highly.
- Original text matches are discoverable.
- Transliteration matches identify the correct article.
- Translation matches are distinguishable.
- Commentary matches do not overwhelm exact literary matches.
- Duplicate results are avoided.

## 18. Search Acceptance Criteria

The initial search feature should not be considered ready until it satisfies the following conditions.

### Functional

- [ ] Search page loads correctly.
- [ ] Published individual entries are indexed.
- [ ] Weekly collections are indexed where intended.
- [ ] Search results link to valid permanent pages.
- [ ] Queries return relevant matches.
- [ ] Results are not duplicated.
- [ ] Empty and error states are handled.

### Multilingual

- [ ] Unicode text is preserved.
- [ ] Original scripts are searchable.
- [ ] Transliteration fields are searchable.
- [ ] English translations are searchable.
- [ ] Urdu text direction is handled correctly.
- [ ] Supported Indic scripts are tested.
- [ ] Language metadata is accurate.

### Accessibility

- [ ] Search controls have meaningful labels.
- [ ] Keyboard navigation works.
- [ ] Focus is visible.
- [ ] Search results use semantic structure.
- [ ] Result updates are understandable to assistive technologies.
- [ ] Mixed-direction content is presented correctly.

### Privacy and Security

- [ ] Ordinary queries are processed locally in the initial implementation.
- [ ] No unnecessary external query service is used.
- [ ] Search input is treated as untrusted text.
- [ ] Unsafe HTML insertion is avoided.
- [ ] Unpublished content is excluded.
- [ ] Private information is not included in the index.

### Technical

- [ ] Index generation works with Jekyll.
- [ ] GitHub Pages deployment succeeds.
- [ ] Search works under the `/verse-variable` base URL.
- [ ] Index size is reasonable.
- [ ] The feature degrades gracefully.
- [ ] Third-party dependencies are documented.

## 19. Progressive Implementation Plan

Search should be introduced in manageable stages.

### Stage 1 — Basic Static Search

Implement:

- A dedicated search page.
- A generated JSON search index.
- Article-title matching.
- Author matching.
- English description and commentary matching.
- Basic relevance ordering.
- Safe result rendering.

### Stage 2 — Multilingual Search

Add:

- Original-script matching.
- Transliteration matching.
- English translation matching.
- Unicode normalisation.
- Correct right-to-left handling.
- Language-aware result presentation.

### Stage 3 — Search Filters

Introduce:

- Original-language filter.
- Content-type filter.
- Literary-form filter.
- Thematic filter.
- Scientific-subject filter.

Use only filters supported by sufficiently complete metadata.

### Stage 4 — Advanced Discovery

Consider:

- Phrase searching.
- Alternative spellings.
- Improved relevance weighting.
- Cross-language discovery.
- Related-content suggestions.
- More sophisticated language-specific matching.

Advanced features should be introduced only after they have been tested with representative literary material.

## 20. Relationship with Other Documentation

This specification should be maintained alongside:

- `ARCHIVE_NAVIGATION_SPEC.md`
- `CATEGORIES_AND_TAGS.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `ARTICLE_TEMPLATE.md`
- `WEEKLY_COLLECTION_TEMPLATE.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `GLOSSARY.md`
- `PRIVACY.md`
- `ACCESSIBILITY.md`
- `SECURITY.md`
- `ROADMAP.md`

Search should use the same language identifiers, metadata conventions, classification vocabulary, and accessibility principles established in these documents.

## 21. Future Development

The long-term objective is to make the Verse & Variable archive searchable across linguistic and intellectual boundaries.

Future capabilities may include:

- Searching by original literary passages.
- Alternative transliterations.
- Cross-language word and concept discovery.
- Author and translator indexes.
- Thematic reading pathways.
- Scientific subject exploration.
- Related literary expressions.
- More advanced multilingual query processing.

These capabilities should emerge from the actual content of the archive and from demonstrated reader needs.

The aim is not to create the most technically elaborate search engine. It is to create a dependable discovery system that helps readers encounter literature, ideas, and scientific connections they might otherwise never find.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
