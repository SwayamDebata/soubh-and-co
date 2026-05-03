import { useMemo, useState } from "react";
import logoPng from "./assets/logo.png";
import brandsPng from "./assets/brands.png";
import img3 from "./assets/position.png";
import img6 from "./assets/image6.png";
import img7 from "./assets/image7.jpg";
import img8 from "./assets/image8.jpg";
import img9 from "./assets/image9.png";
import img10 from "./assets/image10.png";
import img11 from "./assets/image11.png";

const CHECKLIST_ITEMS = [
  "Vendors can't tell what makes you different from the agency next door",
  "Every agent on your team describes the business differently",
  "Your social posts are just listing photos: there's no story",
  "You're getting beaten on commission, not winning on value",
  "You've grown the team but the brand still feels like a startup",
  'You "do everything for everyone" and it shows in your marketing',
];

const QUIZ_QUESTIONS = [
  "Could a vendor describe what makes your agency different from the franchise down the road, in one sentence?",
  "When you compete head-to-head, do vendors choose you for a clear, specific reason (not just rapport)?",
  "Can you name 3 things your agency says no to: segments, suburbs, or property types?",
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
    a: "The sprint covers positioning, the deck, and the content. The homepage rewrite isn't included. Most boutique agencies get more leverage from social and listing presentations. We'll quote that separately.",
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
    a: "Every session is recorded. But it's a sprint: if you can't commit to four sessions in two weeks, this isn't for you.",
  },
  {
    q: "Can we start with just the strategy and add content later?",
    a: "Not at founding pricing. The $5K rate is for the full sprint only.",
  },
];

const DELIVERABLES = [
  {
    title: "3–4 Positioning Strategies, Ranked by Risk",
    body: "We analyse your last 90 days of marketing, your recent listings, your competitors, and your intake responses. Then we present 3–4 distinct positioning bets, each labelled Safe, Stretch, or Bold.",
    image: img3,
  },
  {
    title: "A 6-Slide Internal Positioning Deck",
    body: "Nobody reads a 50-slide brand guide. Six slides with the exact words for what you do, who it's for, why you, and how you say it. Drop it in your next sales meeting. Watch your team finally tell the same story.",
    image: null,
  },
  {
    title: "3 Months of Content, Scheduled in Your Voice",
    body: "~36 pieces of content (3/week) across Instagram, LinkedIn, and one weekly long-form. Mapped to your new positioning. Written and scheduled by us. Reviewed monthly.",
    image: null,
  },
];

const HERO_BODY =
  "Soubh & Co. is a positioning consultancy for boutique Australian real estate agencies. In two weeks, we find what actually makes you different, and put it in front of the right vendors for the next 90 days.";

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
  { day: "Tue", title: "Internal team meeting", badge: null, desc: "(without us). Choose a direction" },
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
    text: "The positioning strategies we got weren't generic. They were built around our market, our competitors, and our actual clients. We chose the Bold option. **Best decision we've made.**",
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
      "The sprint forced us to pick a lane. Our listing presentations finally sound like us, not a template from 2014.",
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

/** Tighter horizontal rhythm (closer to fletchpmm.com): less gutter, slightly wider content band. */
const pageGutter = "px-3 sm:px-4 lg:px-5";

const content = `mx-auto max-w-[720px] ${pageGutter}`;
const contentWide = `mx-auto w-full max-w-[min(100%,1280px)] ${pageGutter}`;
/** Wider than default page grid so the sprint / pricing card reads as a landscape panel (Fletch-style). */
const contentOffer = `mx-auto w-full max-w-[min(100%,1440px)] ${pageGutter}`;

const CALENDLY_URL =
  "https://calendly.com/hello-iamsoubh/positioning-chat-soubh-co?month=2026-05";

/** Fletch-style: thick black stroke + rounded corners + hover pop */
const ctaPop =
  "transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0D0D0D] active:translate-y-0 active:shadow-none";
