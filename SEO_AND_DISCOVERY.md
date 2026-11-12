
# SEO and Discovery Strategy

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the search-engine optimisation (SEO), technical discoverability, and machine-readable publishing principles for Verse & Variable.

The publication is an independent multilingual literary and intellectual archive exploring poetry, literature, philosophy, human experience, and meaningful connections with scientific thought.

Its content includes original literary expressions, transliterations, translations, historical and cultural context, original commentary, scientific explanations, and research references.

The discovery strategy should help readers and digital information systems:

- Identify the publication and its purpose.
- Discover individual literary explorations.
- Understand the original language of each work.
- Identify authors and other creative contributors accurately.
- Navigate weekly collections.
- Understand the subjects explored in individual articles.
- Discover relationships between languages and disciplines.
- Access reliable references and original sources.
- Distinguish the publication's original commentary from third-party material.

The objective is not to maximise search-engine traffic through artificial optimisation.

It is to make the archive genuinely accessible, understandable, trustworthy, and discoverable.

## 2. Fundamental Discovery Principles

### 2.1 People-First Publishing

The quality and usefulness of an article must remain more important than its search-engine performance.

Articles should be written for readers who are interested in the literary work and the ideas being explored.

Search optimisation should support the publication rather than dictate its editorial direction.

### 2.2 Originality and Intellectual Substance

Every individual exploration should provide original commentary and meaningful interpretation.

Do not publish repetitive content simply to target different keywords, languages, or search queries.

Each article should offer a clear reason for existing independently.

### 2.3 Accurate Metadata

Titles, descriptions, author names, dates, languages, and references should accurately represent the published material.

Metadata should not introduce claims that are unsupported by the actual article.

### 2.4 Multilingual Accessibility

Search discovery should account for original Indian and South Asian writing systems.

English should not be treated as the only meaningful route through the archive.

Original literary texts should remain searchable as text wherever practical.

### 2.5 Technical Reliability

Search engines and other discovery systems should be able to access the relevant public pages, follow their links, and interpret their structure.

Technical discoverability requires correct URLs, crawlable content, appropriate metadata, and functioning internal navigation.

### 2.6 No Guaranteed Rankings

No metadata field, sitemap, social preview, structured-data implementation, or machine-readable file guarantees a particular search position.

The publication should not make such claims.

## 3. Publication Identity

The publication's identity should remain consistent across its website, repository, social previews, feeds, and machine-readable resources.

### Official identity

**Publication:** Verse & Variable

**Tagline:** A line of verse. A line of inquiry.

**Urdu expression:** لفظ سے لہر تک

**Transliteration:** Lafz se Lehar tak

**English meaning:** From the word to the wave.

**Founder and editor:** Pravinkumar Ghodake

**Website:**

https://pravinkumar-ghodake.github.io/verse-variable/

**Author website:**

https://sites.google.com/view/pravinkumarghodake

### 3.1 Identity Consistency

Use the publication's established name and tagline consistently.

Avoid creating unnecessary alternative publication names or unrelated descriptions across different metadata systems.

The repository name, website title, Open Graph identity, feed title, and structured information should describe the same publication.

### 3.2 Independent Publication Status

The publication should be described as an independent literary and intellectual archive.

Do not imply university affiliation, institutional sponsorship, formal partnerships, or external endorsements unless an actual relationship has been established and documented.

## 4. Website URL Architecture

The publication uses GitHub Pages with a project-site structure.

Its current Jekyll configuration establishes:

    url: https://pravinkumar-ghodake.github.io
    baseurl: /verse-variable

The resulting public website is:

    https://pravinkumar-ghodake.github.io/verse-variable/

This distinction is important when generating canonical URLs, internal links, sitemaps, and social metadata.

### 4.1 Individual Article URLs

Individual literary entries follow the configured collection permalink pattern:

    /entries/:path/

Example:

    https://pravinkumar-ghodake.github.io/verse-variable/entries/example-literary-exploration/

### 4.2 Weekly Collection URLs

Weekly collections follow:

    /weeks/:name/

Example:

    https://pravinkumar-ghodake.github.io/verse-variable/weeks/week-2026-46/

