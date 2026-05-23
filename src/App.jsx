import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plus, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import FadeIn from "./components/FadeIn";
import logoPng from "./assets/logo.png";
import positionPng from "./assets/position.png";
import positionPng2 from "./assets/position2.png";
import positionPng3 from "./assets/position3.png";
import brandZammit from "./assets/zammit.png";
import avatarMarkZammit from "./assets/Mark Zammit.png";
import avatarJasonMcCall from "./assets/Jason McCall.png";
import avatarArshakWasim from "./assets/Arshak Wasim.png";
import TestimonialCarousel from "./components/TestimonialCarousel";
import brandArum from "./assets/arum.png";
import brandCarismatic from "./assets/carismatic.png";
import brandTspg from "./assets/tspg.png";
import brandBai from "./assets/bai.png";
import founderImage from "./assets/LNS06367.jpeg";

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
    q: "Why does this cost $2,200? Couldn't we get content cheaper?",
    a: `Yes. You can hire a freelancer for $1,500 a month who'll post listing photos and recycle the same five captions.

What you can't get cheaper is the strategic decision underneath the content: the answer to what makes our agency different and worth full commission. That's the work that pays for itself the first time a vendor stops negotiating you down on fee.

The $2,200 is for the decision. The 90 days of content is the proof it works.`,
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
  "Soubh & Co. is a marketing consultancy built for boutique Australian real estate agencies. We define your positioning, build your positioning deck, and run your social for 90 days.";

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
    heading: "A documented 6-slide positioning deck",
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

/** Tighter horizontal rhythm (closer to fletchpmm.com): less gutter, slightly wider content band. */
const pageGutter = "px-3 sm:px-4 lg:px-5";

const content = `mx-auto max-w-[720px] ${pageGutter}`;
const contentWide = `mx-auto w-full max-w-[min(100%,1280px)] ${pageGutter}`;
/** Wider than default page grid so the sprint / pricing card reads as a landscape panel (Fletch-style). */
const contentOffer = `mx-auto w-full max-w-[min(100%,1440px)] ${pageGutter}`;

/** Geist-style: clean, minimal, no hard shadows. */
const ctaPrimary = `inline-flex min-w-0 flex-col items-center justify-center rounded-lg bg-orange px-8 py-3 text-center text-[15px] font-semibold leading-snug text-white transition-all hover:brightness-110 active:brightness-100 sm:px-12 sm:py-3.5 sm:text-base`;
const ctaSecondary = `inline-flex min-w-0 items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-center text-[15px] font-semibold leading-snug text-foreground transition-colors hover:bg-muted active:bg-background sm:px-12 sm:py-3.5 sm:text-base`;

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

/** Single offering shown in sprint panel (matches founding #pricing) */
const SPRINT_PANEL_PRICING = {
  accent: "bg-[#DCEAF2]",
  label: "Founding cohort (first 3 agencies)",
  price: "$2,200",
  detail: "One flat rate for the first three spots while we sharpen the sprint for Australian boutiques.",
};

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
              <motion.a href="#sprint" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                Sprint
              </motion.a>
              <motion.a href="#founder" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                About Founder
              </motion.a>
              <motion.a href="#pricing" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                Pricing
              </motion.a>
              <motion.a href="#faqs" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                FAQs
              </motion.a>
              <motion.a href="#contact" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                Contact
              </motion.a>
            </nav>
            <a
              href="/book"
              className={`${ctaPrimary} hidden shrink-0 px-2.5 py-1.5 text-xs leading-tight sm:px-4 sm:py-2.5 sm:text-sm md:inline-flex md:!px-5`}
            >
              Book a 20-minute qualifying call
              <span className="mt-0.5 hidden max-w-[9.5rem] text-balance font-body text-[10px] font-normal leading-tight text-white/90 sm:block sm:max-w-none">
                Founding pricing. 3 spots.
              </span>
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
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

        <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
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
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                <a href="#founder" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  About Founder
                </a>
                <a href="#pricing" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  Pricing
                </a>
                <a href="#faqs" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  FAQs
                </a>
                <a href="#contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </nav>
              <a href="/book" className={`${ctaPrimary} w-full max-w-md`} onClick={() => setMenuOpen(false)}>
                Book a 20-minute qualifying call
                <span className="mt-1 block text-balance font-body text-[11px] font-normal leading-snug text-white/90">
                  Founding pricing. 3 spots.
                </span>
              </a>
            </div>
          </motion.div>
        ) : null}
        </AnimatePresence>
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