const ctaPrimary = `inline-flex flex-col items-center justify-center rounded-xl border-[3px] border-dark bg-orange px-6 py-3.5 text-center font-body text-sm font-bold text-dark shadow-none ${ctaPop} hover:bg-dark hover:text-white`;
const ctaSecondary = `inline-flex items-center justify-center rounded-xl border-[3px] border-dark bg-white px-6 py-3.5 text-center font-body text-sm font-bold text-dark shadow-none ${ctaPop} hover:bg-dark hover:text-white`;

const OFFER_INTRO =
  "A focused two-week process to lock your positioning, align your whole team on it, and run it across 3 months of scheduled content, without you lifting a finger.";

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

const CASE_STUDIES = [
  {
    agency: "Zammit Real Estate",
    headline: "From \"we do it all\" to a clear vendor story.",
    outcome:
      "Positioning deck adopted across the sales team. Social moved from generic listings to one repeatable narrative.",
  },
  {
    agency: "Independent · Sydney metro",
    headline: "Three positioning bets on the table in week one.",
    outcome:
      "Principal chose a Stretch option. Listing copy and LDMs now match the headline on the website.",
  },
  {
    agency: "Boutique · Regional",
    headline: "Agents aligned before the spring campaign.",
    outcome:
      "Workshops settled disagreements that had stalled marketing for two seasons. One deck, one voice.",
  },
];

