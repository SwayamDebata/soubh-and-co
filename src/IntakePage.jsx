import { useState } from "react";
import { Link } from "react-router-dom";
import { CALENDLY_URL, WEB3FORMS_ACCESS_KEY } from "./config.js";

const intakeFieldClass =
  "mt-1.5 w-full rounded-lg border-2 border-dark bg-white px-3 py-2.5 font-body text-sm text-dark outline-none transition-shadow placeholder:text-dark/35 focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2";
const intakeLabelClass = "block font-body text-[11px] font-bold uppercase tracking-wide text-dark";

function IntakeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [phone, setPhone] = useState("");
  const [market, setMarket] = useState("");
  const [materials, setMaterials] = useState("");
  const [challenges, setChallenges] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(
        "Add VITE_WEB3FORMS_ACCESS_KEY to your .env file (free key at web3forms.com) to enable submissions here, or book a call on Calendly."
      );
      return;
    }
    setStatus("sending");
    const message = [
      `Agency: ${agency}`,
      `Phone: ${phone || "—"}`,
      `Primary market / patch: ${market}`,
      "",
      "Links & materials (drives, decks, social):",
      materials || "—",
      "",
      "Challenges / what we should know:",
      challenges,
    ].join("\n");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Soubh & Co — Pre-work intake",
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setName("");
        setEmail("");
        setAgency("");
        setPhone("");
        setMarket("");
        setMaterials("");
        setChallenges("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Try again or use Calendly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Try again or book via Calendly.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border-2 border-dark bg-[#F4FAF4] p-4 font-body text-sm leading-relaxed text-dark">
        <p className="font-semibold text-dark">Thanks — intake received.</p>
        <p className="mt-2 text-dark/80">
          We&apos;ll review this before Workshop 1. If anything urgent comes up, reply to the confirmation email or
          book time on{" "}
          <a
            href={CALENDLY_URL}
            className="font-semibold text-orange underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calendly
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
          className="mt-4 font-body text-sm font-semibold text-orange underline underline-offset-2 hover:text-dark"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <div className="space-y-4">
        <div>
          <label htmlFor="intake-name" className={intakeLabelClass}>
            Your name
          </label>
          <input
            id="intake-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="intake-email" className={intakeLabelClass}>
            Work email
          </label>
          <input
            id="intake-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="intake-agency" className={intakeLabelClass}>
            Agency name
          </label>
          <input
            id="intake-agency"
            name="agency"
            type="text"
            required
            value={agency}
            onChange={(ev) => setAgency(ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="intake-phone" className={intakeLabelClass}>
            Phone <span className="font-normal normal-case text-dark/50">(optional)</span>
          </label>
          <input
            id="intake-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="intake-market" className={intakeLabelClass}>
            Primary market / patch
          </label>
          <input
            id="intake-market"
            name="market"
            type="text"
            required
            placeholder="e.g. Inner west Sydney, Geelong corridor"
            value={market}
            onChange={(ev) => setMarket(ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="intake-materials" className={intakeLabelClass}>
            Links & materials
          </label>
          <textarea
            id="intake-materials"
            name="materials"
            rows={3}
            placeholder="Listing presentations, Drive links, social handles, anything we should read."
            value={materials}
            onChange={(ev) => setMaterials(ev.target.value)}
            className={`${intakeFieldClass} min-h-[5.5rem] resize-y`}
          />
        </div>
        <div>
          <label htmlFor="intake-challenges" className={intakeLabelClass}>
            Competitors & challenges
          </label>
          <textarea
            id="intake-challenges"
            name="challenges"
            rows={4}
            required
            minLength={20}
            placeholder="Who you lose listings to, positioning pain, what you want the sprint to fix."
            value={challenges}
            onChange={(ev) => setChallenges(ev.target.value)}
            className={`${intakeFieldClass} min-h-[7rem] resize-y`}
          />
        </div>
      </div>
      {errorMessage ? (
        <p className="mt-4 font-body text-sm leading-snug text-red-700" role="alert">
          {errorMessage}{" "}
          <a href={CALENDLY_URL} className="font-semibold underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Open Calendly
          </a>
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg border-[3px] border-dark bg-orange px-5 py-3 font-body text-sm font-bold text-white transition-[transform,box-shadow] duration-200 ease-out shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0D0D0D] disabled:translate-x-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send intake"}
      </button>
    </form>
  );
}

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-white font-body text-dark antialiased">
      <header className="border-b border-border px-3 py-4 sm:px-4 lg:px-5">
        <div className="mx-auto w-full max-w-[min(100%,1280px)]">
          <Link to="/" className="font-body text-sm font-medium text-dark/70 transition-colors hover:text-dark">
            ← Back to Soubh & Co.
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-lg px-3 py-10 sm:px-4 lg:px-5">
        <h1 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight text-dark">Pre-work intake</h1>
        <div className="mt-10">
          <IntakeForm />
        </div>
      </main>
    </div>
  );
}
