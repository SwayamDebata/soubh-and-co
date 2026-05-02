import { useMemo, useState } from "react";
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.png";
import img5 from "./assets/image5.jpg";
import img6 from "./assets/image6.png";
import img7 from "./assets/image7.jpg";
import img8 from "./assets/image8.jpg";
import img9 from "./assets/image9.png";
import img10 from "./assets/image10.png";
import img11 from "./assets/image11.png";
import img12 from "./assets/image12.png";
import img13 from "./assets/image13.jpg";
import img14 from "./assets/image14.png";

const LOGO_CLIENTS = [
  "Zammit Real Estate",
  "The SMSF Property Guy",
  "Buyer's Agent Investing",
  "Arum & Co",
  "Carismatic",
];

const CHECKLIST_ITEMS = [
  "Vendors can't tell what makes you different from the agency next door",
  "Every agent on your team describes the business differently",
  "Your social posts are just listing photos — there's no story",
  "You're getting beaten on commission, not winning on value",
  "You've grown the team but the brand still feels like a startup",
  'You "do everything for everyone" and it shows in your marketing',
];

const QUIZ_QUESTIONS = [
  "Could a vendor describe what makes your agency different from the franchise down the road — in one sentence?",
  "When you compete head-to-head, do vendors choose you for a clear, specific reason (not just rapport)?",
  "Can you name 3 things your agency says no to — segments, suburbs, or property types?",
  "Does every agent and admin describe the agency the same way?",
  "Do you have a documented brand voice or messaging guide?",
  "Is every piece of social content tied to a clear positioning story (not just listing photos)?",
  "Do you have a content plan for the next 30 days mapped to your positioning?",
  "Do you have a written \"ideal vendor profile\"?",
  "When you write a listing description, are you writing to that specific vendor (not \"everyone\")?",
  "Are you winning vendors on value rather than commission discounts in over half your appraisals?",
];

const FAQ_ITEMS = [
  {
    q: "Why only real estate? Why only Australia?",
    a: "Because we're not trying to be a marketing agency. We're trying to be the marketing agency for one specific kind of business. The deeper the niche, the better the work.",
  },
  {
    q: "Do you write our website?",
    a: "The sprint covers positioning, the deck, and the content. The homepage rewrite isn't included — most boutique agencies get more leverage from social and listing presentations. We'll quote that separately.",
  },
  {
    q: "What if our team can't agree on the positioning?",
    a: "That's exactly why the deck exists. The sprint is designed to force the decision and document it so it sticks.",
  },
  {
    q: "Do you take on franchise offices (Ray White, McGrath, etc.)?",
    a: "No. Their brand is locked. We work with independents and boutiques only.",
  },
  {
    q: "What if I miss a workshop?",
    a: "Every session is recorded. But it's a sprint — if you can't commit to four sessions in two weeks, this isn't for you.",
  },
  {
    q: "Can we start with just the strategy and add content later?",
    a: "Not at founding pricing. The $5K rate is for the full sprint only.",
  },
];

const DELIVERABLES = [
  {
    title: "3–4 Positioning Strategies, Ranked by Risk",
    body: "We analyse your last 90 days of marketing, your recent listings, your competitors, and your intake responses. Then we present 3–4 distinct positioning bets — each labelled Safe, Stretch, or Bold.",
    image: img3,
  },
  {
    title: "A 6-Slide Internal Positioning Deck",
    body: "Nobody reads a 50-slide brand guide. Six slides with the exact words for what you do, who it's for, why you, and how you say it. Drop it in your next sales meeting. Watch your team finally tell the same story.",
    image: img4,
  },
  {
    title: "3 Months of Content, Scheduled in Your Voice",
    body: "~36 pieces of content (3/week) across Instagram, LinkedIn, and one weekly long-form. Mapped to your new positioning. Written and scheduled by us. Reviewed monthly.",
    image: img5,
  },
];

