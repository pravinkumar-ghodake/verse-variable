
# Asset Credits and Third-Party Attributions

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**

## 1. Purpose

This document records the sources, ownership information, licences, and attribution requirements for visual and technical assets used by Verse & Variable.

The publication may incorporate original artwork, typography, fonts, illustrations, icons, photographs, software libraries, and other digital resources.

Maintaining an asset register helps ensure that:

- Original project materials are distinguished from third-party resources.
- Creators and rights holders receive appropriate recognition.
- Licence terms are respected.
- Required attribution is preserved.
- Asset sources can be verified.
- Future editorial and technical changes do not unintentionally violate intellectual property rights.

This document should be updated whenever a new third-party asset is introduced or an existing asset is replaced.

## 2. Asset Classification

Assets used by the publication should be classified into the following categories.

### 2.1 Original Project Assets

Materials created specifically for Verse & Variable and maintained in its repository.

Examples include:

- Original visual identity and publication graphics.
- Custom SVG artwork.
- Project-specific CSS and JavaScript.
- Custom wavefield visualisations.
- Original scientific illustrations.
- Publication-specific layouts and interface components.

### 2.2 Third-Party Assets

Materials created or distributed by external individuals, organisations, or projects.

Examples include:

- Externally hosted fonts.
- Photographs and illustrations.
- Icons and icon libraries.
- Stock images.
- Music and audio recordings.
- Video material.
- Software libraries and frameworks.
- External datasets and visual resources.

### 2.3 Literary and Scholarly Resources

Literary and scholarly material requires separate attribution and rights assessment.

Examples include:

- Poems and literary excerpts.
- Song lyrics.
- Book passages.
- Translations.
- Archival material.
- Research figures and diagrams.
- Historical photographs.
- Audio and video performances.

A reference or citation does not automatically grant permission to reproduce copyrighted material.

## 3. Original Project Assets

The following assets are developed specifically for the publication and maintained within the repository.

| Asset | Repository location | Description |
|---|---|---|
| Publication identity | `_data/site.yml` and related files | Site identity, configuration, and visual identity data |
| Main stylesheet | `assets/css/site.css` | Publication-specific visual design and responsive styles |
| JavaScript functionality | `assets/js/site.js` | Interactive features and wavefield visualisation |
| Wavefield component | `_includes/wavefield.html` | Reusable visual component for the publication |
| Social preview artwork | `assets/images/social-preview.svg` | Original publication-specific social preview graphic |
| Page layouts | `_layouts/` | Publication-specific page structures |
| Reusable components | `_includes/` | Navigation, metadata, article cards, and other components |

These materials are maintained as part of the Verse & Variable project.

The applicable repository licence governs original materials within its scope. See the root `LICENSE` file and `COPYRIGHT.md` for the relevant conditions and limitations.

This classification does not extend to third-party material that may later be incorporated into these files.

## 4. Fonts and Typography

Typography is particularly important to this publication because it presents multiple Indian and South Asian writing systems.

The website may use externally hosted fonts and locally available system fallbacks.

The exact font family, provider, source, and licence should be recorded for every externally sourced font.

### Current font service

| Resource | Provider | Purpose | Notes |
|---|---|---|---|
| Google Fonts | Google Fonts | Externally hosted web typography | Verify the exact font families and their individual licences against `_includes/head.html` |

### Font attribution record

For every font family, maintain the following information:

- Font family name.
- Designer or foundry, where identified.
- Official source or download location.
- Applicable licence.
- Licence URL.
- Whether the font is externally hosted or self-hosted.
- Any required attribution or redistribution conditions.

Do not assume that every font available through a common font service has identical licensing terms.

For fonts distributed under the SIL Open Font License, consult the applicable font licence and its redistribution requirements rather than treating the name of the service as the licence.

Relevant resources:

- [Google Fonts](https://fonts.google.com/)
- [Google Fonts Knowledge](https://fonts.google.com/knowledge)
- [SIL Open Font License](https://openfontlicense.org/)

## 5. Images and Illustrations

Images and illustrations should be classified according to their actual origin and rights status.

The publication may use:

- Original SVG illustrations.
- Original scientific diagrams.
- Original conceptual artwork.
- Photographs used with permission or under an appropriate licence.
- Public-domain images whose status has been verified.
- Third-party illustrations with compliant attribution.
- Visual resources made available under compatible open licences.

### Image attribution requirements

Where an image is sourced externally, record:

| Field | Required information |
|---|---|
| Title | Name or description of the image |
| Creator | Photographer, illustrator, artist, or organisation |
| Source | Original source page |
| Licence | Exact licence or rights statement |
| Licence URL | Link to the applicable licence |
| Modifications | Cropping, colour changes, adaptation, or other modifications |
| Usage | Article, page, social preview, or other location |

A search-engine image result is not evidence that an image is free to reuse.

The original source and applicable rights must be checked before publication.

## 6. Icons and Interface Graphics

Interface icons may be used for navigation, controls, accessibility features, and other functional elements.

For every third-party icon library or icon collection, record:

- Library or collection name.
- Creator or maintaining organisation.
- Version, where applicable.
- Official source.
- Applicable licence.
- Required attribution.
- Any modifications.

Individual icons should not be assumed to be public domain merely because they are small or visually simple.

Custom interface graphics created specifically for Verse & Variable should be distinguished from externally sourced icons.

## 7. Scientific Visualisations and Diagrams

Scientific visualisations form an important part of the publication's interdisciplinary identity.

They may represent concepts such as:

- Nonlinear wave propagation.
- Harmonic generation and scattering.
- Wave mixing.
- Mechanical and phononic metamaterials.
- Nonlinear cloaking.
- Time-modulated physical systems.
- Computational mechanics.
- Inverse design.

Each visualisation should be classified according to its origin.

### Original visualisations

For project-created visualisations, document:

- The concept being illustrated.
- The creation method or software.
- Whether the illustration is conceptual, analytical, numerical, or experimental.
- Any relevant modelling assumptions.
- The location of the source file.

### Adapted scientific figures

For figures adapted from research publications or other sources, record:

- Original author or creator.
- Original publication or source.
- Figure number, where relevant.
- DOI or stable source link, where available.
- Applicable copyright or licence.
- Permission status, where required.
- Modifications made to the original figure.

A citation alone does not grant reproduction rights.

Conceptual illustrations should not be presented as experimental measurements or validated physical results.

## 8. Audio, Video, and Musical Material

Audio and video resources may include musical performances, spoken poetry, interviews, lectures, recordings, and educational material.

Before incorporating such material, the publication should establish the applicable rights and permissions.

For musical works, distinguish where relevant between:

- Lyricist.
- Composer.
- Arranger.
- Singer or performer.
- Producer.
- Recording rights holder.
- Translator or adapter.

The identity of a performer does not establish authorship of the lyrics or composition.

Where an external media platform is embedded or linked, its platform terms and privacy practices may also apply.

## 9. Software Libraries and Technical Dependencies

Technical dependencies should be documented separately from literary and visual assets.

For every external software library or framework incorporated into the project, record:

| Field | Required information |
|---|---|
| Name | Official project or package name |
| Version | Version actually used |
| Developer | Maintainer or organisation |
| Source | Official repository or project page |
| Licence | Applicable software licence |
| Usage | Purpose within Verse & Variable |
| Changes | Modifications, if any |

The publication uses GitHub Pages and Jekyll as part of its hosting and static-site publishing infrastructure.

Their use does not transfer ownership of those platforms or their underlying software to Verse & Variable.

Relevant resources:

- [GitHub Pages](https://pages.github.com/)
- [Jekyll](https://jekyllrb.com/)
- [GitHub Terms](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)

Any additional software dependencies introduced in the future should be recorded with their actual versions and licence information.

## 10. Public-Domain Material and Open Licences

Material described as public domain or openly licensed must be checked before reproduction.

The publication should distinguish between:

- Public-domain works.
- Creative Commons licensed works.
- Open-source software.
- Openly accessible but copyrighted material.
- Material available for personal viewing but not necessarily reproduction.
- Material reproduced with explicit permission.

Where a Creative Commons licence applies, its exact version and conditions should be identified.

Relevant resources:

- [Creative Commons Licences](https://creativecommons.org/share-your-work/cclicenses/)
- [Creative Commons Public Domain Tools](https://creativecommons.org/public-domain/)
- [Choose an Open Source Licence](https://choosealicense.com/)

## 11. Attribution Format

Where appropriate, third-party assets may be acknowledged using the following format:

**Title:** [Asset title]  
**Creator:** [Creator or organisation]  
**Source:** [Original source URL]  
**Licence:** [Exact licence name and version]  
**Licence URL:** [Link to licence]  
**Modifications:** [None / describe modifications]  
**Used in:** [Page or component]

Attributions should be placed where they are reasonably discoverable, while preserving the readability and presentation of the publication.

The placement of an attribution should also respect the specific requirements of the applicable licence.

## 12. Asset Verification

Before introducing a third-party asset, the publication should verify:

1. The identity of the original creator or rights holder.
2. The authenticity of the source.
3. The exact licence or permission conditions.
4. Whether commercial and non-commercial use are treated differently.
5. Whether modification or adaptation is allowed.
6. Whether attribution is mandatory.
7. Whether redistribution or hosting creates additional obligations.
8. Whether the asset's use is consistent with the publication's privacy and accessibility policies.

Where rights information is unclear, the asset should not be treated as freely reusable.

## 13. Removal and Replacement of Assets

If a rights holder raises a credible concern about an asset, the publication should review the relevant source, licence, and use.

Where appropriate, the asset may be:

- Corrected or reattributed.
- Replaced with an appropriately licensed alternative.
- Removed from the publication.
- Retained only after obtaining the necessary permission.

The corresponding entry in this document should be updated to preserve an accurate record.

## 14. Relationship with the Repository Licence

The repository contains a root `LICENSE` file specifying the repository's MIT License.

That licence applies according to its terms to the material within its scope.

It should not be interpreted as granting blanket permission to reproduce third-party literary works, photographs, recordings, fonts, illustrations, research figures, or other independently licensed material.

Where a third-party licence imposes separate obligations, those obligations remain applicable to the relevant asset.

This document supplements, but does not replace, the repository licence, copyright notices, and applicable third-party terms.

## 15. Future Maintenance

This register is intended to evolve with the publication.

New asset categories and individual records should be added as the website develops.

The objective is to maintain a traceable and responsible record of the materials that contribute to Verse & Variable, protecting the rights of creators while supporting the publication's long-term development.

---

**Verse & Variable**  
*A line of verse. A line of inquiry.*  
**لفظ سے لہر تک — Lafz se Lehar tak**
