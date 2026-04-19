# Gradevolution UI

> Editorial indie-SaaS component library for classrooms.
> Next.js 14 · TypeScript · Tailwind · shadcn-style · Radix · Framer Motion.

A warm, hand-drawn, cream-and-coral design system distilled from the
Gradevolution pitch deck. Every primitive the deck labels — navbar,
hero, feature grid, pricing card, FAQ, empty state, scroll reveal — is
shipped here as a typed, composable React component.

---

## Preview

```
┌──────────────────────────────────────────────────────────────────┐
│  Gradevolution.      Features  Pricing  About   [ Start free → ]│
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Teaching is beautifully hard.                     ┌────────┐   │
│   The grading part doesn't have to be.              │        │   │
│                                                     │  art   │   │
│   [ Start free → ]    [ Book a demo ]               │        │   │
│                                                     └────────┘   │
│   ◆◆◆◆   Loved by 12K+ educators                                 │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│   01  Create the rubric       02  Grade in flow   03  Return ... │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Quick start

```bash
# 1. Install
npm install

# 2. Run the showcase
npm run dev

# 3. Open http://localhost:3000 — you'll see every component, labeled.
```

Type-check and lint:

```bash
npm run typecheck
npm run lint
```

Build for production:

```bash
npm run build && npm start
```

---

## Project structure

```
gradevolution-ui/
├── app/
│   ├── globals.css         ← tokens, utilities, paper-grain background
│   ├── layout.tsx          ← root layout + font
│   └── page.tsx            ← the storybook-style component showcase
│
├── components/
│   ├── brand/
│   │   └── showcase-block.tsx   ← demo-page chrome (not a brand primitive)
│   └── ui/
│       ├── accordion.tsx        ← Radix-based accordion primitives
│       ├── avatar.tsx           ← Avatar + AvatarStack
│       ├── badge.tsx            ← Tag / Pill / Badge
│       ├── button.tsx           ← cva-variants Button
│       ├── card.tsx             ← Card with 7 brand tones
│       ├── contact-form.tsx     ← full contact form composition
│       ├── cta.tsx              ← ClosingCTA + Marquee
│       ├── faq.tsx              ← data-driven FAQ on Accordion
│       ├── feature.tsx          ← FeatureCell · FeatureGrid · FeatureIcon · BigStat
│       ├── footer.tsx           ← Footer (cream or ink tone)
│       ├── hero.tsx             ← Hero + HeroIllustration
│       ├── index.ts             ← barrel export
│       ├── input.tsx            ← Input · Textarea · Label
│       ├── navbar.tsx           ← Navbar + WordmarkLogo
│       ├── pricing.tsx          ← PricingCard · PricingGrid · PricingToggle
│       ├── process.tsx          ← ProcessStep · ProcessSteps
│       ├── section.tsx          ← Section · SectionLabel · Divider
│       ├── team.tsx             ← TeamMember · TeamGrid
│       ├── testimonial.tsx      ← Testimonial · LogoStrip
│       ├── typography.tsx       ← DisplayHeadline · Eyebrow · Lead · Prose · ItalicAccent · HandUnderline · GiantNumeral
│       └── utility.tsx          ← LoadingSkeleton · EmptyState · ScrollReveal · Tooltip · Kbd · Callout
│
├── lib/
│   └── utils.ts            ← cn() helper
│
├── public/                 ← static assets (favicons, images)
├── components.json         ← shadcn config
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts      ← brand tokens, fonts, animations
├── tsconfig.json
└── README.md
```

---

## Design tokens

All tokens live in `tailwind.config.ts` and mirror the values used
throughout the Gradevolution deck.

### Color

| Token            | Hex        | Use                                    |
|------------------|-----------|-----------------------------------------|
| `cream`          | `#FAF4E8` | page background                         |
| `cream-50`       | `#FFFBF2` | subtle surface variation                |
| `cream-100`      | `#FAF4E8` | default cream                           |
| `cream-200`      | `#F3EAD6` | secondary surface                       |
| `cream-300`      | `#E9DDBF` | borders, dividers                       |
| `ink`            | `#0F0F0E` | headlines, primary text, buttons        |
| `ink-soft`       | `#2A2A28` | body text on cream                      |
| `ink-muted`      | `#6B6B65` | meta, captions, helper text             |
| `coral`          | `#F26B5E` | primary accent                          |
| `coral-soft`     | `#F8A59B` | hover states, tints                     |
| `butter`         | `#F5D66A` | warm highlight                          |
| `butter-soft`    | `#FBE8A5` | soft chip fills                         |
| `sage`           | `#8FA68A` | success, calm callouts                  |
| `sage-soft`      | `#BFD1BA` | sage tints                              |
| `ochre`          | `#C4833C` | numerals, avatar rims                   |
| `navy`           | `#22304A` | alternate dark                          |

