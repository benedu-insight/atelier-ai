---
name: Benedu Insight
description: Plasma School for Semiconductor & RF. A dark spectrogram you read by its light.
colors:
  ink: "#14120F"
  ash: "#1D1B18"
  line: "#3A3733"
  line-faint: "#2A2724"
  line-hi: "#57524B"
  bone: "#EDE6DA"
  bone-2: "#B8B0A3"
  bone-3: "#8F887C"
  ring-green: "#0F8C50"
  wordmark-violet: "#7030A0"
  discharge-lavender: "#C9A2F2"
  coral: "#CC785C"
  coral-hi: "#DE8A6D"
  free-amber: "#E8A55A"
  error-salmon: "#F08C7A"
  line-ar-434: "#4628F9"
  line-hbeta-486: "#28ECF9"
  line-co-519: "#53F928"
  line-he-587: "#F9E528"
  line-halpha-656: "#F92828"
  line-o-777: "#942828"
typography:
  display:
    fontFamily: "Google Sans, Gowun Batang, Apple SD Gothic Neo, Malgun Gothic, serif"
    fontSize: "clamp(40px, 4.9vw, 80px)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Google Sans, Gowun Batang, Apple SD Gothic Neo, Malgun Gothic, serif"
    fontSize: "clamp(30px, 3.3vw, 52px)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Google Sans, Gowun Batang, Apple SD Gothic Neo, Malgun Gothic, serif"
    fontSize: "clamp(24px, 2.3vw, 34px)"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Google Sans, Gowun Batang, Apple SD Gothic Neo, Malgun Gothic, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  lead:
    fontFamily: "Google Sans, Gowun Batang, Apple SD Gothic Neo, Malgun Gothic, serif"
    fontSize: "clamp(17px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Google Sans, Gowun Batang, Apple SD Gothic Neo, Malgun Gothic, serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
  measure:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tnum"
rounded:
  plate: "6px"
  panel: "8px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(96px, 13vh, 150px)"
  section-mobile: "88px"
  rail: "62px"
  rail-hero: "104px"
  rail-mobile: "56px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "#1B110D"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.coral-hi}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-small:
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  lead-plate:
    backgroundColor: "{colors.ash}"
    textColor: "{colors.bone-2}"
    rounded: "{rounded.plate}"
    padding: "22px 26px"
  panel-plate:
    backgroundColor: "{colors.ash}"
    textColor: "{colors.bone}"
    rounded: "{rounded.panel}"
    padding: "40px"
  input-field:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.plate}"
    padding: "13px 14px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.bone-2}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  code-pill:
    backgroundColor: "transparent"
    textColor: "{colors.bone-2}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  code-pill-recommended:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  pick-button:
    backgroundColor: "transparent"
    textColor: "{colors.bone-2}"
    rounded: "{rounded.pill}"
    size: "36px"
  pick-button-selected:
    backgroundColor: "{colors.coral}"
    textColor: "#1B110D"
  segmented-active:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  emission-rail:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone-2}"
    height: "{spacing.rail}"
---

# Design System: Benedu Insight

## Overview

**Creative North Star: "The School You Read by Its Light"**

Benedu Insight is drawn as an optical emission spectrogram. The ground is an ink-black continuum; everything that carries meaning is a thin line of light at a real wavelength. The official green ring is the source: plasma strikes inside it, its light is dispersed, and the dispersed lines become the page's measuring rail, its navigation and its state. Each section owns one emission line (Ar II 434.8, Hβ 486.1, CO 519.8, He I 587.6, Hα 656.3, O I 777.2 nm) and that line's hue reappears wherever the section draws: its margin rule, its faint procedural band in the background, its duration bars, its strike-throughs, its rail mark.

The surface is dark, quiet and dense with real information. Prose sits on flat ash plates or directly on ink; there is no decorative chrome, no gradient cards, no shadows to lift things. Hierarchy comes from type weight, bone-on-ink tone steps and the 1px line vocabulary. Colour is scarce by rule: the green ring and the Ar-violet discharge glow belong to the hero; spectral hues appear only as lines; coral is reserved for the action. Data is drawn to scale (module minutes, career years) so the diagram is the proof.

