import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CALENDLY_URL } from "./config.js";
import logoPng from "./assets/logo.png";
import positionPng from "./assets/position.png";
import positionPng2 from "./assets/position2.png";
import positionPng3 from "./assets/position3.png";
import brandZammit from "./assets/zammit.png";
import avatarMarkZammit from "./assets/Mark Zammit.png";
import avatarJasonMcCall from "./assets/Jason McCall.png";
import avatarArshakWasim from "./assets/Arshak Wasim.png";
import brandArum from "./assets/arum.png";
import brandCarismatic from "./assets/carismatic.png";
import brandTspg from "./assets/tspg.png";
import brandBai from "./assets/bai.png";

const CHECKLIST_ITEMS = [
  "Vendors don't know what makes you different",
  "Your team describes the agency five different ways",
  "Social posts are listing photos, not a story",
  "Vendors keep negotiating you down on commission",
  "The brand still feels like a startup",
  "You say yes to every kind of vendor",
];

const FAQ_ITEMS = [
  {
    q: "We've already got a marketing person. Why would we need this?",
    a: `A marketing person executes posts. We make the strategic decision underneath them, so the posts they write actually pull in one direction instead of five.

After the sprint, your marketing hire works with a clear positioning and a documented voice. They become 3x more effective overnight, because they stop guessing what to say.

This isn't a replacement. It's the strategy layer your marketing person was hired to follow, not invent.`,
  },
  {
    q: "Why does this cost $5,000? Couldn't we get content cheaper?",
    a: `Yes. You can hire a freelancer for $1,500 a month who'll post listing photos and recycle the same five captions.

What you can't get cheaper is the strategic decision underneath the content: the answer to what makes our agency different and worth full commission. That's the work that pays for itself the first time a vendor stops negotiating you down on fee.

The $5,000 is for the decision. The 90 days of content is the proof it works.`,
  },
  {
    q: "We're already pretty clear on our positioning. Do we still need this?",
    a: `Probably not the strategy work. But here's the test:

If you asked five different agents on your team to describe what makes your agency different, would they say roughly the same thing?

If yes, you've got positioning. You don't need us.

If no, you've got a founder's intuition about positioning that hasn't made it into the team's hands yet. That's exactly what the sprint fixes. The pitch deck and the 90 days of content are how the intuition becomes shared language.`,
  },
  {
    q: "What if we go through the sprint and don't like the strategies you propose?",
    a: `We've never had this happen, but the structure handles it.

In Workshop 1, we present 3 to 4 positioning options ranked by risk. If none of them feel right, that's a signal the audit missed something, usually a vendor segment you wanted that we didn't catch from the intake form.

We run a fourth workshop free until you have an option you're confident betting on. The sprint isn't done until you're locked in.`,
  },
  {
    q: "We're a small team. Will the sprint be a huge time commitment?",
    a: `Total time from your team across two weeks: about 6 hours.

Three 75-minute workshops. One 60-minute internal team meeting (without us). One 60-minute live review at the end of Week 2. Async revisions over Slack, usually 30 minutes total.

Less than one full workday. Spread across 10 business days.

After Week 2, your time commitment drops to a 30-minute monthly call.`,
  },
  {
    q: "Why only real estate? Why only Australia?",
    a: `Because we're not trying to be a marketing agency. We're trying to be the marketing agency for one specific kind of business.

Generic marketing agencies adapt a B2B SaaS playbook to your industry and hope it sticks. We've built our intake form, our positioning frameworks, and our content templates around how Australian boutique agencies actually win listings.

The deeper the niche, the better the work.`,
  },
  {
    q: "How fast do we see results?",
    a: `Internal alignment: by the end of Week 2.

That alone usually changes how appraisals go. Your principal walks in with a clearer story, the team uses the same language, and vendors feel the difference even if they can't articulate it.

External traction from content: 60 to 90 days.

Brand positioning compounds slowly. The first month of content seeds the message. The second builds recognition. The third is when inbound shifts.

If you're hoping for a flood of leads in week three, this isn't that product.`,
  },
  {
    q: "What happens after the 90 days?",
    a: `Two paths.

Path 1: You keep us on a content retainer ($2,000/month) and we keep producing. About a third of clients do this.

Path 2: You take the brand voice guide, the templates, and the proven content patterns, and run it in-house. About two-thirds do this. We help you find the right hire if you want.

Either way, you own everything we built. There's no lock-in.`,
  },
];

const HERO_BODY =
  "Soubh & Co. is a marketing consultancy built for boutique Australian real estate agencies. We define your positioning, build your pitch deck, and run your social for 90 days.";

