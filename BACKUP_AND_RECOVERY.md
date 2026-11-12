
# Backup and Recovery Policy

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document establishes the backup, preservation, and recovery principles for the Verse & Variable publication and its associated technical and editorial infrastructure.

The publication is intended to develop into a growing multilingual archive containing literary works, translations, original commentary, scientific explanations, research references, website assets, and supporting editorial documentation.

The material accumulated through this work represents an intellectual and technical record that should be protected against avoidable loss.

This policy establishes procedures for:

- Preserving the source repository.
- Protecting published articles and weekly collections.
- Maintaining independent copies of important files.
- Protecting images, fonts, scripts, and other assets.
- Preserving Jekyll and deployment configuration.
- Maintaining confidential editorial records securely.
- Recovering from accidental deletion.
- Responding to repository corruption.
- Restoring the website after deployment failure.
- Addressing account compromise.
- Testing backup integrity.
- Verifying restoration procedures.
- Maintaining an appropriate backup history.

The objective is not merely to retain copies of files. It is to ensure that the project can be reconstructed and returned to an appropriate operating condition when necessary.

This document defines the intended recovery framework. It does not claim that automated backups, off-site storage, or restoration testing have already been implemented.

## 2. Fundamental Backup Principles

### 2.1 Independent Copies

Important project material should exist in more than one appropriately protected location.

A backup stored only inside the original repository does not provide sufficient independence from repository-level deletion, access compromise, or other incidents affecting that repository.

### 2.2 Recoverability

A backup is useful only when the contents can be retrieved and restored.

Where practical, verify that important backup copies are readable and complete.

### 2.3 Integrity

Backups should preserve the original content without unnoticed modification or corruption.

Use appropriate integrity checks for important backup archives.

### 2.4 Confidentiality

Private editorial records should not be included in public backups or publicly accessible repository directories.

### 2.5 Proportionality

The backup method should reflect the importance, sensitivity, and size of the material.

Public website files, confidential interview records, and account credentials do not require identical backup arrangements.

### 2.6 Documentation

Record important backup and recovery activities.

A recovery procedure should be understandable even when the person performing it did not originally create the website.

### 2.7 Regular Testing

Do not assume that a backup is recoverable merely because it was successfully created.

Periodically perform restoration tests.

### 2.8 Preservation of History

Where possible, preserve meaningful version history and editorial records rather than retaining only the latest version of every file.

## 3. Scope of Backup

The backup process should consider the following categories.

### 3.1 Source Repository

The Git repository is the primary source of the website's development history.

Important contents include:

- Jekyll configuration.
- Layouts.
- Includes.
- Data files.
- Individual article documents.
- Weekly collection documents.
- Markdown pages.
- CSS.
- JavaScript.
- Images.
- Fonts and other assets.
- Sitemap and RSS templates.
- Machine-readable publication resources.
- GitHub Actions workflow files.
- Public editorial documentation.
- Licensing and credits information.

### 3.2 Published Content

Preserve the original source files for:

- Literary explorations.
- Poetry and shayari commentary.
- Original-language texts.
- Translations and transliterations.
- Historical and cultural articles.
- Philosophical discussions.
- Scientific and technical explanations.
- Weekly collections.
- Contributor submissions that have been accepted for publication.

### 3.3 Technical Configuration

Preserve the configuration required to rebuild the website.

This may include:

- `_config.yml`.
- `Gemfile`.
- `Gemfile.lock`, where used.
- `.github/workflows/`.
- Relevant environment configuration.
- Custom build scripts.
- Dependency manifests.
- Repository configuration records.

### 3.4 Website Assets

Preserve:

- Original images.
- Illustrations.
- Social-preview artwork.
- Fonts where redistribution or backup is permitted.
- CSS.
- JavaScript.
- Icons.
- Other locally hosted resources.

Maintain the relevant attribution and licence information.

### 3.5 Confidential Editorial Records

Confidential records may include:

- Private reviewer correspondence.
- Completed editorial decision records.
- Interview consent forms.
- Private interview transcripts.
- Original interview recordings.
- Permission correspondence.
- Contributor contact details.
- Unpublished manuscripts.
- Restricted research records.
- Sensitive source documentation.

These records require separate, access-controlled backup arrangements.

Do not place them in a public GitHub repository.

### 3.6 Repository and Account Administration

Where practical, preserve appropriate administrative information about:

- Repository ownership.
- Default branch.
- GitHub Pages configuration.
- GitHub Actions deployment settings.
- Required permissions.
- Domain configuration, if introduced.
- Important repository integrations.
- Dependency and deployment arrangements.