This world rejects the category default for training sites: white canvas, instructor-photo hero, stat row, a grid of equal course cards.

**Key Characteristics:**
- Ink-black continuum ground with a faint per-section spectrogram band, brightest at the section's own wavelength.
- Colour only as 1px emission lines at computed wavelength hues, plus the green ring and the violet discharge.
- Line form is state: solid is live, half-height is available, dashed is beyond the visible band, struck is a misconception corrected.
- Coral is the only action colour.
- Measured values (W, MHz, nm, minutes, years) in JetBrains Mono; everything else in the text face.
- Fully pill-shaped controls, gently rounded plates, no shadows except the floating mobile dock.

## Colors

A near-monochrome warm-dark neutral ramp lit by thin spectral lines, two brand hues held to the hero, and one coral voice for action.

### Primary
- **Discharge Coral** (`{colors.coral}`): the only action colour. Primary buttons ("강의 문의하기", "이 구성으로 문의하기"), the selected module pick button, the finder's "see the course" link, required-field marks, the focus ring, the form focus halo and the text caret. Hover lifts to **Coral Hi** (`{colors.coral-hi}`). Text on coral is a near-black brown (#1B110D), never white.

### Secondary
- **Ring Green** (`{colors.ring-green}`): the official symbol colour. It reaches the page only through the official logo SVGs (header wordmark, hero ring, footer, favicon); CSS never paints it onto other surfaces.
- **Wordmark Violet** (`{colors.wordmark-violet}`): the brand purple, present in the logo and as the text-selection background.
- **Discharge Lavender** (`{colors.discharge-lavender}`): the Ar plasma's glow made into type. It colours the filling half of the hero headline (blended live with the plasma glow), the ion paths and equations in the Chamber drawing. Outside those, it does not appear.

