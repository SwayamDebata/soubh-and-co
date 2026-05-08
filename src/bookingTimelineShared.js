/**
 * Shared timeline visuals for /book and /booked so progress styling stays in sync.
 */
export const BOOKING_TIMELINE_LINE_CLASS =
  "absolute left-5 right-5 top-[22px] z-0 h-[2px] bg-[#E5E0D5]";

const MARKER_BASE =
  "relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-body text-sm font-bold";

/** @param {"done" | "current" | "upcoming"} state */
export function bookingTimelineMarkerClass(state) {
  if (state === "done") {
    return `${MARKER_BASE} border-dark/40 bg-[#D9D9D9] text-dark`;
  }
  if (state === "current") {
    return `${MARKER_BASE} border-orange bg-orange text-white shadow-[0_6px_14px_rgba(8,96,143,0.28)]`;
  }
  return `${MARKER_BASE} border-dark/35 bg-white text-dark/60`;
}
