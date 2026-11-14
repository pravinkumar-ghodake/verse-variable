# Schema and Structured Data

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the structured-data conventions for Verse & Variable.

Verse & Variable is an independent Indian literary journal devoted to poetry, shayari, ghazals, nazms, literary prose, philosophical expressions and other forms of Indian literary expression.

Its initial linguistic foundation comprises Urdu, Hindi, Marathi, Kannada, Tamil, Malayalam and Telugu.

The publication contains individual literary explorations, weekly collections, original literary expressions, translations, transliterations, editorial commentary, attribution information and relevant contextual references.

Structured data provides machine-readable descriptions of web pages and their principal entities.

The objectives are to:

- Identify the publication consistently.
- Describe the website and its public pages.
- Represent individual literary explorations accurately.
- Identify the actual author of each published article.
- Distinguish original literary creators from article authors.
- Represent translations and adaptations accurately where appropriate.
- Represent weekly collections and their constituent articles.
- Describe language and subject information.
- Establish meaningful relationships between pages and creative works.
- Support accurate discovery by search engines and other information systems.
- Preserve the distinction between the journal's literary scope and the editor's wider intellectual and research background.

This document defines an implementation standard. It does not claim that every proposed structured-data feature has already been implemented.

## 2. Fundamental Principles

### 2.1 Structured Data Must Represent Reality

Every structured-data property should describe something that actually exists and is supported by the visible page or reliable project information.

Do not add properties merely because they are available in Schema.org.

### 2.2 Visible Content Must Agree with Markup

Information represented in JSON-LD should be consistent with the corresponding page.

Do not introduce hidden authors, invented contributors, unsupported affiliations, misleading descriptions or irrelevant scientific subjects through structured metadata.

Google's structured-data policies require markup to represent content that is available to readers and accurately describe the subject of the page.

### 2.3 Correct Intellectual Attribution

The author of an individual article is not automatically the author of the literary work discussed in it.

For example:

- Article author: the person who wrote the published commentary.
- Original poet: the creator of the poem being explored.
- Lyricist: the person who wrote the lyrics.
- Composer: the creator of the musical composition.
- Translator: the person who prepared a translation.
- Performer: the person who performed the work.

These identities should be represented separately.

### 2.4 Use Standard Vocabulary

Use established Schema.org types and properties wherever they accurately describe the page.

Avoid inventing custom properties when an appropriate established property exists.

### 2.5 Avoid Misleading Associations

A literary analogy should not be represented as an established scientific relationship.

Likewise, mentioning a university, research institution, publisher or cultural organisation does not establish a formal affiliation.

The editor's research background should not be used to classify the entire publication as a scientific or interdisciplinary research journal.

### 2.6 Structured Data Is Not a Ranking Guarantee

Structured data helps systems understand content.

Its presence does not guarantee indexing, higher search rankings, enhanced search appearances or eligibility for every search feature.

### 2.7 Implementation Must Match the Actual Site

This document describes the intended structured-data architecture.

Before introducing or changing markup, inspect the actual Jekyll configuration, layouts, includes and rendered HTML.

Do not assume that a proposed property, metadata field or reusable component already exists.

## 3. Structured Data Format

The preferred format for the publication is **JSON-LD**.

JSON-LD is suitable for describing web pages and related entities without requiring the site's visible HTML structure to be rewritten around metadata attributes.

The standard context should be:

    "@context": "https://schema.org"

### 3.1 Script Placement

JSON-LD should generally be placed inside the HTML document's head section.

For this project, the existing implementation location is:

    _includes/head.html

Alternatively, reusable structured-data components may be created and included from that location.

The existing implementation should be inspected before introducing additional blocks.

### 3.2 JSON-LD Syntax

Structured data must use valid JSON.

Important syntax rules include:

- Double quotation marks for property names and string values.
- Commas between properties.
- No trailing commas.
- Correctly nested objects and arrays.
- Valid absolute URLs where required.
- Correctly formatted dates.
- Proper escaping of special characters.

Invalid JSON can prevent systems from interpreting the markup correctly.

### 3.3 Stable Entity Identifiers

Where useful, identify entities using stable `@id` values.

Recommended patterns include:

    https://pravinkumar-ghodake.github.io/verse-variable/#website

    https://pravinkumar-ghodake.github.io/verse-variable/#webpage

    https://pravinkumar-ghodake.github.io/verse-variable/#editor

    https://pravinkumar-ghodake.github.io/verse-variable/entries/example/#article

    https://pravinkumar-ghodake.github.io/verse-variable/weeks/week-2026-46/#webpage