These URLs are illustrative.

Actual generated paths should always be checked against the published site.

### 4.3 Readable URLs

Use short, descriptive, lowercase filenames with hyphens between words.

Prefer:

    /entries/poetry-of-memory/

Avoid unnecessarily complicated filenames, unexplained abbreviations, and excessive keyword repetition.

### 4.4 Permanent URLs

Once an article has been published, preserve its permanent URL wherever practical.

If a URL changes, review:

- Existing internal links.
- Weekly collection links.
- Sitemap entries.
- Canonical metadata.
- External references.
- Redirect availability.

A permanent article URL should not be changed simply to incorporate a newly fashionable search term.

### 4.5 Base URL Handling

Internal links and generated resource URLs must account for the project's `/verse-variable` base path.

Where appropriate, use Jekyll's URL filters:

- `relative_url`
- `absolute_url`

Do not assume that a path beginning with `/entries/` automatically resolves under the project-site base URL.

Verify the rendered destination in the browser.

## 5. Search-Friendly Article Structure

Every individual literary exploration should have a clear and independently understandable document structure.

### 5.1 Descriptive Titles

Article titles should identify the actual literary or intellectual subject.

A useful title should be:

- Specific.
- Accurate.
- Readable.
- Relevant to the original work.
- Suitable for the article's actual content.

Avoid exaggerated titles, keyword stuffing, and titles that promise a subject the article does not discuss.

### 5.2 Article Descriptions

Every published entry should have a concise description.

The description should explain what the reader will encounter.

It may identify:

- The original literary work.
- Its language.
- Its creator, where verified.
- The principal subject of the commentary.
- A meaningful interdisciplinary connection, where applicable.

Descriptions should be individually written rather than mechanically copied across articles.

Search engines may generate their own snippets from page content instead of using a supplied meta description.

Therefore, the article's visible opening and overall structure should also communicate its subject clearly.

### 5.3 Heading Hierarchy

Use semantic heading levels consistently.

Recommended structure:

- One main page heading.
- Appropriate section headings.
- Subheadings where necessary.

Headings should describe the content that follows them.

Do not use heading elements merely to obtain a larger font size.

### 5.4 Original Text as Searchable Content

Original literary expressions should be rendered as selectable text wherever practical.

Do not replace the original text with an image simply because a particular font or visual treatment is attractive.

Images may supplement literary presentation, but ordinary text provides more reliable accessibility and search discoverability.

### 5.5 Translation and Transliteration

The original expression, transliteration, and English translation should be clearly distinguished.

Each should be represented by the appropriate language metadata where possible.

Search engines and readers should not be given the impression that a transliteration is an original translation or that an English translation is the original author's wording.

### 5.6 Four-Paragraph Commentary

The principal commentary should retain the publication's established four-paragraph structure.

Search optimisation should not be used as a reason to insert repetitive keywords or artificial explanatory passages into those paragraphs.

The quality of the interpretation remains the central editorial consideration.

## 6. Multilingual Search Discovery

Multilingual discoverability is one of the publication's defining requirements.

The archive initially covers:

- Urdu.
- Hindi.
- Marathi.
- Kannada.
- Tamil.
- Malayalam.
- Telugu.

Additional languages may be included where meaningful.

### 6.1 Original Language Identification

Each article should identify the language of the original work accurately.

The relevant language metadata is maintained through:

- `language_id`
- `language_code`
- `_data/languages.yml`

Use the correct language code for the original work.

### 6.2 HTML Language Attributes

The principal language of the page should be represented through the HTML `lang` attribute.

Where a passage uses another language, its language should be identified at the appropriate element level when practical.

For example:

    <p lang="ur" dir="rtl">
      اردو کا اصل ادبی متن۔
    </p>

    <p lang="en">
      English commentary.
    </p>

Language identification supports accessible presentation and helps communicate the document's linguistic structure.

Search engines may also determine page language through the visible content and other signals. The HTML language attribute should not be treated as a guarantee of language-specific search ranking.

### 6.3 Urdu Right-to-Left Presentation

Urdu material should preserve its natural reading direction.