const HERO_BODY =
  "Soubh & Co. is a positioning consultancy for boutique Australian real estate agencies. In two weeks, we find what actually makes you different — and put it in front of the right vendors for the next 90 days.";

const STATS_COLUMNS = [
  {
    label: "The Real Estate Positioning Sprint",
    body: HERO_BODY,
    stat: "2 weeks",
  },
  {
    label: DELIVERABLES[2].title,
    body: DELIVERABLES[2].body,
    stat: "90 days",
  },
  {
    label: DELIVERABLES[0].title,
    body: DELIVERABLES[0].body,
    stat: "3–4",
  },
];

const WEEK1_ROWS = [
  { day: "Mon", title: "Workshop 1", badge: "(75 min)", desc: "Present 3–4 positioning options" },
  { day: "Tue", title: "Internal team meeting", badge: null, desc: "(without us) — Choose a direction" },
  { day: "Wed", title: "Workshop 2", badge: "(75 min)", desc: "Refine differentiation + voice" },
  { day: "Thu", title: "Workshop 3", badge: "(75 min)", desc: "Lock the deck" },
  { day: "Fri", title: "We start drafting the content engine", badge: null, desc: "" },
];

const WEEK2_ROWS = [
  { day: "Mon", title: "First 4 weeks of content drafted", badge: null, desc: "" },
  { day: "Tue", title: "Live review", badge: "(60 min)", desc: "V1 content + voice guide" },
  { day: "Wed–Thu", title: "Async revisions", badge: null, desc: "" },
  { day: "Fri", title: "Final feedback", badge: null, desc: "Deck + voice guide locked." },
];

const INLINE_TESTIMONIALS = [
  {
    text: "I've been working with Soubh for years and I still can't say his name right. But I can tell you this: his work is **unforgettable**. That's really all you need to know.",
    name: "Mark Zammit",
    role: "Zammit Real Estate",
    initials: "MZ",
  },
  {
    text: "We had great results but nobody knew why we were different. After the sprint, **every agent on the team tells the same story**.",
    name: "[Placeholder Name]",
    role: "[Agency]",
    initials: "SA",
  },
  {
    text: "The positioning strategies we got weren't generic — they were built around our market, our competitors, and our actual clients. We chose the Bold option. **Best decision we've made.**",
    name: "[Placeholder Name]",
    role: "[Agency]",
    initials: "TB",
  },
  {
    text: "In two weeks we had more clarity on our brand than we'd had in five years of running the agency.",
    name: "[Placeholder Name]",
    role: "[Agency]",
    initials: "JC",
  },
];

const GRID_TESTIMONIALS = [
  {
    quote:
      "I've been working with Soubh for years and I still can't say his name right. But I can tell you this: his work is unforgettable. That's really all you need to know.",
    name: "Mark Zammit",
    title: "Principal",
    company: "Zammit Real Estate",
    highlight: "unforgettable",
    avatarSrc: img6,
  },
  {
    quote:
      "The sprint forced us to pick a lane. Our listing presentations finally sound like us — not a template from 2014.",
    name: "[Name]",
    title: "[Title]",
    company: "[Agency]",
    highlight: null,
    avatarSrc: img7,
  },
  {
    quote:
      "We stopped competing on commission the month the new positioning went live. Vendors cite our niche before we mention fees.",
    name: "[Name]",
    title: "[Title]",
    company: "[Agency]",
    highlight: null,
    avatarSrc: img8,
  },
  {
    quote:
      "Six slides beat our fifty-page brand PDF. The team actually uses it.",
    name: "[Name]",
    title: "[Title]",
    company: "[Agency]",
    highlight: null,
    avatarSrc: img9,
  },
  {
    quote:
      "Content finally matches what we say in appraisals. One story, everywhere.",
    name: "[Name]",
    title: "[Title]",
    company: "[Agency]",
    highlight: null,
    avatarSrc: img10,
  },
  {
    quote:
      "Content finally matches what we say in appraisals. One story, everywhere.",
    name: "[Name]",
    title: "[Title]",
    company: "[Agency]",
    highlight: null,
    avatarSrc: img11,
  },
];

