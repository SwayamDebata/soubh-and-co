import { useState } from "react";
import { Link } from "react-router-dom";
import { WEB3FORMS_ACCESS_KEY } from "./config";

const GCI_OPTIONS = [
  "Under $2M",
  "$2M–$4M",
  "More than $4M",
];

const MARKETING_OPTIONS = [
  "The director (me)",
  "A dedicated in-house marketing person",
  "An admin / receptionist who also does marketing",
  "An external freelancer or agency",
  "Nobody - it's ad hoc",
];

const LINKEDIN_URL = "https://www.linkedin.com/in/iamsoubh/";

const initialForm = {
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  q1_agency: "",
  q2_gci: "",
  q3_barbecue: "",
  q4_suburbs: "",
  q5_competitors: "",
  q6_bs_claims: "",
  q7_best_client: "",
  q8_vendor_not_want: "",
  q9_why_pick_you: "",
  q10_marketing: "",
  q11_assets: "",
  q12_success: "",
};

function StepProgress({ currentStep = 2 }) {
  const steps = [
    { num: 1, label: "You read the offer" },
    { num: 2, label: "Intake" },
    { num: 3, label: "Confirmation call (15 min)" },
    { num: 4, label: "Sprint kicks off" },
  ];
  const progressPct = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="mb-12 rounded-2xl border-2 border-dark/15 bg-white px-4 py-7 sm:px-8">
      <p className="mb-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-dark/45">
        Progress
      </p>
      <p className="mb-6 font-body text-sm text-dark/65">
        Track where you are across the 4-step process.
      </p>
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-4 hidden h-[2px] bg-dark/15 md:block" />
          <div
            className="absolute left-[12.5%] top-4 hidden h-[2px] bg-orange/75 md:block"
            style={{ width: `${progressPct * 0.75}%` }}
          />
        </div>
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-4">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className="flex w-full items-center justify-center">
                <span
                  className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold ${
                    currentStep >= s.num
                      ? "border-orange bg-orange text-white"
                      : "border-dark/35 bg-white text-dark/60"
                  }`}
                >
                  {s.num}
                </span>
              </div>
              <p
                className={`mt-2 max-w-[170px] text-center font-body text-xs leading-snug ${
                  currentStep >= s.num ? "text-dark" : "text-dark/65"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntakePage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const activeStep = status === "success" ? 3 : 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    const lines = [
      "═══ INTAKE FORM ═══",
      "",
      "--- Contact ---",
      `Name: ${form.contactName}`,
      `Email: ${form.contactEmail}`,
      `Phone: ${form.contactPhone}`,
      "",
      "--- Section 01 - Your Agency ---",
      `Q1 Agency name & base: ${form.q1_agency}`,
      `Q2 Annual GCI range: ${form.q2_gci}`,
      `Q3 Barbecue pitch: ${form.q3_barbecue}`,
      "",
      "--- Section 02 - Your Market ---",
      `Q4 Suburbs/regions: ${form.q4_suburbs}`,
      `Q5 Three boutique competitors: ${form.q5_competitors}`,
      `Q6 BS competitors claim: ${form.q6_bs_claims}`,
      "",
      "--- Section 03 - Your Vendors ---",
      `Q7 Best client (12 mo): ${form.q7_best_client}`,
      `Q8 Vendor you do NOT want: ${form.q8_vendor_not_want}`,
      `Q9 Why vendors pick you: ${form.q9_why_pick_you}`,
      "",
      "--- Section 04 - Your Marketing ---",
      `Q10 Who runs marketing: ${form.q10_marketing}`,
      `Q11 Website, social, pre-appraisal: ${form.q11_assets}`,
      `Q12 Success from sprint: ${form.q12_success}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!WEB3FORMS_ACCESS_KEY) {
      setError("Form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to .env");
      return;
    }
    if (
      !form.contactName.trim() ||
      !form.contactEmail.trim() ||
      !form.contactPhone.trim() ||
      !form.q1_agency.trim() ||
      !form.q2_gci ||
      !form.q3_barbecue.trim() ||
      !form.q4_suburbs.trim() ||
      !form.q5_competitors.trim() ||
      !form.q6_bs_claims.trim() ||
      !form.q7_best_client.trim() ||
      !form.q8_vendor_not_want.trim() ||
      !form.q9_why_pick_you.trim() ||
      !form.q10_marketing ||
      !form.q11_assets.trim() ||
      !form.q12_success.trim()
    ) {
      setError("Please fill in every field before submitting.");
      return;
    }

    setStatus("submitting");
    const message = buildMessage();

    try {
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("subject", `Intake - ${form.q1_agency.slice(0, 60)}`);
      fd.append("from_name", form.contactName.trim());
      fd.append("email", form.contactEmail.trim());
      fd.append("replyto", form.contactEmail.trim());
      fd.append("message", message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || "Something went wrong.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setError(err.message || "Failed to send. Try again or email directly.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-white text-dark">
        <header className="border-b border-dark/10 bg-white px-6 py-5">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <Link
              to="/"
              className="font-display text-sm font-bold uppercase tracking-wide text-dark underline decoration-dark/30 underline-offset-4 hover:decoration-dark"
            >
              ← Back to offer
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <StepProgress currentStep={activeStep} />
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-dark/50">
            Submitted.
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-dark md:text-4xl">
            You're between step 02 and step 03 now.
          </h1>
          <div className="mt-10 space-y-6 font-body text-base leading-relaxed text-dark/85 md:text-lg">
            <p>
              We've got your intake. Within 48 hours, you'll hear from us at the email you submitted
              with our initial read and a short call booked in.
            </p>
            <p className="font-semibold text-dark">That call is 15 minutes. We'll cover three things:</p>
            <ul className="list-disc space-y-2 pl-6 text-dark/85">
              <li>Our first read on where your positioning sits in the market</li>
              <li>Confirm the sprint is the right move for your agency</li>
              <li>Walk through the deposit and lock the kickoff date</li>
            </ul>
            <p>
              If anything urgent comes up, hit reply on the confirmation email or{" "}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-dark underline decoration-dark/30 underline-offset-4 hover:decoration-dark"
              >
                DM Soubh on LinkedIn
              </a>
              .
            </p>
            <p className="pt-4 font-display text-sm text-dark/60">- Soubh</p>
            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border-2 border-dark bg-orange px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white transition-shadow hover:shadow-[4px_4px_0_0_rgba(13,13,13,0.25)]"
              >
                Back to offer
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const labelClass =
    "block font-display text-[11px] font-bold uppercase tracking-[0.15em] text-dark mb-2";
  const inputClass =
    "w-full rounded-lg border-2 border-dark/80 bg-white px-4 py-3 font-body text-base text-dark placeholder:text-dark/35 focus:border-dark focus:outline-none focus:ring-2 focus:ring-dark/15";
  const sectionTitle =
    "font-display text-lg font-bold uppercase tracking-wide text-dark border-b border-dark/15 pb-3 mb-8";

  return (
    <div className="min-h-screen bg-white text-dark">
      <header className="border-b border-dark/10 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            to="/"
            className="font-display text-sm font-bold uppercase tracking-wide text-dark underline decoration-dark/30 underline-offset-4 hover:decoration-dark"
          >
            ← Back to offer
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <StepProgress currentStep={activeStep} />

        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-dark/50">
          You're step {String(activeStep).padStart(2, "0")}.
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-dark md:text-4xl">
          Intake
        </h1>

        <div className="mt-8 space-y-6 font-body text-base leading-relaxed text-dark/85 md:text-lg">
          <p>
            Most directors book a call first. You went straight to intake. We'll catch up after.
          </p>
          <p>
            This intake takes about 12 minutes. The more honest you are, the sharper the strategies
            we come back with. We'll review what you've sent within 48 hours and book a short call
            to walk through what's next.
          </p>
          <p className="font-semibold text-dark">
            No call needed before the form. The call comes after, once we've reviewed your answers
            and shaped the first read.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="border border-dark/15 bg-white p-6 md:p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-dark">
              What happens after you submit
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-dark/85 md:text-base">
              <li>You'll get a confirmation email immediately.</li>
              <li>
                Within 48 hours, we'll review everything you've sent and reach out to book a
                15-minute confirmation call. That call is short and direct, we'll share our initial
                read on your positioning landscape, confirm fit, and walk through deposit + sprint
                kickoff.
              </li>
              <li>
                If we don't think the sprint is the right move for your agency, we'll tell you
                straight on the call. No pitch.
              </li>
            </ul>
          </div>
          <div className="border border-dark/15 bg-white p-6 md:p-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-dark">
              What we don't ask for
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-dark/85 md:text-base">
              <li>We don't need polished documents. Send us what you actually have, however rough.</li>
              <li>We don't need exact GCI to the dollar. A range is enough.</li>
              <li>We don't need you to write essays. One honest sentence beats five polite ones.</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-14 space-y-14">
          <div>
            <h2 className={sectionTitle}>Your contact</h2>
            <p className="-mt-4 mb-6 font-body text-sm text-dark/65">
              So we can reach you after we review your answers.
            </p>
            <div className="space-y-6">
              <div>
                <label htmlFor="contactName" className={labelClass}>
                  Your name
                </label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  value={form.contactName}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className={labelClass}>
                  Your email
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={form.contactEmail}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="contactPhone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="contactPhone"
                  name="contactPhone"
                  type="tel"
                  value={form.contactPhone}
                  onChange={handleChange}
                  className={inputClass}
                  autoComplete="tel"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className={sectionTitle}>Section 01 - Your Agency</h2>
            <div className="space-y-8">
              <div>
                <label htmlFor="q1_agency" className={labelClass}>
                  Q1. What's your agency's name and where are you based?
                </label>
                <input
                  id="q1_agency"
                  name="q1_agency"
                  type="text"
                  value={form.q1_agency}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Short answer"
                />
              </div>
              <div>
                <span className={labelClass}>
                  Q2. Annual GCI range - your honest range, not your LinkedIn version.
                </span>
                <div className="space-y-3">
                  {GCI_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-3 font-body text-base text-dark"
                    >
                      <input
                        type="radio"
                        name="q2_gci"
                        value={opt}
                        checked={form.q2_gci === opt}
                        onChange={handleChange}
                        className="h-4 w-4 border-dark text-dark focus:ring-dark"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="q3_barbecue" className={labelClass}>
                  Q3. In one sentence - how do you describe what your agency does to someone at a
                  barbecue?
                </label>
                <p className="mb-2 font-body text-sm italic text-dark/55">
                  This is where most agencies write something generic. Resist that.
                </p>
                <textarea
                  id="q3_barbecue"
                  name="q3_barbecue"
                  rows={4}
                  value={form.q3_barbecue}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className={sectionTitle}>Section 02 - Your Market</h2>
            <div className="space-y-8">
              <div>
                <label htmlFor="q4_suburbs" className={labelClass}>
                  Q4. What suburbs or regions do you primarily list and sell in?
                </label>
                <input
                  id="q4_suburbs"
                  name="q4_suburbs"
                  type="text"
                  value={form.q4_suburbs}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="q5_competitors" className={labelClass}>
                  Q5. Name 3 boutique or independent agencies you actually compete with for vendors.
                  (Not the franchises.)
                </label>
                <textarea
                  id="q5_competitors"
                  name="q5_competitors"
                  rows={4}
                  value={form.q5_competitors}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>
              <div>
                <label htmlFor="q6_bs_claims" className={labelClass}>
                  Q6. What do those competitors say about themselves that you think is BS - but
                  vendors seem to believe?
                </label>
                <p className="mb-2 font-body text-sm italic text-dark/55">
                  Be specific. "They claim to be 'local experts' but they're not from the area"
                  beats "they exaggerate."
                </p>
                <textarea
                  id="q6_bs_claims"
                  name="q6_bs_claims"
                  rows={4}
                  value={form.q6_bs_claims}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className={sectionTitle}>Section 03 - Your Vendors</h2>
            <div className="space-y-8">
              <div>
                <label htmlFor="q7_best_client" className={labelClass}>
                  Q7. Describe your single best client of the last 12 months. Property type, suburb,
                  price bracket, what they were like to deal with.
                </label>
                <textarea
                  id="q7_best_client"
                  name="q7_best_client"
                  rows={5}
                  value={form.q7_best_client}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[120px]`}
                />
              </div>
              <div>
                <label htmlFor="q8_vendor_not_want" className={labelClass}>
                  Q8. What kind of vendor do you NOT want? Be specific.
                </label>
                <p className="mb-2 font-body text-sm italic text-dark/55">
                  This question matters more than the previous one. The "no" defines the brand.
                </p>
                <textarea
                  id="q8_vendor_not_want"
                  name="q8_vendor_not_want"
                  rows={4}
                  value={form.q8_vendor_not_want}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>
              <div>
                <label htmlFor="q9_why_pick_you" className={labelClass}>
                  Q9. When a vendor picks you over another agency, what's the reason they usually
                  give?
                </label>
                <textarea
                  id="q9_why_pick_you"
                  name="q9_why_pick_you"
                  rows={4}
                  value={form.q9_why_pick_you}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className={sectionTitle}>Section 04 - Your Marketing</h2>
            <div className="space-y-8">
              <div>
                <span className={labelClass}>Q10. Who currently runs marketing at the agency?</span>
                <div className="space-y-3">
                  {MARKETING_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-3 font-body text-base text-dark"
                    >
                      <input
                        type="radio"
                        name="q10_marketing"
                        value={opt}
                        checked={form.q10_marketing === opt}
                        onChange={handleChange}
                        className="h-4 w-4 border-dark text-dark focus:ring-dark"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="q11_assets" className={labelClass}>
                  Q11. Send us your website, your social handles, and anything you give vendors
                  before an appraisal - even if it's rough.
                </label>
                <p className="mb-2 font-body text-sm italic text-dark/55">
                  Don't polish anything. We get more value from the rough versions.
                </p>
                <textarea
                  id="q11_assets"
                  name="q11_assets"
                  rows={5}
                  value={form.q11_assets}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[120px]`}
                />
              </div>
              <div>
                <label htmlFor="q12_success" className={labelClass}>
                  Q12. What does success from this sprint look like for you, in plain English?
                </label>
                <p className="mb-2 font-body text-sm italic text-dark/55">
                  "More leads" is not the answer. Be specific about what would change about your
                  business.
                </p>
                <textarea
                  id="q12_success"
                  name="q12_success"
                  rows={4}
                  value={form.q12_success}
                  onChange={handleChange}
                  className={`${inputClass} resize-y min-h-[100px]`}
                />
              </div>
            </div>
          </div>

          {error && (
            <p className="font-body text-sm font-semibold text-red-800" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mx-auto block w-full max-w-[440px] rounded-2xl border-4 border-dark bg-orange px-6 py-3 text-center font-display text-2xl font-bold capitalize tracking-tight text-white shadow-[6px_6px_0_0_#0D0D0D] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#0D0D0D] disabled:opacity-50 md:text-3xl"
          >
            {status === "submitting" ? "Sending…" : "Submit intake"}
          </button>
        </form>
      </main>
    </div>
  );
}
