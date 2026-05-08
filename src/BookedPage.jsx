import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPng from "./assets/logo.png";

const NEXT_STEPS = [
  {
    title: "Booked",
    subtitle: "You picked your time. We're set.",
    state: "done",
  },
  {
    title: "The call (next up)",
    subtitle:
      "25 minutes. Soubh runs it. The first 10 are listening, the next 10 are an honest read, the last 5 are next steps. No deck, no hard sell.",
    state: "current",
  },
  {
    title: "Decision (after call)",
    subtitle:
      "Within 1 hour after the call, you'll get a proposal email or a polite this is not us with specific recommendations.",
    state: "upcoming",
  },
  {
    title: "Sprint kicks off (TBD)",
    subtitle: "If it is a fit: two weeks live, plus 90 days of content. Founding pricing is $5,000 AUD while spots remain.",
    state: "upcoming",
  },
];

function BookedNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E0D5] bg-[#FAF8F3]">
      <div className="mx-auto flex w-full max-w-[min(100%,1280px)] items-center justify-between gap-4 px-3 py-3 sm:px-4 lg:px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoPng} alt="" className="h-10 w-auto" aria-hidden />
          <span className="font-display text-xl font-bold tracking-tight text-dark">Soubh &amp; Co.</span>
        </Link>
        <a href="/book" className="font-body text-sm font-semibold text-dark underline underline-offset-4 hover:text-orange">
          Back to booking page
        </a>
      </div>
    </header>
  );
}