Do not store passwords, tokens, private keys, or other credentials in an ordinary backup document.

### 3.7 Generated Website Output

The `_site/` directory is generated by Jekyll.

The source repository should remain the primary recovery source wherever the website can be rebuilt from its source files.

A copy of generated output may be retained as a deployment snapshot where it provides useful evidence of a particular published version.

However, generated output should not be treated as a substitute for the source repository.

## 4. Data Classification

Different project materials require different backup arrangements.

| Classification | Examples | Recommended handling |
|---|---|---|
| Public | Published articles and public documentation | Independent repository and backup copies |
| Internal | Maintenance notes and unpublished technical plans | Restricted storage where appropriate |
| Confidential | Private reviewer comments and permission correspondence | Encrypted, access-controlled backup |
| Highly sensitive | Personal data, consent records, sensitive interviews | Strongly restricted encrypted storage |
| Credentials | Passwords, access tokens, private keys | Dedicated secure secrets management, not ordinary file backup |

These classifications are internal handling categories rather than formal legal classifications.

### 4.1 Public Material

Publicly available files should still be backed up.

Public availability does not protect against deletion, corruption, or changes to the repository.

### 4.2 Internal Material

Internal records should be retained only where they serve a legitimate editorial or operational purpose.

### 4.3 Confidential Material

Confidential records should be separated from public repository backups.

### 4.4 Highly Sensitive Material

Use additional access controls and encryption.

Avoid unnecessary duplication of highly sensitive records.

### 4.5 Credentials

Do not include credentials in ordinary project archives.

If a credential is exposed, treat the incident as a security matter and rotate or revoke the affected credential.

## 5. Recommended Backup Architecture

A practical approach is to maintain three distinct forms of protection.

### 5.1 Primary Repository

The GitHub repository contains the active project source and version history.

Repository:

`https://github.com/pravinkumar-ghodake/verse-variable`

### 5.2 Independent Repository Backup

Maintain a separate copy of the repository outside the active GitHub repository.

Possible locations include:

- A trusted personal computer.
- An external storage device.
- An independent private cloud-storage account.
- Another secure storage service.

The backup location should not depend entirely on the availability of the original repository or the same account.

### 5.3 Confidential Records Backup

Maintain a separate encrypted backup for private editorial and contributor records.

Access should be restricted to individuals with a legitimate need.

### 5.4 Illustrative Architecture

<escape>
Active GitHub Repository
          |
          |
          v
Independent Repository Backup
          |
          +--------------------+
          |                    |
          v                    v
External Storage         Private Backup Storage
                               |
                               v
                       Confidential Records
</escape>

The diagram represents a proposed arrangement rather than an assertion that these copies already exist.

## 6. Independent Backup Strategy

A useful general principle is the 3-2-1 backup approach:

- Maintain three copies of important material.
- Use at least two different storage types or systems.
- Keep at least one copy independent of the primary location.

This is a recommended preservation strategy, not a guarantee against every form of data loss.

### 6.1 First Copy

The actively maintained project repository.

### 6.2 Second Copy

An independent local or external backup.

### 6.3 Third Copy

A separately stored copy, preferably in another physical or administrative location.

### 6.4 Independence

Avoid storing every backup:

- In the same repository.
- Under the same cloud account.
- On the same physical device.
- In the same folder.
- Behind the same compromised credentials.

### 6.5 Confidential Material

Apply the same principle carefully to private records, using encrypted storage and appropriately controlled access.

## 7. What Should Be Backed Up?

The following inventory provides a practical starting point.

### 7.1 Essential Source Files

- [ ] `_config.yml`.
- [ ] `_data/`.
- [ ] `_includes/`.
- [ ] `_layouts/`.
- [ ] `_entries/`.
- [ ] `_weeks/`.
- [ ] `assets/`.
- [ ] `index.html`.
- [ ] Public Markdown and HTML pages.
- [ ] Sitemap and feed source files.
- [ ] `robots.txt`.
- [ ] `llms.txt`.
- [ ] `llms-full.txt`.

### 7.2 Project Documentation

- [ ] `README.md`.
- [ ] `LICENSE`.
- [ ] `COPYRIGHT.md`.
- [ ] Editorial policies.
- [ ] Research policies.
- [ ] Technical documentation.
- [ ] Maintenance records intended for public storage.
- [ ] Changelog.
- [ ] Roadmap.

### 7.3 Build and Deployment Files

- [ ] `.github/workflows/`.
- [ ] `Gemfile`, where used.
- [ ] `Gemfile.lock`, where used.
- [ ] Required build scripts.
- [ ] Dependency configuration.
- [ ] Relevant configuration documentation.