The identifiers should refer to real entities and remain consistent across pages.

### 3.4 JSON-LD Graphs

An `@graph` may be used to describe multiple related entities within one JSON-LD document.

For example, a homepage may describe:

- The website.
- Its main webpage.
- Its founder and editor, where appropriate.

An individual article may describe:

- The article.
- Its author.
- The website to which it belongs.
- The original literary work being explored, where useful.
- The relevant translator or other creative contributor, where verified.

A weekly collection may describe:

- The collection page.
- Its relationship with the website.
- Its constituent published articles.

Use graph relationships only when they are meaningful.

Avoid duplicating identical entities under inconsistent identifiers.

## 4. Recommended Schema.org Types

The following types provide the initial vocabulary for the publication.

| Schema.org type | Intended purpose |
|---|---|
| `WebSite` | Describe the publication website |
| `WebPage` | Describe an individual web page |
| `CollectionPage` | Describe a page presenting a collection of content |
| `Article` | Describe an individual literary exploration |
| `BlogPosting` | Alternative article type when the content genuinely fits a blog-post format |
| `Person` | Identify a real individual |
| `CreativeWork` | Represent an original literary or other creative work |
| `ItemList` | Represent an ordered collection of articles |
| `ListItem` | Identify an individual item within a list |
| `BreadcrumbList` | Describe an implemented breadcrumb navigation trail |
| `AboutPage` | Describe an actual about or profile information page |

These types are not all required on every page.

Select the type that accurately represents the page's purpose.

### 4.1 Publication Identity Is Not an Organization by Default

An independent publication project is not automatically a registered organization or formally constituted institution.

Do not create a fictitious `Organization` entity merely because the publication has a name, website and visual identity.

Use `Organization` only if a genuine organization exists and its representation is accurate.

The publication website can be described using `WebSite` without inventing a separate organizational entity.

## 5. Publication Website — WebSite

The homepage should describe the website using the `WebSite` type.

### 5.1 Recommended Identity

**Name:** Verse & Variable

**Publication type:** Independent Indian literary journal

**URL:**

    https://pravinkumar-ghodake.github.io/verse-variable/

**Description:** An independent Indian literary journal devoted to poetry, shayari, literature, language, philosophy and human experience across India's diverse literary traditions.

**Tagline:** A line of verse. A line of inquiry.

**Urdu expression:** لفظ سے لہر تک

**Founder and editor:** Pravinkumar Ghodake

### 5.2 Suggested JSON-LD

The following is a proposed example for the homepage.

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://pravinkumar-ghodake.github.io/verse-variable/#website",
      "url": "https://pravinkumar-ghodake.github.io/verse-variable/",
      "name": "Verse & Variable",
      "description": "An independent Indian literary journal devoted to poetry, shayari, literature, language, philosophy and human experience across India's diverse literary traditions.",
      "inLanguage": [
        "en",
        "ur",
        "hi",
        "mr",
        "kn",
        "ta",
        "ml",
        "te"
      ]
    }

This example describes the intended language coverage.

Keep the language list aligned with the languages actually represented in the public website.

The list should not imply that every page is independently available in every language.

The principal language of individual pages should be identified separately.

### 5.3 Website Identity Consistency

The website's name and URL should remain consistent across:

- Homepage metadata.
- JSON-LD.
- Open Graph metadata.
- RSS feed.
- Sitemap.
- `llms.txt`.
- `llms-full.txt`.
- Citation information.

Avoid creating multiple competing website identities.

## 6. Individual Web Pages — WebPage

Individual pages may use the `WebPage` type when their page-level description is useful.

This can include:

- Homepage.
- About page.
- Language directory.
- Archive page.
- Individual informational pages.

A `WebPage` entity may identify:

- `@id`
- `url`
- `name`
- `description`
- `inLanguage`
- `isPartOf`
- `breadcrumb`, where implemented.

### 6.1 Relationship with WebSite

Where appropriate, individual page entities should refer to the main website entity through `isPartOf`.

Example:

    "isPartOf": {
      "@id": "https://pravinkumar-ghodake.github.io/verse-variable/#website"
    }

This establishes a relationship between the page and the publication website.

### 6.2 About Pages

An actual About page may use the `AboutPage` type.

Use this type only when the page genuinely describes the publication, its identity or the relevant subject.

Do not mark an ordinary literary article as an AboutPage.

## 7. Individual Literary Explorations — Article

Individual literary explorations are intended to be represented using the `Article` type.

A `BlogPosting` subtype may be suitable where the published content genuinely follows a blog-post format.

The initial preference is to use the general `Article` type consistently unless a more specific type is justified.

