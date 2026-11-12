
# Site Maintenance Policy

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the maintenance principles and procedures for the Verse & Variable website and its associated repository.

Verse & Variable is intended to become a growing multilingual literary and interdisciplinary archive.

Its long-term reliability depends on maintaining both the intellectual integrity of its published material and the technical infrastructure through which that material is presented.

The website therefore requires ongoing attention to:

- Published articles and weekly collections.
- Literary and historical attribution.
- Translations and transliterations.
- Scientific and research references.
- Copyright and permissions.
- Privacy and research ethics.
- Jekyll configuration.
- GitHub Pages deployment.
- Layouts and reusable components.
- CSS and JavaScript.
- Images, fonts, and other assets.
- Accessibility.
- Search-engine metadata.
- RSS and sitemap resources.
- Security and software dependencies.
- Backups and recovery arrangements.
- Reader-reported defects and corrections.

This policy establishes a structured approach to these responsibilities.

It does not claim that monitoring, automated maintenance, dependency-update systems, backup automation, or continuous testing have already been implemented.

## 2. Maintenance Principles

### 2.1 Preserve the Archive

Maintenance should protect the integrity of the existing publication.

Changes should not unnecessarily damage, remove, or rewrite previously published material.

### 2.2 Accuracy Over Appearance

A visually improved website must not come at the expense of incorrect literary attribution, misleading scientific explanations, broken citations, or inaccurate historical information.

### 2.3 Reliability

Changes to the technical infrastructure should be deliberate, tested, and documented.

### 2.4 Security and Privacy

Public and private material should remain appropriately separated.

Maintenance must not introduce unnecessary disclosure of confidential information, credentials, personal data, or unpublished research.

### 2.5 Accessibility

Accessibility should remain an ongoing responsibility rather than a one-time design exercise.

### 2.6 Compatibility

Updates should preserve compatibility with the intended Jekyll and GitHub Pages deployment environment.

### 2.7 Proportionality

Maintenance activity should reflect the importance, complexity, and risk of the change.

### 2.8 Transparency

Significant changes affecting readers should be explained appropriately.

### 2.9 No False Claims

Do not claim that the website is continuously monitored, fully secure, fully accessible, or automatically backed up unless those arrangements actually exist and have been verified.

## 3. Scope

This policy applies to the complete project, including:

### 3.1 Website Content

- Homepage.
- About page.
- Language directory.
- Archive.
- Individual article pages.
- Weekly collection pages.
- Error pages.
- Editorial information.
- Public policy documents.
- Machine-readable publication resources.

### 3.2 Jekyll Infrastructure

- `_config.yml`.
- `_data/`.
- `_includes/`.
- `_layouts/`.
- `_entries/`.
- `_weeks/`.
- Static pages.
- Collection configuration.
- Liquid templates.
- Build settings.

### 3.3 Website Assets

- CSS.
- JavaScript.
- Images.
- Fonts.
- Icons.
- Social-preview artwork.
- Other static resources.

### 3.4 Repository Infrastructure

- Git history.
- GitHub Actions.
- GitHub Pages configuration.
- Branch configuration.
- Repository permissions.
- Dependency configuration.
- Issue and change records, where used.

### 3.5 External Dependencies

- Jekyll.
- Ruby and relevant gems.
- GitHub Actions.
- Third-party JavaScript libraries.
- Font services.
- External media.
- Other services used by the website.

## 4. Maintenance Responsibilities

The responsible editor or project maintainer should coordinate maintenance activities.

Different activities may require different types of expertise.

| Maintenance area | Relevant responsibility |
|---|---|
| Literary content | Editorial review |
| Translation | Linguistic assessment |
| Historical material | Source verification |
| Scientific content | Relevant technical expertise |
| Copyright | Rights assessment |
| Research ethics | Ethical assessment |
| Website configuration | Technical maintenance |
| Jekyll build | Build verification |
| CSS and JavaScript | Frontend maintenance |
| Accessibility | Accessibility assessment |
| Security | Security review |
| Backup and recovery | Repository and data protection |
| Final approval | Responsible editor |

