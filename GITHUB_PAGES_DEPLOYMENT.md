
# GitHub Pages Deployment Guide

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document explains the website deployment architecture and procedures for publishing Verse & Variable through GitHub Pages using Jekyll.

It covers:

- GitHub Pages configuration.
- Repository and project-site structure.
- Jekyll configuration.
- GitHub Actions deployment.
- Static-site generation.
- Collection processing.
- Project-site URL handling.
- Asset and link paths.
- Deployment verification.
- Common build and deployment problems.
- Local testing.
- Maintenance and recovery considerations.

The purpose is to establish a consistent deployment process so that changes committed to the repository can be built and published reliably.

This document describes the intended deployment configuration. It does not certify that every deployment setting has already been configured or that the live website has passed all tests.

## 2. Website Identity

The publication is hosted through GitHub Pages.

**Project name:** Verse & Variable

**GitHub repository:**

`https://github.com/pravinkumar-ghodake/verse-variable`

**Repository owner:**

`pravinkumar-ghodake`

**Expected project-site URL:**

`https://pravinkumar-ghodake.github.io/verse-variable/`

**Jekyll configuration file:**

`_config.yml`

**Primary deployment branch:**

[Confirm the repository's actual default branch.]

**Build system:**

Jekyll

**Hosting platform:**

GitHub Pages

**Deployment automation:**

GitHub Actions

The project-site URL includes the repository name as a path segment.

This distinction is important because a project site and a user or organisation site have different URL structures.

## 3. Deployment Architecture

The intended deployment process consists of the following stages.

<escape>
Repository files
      |
      v
GitHub repository
      |
      v
GitHub Actions workflow
      |
      v
Jekyll build
      |
      v
Generated static website (_site)
      |
      v
GitHub Pages artifact
      |
      v
GitHub Pages deployment
      |
      v
Public website
</escape>

### 3.1 Source Repository

The repository contains:

- Jekyll configuration.
- Layouts.
- Includes.
- Data files.
- Static assets.
- Individual literary entries.
- Weekly collections.
- Supporting documentation.
- Public website pages.
- Deployment workflow files.

### 3.2 Jekyll

Jekyll converts Markdown, HTML, Liquid templates, collection documents, and other supported resources into a static website.

It combines content with layouts, includes, metadata, and configuration.

### 3.3 Generated Website

The generated website is placed in the `_site` directory.

This directory contains the static output intended for deployment.

It should be treated as generated build output rather than the primary location for editing website content.

### 3.4 GitHub Actions

GitHub Actions automates checkout, configuration, building, artifact preparation, and deployment.

### 3.5 GitHub Pages

GitHub Pages serves the deployed static website at its configured public URL.

## 4. Repository Structure

The project uses Jekyll conventions.

The following is a conceptual representation of the repository structure:

```text
verse-variable/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── _config.yml
│
├── _data/
│   ├── languages.yml
│   └── site.yml
│
├── _includes/
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── metadata.html
│   ├── entry-card.html
│   └── wavefield.html
│
├── _layouts/
│   ├── default.html
│   ├── home.html
│   ├── page.html
│   ├── entry.html
│   └── week.html
│
├── _entries/
│   └── individual-articles.md
│
├── _weeks/
│   └── weekly-collections.md
│
├── assets/
│   ├── css/
│   │   └── site.css
│   ├── js/
│   │   └── site.js
│   └── images/
│       └── social-preview.svg
│
├── index.html
├── about.md
├── languages.md
├── archive.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── feed.xml
├── llms.txt
├── llms-full.txt
│
├── README.md
├── LICENSE
└── other documentation files
```

This structure is illustrative. The actual repository may contain additional files.

### 4.1 Jekyll Special Directories

Certain directories have special meanings:

| Directory | Purpose |
|---|---|
| `_data/` | Structured data files |
| `_includes/` | Reusable Liquid and HTML components |
| `_layouts/` | Page and collection layouts |
| `_entries/` | Individual article collection documents |
| `_weeks/` | Weekly collection documents |
| `assets/` | CSS, JavaScript, images, and other assets |
| `.github/workflows/` | GitHub Actions workflows |

Jekyll uses naming conventions for collections and template directories.

Do not rename special directories without updating the corresponding configuration and references.

## 5. Jekyll Configuration

The main configuration file is:

`_config.yml`

It controls site identity, URL handling, collections, default layouts, Markdown processing, and other build settings.

### 5.1 Site URL

The configuration currently uses:

```yaml
url: "https://pravinkumar-ghodake.github.io"
```

This represents the website's origin.

### 5.2 Project-Site Base URL

The configuration currently uses:

```yaml
baseurl: "/verse-variable"
```

This represents the repository path within the GitHub Pages project site.

The combination produces:

```text
https://pravinkumar-ghodake.github.io/verse-variable/
```

Do not replace the project-site `baseurl` with an empty string unless the website is deliberately moved to a root-level domain or a different hosting arrangement.

### 5.3 Collections

The project uses two Jekyll collections:

```yaml
collections:
  entries:
    output: true
    permalink: /entries/:path/

  weeks:
    output: true
    permalink: /weeks/:name/
```

The collections serve different purposes.

**Entries**

Contains individual literary and interdisciplinary articles.

**Weeks**

Contains weekly collection pages connecting the individual articles.

### 5.4 Collection Output

The `output: true` setting is essential when collection documents are intended to generate individual public pages.

If collection output is disabled, the content may remain available as collection data without producing the intended permanent pages.

### 5.5 Default Layouts

The configuration defines appropriate layouts for pages, entries, and weeks.

When modifying layout defaults, verify that the actual files and front matter use compatible layout names.

### 5.6 Markdown Processing

The project uses Kramdown with GitHub Flavoured Markdown support.

Changes to Markdown processing should be tested against:

- Multilingual text.
- Tables.
- Mathematical notation.
- Fenced code blocks.
- Block quotations.
- Links.
- Embedded HTML.

### 5.7 Safe Mode

The existing configuration uses safe-mode settings and does not define additional plugins.

GitHub Pages has its own supported plugin environment. Unsupported plugins cannot simply be assumed to work in its standard build environment.

If the publication requires unsupported Jekyll plugins or custom build dependencies, a different build-and-deploy arrangement may be necessary.

Consult GitHub's supported plugin information before changing the deployment architecture.

## 6. Project-Site URL Handling

Correct base-URL handling is one of the most important deployment requirements.

The website is hosted under:

`/verse-variable/`

It is not hosted directly at the domain root.

### 6.1 Internal Links

Use Jekyll's `relative_url` filter for internal paths.

Example:

```liquid
<a href="{{ '/about/' | relative_url }}">About</a>
```

This allows the correct project-site prefix to be included.

### 6.2 Absolute URLs

Use `absolute_url` when a full URL is required.

Example:

```liquid
<link
  rel="canonical"
  href="{{ page.url | absolute_url }}"
>
```

This is particularly useful for:

- Canonical metadata.
- Social previews.
- Sitemap entries.
- Structured data.
- RSS feeds.
- External references to site pages.

### 6.3 Static Assets

Use the appropriate Jekyll URL filter for CSS, JavaScript, and images.

Example:

```liquid
<link
  rel="stylesheet"
  href="{{ '/assets/css/site.css' | relative_url }}"
>
```

JavaScript:

```liquid
<script
  src="{{ '/assets/js/site.js' | relative_url }}"
></script>
```

Image:

```liquid
<img
  src="{{ '/assets/images/social-preview.svg' | relative_url }}"
  alt="Verse & Variable publication artwork"
>
```

### 6.4 Avoid Hardcoded Root Paths

Avoid writing internal paths such as:

```html
<a href="/about/">
```

or:

```html
<img src="/assets/images/example.svg">
```

These root-relative paths may work on a domain-root site but fail on a project site because they omit `/verse-variable/`.

Use the appropriate Jekyll URL filter instead.

### 6.5 External Links

External websites should use their full intended URL.

Do not apply the project-site base URL to external resources.

### 6.6 URL Verification

After changing URL-related code, check the generated HTML rather than relying exclusively on the source template.

Verify that internal links resolve under the project-site path.

## 7. GitHub Pages Configuration

GitHub Pages must be configured to publish the repository using the intended source.

### 7.1 Open Repository Settings

1. Open the `verse-variable` repository on GitHub.
2. Open **Settings**.
3. Locate **Pages** under the repository's code and automation settings.
4. Open the **Build and deployment** section.

### 7.2 Select Deployment Source

For the recommended custom workflow in this document:

- Set **Source** to `GitHub Actions`.

Do not simultaneously configure an unrelated publishing branch as though it were the intended deployment mechanism.

### 7.3 Repository Permissions

The person configuring the publishing source needs appropriate repository permissions.

### 7.4 Public Availability

A deployed GitHub Pages website is publicly accessible on the internet.

Do not include private editorial material, confidential correspondence, unpublished consent forms, credentials, or sensitive research information in the deployed artifact.

A private repository does not automatically make the resulting published website private.

### 7.5 Configuration Changes

After changing the Pages source, verify that the appropriate deployment workflow is available and that subsequent builds can publish successfully.

## 8. Recommended GitHub Actions Workflow

GitHub documents a workflow using separate build and deployment jobs for GitHub Pages.

For Verse & Variable, a dedicated Jekyll build step should generate the static site before the resulting artifact is deployed.

The recommended workflow uses the official GitHub Actions for:

- Repository checkout.
- Pages configuration.
- Jekyll building.
- Artifact upload.
- Pages deployment.

### 8.1 Workflow File Location

Create:

`.github/workflows/deploy.yml`

### 8.2 Workflow Configuration

The following is the recommended starting configuration.

**Important:** The example uses `main` as the deployment branch. Replace it with the repository's actual default branch if the repository uses another branch name.

```yaml
name: Build and deploy Jekyll site to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: github-pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    permissions:
      contents: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Build Jekyll website
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./_site

  deploy:
    needs: build

    runs-on: ubuntu-latest

    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 8.3 Workflow Explanation

**Trigger**

The workflow runs when changes are pushed to the configured deployment branch.

It can also be started manually through the GitHub Actions interface.

**Checkout**

The checkout action retrieves the repository contents.

**Configure Pages**

The Pages configuration action prepares the GitHub Pages deployment environment.

**Jekyll Build**

The Jekyll build action processes the repository and generates the static website in `_site`.

**Upload Artifact**

The generated website is packaged as a GitHub Pages artifact.

**Deploy**

The deployment action publishes the artifact to GitHub Pages.

### 8.4 Deployment Permissions

The deployment job needs:

```yaml
permissions:
  pages: write
  id-token: write
```

These permissions support the GitHub Pages deployment process.

The build job should receive only the permissions necessary to build and upload the artifact.

### 8.5 Deployment Dependency

The deployment job must depend on the build job:

```yaml
needs: build
```

Without the appropriate dependency, deployment may start before the build artifact is available.

### 8.6 Environment

The workflow uses the deployment environment:

`github-pages`

Its URL is supplied by the deployment step.

GitHub Pages environment protection rules may be configured where appropriate.

### 8.7 Action Versions

The action versions shown above reflect the GitHub documentation consulted when this file was prepared.

Before changing them, check the official action documentation and release notes.

Do not automatically replace version references with unverified tags.

## 9. Alternative Deployment Approaches

GitHub Pages offers different publishing arrangements.

### 9.1 Publishing from a Branch

GitHub can build and publish from a configured branch and folder.

A common arrangement uses:

- A selected branch.
- The repository root.
- GitHub's Pages build process.

This may be suitable for simpler websites that do not need a custom build workflow.

### 9.2 GitHub Actions

A custom workflow offers more control over:

- Build steps.
- Dependencies.
- Validation.
- Artifact generation.
- Deployment conditions.
- Additional tests.

For Verse & Variable, this is the recommended approach in this document.

### 9.3 Avoid Conflicting Deployment Systems

Do not create multiple independent workflows that publish competing versions of the same website.

Maintain one clearly documented deployment process.

If the deployment strategy changes, update this document and the repository configuration together.

## 10. Jekyll Build Process

The website must build successfully before it can be published.

### 10.1 Source Files

Jekyll reads the repository's eligible source files.

These include:

- Markdown documents.
- HTML pages.
- Liquid templates.
- Data files.
- Layouts.
- Includes.
- Collection documents.
- Static assets.

### 10.2 Front Matter

Files with YAML front matter may define:

- Layout.
- Title.
- Description.
- Publication date.
- Categories.
- Tags.
- Permalink.
- Language information.
- Collection metadata.

Incorrect YAML can prevent the build from completing.

### 10.3 Liquid Processing

Liquid expressions are evaluated during the build.

Errors in loops, filters, includes, or variable references may create build failures or incorrect output.

### 10.4 Collections

Jekyll processes the configured `entries` and `weeks` collections.

For the intended archive:

- Individual articles belong in `_entries/`.
- Weekly collection documents belong in `_weeks/`.

The directory names must remain consistent with the collection configuration.

### 10.5 Output Directory

The generated site is placed in:

`_site/`

This directory should contain the final HTML, CSS, JavaScript, images, feeds, and other generated public resources.

### 10.6 Excluded Files

Jekyll does not publish every repository file automatically.

Special directories and files have specific build behaviour, and exclusions in `_config.yml` may prevent publication.

Review the generated output when deciding whether a resource is intended to be publicly available.

## 11. Testing Before Deployment

A successful deployment should not be the only quality-control step.

Where practical, test the website before publishing substantial changes.

### 11.1 Content Validation

Check:

- Article titles.
- Original literary text.
- Translations.
- Attributions.
- References.
- Metadata.
- Weekly collection membership.
- Internal links.

### 11.2 Template Validation

Check:

- Layout references.
- Include references.
- Liquid expressions.
- Collection loops.
- Data-file references.
- Conditional output.

### 11.3 Asset Validation

Check:

- CSS paths.
- JavaScript paths.
- Image paths.
- Fonts.
- Icon resources.
- External resources.

### 11.4 HTML Inspection

Examine the generated HTML for:

- Missing page elements.
- Broken links.
- Incorrect URLs.
- Unintended placeholder content.
- Invalid metadata.
- Duplicate or missing sections.

### 11.5 Multilingual Rendering

Check Urdu right-to-left presentation and Indic scripts.

Confirm that the generated pages preserve the intended direction, script, punctuation, and line order.

### 11.6 Responsive Rendering

Inspect the site on desktop, tablet, and mobile-sized displays.

## 12. Local Jekyll Testing

Local testing is useful for identifying errors before a deployment is triggered.

### 12.1 Requirements

A local environment may require:

- Ruby.
- RubyGems.
- Bundler.
- Jekyll.
- Compatible dependencies.
- Git.

Jekyll's local installation and GitHub Pages-specific setup may differ from the GitHub-hosted build environment.

### 12.2 Dependency Management

For reproducible local builds, maintain an appropriate dependency manifest.

A common Ruby dependency arrangement uses:

- `Gemfile`.
- `Gemfile.lock`.

Where the project adopts this arrangement, the dependencies should be selected to match the intended GitHub Pages build environment.

Do not invent a dependency version or add an arbitrary Jekyll plugin merely to resolve a local error.

### 12.3 Install Dependencies

When the repository has a valid `Gemfile`:

```bash
bundle install
```

### 12.4 Run the Local Server

```bash
bundle exec jekyll serve
```

Open the local address printed by Jekyll.

The usual local development address is:

`http://127.0.0.1:4000/`

### 12.5 Build Without Starting the Server

```bash
bundle exec jekyll build
```

The generated website should appear in `_site/`.

If the repository does not yet have a compatible Gemfile, first establish the appropriate dependency configuration rather than assuming the above commands will work unchanged.

### 12.6 Project-Site URL Testing

Check that the local and deployment configurations generate correct paths.

Where necessary, use a separate local configuration file to override selected settings without changing the production `_config.yml`.

Example:

```yaml
# _config.local.yml

url: "http://127.0.0.1:4000"
baseurl: ""
```

A local configuration override can be supplied as an additional configuration file when running Jekyll.

Example:

```bash
bundle exec jekyll serve --config _config.yml,_config.local.yml
```

Do not commit temporary machine-specific configuration unless it is intentionally part of the project.

### 12.7 Local and Production Differences

A successful local build does not automatically prove that the GitHub-hosted build will succeed.

Differences can arise from:

- Dependency versions.
- Plugin availability.
- Operating-system differences.
- Environment variables.
- Build configuration.
- File permissions.
- URL handling.

Use GitHub Actions results as the definitive record of the configured deployment workflow.

## 13. Monitoring GitHub Actions

The GitHub Actions interface provides the build and deployment history.

### 13.1 Access the Actions Tab

1. Open the `verse-variable` repository.
2. Select **Actions**.
3. Open the relevant Pages deployment workflow.
4. Select the latest run.

### 13.2 Successful Build

Confirm that:

- Repository checkout succeeded.
- Pages configuration succeeded.
- Jekyll build completed.
- Artifact upload succeeded.

### 13.3 Successful Deployment

Confirm that:

- The deploy job started after the build job.
- Required permissions were available.
- The artifact was found.
- The deployment action completed successfully.
- The deployment environment shows the expected URL.

### 13.4 Failed Workflow

When a workflow fails:

1. Open the failed run.
2. Identify the failed job.
3. Expand the failed step.
4. Read the error message.
5. Locate the relevant file or configuration.
6. Correct the underlying issue.
7. Commit the correction.
8. Verify the next run.

Do not repeatedly rerun an unchanged failed workflow without identifying the cause.

### 13.5 Workflow History

Retain deployment history through GitHub Actions.

A successful older deployment does not prove that the latest repository revision is live.

## 14. Verifying the Live Website

After deployment, inspect the actual website.

**Expected website URL:**

`https://pravinkumar-ghodake.github.io/verse-variable/`

### 14.1 Homepage

Check:

- [ ] The homepage loads.
- [ ] The publication wordmark appears.
- [ ] Main navigation works.
- [ ] Hero content is displayed.
- [ ] Visual elements load correctly.
- [ ] Latest weekly edition is represented appropriately.
- [ ] Footer links work.

### 14.2 Individual Articles

Check:

- [ ] Article page resolves.
- [ ] Correct title appears.
- [ ] Original text is displayed.
- [ ] Translation and transliteration render correctly.
- [ ] Four commentary paragraphs are present where applicable.
- [ ] Attribution is visible.
- [ ] References are present.
- [ ] Article metadata is correct.

### 14.3 Weekly Collection

Check:

- [ ] Weekly page resolves.
- [ ] Correct title appears.
- [ ] Correct week identifier is used.
- [ ] The three intended articles are listed.
- [ ] Article order is correct.
- [ ] Individual article links work.
- [ ] Descriptions are accurate.

### 14.4 Other Public Pages

Check:

- [ ] About page.
- [ ] Languages page.
- [ ] Archive.
- [ ] 404 page.
- [ ] Sitemap.
- [ ] RSS feed.
- [ ] `llms.txt`.
- [ ] `llms-full.txt`.

Check documentation pages as appropriate.

### 14.5 Browser Inspection

Inspect the website for:

- Broken images.
- Missing styles.
- JavaScript errors.
- Incorrect font rendering.
- Unintended layout changes.
- Mobile navigation problems.
- Incorrect language direction.
- Unexpected redirects.

### 14.6 Caching

A recently deployed change may not immediately appear in every browser or cached resource.

Check the actual deployment status first.

If the deployment succeeded but the display appears stale, inspect caching and browser behaviour before assuming that the build failed.

## 15. Common Deployment Problems

The following table provides an initial troubleshooting reference.

| Problem | Possible cause | Initial action |
|---|---|---|
| Workflow does not start | Incorrect branch trigger | Check the actual default branch |
| Build fails | Invalid YAML or Liquid | Examine the build log |
| Page returns 404 | Incorrect permalink or missing output | Check generated files and Pages URL |
| CSS does not load | Incorrect project-site path | Use `relative_url` |
| Images are missing | Incorrect image path | Inspect the generated HTML |
| Article absent | Collection output or location error | Check `_config.yml` and `_entries/` |
| Weekly page is empty | Collection matching problem | Check `week_id` values and layout logic |
| Deployment fails | Missing permissions or artifact | Inspect the deploy job |
| Incorrect site URL | Wrong `url` or `baseurl` | Check `_config.yml` |
| Fonts do not load | External resource or path problem | Inspect requests and licence conditions |
| Layout is incorrect | Invalid layout reference | Check `_layouts/` and front matter |
| Navigation is broken | Incorrect internal links | Apply `relative_url` |
| Sitemap is incomplete | Incorrect sitemap template or page exclusion | Inspect generated sitemap |
| RSS feed is incorrect | Invalid XML or feed template | Inspect generated feed |
| Multilingual text is broken | Encoding or direction issue | Inspect source text and rendering |
| Changes are not visible | Wrong branch, failed deployment, or cache | Check workflow history and live deployment |

## 16. Common Jekyll Build Issues

### 16.1 Invalid Front Matter

Jekyll expects valid YAML when front matter is provided.

Example of valid front matter:

```yaml
---
layout: entry
title: "Example Article"
description: "An example literary exploration."
date: 2026-11-12
week_id: "2026-W46"
entry_number: 1
---
```

Check quotation marks, indentation, colons, and date formats.

### 16.2 Missing Layout

If a page specifies a layout that does not exist, the build or rendering may fail.

Verify the layout name and corresponding file in `_layouts/`.

### 16.3 Missing Include

Verify that every referenced include exists under `_includes/`.

### 16.4 Undefined Variables

Liquid expressions should not assume that every article contains every optional metadata field.

Use conditional logic where appropriate.

### 16.5 Empty Collections

If the weekly layout displays no articles, check:

- Collection configuration.
- Collection file location.
- `week_id` spelling.
- Matching logic.
- Entry ordering.
- Collection output settings.

### 16.6 Unsupported Plugins

GitHub Pages cannot automatically run arbitrary Jekyll plugins.

Check the currently supported plugin list before introducing one.

### 16.7 Excluded Files

If a file does not appear in the generated website, inspect Jekyll's default processing rules and the configured exclusions.

Do not assume every repository file is a public website resource.

## 17. Project-Site Security

The repository and published website should be treated as two distinct environments.

### 17.1 Public Website

Everything included in the deployed artifact may be publicly accessible.

Do not include:

- Credentials.
- Private tokens.
- Passwords.
- Sensitive correspondence.
- Confidential manuscripts.
- Private consent forms.
- Restricted research data.
- Unpublished third-party material.
- Personal information that should remain private.

### 17.2 Repository Visibility

Repository visibility does not eliminate the need to inspect deployment contents.

The public website must be checked independently.

### 17.3 Workflow Permissions

Grant only the permissions required by the build and deployment jobs.

Avoid unnecessarily broad write permissions.

### 17.4 Third-Party Actions

Use official, trusted actions where appropriate.

Review action documentation and version changes before modifying deployment dependencies.

### 17.5 External Services

Review external services loaded by the website, including fonts, analytics if added, embeds, and other third-party resources.

Consider privacy, availability, and security implications.

## 18. Deployment Failure and Recovery

If a deployment fails, do not assume that the public website has automatically reverted to an earlier version.

### 18.1 Identify the Failure

Determine whether the failure occurred during:

- Checkout.
- Configuration.
- Jekyll build.
- Artifact upload.
- Deployment.

### 18.2 Inspect Logs

Identify the first meaningful error.

Later errors may simply result from an earlier failure.

### 18.3 Correct the Source

Correct the relevant repository file or workflow.

### 18.4 Rebuild

Commit the correction and verify the new workflow.

### 18.5 Failed Content Release

If incorrect content has already been published:

- Evaluate the severity.
- Correct or temporarily remove affected material where appropriate.
- Follow the correction and takedown policies.
- Preserve an appropriate internal record.

### 18.6 Version Control

Use Git history to identify the last known suitable version.

A revert or correction should be intentional and should not discard unrelated changes.

## 19. Deployment Changes and Configuration Control

Deployment configuration should not be changed casually.

Changes may affect the entire website.

### 19.1 Changes Requiring Review

Examples include:

- Repository default branch.
- GitHub Pages publishing source.
- GitHub Actions workflow.
- Jekyll version or dependencies.
- `_config.yml`.
- Collection names.
- Collection permalinks.
- `url`.
- `baseurl`.
- Asset directory structure.
- Custom domain configuration.
- Deployment permissions.

### 19.2 Before Changing Configuration

Record:

- Reason for the change.
- Expected result.
- Files affected.
- Potential compatibility issues.
- Testing requirements.
- Recovery approach.

### 19.3 After Changing Configuration

Perform a complete build and inspect the website.

Do not assume that changes affecting only one file cannot influence other pages.

## 20. Deployment and Release Checklist

### Repository Configuration

- [ ] Correct repository is used.
- [ ] Correct default branch is identified.
- [ ] `_config.yml` is valid.
- [ ] `url` is correct.
- [ ] `baseurl` is correct.
- [ ] Collections are configured correctly.
- [ ] Layout names are valid.
- [ ] Required assets exist.

### GitHub Pages Settings

- [ ] Publishing source is selected.
- [ ] GitHub Actions is selected when using the recommended workflow.
- [ ] Deployment permissions are appropriate.
- [ ] Deployment environment is available.
- [ ] No conflicting publishing workflow exists.

### GitHub Actions

- [ ] Workflow file is present.
- [ ] Branch trigger is correct.
- [ ] Checkout works.
- [ ] Pages configuration succeeds.
- [ ] Jekyll build succeeds.
- [ ] Artifact upload succeeds.
- [ ] Deployment succeeds.
- [ ] Workflow output contains the expected Pages URL.

### Website Verification

- [ ] Homepage loads.
- [ ] Main navigation works.
- [ ] Article pages load.
- [ ] Weekly collection pages load.
- [ ] Language pages work.
- [ ] Archive works.
- [ ] CSS and JavaScript load.
- [ ] Images and fonts load.
- [ ] Multilingual rendering works.
- [ ] Internal paths are correct.
- [ ] No significant browser errors remain.

### Release Record

- [ ] Repository commit is identified.
- [ ] Deployment run is identified.
- [ ] Live site is inspected.
- [ ] Deployment status is recorded.
- [ ] Any unresolved issue is documented.

## 21. Recommended Maintenance Practices

### 21.1 Keep the Workflow Understandable

Avoid unnecessary workflow complexity.

A small, predictable deployment process is easier to troubleshoot.

### 21.2 Review Dependencies

Periodically review:

- Jekyll.
- GitHub Actions.
- CSS and JavaScript dependencies.
- Fonts.
- External resources.
- Supported plugins.

### 21.3 Preserve the Production URL

Do not modify `url` or `baseurl` unless the hosting arrangement is deliberately changing.

### 21.4 Test Major Changes

Test changes to:

- Layouts.
- Collection logic.
- Navigation.
- CSS.
- JavaScript.
- Metadata.
- Configuration.

### 21.5 Maintain Documentation

Update this document whenever the actual deployment architecture changes.

Do not allow instructions to describe a workflow that the repository no longer uses.

## 22. Official Documentation and Technical References

The following official resources should be used when maintaining the deployment configuration.

1. **GitHub Pages and Jekyll**
   - https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll

2. **Configuring a GitHub Pages Publishing Source**
   - https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

3. **Using Custom Workflows with GitHub Pages**
   - https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

4. **Testing a GitHub Pages Site Locally with Jekyll**
   - https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll

5. **Jekyll Documentation**
   - https://jekyllrb.com/docs/

6. **GitHub Actions Documentation**
   - https://docs.github.com/en/actions

7. **GitHub Pages Deployment Action**
   - https://github.com/actions/deploy-pages

8. **Jekyll Build Action**
   - https://github.com/actions/jekyll-build-pages

9. **Configure Pages Action**
   - https://github.com/actions/configure-pages

10. **Upload Pages Artifact Action**
    - https://github.com/actions/upload-pages-artifact

These resources should be checked again when GitHub or Jekyll changes its deployment recommendations or supported versions.

## 23. Relationship with Other Publication Documentation

This document should be read alongside:

- `README.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `CONTENT_LIFECYCLE.md`
- `WEEKLY_PUBLICATION_WORKFLOW.md`
- `ARTICLE_METADATA_REFERENCE.md`
- `ARCHIVE_NAVIGATION_SPEC.md`
- `SEARCH_SPEC.md`
- `SEO_AND_DISCOVERY.md`
- `SCHEMA_AND_STRUCTURED_DATA.md`
- `ACCESSIBILITY.md`
- `PRIVACY.md`
- `SECURITY.md`
- `PUBLICATION_CHECKLIST.md`
- `SITE_MAINTENANCE.md`
- `BACKUP_AND_RECOVERY.md`

These documents describe the content, technical, accessibility, security, and maintenance requirements surrounding the deployed website.

## 24. Continuing Commitment

A publication's website is not complete merely because its source files exist in a repository.

The content must be built correctly, the deployment must succeed, and the resulting pages must be inspected as readers experience them.

Verse & Variable aims to maintain a deployment process that is understandable, reproducible, secure, and consistent with the publication's editorial requirements.

The website should remain technically dependable without allowing technical infrastructure to overshadow the literary and intellectual work it exists to present.

**Build carefully. Deploy deliberately. Verify what readers actually see.**

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
