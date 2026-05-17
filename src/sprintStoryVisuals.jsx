import founderPhoto from "./assets/LNS06367.jpeg";
import characterYou from "./assets/character.svg";

/** Comic / editorial panels for the sprint story — each frame should read like a scene, not a wireframe. */

function Halftone({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 mix-blend-multiply ${className}`}
      style={{
        opacity: 0.11,
        backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
        backgroundSize: "5px 5px",
      }}
      aria-hidden
    />
  );
}

/** `tone` resets inherited page `text-white` so light boards stay legible. */
function PanelFrame({ children, className = "", noHalftone, tone = "light" }) {
  const innerTone =
    tone === "dark"
      ? "isolate text-neutral-100 [color-scheme:dark]"
      : "isolate text-neutral-900 [color-scheme:light]";
  return (
    <div
      className={`relative overflow-hidden rounded-sm border-[3px] border-dark bg-cream shadow-[10px_10px_0_rgba(13,13,13,0.14)] ${className}`}
    >
      {!noHalftone ? <Halftone /> : null}
      <div className={`relative z-[1] antialiased ${innerTone}`}>{children}</div>
    </div>
  );
}

export function FrameVisual({ type, motionOn }) {
  switch (type) {
    case "cover":
      return (
        <PanelFrame className="min-h-[300px] md:min-h-[340px]" noHalftone>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_20%,rgba(184,92,56,0.12),transparent_55%),linear-gradient(165deg,#faf7f2_0%,#ebe4d8_100%)]" />
          <Halftone className="!opacity-[0.08]" />
          <div className="relative z-[1] flex min-h-[300px] flex-col items-center justify-center px-6 py-12 text-center md:min-h-[340px] md:px-12">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.42em] text-neutral-600">
              Boutique real estate · Australia
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta/60" aria-hidden />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta">Field notes</span>
              <span className="h-px w-8 bg-terracotta/60" aria-hidden />
            </div>
            <h2 className="font-story mt-10 max-w-[14ch] text-[clamp(1.85rem,5.5vw,3rem)] font-semibold leading-[0.98] tracking-tight text-neutral-950">
              <span className="italic">How the Sprint</span>
              <br />
              <span className="not-italic">Works.</span>
            </h2>
            <p className="mt-8 max-w-md font-body text-[14px] leading-[1.75] text-neutral-800 md:text-[15px]">
              A 6-minute walk through what happens when a boutique Australian real estate agency goes through a 2-week
              positioning sprint with Soubh &amp; Co.
            </p>
            <p className="font-story mt-8 text-lg font-medium italic text-terracotta md:text-xl">The reader is you.</p>
            <div className="mt-10 flex items-center gap-2 font-body text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-600">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-dark/20 bg-white/80 text-xs motion-safe:animate-float-y motion-reduce:animate-none">
                ↓
              </span>
              <span>Turn the page</span>
            </div>
          </div>
        </PanelFrame>
      );

    case "office-saturday":
      return (
        <PanelFrame className="p-0">
          <div className="relative bg-gradient-to-b from-[#dfe8f2] via-[#ebe6df] to-[#e2ddd4] px-4 pb-6 pt-5 md:px-6 md:pt-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-body text-[9px] font-bold uppercase tracking-[0.25em] text-dark/50">Saturday</p>
                <p className="font-story mt-1 text-lg font-semibold italic text-dark md:text-xl">After the appraisal</p>
              </div>
              <div className="shrink-0 rounded border-2 border-dark/15 bg-white/70 px-2 py-1 font-mono text-[9px] text-dark/55">
                10:42
              </div>
            </div>
            {/* Window light */}
            <div className="pointer-events-none absolute right-3 top-14 h-24 w-20 rounded-sm bg-gradient-to-br from-white/90 to-transparent opacity-70 md:right-6 md:top-16 md:h-28 md:w-24" />
            {/* Desk */}
            <div className="relative z-[1] mt-8 rounded-lg border-2 border-[#6b5344]/35 bg-[#c4a882]/25 p-4 shadow-inner md:mt-10 md:p-5">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-[140px] flex-1">
                  <div className="rounded border-2 border-dark/20 bg-white p-3 shadow-sm">
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-3/4 rounded bg-dark/10" />
                      <div className="h-1.5 w-full rounded bg-dark/8" />
                      <div className="h-1.5 w-5/6 rounded bg-dark/8" />
                      <div className="mt-2 flex gap-1">
                        <span className="rounded bg-terracotta/20 px-1.5 py-0.5 font-body text-[8px] font-bold text-dark">
                          CMA
                        </span>
                        <span className="rounded bg-mid/15 px-1.5 py-0.5 font-body text-[8px] font-bold text-dark/70">
                          Proposal
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 font-body text-[10px] text-dark/50">Listing pack · still warm from the printer</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-9 w-9 rounded-full border-2 border-dark/25 bg-white/90 shadow-sm motion-safe:animate-float-y-slow motion-reduce:animate-none" />
                    <span className="font-body text-[8px] text-dark/45">Yours</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="h-9 w-9 rounded-full border-2 border-dashed border-dark/30 bg-white/40 motion-safe:animate-float-y motion-reduce:animate-none"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <span className="font-body text-[8px] text-dark/45">Vendor</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="relative z-[1] mt-4 text-center font-story text-sm italic text-dark/65 md:text-base">
              You already know how this week ends.
            </p>
          </div>
        </PanelFrame>
      );

    case "grid-feeds":
      /** Nine “same feed” tiles — no opacity-0 entrance (it read as a black void). */
      return (
        <PanelFrame className="bg-[#1a1a1f] p-4 md:p-5" tone="dark">
          <div className="relative mx-auto max-w-[280px] rounded-[2rem] border-4 border-zinc-600 bg-zinc-900 p-2 shadow-[0_0_0_2px_rgba(0,0,0,0.5)]">
            <div className="mb-2 flex justify-center">
              <div className="h-1 w-10 rounded-full bg-white/25" />
            </div>
            <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-black p-2 ring-1 ring-white/10">
              {[
                { label: "Island", tone: "from-amber-100 to-amber-50", hint: "kitchen" },
                { label: "SOLD", tone: "from-emerald-600 to-teal-700", hint: "sold" },
                { label: "Team", tone: "from-stone-200 to-stone-100", hint: "team" },
                { label: "Island", tone: "from-amber-50 to-orange-100", hint: "kitchen" },
                { label: "SOLD", tone: "from-emerald-500 to-emerald-700", hint: "sold" },
                { label: "Team", tone: "from-neutral-200 to-stone-50", hint: "team" },
                { label: "Island", tone: "from-yellow-50 to-amber-100", hint: "kitchen" },
                { label: "SOLD", tone: "from-teal-700 to-emerald-800", hint: "sold" },
                { label: "Team", tone: "from-stone-100 to-neutral-100", hint: "team" },
              ].map((cell, i) => (
                <div
                  key={i}
                  className={`relative flex aspect-square flex-col justify-between overflow-hidden rounded-md border border-black/40 bg-gradient-to-br p-1 shadow-inner ${cell.tone}`}
                >
                  {cell.hint === "kitchen" ? (
                    <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
                      <div className="absolute bottom-1 left-1 right-1 top-4 rounded-sm bg-white/75" />
                      <div className="absolute left-2 top-2 h-2 w-3 rounded-sm bg-stone-400/85" />
                    </div>
                  ) : null}
                  {cell.hint === "sold" ? (
                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[10px] font-black tracking-tight text-white drop-shadow-md sm:text-[11px]"
                      aria-hidden
                    >
                      SOLD
                    </div>
                  ) : null}
                  {cell.hint === "team" ? (
                    <div className="pointer-events-none absolute inset-x-1 bottom-1 top-2 flex items-end justify-center gap-0.5 opacity-75" aria-hidden>
                      {[0, 1, 2].map((j) => (
                        <div key={j} className="h-4 w-2.5 rounded-t-sm bg-stone-500/90" />
                      ))}
                    </div>
                  ) : null}
                  <span className="relative z-[1] font-body text-[6px] font-bold uppercase leading-tight tracking-wide text-neutral-800 sm:text-[7px]">
                    {cell.label}
                  </span>
                  <span className="relative z-[1] block h-1.5 w-1.5 rounded-full bg-black/25" />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center font-body text-[11px] font-medium text-white/60">
            Nine feeds. One template. Your thumb can&apos;t tell them apart.
          </p>
        </PanelFrame>
      );

    case "meeting-bubbles":
      return (
        <PanelFrame className="bg-white p-4 md:p-6">
          <p className="text-center font-body text-[10px] font-bold uppercase tracking-[0.2em] text-mid">Monday · one question</p>
          <p className="mt-1 text-center font-story text-lg font-semibold italic text-dark md:text-xl">
            &ldquo;What makes us different—in one sentence?&rdquo;
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { t: "We're more local.", shape: "rounded-[2rem_2rem_2rem_0.4rem]", bg: "bg-orange/12" },
              { t: "White-glove service?", shape: "rounded-[2rem_2rem_0.4rem_2rem]", bg: "bg-terracotta/12" },
              { t: "Culture & trust.", shape: "rounded-[0.4rem_2rem_2rem_2rem]", bg: "bg-cream" },
              { t: "Results. Honestly.", shape: "rounded-[2rem_0.4rem_2rem_2rem]", bg: "bg-mid/8" },
              { t: "…we just care more.", shape: "rounded-[1.5rem]", bg: "bg-terracotta/18 border-2 border-terracotta/35" },
            ].map((b, i) => (
              <div
                key={b.t}
                className={`max-w-[11rem] border-2 border-dark px-3 py-2.5 font-body text-[11px] font-semibold leading-snug text-dark shadow-[3px_3px_0_rgba(13,13,13,0.12)] motion-reduce:opacity-100 ${b.bg} ${b.shape} ${
                  motionOn ? "motion-safe:animate-fade-in-up opacity-0 motion-reduce:animate-none" : "opacity-100"
                }`}
                style={motionOn ? { animationDelay: `${0.08 + i * 0.1}s` } : undefined}
              >
                {b.t}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-story text-sm italic text-dark/60">Five mouths. Five stories. Zero overlap.</p>
        </PanelFrame>
      );

    case "linkedin-post":
      return (
        <PanelFrame className="bg-white p-0">
          <div className="border-b-2 border-dark/10 bg-[#f3f2ef] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-full border-2 border-dark/10 bg-gradient-to-br from-terracotta/30 to-orange/20" />
              <div>
                <p className="font-body text-sm font-bold text-dark">Soubh · Soubh &amp; Co.</p>
                <p className="font-body text-[11px] text-mid">Positioning for boutique agencies · 1st</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-5">
            <p className="font-story text-[17px] font-medium leading-snug text-dark md:text-lg">
              We win on relationships. We just keep losing on commission.
            </p>
            <div className="mt-4 flex gap-4 border-t border-dark/10 pt-3 font-body text-[11px] text-mid">
              <span className="font-semibold text-dark/70">↗ 214 saves</span>
              <span>·</span>
              <span>Your feed · 11:06 pm</span>
            </div>
          </div>
        </PanelFrame>
      );

    case "meet-two-pane":
      /** Two-tile video call: reader (you) + Soubh — use real photo on right, story character on left. */
      return (
        <PanelFrame className="bg-[#0d0d10] p-3 md:p-4" tone="dark">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Recording off</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-white/20 bg-gradient-to-b from-[#1e293b] to-[#0f172a] px-2 pb-3 pt-10">
              <div className="absolute left-2 top-2 z-[2] rounded border border-white/25 bg-black/55 px-1.5 py-0.5 font-mono text-[8px] font-bold text-white">
                YOU
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_55%)]" aria-hidden />
              <div className="relative z-[1] flex h-[72px] w-[72px] shrink-0 items-end justify-center overflow-hidden rounded-full border-2 border-white/35 bg-[#0f172a] shadow-lg sm:h-[88px] sm:w-[88px]">
                <img src={characterYou} alt="" className="h-[95%] w-auto max-w-[130%] object-contain object-bottom" />
              </div>
              <p className="relative z-[1] mt-3 max-w-[11rem] text-center font-body text-[10px] font-medium leading-snug text-white/90">
                Camera on · kitchen echo
              </p>
            </div>
            <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-terracotta/50 bg-gradient-to-b from-terracotta/30 to-[#1a1512] px-2 pb-3 pt-10">
              <div className="absolute left-2 top-2 z-[2] rounded border border-white/25 bg-black/55 px-1.5 py-0.5 font-mono text-[8px] font-bold text-white">
                SOUBH
              </div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(232,197,71,0.08),transparent_50%)]" aria-hidden />
              <div className="relative z-[1] h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-white/50 shadow-lg ring-2 ring-terracotta/40 sm:h-[88px] sm:w-[88px] motion-safe:animate-float-y motion-reduce:animate-none">
                <img src={founderPhoto} alt="" className="h-full w-full object-cover object-top" />
              </div>
              <p className="relative z-[1] mt-3 max-w-[11rem] text-center font-body text-[10px] font-medium leading-snug text-white/90">
                No deck. Just questions.
              </p>
            </div>
          </div>
        </PanelFrame>
      );

    case "two-docs":
      return (
        <PanelFrame className="bg-[#e8e4dc] p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-center">
            <div className="flex-1 rotate-[-1deg] rounded-sm border-2 border-dark bg-white p-4 shadow-[6px_6px_0_rgba(13,13,13,0.12)]">
              <p className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-terracotta">Your intake</p>
              <p className="font-story mt-2 text-base font-semibold text-dark">12 questions</p>
              <div className="mt-4 space-y-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="h-2 rounded-sm bg-dark/[0.07]" style={{ width: `${88 - n * 6}%` }} />
                ))}
              </div>
              <p className="mt-4 font-body text-[10px] text-mid">Due before Monday</p>
            </div>
            <div className="flex-1 rotate-[1deg] rounded-sm border-2 border-dark bg-cream p-4 shadow-[6px_6px_0_rgba(13,13,13,0.12)]">
              <p className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-orange">Our audit</p>
              <p className="font-story mt-2 text-base font-semibold text-dark">3 rivals · 30 days of posts</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Comp A", "Comp B", "Comp C", "Search", "Decks"].map((x) => (
                  <span key={x} className="rounded border border-dark/15 bg-white/80 px-2 py-1 font-body text-[9px] font-bold text-dark/80">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-center font-body text-[11px] font-medium text-dark/55">
            Sunday night: both sides know what Monday smells like.
          </p>
        </PanelFrame>
      );

    case "three-doors":
      return (
        <PanelFrame className="bg-white p-4 md:p-5">
          <p className="text-center font-body text-[10px] font-bold uppercase tracking-[0.25em] text-mid">Monday 9:00 · three doors</p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                k: "Safe",
                sub: "Familiar · defensible · slow",
                risk: "Low risk",
                fill: "25%",
                tint: "bg-mid/10",
              },
              {
                k: "Stretch",
                sub: "Specific · polarising · faster",
                risk: "Medium risk",
                fill: "67%",
                tint: "bg-orange/15",
              },
              {
                k: "Bold",
                sub: "Rough 6 months · famous in 12",
                risk: "High risk",
                fill: "100%",
                tint: "bg-terracotta/18",
              },
            ].map((d, i) => (
              <div
                key={d.k}
                className={`rounded-lg border-2 border-dark p-4 text-center shadow-[4px_4px_0_rgba(13,13,13,0.1)] motion-reduce:opacity-100 ${d.tint} ${
                  motionOn ? "motion-safe:animate-fade-in-up opacity-0 motion-reduce:animate-none" : "opacity-100"
                }`}
                style={motionOn ? { animationDelay: `${i * 0.12}s` } : undefined}
              >
                <p className="font-story text-xl font-bold text-dark">{d.k}</p>
                <p className="mt-2 font-body text-[11px] leading-snug text-dark/70">{d.sub}</p>
                <div className="mx-auto mt-4 h-2 max-w-[120px] rounded-full bg-dark/10">
                  <div className="h-full rounded-full bg-terracotta" style={{ width: d.fill }} />
                </div>
                <p className="mt-2 font-body text-[9px] font-bold uppercase tracking-wider text-mid">{d.risk}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center font-story text-sm italic text-dark/55">You go quiet. That&apos;s the sound of a real choice.</p>
        </PanelFrame>
      );

    case "meeting-internal":
      return (
        <PanelFrame className="bg-white p-4 md:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-mid">Tuesday · internal only</p>
            <span className="rounded-full bg-terracotta/15 px-2 py-0.5 font-body text-[9px] font-bold text-terracotta">No consultants</span>
          </div>
          <div className="mt-6 flex justify-between px-2 md:px-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`h-10 w-10 rounded-full border-2 border-dark/25 ${
                    i === 2 ? "bg-terracotta/25 ring-2 ring-terracotta/40" : "bg-cream"
                  }`}
                />
                <div className="h-6 w-px bg-dark/15" />
              </div>
            ))}
          </div>
          <div className="mx-auto mt-2 max-w-sm rounded-xl border-2 border-dashed border-dark/25 bg-cream/80 py-6 text-center">
            <p className="font-story text-sm italic text-dark/50">Empty chair where we&apos;d sit</p>
            <p className="mt-2 font-body text-[11px] font-medium text-dark/65">The decision has to be yours—not ours.</p>
          </div>
        </PanelFrame>
      );

    case "deck-slides":
      return (
        <PanelFrame className="bg-[#2a2826] p-4 md:p-5" tone="dark">
          <p className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">Positioning deck · vFinal</p>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 pt-1">
            {["Promise", "Who", "Enemy", "Proof", "Voice", "No-go"].map((label, i) => (
              <div
                key={label}
                className={`flex h-28 w-[4.5rem] shrink-0 flex-col justify-between rounded border-2 border-white/10 bg-gradient-to-b from-cream to-[#e8e0d4] p-2 motion-reduce:opacity-100 md:h-32 md:w-[5.25rem] ${
                  motionOn ? "motion-safe:animate-fade-in-up opacity-0 motion-reduce:animate-none" : "opacity-100"
                }`}
                style={motionOn ? { animationDelay: `${i * 0.07}s` } : undefined}
              >
                <span className="font-body text-[8px] font-bold text-dark/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-[9px] font-bold leading-tight text-dark">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center font-body text-[11px] text-white/50">One deck. Every appraisal. Same sentence.</p>
        </PanelFrame>
      );

    case "calendar-content":
      return (
        <PanelFrame className="bg-white p-4">
          <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-mid">While you&apos;re on inspections</p>
          <div className="mt-4 rounded-lg border-2 border-dark/15 p-3">
            <div className="grid grid-cols-5 gap-1 text-center font-body text-[9px] font-bold uppercase text-mid">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-5 gap-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex aspect-square flex-col items-center justify-center rounded border border-dark/10 text-[7px] font-bold ${
                    i % 5 === 0
                      ? "bg-pink-100/80 text-pink-900"
                      : i % 5 === 2
                        ? "bg-sky-100/90 text-sky-900"
                        : i % 5 === 4
                          ? "bg-violet-100/80 text-violet-900"
                          : "bg-mid/8 text-mid"
                  }`}
                >
                  {i % 5 === 0 ? "IG" : i % 5 === 2 ? "LI" : i % 5 === 4 ? "Long" : "·"}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center font-story text-sm italic text-dark/60">Four weeks drafted before you&apos;ve caught your breath.</p>
        </PanelFrame>
      );

    case "slack-review":
      return (
        <PanelFrame className="bg-[#3f0d40] p-0">
          <div className="flex">
            <div className="hidden w-14 shrink-0 border-r border-white/10 bg-[#350d36] py-4 sm:block">
              <div className="mx-auto h-8 w-8 rounded-lg bg-white/10" />
            </div>
            <div className="min-w-0 flex-1 bg-white">
              <div className="border-b border-dark/10 px-3 py-2">
                <p className="font-body text-[11px] font-bold text-dark"># sprint-content</p>
              </div>
              <div className="space-y-2 p-3">
                <div className="rounded-lg border border-dark/10 bg-cream/50 p-2">
                  <p className="font-body text-[10px] text-mid">Soubh · draft batch · Week 1</p>
                  <p className="mt-1 font-body text-xs text-dark">3 IG · 2 LI · 1 long-form</p>
                </div>
                <div className="rounded-lg border-l-4 border-terracotta bg-white p-3 shadow-sm">
                  <p className="font-body text-[10px] font-bold text-terracotta">You · 9:14 am</p>
                  <p className="mt-1 font-body text-sm leading-snug text-dark">
                    Yes. Yes. Change <span className="underline decoration-terracotta/50">one word</span> in the third post.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PanelFrame>
      );

    case "checklist-done":
      return (
        <PanelFrame className="bg-cream p-6 md:p-8">
          <p className="text-center font-story text-xl font-semibold text-dark md:text-2xl">Week 2 · Friday</p>
          <p className="mt-1 text-center font-body text-[11px] text-mid">The sprint closes. The system stays on.</p>
          <ul className="mx-auto mt-6 max-w-xs space-y-3">
            {[
              "3 positioning strategies — in writing",
              "6-slide deck — locked",
              "Brand voice guide — signed off",
              "Month 1 — queued in your accounts",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3 font-body text-sm font-medium text-dark">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-dark bg-white text-xs font-bold text-terracotta">
                  ✓
                </span>
                {x}
              </li>
            ))}
          </ul>
        </PanelFrame>
      );

    case "calendar-day14":
      return (
        <PanelFrame className="bg-white p-6">
          <p className="text-center font-body text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta">Day 14</p>
          <p className="mt-3 text-center font-story text-lg font-semibold italic text-dark md:text-xl">Same Tuesday meeting. Same words this time.</p>
          <div className="mx-auto mt-6 grid w-max grid-cols-7 gap-1">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded border-2 font-body text-[10px] font-bold ${
                  i === 13 ? "border-terracotta bg-terracotta text-white" : "border-dark/10 bg-cream text-dark/50"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </PanelFrame>
      );

    case "stats-90":
      return (
        <PanelFrame className="bg-gradient-to-b from-cream to-[#ebe4d8] p-6 md:p-8">
          <p className="text-center font-story text-[clamp(2.5rem,8vw,4rem)] font-bold leading-none text-dark">90</p>
          <p className="text-center font-body text-[10px] font-bold uppercase tracking-[0.35em] text-mid">Days later</p>
          <div className="mx-auto mt-6 max-w-md space-y-2">
            {[
              "36 posts · still sounds like your office",
              "Engagement · above your old baseline",
              "Inbound · vendors who already get you",
              "Appraisals · less discounting, more spine",
            ].map((s) => (
              <div key={s} className="rounded-lg border-2 border-dark/10 bg-white/90 px-4 py-2.5 font-body text-sm font-medium text-dark shadow-sm">
                {s}
              </div>
            ))}
          </div>
        </PanelFrame>
      );

    case "cta-close":
      return (
        <PanelFrame className="min-h-[120px] border-terracotta/40 bg-gradient-to-br from-cream via-white to-orange/5 p-8 md:min-h-[140px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/2 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent motion-safe:animate-story-scan motion-reduce:animate-none" />
          </div>
          <div className="relative text-center">
            <p className="font-story text-2xl font-semibold italic text-dark md:text-3xl">Your turn.</p>
            <p className="mx-auto mt-3 max-w-sm font-body text-sm text-dark/70">
              Two weeks. One locked story. Built for boutiques with 5–25 agents—not franchises.
            </p>
          </div>
        </PanelFrame>
      );

    default:
      return null;
  }
}