const content = "mx-auto max-w-[720px] px-6";
const contentWide = "mx-auto max-w-[1200px] px-6";

const CALENDLY_URL =
  "https://calendly.com/hello-iamsoubh/positioning-chat-soubh-co?month=2026-05";

/** Fletch-style: thick black stroke + rounded corners */
const ctaPrimary =
  "inline-flex flex-col items-center justify-center rounded-xl border-[3px] border-dark bg-orange px-6 py-3.5 text-center font-body text-sm font-bold text-dark shadow-none transition-colors duration-150 hover:bg-dark hover:text-white";
const ctaSecondary =
  "inline-flex items-center justify-center rounded-xl border-[3px] border-dark bg-white px-6 py-3.5 text-center font-body text-sm font-bold text-dark shadow-none transition-colors duration-150 hover:bg-dark hover:text-white";

const OFFER_INTRO =
  "A focused two-week process to lock your positioning, align your whole team on it, and run it across 3 months of scheduled content — without you lifting a finger.";

const OFFER_WHAT_ITEMS = [
  {
    title: "2 weeks of live and async work with our team",
    body: "Three workshops to review your strategic positioning options, align on your messaging, and build the story you'll tell vendors, the team, and the market.",
  },
  {
    title: "A documented internal positioning deck",
    body: "6 slides. Used by your principal at the next sales meeting. Used by your agents the next time they pitch.",
  },
  {
    title: "3 months of content, scheduled in your voice",
    body: "Instagram, LinkedIn, and one weekly long-form. Aligned to your new positioning. We write it. We schedule it. You approve it.",
  },
];

const PRICING_TIERS = [
  {
    key: "founding",
    name: "Founding — first 3 clients only",
    detail: "AUD — Founding rate, first 3 clients only",
    price: "$5,000",
    barClass: "bg-orange",
    tag: "3 spots left",
  },
  {
    key: "boutique",
    name: "Boutique (5–10 agents, < $4M GCI)",
    detail: "",
    price: "$8,500",
    barClass: "bg-[#FFD4BC]",
  },
  {
    key: "established",
    name: "Established (10–20 agents, $4M–$10M GCI)",
    detail: "",
    price: "$14,500",
    barClass: "bg-[#C4C4C4]",
  },
  {
    key: "scaling",
    name: "Scaling (20+ agents, $10M+ GCI)",
    detail: "",
    price: "$22,000",
    barClass: "bg-dark",
  },
];

function renderBoldSegments(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className="text-orange">
          {m[1]}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function Nav() {
  const linkClass =
    "font-body text-sm text-mid transition-colors duration-150 hover:text-dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <a href="#" className="font-display text-base font-semibold tracking-tight text-dark">
          Soubh &amp; Co.
        </a>
        <nav className="hidden flex-1 justify-center gap-8 md:flex" aria-label="Primary">
          <a href="#before-after" className={linkClass}>
            Before/After
          </a>
          <a href="#sprint" className={linkClass}>
            Sprint
          </a>
          <a href="#pricing" className={linkClass}>
            Pricing
          </a>
          <a href="#faqs" className={linkClass}>
            FAQs
          </a>
        </nav>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={`${ctaPrimary} shrink-0 px-4 py-2`}>
          Reserve your sprint
          <span className="mt-0.5 block font-body text-[10px] font-normal opacity-90">
            (Founding pricing — 3 spots)
          </span>
        </a>
      </div>
    </header>
  );
}

