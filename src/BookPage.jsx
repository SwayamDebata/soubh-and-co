import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "./components/FadeIn";
import TestimonialCarousel from "./components/TestimonialCarousel";
import logoPng from "./assets/logo.png";
import { BOOKING_TIMELINE_LINE_CLASS, bookingTimelineMarkerClass } from "./bookingTimelineShared.js";

const CALENDLY_EMBED_URL =
  "https://calendly.com/hello-iamsoubh/positioning-chat-soubh-co?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=08608F&text_color=1A1A1A&background_color=FFFFFF";

const TIMELINE_STEPS = [
  {
    title: "Book a time",
    details:
      "Pick a slot below. You'll get a confirmation email immediately and a reminder the day before. Reschedule anytime up to 4 hours prior.",
  },
  {
    title: "The call (25 min)",
    details:
      "Soubh asks 6 questions about your agency, your market, and where the marketing is not pulling its weight. Then he gives you an honest read on whether the sprint fits and which tier.",
  },
  {
    title: "Decision (within 1 hour after the call)",
    details:
      "If it's a fit, you'll get a proposal email with the intake form and 50% deposit invoice. If it's not, you'll get a polite email with specific recommendations elsewhere.",
  },
  {
    title: "Sprint kicks off",
    details: "Two-week sprint starts within 14-21 days of deposit. Three steps. Done.",
  },
];

