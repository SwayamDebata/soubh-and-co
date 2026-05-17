/** 16 frames · 5 acts — copy from “How the Sprint Works” V2 brief */

export const ACT_META = [
  {
    num: 1,
    short: "The problem you already know",
    quote: "You felt this on a Saturday in 2024. You've felt it every quarter since.",
  },
  {
    num: 2,
    short: "The decision",
    quote: "You stop scrolling on a LinkedIn post.",
  },
  {
    num: 3,
    short: "Week 1: Strategy",
    quote: "The hardest week of the year. In a good way.",
  },
  {
    num: 4,
    short: "Week 2: Content",
    quote: "From decision to documented voice.",
  },
  {
    num: 5,
    short: "The next 90 days",
    quote: "Where the work compounds.",
  },
];

export const FRAMES = [
  {
    act: 1,
    visual: "cover",
    actIntro: false,
    title: "How the Sprint Works.",
    lead:
      "A 6-minute walk through what happens when a boutique Australian real estate agency goes through a 2-week positioning sprint with Soubh & Co.",
    note: "The reader is you.",
    paragraphs: [],
    psychology: null,
  },
  {
    act: 1,
    visual: "office-saturday",
    actIntro: true,
    title: "It's Saturday morning.",
    paragraphs: [
      "You've just finished an appraisal in your suburb. The vendor was warm, your team was sharp, the comparables were clean.",
      "You walk back to the car already knowing.",
      "They're getting two more proposals. Both from boutiques on the same street. Both saying roughly the same things you said.",
      "By Wednesday, you'll find out you came second on commission.",
    ],
    psychology: {
      text: "Vendors don't choose between agencies. They choose between stories. When three boutiques tell the same story, the only thing left to compete on is price.",
    },
  },
  {
    act: 1,
    visual: "grid-feeds",
    actIntro: false,
    title: "You open Instagram.",
    paragraphs: [
      "You scroll past nine boutique agencies in your area.",
      "Same kitchen island shots. Same SOLD stickers. Same five adjectives in the bios — boutique, local, family-run, passionate, trusted.",
      "You realise you've been one of those nine for the last four years.",
    ],
    psychology: null,
  },
  {
    act: 1,
    visual: "meeting-bubbles",
    actIntro: false,
    title: "Monday morning.",
    paragraphs: [
      'You ask your senior team: "in one sentence, what makes us different?"',
      "Five answers. None of them match.",
      'One of your best agents says: "honestly… we just care more."',
      "You smile, but inside you know: every agency in Australia thinks they care more.",
    ],
    psychology: {
      text: "If your team can't tell vendors what makes you different in a sentence, they're improvising it at every appraisal. Improvisation is the most expensive marketing tactic you'll ever run.",
    },
  },
  {
    act: 2,
    visual: "linkedin-post",
    actIntro: true,
    title: "A few weeks later, you stop scrolling on a LinkedIn post.",
    paragraphs: [
      '"We win on relationships. We just keep losing on commission."',
      "You read it twice. Save it. Come back to it three more times that week.",
      "Eventually, you book a 25-minute call.",
    ],
    psychology: null,
  },
  {
    act: 2,
    visual: "meet-two-pane",
    actIntro: false,
    title: "25 minutes.",
    paragraphs: [
      'No deck. No pitch. No slide saying "Trusted by 500 brands."',
      "Six questions about your agency, your market, your last three appraisals. You answer honestly. By minute 18, you're saying things you haven't said out loud to your team.",
      'By minute 25: "This is what we need."',
    ],
    psychology: {
      text: "A discovery call shouldn't be a sales pitch. The right call leaves you feeling heard, not handled. That feeling is what makes you book the second one.",
    },
  },
  {
    act: 3,
    visual: "two-docs",
    actIntro: true,
    title: "Before sprint week begins, you fill out a 12-question intake form.",
    paragraphs: [
      "While you're doing that, Soubh & Co. is auditing three boutique agencies you compete with, your last 30 days of social, your listing presentations, and how you show up in vendor searches.",
      "By Sunday night, both sides know what they're walking into Monday morning.",
    ],
    psychology: null,
  },
  {
    act: 3,
    visual: "three-doors",
    actIntro: false,
    title: "Monday, 9am.",
    paragraphs: [
      "Soubh shares 3 positioning strategies. Each one ranked by risk.",
      "Safe: Familiar. Defensible. Slow growth. Stretch: Specific. Polarising for the wrong vendors. Faster growth. Bold: Risky for 6 months. Famous within 12.",
      "Three real choices, with real trade-offs in writing.",
      "You go quiet for a bit.",
    ],
    psychology: {
      text: 'Most consultants present one "right" answer. We present three, ranked by risk, so the choice is yours. The decision feels owned, not imposed. That ownership is what makes the strategy stick after we leave.',
    },
  },
  {
    act: 3,
    visual: "meeting-internal",
    actIntro: false,
    title: "Tuesday.",
    paragraphs: [
      "You meet your team without us in the room.",
      "The conversation goes longer than you scheduled. One agent pushes back hard on the Bold option. Another defends it harder. You mostly listen.",
      "By 5pm: the team picks a direction.",
      "Most agencies pick Stretch. Some pick Bold. Almost no one picks Safe — once you see the three options together, Safe stops feeling safe.",
    ],
    psychology: {
      text: "The hardest part of positioning isn't picking the right option. It's getting the team to commit. We stay out of Tuesday's meeting on purpose. The decision has to be yours.",
    },
  },
  {
    act: 3,
    visual: "deck-slides",
    actIntro: false,
    title: "Wednesday and Thursday.",
    paragraphs: [
      "Soubh & Co. takes the direction your team picked and pressure-tests it.",
      "What language locks the strategy? Which words go on the website, the deck, every appraisal call? What does the team refuse to say from now on?",
      "By Thursday evening, the 6-slide positioning deck is locked.",
      "One source of truth. Used in appraisals, onboarding, and team alignment.",
    ],
    psychology: null,
  },
  {
    act: 4,
    visual: "calendar-content",
    actIntro: true,
    title: "While you catch up on listings, Soubh & Co. drafts the first 4 weeks of content.",
    paragraphs: [
      "Instagram. LinkedIn. One weekly long-form.",
      "All built on your locked positioning. All in your voice — calibrated from the workshops, your past content, and the way your team actually talks at the office.",
      "Monday morning, V1 is ready.",
    ],
    psychology: null,
  },
  {
    act: 4,
    visual: "slack-review",
    actIntro: false,
    title: "Tuesday morning.",
    paragraphs: [
      "Soubh walks you through the first 4 weeks of content live. You edit together. Two posts get rewritten. One gets killed.",
      "By the end of the call:",
      "✓ Brand voice guide locked",
      "✓ Month 1 of content scheduled in your accounts",
      "✓ Slack channel active for the next 90 days",
    ],
    psychology: {
      text: "Most content services start with the writer's voice and try to match yours later. We start with yours and stay there. Every batch sounds like the team you already have.",
    },
  },
  {
    act: 4,
    visual: "checklist-done",
    actIntro: false,
    title: "Friday, end of Week 2.",
    paragraphs: [
      "✓ 3 positioning strategies — delivered",
      "✓ 6-slide positioning deck — locked",
      "✓ Brand voice guide — finalised",
      "✓ Month 1 of content — scheduled in your accounts",
      "The sprint is done.",
      "The next 90 days run in the background.",
    ],
    psychology: null,
  },
  {
    act: 5,
    visual: "calendar-day14",
    actIntro: true,
    title: "Two weeks after the sprint.",
    paragraphs: [
      "You run a Tuesday meeting where every agent describes the agency the same way.",
      "First time it's happened in years.",
      "The deck is doing its job.",
    ],
    psychology: {
      text: "Internal alignment is faster than external traction. Most agencies feel it inside two weeks. Vendors feel it by month three.",
    },
  },
  {
    act: 5,
    visual: "stats-90",
    actIntro: false,
    title: "Day 90.",
    paragraphs: [
      "✓ 36 pieces of content published in your voice",
      "✓ Engagement well above your previous baseline",
      "✓ More inbound enquiries from vendors who already know what you stand for",
      "✓ Less commission discounting on appraisals",
      "Final review call. Brand Operating System handed over — templates, voice rules, scheduling system. All yours.",
      "Outcomes vary. What doesn't vary: the strategic decision is locked in writing, used by your whole team, and visible to every vendor who looks you up.",
    ],
    psychology: null,
  },
  {
    act: 5,
    visual: "cta-close",
    actIntro: false,
    title: "Your turn.",
    paragraphs: [
      "Two-week sprint. Three deliverables. Built only for boutique Australian real estate agencies, 5–25 agents.",
      "Founding rate — $5,000 AUD. Two spots left.",
    ],
    psychology: null,
    isClose: true,
  },
];
