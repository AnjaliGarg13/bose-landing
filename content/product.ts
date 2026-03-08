// ─────────────────────────────────────────────────────────────────────────────
// BOSE QUIETCOMFORT ULTRA PRO — Content Configuration
// All copy lives here. Swap strings without touching component files.
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT = {
  brand: "Bose",
  name: "QuietComfort Ultra Pro",
  fullName: "Bose QuietComfort Ultra Pro",
  category: "Flagship Wireless Headphones",
  price: "$449",
  tagline: "Built for how your mind actually moves.",
  subTagline: "Clear calls. Seamless switching. All-day control.",
};

export const PRODUCT_ASSETS = {
  heroLifestyle: "/images/hero-lifestyle.png",
  heroProduct: "/images/hero-product.png",
  productDetail: "/images/product-detail.png",
  productVertical: "/images/product-vertical.png",
};

export const HERO = {
  headline: "Built for how your mind actually moves.",
  subhead: "Clear calls. Seamless switching. All-day control.",
  body: "Engineered for professionals whose days move between focus, calls, travel, and decompression — without clean boundaries.",
  ctaPrimary: "Explore Ultra Pro",
  ctaSecondary: "Watch Proof Demo",
  ctaPrimaryHref: "#features",
  ctaSecondaryHref: "#proof",
};

export const PROBLEM = {
  overline: "The Problem",
  headline: "Premium breaks in predictable places.",
  body: "Most flagship headphones fail at exactly the moments that matter most. The failure points are consistent, well-documented, and largely ignored.",
  painPoints: [
    {
      id: "voice",
      label: "01",
      headline: "Your voice disappears in noise.",
      description:
        "Wind. Traffic. Crowded terminals. Standard headphone microphones were not engineered for outdoor professional use. Critical calls fail at the worst moments.",
    },
    {
      id: "switching",
      label: "02",
      headline: "Your audio doesn't follow your work.",
      description:
        "Laptop to phone. Phone to tablet. Back to laptop. Manual Bluetooth intervention breaks workflow. The switching experience is a daily failure that no one has fixed.",
    },
    {
      id: "comfort",
      label: "03",
      headline: "Comfort degrades over time.",
      description:
        "Heat builds. Pressure accumulates. What feels fine at 9am becomes a distraction by 2pm. Long-session comfort was optimized for demos, not workdays.",
    },
  ],
};

export const PRODUCT_PROMISE = {
  overline: "The Product",
  headline: "A flagship built around premium trust.",
  body: "Bose QuietComfort Ultra Pro is engineered for the failure points — not the features list. Each pillar addresses a documented, real-world breakdown in premium performance.",
  pillars: [
    {
      id: "voice",
      number: "I",
      headline: "Your voice stays clear.",
      description: "Even when the world around you is not.",
    },
    {
      id: "switching",
      number: "II",
      headline: "Your workflow stays uninterrupted.",
      description: "Audio moves between devices when your work does.",
    },
    {
      id: "comfort",
      number: "III",
      headline: "Your comfort lasts through the day.",
      description: "Not through the demo. Through the workday.",
    },
  ],
};

