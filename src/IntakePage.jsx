import { useState } from "react";
import { Link } from "react-router-dom";
import { CALENDLY_URL, WEB3FORMS_ACCESS_KEY } from "./config.js";

const intakeFieldClass =
  "mt-1.5 w-full rounded-lg border-2 border-dark bg-white px-3 py-2.5 font-body text-sm text-dark outline-none transition-shadow placeholder:text-dark/35 focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2";
const intakeLabelClass = "block font-body text-[11px] font-bold uppercase tracking-wide text-dark";

const GCI_OPTIONS = [
  { value: "under_2m", label: "Under $2M" },
  { value: "2m_4m", label: "$2M – $4M" },
  { value: "over_4m", label: "More than $4M" },
];

const Q10_OPTIONS = [
  { value: "principal", label: "The principal (me)" },
  { value: "dedicated", label: "A dedicated in-house marketing person" },
  { value: "admin", label: "An admin / receptionist who also does marketing" },
  { value: "external", label: "An external freelancer or agency" },
  { value: "nobody", label: "Nobody — it's ad hoc" },
];

const initialForm = {
  full_name: "",
  email: "",
  agency_name: "",
  q1_barbecue: "",
  q2_gci: "",
  q3_suburbs: "",
  q4_competitors: "",
  q5_franchise: "",
  q6_bs_claims: "",
  q7_best_client: "",
  q8_vendor_not_want: "",
  q9_why_chosen: "",
  q10_marketing: "",
  q11_links: "",
  q12_success: "",
};

function Helper({ children }) {
  return <p className="mt-1.5 font-body text-xs leading-relaxed text-dark/60">{children}</p>;
}

function SectionTitle({ n, title }) {
  return (
    <h2 className="mt-12 border-b-2 border-dark pb-2 font-display text-lg font-bold tracking-tight text-dark first:mt-0 md:text-xl">
      Section {n} — {title}
    </h2>
  );
}