Do not use `NewsArticle` for ordinary literary commentary.

### 7.1 Important Article Properties

Potential properties include:

| Property | Purpose |
|---|---|
| `@id` | Stable article identifier |
| `mainEntityOfPage` | Identifies the principal webpage |
| `headline` | Published article title |
| `description` | Article description |
| `url` | Permanent article URL |
| `datePublished` | Original publication date |
| `dateModified` | Verified modification date |
| `author` | Actual author of the commentary |
| `inLanguage` | Principal language of the article |
| `articleSection` | Applicable editorial section |
| `articleBody` | Published article body, where appropriate |
| `image` | Relevant representative image |
| `isPartOf` | Website or collection relationship |
| `about` | Subject matter discussed |
| `citation` | References to relevant sources |
| `keywords` | Meaningful subject descriptors |

Only add properties supported by the actual article.

### 7.2 Suggested JSON-LD

The following example illustrates an individual literary exploration.

Replace the example information with verified data before implementation.

    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-literary-exploration/#article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-literary-exploration/"
      },
      "headline": "A Literary Exploration",
      "description": "A reflection on an original literary expression and its emotional and philosophical dimensions.",
      "url": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-literary-exploration/",
      "datePublished": "2026-11-12",
      "author": {
        "@id": "https://pravinkumar-ghodake.github.io/verse-variable/#editor"
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://pravinkumar-ghodake.github.io/verse-variable/#website"
      },
      "articleSection": "Poetry"
    }

This is a conceptual implementation example, not a declaration that an article with these example details has already been published.

### 7.3 Article Author

The `author` property should identify the person who created the article's published commentary.

For articles authored by the publication's editor, the appropriate name and author identity may be used.

Where another person writes an article, identify the actual contributor.

Do not automatically assign every article to the poet, lyricist or performer whose work is discussed.

Google's article structured-data guidance also recommends identifying article authors through reliable names and author-profile URLs.

### 7.4 Publication Date

Use the actual article publication date.

The date on which a poem, song or book was originally created is not automatically the article's publication date.

### 7.5 Modification Date

Use `dateModified` only where a meaningful modification date can be established.

Do not populate it with the current build date on every site rebuild.

Routine technical deployment should not automatically make every article appear newly revised.

### 7.6 Representative Images

Include an `image` property only when a suitable image genuinely represents the article.

Do not automatically use the publication's generic social-preview artwork as the image for every literary exploration.

Image URLs should be absolute and accessible.

### 7.7 Article Body and Keywords

The `articleBody` property may be used where a meaningful representation of the actual published article is available.

Do not insert incomplete, misleading or substantially different text.

Likewise, `keywords` should describe the article's real subjects.

Do not populate it with the editor's entire research vocabulary when those subjects do not appear in the article.

## 8. Original Literary Works — CreativeWork

An individual article may discuss a literary work that has its own creator and identity.

The original work should be distinguishable from the article discussing it.

Where structured representation is useful, the work may be described as a `CreativeWork`.

Potential properties include:

- `@id`
- `name`
- `author`
- `creator`
- `inLanguage`
- `datePublished`, where established
- `genre`, where suitable
- `citation`, where relevant

### 8.1 Example Literary Work

    {
      "@type": "CreativeWork",
      "@id": "https://example.org/literary-source#work",
      "name": "Original Literary Work",
      "author": {
        "@type": "Person",
        "name": "Original Poet"
      },
      "inLanguage": "ur"
    }

This is an illustrative structure.

Do not invent a permanent source URL or identity for a literary work that does not have one.

Where a suitable authoritative source is available, use it to identify the work.

### 8.2 Connecting the Article with the Original Work

Where appropriate, the article may use `about` to identify the literary work it explores.

Example:

    "about": {
      "@type": "CreativeWork",
      "name": "Original Literary Work",
      "author": {
        "@type": "Person",
        "name": "Original Poet"
      },
      "inLanguage": "ur"
    }

This makes the relationship explicit:

- The Article author wrote the commentary.
- The CreativeWork author created the original literary expression.

These are separate intellectual contributions.

### 8.3 Literary Attribution

Use verified attribution.

If authorship is uncertain, do not manufacture certainty through structured data.

A disputed or traditional attribution should be described carefully in the visible content and represented conservatively in the markup.

### 8.4 Avoid Unnecessary CreativeWork Entities

Not every short quotation or literary excerpt needs its own separate structured entity.

A CreativeWork representation is most useful when the original work can be identified meaningfully and the relationship with the article is clear.

If a literary attribution is uncertain or the source cannot be identified reliably, visible attribution may be sufficient.