export const BENEFITS = [
  {
    id: "clear-calls",
    overline: "Benefit 01",
    headline: "Your voice stays clear, even when the world around you is not.",
    rtb: "A six-microphone beamforming system targets outdoor wind, traffic, and crowd noise — with side-by-side real-world call testing built into launch validation.",
    featureName: "SpeechClear™ Pro",
    featureDetail: "6-mic AI beamforming array",
    imageAlt:
      "Professional on a call outdoors, wearing Bose QuietComfort Ultra Pro, voice clearly transmitted despite urban background noise",
    imageSrc: "/images/hero-lifestyle.png",
    imagePosition: "right" as const,
    stat: "6-mic array",
    statLabel: "outdoor-trained beamforming",
  },
  {
    id: "smart-switching",
    overline: "Benefit 02",
    headline: "Your audio switches when your work switches.",
    rtb: "FlowState Switching moves from laptop audio to an incoming phone call and back again — without forcing manual Bluetooth intervention.",
    featureName: "FlowState™ Switching",
    featureDetail: "Intent-aware device handoff",
    imageAlt:
      "Bose QuietComfort Ultra Pro beside laptop and phone, representing seamless multi-device audio workflow",
    imageSrc: "/images/product-detail.png",
    imagePosition: "left" as const,
    stat: "<0.3s",
    statLabel: "device handoff latency",
  },
  {
    id: "long-session",
    overline: "Benefit 03",
    headline: "You can wear it through the entire workday without fatigue.",
    rtb: "Breathable microfiber cushions, lower-heat contact materials, and fatigue-conscious tuning support long sessions — not short demos.",
    featureName: "Comfort Engineering",
    featureDetail: "Breathable microfiber + heat-managed contact",
    imageAlt:
      "Close detail of Bose QuietComfort Ultra Pro ear cushions, showing premium breathable microfiber construction",
    imageSrc: "/images/product-vertical.png",
    imagePosition: "right" as const,
    stat: "8h+",
    statLabel: "long-session wear tested",
  },
];

export const FEATURES = {
  overline: "Engineering",
  headline: "Four systems. No feature bloat.",
  body: "The QuietComfort Ultra Pro is defined by restraint. Four core systems, each solving a documented failure point.",
  cards: [
    {
      id: "speechclear",
      name: "SpeechClear™ Pro",
      description:
        "Six-microphone AI beamforming. Trained on outdoor voice environments. Tested at 25mph wind and busy street conditions.",
      icon: "mic",
    },
    {
      id: "flowstate",
      name: "FlowState™ Switching",
      description:
        "Context-aware audio handoff across up to three paired devices. Detects workflow shifts — no manual Bluetooth required.",
      icon: "switch",
    },
    {
      id: "anc",
      name: "Bose Adaptive ANC",
      description:
        "Engineered for deep isolation in chaotic environments while staying comfortable over long listening sessions.",
      icon: "wave",
    },
    {
      id: "manual",
      name: "Manual Control Always Available",
      description:
        "Smart when you want it, manual when you need it. Core functions available directly on-device — no app dependency required.",
      icon: "control",
    },
  ],
};

export const FLAGSHIP_CONFIDENCE = {
  overline: "Flagship Confidence",
  headline: "Engineered for ownership. Not just launch.",
  body: "A flagship is defined by what holds up over time. These are the specifics.",
  items: [
    {
      id: "battery",
      label: "Up to 30 hours",
      detail: "Battery life with ANC enabled",
    },
    {
      id: "charge",
      label: "Fast Charge",
      detail: "Meaningful listening time restored in minutes",
    },
    {
      id: "build",
      label: "Reinforced Hinges",
      detail: "Engineered for commuting, travel, and daily use",
    },
    {
      id: "cushions",
      label: "Replaceable Cushions",
      detail: "Designed for long-term ownership, not planned obsolescence",
    },
    {
      id: "tuning",
      label: "Fatigue-Conscious Tuning",
      detail: "Sound stays immersive and clear across hours of continuous use",
    },
    {
      id: "control",
      label: "No App Dependency",
      detail: "Core functions on-device. Works without a phone.",
    },
  ],
};

export const PROOF = {
  overline: "Proof",
  headline: "Show, don't tell.",
  body: "These are not hypothetical conditions. The QuietComfort Ultra Pro was validated in the environments where premium performance typically breaks.",
  cards: [
    {
      id: "wind-test",
      label: "Test 01",
      title: "Wind Call Test",
      condition: "40mph field conditions",
      description:
        "Voice isolation tested against outdoor wind at measured field conditions. Side-by-side comparison with leading competitors recorded and available at launch.",
      badge: "Field Validated",
      badgeVariant: "warm" as const,
      videoSrc: null,
    },
    {
      id: "switching-demo",
      label: "Test 02",
      title: "Switching Demo",
      condition: "3-device workflow simulation",
      description:
        "Laptop → incoming call → back to laptop. Full device handoff sequence recorded in real working conditions. No manual Bluetooth intervention at any step.",
      badge: "Live Demo",
      badgeVariant: "cool" as const,
      videoSrc: null,
    },
    {
      id: "comfort-test",
      label: "Test 03",
      title: "Long-Session Wear Test",
      condition: "8-hour continuous use",
      description:
        "Thermal comfort, pressure distribution, and acoustic performance measured at 2h, 4h, 6h, and 8h intervals. Compared against leading over-ear alternatives.",
      badge: "Wear Tested",
      badgeVariant: "warm" as const,
      videoSrc: null,
    },
  ],
};