function LogoMarquee() {
  const text = `${LOGO_CLIENTS.join(" · ")} · `;
  const segment = (
    <span className="shrink-0 whitespace-nowrap pr-12 font-display text-sm font-semibold text-mid opacity-70">
      {text}
    </span>
  );
  return (
    <div className="overflow-hidden border-t border-border pt-10">
      <p className="mb-5 text-center font-body text-[11px] uppercase tracking-[0.2em] text-mid">
        Trusted by independent agencies across Australia
      </p>
      <div className="flex w-max animate-marquee">
        {segment}
        {segment}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-border pb-0 pt-16 md:pt-24">
      <div className={contentWide}>
        <h1 className="max-w-[920px] font-display text-[clamp(2.75rem,6vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-dark">
          Your agency sounds like every other agency on the high street.
        </h1>
        <p className="mt-6 max-w-[640px] font-body text-lg font-normal leading-relaxed text-mid md:text-xl">
          {HERO_BODY}
        </p>
        <div className="mt-10 flex flex-wrap items-stretch gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            Reserve your sprint
            <span className="mt-1 font-body text-[11px] font-normal opacity-90">
              (Founding pricing — 3 spots)
            </span>
          </a>
          <a href="#before-after" className={ctaSecondary}>
            See past work →
          </a>
        </div>
        <LogoMarquee />
      </div>
    </section>
  );
}

