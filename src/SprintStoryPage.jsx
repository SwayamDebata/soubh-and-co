import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import joshNormal from "./assets/storyboard/josh-normal.png";
import joshThinking from "./assets/storyboard/josh-thinking.png";
import soubhWriting from "./assets/storyboard/soubh-writing.png";
import soubhPointing from "./assets/storyboard/soubh-pointing.png";
import soubhSmile from "./assets/storyboard/soubh-smile.png";
import bgScene01Office from "./assets/storyboard/bg-scene-01-office-saturday.png";
import bgScene03 from "./assets/storyboard/bg-scene-3.png";
import bgScene04 from "./assets/storyboard/bg-scene-4.png";
import bgScene05 from "./assets/storyboard/bg-scene-5.png";
import bgScene06 from "./assets/storyboard/bg-scene-6.png";
import bgScene07 from "./assets/storyboard/bg-scene-07-google-meet.png";
import bgScene08 from "./assets/storyboard/bg-scene-8.png";
import bgScene09 from "./assets/storyboard/bg-scene-9.png";
import bgScene10 from "./assets/storyboard/bg-scene-10.png";
import joshTalking from "./assets/storyboard/  josh-talking.png";
import annaBaseV1 from "./assets/storyboard/anna-base-v1.png";
import tomGesture from "./assets/storyboard/tom-gesture.png";
import priyaThoughtful from "./assets/storyboard/priya-thoughfull.png";
import davidSitting from "./assets/storyboard/david-sitting.png";

const TERRA = "#B85C3A";
const TOTAL_SLIDES = 19;

function ComicPanelBubble({ children, className = "", tail = "bottom-left", caption, captionClassName = "" }) {
  // SVG tail — proper comic speech bubble triangle with border outline
  const tailSvg =
    tail === "bottom-left" ? (
      <svg
        className="absolute -bottom-[18px] left-8 z-[2]"
        width="24" height="18" viewBox="0 0 24 18" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Border triangle (slightly bigger, stroke colour) */}
        <polygon points="0,0 24,0 6,18" fill="#0D0D0D" />
        {/* Fill triangle (inset to show border) */}
        <polygon points="2.5,0 24,0 7.5,15" fill="#FFFCF5" />
      </svg>
    ) : tail === "bottom-right" ? (
      <svg
        className="absolute -bottom-[18px] right-10 z-[2]"
        width="24" height="18" viewBox="0 0 24 18" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <polygon points="0,0 24,0 18,18" fill="#0D0D0D" />
        <polygon points="0,0 21.5,0 16.5,15" fill="#FFFCF5" />
      </svg>
    ) : null;

  return (
    <div
      className={`font-comic relative rounded-2xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3 text-[#0D0D0D] sm:rounded-[1.25rem] sm:px-5 sm:py-4 ${className}`}
      style={{ fontFamily: '"Bangers", ui-sans-serif, system-ui, sans-serif' }}
    >
      {caption ? (
        <p
          className={`mb-1.5 font-body text-[9px] font-bold uppercase tracking-[0.16em] text-[#0D0D0D]/50 ${captionClassName}`}
        >
          {caption}
        </p>
      ) : null}
      {children}
      {tailSvg}
    </div>
  );
}

/** Cover only: comic speech bubble + Soubh (larger), aligned as one column. */
function CoverComicIntro({ text, narratorSrc }) {
  return (
    <div className="flex w-[min(100%,21rem)] max-w-[calc(100vw-2rem)] flex-col items-start sm:w-[min(100%,23.5rem)]">
      <div className="relative z-[2] mb-3 w-full sm:mb-4">
        <ComicPanelBubble
          tail="bottom-left"
          className="-rotate-[0.35deg] rounded-[1.75rem] border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[5px_5px_0_rgba(13,13,13,0.55)] sm:rounded-[2rem] sm:px-5 sm:py-4 sm:shadow-[6px_6px_0_rgba(13,13,13,0.5)]"
        >
          <p className="font-comic text-[1.3rem] font-bold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
            {text}
          </p>
        </ComicPanelBubble>
      </div>
      <div className="relative z-[1] flex w-full justify-start pl-0.5">
        <img
          src={narratorSrc}
          alt="Soubh, narrator"
          className="h-[clamp(11rem,28vw,15rem)] w-auto origin-bottom object-contain object-bottom drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:h-[clamp(12rem,24vw,17rem)] md:h-[clamp(13rem,20vw,18.75rem)]"
          width={360}
          height={460}
          decoding="async"
        />
      </div>
    </div>
  );
}

/** Sticky note above Soubh, or comic speech bubble (noteVariant "speech"). */
function StickyCallout({
  narratorSrc,
  lines,
  className = "",
  narratorImgClassName = "",
  noteClassName = "",
  narratorHeightClass,
  noteVariant = "sticky",
  speechCaption,
  speechLineClassName = "",
  speechBubbleClassName = "",
  speechCaptionClassName,
}) {
  const imgHeights =
    narratorHeightClass ??
    "h-[clamp(9.5rem,26vw,13rem)] sm:h-[clamp(10.5rem,22vw,15rem)] md:h-[clamp(11rem,18vw,16.5rem)]";

  const captionCls =
    speechCaptionClassName ??
    "font-comic text-[10px] tracking-[0.12em] text-[#0D0D0D]/55 sm:text-[11px]";

  const noteBlock =
    noteVariant === "speech" ? (
      <div className={`relative z-[2] mb-3 w-full sm:mb-4 ${noteClassName}`}>
        <ComicPanelBubble
          tail="bottom-left"
          caption={speechCaption}
          captionClassName={captionCls}
          className={`-rotate-[0.25deg] rounded-[1.75rem] border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[5px_5px_0_rgba(13,13,13,0.5)] sm:rounded-[2rem] sm:px-5 sm:py-4 sm:shadow-[6px_6px_0_rgba(13,13,13,0.45)] ${speechBubbleClassName}`}
        >
          {lines.map((line, i) => (
            <p
              key={i}
              className={`font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.3rem] md:text-[1rem] ${i > 0 ? "mt-2 sm:mt-2.5" : ""} ${speechLineClassName}`}
            >
              {line}
            </p>
          ))}
        </ComicPanelBubble>
      </div>
    ) : (
      <div
        className={`relative z-[2] mb-2.5 w-full rotate-[-0.6deg] rounded-sm border-2 border-[#1a1510]/85 px-3 py-2.5 shadow-md sm:mb-3 sm:px-3.5 sm:py-3 ${noteClassName}`}
        style={{
          background: "linear-gradient(145deg, #FFF6B0 0%, #FFE566 55%, #FFEC8A 100%)",
          fontFamily: '"Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className={`text-[17px] font-semibold leading-snug text-[#1a1510] sm:text-[21px] ${i > 0 ? "mt-1.5" : ""}`}
          >
            {line}
          </p>
        ))}
      </div>
    );

  return (
    <div className={`pointer-events-auto z-[40] flex w-[min(100%,19.5rem)] flex-col items-start sm:w-[min(100%,22rem)] ${className}`}>
      {noteBlock}
      {narratorSrc ? (
        <div className="relative z-[1] mt-0 flex w-full justify-start">
          <img
            src={narratorSrc}
            alt="Soubh, narrator"
            className={`${imgHeights} w-auto origin-bottom object-contain object-bottom drop-shadow-[0_8px_20px_rgba(0,0,0,0.2)] ${narratorImgClassName}`}
            width={320}
            height={420}
            decoding="async"
          />
        </div>
      ) : null}
    </div>
  );
}