const DELIVERABLE_CARDS = [
  {
    label: "Deliverable 1",
    heading: "3–4 positioning strategies, ranked by risk",
    body: "Built from a deep audit of your last 90 days of marketing, your recent listings, your team's intake responses, and 5 competing agencies in your market.",
    foot: "3–4 strategies · Safe / Stretch / Bold",
    image: positionPng,
    imageAlt: "Positioning options: strategic bets presented in the sprint.",
  },
  {
    label: "Deliverable 2",
    heading: "A documented 6-slide pitch deck",
    body: "Built on your new positioning. The deck your director walks into every appraisal with, your new hires read in their first week, and your team uses to stay aligned. One source of truth, used everywhere.",
    foot: "6-slide deck · Appraisals · Onboarding · Alignment",
    image: positionPng2,
    imageAlt: "6-slide pitch deck preview from the sprint.",
  },
  {
    label: "Deliverable 3",
    heading: "3 months of content, scheduled in your voice",
    body: "36 pieces of content across Instagram, LinkedIn, and weekly long-form. Mapped to your new positioning. Reviewed monthly.",
    foot: "90 days · 3 posts/week, scheduled by us",
    image: positionPng3,
    imageAlt: "Content calendar and channels from the sprint.",
  },
];

const WEEK1_ROWS = [
  {
    day: "Monday",
    title: "Workshop 1",
    badge: "75 min",
    desc: "Soubh & Co. shares 3-4 positioning strategies, ranked from safe to bold.",
  },
  {
    day: "Tuesday",
    title: "Internal team meeting",
    badge: "60 min",
    desc: "You and your team pick a direction. We stay out of the room.",
  },
  {
    day: "Wednesday",
    title: "Workshop 2",
    badge: "75 min",
    desc: "Soubh & Co. pressure-tests the direction. We refine the differentiation and lock the voice.",
  },
  {
    day: "Thursday",
    title: "Workshop 3",
    badge: "75 min",
    desc: "Soubh & Co. locks the 6-slide positioning deck. Slide by slide.",
  },
  { day: "Friday", title: "Drafting starts", badge: null, desc: "Soubh & Co. starts drafting your content engine." },
];

const WEEK2_ROWS = [
  {
    day: "Monday",
    title: "Content drafting",
    badge: "Async",
    desc: "Soubh & Co. drafts the first 4 weeks of content.",
  },
  {
    day: "Tuesday",
    title: "Live review",
    badge: "60 min",
    desc: "We walk you through V1 of the content and the brand voice guide.",
  },
  { day: "Wednesday", title: "Async revisions", badge: null, desc: "Updates ship within 24 hours." },
  { day: "Thursday", title: "Async revisions", badge: null, desc: "Updates ship within 24 hours." },
  {
    day: "Friday",
    title: "Final feedback",
    badge: null,
    desc: "Deck locked. Voice guide locked. Month 1 of content scheduled.",
  },
];

const THREE_TESTIMONIALS = [
  {
    text: "I've been working with him (Soubh, Saubh, Subh, Soub) for years and I still can't say his name right. But I can tell you this: his work is **unforgettable**. That's really all you need to know.",
    name: "Mark Zammit",
    role: "Director, Zammit Real Estate",
    initials: "MZ",
    avatar: avatarMarkZammit,
  },
  {
    text: "He helped streamline our workflows, saving us time and effort. His attention to detail and a keen understanding of our business needs have made him an invaluable partner.",
    name: "Jason McCall",
    role: "Director, The SMSF Property Guy",
    initials: "JM",
    avatar: avatarJasonMcCall,
  },
  {
    text: "Finding Soubh through a random Facebook group was the best thing that ever happened to my business. He completely transformed my scattered online presence into a cohesive, powerful brand that now attracts high-quality leads daily.",
    name: "Arshak Wasim",
    role: "Director, Arum & Co",
    initials: "AW",
    avatar: avatarArshakWasim,
  },
];

/** Tighter horizontal rhythm (closer to fletchpmm.com): less gutter, slightly wider content band. */
const pageGutter = "px-3 sm:px-4 lg:px-5";

const content = `mx-auto max-w-[720px] ${pageGutter}`;
const contentWide = `mx-auto w-full max-w-[min(100%,1280px)] ${pageGutter}`;
/** Wider than default page grid so the sprint / pricing card reads as a landscape panel (Fletch-style). */
const contentOffer = `mx-auto w-full max-w-[min(100%,1440px)] ${pageGutter}`;

/** Fletch-style: flat at rest; hover pops (lift + 4px hard shadow). */
const ctaPop =
  "shadow-none transition-[transform,box-shadow] duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0D0D0D] active:translate-x-0 active:translate-y-0 active:shadow-none";