One individual may perform multiple roles. However, the nature and limitations of each assessment should remain clear.

## 5. Maintenance Categories

Maintenance activities should be grouped according to their purpose.

### 5.1 Routine Maintenance

Ordinary checks intended to prevent gradual deterioration.

Examples:

- Broken-link checks.
- Review of deployment history.
- Inspection of external references.
- Repository housekeeping.
- Checking newly published content.
- Reviewing outdated dependencies.

### 5.2 Corrective Maintenance

Work intended to fix an identified defect.

Examples:

- Correcting a broken internal link.
- Repairing a layout.
- Fixing an incorrect article permalink.
- Correcting multilingual rendering.
- Removing unintended content exposure.

### 5.3 Adaptive Maintenance

Changes required because the environment or project requirements have changed.

Examples:

- GitHub Pages changes.
- Jekyll compatibility updates.
- Browser behaviour changes.
- Updated accessibility expectations.
- New language-support requirements.
- Changes to external service arrangements.

### 5.4 Improvement Maintenance

Changes intended to improve the publication beyond correcting an existing defect.

Examples:

- Better archive navigation.
- Improved article discovery.
- More accessible typography.
- Better mobile presentation.
- Improved search functionality.
- More reliable collection rendering.

### 5.5 Emergency Maintenance

Urgent work required to address serious problems.

Examples:

- Exposed credentials.
- Accidental publication of confidential records.
- Major website unavailability.
- Serious security vulnerabilities.
- Materially misleading published information.
- Unauthorised reproduction creating significant legal or ethical concerns.

Emergency maintenance should prioritise containment and protection over cosmetic improvements.

## 6. Recommended Maintenance Schedule

Maintenance should take place according to an appropriate schedule and whenever an important event requires attention.

The following is a suggested framework, not a claim that these checks currently happen automatically.

| Frequency | Suggested activities |
|---|---|
| At each publication | Check article quality, metadata, references, permissions, and live rendering |
| After deployment | Verify the changed pages and deployment result |
| Periodically | Check broken links, external resources, repository housekeeping, and accessibility |
| Monthly | Review dependencies, outstanding issues, and website functionality |
| Quarterly | Review configuration, security, backup arrangements, and important documentation |
| Annually | Review publication policies, infrastructure, long-term archive integrity, and maintenance priorities |
| Event-triggered | Address incidents, serious defects, rights concerns, and important external changes |

The schedule may be adjusted according to the publication's size, activity, and available resources.

Do not allow a routine calendar to delay action on an urgent security, privacy, or content-integrity problem.

## 7. Content Maintenance

The published archive should remain accurate and internally consistent.

### 7.1 Individual Articles

Periodically examine published articles for:

- Incorrect attribution.
- Broken references.
- Incorrect translations.
- Historical inaccuracies.
- Scientific inaccuracies.
- Unclear terminology.
- Outdated factual information.
- Missing disclosures.
- Broken images.
- Formatting problems.
- Privacy or copyright concerns.

### 7.2 Original Literary Material

Where a source error is identified, check the original work and the specific edition or version used.

Avoid silently replacing one version with another when the difference is meaningful.

### 7.3 Translation Maintenance

Where a translation is corrected:

- Identify the affected passage.
- Compare the revised translation with the original.
- Record significant changes.
- Correct associated notes where necessary.
- Preserve appropriate attribution.
- Consider whether the correction affects the article's interpretation.

### 7.4 Scientific Content

Scientific explanations may require revision when:

- An important cited source is corrected or retracted.
- A technical claim is shown to be inaccurate.
- A mathematical formulation is found to contain an error.
- An important limitation was omitted.
- New evidence materially changes the discussion.

Do not change a scientific conclusion merely because a newer publication exists. Evaluate whether the new evidence actually affects the article.

### 7.5 Historical and Cultural Content

Revisit significant claims when better archival evidence, attribution information, or specialist assessment becomes available.

### 7.6 References

Check important external references for:

- Availability.
- Correct destination.
- Changed publication status.
- Broken DOI or URL.
- Updated editions.
- Relevant correction or retraction notices.