### Typography

- **Display** · Georgia (fallback "Times New Roman", serif) — for headlines, italic accents, giant numerals
- **Sans** · system UI stack — for body, UI, labels
- **Mono** · SF Mono / Menlo — used only inside `<Kbd>`

Type scale exposed on Tailwind: `text-hero`, `text-display`, plus the
standard xs → 9xl scale.

### Radii & shadow

- `rounded-pill` (full) — default for buttons, inputs, badges
- `rounded-2xl` · `rounded-3xl` — cards, heroes, section wrappers
- `shadow-editorial` — warm, slightly-tilted card lift
- `shadow-soft` — subtle hover lift

---

## Component inventory

40 components across 12 groups. Each is listed with its file, key props,
and a one-line description.

### Group 1 · Layout & Chrome

| Component       | File                     | Purpose                                            |
|-----------------|--------------------------|----------------------------------------------------|
| `Navbar`        | `components/ui/navbar.tsx` | Sticky top bar with wordmark, nav, CTA, mobile menu |
| `WordmarkLogo`  | `components/ui/navbar.tsx` | Display-serif italic brand lockup                  |
| `Footer`        | `components/ui/footer.tsx` | Large editorial footer (cream or ink tone)        |
| `Section`       | `components/ui/section.tsx`| Vertical rhythm container with tonal background   |
| `SectionLabel`  | `components/ui/section.tsx`| Uppercase eyebrow with accent bullet              |
| `Divider`       | `components/ui/section.tsx`| Thin 1px editorial rule                           |

### Group 2 · Typography

| Component          | File                         | Purpose                                 |
|--------------------|------------------------------|-----------------------------------------|
| `DisplayHeadline`  | `components/ui/typography.tsx` | Oversized serif headline                |
| `Eyebrow`          | `components/ui/typography.tsx` | Uppercase label above headline          |
| `Lead`             | `components/ui/typography.tsx` | Large intro paragraph                   |
| `Prose`            | `components/ui/typography.tsx` | Body text container                     |
| `ItalicAccent`     | `components/ui/typography.tsx` | Inline display-serif italic             |
| `HandUnderline`    | `components/ui/typography.tsx` | Hand-drawn-style underline              |
| `GiantNumeral`     | `components/ui/typography.tsx` | Oversized italic numeral for counters   |

### Group 3 · Buttons & Tags

| Component  | File                       | Props highlights                                            |
|------------|----------------------------|-------------------------------------------------------------|
| `Button`   | `components/ui/button.tsx` | `variant`: primary · secondary · outline · ghost · coral · butter · link. `size`: xs · sm · md · lg · xl · icon. `asChild` for Radix Slot. |
| `Badge`    | `components/ui/badge.tsx`  | `variant`: outline · solid · coral · butter · sage · muted. `size`: sm · md · lg. |
| `Kbd`      | `components/ui/utility.tsx`| Keyboard shortcut chip.                                      |
| `Tooltip`  | `components/ui/utility.tsx`| Minimal hover tooltip.                                       |

### Group 4 · Content Blocks

