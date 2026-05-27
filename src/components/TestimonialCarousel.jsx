import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";
import avatarMarkZammit from "../assets/Mark Zammit.png";
import avatarJasonMcCall from "../assets/Jason McCall.png";
import avatarArshakWasim from "../assets/Arshak Wasim.png";

const TESTIMONIALS = [
  {
    quote:
      "I've been working with him (Soubh, Saubh, Subh, Soub) for years and I still can't say his name right. But I can tell you this: his work is unforgettable. That's really all you need to know.",
    name: "Mark Zammit",
    title: "Director, Zammit Real Estate",
    avatar: avatarMarkZammit,
  },
  {
    quote:
      "He helped streamline our workflows, saving us time and effort. His attention to detail and a keen understanding of our business needs have made him an invaluable partner.",
    name: "Jason McCall",
    title: "Director, The SMSF Property Guy",
    avatar: avatarJasonMcCall,
  },
  {
    quote:
      "Finding Soubh through a random Facebook group was the best thing that ever happened to my business. He completely transformed my scattered online presence into a cohesive, powerful brand that now attracts high-quality leads daily.",
    name: "Arshak Wasim",
    title: "Director, Arum & Co",
    avatar: avatarArshakWasim,
  },
];

// Mobile swipe carousel
function MobileSwipeCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="px-4"
          >
            <div className="rounded-2xl border border-border bg-white px-6 py-6">
              <blockquote>
                <span className="text-[15px] font-medium leading-[1.72] text-foreground">
                  <span className="text-[1.35em] font-bold leading-none text-primary/30" aria-hidden="true">
                    &ldquo;
                  </span>
                  {items[currentIndex].quote}
                  <span className="text-[1.35em] font-bold leading-none text-primary/30" aria-hidden="true">
                    &rdquo;
                  </span>
                </span>
                <div className="mt-5 flex flex-row items-center gap-3">
                  {items[currentIndex].avatar && (
                    <img
                      src={items[currentIndex].avatar}
                      alt=""
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-foreground">
                      {items[currentIndex].name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {items[currentIndex].title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              idx === currentIndex ? "w-6 bg-orange" : "bg-dark/20"
            )}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Swipe to see more
      </p>
    </div>
  );
}

function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      // Keep cloning until content is at least 2.5x container width
      let attempts = 0;
      while (scrollerRef.current.scrollWidth < containerWidth * 2.5 && attempts < 10) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
        });
        attempts++;
      }

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse",
        );
        const duration =
          speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
        containerRef.current.style.setProperty("--animation-duration", duration);
      }

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[320px] max-w-full shrink-0 rounded-2xl border border-border bg-white px-7 py-6 md:w-[400px] md:px-8 md:py-7"
            key={item.name}
          >
            <blockquote>
              <span className="relative z-20 text-[15px] font-medium leading-[1.72] text-foreground md:text-[17px]">
                <span
                  className="text-[1.35em] font-bold leading-none text-primary/30"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                {item.quote}
                <span
                  className="text-[1.35em] font-bold leading-none text-primary/30"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
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
                ) : null}
                <span className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section className="py-14 md:py-20" aria-label="Client testimonials">
      <div className="mx-auto w-full max-w-[min(100%,1280px)] px-3 sm:px-4 lg:px-5">
        <FadeIn>
          <h2 className="text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-foreground">
            What clients say
          </h2>
        </FadeIn>

        {/* Mobile: Swipe carousel */}
        <div className="mt-10 md:hidden">
          <MobileSwipeCarousel items={TESTIMONIALS} />
        </div>

        {/* Desktop: Infinite moving cards */}
        <div className="relative mt-10 hidden md:block">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:w-12" />
          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent md:w-12" />

          <InfiniteMovingCards
            items={TESTIMONIALS}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