export const DESIGN_DETAILS = {
  overline: "Design",
  headline: "Restraint is the design decision.",
  body: "The QuietComfort Ultra Pro is not styled to be noticed. It is built to be worn, trusted, and eventually forgotten — in the best way.",
  details: [
    "Matte dark slate finish — anti-fingerprint, anti-glare",
    "Architectural ear cup silhouette — purposeful geometry, no decorative styling",
    "Breathable knit-microfiber cushions — comfort over long sessions",
    "Precision tactile controls — physical buttons, clear feedback, no touch ambiguity",
    "Restrained premium materials — weight balanced for all-day wear",
  ],
  colorways: ["Carbon", "Slate", "Warm Sand"],
  imageSrc: "/images/hero-product.png",
  imageAlt:
    "Bose QuietComfort Ultra Pro in Carbon colorway, showing matte dark slate finish and architectural ear cup design",
};

export const PACKAGING = {
  overline: "Validation",
  callout: "Wind Isolation Engine.",
  calloutSub: "Validated in 40mph field conditions.",
  detail:
    "Every unit ships with documented test results from outdoor field validation. Not marketing copy. Test data.",
};

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How does FlowState Switching differ from standard Bluetooth multipoint?",
    answer:
      "Standard multipoint requires manual selection — you press a button to switch audio sources. FlowState Switching detects which device is actively in use and routes audio accordingly, with sub-0.3 second handoff. No button press required.",
  },
  {
    id: "faq-2",
    question: "Can I use the headphone without the companion app?",
    answer:
      "Yes. All core functions — ANC control, volume, playback, device switching, and power — are available directly on the headphone. The app provides additional customization but is never required for core operation.",
  },
  {
    id: "faq-3",
    question: "How was the 30-hour battery claim validated?",
    answer:
      "30 hours is measured at moderate volume with Adaptive ANC enabled, under consistent testing conditions. Battery life varies with volume, ANC intensity, and connected device behavior. Fast Charge restores approximately 2.5 hours of listening from a 15-minute charge.",
  },
  {
    id: "faq-4",
    question: "What does 'fatigue-conscious tuning' mean in practice?",
    answer:
      "It means the sound signature is calibrated for long sessions — not for short high-impact demos. Bass is present but not fatiguing. Treble is clear but not sharp over time. The goal is clarity that holds up across a full workday.",
  },
  {
    id: "faq-5",
    question: "Are the ear cushions replaceable, and how?",
    answer:
      "Yes. Cushions attach with a tool-free magnetic connection. Replacement cushions are available directly from Bose. This is a deliberate ownership decision — not a repair concession.",
  },
  {
    id: "faq-6",
    question: "How does SpeechClear Pro perform against other high-mic-count competitors?",
    answer:
      "Competitors have moved toward higher mic counts (12+) optimized primarily for ANC. SpeechClear Pro's six-microphone array is trained specifically for outdoor voice environments — wind, traffic, and crowd noise — with launch validation data available. Count alone is not the performance metric.",
  },
];

export const FINAL_CTA = {
  overline: "QuietComfort Ultra Pro",
  headline: "For professionals who need their tools to work without hesitation.",
  subhead:
    "Built around the moments premium performance typically fails. Engineered to hold up over time.",
  ctaPrimary: "Order Now — $449",
  ctaSecondary: "Explore Full Specs",
  ctaPrimaryHref: "#order",
  ctaSecondaryHref: "#features",
};

export const FOOTER = {
  brand: "Bose",
  legal: "© 2026 Bose Corporation. All rights reserved.",
  tagline: "Better Sound Through Research.",
  links: [
    { label: "Support", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};
