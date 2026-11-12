
# Testing and Quality Assurance

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the testing and quality-assurance framework for the Verse & Variable website and its publication infrastructure.

The project combines a multilingual literary archive, interdisciplinary articles, scientific explanations, structured content, and an interactive website built using Jekyll and GitHub Pages.

The quality of the publication therefore depends on more than whether individual pages appear in a browser.

The website must also:

- Build successfully.
- Generate correct collection pages.
- Display article metadata consistently.
- Preserve original multilingual text.
- Render Urdu and other scripts correctly.
- Maintain functioning navigation and links.
- Load stylesheets, scripts, images, and fonts.
- Remain usable across screen sizes.
- Support keyboard navigation and assistive technologies.
- Expose appropriate search and discovery metadata.
- Protect confidential information.
- Present published material accurately.
- Remain maintainable as the archive expands.

This document establishes a repeatable approach to checking these requirements.

Its purpose is to identify problems before they reach readers and to provide a consistent method for investigating problems discovered after publication.

It is a quality-assurance policy, not a statement that every test described here has already been implemented or passed.

## 2. Testing Principles

### 2.1 Quality Before Publication

Important content, structural, ethical, and technical issues should be addressed before publication.

### 2.2 Test What Readers Experience

Source-code inspection is important, but the final generated website must also be inspected.

A correct-looking Markdown file does not guarantee correct browser output.

### 2.3 Separate Different Types of Quality

Editorial, scientific, linguistic, ethical, accessibility, and technical quality are related but distinct.

Passing a technical test does not establish the scientific correctness of an article.

Likewise, accurate literary commentary does not establish that the website is accessible or technically reliable.

### 2.4 Reproducibility

Testing procedures should be sufficiently documented that the same checks can be repeated.

### 2.5 Proportionality

Testing should reflect the complexity and risk of the change.

A correction to a punctuation mark does not require the same test scope as a change to the Jekyll collection configuration or site-wide navigation.

### 2.6 No False Certification

Do not describe the website as fully accessible, secure, validated, or error-free merely because selected tests have passed.

Report what was actually tested and the limitations of the assessment.

### 2.7 Continuous Improvement

Testing should evolve as new languages, article formats, layouts, features, and publication requirements are introduced.

## 3. Scope of Quality Assurance

The quality-assurance framework covers the following areas.

| Area | Main concern |
|---|---|
| Repository integrity | Expected files and directory structure |
| Jekyll build | Successful static-site generation |
| Layouts and includes | Correct page structure |
| Collections | Correct article and weekly-page generation |
| Metadata | Consistent and valid front matter |
| Content | Correct and complete published material |
| Multilingual rendering | Original scripts and language direction |
| Navigation | Functional internal links and menus |
| JavaScript | Correct interactive behaviour |
| CSS | Correct visual presentation |
| Responsive design | Usability on different screen sizes |
| Accessibility | Keyboard and assistive-technology access |
| SEO | Accurate metadata and discoverability |
| Security | No unnecessary disclosure or unsafe configuration |
| Performance | Reasonable loading and rendering behaviour |
| Deployment | Successful publication through GitHub Pages |
| Maintenance | Regression prevention after changes |

Not every check needs to be automated.

Some requirements, especially literary accuracy, cultural sensitivity, translation quality, and scientific correctness, require substantive human assessment.

## 4. Testing Environments

Testing may take place in different environments.

### 4.1 Development Environment

The local development environment is used to examine changes before committing them.

Typical activities include:

- Editing source files.
- Running a local Jekyll build.
- Inspecting generated HTML.
- Checking assets and links.
- Testing layouts.
- Examining browser output.

### 4.2 GitHub Actions Environment

The GitHub Actions environment is used to automate repository-level checks and the configured deployment process.

It may be used for:

- Jekyll build verification.
- Automated link checking.
- HTML validation.
- Metadata checks.
- Accessibility checks.
- Other repeatable tests.

Only checks actually configured in the workflow should be described as automated.

### 4.3 Deployed Website

The live website is the final environment experienced by readers.

Testing should confirm:

- The latest intended content is accessible.
- The project-site URL is correct.
- Pages render correctly.
- Navigation works.
- Assets load.
- Responsive behaviour is acceptable.
- No unexpected deployment errors remain.

### 4.4 Environment Consistency

Where possible, use compatible build dependencies across local and automated environments.

Differences in Ruby, Jekyll, operating systems, plugins, or dependency versions can produce different results.

A successful local build does not automatically establish that GitHub Actions will produce the same output.

## 5. Testing Categories

Use the following categories to organise testing.

### 5.1 Manual Testing

A person checks the content, page appearance, interaction, and usability.

Examples:

- Opening an article page.
- Reading an Urdu passage.
- Using the mobile menu.
- Examining a weekly collection.
- Checking article attribution.
- Reviewing an image caption.

### 5.2 Automated Testing

A script or tool checks repeatable conditions.