## 9. Translation and Transliteration Relationships

Translation and transliteration should be represented accurately and should not be confused with the article author's own commentary.

### 9.1 Translator

The `translator` property may be used when the structured entity is genuinely a translated creative work.

An article that merely quotes or includes a few translated lines is not automatically a complete translated work.

For such an article, the translator may instead be identified in the visible attribution section.

### 9.2 Translation Relationships

The properties `translationOfWork` and `workTranslation` may describe relationships between original creative works and their translated versions.

Use these only when separate creative-work entities are actually being represented.

For example, a complete published English translation of an independently identifiable Urdu work may warrant a translation relationship.

Do not describe an English commentary article as a translation of an Urdu poem merely because it contains an English rendering of that poem.

### 9.3 Transliteration

Transliteration is not the same as translation.

A Roman-script representation of an Urdu or Hindi expression should not automatically be described as a separately translated creative work.

If a transliteration is included as an editorial aid within an article, visible labelling and appropriate HTML language information are generally sufficient.

### 9.4 Editorial Rendering

Where an English rendering is prepared by the editor rather than taken from an existing published translation, describe it accurately.

Do not imply that it is an established translation by another individual.

### 9.5 Technical Reference

Schema.org CreativeWork documentation:

https://schema.org/CreativeWork

## 10. Weekly Collections — CollectionPage

Weekly collections bring together three independent literary explorations.

The `CollectionPage` type is suitable for representing a page whose primary purpose is to present a collection of related content.

### 10.1 Recommended Properties

Potential properties include:

- `@id`
- `url`
- `name`
- `description`
- `datePublished`
- `inLanguage`
- `isPartOf`
- `mainEntity`
- `hasPart`

Use only those that accurately describe the actual weekly page.

### 10.2 ItemList Representation

The article links may be represented through an `ItemList`.

The `itemListElement` property can identify each article's position within the collection.

`numberOfItems` should reflect the actual number of valid articles included in that collection.

### 10.3 Suggested JSON-LD

    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://pravinkumar-ghodake.github.io/verse-variable/weeks/week-2026-46/#webpage",
      "url": "https://pravinkumar-ghodake.github.io/verse-variable/weeks/week-2026-46/",
      "name": "Week 46 — Literary Explorations",
      "description": "Three independent literary explorations.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://pravinkumar-ghodake.github.io/verse-variable/#website"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": 3,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Article",
              "@id": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-one/#article",
              "url": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-one/"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Article",
              "@id": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-two/#article",
              "url": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-two/"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Article",
              "@id": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-three/#article",
              "url": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example-three/"
            }
          }
        ]
      }
    }

The example URLs are placeholders.

The actual collection should contain the published article URLs associated with its `week_id`.

### 10.4 Collection Accuracy

Do not declare three items if only two valid articles are published.

Do not include broken, unpublished or unrelated article links.

The structured list must agree with the weekly collection's visible content and actual ordering.

The weekly collection groups independent literary works. It does not imply that the three articles share a common theme or interdisciplinary subject.

## 11. Person — Author and Contributor Identity

The `Person` type can be used to describe identifiable individuals associated with published content.

Potential roles include:

- Founder.
- Editor.
- Article author.
- Original poet.
- Writer.
- Lyricist.
- Composer.
- Translator.
- Performer.

### 11.1 Editor and Author Identity

The editor's established public identity may be represented as a `Person` entity.

A suitable stable identifier may be:

    https://pravinkumar-ghodake.github.io/verse-variable/#editor

An illustrative representation is:

    {
      "@type": "Person",
      "@id": "https://pravinkumar-ghodake.github.io/verse-variable/#editor",
      "name": "Pravinkumar Ghodake",
      "alternateName": "Pravinkumar Ramchandra Ghodake",
      "url": "https://sites.google.com/view/pravinkumarghodake",
      "sameAs": [
        "https://orcid.org/0000-0002-6755-4003"
      ]
    }

Use the alternate name and other identity information only where they are appropriate and consistent with the editor's public profiles.

### 11.2 Person Identifiers

Useful properties may include:

- `name`
- `alternateName`
- `url`
- `sameAs`
- `description`
- `jobTitle`
- `knowsAbout`

Use only properties that are verifiable and relevant.

### 11.3 SameAs

The `sameAs` property should point to an external page that genuinely identifies the same person or entity.

Appropriate references may include a verified ORCID or an established public profile.

Do not populate it with:

- Unverified profiles.
- Unrelated social accounts.
- Search results.
- Pages of people with similar names.
- Websites merely because they mention the individual.