Use semantic direction information rather than relying entirely on visual alignment.

Mixed Urdu and English passages should be handled with appropriate bidirectional text practices.

The original Urdu expression must remain readable when specialised fonts fail to load.

### 6.4 Searchable Indic Scripts

Hindi, Marathi, Kannada, Tamil, Malayalam, and Telugu material should remain represented through their respective original Unicode text.

Do not replace original-script content with Roman transliteration for indexing convenience.

### 6.5 Transliteration Discovery

Where a transliteration exists, it may help readers discover an article using Latin-script queries.

However, transliteration variants should not be treated as proof of a single universally correct spelling.

Maintain a consistent preferred display form and record useful alternatives where justified.

### 6.6 English Translation Discovery

An English translation can make an original literary exploration discoverable through its translated wording.

Search metadata and article presentation should preserve the distinction between original material and translation.

## 7. Multilingual URLs and `hreflang`

The publication contains multilingual literary material, but this does not automatically make every article a translated alternative of another page.

This distinction is important.

### 7.1 Language Identification Is Not the Same as an Alternate Page

An article may contain:

- An original Urdu couplet.
- An Urdu transliteration.
- An English translation.
- Four paragraphs of English commentary.

Such an article is multilingual in presentation, but it is not automatically an independently translated English and Urdu pair of pages.

Do not create `hreflang` relationships merely because an article contains material in a particular original language.

### 7.2 When `hreflang` Is Appropriate

Consider `hreflang` when the same substantive page is genuinely available as separate language or regional versions.

For example, if one article is available as a complete English version and another URL contains the complete Urdu version, these may qualify as alternate language versions.

Where such a relationship is implemented:

- Use appropriate language and optional regional codes.
- Ensure each version identifies itself.
- Ensure each version references the other relevant versions.
- Use fully qualified URLs.
- Keep the alternate-page relationships consistent.
- Avoid linking unrelated articles merely because they use different languages.

### 7.3 No Artificial Language Equivalence

A Marathi poem and a Tamil poem discussing similar themes are independent works.

They should not be represented as alternate language versions of one another.

Likewise, a quotation and a short translation do not automatically make two full pages equivalent.

### 7.4 Official Guidance

Consult Google's documentation before introducing alternate-language annotations:

https://developers.google.com/search/docs/specialty/international/localized-versions

## 8. Canonical URLs

Canonical metadata identifies the preferred URL for a page when duplicate or substantially equivalent URLs may exist.

### 8.1 Canonical Requirement

Every published article should have an accurate canonical URL.

The canonical should:

- Use HTTPS.
- Include the correct domain.
- Include the `/verse-variable` base path.
- Point to the intended permanent article URL.
- Be consistent with internal links and sitemap entries.

### 8.2 Self-Referencing Canonicals

Where an article has its own preferred permanent URL, its canonical should normally identify that URL.

Different literary articles should not be canonicalised to the homepage merely because they belong to the same publication.

### 8.3 Distinct Literary Works

Two independent articles exploring similar themes should retain separate canonical URLs.

Similarity of subject matter does not make them duplicate pages.

### 8.4 Duplicate Content

Where genuinely duplicated pages or obsolete URL variants exist, choose an appropriate consolidation approach.

Possible measures include:

- Canonical annotations.
- Permanent redirects where supported.
- Removing unnecessary duplicates.
- Updating internal links.

Do not use canonical annotations as a substitute for correcting an unnecessarily duplicated website structure.

### 8.5 Verification

Check the rendered HTML and confirm that the canonical link points to the actual public page.

The sitemap and canonical URLs should agree.

Official guidance:

https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## 9. Sitemap and Content Discovery

The publication maintains a Jekyll-generated XML sitemap.

The expected sitemap URL is:

    https://pravinkumar-ghodake.github.io/verse-variable/sitemap.xml

The sitemap is intended to help discovery systems identify the publication's important public pages.

### 9.1 Sitemap Coverage

Include appropriate public resources such as:

- Homepage.
- About page.
- Language directory.
- Archive.
- Published weekly collections.
- Published individual entries.
- Other meaningful informational pages.

### 9.2 Excluded Pages