### Tertiary (the emission lines)
Line hues are computed from wavelength by `BI.nmRGB` (Bruton's approximation, lifted for dark grounds) and applied through `data-nm`; the hex values in the frontmatter are that function's output and are recorded for reference. Never hand-pick a spectral hue; give the element a wavelength.
- **Ar II 434.8 indigo** (`{colors.line-ar-434}`): Philosophy.
- **Hβ 486.1 cyan** (`{colors.line-hbeta-486}`): Specialties.
- **CO 519.8 green** (`{colors.line-co-519}`): Curriculum, including every module duration bar.
- **He I 587.6 yellow** (`{colors.line-he-587}`): Method, including the misconception strike-throughs.
- **Hα 656.3 red** (`{colors.line-halpha-656}`): Instructor, including the career and teaching span bars.
- **O I 777.2 near-IR** (`{colors.line-o-777}`): Contact. Beyond the visible band, so always drawn dashed.
- **Free Amber** (`{colors.free-amber}`): marks only the free lectures (a doubled 1px tick plus "FREE").
- **Error Salmon** (`{colors.error-salmon}`): invalid fields, error hints, send failure.

### Neutral
- **Ink** (`{colors.ink}`): page ground, rail ground, input wells, menu sheet.
- **Ash** (`{colors.ash}`): flat plates for prose and tools (lead plate, recipe, portal, form plate, photo placeholders).
- **Line** (`{colors.line}`): default 1px rules, plate borders, pill outlines, list dividers.
- **Line Faint** (`{colors.line-faint}`): section top rules and row dividers inside lists.
- **Line Hi** (`{colors.line-hi}`): outlined button borders, code pills, pick buttons, slider track.
- **Bone** (`{colors.bone}`): headings, primary text, active segmented control fill.
- **Bone 2** (`{colors.bone-2}`): body prose and secondary text.
- **Bone 3** (`{colors.bone-3}`): meta, captions, labels, measured values at rest.

### Named Rules
**The Light-Only-As-Lines Rule.** Spectral colour never fills a surface. It appears as a 1px to 3px line, a mark, a stroke or the faint section band; text and plates stay bone, ash and ink.

**The One Coral Rule.** Coral means "act". If it is coral, clicking it moves the visitor toward an inquiry or confirms a pick; nothing decorative is coral.

**The Wavelength-Not-Swatch Rule.** A new section or line-coloured element gets a real emission wavelength and its hue from `BI.nmRGB`, never a picked hex.

## Typography

**Display Font:** Google Sans for Latin and numerals, with Gowun Batang carrying Hangul (then Apple SD Gothic Neo, Malgun Gothic)
**Body Font:** the same stack
**Label/Mono Font:** JetBrains Mono (with ui-monospace)

**Character:** One stack does all the talking: Korean renders in Gowun Batang's calm brush-serif, while English engineering terms and numerals inside the same sentence render in Google Sans, so "RF Generator" and "Chamber" read as instruments set into the prose. JetBrains Mono is the instrument readout.

### Hierarchy
- **Display** (700, `{typography.display}`): the hero headline only; the EN variant steps down to clamp(38px, 4.3vw, 70px). The instructor name uses a sibling display size (clamp(42px, 4.8vw, 76px), line-height 1.08).
- **Headline** (700, `{typography.headline}`): section H2s, max 18em. Philosophy uses clamp(28px, 2.9vw, 46px) at 1.28.
- **Title** (700, `{typography.title}`): course titles; pillar titles at clamp(23px, 2.1vw, 32px); principle and finder titles at clamp(20px, 1.7vw, 25px).
- **Body** (400, 17px desktop / 16px mobile, 1.75): prose in bone-2, 36 to 42em measure, `word-break: keep-all`.
- **Lead** (400, `{typography.lead}`): the one-paragraph section lead on an ash plate, and the hero sub.
- **Label** (500, 12px, 0.08em, uppercase): instrument and data labels only: RF POWER / GAS, lesson-group headers, span-chart group headers, footer column heads.
- **Measure** (mono, 12px, tabular): watts, MHz, nanometres, minutes, years, counts.

### Named Rules
**The Readout Rule.** Mono is for values a meter would show. Words, names and headings never go mono.

**The English-Terms Rule.** Engineering terms stay in English inside Korean sentences (RF Generator, RF Matcher, Chamber, VVC); the type stack is built to make that mix look intentional.

## Layout

A fixed bottom spectrum rail and a fixed top bar frame a single long page. Content sits in a 1320px container with a fluid gutter (`{spacing.gutter}`). Each content section is a 3/9 grid: a narrow side column whose right edge carries the section's vertical emission line (with its wavelength label stuck at 104px from the top) and a main column. Sections are separated by a faint 1px rule and padded `{spacing.section}`.

The hero is a full-viewport two-column grid (1.08fr / 1fr): ring stage with RF panel on the left, headline and actions on the right, bottom padding reserving the tall rail (`{spacing.rail-hero}`). Philosophy is a 300vh scroll track with a sticky 4/8 stage in which the Chamber drawing assembles. Data is laid out to scale: module duration bars are `minutes / 75` of a fixed width, span bars are positioned on a 1990 to 2027.5 year axis.

**At 899px and below:** rail shrinks to 56px and becomes a single "now reading" button that opens the menu sheet; top-bar links, CTA and language toggle move into the sheet; the hero stacks ring, RF panel, copy; the Philosophy track becomes static with numbered marks and a two-column legend; section grids collapse to one column with the emission line running down a 22px left margin; the sticky recipe is replaced by a floating dock; finder options become a 2-column grid. Between 900px and 1180px the span-chart label column narrows to 280px and duration bars to 110px. Short desktop viewports (≤760px tall) compress the Philosophy text and ring.

**The Hung-Off-The-Line Rule.** Every content section hangs off its own vertical emission line; content never floats free of a line.

## Elevation & Depth

Flat. Depth comes from tone (ink ground, ash plates, bone text), 1px rules and light: the hero's canvas plasma floods the field in the active gas's glow colour, and each section has a faint procedural spectrogram band masked away toward its bottom. The only shadows are functional.

### Shadow Vocabulary
- **Floating dock** (`box-shadow: 0 12px 32px rgba(0,0,0,.5)`): the mobile recipe dock that floats over content above the rail.
- **Now marker** (`box-shadow: 0 0 0 3px #14120F, 0 0 0 4px <line colour>`): the current-role span bar in the career chart, a ring rather than a lift.
- **Form focus halo** (`box-shadow: 0 0 0 3px rgba(204,120,92,.32)`): inputs on focus.

### Named Rules
**The Flat Plate Rule.** Plates are ash with a 1px line border and no shadow. Elevation is never used to rank content.

## Shapes

Two families. Interactive things are full pills (`{rounded.pill}`): buttons, tags, code pills, pick buttons, gas chips, the language toggle, menu and close buttons, the dock. Containers are gently rounded: 6px (`{rounded.plate}`) for lead plates, photos, inputs and the instructor portrait; 8px (`{rounded.panel}`) for the recipe, portal and form plates. Lines are hairlines: 1px rules everywhere, 2px for an active rail mark and duration bars, 3px for career spans. The slider thumb is a 3 x 22px bar, not a dot. Icons are inline SVG strokes at 1.3 to 1.6px.

## Components

### Buttons
Confident pills with no ornament.
- **Shape:** full pill (999px), 52px tall, 26px side padding; small variant 42px / 18px at 14px.
- **Primary:** coral fill, near-black brown text, 700 16px, optional trailing 16px arrow icon.
- **Hover / Focus:** coral lifts to Coral Hi; press nudges 1px down; focus is a 2px coral outline at 3px offset.
- **Line:** transparent with a Line Hi border and bone text; hover brightens the border to bone-2. Used for the portal link and secondary actions.

### Chips
- **Tags:** outlined pills (1px line, 12px text, bone-2) listing tools and topics. Static.
- **Gas chips:** borderless pills in bone-3; the checked gas gains a Line Hi outline and bone text.
- **Language toggle:** a pill track with an active segment filled bone on ink text.

### Cards / Containers
- **Lead plate:** ash, 1px faint line, 6px radius, 22px 26px padding, lead type in bone-2. One per section, directly under the H2.
- **Panel plates (recipe, portal, form):** ash, 1px line, 8px radius, 40px padding on desktop (24px 20px mobile).
- **Shadow Strategy:** none (see Elevation & Depth).
- There are no course cards: courses are full-width rows divided by 1px rules.

### Inputs / Fields
- **Style:** ink well inside the ash plate, 1px line border, 6px radius, 13px 14px padding, 16px text.
- **Focus:** border to bone-2 plus a 3px translucent coral halo.
- **Error:** border and hint turn Error Salmon after the first submit attempt. Checkboxes use coral accent colour.
- **Range slider:** 1px Line Hi track with a 3 x 22px bone bar thumb; focus wraps the thumb in an ink gap and coral ring.

### Navigation
- **Top bar:** fixed, transparent over the hero, turns 96% ink with a faint bottom rule and tighter padding after 24px of scroll. Official horizontal reverse logo (KR or EN by language) at 40px (34px mobile), portal link, language toggle, small coral CTA.
- **Emission-line rail:** the primary navigation (see signature component).
- **Menu sheet:** right-side ink sheet (max 420px) over a 72% ink scrim; each link is a row with the section's 1px line mark (dashed for O I), the name at 22px and its wavelength in mono.

### Emission-Line Rail (signature)
A fixed bottom band, 104px tall over the hero and 62px after it (56px on mobile). Behind it, a faint visible-spectrum continuum at 13% opacity. On it, the current gas's emission lines rise and decay as photons from the hero plasma land (38% opacity once docked). Each section is a link placed at its wavelength's x position: a 1px mark at half height (available), growing to 70% on hover and to full height at 2px when active (live); O I 777.2 is dashed. Section names sit under the axis; the line IDs show in mono only while the rail is in hero mode. A small bone triangle cursor lands on the active line with one damped overshoot (cubic-bezier(.34,1.56,.64,1), 0.85s).

### Hero Ring and RF Panel (signature)
The official colour symbol at min(58vh, 40vw, 620px) with a canvas plasma behind it filling the hole and flooding the field in the gas's glow (Ar violet by default). A ring halo is drawn in the same glow. Below: RF Power slider (0 to 600 W, mono readout), gas radio chips (Ar, O2, CF4, N2), 13.56 MHz and a live discharge status. Plasma strikes at 60 W and extinguishes below 30 W; changing gas recolours the plasma and re-weights the rail's spectrum.

### Spec Margin Line
The section's vertical 1px line, solid for 160px then fading to transparent at 85% height (dashed for near-IR), with its species and wavelength in 12px mono stuck beside it. Philosophy uses an inline variant with the label set vertically.

### Pillars, Principles and Fix Rows
Pillars are full-width 5/7 rows between 1px rules, each with a line in the section hue that draws across the top rule left to right when seen (1.4s). Principles are a two-column list on 1px top rules. Misconception fix rows strike the old belief with a 1.5px line in the section hue, then slide the corrected statement in after a 0.45s delay behind a short bone dash.

### Course Finder
A single question as a sign band: equal options between two 1px rules separated by vertical rules; the chosen option fills bone with ink text. The answer appears as a large path line, a reason, and a coral "see the course" link; non-recommended courses dim to 36% and the recommended course's code pill fills bone.

### Course Header and Module Rows
Course header: outlined code pill (Basic, Class-01, Class-02, Special) beside the title and a meta line. Module rows are a 4-column grid: 36px pick button (outlined pill with plus, coral fill with check when picked), mono module code, expandable title (details with a chevron), and a duration line whose length is the lecture's real minutes in the section hue, with the minutes in mono. Basic lesson lists mark free lectures with a doubled amber tick and "FREE".

### Recipe Panel and Dock
A sticky ash panel in the curriculum side column collecting picked modules: count badge, rows with code, title, minutes and a hairline sized to minutes, a total, and a coral "inquire with this recipe" button that writes the picks into the inquiry form. On mobile it becomes a bone pill dock floating above the rail.

### Span Chart
Career and teaching history on a shared year axis (1990 to 2027.5, mono ticks). Career spans are 3px bars, teaching spans 1px, both in the Hα hue; the current role carries the ring marker.

### Photo Grid
Real classroom photos in a 2:1 grid (main photo spanning two rows), 6px radius, ash placeholder, one caption line below.

### Footer
Vertical official logo at 104px, a short brand paragraph, two link columns with uppercase label heads, and a legal line on a faint rule.

### Motion
One ease for state (`cubic-bezier(.16,1,.3,1)`) and one overshoot for the rail cursor. Sequences: the opening strike (RF ramps from 0, the empty ring lights, photons travel to the rail), the scroll-assembled Chamber drawing (scattered labels converge, strokes draw, leaders and note appear), line reveals and strikes on intersection. Under reduced motion every sequence renders its finished, lit still.

## Do's and Don'ts

### Do:
- **Do** give every new section or line-coloured element a real emission wavelength and let `BI.nmRGB` produce its hue.
- **Do** express state through line form: solid for live, half-height for available, dashed for beyond the visible band, struck for a corrected misconception.
- **Do** keep coral (#CC785C) for actions, picks, required marks and focus only.
- **Do** set measured values (W, MHz, nm, minutes, years, counts) in JetBrains Mono with tabular numbers.
- **Do** draw quantities to scale (duration bars from real minutes, span bars from real years) instead of stating them as big numbers.
- **Do** use the official logo SVGs from `assets/logo` for the ring and wordmark, KR or EN to match the page language.
- **Do** keep English engineering terms in English inside Korean copy.
- **Do** provide a lit, finished still for every motion sequence under `prefers-reduced-motion`.

### Don't:
- **Don't** fill surfaces, cards or text with spectral hues; colour arrives as lines.
- **Don't** retype, recolour or redraw the wordmark or ring in a font or in CSS.
- **Don't** use green or violet as UI accents outside the logo, the hero discharge and text selection.
- **Don't** add drop shadows to plates or cards to create hierarchy.
- **Don't** build an instructor-photo hero, a stat row or a grid of equal course cards.
- **Don't** set words, names or headings in the mono face.
- **Don't** place small uppercase labels above headlines as section kickers; the label style is for instrument and data labels.