function IntakeForm() {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

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

    const list = Array.from(files || []);
    const hasLinks = form.q11_links.trim().length >= 15;
    const hasFiles = list.length >= 1;
    if (!hasLinks && !hasFiles) {
      setErrorMessage("For Q11, either attach PDFs or paste shareable links (Drive / Dropbox).");
      return;
    }
    if (!form.q2_gci) {
      setErrorMessage("Please select your GCI range (Q2).");
      return;
    }
    if (!form.q10_marketing) {
      setErrorMessage("Please select who runs marketing (Q10).");
      return;
    }
    for (const f of list) {
      if (f.size > 10 * 1024 * 1024) {
        setErrorMessage(`"${f.name}" is over 10MB. Use links instead or compress the PDF.`);
        return;
      }
      if (!/pdf$/i.test(f.name) && f.type !== "application/pdf") {
        setErrorMessage(`"${f.name}" should be a PDF.`);
        return;
      }
    }

    setStatus("sending");

    const q11FileSummary =
      list.length > 0
        ? list.map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`).join(", ")
        : "(no files attached)";

    const message = [
      "Soubh & Co. Sprint — Intake (12 questions)",
      "",
      "CONTACT",
      `Name: ${form.full_name}`,
      `Email: ${form.email}`,
      `Agency: ${form.agency_name}`,
      "",
      "SECTION 1 — Your agency",
      `Q1 Barbecue pitch: ${form.q1_barbecue}`,
      `Q2 GCI: ${form.q2_gci}`,
      `Q3 Suburbs/regions: ${form.q3_suburbs}`,
      "",
      "SECTION 2 — Your market",
      `Q4 Competitors: ${form.q4_competitors}`,
      `Q5 Franchise losses: ${form.q5_franchise}`,
      `Q6 Competitor BS: ${form.q6_bs_claims}`,
      "",
      "SECTION 3 — Your vendors",
      `Q7 Best client: ${form.q7_best_client}`,
      `Q8 Vendor you do NOT want: ${form.q8_vendor_not_want}`,
      `Q9 Why they pick you: ${form.q9_why_chosen}`,
      "",
      "SECTION 4 — Your marketing",
      `Q10 Who runs marketing: ${form.q10_marketing}`,
      `Q11 Decks/presentations (links): ${form.q11_links || "(see filenames only)"}`,
      `Q11 Files attached (names): ${q11FileSummary}`,
      `Q12 Success definition: ${form.q12_success}`,
    ].join("\n");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Soubh & Co — Sprint intake (12 Q)",
      name: form.full_name,
      email: form.email,
      from_name: `${form.full_name} (${form.agency_name})`,
      replyto: form.email,
      message,
      agency_name: form.agency_name,
      q1_barbecue: form.q1_barbecue,
      q2_gci: form.q2_gci,
      q3_suburbs: form.q3_suburbs,
      q4_competitors: form.q4_competitors,
      q5_franchise: form.q5_franchise,
      q6_bs_claims: form.q6_bs_claims,
      q7_best_client: form.q7_best_client,
      q8_vendor_not_want: form.q8_vendor_not_want,
      q9_why_chosen: form.q9_why_chosen,
      q10_marketing: form.q10_marketing,
      q11_links: form.q11_links,
      q11_files_list: q11FileSummary,
      q12_success: form.q12_success,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(initialForm);
        setFiles([]);
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
      <div className="rounded-lg border-2 border-dark bg-[#F4FAF4] p-6 font-body text-sm leading-relaxed text-dark md:p-8">
        <p className="font-display text-lg font-bold text-dark">Got it.</p>
        <p className="mt-3 text-dark/85">
          We&apos;ll review everything in the next 48 hours. If we have follow-up questions, they&apos;ll come from
          hello@iamsoubh.com
        </p>
        <p className="mt-3 text-dark/85">
          Otherwise, expect your kickoff email by the Friday before sprint week (we&apos;ll confirm dates in reply).
        </p>
        <p className="mt-4 text-dark/70">— Soubh</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
          className="mt-6 font-body text-sm font-semibold text-orange underline underline-offset-2 hover:text-dark"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0" aria-busy={status === "sending"}>
      <div className="rounded-2xl border-2 border-dark bg-[#FAFCFD] p-5 md:p-6">
        <p className="font-display text-xl font-bold text-dark md:text-2xl">Soubh &amp; Co. Sprint — Intake</p>
        <p className="mt-3 font-body text-sm leading-relaxed text-dark/80 md:text-[15px]">
          12 questions. About 12 minutes. The more honest you are, the sharper the strategies we come back with, there
          are no points for being polite about your own business.
        </p>
      </div>

      <div className="mt-8 space-y-5 rounded-2xl border-2 border-dark bg-white p-5 md:p-6">
        <p className={intakeLabelClass}>Your details (for this submission)</p>
        <div>
          <label htmlFor="full_name" className={intakeLabelClass}>
            Full name
          </label>
          <input
            id="full_name"
            required
            autoComplete="name"
            value={form.full_name}
            onChange={(ev) => setField("full_name", ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={intakeLabelClass}>
            Work email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(ev) => setField("email", ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
        <div>
          <label htmlFor="agency_name" className={intakeLabelClass}>
            Agency name
          </label>
          <input
            id="agency_name"
            required
            value={form.agency_name}
            onChange={(ev) => setField("agency_name", ev.target.value)}
            className={intakeFieldClass}
          />
        </div>
      </div>

      <SectionTitle n={1} title="Your agency" />
      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="q1" className={intakeLabelClass}>
            Q1. In one sentence, how do you describe what your agency does to someone at a barbecue?
          </label>
          <textarea
            id="q1"
            required
            rows={4}
            value={form.q1_barbecue}
            onChange={(ev) => setField("q1_barbecue", ev.target.value)}
            className={`${intakeFieldClass} min-h-[6rem] resize-y`}
          />
          <Helper>This is where most agencies write something generic. Resist that.</Helper>
        </div>
        <fieldset>
          <legend className={intakeLabelClass}>Q2. Annual GCI range (your honest range, not your LinkedIn version)</legend>
          <div className="mt-3 space-y-2">
            {GCI_OPTIONS.map((o) => (
              <label key={o.value} className="flex cursor-pointer items-center gap-3 font-body text-sm text-dark">
                <input
                  type="radio"
                  name="q2_gci"
                  value={o.value}
                  checked={form.q2_gci === o.value}
                  onChange={() => setField("q2_gci", o.value)}
                  className="h-4 w-4 border-2 border-dark text-orange focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="q3" className={intakeLabelClass}>
            Q3. What suburbs or regions do you primarily list and sell in?
          </label>
          <textarea
            id="q3"
            required
            rows={3}
            value={form.q3_suburbs}
            onChange={(ev) => setField("q3_suburbs", ev.target.value)}
            className={`${intakeFieldClass} min-h-[5rem] resize-y`}
          />
        </div>
      </div>

      <SectionTitle n={2} title="Your market" />
      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="q4" className={intakeLabelClass}>
            Q4. Name 3 boutique or independent agencies you actually compete with for vendors. (Not the franchises.)
          </label>
          <textarea
            id="q4"
            required
            rows={4}
            value={form.q4_competitors}
            onChange={(ev) => setField("q4_competitors", ev.target.value)}
            className={`${intakeFieldClass} min-h-[6rem] resize-y`}
          />
        </div>
        <div>
          <label htmlFor="q5" className={intakeLabelClass}>
            Q5. What franchise do you lose listings to most often, and what&apos;s the real reason they win?
          </label>
          <textarea
            id="q5"
            required
            rows={4}
            value={form.q5_franchise}
            onChange={(ev) => setField("q5_franchise", ev.target.value)}
            className={`${intakeFieldClass} min-h-[6rem] resize-y`}
          />
        </div>
        <div>
          <label htmlFor="q6" className={intakeLabelClass}>
            Q6. What do your competitors say about themselves that you think is BS, but vendors seem to believe?
          </label>
          <textarea
            id="q6"
            required
            rows={4}
            value={form.q6_bs_claims}
            onChange={(ev) => setField("q6_bs_claims", ev.target.value)}
            className={`${intakeFieldClass} min-h-[6rem] resize-y`}
          />
          <Helper>
            Be specific. &quot;They claim to be local experts but they&apos;re not from the area&quot; beats &quot;they
            exaggerate.&quot;
          </Helper>
        </div>
      </div>

      <SectionTitle n={3} title="Your vendors" />
      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="q7" className={intakeLabelClass}>
            Q7. Describe your single best client of the last 12 months. Property type, suburb, price bracket, what they
            were like to deal with.
          </label>
          <textarea
            id="q7"
            required
            rows={5}
            value={form.q7_best_client}
            onChange={(ev) => setField("q7_best_client", ev.target.value)}
            className={`${intakeFieldClass} min-h-[7rem] resize-y`}
          />
        </div>
        <div>
          <label htmlFor="q8" className={intakeLabelClass}>
            Q8. What kind of vendor do you NOT want? Be specific.
          </label>
          <textarea
            id="q8"
            required
            rows={4}
            value={form.q8_vendor_not_want}
            onChange={(ev) => setField("q8_vendor_not_want", ev.target.value)}
            className={`${intakeFieldClass} min-h-[6rem] resize-y`}
          />
          <Helper>This question matters more than the previous one. The &quot;no&quot; defines the brand.</Helper>
        </div>
        <div>
          <label htmlFor="q9" className={intakeLabelClass}>
            Q9. When a vendor picks you over another agency, what&apos;s the reason they usually give?
          </label>
          <textarea
            id="q9"
            required
            rows={4}
            value={form.q9_why_chosen}
            onChange={(ev) => setField("q9_why_chosen", ev.target.value)}
            className={`${intakeFieldClass} min-h-[6rem] resize-y`}
          />
        </div>
      </div>

      <SectionTitle n={4} title="Your marketing" />
      <div className="mt-6 space-y-6">
        <fieldset>
          <legend className={intakeLabelClass}>Q10. Who currently runs marketing at the agency?</legend>
          <div className="mt-3 space-y-2">
            {Q10_OPTIONS.map((o) => (
              <label key={o.value} className="flex cursor-pointer items-center gap-3 font-body text-sm text-dark">
                <input
                  type="radio"
                  name="q10_marketing"
                  value={o.value}
                  checked={form.q10_marketing === o.value}
                  onChange={() => setField("q10_marketing", o.value)}
                  className="h-4 w-4 border-2 border-dark text-orange focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
                />
                {o.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="q11_files" className={intakeLabelClass}>
            Q11. Upload 2–3 of your most recent listing presentations or pitch decks (PDF, max 10MB each)
          </label>
          <input
            id="q11_files"
            type="file"
            accept=".pdf,application/pdf"
            multiple
            onChange={(ev) => setFiles(ev.target.files ? Array.from(ev.target.files) : [])}
            className="mt-2 block w-full font-body text-sm text-dark file:mr-3 file:rounded-md file:border-2 file:border-dark file:bg-white file:px-3 file:py-2 file:font-semibold file:text-dark hover:file:bg-zinc-50"
          />
          <label htmlFor="q11_links" className={`${intakeLabelClass} mt-4`}>
            Or paste shareable links (Drive / Dropbox). Required if you skip files.
          </label>
          <textarea
            id="q11_links"
            rows={3}
            value={form.q11_links}
            onChange={(ev) => setField("q11_links", ev.target.value)}
            placeholder="https://..."
            className={`${intakeFieldClass} min-h-[4.5rem] resize-y`}
          />
          <Helper>The actual document you give vendors. Not a polished version. The real one.</Helper>
        </div>
        <div>
          <label htmlFor="q12" className={intakeLabelClass}>
            Q12. What does success from this sprint look like for you, in plain English?
          </label>
          <textarea
            id="q12"
            required
            rows={5}
            value={form.q12_success}
            onChange={(ev) => setField("q12_success", ev.target.value)}
            className={`${intakeFieldClass} min-h-[7rem] resize-y`}
          />
          <Helper>&quot;More leads&quot; is not the answer. Be specific about what would change about your business.</Helper>
        </div>
      </div>

      {errorMessage ? (
        <p className="mt-6 font-body text-sm leading-snug text-red-700" role="alert">
          {errorMessage}{" "}
          <a href={CALENDLY_URL} className="font-semibold underline underline-offset-2" target="_blank" rel="noopener noreferrer">
            Open Calendly
          </a>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-lg border-[3px] border-dark bg-orange px-5 py-3 font-body text-[15px] font-bold text-white transition-[transform,box-shadow] duration-200 ease-out shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0D0D0D] disabled:translate-x-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Submit intake"}
      </button>
    </form>
  );
}

function BookingPathway() {
  const steps = [
    { n: "1", title: "Calendly booking", detail: "5 fields. Meet link + calendar. Lead." },
    { n: "2", title: "Confirmation email", detail: "Immediate. Prep for the call." },
    { n: "3", title: "Reminder (24h)", detail: "Automated before the call." },
    { n: "4", title: "The call (25 min)", detail: "Fit vs not a fit." },
    { n: "5a", title: "Proposal (fit)", detail: "Intake link + 50% invoice." },
    { n: "5b", title: "Decline (not fit)", detail: "Polite, specific next step." },
    { n: "6", title: "Intake submitted", detail: "This form (~12 min)." },
    { n: "7", title: "Deposit paid", detail: "Slot locked." },
    { n: "8", title: "Kickoff email", detail: "Friday before sprint week." },
    { n: "9", title: "Sprint begins", detail: "Agreed Monday." },
  ];
  return (
    <div className="rounded-2xl border-2 border-dark bg-white p-5 shadow-[6px_6px_0_0_rgba(13,13,13,0.08)] md:p-8">
      <p className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-mid">Part 1 — Booking pathway</p>
      <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-dark md:text-2xl">
        One form, one clear funnel from booking to sprint kickoff.
      </h2>
      <p className="mt-3 font-body text-sm leading-relaxed text-dark/80 md:text-[15px]">
        LinkedIn / homepage / quiz → Calendly → emails → call → proposal or decline → this intake → deposit → kickoff
        → sprint Monday.
      </p>
      <ol className="mt-6 space-y-3 border-t border-border pt-6">
        {steps.map((s) => (
          <li key={s.n} className="flex gap-3 font-body text-sm leading-snug text-dark md:text-[15px]">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-dark bg-[#EAF6FF] text-xs font-bold">
              {s.n}
            </span>
            <span>
              <span className="font-semibold">{s.title}.</span> {s.detail}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-body text-xs leading-relaxed text-dark/60">
        Stage copy for Calendly, confirmation, proposal, and kickoff lives in your playbook. This page is the Stage 6
        intake only.
      </p>
    </div>
  );
}

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-white font-body text-dark antialiased">
      <header className="border-b border-border px-3 py-4 sm:px-4 lg:px-5">
        <div className="mx-auto w-full max-w-[min(100%,1280px)]">
          <Link to="/" className="font-body text-sm font-medium text-dark/70 transition-colors hover:text-dark">
            ← Back to Soubh &amp; Co.
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl px-3 py-10 sm:px-4 lg:max-w-3xl lg:px-5">
        <h1 className="font-display text-[clamp(1.65rem,4vw,2.35rem)] font-bold tracking-tight text-dark">
          Soubh &amp; Co. — Intake form + booking pathway
        </h1>
        <div className="mt-10 space-y-12">
          <BookingPathway />
          <div>
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-mid">Part 2 — Intake</p>
            <IntakeForm />
          </div>
        </div>
      </main>
    </div>
  );
}