Examples:

- Jekyll build completion.
- Broken internal links.
- Missing files.
- Invalid HTML.
- YAML parsing.
- Required metadata.
- Accessibility-rule violations.

### 5.3 Regression Testing

Regression testing checks whether a new change has broken an existing feature.

Examples:

- A CSS change does not break the navigation.
- A new language does not disrupt the language directory.
- An updated article layout does not break older entries.
- A JavaScript change does not interfere with theme selection.

### 5.4 Content Validation

Content validation examines whether the published information is complete, accurate, and consistent with editorial requirements.

### 5.5 Acceptance Testing

Acceptance testing determines whether the completed change satisfies its intended purpose.

A page is not considered ready merely because its code executes without an error.

## 6. Repository Structure Tests

The repository should follow its established Jekyll structure.

### 6.1 Important Files

Check that essential files exist:

- `_config.yml`
- `_data/languages.yml`
- `_data/site.yml`
- `_layouts/default.html`
- `_layouts/home.html`
- `_layouts/page.html`
- `_layouts/entry.html`
- `_layouts/week.html`
- `_includes/head.html`
- `_includes/header.html`
- `_includes/footer.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `index.html`
- `404.html`

### 6.2 Collections

Confirm that the configured collection directories exist:

- `_entries/`
- `_weeks/`

### 6.3 Assets

Check that referenced assets exist in the repository.

### 6.4 Naming Consistency

Check:

- Filename conventions.
- Directory names.
- Case sensitivity.
- Relative file references.
- Duplicate content files.
- Unexpected temporary files.

GitHub's deployment environment may treat filename case differently from a development environment that uses case-insensitive file handling.

Avoid relying on inconsistent capitalization.

### 6.5 Public and Private Material

Review files before committing to ensure that confidential records are not placed in public directories.

This includes private consent forms, reviewer correspondence, internal editorial decisions, and sensitive research material.

## 7. Jekyll Build Testing

The Jekyll build is a fundamental technical test.

### 7.1 Local Build

Where compatible dependencies are configured, run:

```bash
bundle exec jekyll build
```

A successful build should generate the website in:

`_site/`

### 7.2 Expected Result

Check that:

- The command completes successfully.
- No fatal configuration error occurs.
- Required pages are generated.
- Configured collections are processed.
- Layouts and includes resolve.
- Expected assets are copied or generated.
- The output directory contains the intended public website.

### 7.3 Build Warnings

Review warnings instead of automatically ignoring them.

Warnings may indicate:

- Missing references.
- Unused configuration.
- Invalid or unexpected data.
- Deprecations.
- Plugin compatibility problems.
- Missing resources.

### 7.4 Clean Build

Where practical, remove stale generated output before testing a fresh build.

Do not edit files inside `_site/` as though they were the original source.

### 7.5 GitHub Actions Build

Confirm that the configured GitHub Actions workflow completes the Jekyll build.

The build job should be inspected separately from the deployment job.

### 7.6 Build Acceptance

The build passes when the configured Jekyll process completes successfully and produces the intended output.

This does not by itself validate the correctness of every generated page.

## 8. Configuration and YAML Validation

Jekyll relies on YAML configuration and front matter.

Errors can prevent the site from building or cause metadata to be interpreted incorrectly.

### 8.1 Main Configuration

Check `_config.yml` for:

- Valid YAML syntax.
- Correct site title.
- Correct description.
- Correct `url`.
- Correct `baseurl`.
- Correct collection declarations.
- Valid collection permalinks.
- Correct default layouts.
- Correct Markdown configuration.
- Valid exclusion and inclusion settings.

### 8.2 Data Files

Check:

- `_data/languages.yml`
- `_data/site.yml`

Verify that indentation, quotation marks, arrays, mappings, and special characters are valid.

### 8.3 Front Matter

Every relevant article and weekly collection should have valid front matter.

Check:

- Field names.
- Indentation.
- Quotation marks.
- Date format.
- Language identifiers.
- Collection identifiers.
- Numeric entry numbers.
- Permalink values.
- Optional fields.

### 8.4 Metadata Support

A field may be present in front matter without being consumed by the corresponding layout.

Verify the actual behaviour of:

- `_layouts/entry.html`
- `_layouts/week.html`
- `_layouts/home.html`
- Other relevant templates.

Do not equate the existence of metadata with its successful display.

### 8.5 Example YAML Validation

A basic YAML syntax check can be performed with an appropriate YAML parser.

For example, a Python environment with PyYAML can parse standalone YAML files.

```python
import yaml
from pathlib import Path

files = [
    Path("_config.yml"),
    Path("_data/languages.yml"),
    Path("_data/site.yml"),
]

for file_path in files:
    try:
        with file_path.open("r", encoding="utf-8") as stream:
            yaml.safe_load(stream)

        print(f"PASS: {file_path}")

    except FileNotFoundError:
        print(f"MISSING: {file_path}")

    except yaml.YAMLError as error:
        print(f"FAIL: {file_path}: {error}")