function TimelineState() {
  return (
    <div className="mt-10">
      <div className="hidden md:block">
        <div className="relative mb-5 px-5">
          <span className="absolute left-5 right-5 top-[22px] h-[2px] bg-[#E5E0D5]" />
          <div className="relative grid grid-cols-4">
            {NEXT_STEPS.map((step, idx) => (
              <div key={`dot-${step.title}`} className="flex justify-center">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 font-body text-sm font-bold ${
                    step.state === "done"
                      ? "border-dark/40 bg-[#D9D9D9] text-dark"
                      : step.state === "current"
                        ? "border-[#B85C3A] bg-[#B85C3A] text-white shadow-[0_6px_14px_rgba(184,92,58,0.28)]"
                        : "border-dark/35 bg-white text-dark/60"
                  }`}
                >
                  {step.state === "done" ? "✓" : idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {NEXT_STEPS.map((step) => (
            <div key={step.title}>
              <h3
                className={`font-display text-[1.2rem] font-bold tracking-tight ${
                  step.state === "current" ? "text-[#B85C3A]" : "text-dark"
                }`}
              >
                {step.title}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.72] text-dark/80">{step.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-7 md:hidden">
        {NEXT_STEPS.map((step, idx) => (
          <div key={step.title} className="relative px-1">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-body text-sm font-bold ${
                  step.state === "done"
                    ? "border-dark/40 bg-[#D9D9D9] text-dark"
                    : step.state === "current"
                      ? "border-[#B85C3A] bg-[#B85C3A] text-white shadow-[0_6px_14px_rgba(184,92,58,0.28)]"
                      : "border-dark/35 bg-white text-dark/60"
                }`}
              >
                {step.state === "done" ? "✓" : idx + 1}
              </span>
              <h3
                className={`font-display text-lg font-bold tracking-tight ${
                  step.state === "current" ? "text-[#B85C3A]" : "text-dark"
                }`}
              >
                {step.title}
              </h3>
            </div>
            <p className="mt-3 font-body text-[15px] leading-[1.72] text-dark/80">{step.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LightFooter() {
  return (
    <footer className="border-t border-[#E5E0D5] py-10">
      <div className="mx-auto flex w-full max-w-[min(100%,1280px)] flex-wrap items-center justify-between gap-5 px-3 sm:px-4 lg:px-5">
        <p className="font-body text-xs text-dark/75">© 2026 Soubh &amp; Co. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/iamsoubh/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-wider text-dark hover:text-orange"
          >
            LinkedIn
          </a>
          <a href="/" className="font-body text-xs uppercase tracking-wider text-dark hover:text-orange">
            Privacy
          </a>
          <a href="/" className="font-body text-xs uppercase tracking-wider text-dark hover:text-orange">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function BookedPage() {
  const { search } = useLocation();
  const inviteeName = useMemo(() => {
    const params = new URLSearchParams(search);
    return (
      params.get("invitee_first_name") ||
      params.get("invitee_full_name") ||
      params.get("invitee_last_name") ||
      ""
    ).trim();
  }, [search]);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-dark">
      <BookedNav />

      <main>
        <section className="border-b border-[#E5E0D5] py-16 md:py-20">
          <div className="mx-auto max-w-[920px] px-3 sm:px-4 lg:px-5">
            <h1 className="font-display text-[clamp(2rem,5vw,3.3rem)] font-bold leading-[1.05] tracking-tight text-dark">
              <span className="mr-2 text-[#B85C3A]">✓</span>
              You&apos;re locked in.
            </h1>
            {inviteeName ? (
              <p className="mt-3 font-body text-[16px] font-semibold text-dark/85 md:text-[17px]">Nice one, {inviteeName}.</p>
            ) : null}
            <p className="mt-5 font-body text-[17px] leading-[1.72] text-dark/85 md:text-[19px]">
              Check your inbox. A confirmation email is on its way with the Google Meet link, calendar invite, and the
              option to reschedule if anything comes up.
            </p>
            <p className="mt-4 font-body text-[14px] leading-[1.7] text-dark/70 md:text-[15px]">
              Calendly sends the calendar file through that confirmation email. Use the save-to-calendar option there to
              add it in one click.
            </p>
          </div>
        </section>

        <section className="border-b border-[#E5E0D5] py-16 md:py-20">
          <div className="mx-auto max-w-[min(100%,1280px)] px-3 sm:px-4 lg:px-5">
            <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold tracking-tight text-dark">
              What happens next
            </h2>
            <TimelineState />
          </div>
        </section>

        <section className="border-b border-[#E5E0D5] py-16 md:py-20">
          <div className="mx-auto max-w-[920px] px-3 sm:px-4 lg:px-5">
            <h2 className="font-display text-[clamp(1.55rem,3.2vw,2.1rem)] font-bold tracking-tight text-dark">
              Two small things before the call
            </h2>
            <ol className="mt-7 space-y-5 font-body text-[15px] leading-[1.72] text-dark/85 md:text-[17px]">
              <li>
                <span className="font-semibold text-dark">01.</span> Open your agency&apos;s Instagram and LinkedIn in a tab
                somewhere. We&apos;ll glance at them together. Not to roast them, just to ground the conversation in real
                examples.
              </li>
              <li>
                <span className="font-semibold text-dark">02.</span> Think about one boutique competitor in your market who
                you think does have clear positioning. We&apos;ll talk about why.
              </li>
            </ol>
            <p className="mt-6 font-body text-[15px] text-dark/85 md:text-[17px]">
              That&apos;s it. Don&apos;t put a deck together. Don&apos;t write notes. Don&apos;t prep questions.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[920px] px-3 sm:px-4 lg:px-5">
            <h2 className="font-display text-[clamp(1.55rem,3.2vw,2.1rem)] font-bold tracking-tight text-dark">
              In the meantime
            </h2>
            <p className="mt-5 font-body text-[15px] leading-[1.72] text-dark/85 md:text-[17px]">
              If you want to see how Soubh thinks about positioning before the call, the LinkedIn posts cover most of it:
            </p>
            <a
              href="https://www.linkedin.com/in/iamsoubh/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex font-body text-[15px] font-semibold text-dark underline decoration-dark/35 underline-offset-4 hover:text-orange hover:decoration-orange/60 md:text-[17px]"
            >
              Soubh on LinkedIn →
            </a>
            <p className="mt-6 font-body text-[15px] leading-[1.72] text-dark/85 md:text-[17px]">
              If anything urgent comes up before the call, just hit reply on the confirmation email.
            </p>
            <p className="mt-6 font-display text-sm text-dark/70">- Soubh</p>
          </div>
        </section>
      </main>

      <LightFooter />
    </div>
  );
}