A broken external link does not automatically invalidate the underlying claim. Find a reliable replacement source where possible.

## 8. Weekly Collection Maintenance

The publication's intended format brings together three individual article pages in one weekly collection.

Maintain the relationship between these pages carefully.

### 8.1 Shared Identifiers

Verify that the articles and weekly collection use consistent `week_id` values.

### 8.2 Article Ordering

Confirm that the `entry_number` values correspond to the intended editorial order.

### 8.3 Collection Links

Check that each weekly collection links to the correct individual article.

### 8.4 Removed or Updated Articles

When an article is corrected, moved, or withdrawn, consider whether the weekly collection must also be updated.

### 8.5 Historical Collections

Do not change old weekly collections merely to make them resemble a newer design unless the change is necessary and editorially appropriate.

### 8.6 Edition Completeness

Check that the weekly collection does not accidentally:

- Include another week's article.
- Omit an intended article.
- Duplicate an entry.
- Display an incorrect article title.
- Link to an unpublished draft.
- Present an incorrect publication date.

### 8.7 Permanent Article Pages

Preserve stable individual article URLs wherever possible.

## 9. Jekyll Configuration Maintenance

The Jekyll configuration controls important aspects of the generated website.

Changes should be made deliberately.

### 9.1 Configuration File

Review `_config.yml` when:

- Collections are introduced or modified.
- Permalink structures change.
- Site identity changes.
- Language configuration changes.
- Default layouts change.
- Build dependencies change.
- Deployment configuration changes.

### 9.2 Project-Site URL

The current project-site configuration is based on:

```yaml
url: "https://pravinkumar-ghodake.github.io"
baseurl: "/verse-variable"
```

The expected public website is:

`https://pravinkumar-ghodake.github.io/verse-variable/`

Do not change the `baseurl` to an empty string unless the hosting arrangement changes deliberately.

### 9.3 Collections

Maintain consistency between the collection configuration and actual directories.

Current collections include:

- `_entries/`
- `_weeks/`

### 9.4 Collection Permalinks

A permalink change may affect existing article or collection URLs.

Before modifying it:

1. Identify the pages affected.
2. Determine whether old URLs are already public.
3. Consider redirect requirements.
4. Update internal links.
5. Check the generated sitemap.
6. Inspect live pages after deployment.

### 9.5 Data Files

Changes to `_data/languages.yml` or `_data/site.yml` may affect multiple templates.

Test the homepage, language directory, article layouts, navigation, and footer after substantial modifications.

### 9.6 Special Directories

Do not casually rename Jekyll special directories.

Jekyll uses specific conventions for layouts, includes, data, and collections.

## 10. Layout and Include Maintenance

Reusable components can affect the entire website.

### 10.1 Layouts

Maintain and test:

- `_layouts/default.html`
- `_layouts/home.html`
- `_layouts/page.html`
- `_layouts/entry.html`
- `_layouts/week.html`

### 10.2 Includes

Maintain and test:

- `_includes/head.html`
- `_includes/header.html`
- `_includes/footer.html`
- `_includes/metadata.html`
- `_includes/entry-card.html`
- `_includes/wavefield.html`

### 10.3 Shared Component Changes

After modifying a shared component, inspect every relevant page type.

Do not assume that checking the homepage is sufficient.

### 10.4 Duplication

Where the same component is maintained in multiple locations, consider whether a reusable include should control it.

Avoid introducing competing versions of shared functionality.

### 10.5 Optional Fields

Ensure templates handle missing optional metadata without displaying unwanted placeholders, broken links, or empty sections.

### 10.6 Layout Compatibility

When adding new metadata fields, verify that the actual layouts consume and display them appropriately.

A policy document or template describing a field does not automatically implement that field in the website.

## 11. CSS and Visual Maintenance

The stylesheet defines the publication's design system.

### 11.1 Main Stylesheet

Maintain:

`assets/css/site.css`

### 11.2 Design Consistency

Review:

- Colour variables.
- Typography.
- Spacing.
- Content widths.
- Border styles.
- Buttons.
- Cards.
- Navigation.
- Article formatting.
- Footer presentation.

### 11.3 Light and Dark Themes

Where both themes are implemented, examine contrast and visibility in each.

### 11.4 Responsive Behaviour

Check common desktop, tablet, and mobile layouts.

### 11.5 Multilingual Typography

Pay particular attention to:

- Urdu Nastaliq presentation.
- Devanagari text.
- Kannada script.
- Tamil script.
- Malayalam script.
- Telugu script.
- Mixed-script passages.

### 11.6 Visual Effects

Changes to wavefield animation, background effects, or reveal animations should not interfere with readability, accessibility, or performance.

### 11.7 Avoid Unnecessary Redesign

Do not introduce major visual changes without considering their effect on existing pages.

A design improvement should be tested across the site rather than only on the page where the change was developed.

## 12. JavaScript Maintenance

Maintain:

`assets/js/site.js`

The current project design includes functionality associated with:

- Canvas wavefield animation.
- Theme selection.
- Mobile navigation.
- Reading progress.
- Reveal effects.
- Copy-link controls.
- Back-to-top functionality.

The actual implementation should be checked before assuming any particular feature is functioning correctly.

### 12.1 Browser Compatibility

Test relevant interactions after substantial changes.

### 12.2 Performance

Avoid excessive animation or unnecessary event handling.

### 12.3 Error Handling

Check for:

- Missing element references.
- Unhandled exceptions.
- Failed clipboard requests.
- Unnecessary duplicate listeners.
- Broken DOM assumptions.

### 12.4 Graceful Degradation

Essential article content should remain available if JavaScript fails or is disabled.

### 12.5 Preference Handling

Theme and motion preferences should be respected where implemented.

### 12.6 Interactive Controls

Every visible control should have a meaningful and functioning purpose.

Remove or correct controls that no longer perform their advertised function.

## 13. Asset Maintenance

Maintain the contents of `assets/` carefully.

### 13.1 Images

Review:

- Image availability.
- File size.
- Dimensions.
- Format.
- Alternative text.
- Captions.
- Attribution.
- Rights status.

### 13.2 Fonts

Check:

- Font availability.
- Licence terms.
- Script coverage.
- Fallback behaviour.
- Loading performance.

### 13.3 Icons

Check their source, licence, and display consistency.

### 13.4 Unused Assets

Identify obsolete or duplicate assets before removing them.

Verify that no existing layout or article still references an asset.

### 13.5 Filenames

Use descriptive filenames and consistent case.

### 13.6 External Assets

For externally hosted assets, examine availability, privacy, permissions, and alternative arrangements.

### 13.7 Social Preview Artwork

Ensure that the social-preview image remains available, correctly referenced, and consistent with the publication identity.

## 14. Dependency Maintenance

External dependencies can introduce compatibility, security, or availability problems.

### 14.1 Identify Dependencies

Relevant dependencies may include:

- Ruby.
- Jekyll.
- Ruby gems.
- Bundler.
- GitHub Actions.
- JavaScript libraries.
- CSS libraries.
- Font services.
- Other third-party packages.

### 14.2 Dependency Inventory

Maintain an appropriate record of important dependencies and their roles.

Where a `Gemfile` and `Gemfile.lock` are used, keep them consistent with the intended GitHub Pages build environment.

### 14.3 Security Updates

Pay attention to credible security advisories affecting the website's dependencies.

Prioritise relevant vulnerabilities according to their actual exposure and impact.

### 14.4 Compatibility Updates

Before adopting a dependency update:

- Check the release information.
- Review breaking changes.
- Check compatibility.
- Test the local build.
- Test GitHub Actions.
- Inspect the deployed website.

### 14.5 Avoid Unnecessary Dependencies

Do not add libraries merely because they are available.

Every dependency introduces potential maintenance, performance, compatibility, and security responsibilities.

### 14.6 Remove Obsolete Dependencies

Before removing a dependency, check whether templates, scripts, stylesheets, or workflows still use it.