### 7.4 Additional Asset Information

- [ ] Original asset files.
- [ ] Asset credits.
- [ ] Licence information.
- [ ] Rights and permissions register.
- [ ] Source references.
- [ ] Image descriptions and captions.
- [ ] Relevant version information.

### 7.5 Private Editorial Records

- [ ] Confidential editorial decision records.
- [ ] Reviewer correspondence.
- [ ] Interview consent documentation.
- [ ] Permission correspondence.
- [ ] Private contributor submissions.
- [ ] Confidential research material, where retention is justified.

Maintain these separately from the public repository.

### 7.6 Repository Metadata

Where available and relevant, preserve:

- Repository settings information.
- Branch configuration.
- Deployment configuration.
- Relevant issue or release records.
- Important project decisions.
- Access arrangements.

A standard Git clone or bundle does not preserve every GitHub-hosted repository setting or service record.

## 8. Git Version Control and Backup

Git provides useful version history and recovery capabilities.

However, it should not be treated as the only backup mechanism.

### 8.1 Committed Changes

Committed source files can generally be recovered from the repository's Git history as long as the relevant commits remain available.

### 8.2 Uncommitted Changes

Uncommitted changes may not be included in an ordinary repository backup.

Before creating a backup:

- Review modified files.
- Review untracked files.
- Save important work.
- Commit appropriate completed changes.
- Securely preserve legitimate unpublished work where necessary.

Do not commit confidential material simply to ensure it appears in Git history.

### 8.3 Git History

Git history can preserve:

- Previous versions.
- Commit messages.
- Branches.
- Tags.
- Author information recorded in commits.

However, it does not automatically contain all external repository settings, hosted records, or confidential files stored elsewhere.

### 8.4 Deleted Files

A deleted file may remain recoverable from earlier commits.

Recovery depends on whether its relevant history remains available and has not been removed or made inaccessible.

### 8.5 Repository Integrity

Do not rewrite or delete repository history casually.

History modification can affect collaborators, branches, and available recovery points.

## 9. Creating a Git Repository Backup

An independent Git-based backup can be created using standard Git operations.

The following commands are examples.

### 9.1 Mirror Clone

Create a mirror copy of the repository:

```bash
git clone --mirror \
  https://github.com/pravinkumar-ghodake/verse-variable.git \
  verse-variable.git
```

A mirror clone is useful for preserving repository references and history.

### 9.2 Updating the Mirror

After the mirror has been created, update it periodically:

```bash
git -C verse-variable.git remote update --prune
```

This updates references from the remote repository.

### 9.3 Creating a Git Bundle

Another option is to create a Git bundle:

```bash
git bundle create verse-variable-backup.bundle --all
```

A Git bundle can preserve reachable Git history and references.

### 9.4 Verifying a Bundle

Check the bundle:

```bash
git bundle verify verse-variable-backup.bundle
```

### 9.5 Restoring from a Bundle

A repository may be recreated from a valid bundle:

```bash
git clone verse-variable-backup.bundle verse-variable-restored
```

Inspect the restored repository before using it.

### 9.6 Important Limitations

A Git mirror or bundle does not automatically preserve:

- Uncommitted working-tree changes.
- Untracked local files.
- GitHub repository settings.
- GitHub Actions secrets.
- Deployment environment secrets.
- Hosted service configuration.
- Confidential records stored outside the repository.
- Git LFS object contents unless separately preserved through an appropriate process.

A repository backup should therefore be supplemented with the other required project records and assets.

### 9.7 Git LFS

If Git Large File Storage is introduced, preserve the actual LFS objects as well as the Git references.

Do not assume that a Git repository mirror contains all large-file content independently.

## 10. Backup of Website Assets and Original Material

Website assets may be difficult to reconstruct if their original versions are lost.

### 10.1 Original Images

Preserve original project-created images where appropriate.

### 10.2 Edited Images

Where significant transformations have been performed, retain the original and the final edited version if the underlying rights and storage arrangements permit.

### 10.3 Fonts

Record the original font source, licence, version, and permitted distribution arrangements.

Do not redistribute a font as part of a backup if its licence does not permit that use.

A private copy for legitimate preservation should still be assessed under the applicable licence.

### 10.4 Scientific Figures

Retain original project-created figures, underlying project files where appropriate, and the information needed to regenerate them.

### 10.5 Diagrams and Artwork

Preserve editable source files where available.

A flattened image may not be sufficient to reconstruct a complex original design.

### 10.6 Audio and Video