### 11.4 Research Background

The editor's research areas may be represented through suitable `Person` properties where those subjects are accurately documented.

For example, `knowsAbout` may include relevant areas such as:

- Theoretical and computational mechanics.
- Nonlinear vibrations.
- Nonlinear elastic waves.
- Nonlinear ultrasonics.
- Mechanical and phononic metamaterials.
- Inverse problems and inverse design.
- Physical acoustics.

These belong to the individual editor's research profile.

They should not be copied wholesale into the `WebSite` description or treated as mandatory subjects of the literary archive.

### 11.5 Professional and Institutional Information

Do not assign a person an institutional title, university affiliation, employment relationship or professional qualification unless it is supported by reliable and current information.

### 11.6 Profile Pages

If a dedicated public profile page is created for an individual, that page may be considered for appropriate profile-page structured data.

Do not assume that an external profile or general publication page automatically qualifies.

## 12. Translator, Lyricist, Composer and Performer

Creative contributors should be represented according to their actual roles.

Schema.org provides properties and relationships that may be used for these purposes, depending on the type of creative work being described.

### 12.1 Translator

Use `translator` when the structured creative work is genuinely a translation.

An article containing an English rendering of a short literary excerpt is not necessarily itself a translated work.

For such an article, the translator may instead be identified in the visible attribution section.

### 12.2 Translation Relationships

The properties `translationOfWork` and `workTranslation` may describe relationships between distinct original and translated creative works.

Use these only when the separate creative-work entities actually exist and can be identified.

### 12.3 Lyricist and Composer

The lyricist and composer should be identified as distinct creative contributors.

Where the original musical work is separately represented, use suitable creator or contributor relationships based on the actual roles.

### 12.4 Performer

A performer should be identified as a performer rather than automatically assigned the original authorship role.

### 12.5 Attribution Accuracy

Where contributors are known, use appropriate names and roles.

Where information is unknown or disputed, omit uncertain structured claims rather than filling them with assumptions.

## 13. Citation and Source Relationships

The `citation` property may be used to identify sources that support or are referenced by a creative work.

For an individual article, this may include:

- Original literary publications.
- Scholarly books.
- Research papers.
- Historical documents.
- Relevant archival resources.
- Reliable linguistic references.

Example:

    "citation": [
      "https://doi.org/example",
      "https://example.org/original-source"
    ]

The example URLs are illustrative placeholders.

In actual implementation, include only identifiable sources that have been consulted and are relevant to the article.

Structured citations supplement the visible references section.

They do not replace accurate bibliographic information or ordinary reader-facing citations.

## 14. Language Identification

Language metadata is important for this multilingual publication.

### 14.1 Website Language Coverage

The website may identify its supported language coverage using:

`inLanguage`

The initial language identifiers are:

- `en`
- `ur`
- `hi`
- `mr`
- `kn`
- `ta`
- `ml`
- `te`

Use identifiers consistent with the actual content.

### 14.2 Individual Article Language

The `inLanguage` property should represent the actual language or languages used in the relevant creative work or page.

For an article whose principal commentary is in English, `en` may be appropriate.

A separate original Urdu literary work may be represented through its own `CreativeWork` entity with `inLanguage` set to `ur`.

Where the article itself contains multiple substantial languages, multiple language values may be used when appropriate.

Do not automatically list every supported publication language on every article.

### 14.3 Language and Script

Language codes and script identifiers should not be confused.

Where script-specific identification is important, appropriate BCP 47 language tags may be used.

The existing project language codes should remain consistent with `_data/languages.yml`.

### 14.4 HTML and JSON-LD Agreement

The page's language attributes, language metadata and structured-data descriptions should not contradict one another.

For right-to-left Urdu text, use appropriate HTML direction information independently of the Schema.org language property.

### 14.5 Principal Language Versus Original Literary Language

A page may contain original literary material in one language and editorial commentary in another.

For example:

- The original Urdu poem is a work in Urdu.
- Its transliteration is an editorial representation.
- Its English translation is a translation or editorial rendering.
- The accompanying commentary may be an English article.

Do not treat all of these as the same linguistic entity.

Represent each separately where the actual structure and implementation justify it.

## 15. BreadcrumbList

Breadcrumb structured data may be used when the website actually displays a meaningful breadcrumb trail.

A breadcrumb can help describe the relationship between:

- Homepage.
- Archive.
- Weekly collection.
- Individual article.

### 15.1 Suggested Structure

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pravinkumar-ghodake.github.io/verse-variable/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Archive",
          "item": "https://pravinkumar-ghodake.github.io/verse-variable/archive/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Literary Exploration",
          "item": "https://pravinkumar-ghodake.github.io/verse-variable/entries/example/"
        }
      ]
    }