```

This example checks YAML syntax in the listed files.

It does not validate Liquid expressions, Jekyll-specific semantics, or all front matter throughout the repository.

## 9. Layout and Include Testing

The layouts and includes define the structure of the website.

A defect in a shared component may affect many pages simultaneously.

### 9.1 Default Layout

Check:

- HTML document structure.
- Head inclusion.
- Header inclusion.
- Main content region.
- Footer inclusion.
- Wavefield component.
- Reading-progress component.
- Back-to-top control.
- JavaScript references.

### 9.2 Homepage Layout

Check:

- Hero section.
- Latest weekly collection.
- Article cards.
- Language directory.
- Subject or concept sections.
- Navigation links.
- Author information.

### 9.3 Individual Article Layout

Check:

- Article title.
- Language information.
- Original text.
- Transliteration.
- Translation.
- Attribution.
- Commentary.
- References.
- Related content, where implemented.

### 9.4 Weekly Collection Layout

Check:

- Weekly title.
- Introduction.
- Article matching.
- Article ordering.
- Number of articles.
- Individual article URLs.
- Empty or missing collection behaviour.

### 9.5 Reusable Includes

Check:

- Header.
- Footer.
- Head.
- Article card.
- Metadata component.
- Wavefield component.

### 9.6 Reuse and Duplication

Verify that components intended to be reusable behave consistently.

Avoid duplicated markup where a shared include should control the same feature.

### 9.7 Empty and Optional Values

Layouts should not produce broken output when optional metadata is absent.

Test articles with:

- All expected metadata.
- Optional metadata omitted.
- Different language scripts.
- Different literary forms.
- Missing secondary translation.
- Different article categories.

## 10. Collection and Archive Testing

The publication uses `entries` and `weeks` collections.

Their relationships must be tested carefully.

### 10.1 Individual Article Generation

Confirm that each intended article generates its own page.

### 10.2 Weekly Page Generation

Confirm that each intended weekly collection generates its own page.

### 10.3 Shared Week Identifier

Each of the three articles belonging to a weekly collection should use the same `week_id` as that collection.

### 10.4 Entry Ordering

Check that ordering follows the intended `entry_number` sequence.

Expected ordering:

1. Article One.
2. Article Two.
3. Article Three.

### 10.5 Missing or Incorrect Week Identifiers

Check for:

- Missing `week_id`.
- Misspelled identifiers.
- Articles assigned to the wrong week.
- Weekly pages without matching entries.
- Duplicate entry numbers.
- Unexpected additional articles.

### 10.6 Collection Membership

A weekly collection should not accidentally include articles belonging to another week.

### 10.7 Archive Completeness

Check that newly published articles appear in the intended archive where the current archive implementation supports them.

### 10.8 Pagination and Sorting

Where pagination or sorting is implemented, verify:

- Stable ordering.
- Correct dates.
- No duplicated entries.
- No missing entries.
- Correct navigation between pages.

### 10.9 Empty Collection Handling

A collection with no matching articles should display an understandable empty state or otherwise be handled deliberately.

## 11. Article Metadata Testing

Metadata should remain consistent across the publication.

### 11.1 Required Fields

For each article, verify the fields expected by the actual entry layout.

Typical fields may include:

- `layout`
- `title`
- `description`
- `date`
- `language_id`
- `language_code`
- `week_id`
- `entry_number`

These fields must be checked against the actual implementation.

### 11.2 Language Identifiers

Compare `language_id` values with `_data/languages.yml`.

### 11.3 Dates

Check that dates:

- Are valid.
- Follow the intended format.
- Reflect the actual publication arrangement.
- Are not accidentally backdated.
- Are consistently interpreted using the configured timezone.

### 11.4 Permalinks

Check:

- Unique article URLs.
- Consistent URL structure.
- No unintended filename-derived paths.
- No accidental collisions.
- No broken links after URL changes.

### 11.5 Categories and Tags

Where used:

- Follow the documented taxonomy.
- Use consistent spelling.
- Avoid unnecessary duplicates.
- Avoid unsupported category claims.

Do not assume that every category or tag automatically has its own archive page.

### 11.6 Metadata Changes

When an article's metadata changes, inspect all templates and pages that consume it.

A field may affect more than the article page itself.

## 12. Multilingual and Unicode Testing

Multilingual rendering is a fundamental requirement of Verse & Variable.

The archive should preserve original scripts and present them correctly.

### 12.1 Encoding

Use UTF-8 consistently.

Check for:

- Replacement characters.
- Garbled text.
- Incorrect character conversion.
- Missing combining marks.
- Inconsistent Unicode normalisation.
- Accidental deletion of diacritics.

Do not normalise or transform literary text without considering the effect on the original expression.

### 12.2 Urdu

Check:

- Right-to-left direction.
- Joining behaviour.
- Nastaliq or appropriate font rendering.
- Punctuation.
- Line alignment.
- Mixed Urdu and English text.
- Numerals.
- Inline links.
- Block quotations.

### 12.3 Hindi and Marathi

Check:

- Devanagari rendering.
- Matras.
- Conjunct consonants.
- Punctuation.
- Line wrapping.
- Diacritics.
- Mixed Latin and Indic text.

### 12.4 Kannada

Check:

- Script rendering.
- Vowel signs.
- Conjunct forms.
- Character spacing.
- Line wrapping.

### 12.5 Tamil

Check:

- Script rendering.
- Character combinations.
- Diacritics.
- Punctuation.
- Line spacing.

### 12.6 Malayalam

Check:

- Character shaping.
- Chillu characters.
- Combining marks.
- Line spacing.
- Display across browsers.

### 12.7 Telugu

Check:

- Character shaping.
- Vowel signs.
- Combining marks.
- Word spacing.
- Line wrapping.

### 12.8 Mixed-Script Text

Test combinations such as:

- Urdu with English.
- Hindi with scientific notation.
- Marathi with English references.
- Kannada with Latin transliteration.
- Arabic-derived script with numerals.
- Indic text with equations.

Mixed-direction content can behave differently from monolingual text.

### 12.9 Font Fallback

Check that the chosen typefaces support the necessary glyphs.

If the preferred font is unavailable, the fallback font should still render the text readably.

### 12.10 Test Text

A multilingual test page or test article may include short representative passages in all supported scripts.

Use verified sample text rather than invented literary quotations.

## 13. URL and Link Testing

Links should be checked in the generated website, not only in source Markdown.

### 13.1 Internal Links

Verify links to:

- Homepage.
- About page.
- Languages page.
- Archive.
- Individual articles.
- Weekly collection pages.
- Other informational pages.

### 13.2 Project-Site Base URL

Confirm that internal paths include the configured project-site base URL.

Expected website root:

`/verse-variable/`

### 13.3 Static Assets

Verify that:

- Stylesheets load.
- JavaScript files load.
- Images load.
- Fonts load.
- Other referenced assets exist.

### 13.4 External Links

Check important external references for:

- Correct destination.
- Valid URL.
- Appropriate source.
- Unintended redirects.
- Broken or obsolete destinations.

An external website may change independently of the publication.

### 13.5 Anchor Links

Check that section links point to existing identifiers.

### 13.6 Canonical URLs

Verify that canonical URLs point to the correct permanent page.

### 13.7 Redirects

If URLs are changed, check whether an appropriate redirect is supported and configured.

Do not assume that changing a permalink automatically redirects old links.

### 13.8 Automated Link Checking

A link-checking tool may be incorporated into the testing workflow.

Example conceptual command:

```bash
lychee --verbose ./_site
```

The actual command and options should be confirmed against the installed version of the selected tool.

Link checkers can report false positives, especially for websites that block automated requests.

Review results rather than automatically treating every reported failure as a defect.

## 14. HTML and XML Validation

Generated pages should use valid and meaningful markup.

### 14.1 HTML Structure

Check:

- Document type.
- Language attribute.
- Head and body structure.
- Heading hierarchy.
- Semantic landmarks.
- Proper element nesting.
- Valid attributes.
- Unique element identifiers.

### 14.2 Images

Check:

- Valid image paths.
- Appropriate alternative text.
- Dimensions where useful.
- Captions.
- Figure semantics.

### 14.3 Forms and Controls

Where forms or interactive controls exist, check labels, accessible names, keyboard operation, and expected behaviour.

### 14.4 XML Files

Validate relevant machine-readable outputs, including:

- Sitemap.
- RSS feed.
- Other XML resources.

### 14.5 Validation Scope

HTML validation is a useful technical check, but a valid HTML document does not automatically guarantee usability, accessibility, or correct content.

## 15. CSS and Visual Testing

The stylesheet defines the website's visual identity.

Changes should be checked across shared page components.

### 15.1 Global Styles

Check:

- Typography.
- Colour system.
- Spacing.
- Page widths.
- Backgrounds.
- Borders.
- Responsive behaviour.

### 15.2 Header and Navigation

Check:

- Wordmark.
- Menu alignment.
- Theme control.
- Mobile menu.
- Keyboard focus.
- Navigation visibility.

### 15.3 Hero and Wavefield

Check:

- Text visibility.
- Background behaviour.
- Animation.
- Reduced-motion behaviour.
- No interference with page content.

### 15.4 Article Styling

Check:

- Original text.
- Translations.
- Commentary.
- References.
- Metadata.
- Block quotations.
- Equations.
- Images.
- Tables.

### 15.5 Dark and Light Themes

Check both supported visual themes where implemented.

Verify that:

- Text remains readable.
- Background contrast is appropriate.
- Images remain visible.
- Interactive controls are identifiable.
- Links remain distinguishable.

### 15.6 Visual Regression

For substantial changes, compare screenshots of important pages before and after the change.

A visual difference is not automatically a defect. Evaluate whether the change is intentional and whether it affects usability.

## 16. JavaScript Testing

The publication uses JavaScript for interactive and presentation features.

The current site script includes functions associated with:

- Wavefield animation.
- Theme preferences.
- Mobile navigation.
- Reading progress.
- Reveal effects.
- Link-copying controls.
- Back-to-top behaviour.

Test the actual functionality rather than assuming that the presence of an event listener proves that a control works.

### 16.1 Wavefield

Check:

- Animation starts appropriately.
- Animation does not prevent reading.
- Resizing behaves correctly.
- No excessive CPU usage is observed.
- Reduced-motion preferences are considered.
- Missing canvas support does not break the page.

### 16.2 Theme Switching

Check:

- Theme changes correctly.
- Text remains readable.
- Preference persistence works where implemented.
- Initial theme selection is predictable.
- No unintended flash or visual instability occurs.

### 16.3 Mobile Navigation

Check:

- Menu opens.
- Menu closes.
- Links remain accessible.
- Keyboard operation works.
- Menu state is communicated appropriately.
- Content does not become inaccessible.

### 16.4 Reading Progress

Check:

- Progress changes while reading.
- Progress reflects the intended reading region.
- No unnecessary horizontal movement occurs.
- Short pages behave correctly.

### 16.5 Reveal Effects

Check:

- Content becomes visible appropriately.
- Content remains available if JavaScript fails.
- Reduced-motion settings are respected.
- Animation does not delay access to essential material.

### 16.6 Copy Link

Check:

- The intended link is copied.
- Success or failure feedback is understandable.
- The control is keyboard accessible.
- Clipboard access failures do not break other features.

### 16.7 Back-to-Top

Check:

- The control appears under the intended conditions.
- It is hidden when unnecessary.
- It scrolls to the expected position.
- Focus behaviour is reasonable.
- It does not obstruct reading.

### 16.8 Error Handling

Check for:

- JavaScript exceptions.
- Missing element references.
- Duplicate event listeners.
- Unhandled promise rejections.
- Broken third-party dependencies.

### 16.9 Graceful Degradation

The website's essential content should remain readable if JavaScript is unavailable or disabled.

Do not make access to the main article text depend unnecessarily on client-side execution.

## 17. Accessibility Testing

Accessibility should be considered throughout website development.

The publication aims to work toward WCAG 2.2 Level AA principles, but it should not claim formal conformance without a complete and appropriate assessment.

### 17.1 Keyboard Navigation

Check:

- All interactive controls can be reached.
- Focus order is logical.
- Focus is visible.
- Controls can be operated without a mouse.
- No keyboard traps exist.
- Dialogs and menus behave appropriately.

### 17.2 Screen Readers

Check:

- Page titles are meaningful.
- Landmarks are understandable.
- Headings form a logical structure.
- Images have appropriate alternatives.
- Links communicate their purpose.
- Controls have accessible names.
- Decorative visual elements are not announced unnecessarily.

### 17.3 Contrast

Examine text and interface contrast.

Consider:

- Body text.
- Headings.
- Links.
- Buttons.
- Form controls.
- Focus indicators.
- Disabled states.

### 17.4 Colour Dependence

Do not use colour as the only means of communicating important information.

### 17.5 Reduced Motion

Check that motion-sensitive users can access the publication without unnecessary animation.

### 17.6 Zoom and Reflow

Check that content remains readable at increased zoom levels and narrower viewport sizes.

### 17.7 Multilingual Accessibility

Check language identification and directionality for multilingual passages.

### 17.8 Tables

Tables should have appropriate headings and structure.

### 17.9 Alternative Text

Alternative text should communicate the relevant purpose of an image.

Do not insert unnecessary decorative descriptions where an empty alternative is appropriate.

### 17.10 Manual and Automated Testing

Automated accessibility tools are useful but cannot identify every accessibility problem.

Combine automated checks with manual keyboard and assistive-technology testing.

## 18. Responsive Testing

The website should be usable across common screen sizes.

### 18.1 Desktop

Check:

- Main content width.
- Navigation.
- Article readability.
- Images.
- Side spacing.
- Footer layout.

### 18.2 Tablet

Check:

- Navigation transitions.
- Column behaviour.
- Article width.
- Image scaling.
- Tables.
- Typography.

### 18.3 Mobile

Check:

- Menu behaviour.
- Wordmark.
- Heading wrapping.
- Body text size.
- Original script presentation.
- Images.
- Tables.
- Buttons.
- Footer links.

### 18.4 Orientation

Check portrait and landscape behaviour where relevant.

### 18.5 Overflow

Look for:

- Horizontal page scrolling.
- Clipped text.
- Overlapping elements.
- Oversized images.
- Long unbroken strings.
- Formula overflow.

### 18.6 Browser Diversity

Where practical, check the publication in more than one major browser.

Examples include:

- Chrome.
- Firefox.
- Safari.
- Edge.

Rendering differences should be investigated when they affect content or usability.

## 19. Search and Discovery Testing

Where search or discovery features are implemented, test their actual behaviour.

### 19.1 Search Results

Check:

- Correct result identification.
- Accurate article titles.
- Working result links.
- No duplicate results.
- Appropriate empty-state messages.

### 19.2 Unicode Search

If multilingual search is implemented, examine:

- Original script queries.
- Transliteration queries.
- English translations.
- Unicode normalisation.
- Diacritic variations.
- Regional spelling differences.

### 19.3 Search Filters

Where implemented, check that filters accurately reflect the available article metadata.

### 19.4 Archive

Check that:

- Published articles appear.
- Unpublished drafts do not appear.
- Sorting is correct.
- Language information is accurate.
- Links are functional.

### 19.5 Search Claims

Do not describe search as multilingual, transliteration-aware, or privacy-preserving unless those properties have been implemented and tested.

Specifications and intended future functionality should not be confused with live features.

## 20. SEO and Structured Data Testing

### 20.1 Page Metadata

Check:

- Page title.
- Description.
- Canonical URL.
- Language information.
- Social preview metadata.
- Image references.

### 20.2 Structured Data

Where JSON-LD is implemented, verify:

- Valid JSON.
- Appropriate Schema.org types.
- Correct article title.
- Correct author or creator attribution.
- Accurate publication dates.
- Agreement with visible page content.

### 20.3 Sitemap

Check:

- Valid XML.
- Correct absolute URLs.
- No unintended development URLs.
- No excluded error pages.
- Appropriate article and weekly collection inclusion.

### 20.4 RSS Feed

Check:

- Valid XML.
- Correct site title.
- Correct article URLs.
- Correct dates.
- Accurate descriptions.
- Appropriate content representation.

### 20.5 Robots and Indexing

Check the actual deployed robots and indexing behaviour.

Remember that a project-site `robots.txt` file is served under the project path and does not automatically control the domain-root robots policy.

### 20.6 Discoverability Resources

Check the availability and accuracy of:

- `llms.txt`
- `llms-full.txt`
- Sitemap.
- RSS feed.
- Canonical metadata.

Do not promise search-engine ranking or automatic inclusion in AI systems.

## 21. Performance Testing

Performance affects how readers experience the publication, especially on mobile networks.

### 21.1 Page Loading

Examine:

- Initial page load.
- CSS delivery.
- JavaScript execution.
- Image loading.
- Font loading.
- Layout stability.

### 21.2 Image Optimisation

Use suitable image formats and dimensions.

Avoid unnecessarily large images.

### 21.3 Animation

Check that background animation does not impose excessive processing overhead.

### 21.4 External Resources

Examine third-party resources such as:

- Google Fonts.
- Embedded media.
- External scripts.
- Other hosted assets.

Consider the effects of external service interruptions and privacy implications.

### 21.5 Measurement

Where available, use browser developer tools and suitable performance testing tools.

Record actual measurements rather than inventing performance scores.

### 21.6 Performance Changes

A visual improvement should not introduce unnecessary script dependencies, excessively large assets, or avoidable rendering delays.

## 22. Security and Privacy Testing

### 22.1 Sensitive Files

Review repository changes for accidental inclusion of:

- Passwords.
- API keys.
- Access tokens.
- Private correspondence.
- Confidential manuscripts.
- Interview consent forms.
- Private recordings.
- Sensitive participant data.

### 22.2 Public Output

Inspect the generated `_site/` directory to ensure that confidential source material has not entered the deployment artifact.

### 22.3 Third-Party Resources

Review third-party scripts, embeds, fonts, and dependencies.

### 22.4 External Links

Where links open new browsing contexts, check whether appropriate security attributes are used.

### 22.5 Forms

If interactive forms are introduced, evaluate:

- Input validation.
- Data handling.
- Spam protection.
- Accessibility.
- Privacy disclosures.
- Storage security.

### 22.6 Repository and Deployment Permissions

Review GitHub Actions permissions and repository access arrangements.

### 22.7 Security Reporting

Follow `SECURITY.md` for reporting and handling security concerns.

## 23. Automated Testing Strategy

Automated checks should focus on repeatable technical conditions.

Possible checks include:

| Test | Possible tool or method |
|---|---|
| Jekyll build | Jekyll |
| YAML syntax | YAML parser |
| Markdown structure | Markdown linting |
| HTML validation | HTML validator |
| Broken links | Link checker |
| Accessibility scan | Accessibility testing tool |
| CSS linting | CSS linter |
| JavaScript linting | JavaScript linter |
| Asset existence | Custom script |
| Required metadata | Custom script |
| XML validation | XML parser |
| URL correctness | Generated-output checks |

### 23.1 Automation Principles

- Use tools appropriate to the repository's actual structure.
- Pin or otherwise manage tool versions consistently.
- Keep automated checks understandable.
- Examine failures before changing source files.
- Avoid tests that depend on unreliable external services without clear handling.
- Do not make a workflow pass by hiding genuine errors.
- Do not treat automated compliance scores as proof of complete accessibility or editorial correctness.

### 23.2 Gradual Introduction

Testing can be introduced incrementally.

A reasonable sequence is:

1. Verify successful Jekyll builds.
2. Check essential generated files.
3. Check required article metadata.
4. Check internal links.
5. Validate HTML and XML outputs.
6. Introduce automated accessibility checks.
7. Add targeted regression tests.
8. Extend browser-level testing where justified.

Not all of these checks need to exist in the first deployment workflow.

### 23.3 Failure Handling

A failing test should produce an understandable result.

Do not automatically ignore a failure because the website still appears to load.

Investigate the specific reason.

## 24. Suggested CI Quality-Assurance Workflow

The following is a proposed conceptual sequence for a future GitHub Actions quality-assurance workflow.

It is not a replacement for the deployment workflow in `GITHUB_PAGES_DEPLOYMENT.md`.

<escape>
Repository change
       |
       v
Checkout source
       |
       v
Validate configuration and content
       |
       v
Build Jekyll website
       |
       v
Check generated files
       |
       v
Validate links and HTML
       |
       v
Run available accessibility checks
       |
       v
Review test results
       |
       +---- Failure ----> Correct and retest
       |
       v
Approved build
       |
       v
Deployment workflow
       |
       v
Live-site verification
</escape>

### 24.1 Separate Testing from Deployment

Where practical, quality checks should run before deployment.

### 24.2 Deployment Conditions

Do not configure deployment to proceed automatically from a failed quality gate unless the failure is explicitly classified and permitted by the release policy.

### 24.3 Workflow Maintenance

Update automated checks when the site architecture changes.

A test that no longer matches the source code can create false confidence.

## 25. Regression Testing

A regression test checks whether a new change has damaged existing functionality.

### 25.1 Changes to Shared Layouts

After changing `_layouts/default.html`, `_layouts/entry.html`, or `_layouts/week.html`, inspect representative pages using each affected layout.

### 25.2 Changes to Includes

After modifying header, footer, metadata, or other shared includes, check all page types that use them.

### 25.3 Changes to CSS

After changing `site.css`, inspect:

- Homepage.
- Individual article.
- Weekly collection.
- Language page.
- Archive.
- Error page.

### 25.4 Changes to JavaScript

Test the affected control and the other interactive features that may share the same script.

### 25.5 Changes to Language Data

After changing `_data/languages.yml`, check the language directory, article labels, navigation, and multilingual rendering.

### 25.6 Changes to Collection Logic

After changing collection matching or sorting, verify multiple weekly editions, including those with different article counts or missing optional metadata.

### 25.7 Changes to Configuration

Changes to `_config.yml` require a complete build and broader inspection because they may influence the entire website.

## 26. Test Cases and Results Register

For meaningful technical changes, maintain a test record.

### 26.1 Test Case Template

**Test ID:** [Unique identifier]

**Test name:** [Name]

**Feature or component:** [Component]

**Purpose:** [What is being checked]

**Preconditions:** [Requirements]

**Test procedure:** [Steps]

**Expected result:** [Expected behaviour]

**Actual result:** [Observed behaviour]

**Status:** [Pass / Fail / Blocked / Not applicable]

**Environment:** [Local / GitHub Actions / Production]

**Browser or platform:** [Details]

**Test date:** [Date]

**Tested by:** [Name]

**Issue reference:** [Reference, if applicable]

### 26.2 Example Test Record

**Test ID:** VV-QA-001

**Test name:** Project-site stylesheet loading

**Purpose:** Confirm that the stylesheet loads under the project-site URL.

**Preconditions:** Website build completed.

**Test procedure:** Open the deployed homepage and inspect the stylesheet request.

**Expected result:** The stylesheet loads from the expected `/verse-variable/assets/css/site.css` path.

**Actual result:** [Record observed result.]

**Status:** [Pass / Fail / Blocked.]

### 26.3 Test Summary

| Test ID | Component | Test date | Environment | Result | Issue reference |
|---|---|---|---|---|---|
| [ID] | [Component] | [Date] | [Environment] | [Result] | [Reference] |
| [ID] | [Component] | [Date] | [Environment] | [Result] | [Reference] |

Do not insert invented test results.

## 27. Defect Classification

When a problem is discovered, classify it according to its likely effect.

| Severity | Description | Example |
|---|---|---|
| Critical | Website or important content is unusable, or serious exposure occurs | Public disclosure of sensitive private records |
| High | Major feature or substantial content is broken | All article pages fail to render |
| Medium | A meaningful feature is impaired | Weekly collection links are incorrect |
| Low | Limited visual or content defect | Minor spacing inconsistency |

Severity should be based on the actual problem and its consequences.

### 27.1 Defect Record

For each important defect, record:

- Issue identifier.
- Description.
- Affected pages or components.
- Reproduction steps.
- Expected behaviour.
- Actual behaviour.
- Severity.
- Supporting evidence.
- Proposed correction.
- Responsible person.
- Resolution status.

### 27.2 Retesting

After a correction:

- Repeat the original failed test.
- Check related functionality.
- Inspect the deployed result where relevant.
- Record the outcome.

### 27.3 Known Issues

A known issue should not be silently treated as resolved.

Document its limitations and planned handling.

## 28. Test Release Acceptance

A release should not be considered technically ready merely because a repository commit succeeded.

The release should meet the following conditions, as applicable:

- [ ] Repository changes are internally consistent.
- [ ] Jekyll build succeeds.
- [ ] Generated pages are present.
- [ ] Required article and collection pages are generated.
- [ ] No critical broken links remain.
- [ ] Essential CSS and JavaScript resources load.
- [ ] Multilingual text displays appropriately.
- [ ] Navigation works.
- [ ] Responsive presentation has been checked.
- [ ] Relevant accessibility checks have been completed.
- [ ] Important metadata is correct.
- [ ] No confidential information is exposed.
- [ ] GitHub Actions completes successfully.
- [ ] The live website is inspected.
- [ ] High-priority defects are resolved or the release is held.
- [ ] Testing limitations are recorded.

The required tests should be proportional to the scope and risk of the release.

## 29. Testing Documentation and Evidence

Keep test evidence understandable and proportionate.

Possible evidence includes:

- Build logs.
- Deployment logs.
- Test case records.
- Screenshots.
- Browser console observations.
- Link-checking reports.
- HTML validation reports.
- Accessibility scan reports.
- Defect records.
- Regression-test results.

Do not publish sensitive internal evidence merely to demonstrate that testing occurred.

Where a test involves personal or confidential information, retain it securely.

## 30. Testing Responsibilities

The responsible editor or project maintainer should ensure that appropriate checks are performed before publication.

For more complex technical changes, specialist assistance may be appropriate.

Responsibilities may include:

| Area | Responsible role |
|---|---|
| Literary accuracy | Editorial assessment |
| Translation | Linguistic or translation assessment |
| Scientific claims | Appropriate subject specialist |
| Research references | Source verification |
| Copyright | Rights assessment |
| Participant privacy | Ethical and privacy assessment |
| Jekyll build | Technical maintainer |
| CSS and JavaScript | Technical testing |
| Accessibility | Accessibility assessment |
| Deployment | Repository maintainer |
| Final release | Responsible editor |

One person may perform several roles, but the nature and limits of their assessment should remain clear.

## 31. Periodic Quality Review

Quality assurance should not be limited to individual releases.

Periodic review may examine:

- Broken links.
- Outdated external references.
- Missing assets.
- Incorrect metadata.
- Rendering changes.
- Browser compatibility.
- Dependency changes.
- Accessibility problems.
- Search and archive accuracy.
- Website performance.
- Security notices.
- Content corrections.

The frequency should reflect the size, activity, and technical complexity of the archive.

## 32. Relationship with Other Publication Documentation

This document should be read alongside:

- `README.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `GITHUB_PAGES_DEPLOYMENT.md`
- `SITE_MAINTENANCE.md`
- `BACKUP_AND_RECOVERY.md`
- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
- `CONTENT_LIFECYCLE.md`
- `ARTICLE_TEMPLATE.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `WEEKLY_COLLECTION_TEMPLATE.md`
- `WEEKLY_PUBLICATION_WORKFLOW.md`
- `PUBLICATION_CHECKLIST.md`
- `EDITORIAL_DECISION_RECORD.md`
- `RESEARCH_STANDARDS.md`
- `RESEARCH_ETHICS.md`
- `TRANSLATION_GUIDELINES.md`
- `LANGUAGE_STYLE_GUIDE.md`
- `ACCESSIBILITY.md`
- `SEO_AND_DISCOVERY.md`
- `SCHEMA_AND_STRUCTURED_DATA.md`
- `PRIVACY.md`
- `SECURITY.md`
- `CORRECTIONS_POLICY.md`
- `TAKEDOWN_POLICY.md`

These documents define the content, technical, ethical, accessibility, and maintenance standards that quality assurance is intended to protect.

## 33. Continuing Commitment

Quality is not established by the number of tests performed or the presence of a successful deployment indicator.

It is established through meaningful verification of what the publication actually contains and how readers experience it.

Verse & Variable seeks to preserve the integrity of its literary material, the accuracy of its research discussions, the accessibility of its multilingual archive, and the reliability of its technical infrastructure.

Testing should support those objectives without becoming an administrative exercise disconnected from the reader's experience.

**Build carefully. Test meaningfully. Correct what fails. Verify what is published.**

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