Preserve original files only where the publication has an appropriate basis for retaining them.

Consider file size, participant consent, copyright, privacy, and access restrictions.

### 10.7 Third-Party Assets

Do not assume that backing up a third-party asset grants the right to redistribute it.

Preserve licence and permission information alongside the asset.

## 11. Backup of Confidential Editorial Records

Confidential editorial records require a separate storage and backup process.

### 11.1 Separation from the Public Repository

Never place confidential editorial records inside the public GitHub repository.

Examples include:

- Private consent forms.
- Unpublished interviews.
- Reviewer identities where confidential.
- Private editorial deliberations.
- Confidential correspondence.
- Personal contact details.
- Sensitive allegations.
- Restricted research material.

### 11.2 Encrypted Storage

Use an appropriate encryption mechanism for sensitive backups.

Encryption should protect both stored files and external backup copies where practical.

### 11.3 Access Control

Limit access to individuals with a legitimate editorial or administrative reason.

### 11.4 Encryption Keys

Protect encryption keys separately from the encrypted backup.

Do not store the only recovery key alongside the backup it is intended to unlock.

### 11.5 Retention

Retain private records only for a legitimate editorial, accountability, legal, or operational purpose.

Do not use backup preservation as a reason to retain sensitive data indefinitely.

### 11.6 Secure Deletion

When records are no longer required, assess appropriate deletion from active storage and backup copies according to the applicable retention arrangements.

### 11.7 External Services

Before using cloud-storage or backup services, review their:

- Security practices.
- Access arrangements.
- Retention terms.
- Data location.
- Encryption capabilities.
- Recovery arrangements.
- Privacy conditions.

## 12. Backup Frequency

The appropriate backup frequency depends on how often the project changes and the importance of the material.

The following is a suggested starting schedule.

| Material | Suggested backup frequency |
|---|---|
| Main source repository | After substantial changes and at least periodically |
| Published article archive | After each completed publication release |
| Website assets | Whenever modified or added |
| Jekyll and deployment configuration | After every meaningful change |
| Private editorial records | After significant authorised changes |
| Permission documentation | When received or amended |
| Recovery documentation | Whenever the recovery process changes |
| Repository administrative records | After significant configuration changes |

### 12.1 Before Major Changes

Create an independent backup before:

- Renaming important directories.
- Replacing major layouts.
- Changing the collection structure.
- Modifying the deployment architecture.
- Performing extensive repository cleanup.
- Rewriting substantial Git history.
- Changing significant URL configurations.

### 12.2 After Publication

Preserve a recoverable copy after publishing a substantial article or weekly edition.

### 12.3 After Corrections

Important article corrections and metadata changes should also be preserved through version control and appropriate backup arrangements.

### 12.4 Emergency Backups

Where a serious problem is suspected, preserve the current state before making destructive recovery attempts, unless doing so would create a more immediate security or privacy risk.

## 13. Backup Retention

Backups should be retained according to their purpose and sensitivity.

### 13.1 Versioned Backups

Retain several meaningful historical versions rather than replacing every backup with the most recent copy.

### 13.2 Suggested Retention Model

A possible arrangement for non-confidential project files is:

- Recent copies for short-term recovery.
- Periodic copies for medium-term recovery.
- Selected historical snapshots for longer-term preservation.

The exact retention periods should be determined according to storage capacity and project needs.

### 13.3 Confidential Records

Use a separate retention policy for personal and sensitive information.

Do not automatically retain every confidential document for the full lifetime of the publication.

### 13.4 Superseded Backups

Old backups may be deleted when they are no longer needed and when their removal does not undermine an appropriate recovery or retention requirement.

### 13.5 Retention Register

Where appropriate, maintain an internal record describing:

- Backup date.
- Backup type.
- Storage location.
- Retention period.
- Encryption status.
- Verification result.
- Planned disposal date.

Do not expose sensitive storage details publicly.

## 14. Backup Integrity Verification

A backup should be checked for completeness and integrity.

### 14.1 File Checks

Verify that:

- Expected directories exist.
- Required files are present.
- File sizes are plausible.
- Archive files can be opened.
- Important assets are readable.
- Git references are available.

### 14.2 Checksum Verification

Checksums can help identify accidental changes to backup files.

For example, on a system supporting `sha256sum`:

```bash
sha256sum verse-variable-backup.bundle
```

On Windows PowerShell:

```powershell
Get-FileHash .\verse-variable-backup.bundle -Algorithm SHA256
```

Keep the resulting checksum in a separate appropriate record.

A checksum provides an integrity comparison. It does not independently prove that the file is complete or recoverable.

