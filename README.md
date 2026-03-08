# Bose QuietComfort Ultra Pro — Product Launch Landing Page

**Live site → [anjaligarg.me/bose-landing](http://anjaligarg.me/bose-landing/)**

A premium product launch landing page built as part of the Kellogg MBA AI Marketing Simulation. This project bridges strategic brand positioning and production-quality front-end engineering — translating a full marketing concept board into a deployable, interactive product experience.

---

## What This Is

This landing page is the final artifact of a multi-phase marketing simulation in which I played the role of a product strategist and creative director launching a new flagship product for Bose.

The product — **Bose QuietComfort Ultra Pro** — is a fictional flagship wireless headphone engineered specifically for high-performing professionals: consultants, product managers, engineers, founders, and hybrid workers who treat audio as performance infrastructure, not entertainment.

The simulation required moving from raw market research through customer segmentation, qualitative insight synthesis, ICP development, concept ideation, and competitive positioning — before landing on a final product concept and campaign. This page is that campaign made real.

---

## The Strategic Foundation

Every design and copy decision on this page traces back to documented research.

**Target segment:** C1 True Loyalists (28.8% of the market, highest scores across sound quality, brand reputation, stylishness, and perceived value). Modeled through persona **Aisha Rao** — 34, Product Strategy Lead, Chicago.

**Three critical failure points the product is built around:**
1. Voice breakdown in wind and crowd noise during professional calls
2. Clunky manual Bluetooth switching between work devices
3. Comfort degradation over long-session wear

**Product positioning:** Performance infrastructure — not a consumer gadget. The tagline *"Built for how your mind actually moves"* was validated against ICP feedback for credibility, restraint, and proof-orientation before it made it onto the page.

**ICP feedback loop:** After an initial concept review, simulated ICP feedback flagged over-branded feature names, soft "designed for" language, and a lack of grounded proof. Every one of those notes is reflected in what shipped — fewer feature names, concrete reasons to believe, an explicit proof section, and on-device manual control as a stated guarantee.

---

## What Was Built

A full Next.js landing page with 13 sections, built from a clean content config layer so every string, headline, and proof claim lives in one place and can be updated without touching component code.

**Sections:**
- Hero with full-bleed lifestyle imagery
- Problem — three documented failure points
- Product Promise — three strategic pillars
- Three benefit sections with verbatim ICP-revised language and reasons to believe
- Features — four cards, deliberately restrained
- Flagship Confidence — six ownership trust cues (battery, fast charge, hinges, cushions, tuning, manual control)
- Proof / Validation — three test cards with real-world condition specs
- Design Details — materials, finish, colorways
- Packaging validation callout
- FAQ — keyboard-accessible accordion
- Final CTA

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Hosting | GitHub Pages via GitHub Actions |

The page is statically exported and deployed automatically on every push to `main` via a GitHub Actions workflow.

---

## Design Direction

The visual system is built around restraint. The goal was an Apple-level product page in polish, but warmer and more engineering-led — not a startup landing page, not a consumer hype site.

- **Palette:** Matte void `#08080A`, warm off-white `#F0EDE8`, muted warm gold accent `#C4A97D` used sparingly
- **Typography:** Inter, light weight, tight tracking — never bold headlines, never centered copy
- **Motion:** Scroll-triggered fade-ins, staggered grid reveals, subtle hover lifts — no scroll-jacking
- **Accessibility:** Semantic HTML, `aria-labelledby` on every section, keyboard-accessible FAQ accordion, skip-to-content link, `prefers-reduced-motion` respected

---

## Running Locally

```bash
git clone https://github.com/AnjaliGarg13/bose-landing.git
cd bose-landing
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Metadata, fonts, body
│   └── page.tsx            # Section composition
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # One file per page section
│   └── ui/                 # Button, FeatureCard, ProofCard, FadeIn, etc.
├── content/
│   └── product.ts          # All copy and asset paths in one place
├── lib/
│   └── imgSrc.ts           # Base path utility for GitHub Pages deployment
└── .github/workflows/
    └── deploy.yml          # Auto-deploy to GitHub Pages on push to main
```

---

## Context

This project was completed as part of **AIML 901 — AI for Marketing**, a Kellogg MBA elective focused on applying AI tools across the full marketing workflow: research synthesis, segmentation, insight generation, concept development, creative production, and campaign execution.

The simulation covered:
- Quantitative segmentation (cluster analysis, perceptual mapping)
- Qualitative insight synthesis across 13 interview transcripts
- ICP development and persona modeling
- New product concept ideation and competitive scoring
- Concept board development
- Ad campaign creation with ICP feedback iteration
- Landing page production

This landing page is the final deliverable — the point where market research becomes a real product story.