### 14.7 Version Management

Use deliberate version management rather than arbitrary untested upgrades.

### 14.8 Automated Update Systems

Automated dependency-update systems may be introduced where useful.

Do not assume that an automated pull request has been reviewed or is safe to merge without testing.

## 15. GitHub Actions and Deployment Maintenance

The deployment workflow should remain functional and appropriately restricted.

### 15.1 Workflow Review

Maintain:

`.github/workflows/deploy.yml`

### 15.2 Deployment Triggers

Check that the expected branch and workflow triggers are correct.

### 15.3 Permissions

Keep workflow permissions limited to the operations required.

### 15.4 Action Versions

Periodically review the official GitHub Actions used by the project.

Check release notes and compatibility before changing action versions.

### 15.5 Build Verification

Check whether the workflow:

- Checks out the repository.
- Configures Pages.
- Builds Jekyll.
- Uploads the artifact.
- Deploys the correct artifact.

### 15.6 Deployment Failures

Investigate actual build and deployment logs.

Do not repeatedly rerun an unchanged failing workflow without identifying the cause.

### 15.7 Publishing Source

Confirm that the GitHub Pages publishing source remains consistent with the documented deployment method.

### 15.8 Live Verification

A successful workflow should be followed by inspection of the deployed website.

## 16. Broken-Link and External Reference Maintenance

Links can become unavailable independently of the publication.

### 16.1 Internal Links

Check:

- Navigation links.
- Article URLs.
- Weekly collection links.
- Language pages.
- Archive links.
- Image references.
- Internal section anchors.

### 16.2 External Links

Review important references for:

- Availability.
- Redirects.
- Changed URLs.
- Missing documents.
- Updated editions.
- Changed publisher pages.
- Obsolete resources.

### 16.3 DOI Links

Where DOI references are included, verify that they resolve to the intended publication.

### 16.4 Replacement Sources

When replacing a broken reference, identify a source that actually supports the relevant claim.

Do not substitute an unrelated article merely because its link works.

### 16.5 External Service Failures

A temporary failure of an external service does not always require removing a reference.

Consider whether another official source or stable identifier exists.

### 16.6 Automated Link Checking

A link-checking tool may be incorporated into routine maintenance.

Review its results manually where external sites block automated requests or create false positives.

## 17. Sitemap, RSS, and Machine-Readable Resources

The publication uses or intends to use several resources to support discovery and access.

### 17.1 Sitemap

Maintain:

`sitemap.xml`

Check that:

- Generated URLs use the correct production origin.
- Project-site paths are correct.
- Published pages are included appropriately.
- Excluded pages remain excluded.
- No unintended development URLs appear.

### 17.2 RSS Feed

Maintain:

`feed.xml`

Check:

- XML validity.
- Article links.
- Dates.
- Titles.
- Descriptions.
- Content representation.
- Publication identity.

### 17.3 Robots

Maintain:

`robots.txt`

Remember that a project-site robots file is served under the project path and does not control the domain-root robots policy.

If origin-wide crawler instructions are needed, manage them through the appropriate root-level hosting arrangement.

### 17.4 LLM Resources

Maintain:

- `llms.txt`
- `llms-full.txt`

Check that descriptions, supported languages, architecture, and publication links reflect the actual website.

Do not leave proposed or unimplemented features described as completed functionality.

### 17.5 Structured Data

Where JSON-LD is implemented, ensure that its claims agree with the visible article.

Do not claim authorship, institutional affiliation, review status, or publication facts that are not supported.

## 18. Accessibility Maintenance

Accessibility requires continuing attention.

### 18.1 Keyboard Access

Check navigation, controls, focus order, and visible focus indicators.

### 18.2 Screen Readers

Inspect headings, landmarks, link names, alternative text, and language identification.

### 18.3 Contrast

Review text and interface contrast after significant colour changes.

### 18.4 Multilingual Accessibility

Check Urdu directionality and the display of Indic scripts.

### 18.5 Reduced Motion

Preserve support for reduced-motion preferences where implemented.

### 18.6 Images and Media