| Component        | File                          | Purpose                                     |
|------------------|-------------------------------|---------------------------------------------|
| `Hero`           | `components/ui/hero.tsx`       | Full hero (`center` or `split` alignment)   |
| `HeroIllustration` | `components/ui/hero.tsx`     | CSS-drawn warm hero artwork                 |
| `FeatureCell`    | `components/ui/feature.tsx`    | Icon + heading + description                |
| `FeatureGrid`    | `components/ui/feature.tsx`    | 2 / 3 / 4 column grid wrapper               |
| `FeatureIcon`    | `components/ui/feature.tsx`    | Standalone icon chip (5 brand tones)        |
| `BigStat`        | `components/ui/feature.tsx`    | Large numeral + label                       |
| `ProcessStep`    | `components/ui/process.tsx`    | Numbered how-it-works step                  |
| `ProcessSteps`   | `components/ui/process.tsx`    | Vertical stack of process steps             |

### Group 5 · Social Proof

| Component      | File                              | Purpose                                  |
|----------------|-----------------------------------|------------------------------------------|
| `Testimonial`  | `components/ui/testimonial.tsx`    | Pull-quote card with author              |
| `LogoStrip`    | `components/ui/testimonial.tsx`    | Ghost wordmark row                       |
| `Avatar`       | `components/ui/avatar.tsx`         | Round portrait with ink border           |
| `AvatarStack`  | `components/ui/avatar.tsx`         | Overlapping avatar row                   |

### Group 6 · FAQ

| Component           | File                          | Purpose                         |
|---------------------|-------------------------------|---------------------------------|
| `FAQ`               | `components/ui/faq.tsx`        | Data-driven FAQ list            |
| `Accordion`         | `components/ui/accordion.tsx`  | Radix Accordion root            |
| `AccordionItem`     | `components/ui/accordion.tsx`  | Single collapsible              |
| `AccordionTrigger`  | `components/ui/accordion.tsx`  | Question row with +/−           |
| `AccordionContent`  | `components/ui/accordion.tsx`  | Answer body                     |

### Group 7 · Team

| Component   | File                    | Purpose                       |
|-------------|-------------------------|-------------------------------|
| `TeamMember`| `components/ui/team.tsx` | Portrait + name + role + bio  |
| `TeamGrid`  | `components/ui/team.tsx` | Responsive team grid          |

### Group 8 · Pricing

| Component        | File                       | Purpose                                    |
|------------------|----------------------------|--------------------------------------------|
| `PricingCard`    | `components/ui/pricing.tsx` | Plan card with features, CTA, featured state |
| `PricingGrid`    | `components/ui/pricing.tsx` | 2 or 3-column pricing layout              |
| `PricingToggle`  | `components/ui/pricing.tsx` | Monthly/yearly toggle pill                |

### Group 9 · Containers

| Component         | File                   | Purpose                           |
|-------------------|------------------------|-----------------------------------|
| `Card`            | `components/ui/card.tsx`| Editorial container, 7 tones      |
| `CardHeader`      | `components/ui/card.tsx`| Header slot                       |
| `CardTitle`       | `components/ui/card.tsx`| Display-serif title               |
| `CardDescription` | `components/ui/card.tsx`| Muted description                 |
| `CardContent`     | `components/ui/card.tsx`| Body slot                         |
| `CardFooter`      | `components/ui/card.tsx`| Action footer                     |
| `Callout`         | `components/ui/utility.tsx` | Left-border highlighted aside  |

### Group 10 · Forms

| Component     | File                            | Purpose                         |
|---------------|---------------------------------|---------------------------------|
| `Input`       | `components/ui/input.tsx`        | Pill or rule variant            |
| `Textarea`    | `components/ui/input.tsx`        | Multi-line editorial input      |
| `Label`       | `components/ui/input.tsx`        | Uppercase field label           |
| `ContactForm` | `components/ui/contact-form.tsx` | Composed contact form           |

### Group 11 · Utility & State

| Component         | File                          | Purpose                            |
|-------------------|-------------------------------|------------------------------------|
| `LoadingSkeleton` | `components/ui/utility.tsx`    | Pulse placeholder                  |
| `EmptyState`      | `components/ui/utility.tsx`    | Zero-data view                     |
| `ScrollReveal`    | `components/ui/utility.tsx`    | Fade+rise on viewport enter        |

### Group 12 · CTA