function BrandsBar() {
  const logos = BRAND_LOGOS;
  const loopLogos = [...logos, ...logos, ...logos];
  return (
    <div className="w-full text-center">
      <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground md:mb-10 md:text-xs">
        Past work across Australia.
      </p>
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16 md:w-24" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16 md:w-24" />

        <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused] sm:gap-16 md:gap-20">
          {loopLogos.map(({ src, alt }, i) => (
            <img
              key={`${alt}-${i}`}
              src={src}
              alt={alt}
              className="h-10 w-auto shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11 md:h-12 lg:h-14"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="pb-20 pt-24 text-left sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
      <div className={contentWide}>
        <FadeIn direction="up" delay={0}>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Australian boutique real estate
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.05}>
          <h1 className="mt-6 max-w-[1000px] text-balance font-display text-[clamp(3rem,7.2vw,5.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground">
            Your agency sounds like every other agency on the high street
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="mt-10 max-w-[540px] text-pretty font-body text-base font-normal leading-[1.65] text-muted-foreground md:text-[17px]">
            {HERO_BODY}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="mt-12 flex w-full max-w-lg flex-col items-start gap-4 sm:max-w-none sm:flex-row sm:items-center sm:gap-5">
            <Button asChild className={`${ctaPrimary} w-full sm:w-auto`}>
              <a href="/book">Book a 20-minute qualifying call</a>
            </Button>
            <Button asChild variant="outline" className={`${ctaSecondary} w-full sm:w-auto`}>
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Founding pricing. 3 spots. No pitch on the call.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-14 flex items-center gap-4">
            <div className="flex -space-x-2">
              <img
                src={avatarMarkZammit}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-background object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={avatarJasonMcCall}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-background object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={avatarArshakWasim}
                alt=""
                className="h-9 w-9 rounded-full border-2 border-background object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by boutique agency directors
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function DeliverableImageStack({ src, alt }) {
  return (
    <motion.div className="mx-auto w-full max-w-[min(100%,600px)]" whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
      <img src={src} alt={alt} className="block h-auto w-full" loading="lazy" decoding="async" />
    </motion.div>
  );
}

function DeliverableCards() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24">
      <div className={contentWide}>
        <FadeIn>
          <h2 className="mx-auto max-w-[min(100%,920px)] text-center text-[clamp(2.25rem,6.5vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight text-foreground">
            See how it works. One sprint. No fluff.
          </h2>
          <div className="mx-auto mt-5 flex justify-center" aria-hidden>
            <span className="h-1.5 w-20 rounded-full bg-primary md:w-28" />
          </div>
        </FadeIn>
        <div className="mt-14 flex flex-col gap-16 md:mt-16 md:gap-20 lg:gap-24">
          {DELIVERABLE_CARDS.map((card, i) => {
            const imageLeft = i % 2 === 1;
            return (
              <FadeIn key={card.label} direction={imageLeft ? "right" : "left"}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0 xl:gap-x-20">
                  <div
                    className={`flex w-full min-w-0 flex-col justify-center lg:max-w-xl ${
                      imageLeft ? "lg:order-2 lg:justify-self-end" : "lg:justify-self-start"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{card.label}</p>
                    <h3 className="mt-3 text-[clamp(1.35rem,3.2vw,2rem)] font-bold leading-[1.12] tracking-tight text-foreground md:text-[1.75rem] lg:mt-4 lg:text-[2rem]">
                      {card.heading}
                    </h3>
                    <p className="mt-5 text-[15px] leading-[1.7] text-foreground/75 md:text-base">{card.body}</p>
                    <p className="mt-6 pt-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
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
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section id="founder" className="scroll-mt-24 border-b border-border bg-white py-20 md:py-28">
      <div className={contentWide}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Photo */}
          <FadeIn direction="left">
            <div className="flex items-center justify-center lg:justify-start">
              <motion.div
                className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={founderImage}
                  alt="Soubh portrait"
                  className="block h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Right — All text */}
          <FadeIn direction="right">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Who&apos;s behind this
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
                I&apos;m Soubh.
                <br />
                I run Soubh &amp; Co.
              </h2>

              <div className="mt-8 space-y-5 text-[16px] leading-[1.7] text-muted-foreground md:text-[17px]">
                <p>
                  Spent the last four years building brands across Australia, including real estate agencies
                  you&apos;ve probably never heard of — but their vendors definitely have.
                </p>
                <p>
                  Every engagement converged on the same insight: positioning has to come before marketing. So I
                  built a sprint that does only that.
                </p>
                <p>
                  See the work on{" "}
                  <a
                    href="https://iamsoubh.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-orange hover:decoration-orange/60"
                  >
                    iamsoubh.com
                  </a>
                  {" "}or the daily posts on{" "}
                  <a
                    href="https://www.linkedin.com/in/iamsoubh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-orange hover:decoration-orange/60"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div>
                  <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">4+</p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Years</p>
                </div>
                <div className="border-l border-border pl-4 md:pl-6">
                  <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">50+</p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Campaigns</p>
                </div>
                <div className="border-l border-border pl-4 md:pl-6">
                  <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">4.9</p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Rating</p>
                </div>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Want to talk?{" "}
                <a
                  href="/book"
                  className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-orange hover:decoration-orange/60"
                >
                  Book a 20-minute qualifying call →
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <FadeIn>
      <section className="py-12 md:py-16" aria-label="Brands">
        <div className={contentWide}>
          <BrandsBar />
        </div>
      </section>
    </FadeIn>
  );
}

function SprintCallout() {
  return (
    <section id="sprint" className="scroll-mt-24 bg-secondary py-14 md:py-20">
      <div className={contentOffer}>
        <FadeIn>
          <div className="grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
            {/* Title + Intro — top left, spans 2 cols */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full !py-0 rounded-3xl bg-white border-border">
                <div className="p-8 md:p-10 lg:p-12">
                  <h2 className="max-w-[680px] text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
                    <span className="block">The Real Estate</span>
                    <span className="block">Positioning Sprint</span>
                  </h2>
                  <p className="mt-5 max-w-[560px] text-[15px] leading-[1.65] text-muted-foreground md:text-base">
                    {OFFER_INTRO}
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Pricing — top right */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full !py-0 rounded-3xl bg-white border-border">
                <div className="flex h-full flex-col p-8 md:p-10">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Pricing</p>
                  <div className="mt-6 flex gap-0 overflow-hidden rounded-xl border border-border">
                    <span className={`w-1.5 shrink-0 ${SPRINT_PANEL_PRICING.accent}`} aria-hidden />
                    <div className="min-w-0 flex-1 py-3 pl-4 pr-3">
                      <p className="text-[13px] font-semibold leading-snug text-foreground">{SPRINT_PANEL_PRICING.label}</p>
                      <p className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                        {SPRINT_PANEL_PRICING.price}
                        <span className="ml-1 font-body text-[11px] font-semibold normal-case tracking-normal text-muted-foreground">
                          AUD
                        </span>
                      </p>
                      <p className="mt-2 text-[13px] leading-snug text-muted-foreground">{SPRINT_PANEL_PRICING.detail}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[12px] leading-snug text-muted-foreground">
                    All figures in AUD, ex-GST. 50% on signing, 50% at the start of Week 2.
                  </p>
                  <div className="mt-auto pt-8">
                    <Button asChild className={`${ctaPrimary} w-full`}>
                      <a href="/book">Book a 20-minute qualifying call →</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* What you get — bottom, full width */}
            <motion.div
              className="md:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full !py-0 rounded-3xl bg-white border-border">
                <div className="p-8 md:p-10 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What you get</p>
                  <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
                    {OFFER_WHAT_ITEMS.map((item) => (
                      <div key={item.title} className="flex gap-3.5">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-snug text-foreground">{item.title}</p>
                          <p className="mt-1.5 text-sm leading-[1.6] text-muted-foreground">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </FadeIn>
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
    <motion.div
      className="flex min-h-[128px] flex-col p-5 md:min-h-[168px] md:border-l md:border-dotted md:border-border md:p-6 md:pt-6"
      whileHover={{ backgroundColor: "rgba(8,96,143,0.04)" }}
      transition={{ duration: 0.15 }}
    >
      <p className="font-body text-[14px] font-bold tracking-tight text-dark md:text-[15px]">{row.day}</p>
      <p className={`mt-3 font-body text-[17px] font-bold leading-snug tracking-tight md:text-[1.38rem] ${weekCellTitleClass(row.title)}`}>
        {row.title}
      </p>
      {row.badge ? (
        <Badge variant="outline" className="mt-1.5 w-fit font-body text-[13px] font-normal leading-snug text-mid md:text-sm">{row.badge}</Badge>
      ) : null}
      {row.desc ? (
        <p className="mt-2 font-body text-[15px] font-normal leading-[1.6] text-dark/80 md:text-base">{row.desc}</p>
      ) : null}
    </motion.div>
  );
}

function SprintTimeline() {
  return (
    <FadeIn>
      <section className="border-b border-border py-20 md:py-28">
        <div className={contentWide}>
          <h2 className="text-center font-display text-[clamp(1.9rem,4.3vw,2.95rem)] font-bold tracking-tight text-dark">
            Here&apos;s exactly what the sprint looks like.
          </h2>

          <motion.div
            className="mt-12 overflow-hidden rounded-xl border border-border bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-5 md:p-6">
              <Badge variant="secondary" className="inline-flex w-fit rounded-lg border border-border px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wide hover:bg-secondary">
                Pre-Work
              </Badge>
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
          </motion.div>

          <motion.div
            className="mt-10 overflow-hidden rounded-xl border border-border bg-white shadow-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="hidden grid-cols-6 border-b border-border bg-white md:grid">
              <div className="border-r border-dotted border-border" aria-hidden />
              {GRID_DAYS.map((d) => (
                <div
                  key={d}
                  className="border-l border-dotted border-border px-2 py-4 text-center text-sm font-bold tracking-tight text-foreground md:py-5 md:text-[15px]"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-6">
              <div className="flex flex-col border-r border-dotted border-border bg-white p-5 md:p-6">
                <Badge variant="secondary" className="inline-flex w-fit rounded-lg border border-border px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wide hover:bg-secondary">
                  WEEK 01 - STRATEGY
                </Badge>
              </div>
              {WEEK1_ROWS.map((row) => (
                <WeekCell key={row.day + row.title} row={row} />
              ))}
            </div>
            <div className="hidden border-t border-border md:grid md:grid-cols-6">
              <div className="flex flex-col border-r border-dotted border-border bg-white p-5 md:p-6">
                <Badge variant="outline" className="inline-flex w-fit rounded-lg border border-border px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wide hover:bg-muted">
                  WEEK 02 - CONTENT
                </Badge>
              </div>
              {WEEK2_ROWS.map((row) => (
                <WeekCell key={row.day + row.title} row={row} />
              ))}
            </div>
            <div className="border-t border-border p-6 md:hidden">
              <p className="font-body text-[12px] font-bold uppercase tracking-wide text-dark">WEEK 01 - STRATEGY</p>
              <div className="mt-5 space-y-6">
                {WEEK1_ROWS.map((row) => (
                  <div key={row.day} className="border-b border-dashed border-dark/30 pb-6 last:border-0 last:pb-0">
                    <WeekCell row={row} />
                  </div>
                ))}
              </div>
              <p className="mt-10 font-body text-[12px] font-bold uppercase tracking-wide text-dark">WEEK 02 - CONTENT</p>
              <div className="mt-5 space-y-6">
                {WEEK2_ROWS.map((row) => (
                  <div key={row.day} className="border-b border-dashed border-dark/30 pb-6 last:border-0 last:pb-0">
                    <WeekCell row={row} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 overflow-hidden rounded-xl border border-border bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-5 md:p-6">
              <Badge variant="outline" className="inline-flex w-fit rounded-lg border border-border px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wide hover:bg-muted">
                MONTHS 01-03 - CONTENT ENGINE
              </Badge>
            </div>
            <ul className="space-y-4 border-t border-border p-5 font-body text-[15px] font-normal leading-[1.65] text-dark/85 md:space-y-5 md:p-6 md:pt-6 md:text-base">
              <li>Soubh & Co. delivers next week's content batch every Friday and schedules it in your accounts.</li>
              <li>Day 30, Day 60, Day 90: Loom report and a 30-minute review call.</li>
              <li>You list, sell, and lead. The marketing keeps running.</li>
            </ul>
            <p className="border-t border-border px-5 py-5 font-body text-[15px] font-semibold leading-[1.65] text-dark md:px-6 md:text-base">
              Total time from your team across 14 weeks: about 10 hours.
            </p>
          </motion.div>
        </div>
      </section>
    </FadeIn>
  );
}

function ContentNinetyDays() {
  const stats = [
    { num: "36", label: "Pieces" },
    { num: "12", label: "Weeks" },
    { num: "3", label: "Channels" },
  ];

  const channels = [
    {
      name: "Instagram",
      freq: "2 posts / week",
      desc: "Listing-led, voice-aligned. Captions, hashtags, and scheduling included.",
      accent: "bg-primary/30",
    },
    {
      name: "LinkedIn",
      freq: "1 post / week",
      desc: "Founder-fronted thought pieces. Built to position the agency, not just listings.",
      accent: "bg-primary/20",
    },
    {
      name: "Long-form",
      freq: "1 piece / week",
      desc: "Newsletter, blog, or vendor letter. Written and published on a regular cadence.",
      accent: "bg-primary/10",
    },
  ];

  return (
    <FadeIn>
      <section className="border-b border-border bg-gradient-to-b from-[#DCEAF2] via-[#EAF3F8] to-[#F4F8FB] py-20 md:py-28">
        <div className={contentWide}>
          <Card className="overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left — copy + CTA */}
              <div className="flex flex-col">
                <Badge className="inline-flex w-fit rounded-full border border-border bg-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary md:text-[11px]">
                  USP: After the sprint
                </Badge>

                <h2 className="mt-5 font-display text-[clamp(1.95rem,4.4vw,3rem)] font-bold leading-[1.06] tracking-tight text-foreground">
                  <span className="text-primary">90 days</span> of content.
                  <br className="hidden sm:block" /> Made for you. Scheduled for you.
                </h2>

                <p className="mt-4 max-w-[480px] text-[16px] leading-[1.6] text-muted-foreground md:mt-5 md:text-[17px]">
                  After Week 2, the marketing engine keeps running while you list, sell, and lead.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} className="text-primary" strokeWidth={3} />
                    Delivered Friday for the next week
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} className="text-primary" strokeWidth={3} />
                    Scheduled in your accounts
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} className="text-primary" strokeWidth={3} />
                    Review call at days 30, 60, 90
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  <div className="flex flex-col items-stretch gap-5 rounded-2xl border border-border bg-secondary/40 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
                    <p className="max-w-md text-[15px] font-semibold leading-[1.6] text-foreground md:text-base">
                      36 pieces across 3 channels in 12 weeks. Written in your voice. Mapped to your positioning.
                    </p>
                    <Button asChild className={`${ctaPrimary} w-full shrink-0 md:w-auto`}>
                      <a href="/book">Book a 20-minute qualifying call →</a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right — box sections */}
              <div className="space-y-5">
                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center rounded-2xl border border-border bg-background px-4 py-5"
                    >
                      <p className="text-2xl font-extrabold leading-none tracking-tight text-foreground md:text-3xl">
                        {stat.num}
                      </p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Channel cards */}
                <div className="space-y-3">
                  {channels.map((ch) => (
                    <motion.div
                      key={ch.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="relative overflow-hidden rounded-2xl border border-border bg-background p-5 md:p-6"
                    >
                      <div className={`absolute left-0 top-0 h-full w-1 ${ch.accent}`} />
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{ch.name}</p>
                      <p className="mt-1.5 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                        {ch.freq}
                      </p>
                      <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">{ch.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </FadeIn>
  );
}

function ProblemChecklist() {
  const [checked, setChecked] = useState(() => CHECKLIST_ITEMS.map(() => false));
  const count = checked.filter(Boolean).length;
  const total = CHECKLIST_ITEMS.length;

  const message = (() => {
    if (count === 0)
      return {
        severity: "neutral",
        label: "Diagnosis",
        title: "Nothing ticked yet.",
        subtitle: "If a line feels true, tick it and we'll show you a readout.",
        labelClass: "text-muted-foreground",
        titleClass: "text-foreground",
        showCta: false,
      };
    if (count === 1 || count === 2)
      return {
        severity: "early",
        label: "Early signal",
        title: count === 1 ? "One line ticked." : "A pattern is forming.",
        subtitle:
          "Even a single unchecked box is often a positioning problem in disguise. The sprint locks your story in two weeks.",
        labelClass: "text-primary",
        titleClass: "text-primary",
        showCta: false,
      };
    if (count >= 3 && count < total)
      return {
        severity: "confirmed",
        label: "Problem confirmed",
        title: "You've got a positioning problem.",
        subtitle:
          "Three or more ticks means the pattern is real. The good news: it's the most fixable thing on your list.",
        labelClass: "text-primary",
        titleClass: "text-primary",
        showCta: true,
      };
    return {
      severity: "critical",
      label: "Critical",
      title: "Positioning is your biggest lever.",
      subtitle:
        "Every line ticked. The sprint was built for teams that feel this across the board.",
      labelClass: "text-orange",
      titleClass: "text-orange",
      showCta: true,
    };
  })();

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left — checklist */}
          <FadeIn direction="left">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Self-diagnosis
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-foreground md:leading-[1.2]">
                Do you have a positioning problem?
              </h2>
              <p className="mt-3 font-body text-sm italic text-muted-foreground">
                Tick all that apply.
              </p>
              <ul className="mt-8">
                {CHECKLIST_ITEMS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.06,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="border-t border-border first:border-t-0"
                  >
                    <motion.label
                      className={`group flex cursor-pointer items-start gap-4 rounded-xl px-3 py-4 transition-colors duration-200 ${
                        checked[i]
                          ? "bg-primary/[0.03]"
                          : "hover:bg-muted/40"
                      }`}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Checkbox
                        checked={checked[i]}
                        onCheckedChange={() => toggle(i)}
                        className="mt-0.5 shrink-0 h-[18px] w-[18px] rounded-[4px] border-border transition-colors data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span
                        className={`font-body text-[15px] leading-snug transition-colors ${
                          checked[i]
                            ? "font-medium text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {item}
                      </span>
                    </motion.label>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right — diagnosis card */}
          <FadeIn direction="right">
            <div className="lg:sticky lg:top-32">
              <Card className="!py-0">
                <div className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={message.severity}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {/* Header row */}
                      <div className="flex items-center justify-between">
                        <p
                          className={`text-[11px] font-bold uppercase tracking-[0.18em] ${message.labelClass}`}
                        >
                          {message.label}
                        </p>
                        <p className="text-[11px] font-semibold tabular-nums tracking-wide text-muted-foreground">
                          {count}/{total}
                        </p>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-4 flex gap-1.5">
                        {CHECKLIST_ITEMS.map((_, i) => (
                          <motion.div
                            key={i}
                            className={`h-1 flex-1 rounded-full ${
                              checked[i] ? "bg-primary" : "bg-border"
                            }`}
                            layout
                            transition={{ duration: 0.3 }}
                          />
                        ))}
                      </div>

                      <h3
                        className={`mt-6 font-display text-xl font-bold leading-snug md:text-2xl ${message.titleClass}`}
                      >
                        {message.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.65] text-muted-foreground md:text-base">
                        {message.subtitle}
                      </p>

                      <AnimatePresence>
                        {message.showCta && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: 24,
                            }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <Button
                              asChild
                              className={`${ctaPrimary} w-full`}
                            >
                              <a href="/book">Book a 20-minute qualifying call →</a>
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const PRICING_FEATURES = [
  "2-week positioning sprint (3 workshops)",
  "6-slide pitch deck (source files)",
  "90 days of scheduled content (36 posts)",
  "Monthly review call",
];

function PricingSection() {
  return (
    <FadeIn>
      <section id="pricing" className="scroll-mt-24 border-b border-border bg-background py-20 md:py-28">
        <div className={content}>
          <p className="text-center font-body text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
            The Investment
          </p>
          <h2 className="mx-auto mt-4 max-w-[560px] text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
            One price. One scope. <span className="text-muted-foreground">No retainer.</span>
          </h2>

          <div className="relative mx-auto mt-12 max-w-[640px]">
            {/* Badge — moved outside Card so overflow-hidden doesn’t clip it */}
            <div className="absolute left-6 top-0 z-10 -translate-y-1/2 md:left-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-background md:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                3 Founding spots remaining
              </span>
            </div>

            <Card className="bg-white">
              <div className="p-8 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Founding Price
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[clamp(3rem,8vw,5rem)] font-extrabold leading-none tracking-tight text-foreground">
                    $2,200
                  </span>
                  <span className="text-base font-medium text-muted-foreground md:text-lg">AUD</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">ex-GST · For boutique agencies under 10 staff</p>

                <Separator className="my-8 bg-border" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  What&apos;s included
                </p>
                <ul className="mt-5 space-y-4">
                  {PRICING_FEATURES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-primary">
                        <svg className="h-3 w-3 text-primary-foreground" viewBox="0 0 12 10" fill="none">
                          <path
                            d="M1 5l3.5 3.5L11 1"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[15px] leading-snug text-foreground md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-8 bg-border" />

                <p className="text-sm text-muted-foreground">
                  Payment: 50% on signing · 50% at start of Week 2
                </p>

                <div className="mt-8">
                  <Button
                    asChild
                    className={`${ctaPrimary} w-full`}
                  >
                    <a href="/book">Book a 20-minute qualifying call →</a>
                  </Button>
                  <p className="mt-3 text-center font-body text-xs text-muted-foreground">
                    No pitch on the call. Just 20 minutes to confirm fit.
                  </p>
                </div>

                <div className="mt-5 text-center">
                  <a
                    href="#faqs"
                    className="font-body text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-orange hover:decoration-orange/60"
                  >
                    Not sure? Read the FAQ first →
                  </a>
                </div>
              </div>

              {/* Bottom banner */}
              <div className="border-t border-border bg-muted/40 px-8 py-4 md:px-10">
                <p className="text-center text-sm text-foreground md:text-[15px]">
                  <span className="font-semibold">From client #4:</span>{" "}
                  <span className="font-semibold">$8,500</span>
                  <span className="mx-1 text-muted-foreground">·</span>
                  <span className="font-semibold">$14,500</span>
                  <span className="mx-1 text-muted-foreground">·</span>
                  <span className="font-semibold">$22,000</span>
                  <span className="ml-1 text-muted-foreground">Founding pricing won&apos;t return.</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <FadeIn>
      <section id="faqs" className="scroll-mt-24 border-b border-border py-20 md:py-28">
        <div className={contentWide}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left heading */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight text-foreground">
                Frequently asked
                <br />
                questions
              </h2>
            </div>

            {/* Right accordion */}
            <div className="border-t border-border">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.q} className="border-b border-border">
                    <button
                      onClick={() => toggle(i)}
                      className="flex w-full items-center gap-4 py-6 text-left transition-colors hover:text-primary md:gap-5 md:py-7"
                    >
                      <Plus
                        size={20}
                        strokeWidth={2}
                        className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                      <span className="text-base font-medium text-foreground md:text-lg">
                        {item.q}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={item.q + "-content"}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="whitespace-pre-line pb-6 pl-9 text-sm leading-[1.72] text-foreground/80 md:pb-7 md:pl-10">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex flex-col gap-6 border border-border bg-secondary/40 p-8 md:mt-20 md:flex-row md:items-center md:justify-between md:p-10">
            <p className="max-w-md text-lg italic leading-snug text-foreground md:text-xl">
              Still have questions? The fastest way to get answers is on a 20-minute call. No pitch. Just qualification.
            </p>
            <Button asChild className={`${ctaPrimary} shrink-0`}>
              <a href="/book">Book a 20-minute qualifying call →</a>
            </Button>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", agency: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <FadeIn>
      <section id="contact" className="scroll-mt-24 border-b border-border py-20 md:py-28">
        <div className={contentWide}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: form */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                Get in touch
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-foreground">
                Not ready to book? Leave your details and we&apos;ll reach out.
              </h2>
              <p className="mt-4 max-w-md text-base leading-[1.65] text-muted-foreground">
                Tell us a little about your agency and we&apos;ll get back to you within 24 hours with next steps.
              </p>

              {submitted ? (
                <Card className="mt-8 border border-border bg-secondary/40 p-6 md:p-8">
                  <p className="text-lg font-semibold text-foreground">Thanks — we&apos;ll be in touch soon.</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We usually reply within one business day.
                  </p>
                </Card>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
                        placeholder="you@agency.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="agency" className="text-sm font-medium text-foreground">Agency name</label>
                    <input
                      id="agency"
                      type="text"
                      value={form.agency}
                      onChange={(e) => setForm((f) => ({ ...f, agency: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
                      placeholder="Your agency"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-1 focus:ring-ring"
                      placeholder="What are you hoping to fix?"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>

            {/* Right: dark value card */}
            <FadeIn direction="right" className="flex items-stretch">
              <Card className="flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-foreground p-8 text-background md:p-10">
                <div>
                  <Badge className="inline-flex w-fit rounded-lg border border-background/20 bg-background/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-background hover:bg-background/10 md:text-[11px]">
                    Why reach out?
                  </Badge>
                  <h3 className="mt-6 text-2xl font-bold leading-snug tracking-tight md:text-[1.65rem]">
                    Most agencies don&apos;t have a marketing problem. They have a positioning problem.
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-background/80 md:text-base">
                    If your team describes the agency five different ways, vendors negotiate on commission, and your social
                    still feels like a startup — the sprint was built for you.
                  </p>
                </div>
                <div className="mt-8 border-t border-background/15 pt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarMarkZammit}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-background">Mark Zammit</p>
                      <p className="mt-0.5 text-sm text-background/70">Director, Zammit Real Estate</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.72] text-background/80 md:text-[17px]">
                    &ldquo;I&apos;ve been working with him for years and his work is unforgettable. That&apos;s really all you need to know.&rdquo;
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const heroHeight = useRef(600);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const direction = y < lastScrollY.current ? "up" : "down";
      lastScrollY.current = y;

      if (y < heroHeight.current) {
        setVisible(false);
        return;
      }

      if (direction === "up") {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-foreground text-background shadow-lg"
        >
          <div className={`mx-auto flex w-full max-w-[min(100%,1280px)] items-center justify-between gap-4 py-4 ${pageGutter}`}>
            <p className="hidden text-sm font-medium sm:block md:text-base">
              Ready to stop being invisible? <span className="font-semibold">3 spots</span> at <span className="font-semibold">$2,200 AUD</span>.
            </p>
            <p className="text-sm font-medium sm:hidden">
              3 spots at <span className="font-semibold">$2,200 AUD</span>
            </p>
            <Button
              asChild
              size="sm"
              className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              <a href="/book">Book a 20-minute qualifying call →</a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FinalCTA() {
  return (
    <FadeIn>
      <section className="border-b border-border py-20 md:py-24">
        <div className={content}>
          <h2 className="mx-auto max-w-[720px] text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-dark">
            Stop being the best-kept secret in your suburb.
          </h2>
          <div className="mt-10 flex justify-center px-0">
            <Button asChild className={`${ctaPrimary} w-full max-w-md sm:max-w-none sm:w-auto`}>
              <a href="/book">Book a 20-minute qualifying call →</a>
            </Button>
          </div>
          <p className="mx-auto mt-6 max-w-lg text-center font-body text-sm text-dark md:text-base">
            Founding pricing - $2,200 AUD. Three spots. Once they&apos;re gone, it&apos;s $8,500 minimum.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}

function Footer() {
  return (
    <FadeIn>
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
                <motion.a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-body text-xs uppercase tracking-widest text-dark transition-colors hover:text-dark"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  {label}
                </motion.a>
              );
            })}
          </nav>
        </div>
        <p className="mt-8 text-center font-body text-xs text-dark">
          © 2026 Soubh &amp; Co. All rights reserved.
        </p>
      </footer>
    </FadeIn>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-dark antialiased">
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <SprintCallout />
        <TestimonialCarousel />
        <ProblemChecklist />
        <DeliverableCards />
        <FounderSection />
        <SprintTimeline />
        <ContentNinetyDays />
        
        <PricingSection />
        <FAQs />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