Review alternative text, captions, and transcripts.

### 18.7 Layout Changes

After changes to shared layouts or navigation, repeat relevant keyboard and responsive checks.

### 18.8 Accessibility Feedback

Treat accessibility concerns raised by readers as meaningful maintenance requests.

Refer to `ACCESSIBILITY.md`.

## 19. Privacy and Data Handling

Maintenance must preserve the distinction between public editorial content and private records.

### 19.1 Public Repository Review

Before committing changes, check for accidental inclusion of:

- Private emails.
- Contact information.
- Personal documents.
- Consent forms.
- Interview transcripts.
- Confidential reviewer comments.
- Unpublished manuscripts.
- Restricted research data.
- Credentials and tokens.

### 19.2 Build Output

Check that sensitive files have not entered the generated `_site/` directory.

### 19.3 Third-Party Services

Review privacy implications when changing fonts, embeds, analytics, hosting, transcription services, or other external dependencies.

### 19.4 Data Minimisation

Do not retain personal information without a legitimate editorial or operational purpose.

### 19.5 Privacy Concerns

Handle privacy concerns under `PRIVACY.md`, `RESEARCH_ETHICS.md`, and the relevant correction or takedown procedures.

## 20. Security Maintenance

Security is an ongoing responsibility.

### 20.1 Repository Access

Periodically review access to the repository and related accounts.

Remove unnecessary access where appropriate.

### 20.2 Credentials

Never store passwords, API keys, private tokens, or other secrets in public source files.

### 20.3 GitHub Actions

Review action permissions and workflow changes.

Use trusted actions and inspect relevant updates.

### 20.4 Software Vulnerabilities

Monitor credible security advisories affecting relevant dependencies.

Prioritise vulnerabilities according to practical exposure and severity.

### 20.5 Incident Response

If a security incident is suspected:

1. Identify the affected component.
2. Determine whether sensitive information is exposed.
3. Take proportionate containment measures.
4. Preserve relevant evidence.
5. Revoke or rotate compromised credentials where appropriate.
6. Correct the underlying problem.
7. Verify the correction.
8. Record the incident through an appropriate secure process.

### 20.6 Historical Exposure

Deleting a file from the current repository version does not necessarily remove it from Git history, forks, caches, or previously downloaded copies.

A response to historical exposure may require additional steps.

### 20.7 Security Reporting

Use `SECURITY.md` as the project's disclosure reference.

Do not publish sensitive vulnerability details before a responsible assessment has taken place.

## 21. Backup and Recovery Maintenance

The archive contains original writing, article metadata, source references, website components, and configuration.

Its preservation requires an appropriate backup strategy.

### 21.1 Repository History

Git history provides useful version tracking but should not automatically be treated as a complete independent backup.

### 21.2 Additional Copies

Consider maintaining appropriate copies of:

- Source files.
- Configuration.
- Assets.
- Article collections.
- Weekly collection records.
- Dependency manifests.
- Deployment configuration.
- Important editorial records.

### 21.3 Private Editorial Material

Maintain separate secure arrangements for confidential records.

Do not place sensitive records in public backup locations.

### 21.4 Backup Verification

A backup should be tested periodically through an appropriate recovery procedure.

### 21.5 Recovery

The ability to restore a working repository or website should be considered before major infrastructure changes.

Further details are provided in `BACKUP_AND_RECOVERY.md`.

## 22. Performance Maintenance

The website should remain reasonably efficient as the archive expands.

### 22.1 Image Size

Review image dimensions, formats, and file sizes.

### 22.2 CSS and JavaScript

Avoid unnecessary code duplication and excessive client-side execution.

### 22.3 External Fonts

Review font-loading behaviour and fallback typography.

### 22.4 Animation

Ensure that wavefield and other visual effects do not impose unnecessary processing demands.

### 22.5 Archive Growth

Review whether homepage and archive generation remain manageable as entries accumulate.

### 22.6 Large Files

Avoid storing unnecessarily large binary resources in the repository.

### 22.7 Measurement

Use actual browser or build measurements when evaluating performance.