const ctaPrimary = `inline-flex min-w-0 flex-col items-center justify-center rounded-[12px] border-[3px] border-dark bg-orange px-9 py-3 text-center font-body text-[15px] font-bold leading-snug text-white sm:px-16 sm:py-3.5 sm:text-[17px] md:px-[5rem] ${ctaPop} hover:bg-orange hover:text-white hover:brightness-110`;
const ctaSecondary = `inline-flex min-w-0 items-center justify-center rounded-[12px] border-[3px] border-dark bg-white px-9 py-3 text-center font-body text-[15px] font-bold leading-snug text-dark sm:px-16 sm:py-3.5 sm:text-[17px] md:px-[5rem] ${ctaPop} hover:bg-orange hover:text-white hover:brightness-110`;

const OFFER_INTRO =
  "A focused two-week process to lock your positioning, align your whole team on it, and run it across 3 months of scheduled content without you lifting a finger.";

const OFFER_WHAT_ITEMS = [
  {
    title: "2 weeks of live and async work with our team",
    body: "Three workshops to review your strategic positioning options, align on your messaging, and build the story you'll tell vendors, the team, and the market.",
  },
  {
    title: "A documented 6-slide pitch deck",
    body: "Built on your new positioning. The deck your director walks into every appraisal with, your new hires read in their first week, and your team uses to stay aligned. One source of truth, used everywhere.",
  },
  {
    title: "3 months of content, scheduled in your voice",
    body: "Instagram, LinkedIn, and one weekly long-form. Aligned to your new positioning. We write it. We schedule it. You approve it.",
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
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "whitespace-nowrap font-body text-sm font-medium text-dark/65 transition-colors duration-150 hover:text-dark";
  /** Fletch mobile overlay: no dividers, no tinted borders on menu chrome */
  const mobileNavLinkClass =
    "block py-1 text-center font-body text-lg font-medium text-dark transition-colors hover:text-dark/80";

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white pt-[env(safe-area-inset-top,0px)]">
      <div className={`relative mx-auto w-full max-w-[min(100%,1280px)] ${pageGutter}`}>
        <div className="relative z-50 mx-auto flex w-full max-w-[min(100%,1280px)] items-center justify-between gap-3 py-3 sm:gap-4">
          <a
            href="#"
            className="flex shrink-0 items-center gap-2.5 py-0.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
            onClick={() => setMenuOpen(false)}
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
          <div className="flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-3 md:gap-8">
            <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Primary">
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
              className={`${ctaPrimary} hidden shrink-0 px-2.5 py-1.5 text-xs leading-tight sm:px-4 sm:py-2.5 sm:text-sm md:inline-flex md:!px-5`}
            >
              Reserve your sprint
              <span className="mt-0.5 hidden max-w-[9.5rem] text-balance font-body text-[10px] font-normal leading-tight text-white/90 sm:block sm:max-w-none">
                Founding pricing. 3 spots.
              </span>
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-orange bg-white text-dark transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Menu open" : "Open menu"}
              tabIndex={menuOpen ? -1 : 0}
              onClick={() => setMenuOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
                <path
                  d="M5 7h14M5 12h14M5 17h14"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[100] flex min-h-0 flex-col bg-white pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] md:hidden"
          >
            <div
              className={`mx-auto flex w-full max-w-[min(100%,1280px)] shrink-0 items-center justify-between gap-3 py-3 sm:gap-4 ${pageGutter}`}
            >
              <a
                href="#"
                className="flex shrink-0 items-center gap-2.5 py-0.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
                onClick={() => setMenuOpen(false)}
              >
                <img
                  src={logoPng}
                  alt=""
                  className="h-9 w-auto shrink-0 sm:h-10"
                  decoding="async"
                  aria-hidden
                />
                <span className="font-display text-lg font-bold leading-none tracking-tight text-dark sm:text-xl">
                  Soubh &amp; Co.
                </span>
              </a>
              <button
                type="button"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-dark bg-white text-dark transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-14 px-6 sm:gap-16">
              <nav className="flex flex-col items-center gap-10 sm:gap-11" aria-label="Mobile primary">
                <a href="#sprint" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  Sprint
                </a>
                <a href="#pricing" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  Pricing
                </a>
                <a href="#faqs" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  FAQs
                </a>
              </nav>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaPrimary} w-full max-w-md`}
                onClick={() => setMenuOpen(false)}
              >
                Reserve your sprint
                <span className="mt-1 block text-balance font-body text-[11px] font-normal leading-snug text-white/90">
                  Founding pricing. 3 spots.
                </span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

const BRAND_LOGOS = [
  { src: brandZammit, alt: "Zammit Real Estate" },
  { src: brandTspg, alt: "The SMSF Property Guy" },
  { src: brandBai, alt: "Buyer's Agent Investing" },
  { src: brandArum, alt: "Arum & Co." },
  { src: brandCarismatic, alt: "Carismatic" },
];

/** Fletch-style: two centered rows (3 + 2), generous gaps, even logo height */
function BrandsBar() {
  const row1 = BRAND_LOGOS.slice(0, 3);
  const row2 = BRAND_LOGOS.slice(3, 5);
  const logoClass =
    "h-8 w-auto max-w-[min(42vw,11rem)] object-contain object-center sm:h-9 sm:max-w-[min(36vw,12.5rem)] md:h-10 md:max-w-[13.5rem] lg:h-11 lg:max-w-[15rem]";
  return (
    <div>
      <p className="mb-8 text-center font-body text-[11px] font-bold uppercase tracking-[0.2em] text-mid md:mb-10 md:text-xs">
        Past work across Australia.
      </p>
      <div className="mx-auto flex w-full max-w-[min(100%,920px)] flex-col items-center gap-9 md:gap-11">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-14 md:gap-x-16 lg:gap-x-20">
          {row1.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} className={logoClass} loading="lazy" decoding="async" />
          ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-14 md:gap-x-16 lg:gap-x-20">
          {row2.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} className={logoClass} loading="lazy" decoding="async" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-border pb-12 pt-12 sm:pb-16 sm:pt-16 md:pb-20 md:pt-24">
      <div className={contentWide}>
        <h1 className="max-w-[920px] font-display text-[clamp(2.75rem,6vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-dark">
          You&apos;re the best-kept secret in your suburb. That&apos;s the problem
        </h1>
        <p className="mt-6 max-w-[640px] font-body text-lg font-normal leading-[1.65] text-dark md:text-xl">
          {HERO_BODY}
        </p>
        <div className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaPrimary} w-full sm:w-auto`}
          >
            Reserve your sprint
            <span className="mt-1 block text-balance font-body text-[11px] font-normal leading-snug text-white/90">
              Founding pricing. 3 spots.
            </span>
          </a>
          <a href="#deliverables" className={`${ctaSecondary} w-full sm:w-auto`}>
            See deliverables ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function DeliverableImageStack({ src, alt }) {
  return (
    <div className="mx-auto w-full max-w-[min(100%,600px)]">
      <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" decoding="async" />
    </div>
  );
}