This is illustrative.

The archive URL should be checked against the actual published website before implementation.

### 15.2 Visible Navigation Agreement

Breadcrumb structured data should describe navigation that exists and is meaningful to visitors.

Do not create a fictional hierarchy that does not correspond to the site's actual information architecture.

### 15.3 No Duplicate or Misleading Breadcrumbs

Use one coherent breadcrumb representation for the relevant page.

Avoid conflicting breadcrumb paths or invalid position ordering.

## 16. AboutPage and Editorial Identity

The publication's About page may use the `AboutPage` type.

Where appropriate, it can identify:

- The publication being described.
- Its purpose.
- Its editorial scope.
- Its relationship with the website.

The About page may also identify the founder and editor using accurate visible information.

### 16.1 Organization Type

Do not create a fictitious `Organization` entity merely because the publication has a name and visual identity.

An independent publication project is not automatically a registered organisation or formally constituted institution.

Only use an Organization entity when a genuine organisation exists and the representation accurately describes it.

### 16.2 Publisher Property

Do not automatically add a `publisher` property to every article using the publication's name as an invented organisation.

The publisher should be represented only through an appropriate and truthful Person or Organization entity.

Where there is no separate publisher entity, it may be better to omit the property rather than create a misleading identity.

### 16.3 Editorial Independence

The structured data should not imply:

- University sponsorship.
- Institutional endorsement.
- Academic partnership.
- Research funding.
- External editorial certification.

Such claims must correspond to real, documented relationships.

## 17. Collections, Categories and Subjects

Structured data may describe the subjects explored by an article.

Relevant properties may include:

- `about`
- `mentions`
- `articleSection`
- `keywords`

Use these carefully.

### 17.1 About

The `about` property identifies the subject matter of an article or creative work.

It may describe the principal literary work or a broader subject of the published commentary.

Where the original literary work has its own identifiable entity, it may be represented through `CreativeWork`.

### 17.2 Keywords

Where applicable, `keywords` may represent meaningful subject descriptors.

These should reflect the actual content.

Do not add long, repetitive search phrases or the entire research vocabulary of the editor.

### 17.3 Article Sections

The `articleSection` property may be used to identify a genuine editorial section.

For example:

- Poetry.
- Song Lyrics.
- Folk Literature.
- Literary Prose.
- Philosophical Literature.

Use the actual category system rather than creating unrelated section names for every article.

### 17.4 Scientific Subjects

Scientific subjects may be included where they are substantively discussed.

An article about a metaphorical idea of resonance should not automatically be described as a technical study of nonlinear acoustics.

Scientific properties should reflect actual article content, not the editor's background alone.

## 18. SearchAction and Future Search Functionality

Schema.org supports properties for describing possible actions associated with a website.

A `SearchAction` may be considered if a genuine site-search function is implemented.

However, the publication's search functionality should not be described as operational until the search page and query mechanism actually work.

Any future search action should:

- Point to a valid search endpoint.
- Use the actual query parameter.
- Produce useful search results.
- Work under the project's `/verse-variable` base path.
- Preserve the site's privacy principles.
- Be tested before inclusion.

The presence of `SearchAction` does not guarantee a special search box in Google results.

## 19. JSON-LD Integration with the Existing Website

The current project uses:

    _includes/head.html

This file has responsibility for page-level metadata and structured-data output.

Before adding more structured data, inspect the existing implementation.

### 19.1 Avoid Duplicate Graphs

Do not add a second description of the same website, article or person under a different identity without a clear reason.

Where multiple JSON-LD blocks are necessary, use stable `@id` values so that relationships can be understood consistently.

### 19.2 Reusable Includes

The following architecture may be considered:

| Component | Purpose |
|---|---|
| `_includes/schema-website.html` | Website-level identity |
| `_includes/schema-article.html` | Individual article metadata |
| `_includes/schema-week.html` | Weekly collection metadata |
| `_includes/schema-breadcrumb.html` | Breadcrumb navigation |

These are proposed future component filenames, not files that necessarily exist.

The implementation should be selected according to the complexity of the existing head include.

For a lightweight publication, a small number of clearly maintained includes may be sufficient.

Do not introduce additional files merely to make the architecture appear more sophisticated.

### 19.3 Conditional Rendering

The layout should determine which structured data to render according to the page type.

For example:

- Homepage: `WebSite` and the main `WebPage`.
- Individual entry: `Article` and relevant creative-work relationships.
- Weekly collection: `CollectionPage` and its `ItemList`.
- About page: `AboutPage`.
- Custom 404 page: appropriate page metadata without misleading article markup.

Do not output article structured data for a 404 page or another page type where it does not apply.

### 19.4 Data Sources

Structured data should use actual Jekyll variables wherever possible.

Examples of potential fields include:

- `page.title`
- `page.description`
- `page.date`
- `page.url`
- `page.author_name`
- `page.language_id`
- `page.language_code`
- `page.literary_form`
- `page.week_id`
- `page.entry_number`
- `site.url`
- `site.baseurl`

Use the actual fields defined and rendered by the project.

Do not assume that every proposed metadata field exists in the current implementation.

### 19.5 JSON Escaping

When Liquid values are inserted into JSON-LD, use appropriate JSON serialization or escaping.

This is especially important for:

- Quotation marks.
- Apostrophes.
- Backslashes.
- Newlines.
- Original-script Unicode text.
- Special characters in titles.
- Multilingual descriptions.

Jekyll's JSON-related Liquid filters may be used where appropriate.

The rendered JSON must remain valid even when an article contains complex literary text.

### 19.6 Multiline Original Text

Do not directly insert unprocessed multiline YAML content into a JSON string.

Use appropriate JSON serialization or escaping.

Check that line breaks, quotation marks and special characters remain valid.

### 19.7 No Unsupported Metadata Assumptions

The article metadata reference establishes the project's actual entry fields.

Structured data should be derived from those established fields and verified page content.

Do not introduce invented frontmatter fields solely to satisfy a proposed Schema.org example.

## 20. Properties That Require Special Care

Some Schema.org properties can easily be misapplied in this publication.

### 20.1 Author

The article author is the creator of the published commentary.

The original poet should be represented as the creator of the referenced literary work, not automatically as the article author.

### 20.2 Creator

The `creator` property should identify a genuine creator of the entity being described.

Do not use it interchangeably with every person mentioned in an article.

### 20.3 Translator

Use `translator` when the structured creative work is actually a translation.

An article containing an English rendering of a short Urdu couplet is not necessarily itself a translated work.

### 20.4 Publisher

Identify a genuine publisher entity where applicable.

Do not invent an institution or organisation simply to populate the property.

### 20.5 SameAs

Use `sameAs` only for authoritative or otherwise reliable identity references.

A general search result or an unrelated page mentioning a name does not establish entity identity.

### 20.6 DateModified

Use an accurate revision date.

Do not automatically update every page whenever the Jekyll site is built.

### 20.7 Image

Include relevant, publicly accessible images.

Do not use a generic site image as though it were an individual article's representative photograph or illustration.

### 20.8 About and Mentions

Use `about` for subjects that materially define the article.

Use `mentions` for entities mentioned in the content without necessarily being its principal subject.

Neither property should be used to insert unrelated scientific topics or keywords.

## 21. Structured Data Validation

Every structured-data implementation should be checked after deployment.

### 21.1 JSON Validation

Confirm:

- Valid JSON syntax.
- Correct quotation marks.
- Proper nesting.
- Correct URL formatting.
- Valid date formats.
- No duplicate or conflicting properties.

### 21.2 Schema.org Validation

Use the Schema.org validator to inspect the vocabulary and properties.

Official validator:

https://validator.schema.org/

### 21.3 Google Rich Results Test

Where Google supports a particular structured-data feature, use the Rich Results Test.

https://search.google.com/test/rich-results

Not every valid Schema.org type is eligible for a Google rich result.

A successful Schema.org validation does not establish eligibility for a particular search appearance.

### 21.4 URL Inspection

Where Google Search Console is configured, inspect representative published pages.

Check whether the crawler can access the page and whether it sees the expected rendered structured data.

### 21.5 Representative Page Testing

At minimum, test:

- Homepage.
- One Urdu literary exploration.
- One Indic-language literary exploration.
- One weekly collection.
- About page.
- Custom 404 page.

Testing should use actual published pages rather than placeholder examples.

### 21.6 Validation After Changes

Repeat validation when:

- The head include is changed.
- Article metadata fields are revised.
- New layouts are introduced.
- Weekly collection generation changes.
- Structured-data relationships are modified.
- Canonical URL conventions change.

## 22. Common Structured Data Errors

Avoid the following mistakes:

- Identifying the original poet as the author of the commentary.
- Identifying a singer as the lyricist without evidence.
- Claiming that an article is a translation when it is not.
- Representing a project as a registered organisation without evidence.
- Adding a publisher that does not exist.
- Including an inaccurate modification date.
- Using a generic site image for every article.
- Creating duplicate website entities.
- Adding incorrect language values.
- Including unpublished URLs.
- Marking hidden content as visible article content.
- Adding unsupported institutional affiliations.
- Including scientific terms unrelated to the actual article.
- Treating Schema.org validity as proof of search ranking or rich-result eligibility.

## 23. Implementation Checklist

Before treating structured data as ready for publication, verify the following.

### Website

- [ ] `WebSite` describes the correct publication.
- [ ] Website URL includes the project base path.
- [ ] Publication name and description are accurate.
- [ ] Language information reflects actual website content.
- [ ] Stable website identifier is used.
- [ ] The editor's identity is represented separately where appropriate.

### Individual articles

- [ ] Correct article type is selected.
- [ ] Headline matches the visible article title.
- [ ] Description is accurate.
- [ ] Publication date is correct.
- [ ] Article author is correctly identified.
- [ ] Original literary author is distinguished.
- [ ] Language is correct.
- [ ] Image is relevant where included.
- [ ] Canonical article URL is accurate.
- [ ] Subject information reflects actual content.

### Literary works and contributors

- [ ] Original literary work is represented accurately.
- [ ] Original authorship is verified or qualified.
- [ ] Translation relationships are genuine.
- [ ] Transliteration is distinguished from translation.
- [ ] Lyricist, composer and performer roles are separate.
- [ ] Sources are represented correctly.
- [ ] No unsupported identity relationships are added.

### Weekly collections

- [ ] Correct `CollectionPage` is used.
- [ ] Actual article URLs are included.
- [ ] Item positions are correct.
- [ ] Collection description is accurate.
- [ ] Visible collection agrees with structured content.
- [ ] Item count reflects the actual published collection.

### Technical implementation

- [ ] JSON-LD is valid.
- [ ] Existing head metadata is reviewed.
- [ ] Duplicate entities are avoided.
- [ ] Dynamic values are escaped correctly.
- [ ] Base URLs are correct.
- [ ] Page-specific schema is conditional.
- [ ] Validation is completed after deployment.

## 24. Relationship with Other Documentation

This specification should be maintained alongside:

- `SEO_AND_DISCOVERY.md`
- `SEARCH_SPEC.md`
- `ARCHIVE_NAVIGATION_SPEC.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `ARTICLE_TEMPLATE.md`
- `WEEKLY_COLLECTION_TEMPLATE.md`
- `CATEGORIES_AND_TAGS.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `RESEARCH_STANDARDS.md`
- `SOURCE_REGISTER.md`
- `EDITORIAL_POLICY.md`
- `COPYRIGHT.md`
- `ACCESSIBILITY.md`
- `_config.yml`
- `_data/languages.yml`
- `_data/site.yml`
- `_includes/head.html`

Changes to structured metadata should be reflected in the actual templates and corresponding documentation.

Documentation should distinguish between:

- Existing implementation.
- Proposed improvements.
- Features that have not yet been implemented.

## 25. Future Development

As the archive grows, structured-data capabilities may be expanded to represent:

- Verified contributor profiles.
- More detailed literary source relationships.
- Translation relationships between separately published works.
- Additional collection structures.
- Author and contributor indexes.
- More detailed literary subject relationships.
- Bibliographic and scholarly references.
- Dedicated profile pages.

Such additions should be made only where they describe actual content and improve the consistency of the publication's information architecture.

Scientific and technical subject information may be included for individual entries when genuinely relevant. It should not become a default classification for the publication or its literary articles.

Structured data should remain a faithful representation of the publication rather than a collection of search-oriented claims.

The objective is to make Verse & Variable intelligible to both human readers and digital information systems without compromising authorship, literary attribution or intellectual accuracy.

---

## 26. Authoritative Technical References

### Schema.org

- `WebSite`: https://schema.org/WebSite
- `WebPage`: https://schema.org/WebPage
- `CollectionPage`: https://schema.org/CollectionPage
- `Article`: https://schema.org/Article
- `BlogPosting`: https://schema.org/BlogPosting
- `CreativeWork`: https://schema.org/CreativeWork
- `Person`: https://schema.org/Person
- `ItemList`: https://schema.org/ItemList
- `ListItem`: https://schema.org/ListItem
- `BreadcrumbList`: https://schema.org/BreadcrumbList
- `AboutPage`: https://schema.org/AboutPage

### Google Search Central

- General structured-data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article
- Structured-data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Rich Results Test: https://search.google.com/test/rich-results
- Search Console: https://search.google.com/search-console

These references should be consulted when implementing or revising the actual markup.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