const PRICING_TIERS = [
  {
    key: "founding",
    name: "Founding: first 3 clients only",
    detail: "AUD. Founding rate, first 3 clients only",
    price: "$5,000",
    barClass: "bg-orange",
    tag: "3 spots left",
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
    "whitespace-nowrap font-body text-sm font-medium text-dark/65 transition-colors duration-150 hover:text-dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white pt-[env(safe-area-inset-top,0px)]">
      <div
        className={`mx-auto flex w-full max-w-[min(100%,1280px)] items-center justify-between gap-3 py-3 sm:gap-4 ${pageGutter}`}
      >
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 py-0.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
        >
          <img
            src={logoPng}
            alt=""
            className="h-9 w-auto shrink-0 sm:h-10 md:h-11"
            decoding="async"
            aria-hidden
          />
          <span className="font-display text-lg font-bold leading-none tracking-tight text-dark sm:text-xl md:text-2xl">
            Soubh &amp; Co.
          </span>
        </a>
        <div className="flex min-w-0 items-center justify-end gap-4 sm:gap-6 md:gap-8">
          <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Primary">
            <a href="#case-studies" className={linkClass}>
              Case studies
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
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaPrimary} shrink-0 px-3 py-2 sm:px-4 sm:py-2.5`}
          >
            Reserve your sprint
            <span className="mt-0.5 block max-w-[9.5rem] text-balance font-body text-[10px] font-normal leading-tight opacity-90 sm:max-w-none">
              (Founding pricing, 3 spots)
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

const brandsAlt =
  "Past work across Australia: Zammit Real Estate, Buyer's Agent Investing, The SMSF Property Guy, Carismatic, Arum & Co.";

function BrandsImage({ className }) {
  return (
    <img
      src={brandsPng}
      alt={brandsAlt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

/** Wide logo strip: scales with content width; larger cap than before (Fletch-style prominence). */
function BrandsBar() {
  return (
    <div className="pt-10 md:pt-12">
      <div className="overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] md:overflow-x-visible">
        <BrandsImage className="mx-auto block h-auto w-full max-h-[2.75rem] object-contain object-center sm:max-h-12 md:max-h-14 lg:max-h-[3.75rem]" />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pb-0 pt-12 sm:pt-16 md:pt-24">
      <div className={contentWide}>
        <h1 className="max-w-[920px] font-display text-[clamp(2.75rem,6vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-dark">
          Your agency sounds like every other agency on the high street.
        </h1>
        <p className="mt-6 max-w-[640px] font-body text-lg font-normal leading-[1.65] text-dark md:text-xl">
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
              (Founding pricing, 3 spots)
            </span>
          </a>
          <a href="#case-studies" className={ctaSecondary}>
            See case studies →
          </a>
        </div>
        <BrandsBar />
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
              <p className="mt-4 flex-1 font-body text-sm leading-[1.65] text-dark md:text-[15px]">
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
              <p className="font-body text-sm leading-[1.65] text-dark">
                {renderBoldSegments(item.text)}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] font-body text-xs font-medium text-dark">
                  {item.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-dark">{item.name}</p>
                  <p className="font-body text-xs text-dark">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
          Case studies
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base leading-[1.65] text-dark">
          Outcomes-first snapshots. Swap in your real names, suburbs, and metrics when you are ready to publish.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.agency}
              className="flex flex-col rounded-2xl border-[3px] border-dark bg-white p-6 md:p-8"
            >
              <p className="font-body text-[11px] font-bold uppercase tracking-widest text-dark">{cs.agency}</p>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-dark md:text-xl">{cs.headline}</h3>
              <p className="mt-4 flex-1 font-body text-sm leading-[1.65] text-dark">{cs.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-dark/40" viewBox="0 0 20 20" fill="none" aria-hidden>
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
    <section id="sprint" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div className={contentOffer}>
        <div className="overflow-hidden rounded-2xl border-[3px] border-dark bg-white">
          <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)_minmax(0,0.92fr)]">
            <div className="p-7 md:p-9 lg:p-10">
              <h2 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-dark md:text-[2.25rem] lg:text-[2.35rem]">
                <span className="block">The Real Estate</span>
                <span className="block">Positioning Sprint</span>
              </h2>
              <p className="mt-5 font-body text-[15px] leading-[1.65] text-dark md:text-base lg:mt-6">
                {OFFER_INTRO}
              </p>
            </div>
            <div className="p-7 md:p-9 lg:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-dark">
                What you get:
              </p>
              <ul className="mt-6 space-y-8 md:space-y-9">
                {OFFER_WHAT_ITEMS.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckIcon />
                    <div>
                      <p className="font-body text-sm font-bold leading-snug text-dark">{item.title}</p>
                      <p className="mt-2 font-body text-sm leading-[1.65] text-dark">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div id="pricing" className="scroll-mt-24 p-7 md:p-9 lg:p-10">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-dark">
                Pricing tiers based on your agency size:
              </p>
              <p className="mt-2 font-body text-sm italic text-dark">
                (and the resulting complexity &amp; impact)
              </p>
              <div className="mt-6 space-y-2.5 md:mt-8 md:space-y-2">
                {PRICING_TIERS.map((tier) => (
                  <div key={tier.key} className="flex min-h-0 overflow-hidden border border-border bg-white">
                    <div className={`w-1.5 shrink-0 self-stretch ${tier.barClass}`} aria-hidden />
                    <div className="flex min-w-0 flex-1 flex-col gap-2 py-3 pl-3 pr-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-2.5 sm:pl-4 sm:pr-4">
                      <div className="min-w-0 sm:max-w-[58%] lg:max-w-[55%]">
                        <p className="font-body text-sm font-bold leading-snug text-dark">{tier.name}</p>
                        {tier.detail ? (
                          <p className="mt-0.5 font-body text-xs leading-snug text-dark">{tier.detail}</p>
                        ) : null}
                      </div>
                      <div className="flex shrink-0 flex-row flex-wrap items-center justify-end gap-2 sm:flex-nowrap sm:gap-3">
                        <p className="font-display text-2xl font-extrabold leading-none tracking-tight text-dark md:text-3xl">
                          {tier.price}
                        </p>
                        {tier.tag ? (
                          <span className="bg-orange px-2 py-0.5 font-body text-[10px] font-bold uppercase text-white">
                            {tier.tag}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-body text-xs leading-[1.65] text-dark md:mt-6">
                All prices AUD, ex-GST. 50% on signing, 50% at start of month 2. Prices published because we have
                nothing to hide.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 border-t border-border bg-[#FAFAFA] px-6 py-8 md:px-10">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={ctaPrimary}>
              Reserve your sprint
              <span className="mt-1 font-body text-[11px] font-normal opacity-90">
                (Founding pricing, 3 spots)
              </span>
            </a>
            <a href="#quiz" className={ctaSecondary}>
              Take the 2-minute quiz →
            </a>
          </div>
        </div>
        <div className="mt-10 flex justify-center px-0">
          <img
            src={img3}
            alt="Positioning options preview: how we present strategic bets in the sprint."
            className="mx-auto block h-auto w-full max-w-[min(100%,680px)] object-contain"
            loading="lazy"
            decoding="async"
          />
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
      <p className="font-body text-[11px] font-bold uppercase tracking-wide text-dark">{row.day}</p>
      <p
        className={`mt-2 font-body text-sm font-bold leading-snug ${
          highlight ? "text-orange" : "text-dark"
        }`}
      >
        {row.title}
      </p>
      {row.badge ? (
        <p className="mt-1 font-body text-xs text-dark">{row.badge}</p>
      ) : null}
      {row.desc ? (
        <p className="mt-2 font-body text-xs leading-[1.65] text-dark">{row.desc}</p>
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
              <p className="mt-2 font-body text-sm leading-[1.65] text-dark">
                15-min intake form + send listing presentations + last 30 days of social
              </p>
            </div>
            <div>
              <p className="font-body text-sm font-bold text-dark">Our team</p>
              <p className="mt-2 font-body text-sm leading-[1.65] text-dark">
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
                className="border-l border-dashed border-border px-3 py-3 text-center font-body text-[11px] font-bold uppercase tracking-wide text-dark"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-6">
            <div className="flex flex-col border-r border-border p-4">
              <span className="inline-flex w-fit rounded-lg border-2 border-dark bg-[#FFE8DE] px-2 py-1.5 font-body text-[10px] font-bold uppercase leading-tight tracking-wide text-dark">
                Week 01 · Strategy
              </span>
            </div>
            {WEEK1_ROWS.map((row) => (
              <WeekCell key={row.day + row.title} row={row} />
            ))}
          </div>
          <div className="hidden border-t border-border md:grid md:grid-cols-6">
            <div className="flex flex-col border-r border-border p-4">
              <span className="inline-flex w-fit rounded-lg border-2 border-dark bg-[#FFF3E0] px-2 py-1.5 font-body text-[10px] font-bold uppercase leading-tight tracking-wide text-dark">
                Week 02 · Content
              </span>
            </div>
            {WEEK2_ROWS.map((row) => (
              <WeekCell key={row.day + row.title} row={row} />
            ))}
          </div>
          <div className="border-t border-border p-6 md:hidden">
            <p className="font-body text-xs font-bold uppercase text-dark">Week 01 · Strategy</p>
            <div className="mt-4 space-y-4">
              {WEEK1_ROWS.map((row) => (
                <div key={row.day} className="border-b border-border pb-4 last:border-0">
                  <WeekCell row={row} />
                </div>
              ))}
            </div>
            <p className="mt-8 font-body text-xs font-bold uppercase text-dark">Week 02 · Content</p>
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
          <div className="p-8 md:p-10">
            <span className="inline-flex rounded-lg border-2 border-dark bg-[#FFE8DE] px-2 py-1.5 font-body text-[10px] font-bold uppercase tracking-wide text-dark">
              Months 01–03 · Content engine
            </span>
            <ul className="mt-6 space-y-3 font-body text-sm text-dark">
              <li>Weekly content batches delivered. Scheduled by us.</li>
              <li>Monthly Loom report plus a 30-minute review call.</li>
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
      ? {
          emoji: "😊",
          title: "No problem!",
          subtitle: null,
          boxClass: "bg-[#ECFDF3]",
        }
      : count <= 2
        ? {
            emoji: "🙁",
            title: "Hmm… maybe",
            subtitle: "You've got early signs of a positioning problem.",
            boxClass: "bg-[#FCE7F3]",
          }
        : {
            emoji: "😬",
            title: "You've got a positioning problem.",
            subtitle: "We can fix it.",
            boxClass: "bg-[#FFE8DE]",
          };

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
              Do you have a positioning problem?
            </h2>
            <p className="mt-3 font-body text-sm italic text-dark">(Check all that apply)</p>
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
          </div>
          <aside className="flex flex-col justify-center" aria-live="polite" aria-atomic="true">
            <p className="mb-4 text-center text-4xl leading-none lg:text-left lg:text-5xl" aria-hidden>
              {message.emoji}
            </p>
            <div
              className={`rounded-2xl border-2 border-dark p-6 md:p-8 ${message.boxClass}`}
              role="status"
            >
              <p className="font-display text-xl font-bold leading-snug text-dark md:text-2xl">{message.title}</p>
              {message.subtitle ? (
                <p className="mt-3 font-body text-sm leading-[1.65] text-dark md:text-base">{message.subtitle}</p>
              ) : null}
            </div>
            <a
              href="#quiz"
              className="mt-8 inline-block text-center font-body text-sm font-semibold text-orange underline underline-offset-4 transition-colors hover:text-dark lg:text-left"
            >
              Take the 2-minute quiz →
            </a>
          </aside>
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
          body: "You don't have a positioning yet. Everything is on the table, but another agency in your market is about to plant a flag first.",
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
    <section id="quiz" className="scroll-mt-24 border-b border-border bg-white py-20 md:py-28">
      <div className={content}>
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-dark">
          Does your agency have a positioning problem?
        </h2>
        <p className="mt-2 font-body text-sm italic text-dark">A 2-minute self-diagnostic.</p>
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
            <p className="mt-3 max-w-[480px] font-body text-base leading-[1.65] text-dark">{result.body}</p>
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
                  Thanks. We&apos;ll be in touch (demo: no email sent).
                </p>
              )}
            </form>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaPrimary} mt-6`}
            >
              Reserve your sprint ($5,000 founding pricing) →
            </a>
            <button
              type="button"
              onClick={reset}
              className="mt-6 block font-body text-sm text-dark underline underline-offset-4 hover:text-dark"
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
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-border font-body text-xs text-dark">
            {item.initials}
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-dark">{item.name}</p>
            <p className="font-body text-xs text-dark">{item.role}</p>
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
      <blockquote className="font-body text-[13px] leading-[1.65] text-dark">
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
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] font-body text-[10px] text-dark">
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
    <section id="faqs" className="scroll-mt-24 border-b border-border py-20 md:py-28">
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
                      isOpen ? "text-orange" : "text-dark/45"
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
                  <p className="pb-5 font-body text-sm leading-[1.65] text-dark">{item.a}</p>
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
        <p className="mx-auto mt-5 max-w-lg text-center font-body text-base text-dark">
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
              (Founding pricing, 3 spots)
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
      <div
        className={`mx-auto flex w-full max-w-[min(100%,1280px)] flex-col gap-8 md:flex-row md:items-center md:justify-between ${pageGutter}`}
      >
        <p className="font-display text-sm font-semibold text-dark">Soubh &amp; Co.</p>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {["Case studies", "Sprint", "Pricing", "FAQs", "LinkedIn"].map((label, i) => {
            const href =
              label === "Case studies"
                ? "#case-studies"
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
                className="font-body text-xs uppercase tracking-widest text-dark transition-colors hover:text-dark"
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
      <p className="mt-8 text-center font-body text-xs text-dark">
        © 2026 Soubh &amp; Co. All rights reserved.
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
        <CaseStudies />
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