function DeliverableCards() {
  return (
    <section id="deliverables" className="scroll-mt-24 border-b border-border bg-white py-16 md:py-24">
      <div className={contentWide}>
        <h2 className="mx-auto max-w-[min(100%,920px)] text-center font-display text-[clamp(2.25rem,6.5vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight text-dark">
          Three deliverables. One sprint. No fluff.
        </h2>
        <div className="mx-auto mt-5 flex justify-center" aria-hidden>
          <span className="h-1.5 w-20 rounded-full bg-orange md:w-28" />
        </div>
        <div className="mt-14 flex flex-col gap-16 md:mt-16 md:gap-20 lg:gap-24">
          {DELIVERABLE_CARDS.map((card, i) => {
            const imageLeft = i % 2 === 1;
            return (
              <article key={card.label}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0 xl:gap-x-20">
                  <div
                    className={`flex w-full min-w-0 flex-col justify-center lg:max-w-xl ${
                      imageLeft ? "lg:order-2 lg:justify-self-end" : "lg:justify-self-start"
                    }`}
                  >
                    <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-mid">{card.label}</p>
                    <h3 className="mt-3 font-display text-[clamp(1.35rem,3.2vw,2rem)] font-bold leading-[1.12] tracking-tight text-dark md:text-[1.75rem] lg:mt-4 lg:text-[2rem]">
                      {card.heading}
                    </h3>
                    <p className="mt-5 font-body text-[15px] leading-[1.7] text-dark/75 md:text-base">{card.body}</p>
                    <p className="mt-6 pt-1 font-body text-xs font-semibold uppercase tracking-wide text-dark/80">
                      {card.foot}
                    </p>
                  </div>
                  <div
                    className={`w-full min-w-[240px] shrink-0 ${
                      imageLeft ? "lg:order-1 lg:justify-self-start" : "lg:justify-self-end"
                    }`}
                  >
                    <DeliverableImageStack src={card.image} alt={card.imageAlt} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <div className={contentWide}>
        <BrandsBar />
      </div>
    </section>
  );
}

function TestimonialThreeCards() {
  const items = THREE_TESTIMONIALS;
  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className={contentWide}>
        <h2 className="text-center font-display text-[clamp(1.85rem,4.2vw,2.65rem)] font-bold tracking-tight text-dark">
          Testimonials
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center font-body text-[15px] leading-snug text-dark/65 md:text-base">
          What principals say after working with us.
        </p>
        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {items.map((item) => (
            <article key={item.name} className="flex flex-col">
              <p className="font-body text-[15px] font-medium leading-[1.72] text-dark md:text-[17px]">
                <span className="font-display text-[1.35em] font-bold leading-none text-orange/35" aria-hidden="true">
                  &ldquo;
                </span>
                {renderBoldSegments(item.text)}
                <span className="font-display text-[1.35em] font-bold leading-none text-orange/35" aria-hidden="true">
                  &rdquo;
                </span>
              </p>
              <div className="mt-8 flex items-center gap-4 pt-1">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] font-body text-sm font-medium text-dark">
                    {item.initials}
                  </div>
                )}
                <div>
                  <p className="font-body text-base font-semibold text-dark">{item.name}</p>
                  <p className="mt-0.5 font-body text-sm text-dark/70">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SprintCallout() {
  return (
    <section id="sprint" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div className={contentOffer}>
        <div className="overflow-hidden rounded-2xl border-[3px] border-dark bg-white">
          <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
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
              <p className="font-body text-xs font-bold uppercase tracking-widest text-mid">What you get:</p>
              <ul className="mt-6 space-y-8 md:space-y-9">
                {OFFER_WHAT_ITEMS.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 font-body text-lg leading-none text-dark" aria-hidden>
                      ✓
                    </span>
                    <div>
                      <p className="font-body text-sm font-bold leading-snug text-dark">{item.title}</p>
                      <p className="mt-2 font-body text-sm leading-[1.65] text-dark">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GRID_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

/** Fletch-style: workshops + live review in brand blue; everything else black */
function weekCellTitleClass(title) {
  const t = title.toLowerCase();
  const accent = t.includes("workshop") || t.includes("live review");
  return accent ? "text-orange" : "text-dark";
}

function WeekCell({ row }) {
  return (
    <div className="flex min-h-[128px] flex-col p-5 md:min-h-[168px] md:border-l md:border-dotted md:border-border md:p-6 md:pt-6">
      <p className="font-body text-[14px] font-bold tracking-tight text-dark md:text-[15px]">{row.day}</p>
      <p className={`mt-3 font-body text-[17px] font-bold leading-snug tracking-tight md:text-[1.38rem] ${weekCellTitleClass(row.title)}`}>
        {row.title}
      </p>
      {row.badge ? (
        <p className="mt-1.5 font-body text-[15px] font-normal leading-snug text-mid md:text-base">{row.badge}</p>
      ) : null}
      {row.desc ? (
        <p className="mt-2 font-body text-[15px] font-normal leading-[1.6] text-dark/80 md:text-base">{row.desc}</p>
      ) : null}
    </div>
  );
}

function SprintTimeline() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className={contentWide}>
        <h2 className="text-center font-display text-[clamp(1.9rem,4.3vw,2.95rem)] font-bold tracking-tight text-dark">
          Here&apos;s exactly what the sprint looks like.
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-dark bg-white">
          <div className="p-5 md:p-6">
            <span className="inline-flex w-fit rounded-lg border-[3px] border-dark bg-[#EDE8F5] px-3 py-2 font-body text-[12px] font-bold uppercase leading-tight tracking-wide text-dark shadow-[3px_3px_0_0_#0D0D0D]">
              Pre-Work
            </span>
          </div>
          <div className="grid border-t border-border md:grid-cols-2">
            <div className="p-5 md:p-6 md:pr-8">
              <p className="font-body text-[17px] font-bold leading-snug tracking-tight text-dark md:text-[1.38rem]">
                Your team
              </p>
              <p className="mt-3 font-body text-[15px] font-normal leading-[1.7] text-dark/85 md:text-[17px]">
                Fill out the{" "}
                <Link
                  to="/intake"
                  className="font-semibold text-dark underline decoration-dark/35 underline-offset-[3px] transition-colors hover:text-orange hover:decoration-orange/50"
                >
                  intake form
                </Link>{" "}
                . Send us your website, your social handles, and anything you give vendors before an appraisal even if
                it's rough.
              </p>
            </div>
            <div className="border-t border-dotted border-border p-5 md:border-l md:border-t-0 md:border-border md:p-6 md:pl-8">
              <p className="font-body text-[17px] font-bold leading-snug tracking-tight text-dark md:text-[1.38rem]">
                Soubh & Co.
              </p>
              <p className="mt-3 font-body text-[15px] font-normal leading-[1.7] text-dark/85 md:text-[17px]">
                We dig into your website, your social, and three boutique agencies you're up against.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-dark bg-white shadow-none">
          <div className="hidden grid-cols-6 border-b border-border bg-white md:grid">
            <div className="border-r border-dotted border-border" aria-hidden />
            {GRID_DAYS.map((d) => (
              <div
                key={d}
                className="border-l border-dotted border-border px-2 py-4 text-center font-body text-[14px] font-bold tracking-tight text-dark md:py-5 md:text-[15px]"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-6">
            <div className="flex flex-col border-r border-dotted border-border bg-white p-5 md:p-6">
              <span className="inline-flex w-fit rounded-lg border-[3px] border-dark bg-[#EDE8F5] px-3 py-2 font-body text-[12px] font-bold uppercase leading-tight tracking-wide text-dark shadow-[3px_3px_0_0_#0D0D0D]">
                WEEK 01 - STRATEGY
              </span>
            </div>
            {WEEK1_ROWS.map((row) => (
              <WeekCell key={row.day + row.title} row={row} />
            ))}
          </div>
          <div className="hidden border-t border-border md:grid md:grid-cols-6">
            <div className="flex flex-col border-r border-dotted border-border bg-white p-5 md:p-6">
              <span className="inline-flex w-fit rounded-lg border-[3px] border-dark bg-[#FFF0E6] px-3 py-2 font-body text-[12px] font-bold uppercase leading-tight tracking-wide text-dark shadow-[3px_3px_0_0_#0D0D0D]">
                WEEK 02 - CONTENT
              </span>
            </div>
            {WEEK2_ROWS.map((row) => (
              <WeekCell key={row.day + row.title} row={row} />
            ))}
          </div>
          <div className="border-t border-border p-6 md:hidden">
            <p className="font-body text-[12px] font-bold uppercase tracking-wide text-dark">WEEK 01 - STRATEGY</p>
            <div className="mt-5 space-y-6">
              {WEEK1_ROWS.map((row) => (
                <div key={row.day} className="border-b border-dotted border-border pb-6 last:border-0 last:pb-0">
                  <WeekCell row={row} />
                </div>
              ))}
            </div>
            <p className="mt-10 font-body text-[12px] font-bold uppercase tracking-wide text-dark">WEEK 02 - CONTENT</p>
            <div className="mt-5 space-y-6">
              {WEEK2_ROWS.map((row) => (
                <div key={row.day} className="border-b border-dotted border-border pb-6 last:border-0 last:pb-0">
                  <WeekCell row={row} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-dark bg-white">
          <div className="p-5 md:p-6">
            <span className="inline-flex w-fit rounded-lg border-[3px] border-dark bg-[#FFF0E6] px-3 py-2 font-body text-[12px] font-bold uppercase leading-tight tracking-wide text-dark shadow-[3px_3px_0_0_#0D0D0D]">
              MONTHS 01-03 - CONTENT ENGINE
            </span>
          </div>
          <ul className="space-y-4 border-t border-border p-5 font-body text-[15px] font-normal leading-[1.65] text-dark/85 md:space-y-5 md:p-6 md:pt-6 md:text-base">
            <li>Soubh & Co. delivers next week's content batch every Friday and schedules it in your accounts.</li>
            <li>Day 30, Day 60, Day 90: Loom report and a 30-minute review call.</li>
            <li>You list, sell, and lead. The marketing keeps running.</li>
          </ul>
          <p className="border-t border-border px-5 py-5 font-body text-[15px] font-semibold leading-[1.65] text-dark md:px-6 md:text-base">
            Total time from your team across 14 weeks: about 10 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContentNinetyDays() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-[#DCEAF2] via-[#EAF3F8] to-[#F4F8FB] py-20 md:py-28">
      <div className={contentWide}>
        <div className="relative overflow-hidden rounded-2xl border-[3px] border-dark bg-white p-8 shadow-[10px_10px_0_0_rgba(13,13,13,0.12)] md:rounded-3xl md:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#CDE4F2] blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#D8EAF5] blur-3xl" aria-hidden />
          <p className="inline-block rounded-lg border-2 border-dark bg-orange px-3 py-1.5 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white md:text-[11px]">
            USP: After the sprint
          </p>
          <h2 className="relative mt-4 max-w-[920px] font-display text-[clamp(1.95rem,4.4vw,3rem)] font-bold leading-[1.06] tracking-tight text-dark md:mt-5">
            <span className="text-orange">90 days</span> of content.
            <br className="hidden sm:block" /> Made for you. Scheduled for you.
          </h2>
          <p className="relative mt-4 max-w-[760px] font-body text-[17px] leading-[1.68] text-dark md:mt-5 md:text-[19px]">
            After Week 2, the marketing engine keeps running while you list, sell, and lead. Every week your channels
            stay active with consistent, positioning-led content.
          </p>
          <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-dark bg-[#EAF6FF] px-4 py-3 text-center">
              <p className="font-display text-2xl font-extrabold leading-none text-dark">36</p>
              <p className="mt-1 font-body text-[12px] font-bold uppercase tracking-wide text-dark/80">Pieces</p>
            </div>
            <div className="rounded-xl border-2 border-dark bg-[#F7F1FF] px-4 py-3 text-center">
              <p className="font-display text-2xl font-extrabold leading-none text-dark">12</p>
              <p className="mt-1 font-body text-[12px] font-bold uppercase tracking-wide text-dark/80">Weeks</p>
            </div>
            <div className="rounded-xl border-2 border-dark bg-[#FFF5EC] px-4 py-3 text-center">
              <p className="font-display text-2xl font-extrabold leading-none text-dark">3</p>
              <p className="mt-1 font-body text-[12px] font-bold uppercase tracking-wide text-dark/80">Channels</p>
            </div>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-2xl border-2 border-dark bg-[#FAFCFD] md:mt-12 md:rounded-3xl">
            <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="border-t-4 border-[#CFE8F9] p-6 md:p-8">
                <p className="font-body text-sm font-bold uppercase tracking-wide text-dark">Instagram</p>
                <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
                  2 posts / week
                </p>
                <p className="mt-4 font-body text-sm leading-[1.65] text-dark/80">
                  Listing-led, voice-aligned, mapped to your positioning. Captions written, hashtags researched,
                  scheduled in Meta Business Suite.
                </p>
              </div>
              <div className="border-t-4 border-[#E3D5FB] p-6 md:p-8">
                <p className="font-body text-sm font-bold uppercase tracking-wide text-dark">LinkedIn</p>
                <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
                  1 post / week
                </p>
                <p className="mt-4 font-body text-sm leading-[1.65] text-dark/80">
                  Founder-fronted thought pieces from the principal&apos;s profile + agency page. Built to position the
                  agency, not just promote listings.
                </p>
              </div>
              <div className="border-t-4 border-[#FFE3C7] p-6 md:p-8">
                <p className="font-body text-sm font-bold uppercase tracking-wide text-dark">Long-form</p>
                <p className="mt-2 font-display text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
                  1 piece / week
                </p>
                <p className="mt-4 font-body text-sm leading-[1.65] text-dark/80">
                  Newsletter, blog post, or vendor letter your call. Sent or published by us, on a regular cadence.
                </p>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-[900px] text-center font-body text-sm font-medium leading-[1.65] text-dark md:mt-10 md:text-[15px]">
            ✓ Every batch delivered Friday, for the following week. ✓ Scheduled in your accounts by us. ✓ 30-minute
            review call + Loom report at days 30, 60, and 90.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-8 rounded-xl border-2 border-dark bg-[#F4F9FB] px-5 py-6 md:flex-row md:items-end md:justify-between md:gap-12 md:px-8 md:py-7">
            <p className="max-w-xl flex-1 text-left font-body text-[15px] font-semibold leading-[1.68] text-dark md:text-[17px]">
              36 pieces of content across 3 channels, in 12 weeks. Written in your voice. Mapped to your positioning. On
              your schedule.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaPrimary} w-full shrink-0 md:w-auto`}
            >
              Reserve your sprint →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemChecklist() {
  const [checked, setChecked] = useState(() => CHECKLIST_ITEMS.map(() => false));
  const count = checked.filter(Boolean).length;
  const total = CHECKLIST_ITEMS.length;
  const message =
    count === 0
      ? {
          emoji: "😊",
          title: "Nothing ticked yet.",
          subtitle: "If a line feels true, tick it, we'll show you a readout.",
          boxClass: "bg-[#ECFDF3]",
          compact: false,
        }
      : count === 1
        ? {
            emoji: "😬",
            title: "You ticked one line. That's often a positioning problem in disguise.",
            subtitle:
              "We can fix it in the sprint: two weeks to lock positioning, then 90 days of scheduled content.",
            boxClass: "bg-[#FFE8DE]",
            compact: false,
          }
        : count >= 3
          ? {
              emoji: "😬",
              title: "You've got a positioning problem.",
              subtitle:
                "Three ticks is the line. The good news: it's the most fixable thing on your list.",
              boxClass: "bg-[#FFE8DE]",
              compact: false,
            }
        : count < total
          ? {
              emoji: "😬",
              title: "You ticked several lines. The pattern is real, and it's exactly what the sprint is for.",
              subtitle:
                "Two weeks to lock positioning, then 90 days of content scheduled in your voice. We can help you ship it.",
              boxClass: "bg-[#FFE8DE]",
              compact: false,
            }
          : {
              emoji: "😬",
              title: "You ticked every line. When it shows up everywhere, positioning is the lever.",
              subtitle:
                "The sprint is built for teams that feel this across the board. Book when you're ready to tighten the story.",
              boxClass: "bg-[#FFE8DE]",
              compact: false,
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
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.38] tracking-tight text-dark md:leading-[1.45]">
              Do you have a positioning
              <br />
              problem?
            </h2>
            <p className="mt-3 font-body text-sm italic text-dark">(Tick all that apply.)</p>
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
          <aside className="flex flex-col items-center justify-center lg:items-end" aria-live="polite" aria-atomic="true">
            <p className="mb-4 w-full max-w-[440px] text-center text-4xl leading-none lg:text-[52px]" aria-hidden>
              {message.emoji}
            </p>
            <div
              className={`w-full rounded-2xl border-2 border-dark ${message.compact ? "max-w-[270px] px-6 py-4 text-center" : "max-w-[440px] p-6 md:p-8"} ${message.boxClass}`}
              role="status"
            >
              <p className={`font-display font-bold leading-snug text-dark ${message.compact ? "text-[1.45rem]" : "text-xl md:text-2xl"}`}>
                {message.title}
              </p>
              {message.subtitle ? (
                <p className={`mt-3 font-body text-dark ${message.compact ? "text-sm leading-[1.55]" : "text-sm leading-[1.65] md:text-base"}`}>
                  {message.subtitle}
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-border bg-[#FAFAFA] py-20 md:py-28">
      <div className={content}>
        <h2 className="text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-dark">
          Founding pricing.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center font-body text-base leading-[1.65] text-dark">
          We&apos;re taking on three founding clients at a single flat rate while we sharpen the process for the
          Australian real estate market.
        </p>
        <div className="mt-12 text-center">
          <p className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold tracking-tight text-dark">
            $5,000 AUD
          </p>
          <p className="mt-3 font-body text-sm text-dark md:text-base">
            <span className="line-through decoration-dark/50">Standard from $8,500</span>
            <span className="mx-2 text-mid" aria-hidden>
              ·
            </span>
            <span className="font-semibold text-dark">3 spots remaining</span>
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaPrimary} w-full max-w-md sm:w-auto`}
          >
            Reserve your sprint →
          </a>
        </div>
        <p className="mx-auto mt-8 max-w-[640px] text-center font-body text-xs leading-[1.65] text-mid md:text-sm">
          All prices in AUD, ex-GST. 50% on signing, 50% at start of Week 2. From client #4 onward, pricing scales by
          agency size - $8,500 / $14,500 / $22,000.
        </p>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faqs" className="scroll-mt-24 border-b border-border py-20 md:py-28">
      <div className={content}>
        <h2 className="text-center font-display text-[clamp(1.9rem,4.3vw,2.8rem)] font-bold tracking-tight text-dark">
          Questions we hear a lot.
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
                  <span className="font-display text-[1.15rem] font-semibold leading-snug text-dark md:text-[1.3rem]">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-body text-2xl leading-none transition-colors ${
                      isOpen ? "text-orange" : "text-dark/45"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[1600px]" : "max-h-0"
                  }`}
                >
                  <p className="whitespace-pre-line pb-5 font-body text-[15px] leading-[1.72] text-dark md:text-[17px]">{item.a}</p>
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
        <h2 className="mx-auto max-w-[720px] text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-dark">
          Stop being the best-kept secret in your suburb.
        </h2>
        <div className="mt-10 flex justify-center px-0">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaPrimary} w-full max-w-md sm:max-w-none sm:w-auto`}
          >
            Reserve your sprint →
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-lg text-center font-body text-sm text-dark md:text-base">
          Founding pricing - $5,000 AUD. Three spots. Once they&apos;re gone, it&apos;s $8,500 minimum.
        </p>
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
        <div className="flex max-w-md items-start gap-3 sm:gap-4">
          <img
            src={logoPng}
            alt=""
            className="mt-0.5 h-9 w-auto shrink-0 sm:h-10"
            decoding="async"
            aria-hidden
          />
          <div>
            <p className="font-display text-sm font-semibold text-dark">Soubh &amp; Co.</p>
            <p className="mt-2 max-w-xs font-body text-xs leading-relaxed text-mid">
              A real estate marketing consultancy. Built in Australia.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {[
            { label: "Sprint", href: "#sprint" },
            { label: "Pricing", href: "#pricing" },
            { label: "FAQs", href: "#faqs" },
            { label: "Soubh's LinkedIn", href: "https://www.linkedin.com/in/iamsoubh/" },
          ].map(({ label, href }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
        <SprintCallout />
        <LogoStrip />
        <TestimonialThreeCards />
        <DeliverableCards />
        <ProblemChecklist />
        <SprintTimeline />
        <ContentNinetyDays />
        
        <PricingSection />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}