### 14.3 Archive Verification

Open and inspect backup archives using an appropriate extraction or verification tool.

### 14.4 Git Verification

Where applicable, check the repository backup:

```bash
git bundle verify verse-variable-backup.bundle
```

### 14.5 Recovery Test

The strongest practical test is restoring the backup into a separate environment and checking whether the required files and repository history are usable.

## 15. Recovery Objectives

Recovery planning should identify how much data loss and downtime are acceptable.

Two useful concepts are:

### 15.1 Recovery Point Objective

The Recovery Point Objective, or RPO, describes how far back the restored data may be compared with the latest valid state.

For example, a project backed up once a week may lose more recent work than a project backed up after each publication.

### 15.2 Recovery Time Objective

The Recovery Time Objective, or RTO, describes the target time for restoring an affected service or project.

These targets should be established according to:

- Publication activity.
- Backup frequency.
- Availability of independent copies.
- Project complexity.
- Recovery resources.
- The severity of the incident.

Do not claim an achieved recovery time or recovery point unless it has been established through actual testing.

### 15.3 Different Recovery Targets

Different material may require different targets.

For example:

- Published articles should be recoverable from an independent source copy.
- Confidential consent records may require stricter confidentiality safeguards.
- The live website may be temporarily unavailable while the repository is being restored.
- Credentials may need to be replaced rather than recovered.

## 16. General Recovery Procedure

When data loss or serious technical failure occurs, follow a controlled process.

### Step 1 — Identify the Incident

Determine:

- What has happened.
- Which files or services are affected.
- Whether the problem is ongoing.
- Whether any sensitive information is exposed.
- Whether the active repository remains trustworthy.

### Step 2 — Contain the Problem

Where appropriate:

- Stop destructive operations.
- Avoid additional commits that may overwrite recoverable work.
- Restrict access to affected private records.
- Suspend a deployment if necessary.
- Revoke compromised credentials where applicable.

### Step 3 — Preserve Available Evidence

Record the incident details.

Preserve the affected state where doing so is safe and useful.

Do not overwrite the only available copy of a damaged or incomplete repository before assessing it.

### Step 4 — Identify a Recovery Source

Choose the most suitable valid recovery source:

- Git history.
- Independent Git mirror.
- Verified Git bundle.
- Local backup archive.
- Independent asset backup.
- Secure private-record backup.

### Step 5 — Check Backup Integrity

Verify that the selected backup is readable and sufficiently complete.

### Step 6 — Restore into a Separate Environment

Do not immediately overwrite the active repository.

Restore into a separate directory or environment first.

### Step 7 — Verify Restored Material

Check:

- Repository history.
- Source files.
- Collections.
- Configuration.
- Assets.
- Dependencies.
- Confidentiality arrangements.

### Step 8 — Rebuild the Website

Where the source configuration is available, rebuild the site using the documented Jekyll process.

### Step 9 — Test the Restoration

Use the relevant checks in `TESTING_AND_QUALITY_ASSURANCE.md`.

### Step 10 — Restore Production

Once the restored project has been verified, use the appropriate GitHub and deployment procedures to restore the live site.

### Step 11 — Record the Outcome

Document:

- What was lost or affected.
- Which backup was used.
- What was successfully restored.
- What remains unavailable.
- What changes were necessary.
- What future safeguards are required.

## 17. Recovery from Accidental File Deletion

An individual file may be recoverable through Git history if the relevant earlier commit remains available.

### 17.1 Check Repository History

Identify the last version in which the file existed.

Example:

```bash
git log --all -- path/to/file
```

### 17.2 Restore a Specific Version

An earlier file can be restored from an identified commit.

Example:

```bash
git restore --source=<commit-hash> -- path/to/file
```

The recovered file should then be inspected before committing.

### 17.3 Check the Result

Confirm that:

- The recovered file is the intended version.
- Its dependencies still exist.
- The file has not been replaced by a more recent correction.
- No unrelated changes were introduced.

### 17.4 Untracked Files

A file that was never committed may not be recoverable from Git history.

Use the independent working-directory backup or another available recovery source.

## 18. Recovery from Repository Corruption

If the active repository becomes damaged or unusable:

1. Stop operations that may worsen the condition.
2. Check whether the remote repository remains accessible.
3. Identify the latest suitable independent mirror or bundle.
4. Verify its integrity.
5. Clone or restore it to a separate location.
6. Inspect branches and tags.
7. Compare the restored repository with any available valid remote state.
8. Verify required assets and configuration.
9. Test the build.
10. Re-establish the appropriate repository connection.

