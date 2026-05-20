import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import FadeIn from "./FadeIn";
import avatarMarkZammit from "../assets/Mark Zammit.png";
import avatarJasonMcCall from "../assets/Jason McCall.png";
import avatarArshakWasim from "../assets/Arshak Wasim.png";

const THREE_TESTIMONIALS = [
  {
    text: "I've been working with him (Soubh, Saubh, Subh, Soub) for years and I still can't say his name right. But I can tell you this: his work is **unforgettable**. That's really all you need to know.",
    name: "Mark Zammit",
    role: "Director, Zammit Real Estate",
    initials: "MZ",
    avatar: avatarMarkZammit,
  },
  {
    text: "He helped streamline our workflows, saving us time and effort. His attention to detail and a keen understanding of our business needs have made him an invaluable partner.",
    name: "Jason McCall",
    role: "Director, The SMSF Property Guy",
    initials: "JM",
    avatar: avatarJasonMcCall,
  },
  {
    text: "Finding Soubh through a random Facebook group was the best thing that ever happened to my business. He completely transformed my scattered online presence into a cohesive, powerful brand that now attracts high-quality leads daily.",
    name: "Arshak Wasim",
    role: "Director, Arum & Co",
    initials: "AW",
    avatar: avatarArshakWasim,
  },
];

function renderBoldSegments(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className="text-orange">
          {m[1]}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function TestimonialCarousel() {
  const items = THREE_TESTIMONIALS;
  const loopItems = [...items, ...items];
  const trackRef = useRef(null);
  const [cycleWidth, setCycleWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (trackRef.current) {
      setCycleWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-14 md:py-20" aria-label="Client testimonials">
      <div className="mx-auto w-full max-w-[min(100%,1280px)] px-3 sm:px-4 lg:px-5">
        <FadeIn>
          <h2 className="text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-foreground">
            What clients say
          </h2>
        </FadeIn>

        <div
          className="relative mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:w-12" />
          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent md:w-12" />

          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex gap-5 pb-4 pt-2"
              animate={cycleWidth > 0 && !paused ? { x: [0, -cycleWidth] } : undefined}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 24,
                  ease: "linear",
                },
              }}
            >
              {loopItems.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="min-w-[280px] max-w-[320px] shrink-0 select-none md:min-w-[340px]"
                >
                  <Card className="flex h-full flex-col rounded-md border border-border bg-white p-7 md:p-8">
                    <p className="text-[15px] font-medium leading-[1.72] text-foreground md:text-[17px]">
                      <span className="text-[1.35em] font-bold leading-none text-primary/30" aria-hidden="true">
                        &ldquo;
                      </span>
                      {renderBoldSegments(item.text)}
                      <span className="text-[1.35em] font-bold leading-none text-primary/30" aria-hidden="true">
                        &rdquo;
                      </span>
                    </p>
                    <div className="mt-8 flex items-center gap-4 pt-1">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt=""
                          width={48}
                          height={48}
                          loading="lazy"
                          decoding="async"
                          className="h-12 w-12 shrink-0 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                          {item.initials}
                        </div>
                      )}
                      <div>
                        <p className="text-base font-semibold text-foreground">{item.name}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{item.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