function StatsThreeCol() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <div className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {STATS_COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col px-0 py-10 md:px-10 md:py-8">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-dark">
                {col.label}
              </p>
              <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-mid md:text-[15px]">
                {col.body}
              </p>
              <p className="mt-8 font-display text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
                {col.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialThreeCards() {
  const items = INLINE_TESTIMONIALS.slice(0, 3);
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name + item.initials}
              className="flex flex-col border border-border bg-white p-6"
            >
              <p className="font-body text-sm leading-relaxed text-dark">
                {renderBoldSegments(item.text)}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] font-body text-xs font-medium text-mid">
                  {item.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">{item.name}</p>
                  <p className="font-body text-xs text-mid">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section id="before-after" className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
          Before / After
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-mid">
          Placeholder case studies — swap in your wins once photography and
          metrics are cleared.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden border border-border">
            <img src={img1} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="relative z-10 border-t border-border bg-white px-4 py-3 font-body text-xs font-medium uppercase tracking-wide text-mid">
              Before — Agency website placeholder
            </span>
          </div>
          <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden border border-border">
            <img src={img2} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="relative z-10 border-t border-border bg-white px-4 py-3 font-body text-xs font-medium uppercase tracking-wide text-mid">
              After — Agency website placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-mid" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OfferBlockThreeColumn() {
  return (
    <section id="sprint" className="scroll-mt-14 border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <div className="overflow-hidden rounded-2xl border-[3px] border-dark bg-white">
          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="p-8 md:p-10 lg:p-12">
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-dark md:text-[2.25rem]">
                <span className="block">The Real Estate</span>
                <span className="block">Positioning Sprint</span>
              </h2>
              <p className="mt-6 font-body text-[15px] leading-relaxed text-mid md:text-base">
                {OFFER_INTRO}
              </p>
            </div>
            <div className="p-8 md:p-10 lg:p-12">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-dark">
                What you get:
              </p>
              <ul className="mt-6 space-y-10">
                {OFFER_WHAT_ITEMS.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckIcon />
                    <div>
                      <p className="font-body text-sm font-bold leading-snug text-dark">{item.title}</p>
                      <p className="mt-2 font-body text-sm leading-relaxed text-mid">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div id="pricing" className="scroll-mt-14 p-8 md:p-10 lg:p-12">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-dark">
                Pricing tiers based on your agency size:
              </p>
              <p className="mt-2 font-body text-sm italic text-mid">
                (and the resulting complexity &amp; impact)
              </p>
              <div className="mt-8 space-y-4">
                {PRICING_TIERS.map((tier) => (
                  <div
                    key={tier.key}
                    className="relative flex gap-0 overflow-hidden border border-border bg-white"
                  >
                    <div className={`w-1.5 shrink-0 self-stretch ${tier.barClass}`} aria-hidden />
                    <div className="min-w-0 flex-1 py-4 pl-4 pr-4">
                      {tier.tag ? (
                        <span className="absolute right-3 top-3 bg-orange px-2 py-0.5 font-body text-[10px] font-bold uppercase text-white">
                          {tier.tag}
                        </span>
                      ) : null}
                      <p className="pr-20 font-body text-sm font-bold leading-snug text-dark">{tier.name}</p>
                      {tier.detail ? (
                        <p className="mt-1 font-body text-xs text-mid">{tier.detail}</p>
                      ) : null}
                      <p className="mt-3 font-display text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
                        {tier.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-body text-xs leading-relaxed text-mid">
                All prices AUD, ex-GST. 50% on signing, 50% at start of month 2. Prices published because we have
                nothing to hide.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 border-t border-border bg-[#FAFAFA] px-6 py-8 md:px-10">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={ctaPrimary}>
              Reserve your sprint
              <span className="mt-1 font-body text-[11px] font-normal opacity-90">
                (Founding pricing — 3 spots)
              </span>
            </a>
            <a href="#quiz" className={ctaSecondary}>
              Take the 2-minute quiz →
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {DELIVERABLES.map((d) => (
            <div key={d.title} className="overflow-hidden rounded-xl border-2 border-dark">
              <div className="aspect-[4/3] w-full">
                <img src={d.image} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GRID_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function WeekCell({ row }) {
  const highlight =
    row.title.includes("Workshop") || row.title === "Live review";
  return (
    <div className="min-h-[100px] border-border p-3 md:min-h-[140px] md:border-l md:border-dashed md:p-4">
      <p className="font-body text-[11px] font-bold uppercase tracking-wide text-mid">{row.day}</p>
      <p
        className={`mt-2 font-body text-sm font-bold leading-snug ${
          highlight ? "text-orange" : "text-dark"
        }`}
      >
        {row.title}
      </p>
      {row.badge ? (
        <p className="mt-1 font-body text-xs text-mid">{row.badge}</p>
      ) : null}
      {row.desc ? (
        <p className="mt-2 font-body text-xs leading-relaxed text-mid">{row.desc}</p>
      ) : null}
    </div>
  );
}

function SprintTimeline() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
          Here&apos;s exactly what the sprint looks like
        </h2>

        <div className="relative mt-12 rounded-2xl border-[3px] border-dark bg-white p-8 pt-10 md:p-10 md:pt-12">
          <span className="absolute -top-3 left-8 inline-flex rounded-lg border-2 border-dark bg-white px-3 py-1 font-display text-xs font-bold tracking-tight text-dark md:left-10">
            Pre-Work
          </span>
          <div className="mt-4 grid gap-10 border-t border-border pt-10 md:grid-cols-2 md:gap-12">
            <div>
              <p className="font-body text-sm font-bold text-dark">Your team</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-mid">
                15-min intake form + send listing presentations + last 30 days of social
              </p>
            </div>
            <div>
              <p className="font-body text-sm font-bold text-dark">Our team</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-mid">
                Audit competitors, social, REA/Domain footprint, 5 comparable agencies
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border-[3px] border-dark bg-white">
          <div className="hidden grid-cols-6 border-b border-border bg-[#FAFAFA] md:grid">
            <div className="border-r border-border" />
            {GRID_DAYS.map((d) => (
              <div
                key={d}
                className="border-l border-dashed border-border px-3 py-3 text-center font-body text-[11px] font-bold uppercase tracking-wide text-mid"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-6">
            <div className="flex flex-col border-r border-border p-4">
              <span className="inline-flex w-fit rounded-lg border-2 border-dark bg-[#FFE8DE] px-2 py-1.5 font-body text-[10px] font-bold uppercase leading-tight tracking-wide text-dark">
                Week 01 — Strategy
              </span>
            </div>
            {WEEK1_ROWS.map((row) => (
              <WeekCell key={row.day + row.title} row={row} />
            ))}
          </div>
          <div className="hidden border-t border-border md:grid md:grid-cols-6">
            <div className="flex flex-col border-r border-border p-4">
              <span className="inline-flex w-fit rounded-lg border-2 border-dark bg-[#FFF3E0] px-2 py-1.5 font-body text-[10px] font-bold uppercase leading-tight tracking-wide text-dark">
                Week 02 — Content
              </span>
            </div>
            {WEEK2_ROWS.map((row) => (
              <WeekCell key={row.day + row.title} row={row} />
            ))}
          </div>
          <div className="border-t border-border p-6 md:hidden">
            <p className="font-body text-xs font-bold uppercase text-mid">Week 01 — Strategy</p>
            <div className="mt-4 space-y-4">
              {WEEK1_ROWS.map((row) => (
                <div key={row.day} className="border-b border-border pb-4 last:border-0">
                  <WeekCell row={row} />
                </div>
              ))}
            </div>
            <p className="mt-8 font-body text-xs font-bold uppercase text-mid">Week 02 — Content</p>
            <div className="mt-4 space-y-4">
              {WEEK2_ROWS.map((row) => (
                <div key={row.day} className="border-b border-border pb-4 last:border-0">
                  <WeekCell row={row} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border-[3px] border-dark bg-white">
          <div className="aspect-[21/9] max-h-48 w-full border-b border-border md:max-h-52">
            <img src={img14} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-8 md:p-10">
            <span className="inline-flex rounded-lg border-2 border-dark bg-[#FFE8DE] px-2 py-1.5 font-body text-[10px] font-bold uppercase tracking-wide text-dark">
              Months 01–03 — Content Engine
            </span>
            <ul className="mt-6 space-y-3 font-body text-sm text-mid">
              <li>Weekly content batches delivered. Scheduled by us.</li>
              <li>Monthly Loom report + 30-min review call.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemChecklist() {
  const [checked, setChecked] = useState(() => CHECKLIST_ITEMS.map(() => false));
  const count = checked.filter(Boolean).length;
  const message =
    count === 0
      ? { kind: "zero", text: "😊 No problem!" }
      : count <= 2
        ? { kind: "early", text: "You've got early signs of a positioning problem." }
        : { kind: "serious", text: "😬 You've got a positioning problem. We can fix it." };

  const toggle = (i) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
              Do you have a positioning problem?
            </h2>
            <p className="mt-3 font-body text-sm italic text-mid">(Check all that apply)</p>
            <ul className="mt-8">
              {CHECKLIST_ITEMS.map((item, i) => (
                <li key={item} className="border-t border-border py-4 first:border-t-0 first:pt-0">
                  <label className="group flex cursor-pointer items-start gap-4">
                    <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} className="peer sr-only" />
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-dark transition-colors peer-checked:border-orange peer-checked:bg-orange peer-focus-visible:ring-2 peer-focus-visible:ring-dark peer-focus-visible:ring-offset-2"
                      aria-hidden
                    >
                      {checked[i] && (
                        <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 12 10" fill="none">
                          <path
                            d="M1 5l3.5 3.5L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`font-body text-[15px] leading-snug transition-colors ${
                        checked[i] ? "text-orange" : "text-dark group-hover:text-orange"
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              {message.kind === "zero" && (
                <p className="font-body text-base text-mid">{message.text}</p>
              )}
              {message.kind === "early" && (
                <p className="font-body text-base text-dark">{message.text}</p>
              )}
              {message.kind === "serious" && (
                <p className="font-display text-xl font-semibold text-dark">{message.text}</p>
              )}
            </div>
            <a
              href="#quiz"
              className="mt-8 inline-block font-body text-sm font-semibold text-orange underline underline-offset-4 transition-colors hover:text-dark"
            >
              Take the 2-minute quiz →
            </a>
          </div>
          <div className="flex flex-col justify-center border border-border bg-[#FAFAFA] p-2 lg:min-h-[420px]">
            <div className="relative flex flex-1 min-h-[280px] items-center justify-center overflow-hidden border border-border bg-white p-8">
              <img src={img4} alt="" className="max-h-80 w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function scoreAnswer(value) {
  if (value === "yes") return 3;
  if (value === "sometimes") return 1;
  return 0;
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [pending, setPending] = useState(null);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("idle");

  const totalSteps = QUIZ_QUESTIONS.length;
  const isDone = step >= totalSteps;
  const score = useMemo(
    () => answers.reduce((acc, a) => acc + scoreAnswer(a), 0),
    [answers]
  );
  const progress = isDone ? 100 : ((step + 1) / totalSteps) * 100;
  const result =
    score <= 10
      ? {
          emoji: "🟥",
          title: "You're Invisible.",
          body: "You don't have a positioning yet. Everything is on the table — but another agency in your market is about to plant a flag first.",
        }
      : score <= 20
        ? {
            emoji: "🟧",
            title: "You're Known, but Not Different.",
            body: "You have results. But the team isn't aligned and the marketing tells five different stories.",
          }
        : {
            emoji: "🟨",
            title: "You're Growing, but Unfocused.",
            body: "You have positioning instincts and momentum. The next stage is choosing what to give up.",
          };

  const goNext = () => {
    if (pending == null) return;
    setAnswers((prev) => [...prev, pending]);
    setPending(null);
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setPending(null);
    setEmail("");
    setEmailStatus("idle");
  };

  const submitEmail = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailStatus("sent");
  };

  return (
    <section id="quiz" className="scroll-mt-14 border-b border-border bg-white py-20 md:py-28">
      <div className={content}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-dark">
          Does your agency have a positioning problem?
        </h2>
        <p className="mt-2 font-body text-sm italic text-mid">A 2-minute self-diagnostic.</p>
        <div className="mb-10 mt-8 h-px w-full bg-border">
          <div className="h-full bg-orange transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        {!isDone ? (
          <div>
            <p className="mb-8 font-display text-xl font-semibold leading-snug text-dark">
              {QUIZ_QUESTIONS[step]}
            </p>
            <div className="flex flex-wrap gap-3">
              {["Yes", "Sometimes", "No"].map((label) => {
                const v = label === "Yes" ? "yes" : label === "Sometimes" ? "sometimes" : "no";
                const selected = pending === v;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setPending(v)}
                    className={`border px-6 py-3 font-body text-sm transition-colors ${
                      selected
                        ? "border-dark bg-dark text-white"
                        : "border-border bg-white text-dark hover:border-dark"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={goNext}
              disabled={pending == null}
              className="mt-8 bg-dark px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-orange disabled:opacity-35"
            >
              Next →
            </button>
          </div>
        ) : (
          <div>
            <p className="font-display text-7xl font-extrabold leading-none text-orange">{score}</p>
            <p className="mt-2 text-3xl">{result.emoji}</p>
            <h3 className="mt-4 font-display text-2xl font-bold text-dark">{result.title}</h3>
            <p className="mt-3 max-w-[480px] font-body leading-relaxed text-mid">{result.body}</p>
            <form onSubmit={submitEmail} className="mt-10">
              <label className="mb-2 block font-body text-sm font-medium text-dark">
                Get your full diagnosis sent to your inbox
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@agency.com.au"
                className="w-full max-w-sm border border-border px-4 py-3 font-body text-sm outline-none transition-colors focus:border-dark"
              />
              <button
                type="submit"
                className="mt-3 bg-orange px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-dark"
              >
                Send my results
              </button>
              {emailStatus === "sent" && (
                <p className="mt-3 font-body text-sm text-orange">
                  Thanks — we&apos;ll be in touch (demo: no email sent).
                </p>
              )}
            </form>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaPrimary} mt-6`}
            >
              Reserve your sprint — $5,000 founding pricing →
            </a>
            <button
              type="button"
              onClick={reset}
              className="mt-6 block font-body text-sm text-mid underline underline-offset-4 hover:text-dark"
            >
              Retake quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function InlineQuoteBand() {
  const item = INLINE_TESTIMONIALS[3];
  return (
    <section className="border-b border-border bg-[#FAFAFA] py-16 md:py-20">
      <div className={contentWide}>
        <blockquote className="max-w-[900px] font-display text-xl font-semibold leading-snug text-dark md:text-2xl">
          {item.text}
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-border font-body text-xs text-mid">
            {item.initials}
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-dark">{item.name}</p>
            <p className="font-body text-xs text-mid">{item.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MasonryCard({ t }) {
  const parts = t.highlight ? t.quote.split(t.highlight) : [t.quote];
  return (
    <figure className="mb-4 break-inside-avoid border border-border bg-white p-4">
      <blockquote className="font-body text-[13px] leading-relaxed text-dark">
        {t.highlight && parts.length > 1 ? (
          <>
            {parts[0]}
            <strong className="text-dark">{t.highlight}</strong>
            {parts[1]}
          </>
        ) : (
          t.quote
        )}
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-2 border-t border-border pt-3">
        {t.avatarSrc ? (
          <img src={t.avatarSrc} alt="" className="h-7 w-7 shrink-0 rounded-full object-cover" />
        ) : (
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] font-body text-[10px] text-mid">
            {t.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
        )}
        <span className="font-body text-[11px] font-medium text-dark">{t.name}</span>
      </figcaption>
    </figure>
  );
}

function TestimonialsMasonry() {
  const wall = useMemo(() => {
    const out = [];
    for (let r = 0; r < 5; r += 1) {
      GRID_TESTIMONIALS.forEach((t, i) => {
        out.push({ ...t, key: `${r}-${i}` });
      });
    }
    return out;
  }, []);

  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
          More ❤️ from past clients
        </h2>
        <div className="columns-1 gap-4 pt-12 sm:columns-2 lg:columns-3 lg:gap-5">
          {wall.map(({ key, ...t }) => (
            <MasonryCard key={key} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faqs" className="scroll-mt-14 border-b border-border py-20 md:py-28">
      <div className={content}>
        <h2 className="text-center font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-dark">
          FAQs
        </h2>
        <ul className="mx-auto mt-12 max-w-[640px]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-t border-border first:border-t-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold leading-snug text-dark">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-body text-xl leading-none transition-colors ${
                      isOpen ? "text-orange" : "text-mid"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[800px]" : "max-h-0"
                  }`}
                >
                  <p className="pb-5 font-body text-sm leading-relaxed text-mid">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className={content}>
        <h2 className="mx-auto max-w-[640px] text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-dark">
          Stop sounding like every other agency.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-center font-body text-base text-mid">
          Founding pricing. 3 spots. Once they&apos;re gone, it&apos;s $8,500 minimum.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            Reserve your sprint
            <span className="mt-1 block font-body text-[11px] font-normal opacity-90">
              (Founding pricing — 3 spots)
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-sm font-semibold text-dark">Soubh &amp; Co.</p>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {["Before/After", "Sprint", "Pricing", "FAQs", "LinkedIn"].map((label, i) => {
            const href =
              label === "Before/After"
                ? "#before-after"
                : label === "Sprint"
                  ? "#sprint"
                  : label === "Pricing"
                    ? "#pricing"
                    : label === "FAQs"
                      ? "#faqs"
                      : "#";
            return (
              <a
                key={label}
                href={href}
                className="font-body text-xs uppercase tracking-widest text-mid transition-colors hover:text-dark"
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
      <p className="mt-8 text-center font-body text-xs text-mid">
        © 2025 Soubh &amp; Co. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-dark antialiased">
      <Nav />
      <main>
        <Hero />
        <StatsThreeCol />
        <TestimonialThreeCards />
        <BeforeAfter />
        <OfferBlockThreeColumn />
        <SprintTimeline />
        <ProblemChecklist />
        <Quiz />
        <InlineQuoteBand />
        <TestimonialsMasonry />
        <FAQs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
