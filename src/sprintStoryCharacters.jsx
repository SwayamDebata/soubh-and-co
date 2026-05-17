import characterDirector from "./assets/character.svg";
import characterAdvisor from "./assets/character (1).svg";
import characterTeam from "./assets/character (2).svg";

function CharacterAsset({ src, mirror, className = "" }) {
  return (
    <img
      src={src}
      alt=""
      className={`drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] h-[6.5rem] w-auto max-w-[6rem] object-contain object-bottom select-none sm:h-[8.5rem] sm:max-w-[7.5rem] md:h-[10rem] md:max-w-[8.5rem] lg:h-[11rem] lg:max-w-[9.5rem] ${className}`}
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
      draggable={false}
    />
  );
}

function pickLeftRight(visual) {
  switch (visual) {
    case "cover":
      return { L: { type: "none" }, R: { type: "none" } };
    case "office-saturday":
      return { L: { type: "director" }, R: { type: "advisor", mirror: true } };
    case "grid-feeds":
      return { L: { type: "director" }, R: { type: "advisor", mirror: true } };
    case "meeting-bubbles":
    case "meeting-internal":
      return { L: { type: "team" }, R: { type: "director" } };
    case "linkedin-post":
      return { L: { type: "director" }, R: { type: "advisor", mirror: true } };
    case "cta-close":
      return { L: { type: "advisor" }, R: { type: "director" } };
    default:
      return { L: { type: "director" }, R: { type: "advisor", mirror: true } };
  }
}

function renderSlot(spec) {
  if (!spec || spec.type === "none") {
    return <div className="w-1 shrink-0 sm:w-6 md:w-8" aria-hidden />;
  }
  const wrap =
    "flex shrink-0 items-end justify-center motion-safe:animate-float-y-slow motion-reduce:animate-none w-[5.5rem] sm:w-[7rem] md:w-[8.5rem] lg:w-[10rem]";
  if (spec.type === "team") {
    return (
      <div className={wrap}>
        <CharacterAsset src={characterTeam} />
      </div>
    );
  }
  if (spec.type === "advisor") {
    return (
      <div className={`${wrap} motion-safe:animate-float-y motion-reduce:animate-none`}>
        <CharacterAsset src={characterAdvisor} mirror={spec.mirror} />
      </div>
    );
  }
  return (
    <div className={`${wrap} motion-safe:animate-float-y motion-reduce:animate-none`}>
      <CharacterAsset src={characterDirector} />
    </div>
  );
}

/** Theatrical “stage”: dark mat + larger flanking cast framing the center prop */
export function StoryStageWithCharacters({ visual, children }) {
  const wrap =
    "rounded-[1.5rem] bg-gradient-to-b from-[#141210] via-[#1c1916] to-[#0e0d0c] p-2 ring-1 ring-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_48px_rgba(0,0,0,0.45)] sm:rounded-[1.75rem] sm:p-3 md:p-4";
  if (visual === "cover") {
    return <div className={wrap}>{children}</div>;
  }
  const { L, R } = pickLeftRight(visual);
  return (
    <div className={wrap}>
      <div className="flex min-h-0 max-h-full items-end justify-center gap-0 sm:gap-1 md:gap-2 lg:gap-3">
        {renderSlot(L)}
        <div className="flex min-h-0 min-w-0 max-h-full flex-1 flex-col justify-end overflow-hidden">{children}</div>
        {renderSlot(R)}
      </div>
    </div>
  );
}