Do not invent performance improvements or claim a score without testing.

## 23. Repository Housekeeping

Maintain a clean and understandable repository.

### 23.1 Generated Files

Do not casually commit generated `_site/` output if the project is using the standard GitHub Actions artifact deployment process.

Follow the actual repository configuration.

### 23.2 Temporary Files

Review and remove unnecessary temporary files.

### 23.3 Duplicate Assets

Identify duplicate images, scripts, stylesheets, and documents before cleanup.

### 23.4 File Naming

Maintain descriptive names and consistent case.

### 23.5 Documentation

Update technical documentation whenever the actual implementation changes.

### 23.6 Changelog

Record meaningful changes in `CHANGELOG.md`.

Do not create an entry for a change that has not actually been made.

### 23.7 Roadmap

Update `ROADMAP.md` when development priorities materially change.

Do not describe proposed functionality as completed.

## 24. Content and Technical Maintenance Records

For significant maintenance activities, maintain a record.

### 24.1 Maintenance Record Template

**Maintenance ID:** [Unique identifier]

**Date:** [Date]

**Maintenance category:** [Routine / Corrective / Adaptive / Improvement / Emergency]

**Affected component:** [Component]

**Description:** [What was checked or changed]

**Reason:** [Reason for maintenance]

**Files affected:** [Paths]

**Testing performed:** [Details]

**Result:** [Result]

**Outstanding issues:** [Details]

**Responsible person:** [Name]

**Related commit:** [Commit hash]

**Related issue:** [Reference, if applicable]

### 24.2 Maintenance Summary

| Maintenance ID | Date | Component | Activity | Result | Commit |
|---|---|---|---|---|---|
| [ID] | [Date] | [Component] | [Description] | [Result] | [Hash] |
| [ID] | [Date] | [Component] | [Description] | [Result] | [Hash] |

Do not publish private maintenance records or sensitive incident details in the public repository.

### 24.3 Significant Changes

Meaningful maintenance work should be reflected in the relevant Git history and, where appropriate, the changelog.

## 25. Maintenance Priorities

When several issues exist simultaneously, use a risk-based approach.

| Priority | Description | Example |
|---|---|---|
| Critical | Immediate risk to security, privacy, rights, or core availability | Publicly exposed credentials or sensitive participant records |
| High | Major functional or content-integrity failure | All article pages fail to build |
| Medium | Important degradation requiring correction | Weekly collection links are incorrect |
| Low | Limited improvement or cosmetic issue | Minor spacing inconsistency |

### 25.1 Prioritisation Factors

Consider:

- Severity.
- Number of affected pages.
- Impact on readers.
- Privacy implications.
- Legal or ethical risks.
- Availability of a workaround.
- Likelihood of recurrence.
- Dependencies on other changes.

### 25.2 Emergency Issues

Critical privacy, security, or rights concerns should not wait for the next routine review.

## 26. Maintenance Completion Checklist

Before considering significant maintenance work complete:

### Content

- [ ] Affected content has been reviewed.
- [ ] Relevant attribution remains accurate.
- [ ] References have been checked.
- [ ] Translations remain correct.
- [ ] Weekly collection relationships remain valid.
- [ ] Privacy and rights concerns have been considered.

### Technical Infrastructure

- [ ] Relevant configuration has been checked.
- [ ] Layouts and includes are functioning.
- [ ] CSS and JavaScript work as intended.
- [ ] Assets are accessible.
- [ ] Internal links remain valid.
- [ ] Jekyll build succeeds.
- [ ] GitHub Actions completes successfully where applicable.
- [ ] Project-site URL and `baseurl` remain correct.

### Accessibility and Performance

- [ ] Multilingual display has been checked.
- [ ] Responsive layout has been inspected.
- [ ] Keyboard behaviour has been considered.
- [ ] Reduced-motion behaviour remains appropriate.
- [ ] Performance regressions have been considered.

### Security and Recovery

- [ ] No sensitive information has been exposed.
- [ ] Workflow permissions remain appropriate.
- [ ] Dependencies have been reviewed where relevant.
- [ ] Backup arrangements have been considered where relevant.