### 18.1 Avoid Blind Overwriting

Do not force-push an old backup over the remote repository without understanding the consequences.

Such an action may discard valid recent work or change repository history.

### 18.2 Recovery from a Mirror

A mirror can provide a useful basis for recreating a repository.

However, GitHub-specific repository settings, Actions secrets, Pages configuration, and other hosted services must be checked separately.

## 19. Recovery from GitHub Account or Repository Problems

A repository may become inaccessible because of:

- Account lockout.
- Account compromise.
- Repository deletion.
- Permission changes.
- Organisation or ownership changes.
- Service disruption.
- Configuration errors.

### 19.1 Account Access

Use the appropriate official GitHub account-recovery and security procedures.

Do not attempt to bypass access controls.

### 19.2 Independent Backups

A repository backup stored independently may allow the source project to be reconstructed even when the original repository is temporarily inaccessible.

### 19.3 New Repository

Where necessary and appropriate, create a replacement repository and restore the verified project source.

### 19.4 Ownership

Ensure that repository ownership and administrative access are established correctly.

### 19.5 Repository Settings

Re-establish:

- Default branch.
- Access permissions.
- GitHub Pages source.
- GitHub Actions configuration.
- Deployment environment.
- Required integrations.

### 19.6 Secrets

Recreate required secrets through the appropriate secure settings.

Do not attempt to recover a compromised secret as though the original credential should remain trusted.

Replace exposed credentials.

### 19.7 Public Information

If a previous public website or repository exposed sensitive material, a new repository or domain does not automatically remove existing copies, caches, forks, or search-engine records.

Follow the security, privacy, and takedown procedures as appropriate.

## 20. Recovery from Failed Website Deployment

A failed deployment may leave the source repository intact while the public website is unavailable or outdated.

### 20.1 Identify the Failure Stage

Determine whether failure occurred during:

- Repository checkout.
- Pages configuration.
- Jekyll build.
- Artifact upload.
- Deployment.
- Website serving.

### 20.2 Inspect GitHub Actions Logs

Use the deployment history to identify the failing job and relevant error.

### 20.3 Verify Source Files

Check whether the latest repository changes contain:

- Invalid YAML.
- Missing layouts.
- Missing includes.
- Broken Liquid expressions.
- Incorrect collection configuration.
- Missing assets.
- Unsupported plugins.

### 20.4 Restore the Last Valid Source Version

Where an update caused the failure, identify an appropriate previous commit.

Correct or revert the problematic change without unnecessarily discarding unrelated work.

### 20.5 Rebuild and Redeploy

Run the configured build and deployment workflow again.

### 20.6 Verify the Live Website

After the workflow succeeds, inspect:

- Homepage.
- Individual articles.
- Weekly collections.
- Navigation.
- Stylesheets.
- JavaScript.
- Images.
- RSS and sitemap resources.

Do not assume a successful workflow alone establishes that all pages are functioning.

## 21. Recovery from Incorrect or Corrupted Published Content

A website may remain technically operational while displaying incorrect material.

Examples include:

- Corrupted literary text.
- Incorrect attribution.
- Missing translations.
- Broken article metadata.
- Inaccurate historical claims.
- Incorrect scientific explanations.
- Missing images.
- Misleading links.

### 21.1 Identify the Last Correct Version

Use Git history and editorial records to identify an appropriate earlier version.

### 21.2 Preserve Editorial History

Do not silently erase significant changes merely to restore appearance.

Where a correction is necessary, follow the correction policy.

### 21.3 Restore and Verify

Check the restored text against the original source and supporting references.

### 21.4 Update Related Pages

If an article's metadata or URL changes, inspect associated:

- Weekly collection pages.
- Homepage cards.
- Archive listings.
- Sitemap.
- RSS feed.
- Internal references.

### 21.5 Publish a Correction Where Necessary

If an incorrect version was already public and the issue is material, consider a correction notice.

## 22. Recovery from Missing or Damaged Assets

Assets may be lost independently of the article text.

### 22.1 Identify the Missing Asset

Determine:

- Filename.
- Original source.
- Relevant article.
- Rights status.
- Previous version.
- Dependencies.

### 22.2 Recover the Original

Use an appropriate independent asset backup.

### 22.3 Verify Rights

Before restoring a third-party asset, confirm that the intended use remains permitted.

### 22.4 Restore References

Check the paths in:

- Article Markdown.
- Layouts.
- Includes.
- CSS.
- JavaScript.
- Structured data.

### 22.5 Recheck Display

Verify the asset on the deployed website.

### 22.6 If the Asset Cannot Be Recovered