| Component    | File                | Purpose                              |
|--------------|---------------------|--------------------------------------|
| `ClosingCTA` | `components/ui/cta.tsx` | Dark ink-panel closing CTA           |
| `Marquee`    | `components/ui/cta.tsx` | Infinite horizontal scroller strip   |

---

## Usage examples

### Hero + primary CTAs

```tsx
import { Hero, HeroIllustration, ItalicAccent, HandUnderline } from "@/components/ui";

<Hero
  eyebrow="Gradevolution · Editorial UI"
  title={<>A warm <ItalicAccent>
    <HandUnderline>component kit</HandUnderline>
  </ItalicAccent> for classrooms.</>}
  lead="Ship an indie-SaaS product without losing the human feel."
  primaryCta={{ label: "Start free →", href: "/signup" }}
  secondaryCta={{ label: "Book a demo", href: "/demo" }}
  illustration={<HeroIllustration />}
/>
```

### Pricing table

```tsx
import { PricingGrid, PricingCard } from "@/components/ui";

<PricingGrid columns={3}>
  <PricingCard name="Solo" price="$0" period="/forever" features={[...]}
    cta={{ label: "Start free →", href: "/signup" }} />
  <PricingCard name="Team" price="$12" period="/teacher / mo" featured
    badge="Most loved" features={[...]}
    cta={{ label: "Start free trial →", href: "/signup?plan=team" }} />
  <PricingCard name="School" price="Talk" period="" features={[...]}
    cta={{ label: "Book a call →", href: "/contact" }} />
</PricingGrid>
```

### FAQ

```tsx
import { FAQ } from "@/components/ui";

<FAQ
  defaultOpen="ai"
  items={[
    { id: "ai", question: "How do you handle AI-written work?", answer: "..." },
    { id: "privacy", question: "Is this FERPA-compliant?", answer: "..." },
  ]}
/>
```

### Closing CTA + footer

```tsx
import { ClosingCTA, Footer } from "@/components/ui";

<ClosingCTA
  headline={<>Grade less. <span className="text-butter italic">Teach more.</span></>}
  subline="Join 12K educators already using Gradevolution."
  primary={{ label: "Start free →", href: "/signup" }}
  secondary={{ label: "Book a walkthrough", href: "/demo" }}
/>

<Footer
  tagline="Editorial indie-SaaS UI, crafted for teaching tools that feel human."
  columns={[...]}
/>
```

---

## Design principles

1. **Warm, not cold.** Cream over pure white, Georgia over Inter, coral over blue.
2. **Commit to one motif.** Pill buttons + rounded cards + thin ink borders, everywhere.
3. **Italic for humanity.** Italic serif accents inside headlines signal a human voice.
4. **Dominance, not equality.** Cream dominates, ink structures, coral/butter/sage accent.
5. **No AI accent lines under titles.** Whitespace does that job here.
6. **Every surface earns its weight.** No text-only sections — add an illustration, stat, or icon chip.

---

## Accessibility

- All interactives reach a visible focus ring (`focus-visible:ring-ink`).
- Radix primitives (Accordion) provide keyboard + screen-reader semantics.
- Color contrast on cream/ink passes WCAG AA; accent-on-accent pairings are decorative only.
- Motion is subtle (Framer Motion) and respects `prefers-reduced-motion` via Next.js default CSS.

---

## Deployment (GitHub + Vercel)

1. Unzip `gradevolution-ui.zip`.
2. Create a new repo named `gradevolution-ui` on GitHub.
3. From the unzipped folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Gradevolution UI library"
   git branch -M main
   git remote add origin git@github.com:<you>/gradevolution-ui.git
   git push -u origin main
   ```
4. Import the repo into Vercel — no env vars needed.

---

## Roadmap

- Dark mode (ink-dominant theme).
- Storybook interactions tests.
- Animated hand-drawn SVG illustrations (replace `<HeroIllustration />`).
- Calendar / scheduling primitive for the demo-booking flow.
- Rubric builder — the flagship feature composition.

---

## License

MIT — use freely for Gradevolution, or swap the tokens and make it yours.