Do not include pages that should not be indexed, such as:

- Custom error pages.
- Unpublished material.
- Duplicate URLs.
- Administrative or diagnostic pages.
- Pages intentionally marked `noindex`.

### 9.3 Canonical Consistency

Sitemap entries should use the preferred canonical URLs.

Avoid listing multiple URL variants of the same article.

### 9.4 Last Modification Dates

Where `lastmod` is included, it should represent a meaningful and verifiable modification date.

Do not update every page's last modification date merely because the website was rebuilt.

### 9.5 Sitemap Accuracy

Check that:

- XML is valid.
- Every URL resolves correctly.
- URLs use HTTPS.
- Project base paths are included.
- Published entries are discoverable.
- Excluded pages are actually excluded.
- Last modification dates are meaningful.

Some sitemap fields may receive different treatment by different search engines. Google specifically notes that `priority` and `changefreq` are ignored; accurate `lastmod` values are more useful.

### 9.6 Sitemap Submission

Where appropriate, submit the sitemap through supported search-engine webmaster tools.

A sitemap helps communicate the site's preferred URLs, but submission does not guarantee that every listed page will be crawled or indexed.

Official documentation:

https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## 10. Robots and Indexing Controls

The publication maintains a `robots.txt` file and page-level indexing metadata.

These mechanisms serve different purposes.

### 10.1 Robots.txt

The Robots Exclusion Protocol communicates crawler-access preferences.

It can be used to discourage crawling of specified paths or resources by compliant crawlers.

It is not a security mechanism and should not be used to protect confidential information.

### 10.2 Important GitHub Pages Project-Site Consideration

The project website is hosted under:

    https://pravinkumar-ghodake.github.io/verse-variable/

A `robots.txt` file committed in the project repository is generally served at:

    https://pravinkumar-ghodake.github.io/verse-variable/robots.txt

However, the Robots Exclusion Protocol specifies that a crawler looks for the controlling file at the origin's top-level path:

    https://pravinkumar-ghodake.github.io/robots.txt

Therefore, a project-level `robots.txt` does not automatically become the origin-level crawler policy.

A separate root-level hosting arrangement, such as an appropriate user-site repository or domain configuration, may be required to publish origin-wide rules.

This distinction should be checked before relying on project-level crawler instructions.

Technical reference:

https://www.rfc-editor.org/rfc/rfc9309.html

### 10.3 Robots.txt Is Not a Noindex Directive

Do not use robots.txt as a substitute for page-level deindexing.

Where a page should not appear in supported search results, a suitable `noindex` directive may be necessary.

The crawler must be able to access the page to read its indexing directive.

Blocking a page in robots.txt can prevent a crawler from discovering the page-level `noindex` instruction.

### 10.4 Noindex Pages

The custom 404 page should remain excluded from search results.

Any additional page marked `noindex` should be checked to ensure that the intended directive appears in its rendered HTML.

Do not accidentally apply `noindex` to:

- Individual literary explorations.
- Weekly collections.
- The homepage.
- The main archive.
- The language directory.

### 10.5 Crawlable Resources

Do not block resources necessary for a search engine to understand the visible page.

This includes relevant stylesheets, scripts, and other essential page resources.

### 10.6 Official Guidance

https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag

## 11. Structured Data and Semantic Metadata

Structured data provides an additional machine-readable description of page content.

The publication already has JSON-LD-related metadata in its head include, which should be reviewed against the actual rendered pages.

### 11.1 Recommended Structured Data

Potential schema.org types include:

- `WebSite` — publication website.
- `Organization` — only if an appropriate organisation actually exists.
- `Person` — verified information about an individual.
- `Article` — individual literary commentary pages where appropriate.
- `BlogPosting` — where the published content and implementation justify its use.
- `BreadcrumbList` — where actual breadcrumb navigation is implemented.

Use only types and properties that accurately describe the content.

### 11.2 Article Structured Data

For individual literary explorations, an `Article` representation may be appropriate.

Potential properties include:

- `headline`
- `description`
- `datePublished`
- `dateModified`
- `author`
- `image`
- `mainEntityOfPage`
- `publisher`