Consider:

- Replacing it with an authorised alternative.
- Removing the affected image.
- Providing an explanatory note.
- Reconstructing original project artwork where appropriate.
- Updating the article and asset records.

Do not recreate a third-party work and present it as the original.

## 23. Recovery from Confidential Data Loss or Exposure

Confidential information requires additional care.

### 23.1 Loss of Confidential Records

Identify whether an authorised encrypted backup exists.

Verify its integrity before restoration.

### 23.2 Exposure of Confidential Material

If confidential information becomes publicly accessible:

1. Identify the affected material.
2. Restrict or remove public access where appropriate.
3. Assess the nature and extent of disclosure.
4. Preserve necessary evidence securely.
5. Identify affected individuals or parties where appropriate.
6. Consider applicable notification obligations.
7. Take measures to prevent continued exposure.
8. Review the underlying cause.
9. Record the incident securely.

### 23.3 Public Repository History

Removing a file from the latest repository version does not automatically remove it from historical commits or independent copies.

A suitable response may require additional repository-history and hosting actions.

### 23.4 Credentials

If a credential has been exposed, revoke or rotate it through the relevant service.

Do not restore an exposed credential from a backup.

### 23.5 Privacy and Safety

Consider whether disclosure may create harm or risk for affected individuals.

Follow the relevant privacy, security, and takedown policies.

## 24. Restoration Testing

Restoration should be tested periodically.

A backup strategy that has never been tested may contain unnoticed problems.

### 24.1 Test Restoration Environment

Use a separate environment rather than overwriting the production project.

### 24.2 Test Repository Restoration

Confirm that the restored repository contains the expected source files and usable Git history.

### 24.3 Test Jekyll Build

Run the appropriate build procedure.

Example:

```bash
bundle exec jekyll build
```

This assumes that compatible dependencies and the necessary local environment are available.

### 24.4 Test Generated Output

Confirm that `_site/` contains the intended pages and resources.

### 24.5 Test Collections

Verify that:

- Individual articles are generated.
- Weekly collections are generated.
- Articles are matched to the correct weeks.
- Entry ordering is correct.

### 24.6 Test Assets

Check that essential images, stylesheets, scripts, and other resources are present.

### 24.7 Test Multilingual Content

Verify that original text, Urdu directionality, transliteration, and Indic scripts remain intact.

### 24.8 Test Deployment Configuration

Inspect whether the restored project can use the intended GitHub Pages deployment arrangement.

Do not deploy a test restoration to production unintentionally.

### 24.9 Test Confidential Records Separately

Only authorised personnel should test restoration of private records.

Do not copy confidential restored documents into a public test environment.

### 24.10 Restoration Record

Record:

- Restoration date.
- Backup used.
- Environment.
- Files restored.
- Build result.
- Problems encountered.
- Recovery outcome.

## 25. Recovery Priority

Where several components are affected, restoration should follow a risk-based order.

A suggested priority is:

| Priority | Component | Reason |
|---|---|---|
| 1 | Security and privacy containment | Prevent continuing exposure or damage |
| 2 | Repository and source content | Preserve the primary project record |
| 3 | Configuration and dependencies | Re-establish the build environment |
| 4 | Essential website assets | Restore correct page presentation |
| 5 | Jekyll build and deployment | Return the website to operation |
| 6 | Article and collection verification | Confirm archive completeness |
| 7 | Optional features | Restore non-essential improvements |
| 8 | Visual refinements | Reintroduce cosmetic changes after stability |

This sequence may be adapted according to the actual incident.

For example, a missing confidential consent record should be treated differently from an ordinary missing decorative image.

## 26. Backup and Recovery Record Template

Use this template for important backup activities.

### Backup Record

**Backup ID:** [Unique identifier]

**Date created:** [Date]

**Backup type:** [Git mirror / Git bundle / File archive / Confidential records / Other]

**Source:** [Repository or storage location]

**Backup destination:** [Private location description]

**Contents:** [Description]

**Version or commit:** [Commit hash, where applicable]

**Encryption:** [Yes / No / Not applicable]

**Integrity check:** [Method]

**Verification result:** [Pass / Fail / Not tested]

**Retention period:** [Period]

**Responsible person:** [Name]

**Additional notes:** [Notes]

### Restoration Record

**Restoration ID:** [Unique identifier]

**Date:** [Date]

**Incident or reason:** [Description]

**Backup ID:** [Related backup]

**Restoration environment:** [Environment]

**Components restored:** [Files or services]

**Build result:** [Result]

**Testing result:** [Result]

**Outstanding problems:** [Details]

