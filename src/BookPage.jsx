import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, CheckCircle, Rocket } from "lucide-react";
import FadeIn from "./components/FadeIn";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoPng from "./assets/logo.png";
import avatarMarkZammit from "./assets/Mark Zammit.png";
import Footer from "./components/Footer";
import { BOOKING_TIMELINE_LINE_CLASS, bookingTimelineMarkerClass } from "./bookingTimelineShared.js";

const CALENDLY_EMBED_URL =
  "https://calendly.com/hello-iamsoubh/positioning-chat-soubh-co?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=08608F&text_color=1A1A1A&background_color=FFFFFF";

const TIMELINE_STEPS = [
  {
    title: "Book a time",
    details:
      "Pick a slot below. You'll get a confirmation email immediately and a reminder the day before. Reschedule anytime up to 4 hours prior.",
    icon: Calendar,
  },
  {
    title: "The call (25 min)",
    details:
      "Soubh asks 6 questions about your agency, your market, and where the marketing is not pulling its weight. Then he gives you an honest read on whether the sprint fits and which tier.",
    icon: Phone,
  },
  {
    title: "Decision (within 1 hour)",
    details:
      "If it's a fit, you'll get a proposal email with the intake form and 50% deposit invoice. If it's not, you'll get a polite email with specific recommendations elsewhere.",
    icon: CheckCircle,
  },
  {
    title: "Sprint kicks off",
    details: "Two-week sprint starts within 14-21 days of deposit. Three steps. Done.",
    icon: Rocket,
  },
];

function BookNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass =
    "whitespace-nowrap font-body text-sm font-medium text-dark/65 transition-colors duration-150 hover:text-dark";
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
    <header className="sticky top-0 z-50 border-b border-dark/10 bg-white pt-[env(safe-area-inset-top,0px)]">
      <div className="relative mx-auto w-full max-w-[min(100%,1280px)] px-3 sm:px-4 lg:px-5">
        <div className="relative z-50 mx-auto flex w-full items-center justify-between gap-3 py-3 sm:gap-4">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5 py-0.5 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logoPng} alt="" className="h-9 w-auto shrink-0 sm:h-10 md:h-11" aria-hidden />
            <span className="font-display text-lg font-bold leading-none tracking-tight text-dark sm:text-xl md:text-2xl">
              Soubh &amp; Co.
            </span>
          </Link>
          <div className="flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-3 md:gap-8">
            <nav className="hidden items-center gap-5 md:flex lg:gap-8" aria-label="Primary">
              <motion.a href="/#sprint" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                Sprint
              </motion.a>
              <motion.a href="/#founder" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                About Founder
              </motion.a>
              <motion.a href="/#pricing" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                Pricing
              </motion.a>
              <motion.a href="/#faqs" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                FAQs
              </motion.a>
              <motion.a href="/#contact" className={linkClass} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                Contact
              </motion.a>
            </nav>
            <a
              href="#calendly-embed"
              className="hidden shrink-0 flex-col items-center justify-center rounded-lg bg-orange px-2.5 py-1.5 text-center text-xs font-semibold leading-tight text-white transition-all hover:brightness-110 sm:px-4 sm:py-2.5 sm:text-sm md:inline-flex md:!px-5"
            >
              Get a free positioning diagnostic
              <span className="mt-0.5 hidden max-w-[9.5rem] text-balance font-body text-[10px] font-normal leading-tight text-white/90 sm:block sm:max-w-none">
                Founding pricing. 3 spots.
              </span>
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-dark/10 bg-white text-dark transition-colors hover:bg-dark/5 md:hidden"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
                {menuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
                ) : (
                  <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full border-b border-dark/10 bg-white px-3 py-6 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <a href="/#sprint" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Sprint</a>
              <a href="/#founder" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>About Founder</a>
              <a href="/#pricing" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Pricing</a>
              <a href="/#faqs" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>FAQs</a>
              <a href="/#contact" className={mobileNavLinkClass} onClick={() => setMenuOpen(false)}>Contact</a>
              <a
                href="#calendly-embed"
                className="mx-auto mt-2 flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-orange px-8 py-3.5 text-center font-semibold text-white transition-all hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
                Get a free positioning diagnostic
                <span className="mt-0.5 text-balance font-body text-[10px] font-normal leading-tight text-white/90">
                  Founding pricing. 3 spots.
                </span>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

function StepTimeline() {
  return (
    <FadeIn>
      <section className="pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout - Horizontal stepper */}
          <div className="hidden md:block">
            {/* Icons row with continuous line */}
            <div className="relative mb-10">
              {/* Continuous connecting line */}
              <div className="absolute left-[12.5%] right-[12.5%] top-7 h-[2px] bg-dark/10" />
              <div className="absolute left-[12.5%] top-7 h-[2px] w-16 bg-orange" />

              {/* Icons */}
              <div className="relative grid grid-cols-4">
                {TIMELINE_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isFirst = idx === 0;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex justify-center"
                    >
                      <div
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all ${
                          isFirst
                            ? "border-orange bg-orange text-white shadow-lg shadow-orange/25"
                            : "border-dark/15 bg-white text-dark/50"
                        }`}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Content row */}
            <div className="grid grid-cols-4 gap-8">
              {TIMELINE_STEPS.map((step, idx) => {
                const isFirst = idx === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isFirst ? "text-orange" : "text-dark/40"
                      }`}
                    >
                      Step {idx + 1}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold tracking-tight text-dark lg:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.65] text-dark/60 lg:text-sm">
                      {step.details}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout - Vertical stepper */}
          <div className="md:hidden">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute bottom-0 left-5 top-0 w-[2px] bg-dark/10" />
              <div
                className="absolute left-5 top-0 w-[2px] bg-orange"
                style={{ height: '60px' }}
              />

              <div className="space-y-6">
                {TIMELINE_STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  const isFirst = idx === 0;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="relative flex gap-4 pl-0"
                    >
                      {/* Step circle */}
                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                          isFirst
                            ? "border-orange bg-orange text-white"
                            : "border-dark/15 bg-white text-dark/50"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isFirst ? "text-orange" : "text-dark/40"
                          }`}
                        >
                          Step {idx + 1}
                        </span>
                        <h3
                          className={`mt-1 font-display text-base font-bold tracking-tight ${
                            isFirst ? "text-dark" : "text-dark"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="mt-1.5 font-body text-sm leading-[1.6] text-dark/60">
                          {step.details}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
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

function BookContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", agency: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <FadeIn>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: form */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60 md:text-xs">
                Get in touch
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-dark">
                Not ready to book? Leave your details and we&apos;ll reach out.
              </h2>
              <p className="mt-4 max-w-md font-body text-base leading-[1.65] text-dark/70">
                Tell us a little about your agency and we&apos;ll get back to you within 24 hours with next steps.
              </p>

              {submitted ? (
                <Card className="mt-8 border border-dark/10 bg-dark/5 p-6 md:p-8">
                  <p className="font-display text-lg font-semibold text-dark">Thanks — we&apos;ll be in touch soon.</p>
                  <p className="mt-2 font-body text-sm text-dark/70">
                    We usually reply within one business day.
                  </p>
                </Card>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="font-body text-sm font-medium text-dark">Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-lg border border-dark/15 bg-white px-3.5 py-2.5 font-body text-sm text-dark outline-none transition-colors placeholder:text-dark/40 focus:border-orange focus:ring-1 focus:ring-orange"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="font-body text-sm font-medium text-dark">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-lg border border-dark/15 bg-white px-3.5 py-2.5 font-body text-sm text-dark outline-none transition-colors placeholder:text-dark/40 focus:border-orange focus:ring-1 focus:ring-orange"
                        placeholder="you@agency.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-agency" className="font-body text-sm font-medium text-dark">Agency name</label>
                    <input
                      id="contact-agency"
                      type="text"
                      value={form.agency}
                      onChange={(e) => setForm((f) => ({ ...f, agency: e.target.value }))}
                      className="w-full rounded-lg border border-dark/15 bg-white px-3.5 py-2.5 font-body text-sm text-dark outline-none transition-colors placeholder:text-dark/40 focus:border-orange focus:ring-1 focus:ring-orange"
                      placeholder="Your agency"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="font-body text-sm font-medium text-dark">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="w-full resize-none rounded-lg border border-dark/15 bg-white px-3.5 py-2.5 font-body text-sm text-dark outline-none transition-colors placeholder:text-dark/40 focus:border-orange focus:ring-1 focus:ring-orange"
                      placeholder="What are you hoping to fix?"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-xl bg-orange px-8 py-3 font-semibold text-white hover:bg-orange/90 sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>

            {/* Right: dark value card */}
            <FadeIn direction="right" className="flex items-stretch">
              <Card className="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-0 bg-dark p-8 text-white md:p-10">
                <div>
                  <Badge className="inline-flex w-fit rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 md:text-[11px]">
                    Why reach out?
                  </Badge>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight md:text-[1.65rem]">
                    Most agencies don&apos;t have a marketing problem. They have a positioning problem.
                  </h3>
                  <p className="mt-4 font-body text-[15px] leading-[1.65] text-white/80 md:text-base">
                    If your team describes the agency five different ways, vendors negotiate on commission, and your social
                    still feels like a startup — the sprint was built for you.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/15 pt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarMarkZammit}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-display text-base font-semibold text-white">Mark Zammit</p>
                      <p className="mt-0.5 font-body text-sm text-white/70">Director, Zammit Real Estate</p>
                    </div>
                  </div>
                  <p className="mt-4 font-body text-[15px] leading-[1.72] text-white/80 md:text-[17px]">
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


export default function BookPage() {
  return (
    <div className="min-h-screen bg-white text-dark">
      <BookNav />

      <main>
        <section className="pb-6 pt-16 md:pb-8 md:pt-20">
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
          className="bg-gradient-to-b from-[#DCEAF2] via-[#EAF3F8] to-[#F4F8FB] py-16 md:py-20"
        >
          <div className="mx-auto max-w-[1024px] px-3 sm:px-4 lg:px-5">
            <p className="font-body text-center text-[17px] font-semibold text-dark md:text-[18px]">Pick a time that works.</p>
            <CalendlyInline />
          </div>
        </section>

        <TestimonialCarousel />

        <BookContactSection />
      </main>

      <Footer />
    </div>
  );
}