function SharpPanelBg({ src, alt = "", overlayClassName = "", imageClassName = "object-center" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imageClassName}`}
        width={1920}
        height={1080}
        decoding="async"
      />
      {overlayClassName ? <div className={`absolute inset-0 ${overlayClassName}`} /> : null}
    </div>
  );
}

function KeyboardHintSticky() {
  return (
    <div className="flex w-full max-w-[16.5rem] flex-col gap-2 sm:max-w-[17.5rem]">
      <div
        className="rounded-md border-2 border-[#1a1510]/80 px-2.5 py-2 shadow-md"
        style={{
          background: "linear-gradient(145deg, #FFF6B0 0%, #FFE566 55%, #FFEC8A 100%)",
        }}
      >
        <p className="text-center font-body text-[11px] font-bold leading-snug text-[#1a1510] sm:text-xs">
          Use <span className="underline decoration-2 underline-offset-2">← →</span> or{" "}
          <span className="font-mono font-bold">Space</span> to move through the story.
        </p>
      </div>
      <div className="flex justify-center gap-1 rounded-md border border-[#0D0D0D]/20 bg-[#1e1e22]/90 px-2 py-1.5 shadow-inner">
        <span className="rounded border border-white/20 px-1.5 py-0.5 font-mono text-[10px] text-white/85">←</span>
        <span className="rounded border border-emerald-400/70 bg-emerald-500/30 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-100">→</span>
      </div>
    </div>
  );
}

function SlideCounter({ current, total, variant = "dark" }) {
  const pill =
    variant === "light"
      ? "bg-black/65 text-white/95 shadow-md ring-1 ring-white/10"
      : "bg-black/55 text-white/95 shadow-md ring-1 ring-white/10";
  return (
    <div
      className={`pointer-events-none absolute bottom-3 left-1/2 z-[210] -translate-x-1/2 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold tabular-nums ${pill}`}
      aria-live="polite"
    >
      {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  );
}

export default function SprintStoryPage() {
  const [slide, setSlide] = useState(0);
  const touchStartX = useRef(null);

  const go = useCallback((delta) => {
    setSlide((s) => Math.max(0, Math.min(TOTAL_SLIDES - 1, s + delta)));
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
        return;
      }
      if (e.key === " ") {
        const t = e.target;
        if (t instanceof HTMLElement) {
          const tag = t.tagName;
          if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || t.isContentEditable) return;
        }
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX;
    if (end == null) return;
    const dx = end - start;
    if (dx < -56) go(1);
    else if (dx > 56) go(-1);
  };

  const progress = ((slide + 1) / TOTAL_SLIDES) * 100;
  const atStart = slide <= 0;
  const atEnd = slide >= TOTAL_SLIDES - 1;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden overscroll-none bg-[#0a0a0c] text-[#0D0D0D]">
      <a href="#slide-0" className="sr-only">
        Story start
      </a>

      <header className="pointer-events-none absolute left-0 right-0 top-0 z-[200] flex justify-end gap-2 px-3 pt-3 sm:px-4 sm:pt-4">
        <Link
          to="/"
          className="pointer-events-auto rounded-full border border-white/25 bg-black/45 px-3 py-1.5 font-body text-[11px] font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-black/60"
        >
          Exit
        </Link>
        <Link
          to="/book"
          className="pointer-events-auto rounded-full border-2 border-[#0D0D0D] bg-terracotta px-3 py-1.5 font-body text-[11px] font-bold text-white shadow-[2px_2px_0_#000] transition hover:brightness-105"
        >
          Book
        </Link>
      </header>

      <button
        type="button"
        onClick={() => go(-1)}
        disabled={atStart}
        className="absolute left-0 top-[38%] z-[190] hidden h-28 w-12 -translate-y-1/2 items-center justify-center rounded-r-lg border border-white/10 bg-black/25 text-4xl text-white/50 backdrop-blur-sm transition hover:bg-black/40 hover:text-white disabled:opacity-20 md:flex"
        aria-label="Previous scene"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        disabled={atEnd}
        className="absolute right-0 top-[38%] z-[190] hidden h-28 w-12 -translate-y-1/2 items-center justify-center rounded-l-lg border border-white/10 bg-black/25 text-4xl text-white/50 backdrop-blur-sm transition hover:bg-black/40 hover:text-white disabled:opacity-20 md:flex"
        aria-label="Next scene"
      >
        ›
      </button>

      <div
        className="absolute inset-0 top-0 touch-manipulation"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="How the sprint works"
        aria-live="polite"
      >
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ width: `${TOTAL_SLIDES * 100}vw`, transform: `translateX(-${slide * 100}vw)` }}
        >
          {/* ——— SLIDE 0 — COVER — same office plate, readable title band ——— */}
          <div id="slide-0" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1814]">
            <SharpPanelBg
              src={bgScene01Office}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-[center_40%]"
            />

            <div className="pointer-events-none absolute left-4 right-4 top-[4.5rem] z-[15] max-w-xl sm:left-8 sm:top-[5.25rem] md:left-10 md:max-w-lg">
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-amber-100/95 sm:text-[11px]">Soubh & Co.</p>
              <h1 className="mt-2 text-balance font-serif text-[1.5rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-md sm:text-2xl md:text-[2.2rem]">
                How Boutique Australian Agencies Win 30% More Listings In 90 Days
              </h1>
              <p className="mt-2 font-body text-sm text-white/90 drop-shadow sm:text-base">A story-told case study about positioning. 6 minutes.</p>
              <p className="mt-3 flex items-center gap-1.5 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-[11px]">
                <span aria-hidden>⏱</span> ~6 min · {TOTAL_SLIDES} scenes
              </p>
            </div>

            <div className="absolute inset-y-0 right-[150px] z-[5] flex items-end justify-end pr-0 sm:pr-8 bottom-[-70px]">
              <img
                src={joshNormal}
                alt="Josh standing confident"
                className="max-h-[55vh] w-auto origin-bottom object-contain object-bottom drop-shadow-[0_16px_36px_rgba(0,0,0,0.5)] translate-x-[20%] sm:translate-x-0 sm:max-h-[85vh]"
              />
            </div>
            <div className="pointer-events-auto absolute bottom-[-10px] left-2 z-[40] pb-0 sm:left-8">
              <CoverComicIntro
                narratorSrc={soubhSmile}
                text="Josh’s story starts on a Saturday — after an appraisal that already felt lost."
              />
            </div>

            <div className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[40] hidden flex-col items-end sm:right-8 sm:flex">
              <KeyboardHintSticky />
            </div>
            <div className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[40] flex gap-1 sm:hidden" aria-hidden>
              <span className="rounded border border-white/30 bg-black/40 px-2 py-1 font-mono text-xs text-white/90">←</span>
              <span className="rounded border border-white/30 bg-black/40 px-2 py-1 font-mono text-xs text-white/90">→</span>
            </div>
          </div>

          {/* ——— SLIDE 1 — SCENE 01 — OFFICE ——— */}
          <div id="slide-1" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ebe6dc]">
            <SharpPanelBg
              src={bgScene01Office}
              overlayClassName="bg-[#0f172a]/85"
            />

            {/* Josh + bubble */}
            <div className="pointer-events-none absolute right-0 bottom-[-70px] z-[20] flex items-end justify-end pb-0 pr-0">
              <div className="relative z-[10] flex flex-col items-center translate-x-12 sm:translate-x-16">
                <div className="pointer-events-auto relative z-[25] mb-2 w-[min(14rem,calc(100vw-3rem))] translate-y-[4vh] sm:w-[21rem] sm:max-w-[21rem] sm:translate-y-[2vh] right-[200px]">
                  <ComicPanelBubble
                    tail="bottom-left"
                    caption="Josh"
                    captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                    className="-rotate-[0.2deg] rounded-[1.75rem] border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[5px_5px_0_rgba(13,13,13,0.48)] sm:rounded-[2rem] sm:px-5 sm:py-4 sm:shadow-[6px_6px_0_rgba(13,13,13,0.42)]"
                  >
                    <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
                      She said she&apos;d &apos;be in touch by Monday.&apos; I know what that means.
                    </p>
                  </ComicPanelBubble>
                </div>
                <img
                  src={joshThinking}
                  alt="Josh after a Saturday appraisal, tired in the office."
                  className="max-h-[min(65vh,550px)] w-auto scale-x-[-1] object-contain object-bottom drop-shadow-[0_14px_32px_rgba(0,0,0,0.28)] sm:max-h-[min(85vh,750px)]"
                  width={420}
                  height={560}
                  decoding="async"
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-[40] pl-3 pb-0 sm:left-6">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,24rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="scale-x-[-1]"
                narratorHeightClass="h-[clamp(11rem,28vw,15rem)] sm:h-[clamp(12rem,24vw,17rem)] md:h-[clamp(13rem,20vw,18.75rem)]"
                lines={[
                  "That's Josh.",
                  "Director of a boutique agency in a major Australian capital city. 12 agents. 7 years old.",
                  "He just finished a Saturday appraisal. He already knows he came second.",
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 2 — SCENE 3 — meeting room plate: anchor everyone to floor line ——— */}
          <div id="slide-2" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene03}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_bottom] sm:object-[center_bottom]"
            />

            <div className="pointer-events-none absolute right-0 bottom-[-70px] z-[18] flex items-end justify-end pb-0 pr-0">
              <div className="relative flex flex-col items-center translate-x-12 sm:translate-x-16">
                <div className="pointer-events-auto relative z-[25] mb-2 w-[min(14rem,calc(100vw-3rem))] translate-y-[4vh] sm:w-[24rem] sm:max-w-[25rem] sm:translate-y-[2vh] md:max-w-[26rem]">
                  <ComicPanelBubble
                    tail="bottom-left"
                    caption="Josh"
                    captionClassName="font-comic text-[11px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[17px]"
                    className="-rotate-[0.2deg] rounded-[1.75rem] border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[5px_5px_0_rgba(13,13,13,0.48)] sm:rounded-[2rem] sm:px-5 sm:py-4 md:px-6 md:py-4 sm:shadow-[6px_6px_0_rgba(13,13,13,0.42)]"
                  >
                    <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
                      The team was sharp. The numbers were right. The comparables were clean.
                    </p>
                    <p className="mt-2.5 font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:mt-3 sm:text-[1.5rem] md:text-[1.6rem]">
                      So what was wrong?
                    </p>
                  </ComicPanelBubble>
                </div>
                <img
                  src={joshThinking}
                  alt="Josh, reflecting after a tough week."
                  className="relative z-[10] max-h-[min(65vh,550px)] w-auto origin-bottom scale-x-[-1] object-contain object-bottom drop-shadow-[0_14px_32px_rgba(0,0,0,0.38)] sm:max-h-[min(85vh,750px)]"
                  width={440}
                  height={560}
                  decoding="async"
                />
              </div>
            </div>

            <div className="absolute bottom-[-20px] left-0 z-[40] flex flex-col justify-end pl-3 pb-0 sm:pl-4 sm:pb-1">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                speechCaptionClassName="font-comic text-[11px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[17px]"
                speechLineClassName="!text-[1.3rem] sm:!text-[1.3rem] md:!text-[1.125rem]"
                speechBubbleClassName="!px-5 !py-4 sm:!px-6 sm:!py-[1.125rem] md:!py-5"
                className="w-[min(12.5rem,calc(100vw-2rem))] sm:w-[min(100%,25rem)] md:w-[min(100%,26rem)]"
                narratorSrc={soubhWriting}
                narratorImgClassName="scale-x-[-1] origin-bottom"
                narratorHeightClass="h-[clamp(12rem,32vw,17.5rem)] sm:h-[clamp(13rem,28vw,19.5rem)] md:h-[clamp(14rem,24vw,21.5rem)]"
                lines={[
                  "This is the moment every boutique director knows.",
                  "You did everything right. You still lost. And you can't articulate why.",
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 3 — SCENE 4 — Kitchen table (evening) ——— */}
          <div id="slide-3" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1f1812]">
            <SharpPanelBg
              src={bgScene04}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_bottom] sm:object-[center_bottom]"
            />

            {/* Soubh first in stack so Josh + bubble (higher z) paint on top in the centre/right */}
            <div className="absolute bottom-0 left-0 z-[30] flex flex-col justify-end pl-3 pb-0 sm:pl-4">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                speechCaptionClassName="font-comic text-[11px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[17px]"
                speechLineClassName="!text-[1.3rem] !leading-snug sm:!text-[1.3rem] md:!text-[1.125rem]"
                speechBubbleClassName="!rounded-[1.85rem] !border-[3px] !border-solid !border-[#0D0D0D] !px-5 !py-4 !shadow-[6px_6px_0_rgba(13,13,13,0.48)] sm:!rounded-[2rem] sm:!px-6 sm:!py-[1.125rem] md:!py-5"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,26rem)] md:w-[min(100%,28rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-2 sm:translate-y-3"
                narratorHeightClass="h-[clamp(11rem,30vw,15.5rem)] sm:h-[clamp(12rem,26vw,17.5rem)] md:h-[clamp(13rem,22vw,19rem)]"
                lines={[
                  "Josh just opened the door to the real question.",
                  'Not "why am I losing?" but "why does every boutique agency in Australia look interchangeable?"',
                ]}
              />
            </div>

            <div className="pointer-events-none absolute bottom-[-70px] right-0 z-[45] flex items-end justify-end pb-0 pr-0">
              <div className="relative isolate flex flex-col items-center translate-x-12 sm:translate-x-16">
                <div className="pointer-events-auto relative z-[2] mb-2 w-[min(13.5rem,calc(100vw-2rem))] translate-y-[4vh] sm:w-[18.5rem] sm:translate-y-[2vh] md:w-[20rem]">
                  <ComicPanelBubble
                    tail="bottom-left"
                    caption="Josh"
                    captionClassName="font-comic text-[11px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[17px]"
                    className="-rotate-[0.25deg] rounded-[1.85rem] border-[3px] border-solid border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[6px_6px_0_rgba(13,13,13,0.48)] sm:rounded-[2rem] sm:px-5 sm:py-4 md:px-6 md:py-[1.125rem]"
                  >
                    <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
                      Why does everyone in my industry look the same?
                    </p>
                  </ComicPanelBubble>
                </div>
                <img
                  src={joshThinking}
                  alt="Josh at home, scrolling agency feeds on his laptop at night."
                  className="relative z-[1] max-h-[min(75vh,650px)] w-auto origin-bottom scale-x-[-1] object-contain object-bottom drop-shadow-[0_16px_36px_rgba(0,0,0,0.45)] sm:max-h-[min(85vh,750px)]"
                  width={440}
                  height={560}
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* ——— SLIDE 4 — SCENE 5 — Café: scroll stop (LinkedIn) ——— */}
          <div id="slide-4" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ece8df]">
            <SharpPanelBg
              src={bgScene05}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_bottom] sm:object-[center_bottom]"
            />

            <div
              className="pointer-events-none absolute bottom-[min(30vh,14rem)] left-[min(55%,14rem)] z-[22] w-[min(9.25rem,30vw)] max-w-[9.75rem] -translate-x-[38%] rotate-[-7deg] rounded-xl border-[2.5px] border-[#0D0D0D] bg-white px-2.5 py-2 shadow-[4px_5px_0_rgba(13,13,13,0.35)] sm:bottom-[min(23vh,12rem)] sm:left-[min(53%,14rem)] sm:w-[10.25rem] sm:max-w-[10.5rem] sm:-translate-x-[36%] sm:px-3 sm:py-2.5 sm:rotate-[-5deg] md:bottom-[min(24vh,12.5rem)]"
              aria-hidden
            >
              <p className="font-body text-[9px] font-bold leading-tight text-[#0A66C2] sm:text-[10px]">Soubh / Founder, Soubh &amp; Co.</p>
              <p className="mt-1.5 font-body text-[9px] font-semibold leading-snug text-[#0D0D0D] sm:text-[10px] sm:leading-snug">
                We win on relationships. We just keep losing on commission.
              </p>
              <p className="mt-2 font-body text-[8px] font-semibold text-[#0D0D0D]/65 sm:text-[9px]">
                <span aria-hidden>💬</span> 47 comments
              </p>
            </div>

            <div className="absolute bottom-0 left-0 z-[32] flex flex-col justify-end pl-3 pb-0 sm:pl-5">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[21px] [&_p]:!leading-snug sm:[&_p]:!text-[17px] md:[&_p]:!text-[21px]"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "The shift happens when someone names the problem you couldn't articulate.",
                  "Josh didn't just save this post. He came back to it 4 times that week.",
                ]}
              />
            </div>

            <div className="pointer-events-none absolute bottom-[-40px] right-0 z-[50] flex flex-col items-center pb-0 pr-0 translate-x-12 sm:translate-x-16">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] translate-y-[4vh] sm:w-[18.5rem] sm:translate-y-[2vh] md:w-[21rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Josh"
                  captionClassName="font-comic text-[11px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[17px]"
                  className="-rotate-[0.12deg] rounded-[1.85rem] border-[3px] border-dashed border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[5px_5px_0_rgba(13,13,13,0.42)] sm:rounded-[2rem] sm:px-6 sm:py-4 md:px-7 md:py-[1.125rem]"
                >
                  <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
                    That&apos;s literally what I said in my team meeting.
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={joshThinking}
                alt="Josh in a café, stopped mid-scroll on a LinkedIn post."
                className="relative z-[1] block max-h-[min(75vh,650px)] w-auto origin-bottom object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)] scale-x-[-1] sm:max-h-[min(85vh,750px)]"
                width={480}
                height={600}
                decoding="async"
              />
            </div>
          </div>

          {/* ——— SLIDE 5 — SCENE 6 — Café Research ——— */}
          <div id="slide-5" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ece8df]">
            <SharpPanelBg
              src={bgScene06}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_bottom] sm:object-[center_bottom]"
            />

            <div className="absolute bottom-0 left-0 z-[32] flex flex-col justify-end pl-3 pb-0 sm:pl-5">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[21px] [&_p]:!leading-snug sm:[&_p]:!text-[17px] md:[&_p]:!text-[21px]"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Josh just moved from 'thinking about it' to 'doing something about it.'",
                  "It took 23 days from his Saturday loss."
                ]}
              />
            </div>

            <div className="pointer-events-none absolute left-[10px] bottom-[-40px] right-0 z-[50] flex flex-col items-center pb-0 pr-0 translate-x-12 sm:translate-x-16">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[22rem] md:w-[24rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Josh"
                  captionClassName="font-comic text-[11px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[17px]"
                  className="-rotate-[0.12deg] rounded-[1.85rem] border-[3px] border-dashed border-[#0D0D0D] bg-[#FFFCF5] px-4 py-3.5 shadow-[5px_5px_0_rgba(13,13,13,0.42)] sm:rounded-[2rem] sm:px-6 sm:py-4 md:px-7 md:py-[1.125rem]"
                >
                  <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
                    &quot;Two-week sprint. Built only for boutique Australian agencies. Three founding spots.&quot;
                  </p>
                  <p className="mt-3 font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1.5rem] md:text-[1.6rem]">
                    Okay. Let&apos;s book a call.
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={joshTalking}
                alt="Josh reading soubh.co and deciding to book a call."
                className="relative z-[1] block max-h-[min(75vh,650px)] w-auto origin-bottom object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)] scale-x-[-1] sm:max-h-[min(85vh,750px)]"
                width={480}
                height={600}
                decoding="async"
              />
            </div>
          </div>

          {/* ——— SLIDE 6 — SCENE 7 — Discovery Call ——— */}
          <div id="slide-6" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />

            {/* Left Pane - Josh */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[55%] h-full z-[10] flex flex-col items-center justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13rem,calc(100vw-2rem))] sm:mb-4 sm:w-[16rem] md:w-[18rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Josh"
                  captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                  className="rounded-xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-3 py-2.5 shadow-[4px_4px_0_rgba(13,13,13,0.42)] sm:rounded-2xl sm:px-5 sm:py-3.5"
                >
                  <p className="font-comic text-[0.875rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1rem] md:text-[1.3rem]">
                    ...yeah, actually.
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={joshNormal}
                alt="Josh looking slightly nervous on video call"
                className="relative z-[1] max-h-[min(85vh,750px)] w-auto origin-bottom object-contain object-bottom drop-shadow-xl translate-y-[10%] sm:max-h-[min(85vh,750px)] sm:translate-y-[8%]"
                decoding="async"
              />
            </div>

            {/* Right Pane - Soubh */}
            <div className="pointer-events-none absolute bottom-[-40px] right-0 w-[55%] h-full z-[10] flex flex-col items-center justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[22rem] md:w-[24rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Soubh"
                  captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                  className="rounded-xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-3 py-2.5 shadow-[4px_4px_0_rgba(13,13,13,0.42)] sm:rounded-2xl sm:px-5 sm:py-3.5"
                >
                  <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1rem] md:text-[1.3rem]">
                    Hey Josh. 25 minutes. No deck, no pitch. I&apos;m going to ask 6 questions. Then give you my honest read. Sound good?
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={soubhWriting}
                alt="Soubh on video call, relaxed"
                className="relative z-[1] max-h-[min(65vh,550px)] w-auto origin-bottom object-contain object-bottom drop-shadow-xl sm:max-h-[min(75vh,650px)]"
                decoding="async"
              />
            </div>

            {/* Central Sticky Note */}
            <div className="absolute bottom-4 left-1/2 z-[40] w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 sm:bottom-8 sm:w-[min(100%,22rem)] md:w-[min(100%,24rem)]">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[17px] [&_p]:!leading-snug sm:[&_p]:!text-[21px] md:[&_p]:!text-[17px]"
                className="w-full rotate-[2deg]"
                lines={[
                  "Permission to be honest. The director relaxes within 30 seconds."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 7 — SCENE 8 — The USP Reveal ——— */}
          <div id="slide-7" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene08}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />

            {/* Left Pane - Josh */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[55%] h-full z-[10] flex flex-col items-center justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[20rem] md:w-[22rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Josh"
                  captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                  className="rounded-xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-3 py-2.5 shadow-[4px_4px_0_rgba(13,13,13,0.42)] sm:rounded-2xl sm:px-5 sm:py-3.5"
                >
                  <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1rem] md:text-[1.3rem]">
                    &quot;We don&apos;t sell on FOMO. We pull 10-year rental yield data, vacancy rates, infrastructure plans. We tell vendors which properties make sense — and which ones don&apos;t. I&apos;ve never written that down anywhere.&quot;
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={joshTalking}
                alt="Josh animated"
                className="relative z-[1] max-h-[min(85vh,750px)] w-auto origin-bottom object-contain object-bottom drop-shadow-xl translate-y-[10%] sm:max-h-[min(85vh,750px)] sm:translate-y-[8%]"
                decoding="async"
              />
            </div>

            {/* Right Pane - Soubh */}
            <div className="pointer-events-none absolute bottom-0 right-0 w-[55%] h-full z-[10] flex flex-col items-center justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(10.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[14rem] md:w-[16rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Soubh"
                  captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                  className="rounded-xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-3 py-2.5 shadow-[4px_4px_0_rgba(13,13,13,0.42)] sm:rounded-2xl sm:px-5 sm:py-3.5"
                >
                  <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1rem] md:text-[1.3rem]">
                    &quot;Say that again.&quot;
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={soubhWriting}
                alt="Soubh listening"
                className="relative z-[1] max-h-[min(65vh,550px)] w-auto origin-bottom object-contain object-bottom drop-shadow-xl sm:max-h-[min(75vh,650px)]"
                decoding="async"
              />
            </div>

            {/* Central Sticky Note */}
            <div className="absolute bottom-4 left-1/2 z-[40] w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 sm:bottom-8 sm:w-[min(100%,24rem)] md:w-[min(100%,26rem)]">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[17px] [&_p]:!leading-snug sm:[&_p]:!text-[21px] md:[&_p]:!text-[17px]"
                className="w-full rotate-[-1deg]"
                lines={[
                  "Josh just named his real differentiator. 'Property backed by research, not hype.'",
                  "That sentence is worth $50K+ in annual commission."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 8 — SCENE 9 — The Honest Read ——— */}
          <div id="slide-8" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene09}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />

            {/* Left Pane - Josh */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[55%] h-full z-[10] flex flex-col items-center justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(12.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[16rem] md:w-[18rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Josh (Thinking)"
                  captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                  className="rounded-3xl border-[3px] border-dotted border-[#0D0D0D] bg-[#FFFCF5] px-3 py-2.5 shadow-[4px_4px_0_rgba(13,13,13,0.42)] sm:px-5 sm:py-3.5"
                >
                  <p className="font-comic text-[1.3rem] font-semibold italic leading-snug tracking-wide text-[#0D0D0D] sm:text-[1rem] md:text-[1.3rem]">
                    He didn&apos;t even pitch the price.
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={joshNormal}
                alt="Josh listening calmly"
                className="relative z-[1] max-h-[min(85vh,750px)] w-auto origin-bottom object-contain object-bottom drop-shadow-xl translate-y-[10%] sm:max-h-[min(85vh,750px)] sm:translate-y-[8%]"
                decoding="async"
              />
            </div>

            {/* Right Pane - Soubh */}
            <div className="pointer-events-none absolute bottom-0 right-0 w-[55%] h-full z-[10] flex flex-col items-center justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(12.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[22rem] md:w-[24rem]">
                <ComicPanelBubble
                  tail="bottom-left"
                  caption="Soubh"
                  captionClassName="font-comic text-[10px] tracking-[0.14em] text-[#0D0D0D]/55 sm:text-[11px]"
                  className="rounded-xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] px-3 py-2.5 shadow-[4px_4px_0_rgba(13,13,13,0.42)] sm:rounded-2xl sm:px-5 sm:py-3.5"
                >
                  <p className="font-comic text-[1.3rem] font-semibold leading-snug tracking-wide text-[#0D0D0D] sm:text-[1rem] md:text-[1.3rem]">
                    &quot;Josh — three things. One: the research-not-hype angle is real positioning. You&apos;re already living it. Two: this is the right move for your agency. Three: I think you&apos;d pick Stretch on Monday.&quot;
                  </p>
                </ComicPanelBubble>
              </div>
              <img
                src={soubhSmile}
                alt="Soubh confident"
                className="relative z-[1] max-h-[min(65vh,550px)] w-auto origin-bottom object-contain object-bottom drop-shadow-xl sm:max-h-[min(75vh,650px)]"
                decoding="async"
              />
            </div>

            {/* Central Sticky Note */}
            <div className="absolute bottom-4 left-1/2 z-[40] w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 sm:bottom-8 sm:w-[min(100%,22rem)] md:w-[min(100%,24rem)]">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[17px] [&_p]:!leading-snug sm:[&_p]:!text-[21px] md:[&_p]:!text-[17px]"
                className="w-full rotate-[1.5deg]"
                lines={[
                  "Trust is what closes. Not features. Not pricing. Trust."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 9 — SCENE 10 — The Decision ——— */}
          <div id="slide-9" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#2c2b29]">
            <SharpPanelBg
              src={bgScene10}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />

            <div className="absolute bottom-0 left-0 z-[32] flex flex-col justify-end pl-3 pb-0 sm:pl-5">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[21px] [&_p]:!leading-snug sm:[&_p]:!text-[17px] md:[&_p]:!text-[21px]"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "48 hours after the discovery call, Josh signs the proposal and pays the 50% deposit.",
                  "The sprint starts Monday."
                ]}
              />
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 z-[50] flex flex-col items-center pb-0 pr-0 translate-x-8 sm:translate-x-12">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[22rem] md:w-[24rem]">
                {/* Text Message Thread UI */}
                <div className="rounded-3xl border-[3px] border-[#0D0D0D] bg-white p-3 shadow-[5px_5px_0_rgba(13,13,13,0.42)] sm:p-5">
                  <p className="mb-3 font-body text-[10px] font-bold uppercase tracking-widest text-[#0D0D0D]/40 text-center">iMessage: Anna</p>

                  <div className="flex flex-col gap-3">
                    <div className="self-end max-w-[85%] rounded-2xl rounded-br-sm bg-[#007AFF] px-3 py-2 text-white shadow-sm">
                      <p className="font-body text-[0.875rem] font-medium leading-snug sm:text-[1rem]">
                        Just had the Soubh & Co. call. I think we should do this.
                      </p>
                    </div>
                    <div className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-[#E9E9EB] px-3 py-2 text-black shadow-sm">
                      <p className="font-body text-[0.875rem] font-medium leading-snug sm:text-[1rem]">
                        Finally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={joshNormal}
                alt="Josh texting Anna"
                className="relative z-[1] block max-h-[min(75vh,650px)] w-auto origin-bottom object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)] scale-x-[-1] sm:max-h-[min(85vh,750px)]"
                width={480}
                height={600}
                decoding="async"
              />
            </div>
          </div>

          {/* ——— SLIDE 10 — SCENE 11 — Pre-Work Weekend ——— */}
          <div id="slide-10" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ece8df]">
            <SharpPanelBg
              src={bgScene06}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            <div className="absolute bottom-0 left-0 z-[32] flex flex-col justify-end pl-3 pb-0 sm:pl-5">
              <StickyCallout
                noteVariant="sticky"
                noteClassName="[&_p]:!font-comic [&_p]:!font-semibold [&_p]:!text-[21px] [&_p]:!leading-snug sm:[&_p]:!text-[17px] md:[&_p]:!text-[21px]"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhWriting}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "While Josh catches up on listings, we audit his competitors, his social, and his presentations.",
                  "By Sunday night, both sides know what they're walking into Monday morning."
                ]}
              />
            </div>
            {/* Fake Dual Monitors UI */}
            <div className="pointer-events-none absolute bottom-[-40px] right-0 z-[50] flex items-end justify-end pb-0 pr-0">
              <div className="relative isolate flex gap-4 translate-x-12 sm:translate-x-16">
                <div className="flex h-[35vh] w-[25vw] flex-col overflow-hidden rounded-md border-4 border-black bg-white shadow-2xl sm:h-[45vh] sm:w-[20vw]">
                  <div className="h-4 border-b-2 border-black bg-gray-200"></div>
                  <div className="p-2">
                    <div className="mb-2 h-2 w-1/2 rounded bg-gray-300"></div>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="mb-1 flex items-center gap-1">
                        <div className="h-1.5 w-1/4 rounded bg-gray-200"></div>
                        <div className="h-1.5 w-full rounded bg-gray-100"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex h-[35vh] w-[25vw] flex-col overflow-hidden rounded-md border-4 border-black bg-white shadow-2xl sm:h-[45vh] sm:w-[20vw]">
                  <div className="h-4 border-b-2 border-black bg-gray-200"></div>
                  <div className="p-2">
                    <div className="mb-2 h-2 w-3/4 rounded bg-terracotta/80"></div>
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-4 rounded bg-gray-100"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ——— SLIDE 11 — SCENE 12 — Workshop 1: Three Doors ——— */}
          <div id="slide-11" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Split Screen Container */}
            <div className="absolute inset-x-4 top-16 z-[15] mx-auto flex h-[min(45vh,350px)] max-w-4xl overflow-hidden rounded-xl border-[3px] border-[#0D0D0D] bg-black shadow-2xl sm:inset-x-8 sm:top-24 sm:h-[min(55vh,450px)]">
              {/* Left Pane - Josh */}
              <div className="relative flex w-1/2 items-end justify-center overflow-hidden border-r-[3px] border-[#0D0D0D] bg-slate-800">
                <img src={joshThinking} alt="Josh" className="h-[80%] w-auto object-contain object-bottom translate-y-[10%]" />
              </div>
              {/* Right Pane - Soubh */}
              <div className="relative flex w-1/2 items-end justify-center overflow-hidden bg-slate-900">
                <img src={soubhSmile} alt="Soubh" className="h-[75%] w-auto object-contain object-bottom" />
              </div>
            </div>

            {/* Three Cards UI */}
            <div className="absolute bottom-[20%] left-1/2 z-[30] flex w-full max-w-3xl -translate-x-1/2 items-end justify-center gap-2 px-4 sm:gap-6">
              <div className="flex w-1/3 flex-col rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)] sm:p-5">
                <p className="font-comic text-xs font-bold sm:text-lg">SAFE</p>
                <p className="mt-1 text-[8px] leading-tight text-gray-600 sm:text-xs">Reliable. Defensible. Slow growth.</p>
              </div>
              <div className="flex w-1/3 -translate-y-4 flex-col rounded-xl border-[4px] border-terracotta bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(184,92,56,1)] sm:p-5">
                <p className="font-comic text-xs font-bold text-terracotta sm:text-lg">STRETCH</p>
                <p className="mt-1 text-[8px] leading-tight text-gray-600 sm:text-xs">Specific. Polarising. Faster growth.</p>
              </div>
              <div className="flex w-1/3 flex-col rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)] sm:p-5">
                <p className="font-comic text-xs font-bold sm:text-lg">BOLD</p>
                <p className="mt-1 text-[8px] leading-tight text-gray-600 sm:text-xs">Risky for 6 months. Famous within 12.</p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 z-[40] flex flex-col justify-end pl-3 pb-0 sm:pl-4 sm:pb-1">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                speechTail="bottom-left"
                className="w-[min(15rem,calc(100vw-2rem))] sm:w-[min(100%,22rem)] md:w-[min(100%,24rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Most consultants present one 'right' answer.",
                  "We present three, ranked by risk, so the choice is the director's. The ownership is what makes it stick."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 12 — SCENE 13 — Tuesday Internal Team Meeting ——— */}
          <div id="slide-12" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene03}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            <div className="absolute bottom-[0px] left-1/2 z-[10] flex w-max -translate-x-1/2 items-end justify-center -space-x-8 sm:-space-x-16 md:-space-x-20">
              <img src={annaBaseV1} alt="Anna" className="relative z-[3] h-[35vh] max-w-none object-contain object-bottom sm:h-[40vh] md:h-[45vh]" />
              <img src={tomGesture} alt="Tom" className="relative z-[2] h-[38vh] max-w-none object-contain object-bottom sm:h-[45vh] md:h-[50vh]" />
              <img src={joshNormal} alt="Josh" className="relative z-[4] h-[45vh] max-w-none object-contain object-bottom scale-x-[-1] sm:h-[52vh] md:h-[58vh]" />
              <img src={priyaThoughtful} alt="Priya" className="relative z-[2] h-[38vh] max-w-none object-contain object-bottom scale-x-[-1] sm:h-[45vh] md:h-[50vh]" />
              <img src={davidSitting} alt="David" className="relative z-[3] h-[35vh] max-w-none object-contain object-bottom scale-x-[-1] sm:h-[40vh] md:h-[45vh]" />
            </div>

            <div className="absolute top-[10%] left-4 z-[40] w-[80%] sm:left-1/2 sm:-translate-x-1/2 sm:w-[60%]">
              <ComicPanelBubble tail="bottom-left" caption="The Team" className="rounded-2xl border-[3px] border-[#0D0D0D] bg-[#FFFCF5] p-3 shadow-[5px_5px_0_rgba(0,0,0,1)]">
                <p className="font-comic text-[1.1rem] font-bold sm:text-[1.3rem]">"I'm telling you — Bold."</p>
                <p className="font-comic text-[1.1rem] font-bold text-terracotta sm:text-[1.3rem]">"Stretch. Bold would lose us the impulse-buyers."</p>
                <p className="font-comic text-[1.1rem] font-bold sm:text-[1.3rem]">"I'm in. Stretch."</p>
              </ComicPanelBubble>
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Notice: I'm not in this room.",
                  "The hardest part of positioning isn't picking the right option. It's getting the team to commit."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 13 — SCENE 14 — Workshop 2: Pressure-Testing Stretch ——— */}
          <div id="slide-13" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* UI Document */}
            <div className="absolute right-[5%] top-[10%] z-[20] w-[80%] max-w-sm rotate-2 rounded border-2 border-black bg-[#FFFCF5] p-4 shadow-[8px_8px_0_rgba(0,0,0,0.5)] sm:right-[10%] sm:top-[20%]">
              <p className="mb-2 border-b-2 border-black pb-1 font-comic text-sm font-bold uppercase sm:text-base">Positioning Statement</p>
              <p className="text-xs line-through opacity-50 sm:text-sm">V1: The passionate local experts</p>
              <p className="mt-1 text-xs line-through opacity-50 sm:text-sm">V2: Trusted property advisors</p>
              <p className="mt-2 bg-terracotta/20 p-1 font-comic text-[1.2rem] font-bold text-black sm:text-[1.4rem]">V3: Property backed by research, not hype.</p>
            </div>

            <div className="pointer-events-none absolute bottom-[-40px] left-0 z-[10] flex w-full flex-col items-start justify-end pb-0 sm:w-1/2">
              <div className="pointer-events-auto relative z-[20] mb-2 ml-4 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:ml-8 sm:w-[22rem]">
                <ComicPanelBubble tail="bottom-left" caption="Josh" className="rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  <p className="font-comic text-[1.3rem] font-bold">"...wait. That's exactly what Tom said in the team meeting."</p>
                </ComicPanelBubble>
              </div>
              <img src={joshNormal} alt="Josh" className="h-[min(65vh,550px)] object-contain object-bottom translate-x-8" />
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Workshop 2 is where the positioning gets BUILT.",
                  "By the end, the team's natural language matches the strategy."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 14 — SCENE 15 — Workshop 3: The 6-Slide Deck ——— */}
          <div id="slide-14" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene07}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* 6-Slide Deck UI */}
            <div className="absolute inset-x-0 top-[10%] z-[20] mx-auto grid w-[90%] max-w-2xl grid-cols-3 gap-2 rounded-xl bg-black/40 p-4 backdrop-blur sm:top-[20%] sm:gap-4">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <div key={num} className="aspect-video w-full rounded border-2 border-black bg-[#FFFCF5] p-2 shadow-sm">
                  <div className="h-1/2 w-full border-b border-black/20 bg-gray-100"></div>
                  <div className="mt-1 h-1 w-3/4 bg-gray-300"></div>
                  <div className="mt-1 h-1 w-1/2 bg-gray-200"></div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 z-[40] flex flex-col justify-end pl-3 pb-0 sm:pl-4 sm:pb-1">
              <StickyCallout
                noteVariant="speech"
                speechCaption="Soubh"
                speechTail="bottom-left"
                className="w-[min(15rem,calc(100vw-2rem))] sm:w-[min(100%,22rem)] md:w-[min(100%,24rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom scale-x-[-1] translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "This is what Josh and his team will walk into every appraisal with from now on.",
                  "One deck. Used in every conversation."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 15 — SCENE 16 — Content Engine ——— */}
          <div id="slide-15" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#ece8df]">
            <SharpPanelBg
              src={bgScene01Office}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Content Calendar UI */}
            <div className="absolute inset-x-0 top-[10%] z-[20] mx-auto w-[90%] max-w-3xl overflow-hidden rounded-xl border-4 border-black bg-white shadow-2xl sm:top-[15%]">
              <div className="border-b-2 border-black bg-gray-100 px-4 py-2 font-comic font-bold uppercase">Content Engine: 4 Weeks</div>
              <div className="grid grid-cols-5 divide-x-2 divide-black border-b-2 border-black bg-white font-mono text-xs font-bold sm:text-sm">
                <div className="p-2 text-center text-gray-500">Mon</div>
                <div className="p-2 text-center text-gray-500">Tue</div>
                <div className="p-2 text-center text-gray-500">Wed</div>
                <div className="p-2 text-center text-gray-500">Thu</div>
                <div className="p-2 text-center text-gray-500">Fri</div>
              </div>
              <div className="grid h-48 grid-cols-5 divide-x divide-y divide-gray-200 sm:h-64">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`p-1 sm:p-2 ${i === 19 ? 'bg-terracotta/20 font-bold text-terracotta' : 'bg-gray-50'}`}>
                    {i % 2 === 0 && <div className={`h-2 w-full rounded ${i === 19 ? 'bg-terracotta' : 'bg-blue-400'}`}></div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhSmile}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Week 2 is when the words become content.",
                  "36 pieces. All built on Stretch positioning. All in Josh's voice."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 16 — SCENE 17 — Day 14: Team Meeting ——— */}
          <div id="slide-16" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#1a1f24]">
            <SharpPanelBg
              src={bgScene03}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Same layout as Slide 12, but unified */}
            <div className="absolute bottom-[0px] left-1/2 z-[10] flex w-max -translate-x-1/2 items-end justify-center -space-x-8 sm:-space-x-16 md:-space-x-20">
              <img src={annaBaseV1} alt="Anna" className="relative z-[3] h-[35vh] max-w-none object-contain object-bottom sm:h-[40vh] md:h-[45vh]" />
              <img src={tomGesture} alt="Tom" className="relative z-[2] h-[38vh] max-w-none object-contain object-bottom sm:h-[45vh] md:h-[50vh]" />
              <img src={joshNormal} alt="Josh" className="relative z-[4] h-[45vh] max-w-none object-contain object-bottom scale-x-[-1] sm:h-[52vh] md:h-[58vh]" />
              <img src={priyaThoughtful} alt="Priya" className="relative z-[2] h-[38vh] max-w-none object-contain object-bottom scale-x-[-1] sm:h-[45vh] md:h-[50vh]" />
              <img src={davidSitting} alt="David" className="relative z-[3] h-[35vh] max-w-none object-contain object-bottom scale-x-[-1] sm:h-[40vh] md:h-[45vh]" />
            </div>

            <div className="absolute top-[10%] left-1/2 z-[40] w-[90%] -translate-x-1/2 sm:w-[70%]">
              <ComicPanelBubble tail="bottom-left" caption="All Four Agents At Once" className="rounded-2xl border-[4px] border-terracotta bg-[#FFFCF5] p-4 shadow-[8px_8px_0_rgba(184,92,56,1)]">
                <p className="font-comic text-[1.4rem] font-bold text-black sm:text-[1.8rem] text-center">"We back property decisions with research. Not hype."</p>
              </ComicPanelBubble>
            </div>

            <div className="absolute bottom-0 right-0 z-[40] flex flex-col justify-end pr-3 pb-0 sm:pr-4 sm:pb-1">
              <StickyCallout
                noteVariant="sticky"
                className="w-[min(13.5rem,calc(100vw-2rem))] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
                narratorSrc={soubhPointing}
                narratorImgClassName="origin-bottom translate-y-0.5 sm:translate-y-1"
                narratorHeightClass="h-[clamp(10rem,22vw,14rem)] sm:h-[clamp(11rem,20vw,15rem)] md:h-[clamp(12rem,18vw,16rem)]"
                lines={[
                  "Internal alignment is the fastest outcome.",
                  "Most agencies feel it inside two weeks. Vendors feel it by month three."
                ]}
              />
            </div>
          </div>

          {/* ——— SLIDE 17 — SCENE 18 — Day 90: The Numbers ——— */}
          <div id="slide-17" className="relative h-full w-screen shrink-0 overflow-hidden bg-[#2c2b29]">
            <SharpPanelBg
              src={bgScene10}
              overlayClassName="bg-[#0f172a]/85"
              imageClassName="object-cover object-[center_center]"
            />
            {/* Whiteboard UI */}
            <div className="absolute left-[5%] top-[10%] z-[20] w-[90%] max-w-lg rounded border-4 border-gray-300 bg-white p-4 shadow-lg sm:left-[10%] sm:p-6">
              <h2 className="mb-4 font-comic text-xl font-bold uppercase underline decoration-terracotta decoration-4 underline-offset-4">90-Day Report</h2>
              <ul className="space-y-2 font-comic text-sm font-semibold sm:text-base">
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> 36 pieces of content published</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> Engagement up significantly</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> 4x more inbound vendor enquiries</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> Commission discount reduced by ~60%</li>
                <li className="flex items-center gap-2"><span className="text-terracotta">✓</span> Team retention up</li>
              </ul>
            </div>

            <div className="pointer-events-none absolute bottom-[-40px] right-0 z-[50] flex flex-col items-end pb-0 pr-0 sm:pr-8">
              <div className="pointer-events-auto relative z-[20] mb-2 w-[min(13.5rem,calc(100vw-2rem))] sm:mb-4 sm:w-[22rem] md:w-[24rem]">
                <ComicPanelBubble tail="bottom-left" caption="Josh" className="rounded-xl border-[3px] border-black bg-[#FFFCF5] p-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  <p className="font-comic text-[1.3rem] font-bold sm:text-[1.5rem]">"Soubh & Co. didn't give us new marketing. They gave us permission to be honest about how we work."</p>
                </ComicPanelBubble>
              </div>
              <div className="flex items-end pr-8 sm:pr-12">
                <img src={annaBaseV1} alt="Anna" className="relative z-[1] h-[min(65vh,550px)] w-auto origin-bottom object-contain object-bottom scale-x-[-1] sm:h-[min(70vh,600px)]" />
                <img src={joshNormal} alt="Josh" className="relative z-[2] -ml-8 h-[min(70vh,600px)] w-auto origin-bottom object-contain object-bottom sm:h-[min(80vh,700px)]" />
              </div>
            </div>
          </div>

          {/* ——— SLIDE 18 — CLOSING SLIDE ——— */}
          <div id="slide-18" className="relative flex h-full w-screen shrink-0 flex-col items-center justify-center overflow-hidden bg-[#FAF8F3]">
            <div className="relative z-[30] mt-10 flex max-w-2xl flex-col items-center text-center px-4">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">Want this for your agency?</h1>
              <p className="mt-4 font-body text-lg font-semibold text-gray-700 sm:text-xl">Two-week sprint. Three deliverables. $5,000 founding rate. Three spots left.</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-full bg-terracotta px-8 py-4 font-comic text-lg font-bold text-white shadow-[4px_4px_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  Book your call →
                </button>
                <button className="rounded-full border-4 border-black px-8 py-4 font-comic text-lg font-bold text-black shadow-[4px_4px_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(0,0,0,1)]">
                  Or skip the call: fill the intake form →
                </button>
              </div>
            </div>

            <img src={soubhSmile} alt="Soubh" className="absolute bottom-0 h-[40vh] object-contain object-bottom sm:h-[50vh] md:h-[60vh] z-[10]" />
          </div>

        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        disabled={atStart}
        className="absolute bottom-14 left-4 z-[185] flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/50 text-xl text-white/90 shadow-lg backdrop-blur-sm transition hover:bg-black/65 disabled:opacity-25 md:hidden"
        aria-label="Previous scene"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        disabled={atEnd}
        className="absolute bottom-14 right-4 z-[185] flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/50 text-xl text-white/90 shadow-lg backdrop-blur-sm transition hover:bg-black/65 disabled:opacity-25 md:hidden"
        aria-label="Next scene"
      >
        ›
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[205] h-1 bg-black/50" aria-hidden>
        <div className="h-full bg-terracotta transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <SlideCounter current={slide + 1} total={TOTAL_SLIDES} variant="light" />
    </div>
  );
}
