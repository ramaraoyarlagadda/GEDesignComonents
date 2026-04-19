import {
  BookOpen,
  Sparkles,
  Target,
  Compass,
  Heart,
  Rocket,
} from "lucide-react";

import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Label,
  Avatar,
  AvatarStack,
  Section,
  SectionLabel,
  Divider,
  DisplayHeadline,
  Eyebrow,
  Lead,
  ItalicAccent,
  HandUnderline,
  GiantNumeral,
  Navbar,
  WordmarkLogo,
  Footer,
  Hero,
  HeroIllustration,
  FeatureCell,
  FeatureGrid,
  FeatureIcon,
  BigStat,
  Testimonial,
  LogoStrip,
  PricingCard,
  PricingGrid,
  FAQ,
  TeamMember,
  TeamGrid,
  ContactForm,
  ClosingCTA,
  Marquee,
  LoadingSkeleton,
  EmptyState,
  ScrollReveal,
  Tooltip,
  Kbd,
  Callout,
  ProcessStep,
  ProcessSteps,
} from "@/components/ui";
import {
  ShowcaseBlock,
  ShowcaseGrid,
  ShowcaseHeading,
} from "@/components/brand/showcase-block";

export default function Home() {
  return (
    <>
      <Navbar
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Components", href: "#components" },
          { label: "Docs", href: "#docs" },
        ]}
        cta={{ label: "Start free", href: "#cta" }}
      />

      {/* HERO */}
      <Hero
        className="bg-cream"
        eyebrow={<SectionLabel>Gradevolution · Component Library</SectionLabel>}
        title={
          <>
            A warm, editorial{" "}
            <ItalicAccent>
              <HandUnderline>component kit</HandUnderline>
            </ItalicAccent>{" "}
            for indie-SaaS classrooms.
          </>
        }
        lead={
          <>
            Every primitive from the Gradevolution pitch deck — buttons,
            pricing, FAQ, empty states — shipped as a typed React library with
            Tailwind, shadcn-style composition, and hand-drawn soul.
          </>
        }
        primaryCta={{ label: "Browse components →", href: "#components" }}
        secondaryCta={{ label: "View on GitHub", href: "#" }}
        illustration={<HeroIllustration />}
        socialProof={
          <div className="flex items-center gap-4">
            <AvatarStack
              avatars={[
                { initials: "AL", tone: "coral" },
                { initials: "MR", tone: "butter" },
                { initials: "JK", tone: "sage" },
                { initials: "TP", tone: "ochre" },
              ]}
            />
            <span className="text-sm text-ink-muted">
              Trusted by 12K+ educators
            </span>
          </div>
        }
      />

      {/* MARQUEE TRUST STRIP */}
      <Section tone="ink" spacing="sm" container={false}>
        <Marquee>
          {[
            "TypeScript",
            "Next.js 14",
            "Tailwind",
            "shadcn-style",
            "Radix",
            "Framer Motion",
            "Accessible",
            "Editorial",
          ].map((w) => (
            <span
              key={w}
              className="font-display italic text-3xl text-cream"
            >
              {w} <span className="text-coral">◆</span>
            </span>
          ))}
        </Marquee>
      </Section>

      {/* ============================================================ */}
      {/*                COMPONENT SHOWCASE                              */}
      {/* ============================================================ */}
      <Section id="components" tone="cream" spacing="lg">
        <div className="max-w-3xl">
          <Eyebrow>◆ Component Inventory</Eyebrow>
          <DisplayHeadline size="display" className="mt-4">
            Every piece of the kit, labeled.
          </DisplayHeadline>
          <Lead className="mt-5">
            Forty components across layout, typography, content, forms,
            feedback, and utility — all built around the same warm cream
            palette and Georgia display serif.
          </Lead>
        </div>

        {/* ----- LAYOUT & CHROME ----- */}
        <ShowcaseHeading
          eyebrow="Group 01"
          description="Top-level page chrome — navbar, footer, wordmark, section wrappers, and dividers."
        >
          Layout &amp; Chrome
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="navbar"
            group="Navigation"
            name="Navbar"
            description="Sticky top bar — wordmark, link cluster, CTA."
            span="full"
          >
            <Navbar
              sticky={false}
              className="!static rounded-2xl border"
              links={[
                { label: "Features", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "About", href: "#" },
              ]}
              cta={{ label: "Start free", href: "#" }}
            />
          </ShowcaseBlock>

          <ShowcaseBlock
            id="wordmark"
            group="Brand"
            name="WordmarkLogo"
            description="Display-serif italic brand wordmark with coral full stop."
          >
            <div className="flex flex-col gap-4 items-start">
              <WordmarkLogo />
              <WordmarkLogo word="Your brand" />
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="section"
            group="Layout"
            name="Section + SectionLabel"
            description="Vertical rhythm container with tonal backgrounds."
          >
            <div className="rounded-2xl border border-ink/10 overflow-hidden">
              <div className="bg-butter/70 px-6 py-6">
                <SectionLabel>Section eyebrow</SectionLabel>
                <div className="font-display italic text-2xl mt-2">
                  Butter tone section
                </div>
              </div>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="divider"
            group="Layout"
            name="Divider"
            description="Thin editorial rule for content breaks."
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm text-ink-soft">Above the rule.</p>
              <Divider />
              <p className="text-sm text-ink-soft">Below the rule.</p>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="footer"
            group="Navigation"
            name="Footer"
            description="Large editorial footer with column links and legal strip."
            span="full"
            bgTone="ink"
          >
            <div className="rounded-2xl overflow-hidden">
              <Footer
                tone="ink"
                tagline="Teaching should feel human. Grading should feel honest."
                columns={[
                  {
                    heading: "Product",
                    links: [
                      { label: "Features", href: "#" },
                      { label: "Pricing", href: "#" },
                      { label: "Changelog", href: "#" },
                    ],
                  },
                  {
                    heading: "Company",
                    links: [
                      { label: "About", href: "#" },
                      { label: "Blog", href: "#" },
                      { label: "Careers", href: "#" },
                    ],
                  },
                  {
                    heading: "Legal",
                    links: [
                      { label: "Privacy", href: "#" },
                      { label: "Terms", href: "#" },
                    ],
                  },
                ]}
                social={[
                  { label: "X", href: "#" },
                  { label: "GitHub", href: "#" },
                ]}
              />
            </div>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- TYPOGRAPHY ----- */}
        <ShowcaseHeading
          eyebrow="Group 02"
          description="Editorial typography system — serif display, small caps eyebrows, italic accents."
        >
          Typography
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="display-headline"
            group="Typography"
            name="DisplayHeadline"
            description="Oversized Georgia-serif headline with italic accents."
            span="full"
          >
            <DisplayHeadline size="display">
              Teaching is{" "}
              <ItalicAccent>
                <HandUnderline>beautifully</HandUnderline>
              </ItalicAccent>{" "}
              hard.
            </DisplayHeadline>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="eyebrow-lead"
            group="Typography"
            name="Eyebrow + Lead + Prose"
            description="Supporting text hierarchy."
          >
            <div className="flex flex-col gap-3">
              <Eyebrow>◆ Eyebrow label</Eyebrow>
              <Lead>
                Lead paragraph — warm, slightly larger, max two lines.
              </Lead>
              <p className="text-sm text-ink-soft max-w-prose">
                Body prose — the default text. Legible, friendly, never
                cold.
              </p>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="giant-numeral"
            group="Typography"
            name="GiantNumeral"
            description="Oversized italic serif numeral for process steps."
          >
            <div className="flex items-end gap-8">
              <GiantNumeral n={1} className="text-coral" />
              <GiantNumeral n={2} className="text-ochre" />
              <GiantNumeral n={3} className="text-sage" />
            </div>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- BUTTONS & BADGES ----- */}
        <ShowcaseHeading
          eyebrow="Group 03"
          description="Pill-shaped buttons with editorial accents, plus tag and badge variants."
        >
          Buttons &amp; Tags
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="button"
            group="Interactive"
            name="Button · variants"
            description="Primary, secondary, outline, ghost, coral, butter — all sizes."
            span="full"
          >
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Start free →</Button>
              <Button variant="secondary">Request demo</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="coral">Coral accent</Button>
              <Button variant="butter">Butter accent</Button>
              <Button variant="link">Plain link</Button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 items-center">
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="md">MD</Button>
              <Button size="lg">LG</Button>
              <Button size="xl">XL</Button>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="badge"
            group="Interactive"
            name="Badge / Tag / Pill"
            description="Small inline labels for status, categories, and meta."
          >
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="outline">◆ Outline</Badge>
              <Badge variant="solid">Solid</Badge>
              <Badge variant="coral">Coral</Badge>
              <Badge variant="butter">Butter</Badge>
              <Badge variant="sage">Sage</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="kbd-tooltip"
            group="Interactive"
            name="Kbd + Tooltip"
            description="Keyboard hint chips and inline tooltips."
          >
            <div className="flex flex-wrap items-center gap-4">
              <div>
                Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open command bar.
              </div>
              <Tooltip label="This is a tooltip">
                <Button size="sm" variant="outline">
                  Hover me
                </Button>
              </Tooltip>
            </div>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- HERO & CONTENT BLOCKS ----- */}
        <ShowcaseHeading
          eyebrow="Group 04"
          description="Composed content blocks — heroes, features, stats, and process steps."
        >
          Content Blocks
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="feature-cell"
            group="Content"
            name="FeatureCell + FeatureGrid"
            description="Icon + heading + description, in grid or row orientation."
            span="full"
          >
            <FeatureGrid columns={3}>
              <FeatureCell
                icon={BookOpen}
                tone="butter"
                title="Smart rubrics"
                description="Reusable grading criteria that auto-populate across assignments."
              />
              <FeatureCell
                icon={Sparkles}
                tone="coral"
                title="Warm feedback"
                description="AI-assisted comments that still sound like you, not a robot."
              />
              <FeatureCell
                icon={Target}
                tone="sage"
                title="Mastery signals"
                description="Track skill growth, not just test scores, over every term."
              />
            </FeatureGrid>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="feature-icon"
            group="Content"
            name="FeatureIcon"
            description="Standalone icon chip in any brand tone."
          >
            <div className="flex flex-wrap gap-3">
              <FeatureIcon icon={Heart} tone="coral" />
              <FeatureIcon icon={Compass} tone="butter" />
              <FeatureIcon icon={Rocket} tone="sage" />
              <FeatureIcon icon={Sparkles} tone="ochre" />
              <FeatureIcon icon={Target} tone="ink" />
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="big-stat"
            group="Content"
            name="BigStat"
            description="Giant numeral + small label for social proof."
          >
            <div className="flex flex-wrap gap-10">
              <BigStat value="12K+" label="Educators" tone="coral" />
              <BigStat value="4.9" label="App-store rating" tone="ochre" />
              <BigStat value="38%" label="Less grading" />
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="process"
            group="Content"
            name="ProcessStep + ProcessSteps"
            description="Numbered how-it-works sequence."
            span="full"
          >
            <ProcessSteps>
              <ProcessStep
                n={1}
                title="Create the rubric"
                description="Drop in criteria or pick a template. Weights auto-balance."
                tone="coral"
              />
              <ProcessStep
                n={2}
                title="Grade in flow"
                description="Keyboard-first interface — rubric on the left, student work on the right."
                tone="ochre"
              />
              <ProcessStep
                n={3}
                title="Return with a nudge"
                description="Warm, specific feedback that travels back to students in one tap."
                tone="sage"
              />
            </ProcessSteps>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- SOCIAL PROOF ----- */}
        <ShowcaseHeading
          eyebrow="Group 05"
          description="Testimonial cards, logo strips, and avatar clusters."
        >
          Social Proof
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="testimonial"
            group="Proof"
            name="Testimonial"
            description="Pull quote with author portrait."
          >
            <Testimonial
              tone="butter"
              quote="It finally feels like a tool built by someone who's stood in front of a class."
              authorName="Ada L."
              authorRole="8th-grade science · Austin, TX"
              avatarInitials="AL"
            />
          </ShowcaseBlock>

          <ShowcaseBlock
            id="logo-strip"
            group="Proof"
            name="LogoStrip"
            description="Ghost wordmark row of clients or partners."
          >
            <LogoStrip
              title="Loved by schools across the country"
              logos={[
                "Lakeview Academy",
                "Northfield HS",
                "River & Pine",
                "Cascade Prep",
                "Old Town Charter",
              ]}
            />
          </ShowcaseBlock>

          <ShowcaseBlock
            id="avatar"
            group="Proof"
            name="Avatar + AvatarStack"
            description="Round portraits with ink border, solo or overlapping."
          >
            <div className="flex items-center gap-6">
              <Avatar size="lg" initials="A+" tone="coral" />
              <Avatar size="lg" initials="B–" tone="butter" />
              <Avatar size="lg" initials="A" tone="sage" />
              <AvatarStack
                avatars={[
                  { initials: "AL", tone: "coral" },
                  { initials: "MR", tone: "butter" },
                  { initials: "JK", tone: "sage" },
                  { initials: "TP", tone: "ochre" },
                ]}
              />
            </div>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- FAQ ----- */}
        <ShowcaseHeading
          eyebrow="Group 06"
          description="Expandable FAQ with plus/minus hand-drawn indicators."
        >
          FAQ
        </ShowcaseHeading>

        <ShowcaseBlock
          id="faq"
          group="Content"
          name="FAQ (Accordion)"
          description="Radix-powered accordion with editorial chrome."
          span="full"
        >
          <FAQ
            defaultOpen="faq-1"
            items={[
              {
                id: "faq-1",
                question: "How does Gradevolution handle AI-written work?",
                answer:
                  "We detect pattern-heavy text and route it to a second-pass rubric that focuses on reasoning and citation quality, not style alone.",
              },
              {
                id: "faq-2",
                question: "Can I import my existing rubrics?",
                answer:
                  "Yes — drag in a CSV, a Google Doc, or even a scanned PDF. We keep your weights and wording intact.",
              },
              {
                id: "faq-3",
                question: "Is this FERPA-compliant?",
                answer:
                  "Fully. Student data is encrypted at rest, never used for model training, and deletable on request.",
              },
            ]}
          />
        </ShowcaseBlock>

        {/* ----- TEAM ----- */}
        <ShowcaseHeading
          eyebrow="Group 07"
          description="Portrait cards for about/team pages."
        >
          Team
        </ShowcaseHeading>

        <ShowcaseBlock
          id="team"
          group="About"
          name="TeamMember + TeamGrid"
          description="Portraits with role and bio."
          span="full"
        >
          <TeamGrid columns={3}>
            <TeamMember
              name="Ananya Rao"
              role="Founder · Classroom"
              bio="Taught middle-school math for seven years before building the tool she wanted."
              initials="AR"
              tone="coral"
            />
            <TeamMember
              name="Jonah Park"
              role="Engineering"
              bio="Previously Replit and Notion. Wants grading to feel like writing, not data entry."
              initials="JP"
              tone="butter"
            />
            <TeamMember
              name="Priya Mehta"
              role="Design"
              bio="Illustrator-turned-product-designer. Draws every icon that ships."
              initials="PM"
              tone="sage"
            />
          </TeamGrid>
        </ShowcaseBlock>

        {/* ----- PRICING ----- */}
        <ShowcaseHeading
          eyebrow="Group 08"
          description="Plan cards with optional featured state and monthly/yearly toggle."
        >
          Pricing
        </ShowcaseHeading>

        <ShowcaseBlock
          id="pricing"
          group="Commerce"
          name="PricingCard + PricingGrid"
          description="Three-tier pricing with a highlighted recommended plan."
          span="full"
        >
          <PricingGrid columns={3}>
            <PricingCard
              name="Solo"
              description="For the one-person department."
              price="$0"
              period="/ forever"
              features={[
                "1 class · up to 32 students",
                "Smart rubrics",
                "Basic warm feedback",
                "CSV export",
              ]}
              cta={{ label: "Start free →", href: "#" }}
            />
            <PricingCard
              name="Team"
              description="For grade-level teams."
              price="$12"
              period="/ teacher / mo"
              badge="Most loved"
              featured
              features={[
                "Everything in Solo",
                "Shared rubric library",
                "AI co-grader",
                "Mastery dashboards",
                "Priority email support",
              ]}
              cta={{ label: "Start free trial →", href: "#" }}
            />
            <PricingCard
              name="School"
              description="District-wide deployment."
              price="Talk"
              period=""
              features={[
                "Everything in Team",
                "SSO + SCIM",
                "FERPA DPA",
                "Dedicated success mgr",
                "Custom rubric training",
              ]}
              cta={{ label: "Book a call →", href: "#" }}
            />
          </PricingGrid>
        </ShowcaseBlock>

        {/* ----- CARDS & CALLOUTS ----- */}
        <ShowcaseHeading
          eyebrow="Group 09"
          description="Generic containers — Card shell, accent tones, callouts."
        >
          Containers
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="card"
            group="Container"
            name="Card · tones"
            description="Cream, paper, ink, coral, butter, sage, ochre."
            span="full"
          >
            <div className="grid md:grid-cols-4 gap-4">
              {(
                ["cream", "paper", "ink", "coral", "butter", "sage", "ochre"] as const
              ).map((t) => (
                <Card key={t} tone={t} padding="md" hover="lift">
                  <CardHeader>
                    <CardTitle className="text-lg">{t}</CardTitle>
                    <CardDescription
                      className={t === "ink" ? "text-cream/70" : undefined}
                    >
                      Card tone preview.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={
                        t === "ink"
                          ? "text-cream/80 text-sm"
                          : "text-ink-soft text-sm"
                      }
                    >
                      Content body.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      size="xs"
                      variant={t === "ink" ? "butter" : "primary"}
                    >
                      Action
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="callout"
            group="Container"
            name="Callout"
            description="Left-border highlighted aside."
          >
            <div className="flex flex-col gap-4">
              <Callout tone="butter" title="Pro tip">
                You can drag any rubric into a new class to clone and adapt it.
              </Callout>
              <Callout tone="sage">Mastery mode is on by default for Team.</Callout>
              <Callout tone="coral" title="Heads up">
                Class sync runs every 10 minutes, not instantly.
              </Callout>
            </div>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- FORMS & CONTACT ----- */}
        <ShowcaseHeading
          eyebrow="Group 10"
          description="Form fields, labels, and a complete contact form composition."
        >
          Forms
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="input-primitive"
            group="Form"
            name="Input + Label + Textarea"
            description="Pill and rule variants."
          >
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="demo-name">Name (pill)</Label>
                <Input id="demo-name" placeholder="Alex Carter" />
              </div>
              <div>
                <Label htmlFor="demo-email">Email (rule)</Label>
                <Input
                  id="demo-email"
                  variant="rule"
                  placeholder="alex@school.edu"
                />
              </div>
              <div>
                <Label htmlFor="demo-msg">Message</Label>
                <Textarea
                  id="demo-msg"
                  placeholder="Tell us about your class…"
                />
              </div>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="contact-form"
            group="Form"
            name="ContactForm"
            description="Composed form with submit state."
          >
            <ContactForm />
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- UTILITY & STATE ----- */}
        <ShowcaseHeading
          eyebrow="Group 11"
          description="Loading, empty, and motion primitives."
        >
          Utility &amp; State
        </ShowcaseHeading>

        <ShowcaseGrid>
          <ShowcaseBlock
            id="loading-skeleton"
            group="State"
            name="LoadingSkeleton"
            description="Pulse placeholder while data streams in."
          >
            <div className="grid gap-3">
              <LoadingSkeleton />
              <LoadingSkeleton lines={4} />
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock
            id="empty-state"
            group="State"
            name="EmptyState"
            description="Zero-data view with a warm, encouraging tone."
          >
            <EmptyState
              title="No assignments yet"
              description="Create your first rubric and invite students to see your class light up here."
              cta={{ label: "Create rubric →", href: "#" }}
              icon="✎"
            />
          </ShowcaseBlock>

          <ShowcaseBlock
            id="scroll-reveal"
            group="State"
            name="ScrollReveal"
            description="Fade + rise as element enters viewport."
            span="full"
          >
            <div className="grid md:grid-cols-3 gap-4">
              <ScrollReveal delay={0}>
                <Card tone="cream" padding="md" className="border">
                  <div className="font-display italic text-xl">First in.</div>
                  <p className="text-sm text-ink-soft mt-1">delay: 0</p>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <Card tone="butter" padding="md">
                  <div className="font-display italic text-xl">
                    Then me.
                  </div>
                  <p className="text-sm text-ink-soft mt-1">delay: 150ms</p>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Card tone="coral" padding="md">
                  <div className="font-display italic text-xl">Last.</div>
                  <p className="text-sm text-ink-soft mt-1">delay: 300ms</p>
                </Card>
              </ScrollReveal>
            </div>
          </ShowcaseBlock>
        </ShowcaseGrid>

        {/* ----- CLOSING CTA ----- */}
        <ShowcaseHeading
          eyebrow="Group 12"
          description="End-of-page CTA to pair with the Footer."
        >
          Closing CTA
        </ShowcaseHeading>

        <ShowcaseBlock
          id="closing-cta"
          group="CTA"
          name="ClosingCTA"
          description="Big serif promise + two buttons, ink or coral variant."
          span="full"
          bgTone="cream"
        >
          <ClosingCTA
            headline={
              <>
                Grade less.{" "}
                <span className="text-butter italic">Teach more.</span>
              </>
            }
            subline="Join 12K educators already using Gradevolution to turn grading from a chore into a conversation."
            primary={{ label: "Start free →", href: "#" }}
            secondary={{ label: "Book a walkthrough", href: "#" }}
          />
        </ShowcaseBlock>
      </Section>

      {/* SITE FOOTER */}
      <Footer
        tagline="Editorial indie-SaaS UI, crafted for teaching tools that feel human."
        columns={[
          {
            heading: "Kit",
            links: [
              { label: "Components", href: "#components" },
              { label: "Tokens", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            heading: "Build",
            links: [
              { label: "GitHub", href: "#" },
              { label: "Docs", href: "#" },
              { label: "Figma file", href: "#" },
            ],
          },
          {
            heading: "Team",
            links: [
              { label: "Story", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
      />
    </>
  );
}