### Documentation and Records

- [ ] Relevant documentation is updated.
- [ ] Significant changes are recorded.
- [ ] Testing outcomes are recorded.
- [ ] Remaining issues are documented.

## 27. Maintenance Boundaries

The following distinctions should remain clear.

### 27.1 Maintenance Is Not Automatic Monitoring

A documented maintenance schedule does not mean the website is continuously monitored.

### 27.2 A Backup Is Not a Recovery Guarantee

The existence of a backup does not establish that recovery will succeed unless restoration has been tested.

### 27.3 Dependency Updates Are Not Automatically Safe

An available update should not be installed blindly.

### 27.4 A Successful Build Is Not Complete Validation

A successful Jekyll build does not prove that every page, translation, citation, image, or interactive control is correct.

### 27.5 Accessibility Is Ongoing

A previous accessibility assessment does not guarantee that later changes preserve accessibility.

### 27.6 External Links Are Outside Direct Editorial Control

Third-party websites may change or disappear independently.

The publication should maintain reasonable checks but should not imply control over those external services.

## 28. Recommended Long-Term Maintenance Strategy

As the publication grows, maintenance should evolve in stages.

### Stage One — Establish Reliability

Focus on:

- Successful Jekyll builds.
- Consistent metadata.
- Reliable collection generation.
- Correct URLs.
- Functional navigation.
- Basic security and privacy checks.

### Stage Two — Improve Automation

Introduce appropriate automated checks for:

- Broken links.
- Required metadata.
- YAML validity.
- HTML and XML.
- Accessibility.
- Dependency advisories.

### Stage Three — Improve Monitoring and Recovery

Where justified, introduce:

- Deployment notifications.
- Scheduled link checks.
- Backup verification.
- Documented incident procedures.
- Tested recovery arrangements.

### Stage Four — Support Archive Growth

As the number of articles increases, evaluate:

- Search functionality.
- Archive navigation.
- Language filters.
- Subject-based discovery.
- Related articles.
- Content indexing.
- Performance.

### Stage Five — Periodic Policy Review

Review documentation to ensure that it reflects the actual website rather than an outdated proposed architecture.

Not every stage requires a separate software platform or external service.

## 29. Relationship with Other Publication Documentation

This policy should be read alongside:

- `README.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `EDITORIAL_POLICY.md`
- `EDITORIAL_WORKFLOW.md`
- `CONTENT_LIFECYCLE.md`
- `WEEKLY_PUBLICATION_WORKFLOW.md`
- `PUBLICATION_CHECKLIST.md`
- `EDITORIAL_DECISION_RECORD.md`
- `GITHUB_PAGES_DEPLOYMENT.md`
- `TESTING_AND_QUALITY_ASSURANCE.md`
- `BACKUP_AND_RECOVERY.md`
- `ACCESSIBILITY.md`
- `PRIVACY.md`
- `SECURITY.md`
- `SEO_AND_DISCOVERY.md`
- `SCHEMA_AND_STRUCTURED_DATA.md`
- `COPYRIGHT.md`
- `ASSET_CREDITS.md`
- `RIGHTS_AND_PERMISSIONS_REGISTER.md`
- `CORRECTIONS_POLICY.md`
- `TAKEDOWN_POLICY.md`
- `DISCLAIMER.md`

These documents establish the standards and procedures governing the publication's content, technical infrastructure, safety, and long-term preservation.

## 30. Continuing Commitment

A literary archive should not become less reliable as it becomes larger.

Every newly published article adds another responsibility: to preserve its meaning, attribution, sources, metadata, and availability.

Every technical improvement creates another responsibility: to ensure that existing pages continue to function correctly.

Verse & Variable therefore treats maintenance as an integral part of publication rather than an activity that begins only when something breaks.

The objective is to maintain a growing archive that remains intellectually responsible, technically dependable, accessible, and respectful of the traditions and knowledge it presents.

**Preserve what matters. Maintain what serves. Improve what readers experience.**

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