**Deployment status:** [Status]

**Responsible person:** [Name]

**Additional notes:** [Notes]

Keep records containing sensitive storage details or private information appropriately protected.

## 27. Backup and Recovery Checklist

### Initial Setup

- [ ] The source repository is identified.
- [ ] Important project files are included in the backup scope.
- [ ] An independent repository backup is established.
- [ ] Important assets are preserved.
- [ ] Relevant configuration files are preserved.
- [ ] Confidential editorial records are stored separately.
- [ ] Sensitive backups are appropriately encrypted.
- [ ] Credentials are kept outside ordinary backup files.
- [ ] Backup locations are documented securely.

### Routine Backup

- [ ] Important changes have been backed up.
- [ ] Recent article additions are preserved.
- [ ] Weekly collection files are preserved.
- [ ] Asset changes are preserved.
- [ ] Configuration changes are preserved.
- [ ] Private records have been handled according to retention rules.
- [ ] Backup integrity has been checked where appropriate.

### Recovery Readiness

- [ ] Recovery procedures are documented.
- [ ] A suitable restoration environment is available.
- [ ] Git-based recovery has been considered.
- [ ] Dependencies are identifiable.
- [ ] Deployment configuration is documented.
- [ ] Required account access arrangements are understood.
- [ ] Backup copies are readable.
- [ ] Restoration has been tested periodically.

### Incident Recovery

- [ ] The incident has been assessed.
- [ ] Further damage has been contained.
- [ ] A suitable backup has been selected.
- [ ] Integrity has been checked.
- [ ] Restoration has been performed separately.
- [ ] Content and build have been verified.
- [ ] Live deployment has been checked where applicable.
- [ ] Relevant people have been informed where required.
- [ ] Lessons and corrective actions have been recorded.

## 28. Backup Limitations

The following limitations must remain clear.

### 28.1 Git Is Not a Complete Backup

Git version history is useful but does not automatically preserve everything held by GitHub or external services.

### 28.2 GitHub Is Not the Only Recovery Location

A backup stored solely in the same repository is exposed to many of the same risks as the primary source.

### 28.3 Generated Output Is Not the Complete Source

The `_site/` directory does not replace the original Jekyll source files.

### 28.4 Backup Does Not Grant Rights

A copy of copyrighted or restricted material does not create permission to reproduce or redistribute it.

### 28.5 Encryption Requires Key Protection

An encrypted backup that cannot be unlocked may be unusable.

Keep recovery keys appropriately protected.

### 28.6 Backups Can Contain Outdated Material

Always identify the backup version and date.

Do not assume that the newest-looking filename represents the most recent valid state.

### 28.7 Cloud Services May Have Independent Risks

Storage-provider availability, account access, terms, retention, and security arrangements may change.

### 28.8 Recovery Is Not Guaranteed

A documented procedure or an existing backup does not guarantee complete recovery.

Only actual restoration testing provides evidence that the procedure works under the tested conditions.

## 29. Relationship with Other Publication Documentation

This policy should be read alongside:

- `README.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `GITHUB_PAGES_DEPLOYMENT.md`
- `TESTING_AND_QUALITY_ASSURANCE.md`
- `SITE_MAINTENANCE.md`
- `SECURITY.md`
- `PRIVACY.md`
- `ACCESSIBILITY.md`
- `COPYRIGHT.md`
- `RIGHTS_AND_PERMISSIONS_REGISTER.md`
- `ASSET_CREDITS.md`
- `SOURCE_REGISTER.md`
- `RESEARCH_ETHICS.md`
- `INTERVIEW_AND_ORAL_HISTORY_PROTOCOL.md`
- `INTERVIEW_CONSENT_FORM.md`
- `EDITORIAL_DECISION_RECORD.md`
- `CONTENT_LIFECYCLE.md`
- `CORRECTIONS_POLICY.md`
- `TAKEDOWN_POLICY.md`
- `DISCLAIMER.md`

Together, these documents support the preservation, protection, recovery, and responsible maintenance of the publication.

## 30. Continuing Commitment

The value of an archive lies not only in the material it contains but also in the care taken to preserve it.

A literary text, translation, research explanation, historical reference, or technical component may represent considerable intellectual effort. Its loss can affect both the publication and the record of the work that produced it.

Verse & Variable therefore treats backup and recovery as part of its long-term editorial and technical responsibility.

The aim is to ensure that the archive remains recoverable, that sensitive material remains protected, and that the publication can continue even when an unexpected technical or organisational problem occurs.

**Preserve the source. Protect the record. Test the recovery.**

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