function BookNav() {
  const navLink =
    "whitespace-nowrap font-body text-sm font-medium text-dark/70 transition-colors hover:text-dark";
  return (
    <header className="sticky top-0 z-50 border-b border-dark/10 bg-white">
      <div className="mx-auto flex w-full max-w-[min(100%,1280px)] items-center justify-between gap-4 px-3 py-3 sm:px-4 lg:px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoPng} alt="" className="h-10 w-auto" aria-hidden />
          <span className="font-display text-xl font-bold tracking-tight text-dark">Soubh &amp; Co.</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          <motion.a href="/#sprint" className={navLink} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            Sprint
          </motion.a>
          <motion.a href="/#pricing" className={navLink} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            Pricing
          </motion.a>
          <motion.a href="/#faqs" className={navLink} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            FAQs
          </motion.a>
          <Button asChild className="rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <a href="#calendly-embed">Book a 20-minute qualifying call</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function StepTimeline() {
  return (
    <FadeIn>
      <section className="border-b border-dark/10 py-16 md:py-20">
        <div className="mx-auto max-w-[min(100%,1280px)] px-3 sm:px-4 lg:px-5">
          <div className="hidden md:block">
            <div className="relative mb-5 px-5">
              <span className={BOOKING_TIMELINE_LINE_CLASS} aria-hidden />
              <div className="relative z-10 grid grid-cols-4">
                {TIMELINE_STEPS.map((_, idx) => (
                  <div key={`dot-${idx}`} className="flex justify-center">
                    <span className={bookingTimelineMarkerClass(idx === 0 ? "current" : "upcoming")}>
                      {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {TIMELINE_STEPS.map((step, idx) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                  <h3
                    className={`font-display text-[1.2rem] font-bold tracking-tight ${
                      idx === 0 ? "text-orange" : "text-dark"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.72] text-dark/80">{step.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid gap-7 md:hidden">
            {TIMELINE_STEPS.map((step, idx) => (
              <motion.div key={step.title} className="relative px-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                <div className="flex items-center gap-3">
                  <span className={bookingTimelineMarkerClass(idx === 0 ? "current" : "upcoming")}>
                    {idx + 1}
                  </span>
                  <h3
                    className={`font-display text-lg font-bold tracking-tight ${
                      idx === 0 ? "text-orange" : "text-dark"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 font-body text-[15px] leading-[1.72] text-dark/80">{step.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

function CalendlyInline() {
  const [embedHeight, setEmbedHeight] = useState(1200);

  useEffect(() => {
    const src = "https://assets.calendly.com/assets/external/widget.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const onCalendlyResize = (event) => {
      if (!event?.data || typeof event.data !== "object") return;
      if (!String(event.origin || "").includes("calendly.com")) return;
      if (event.data.event !== "calendly.page_height") return;

      const nextHeight = event.data.payload?.height;
      if (typeof nextHeight !== "number" || nextHeight < 600) return;
      const paddedHeight = Math.ceil(nextHeight) + 40;
      setEmbedHeight((currentHeight) => Math.max(currentHeight, paddedHeight));
    };

    window.addEventListener("message", onCalendlyResize);
    return () => window.removeEventListener("message", onCalendlyResize);
  }, []);

  return (
    <div
      className="calendly-inline-widget mt-6 overflow-hidden rounded-xl border border-dark/15"
      data-url={CALENDLY_EMBED_URL}
      data-resize="true"
      style={{ minWidth: "320px", height: `${embedHeight}px` }}
    />
  );
}

function BookFooter() {
  return (
    <footer className="border-t border-dark/10 py-10">
      <div className="mx-auto flex w-full max-w-[min(100%,1280px)] items-center justify-between gap-5 px-3 sm:px-4 lg:px-5">
        <p className="font-body text-xs text-dark/75">© 2026 Soubh &amp; Co. All rights reserved.</p>
        <a
          href="https://www.linkedin.com/in/iamsoubh/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs uppercase tracking-wider text-dark hover:text-orange"
        >
          Soubh on LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-white text-dark">
      <BookNav />

      <main>
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[920px] px-3 text-center sm:px-4 lg:px-5">
            <h1 className="font-display text-[clamp(2rem,4.9vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-dark">
              Book a 25-minute call with Soubh.
            </h1>
            <p className="mx-auto mt-6 max-w-[760px] font-body text-[17px] leading-[1.7] text-dark/85 md:text-[19px]">
              A short, honest conversation about whether a Soubh &amp; Co. sprint is the right move for your agency.
              No deck, no pitch, no follow-up nurture if it is not a fit.
            </p>
          </div>
        </section>

        <StepTimeline />

        {/* <section className="border-b border-dark/10 py-16 md:py-20">
          <div className="mx-auto max-w-[920px] px-3 sm:px-4 lg:px-5">
            <div className="border border-dark/15 bg-white p-6 md:p-8">
              <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.35rem)] font-bold tracking-tight text-dark">
                What happens on the call
              </h2>
              <p className="mt-5 font-body text-[16px] leading-[1.7] text-dark/85 md:text-[18px]">
                The call is 25 minutes. Soubh runs every one of them himself.
              </p>
              <div className="mt-6 space-y-5 font-body text-[15px] leading-[1.72] text-dark/85 md:text-[17px]">
                <p>
                  The first 10 minutes: you talk. About your agency, your team, what you&apos;ve tried, what&apos;s working,
                  what is not. No pitch, no slides, no agenda. Just listening.
                </p>
                <p>
                  The next 10 minutes: Soubh shares an honest read. Whether the sprint is the right move. Which tier fits.
                  What the realistic timeline would be. If it is not a fit, where you should look instead.
                </p>
                <p>
                  The last 5 minutes: next steps. Either a proposal email going out within the hour, or a clear this is
                  not us with specific recommendations.
                </p>
                <p className="font-semibold text-dark">No deck. No hard sell. No follow-up nurture if the answer is no.</p>
              </div>
            </div>
          </div>
        </section> */}

        <section
          id="calendly-embed"
          className="border-b border-dark/10 bg-gradient-to-b from-[#DCEAF2] via-[#EAF3F8] to-[#F4F8FB] py-16 md:py-20"
        >
          <div className="mx-auto max-w-[1024px] px-3 sm:px-4 lg:px-5">
            <p className="font-body text-center text-[17px] font-semibold text-dark md:text-[18px]">Pick a time that works.</p>
            <CalendlyInline />
          </div>
        </section>

        <TestimonialCarousel />
      </main>

      <BookFooter />
    </div>
  );
}