The actual properties should be selected according to the published page and the relevant structured-data specification.

### 11.3 Correct Author Attribution

Structured data must distinguish between the person who authored the published commentary and the original author of the literary work being explored.

For example:

- The article author identifies the creator of the commentary.
- The original poet remains credited as the creator of the literary source.

Do not place the original poet in the Article author field merely because the article discusses their poetry.

Likewise, do not invent an organisational publisher or institutional affiliation.

### 11.4 Article Type Selection

Do not classify ordinary literary explorations as `NewsArticle` merely because they are articles.

Use a content type that accurately represents the actual material.

### 11.5 Visible Content Agreement

Structured data should agree with information visible on the corresponding page.

Do not add hidden or misleading metadata that asserts facts not supported by the visible content.

### 11.6 No Guaranteed Rich Results

Valid structured data can help search systems understand a page.

It does not guarantee special search appearances, enhanced listings, or increased rankings.

### 11.7 Validation

After implementation:

- Check JSON syntax.
- Validate structured-data properties.
- Compare the markup with visible content.
- Test representative article pages.
- Review warnings and errors.
- Recheck the output after layout changes.

Official guidance:

https://developers.google.com/search/docs/appearance/structured-data/article

## 12. Open Graph and Social Discovery

The publication uses Open Graph and related social metadata to improve how its pages may be represented when shared.

### 12.1 Recommended Metadata

Where relevant, include:

- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:image`
- `og:site_name`

Twitter/X card metadata may also be included.

### 12.2 Article-Level Sharing

Individual articles should use their own titles and descriptions rather than a generic publication-wide description.

Where appropriate, use a representative article image.

### 12.3 Social Preview Artwork

The repository currently includes:

    assets/images/social-preview.svg

The artwork provides a visual identity for the publication.

However, social platforms do not all support image formats and metadata in the same way.

For broad compatibility, a raster preview such as PNG or JPEG should also be prepared and tested.

A 1200 × 630 pixel image is a suitable general starting point for a wide social preview.

### 12.4 Image Accessibility and Quality

Images should:

- Have meaningful alternative text where informative.
- Use descriptive filenames where practical.
- Avoid unnecessary text embedded in graphics.
- Remain visually clear when displayed at smaller sizes.
- Have appropriate dimensions and file sizes.
- Be correctly attributed.

For scientific figures, essential information should also be explained through captions or surrounding text.

### 12.5 Social Preview Testing

Inspect representative pages using the relevant platform's supported link-preview tools.

Check that:

- The correct title appears.
- The description is appropriate.
- The intended image loads.
- The image has the correct absolute URL.
- The project base path is included.
- The preview does not expose placeholder information.

## 13. Internal Linking

Internal links help readers and discovery systems navigate the archive.

### 13.1 Meaningful Links

Every published article should link to relevant pages where useful.

Examples:

- Its weekly collection.
- The main archive.
- The corresponding language directory.
- A related literary exploration.
- A relevant explanatory page.

### 13.2 Descriptive Link Text

Prefer descriptive link text.

For example:

"Explore the Urdu literary archive."

Avoid relying on repeated generic phrases such as "click here".

### 13.3 Weekly Connections

Every individual article should have a reliable relationship with its weekly collection.

The weekly page should link to all three intended article pages.

### 13.4 Related Articles

Related-article links should reflect genuine literary, cultural, philosophical, or scientific connections.

Do not create artificial internal links merely to increase the number of links on a page.

### 13.5 Broken Links

Periodically inspect:

- Internal article links.
- Weekly collection links.
- Author references.
- External scholarly sources.
- Digital archives.
- DOI links.
- Social profiles.

Correct broken links or replace them with reliable alternatives where available.

## 14. Image and Illustration Discovery

Images can support the discovery and understanding of literary and scientific material.

### 14.1 Descriptive Filenames

Use meaningful filenames where practical.

For example:

    nonlinear-wave-propagation.svg

is more descriptive than:

    image-004.svg

### 14.2 Alternative Text

Provide alternative text for informative images.

Decorative images should generally use an empty alternative-text value where appropriate.

Alternative text should describe the image's relevant content rather than repeat a list of search keywords.

### 14.3 Scientific Figures

Scientific figures should have:

- An informative caption.
- Appropriate source attribution.
- Relevant explanatory text.
- Clear distinction between conceptual and experimental material.

Do not rely on image search visibility as the sole means of presenting a scientific result.

### 14.4 Image Indexing

Ensure that important public images are accessible to the relevant crawlers.

Do not unintentionally block the image resources required to understand the article.

Official guidance:

https://developers.google.com/search/docs/appearance/google-images

## 15. Machine-Readable Publication Resources

The repository contains several resources intended to improve documentation, referenceability, and machine understanding.

These resources serve different purposes and should not be treated as interchangeable search-engine ranking signals.

### 15.1 `robots.txt`

Provides crawler-access instructions within its applicable origin-level scope.

It is not an access-control system.

### 15.2 `sitemap.xml`

Lists preferred public URLs to assist discovery.

It does not guarantee indexing.

### 15.3 `feed.xml`

Provides an RSS feed of published content.

It allows compatible readers and feed services to discover new publications.

### 15.4 `llms.txt`

Provides a concise machine-readable description of the publication and its organisation.

Its adoption and interpretation by external systems may vary.

### 15.5 `llms-full.txt`

Provides a more extensive textual reference for the publication.

Its usefulness depends on whether an external system chooses to retrieve and interpret it.

### 15.6 `humans.txt`

Provides information about the people, editorial direction, and technical contributions associated with the publication.

It is supplementary documentation rather than a substitute for ordinary website metadata.

### 15.7 `CITATION.cff`

Provides structured scholarly citation information for the project.

Its metadata should remain consistent with the repository identity and applicable licensing information.

### 15.8 Relationship Between These Resources

Each resource has its own purpose.

| Resource | Primary purpose |
|---|---|
| `robots.txt` | Crawler-access preferences |
| `sitemap.xml` | Public URL discovery |
| `feed.xml` | RSS content distribution |
| `llms.txt` | Concise machine-oriented publication overview |
| `llms-full.txt` | Extended machine-oriented reference |
| `humans.txt` | Project and contributor information |
| `CITATION.cff` | Scholarly project citation |

None of these files independently establishes the intellectual quality or authority of the publication.

## 16. Content Quality and Search Integrity

Search discovery must remain aligned with the publication's editorial philosophy.

### 16.1 Original Commentary

Individual articles should contain substantial original interpretation.

Do not produce large numbers of near-identical pages by replacing names, languages, or isolated quotations.

### 16.2 Accurate Attribution

Names of authors, lyricists, composers, performers, and translators should be verified.

Incorrect attribution can mislead readers and reduce the reliability of the archive.

### 16.3 Useful References

Include meaningful references where factual or scholarly claims require them.

Do not generate artificial reference lists containing sources that have not been consulted.

### 16.4 No Keyword Stuffing

Avoid:

- Repeating the same search phrase unnaturally.
- Hidden keyword text.
- Irrelevant tags.
- Misleading descriptions.
- Repetitive article titles.
- Unrelated links.
- Artificially generated content created primarily to attract search traffic.

### 16.5 Intellectual Accuracy

A literary work should not be assigned technical search terms merely because its language resembles scientific terminology.

An article about a metaphor of resonance should not be presented as a scientific study of mechanical resonance without substantive technical discussion.

Scientific discovery terms should be supported by actual article content.

## 17. Performance and Page Experience

Search discoverability is supported by a website that works reliably for visitors.

The publication should pay attention to:

- Responsive page layout.
- Readable typography.
- Appropriate image dimensions.
- Efficient CSS and JavaScript.
- Reasonable resource sizes.
- Stable page layout.
- Reliable navigation.
- Accessible interactive elements.
- Successful page loading.

### 17.1 Core Web Vitals

Where practical, monitor relevant Core Web Vitals.

These currently include measures associated with:

- Loading performance.
- Interactivity.
- Visual stability.

Use real measurements and suitable tools rather than assuming that the website is fast because its source files are small.

### 17.2 External Resources

Review external fonts, scripts, and other resources.

A publication that loads unnecessary external resources may introduce additional performance, reliability, and privacy considerations.

### 17.3 Animation

The wavefield visualisation is supplementary.

It should not prevent readers from accessing the content or materially interfere with page usability.

Reduced-motion preferences should be respected.

### 17.4 Mobile Presentation

Inspect article and archive pages on narrow screens.

Check original scripts, mixed-language text, navigation controls, images, and tables for clipping and overflow.

## 18. Search Engine Monitoring

Where suitable tools are available, monitor how search systems discover and process the publication.

Potential tools include:

- Google Search Console.
- Bing Webmaster Tools.
- Browser-based inspection tools.
- XML sitemap validators.
- Structured-data validators.
- Broken-link checkers.
- Performance measurement tools.

### 18.1 Ownership Verification

Search-engine webmaster tools may require domain or URL-prefix verification.

Complete verification using a method supported by the relevant service and the actual hosting arrangement.

Do not claim ownership verification or sitemap submission until the corresponding service confirms completion.

### 18.2 Sitemap Monitoring

Check whether the sitemap is accessible and whether reported processing errors require attention.

### 18.3 URL Inspection

Inspect representative pages, including:

- Homepage.
- Individual literary entries.
- Weekly collections.
- Language directory.
- About page.

Review whether the crawler can access the page and whether the rendered content resembles what a reader sees.

### 18.4 Indexing Reports

Where indexing reports are available, monitor:

- Indexed pages.
- Excluded pages.
- Crawl errors.
- Duplicate URL reports.
- Canonical selection.
- Missing resources.
- Unexpected changes.

Not every excluded URL represents an error. Review the reason and intended behaviour before changing the site.

### 18.5 Search Performance

Where sufficient search data becomes available, review:

- Queries.
- Impressions.
- Clicks.
- Search-result presentation.
- Page performance.
- Language-related discovery patterns.

Use these observations to improve the publication's usefulness rather than to force its editorial content into popular search queries.

## 19. Search Discovery and Indexing Limitations

Search engines decide independently whether and how to crawl, index, and display public pages.

Even technically correct pages may not appear in search results.

Possible reasons include:

- A page has not yet been discovered.
- The crawler has not processed it.
- The page has been excluded.
- A different canonical URL has been selected.
- The content is considered substantially duplicative.
- The page does not meet a particular search system's requirements.
- The relevant search system has not indexed the material.

Submission of a sitemap does not compel indexing.

Likewise, structured data, social metadata, and machine-readable documentation do not establish guaranteed ranking or visibility.

The publication should respond to documented technical issues without interpreting every absence from search results as evidence of a technical or editorial failure.

## 20. Implementation Review Checklist

Before treating the discovery infrastructure as complete, review the following.

### Site identity

- [ ] Publication name is consistent.
- [ ] Tagline is consistent.
- [ ] Website URL is correct.
- [ ] Author and publication information are accurate.

### URLs and canonical metadata

- [ ] HTTPS URLs are used.
- [ ] Project base path is included.
- [ ] Article URLs are stable.
- [ ] Canonical URLs resolve correctly.
- [ ] No unintended duplicate canonical destinations exist.

### Page metadata

- [ ] Titles are descriptive.
- [ ] Descriptions are accurate.
- [ ] Language metadata is correct.
- [ ] Headings are semantic.
- [ ] Social metadata is accurate.
- [ ] JSON-LD reflects visible content.

### Multilingual presentation

- [ ] Original scripts are preserved.
- [ ] Urdu right-to-left presentation works.
- [ ] English translations are identified correctly.
- [ ] Transliteration is distinguished from translation.
- [ ] Language alternatives are not artificially represented as alternate pages.

### Crawl and index controls

- [ ] Sitemap is valid.
- [ ] Sitemap URLs use canonical destinations.
- [ ] `lastmod` values are meaningful.
- [ ] Robots policy is understood within the correct origin scope.
- [ ] `noindex` directives are used appropriately.
- [ ] Essential resources are crawlable.

### Discovery resources

- [ ] RSS feed is valid.
- [ ] `llms.txt` is accessible.
- [ ] `llms-full.txt` is accessible.
- [ ] `humans.txt` is accessible.
- [ ] `CITATION.cff` is accurate.

### User experience

- [ ] Articles are readable on mobile.
- [ ] Original-script text remains selectable.
- [ ] Images have suitable alternative text.
- [ ] Navigation works.
- [ ] Page performance is reviewed.
- [ ] Accessibility is considered.

## 21. Progressive Development Plan

SEO and discovery should develop in stages.

### Stage 1 — Technical Foundation

Verify:

- Site identity.
- Canonical URLs.
- Page titles and descriptions.
- XML sitemap.
- Robots policy and origin scope.
- RSS feed.
- Internal links.
- Custom 404 behaviour.

### Stage 2 — Individual Article Discoverability

Improve:

- Original literary text presentation.
- Article descriptions.
- Author and creator attribution.
- Language metadata.
- Article-level Open Graph data.
- Structured article metadata.
- Permanent URL consistency.

### Stage 3 — Multilingual Discovery

Develop:

- Language-specific indexing checks.
- Original-script visibility.
- Right-to-left presentation.
- Transliteration discoverability.
- Translation identification.
- Appropriate language-alternate relationships when genuinely applicable.

### Stage 4 — Archive Discovery

Expand:

- Weekly collection discovery.
- Language-based navigation.
- Category and tag indexes.
- Author and contributor indexes.
- Related literary explorations.
- Scientific subject indexes.

### Stage 5 — Monitoring and Improvement

Introduce regular review of:

- Search-engine reports.
- Sitemap processing.
- Structured-data validity.
- Performance.
- Broken links.
- Search-result accuracy.
- Indexing anomalies.

These stages may overlap, but each should be implemented only after its technical requirements are understood.

## 22. Relationship with Other Publication Documentation

This document should be read alongside:

- `README.md`
- `SEO_AND_DISCOVERY.md`
- `ARCHIVE_NAVIGATION_SPEC.md`
- `SEARCH_SPEC.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `CATEGORIES_AND_TAGS.md`
- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
- `RESEARCH_STANDARDS.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `ACCESSIBILITY.md`
- `PRIVACY.md`
- `DISCLAIMER.md`
- `ASSET_CREDITS.md`
- `_config.yml`
- `_includes/head.html`
- `sitemap.xml`
- `robots.txt`
- `feed.xml`
- `llms.txt`
- `llms-full.txt`

Changes to the actual site implementation should be reflected in the relevant documentation.

## 23. Continuing Commitment

The objective of discovery at Verse & Variable is to make meaningful literary and intellectual work easier to find.

The publication should be discoverable not merely because its pages contain searchable words, but because its content provides readers with something worth discovering.

Original expression, accurate attribution, intellectual substance, multilingual respect, technical reliability, and meaningful connections between disciplines remain the foundations of its long-term visibility.

---

## 24. Authoritative Technical References

The following resources provide official or standards-based guidance for maintaining the publication's discovery infrastructure.

### Search engine optimisation and crawling

- Google Search Central — SEO fundamentals:  
  https://developers.google.com/search/docs/fundamentals/get-started

- Google Search Central — Search and indexing guidance:  
  https://developers.google.com/search/docs/crawling-indexing

### Canonical URLs and indexing

- Google Search Central — Canonical URLs:  
  https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

- Google Search Central — Robots meta tags and indexing controls:  
  https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag

### Sitemaps

- Google Search Central — Sitemap creation and submission:  
  https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

### Multilingual websites

- Google Search Central — Localised versions of pages:  
  https://developers.google.com/search/docs/specialty/international/localized-versions

- Google Search Central — Multilingual and multi-regional websites:  
  https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

### Structured data

- Google Search Central — Article structured data:  
  https://developers.google.com/search/docs/appearance/structured-data/article

### Images

- Google Search Central — Image SEO best practices:  
  https://developers.google.com/search/docs/appearance/google-images

### Web crawling standards

- IETF RFC 9309 — Robots Exclusion Protocol:  
  https://www.rfc-editor.org/rfc/rfc9309.html

These resources should be consulted again whenever the relevant technical implementation is changed.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
