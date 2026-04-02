"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Future Farms Initiative is playing a critical role in bridging the gap between smallholder farmers and the resources they need to thrive. As we build MkulimaScore to unlock access to finance through alternative data, we see strong alignment with this vision making farmers more visible, bankable, and fully integrated into modern agricultural systems.",
    name: "Francis Onyango",
    role: "Founder & CEO",
    location: "Nairobi, Kenya",
    program: "Mkulima Score 360",
    image: "/francis.jpg",
    initials: "FO",
  },
//   {
//     quote:
//       "The Future Farms Initiative is playing a critical role in bridging the gap between smallholder farmers and the resources they need to thrive. As we build MkulimaScore to unlock access to finance through alternative data, we see strong alignment with this vision making farmers more visible, bankable, and fully integrated into modern agricultural systems.",
//     name: "Francis Onyango",
//     role: "CEO",
//     location: "Nairobi, Kenya",
//     program: "Mkulima Score 360",
//     image: "/francis.jpg",
//     initials: "FO",
//   },
//   {
//     quote:
//       "The Future Farms Initiative is playing a critical role in bridging the gap between smallholder farmers and the resources they need to thrive. As we build MkulimaScore to unlock access to finance through alternative data, we see strong alignment with this vision making farmers more visible, bankable, and fully integrated into modern agricultural systems.",
//     name: "Francis Onyango",
//     role: "CEO",
//     location: "Nairobi, Kenya",
//     program: "Mkulima Score 360",
//     image: "/francis.jpg",
//     initials: "FO",
//   },
  
  
  
  
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const go = useCallback(
    (idx: number, dir: "next" | "prev") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const next = useCallback(() => {
    go((active + 1) % testimonials.length, "next");
  }, [active, go]);

  const prev = useCallback(() => {
    go((active - 1 + testimonials.length) % testimonials.length, "prev");
  }, [active, go]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-teal-900 px-8 py-12 mb-16 mt-10 md:mt-16 rounded-md">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-150 h-125 opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, hsl(var(--primary)) 0%, transparent 65%)",
        }}
      />

      {/* Accent bars */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      {/* Giant quote mark background */}
      <span className="absolute left-6 top-8 text-[18rem] font-serif font-bold text-white/2 leading-none select-none pointer-events-none">
        "
      </span>

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-3">
              Voices from the Industry
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The People Behind{" "}
              <span className=" text-primary">
                the Numbers
              </span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-primary/60 hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-primary/60 hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-primary/40 via-white/10 to-transparent mb-6" />

        {/* Main testimonial */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:gap-16 items-center justify-center">

          {/* Avatar column */}
          <div className="md:max-w-sm flex flex-row lg:flex-col items-center lg:items-start gap-6">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-primary/40 ring-4 ring-primary/10">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl lg:text-3xl  text-primary">
                      {t.initials}
                    </span>
                  </div>
                )}
              </div>
              {/* Active dot */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary border-2 border-foreground" />
            </div>

            {/* Person info */}
            <div>
              <p className="text-base font-bold text-white  mb-0.5">
                {t.name}
              </p>
              <p className="text-xs text-white/60 mb-1">{t.role}</p>
              <p className="text-xs text-white/55 flex items-center gap-1">
                <span className="w-3 h-px bg-primary/60 inline-block" />
                {t.location}
              </p>

              {/* Program pill */}
              <span className="mt-3 inline-block text-[10px] font-semibold text-primary border border-primary/25 rounded-full px-3 py-1 uppercase tracking-widest">
                {t.program}
              </span>
            </div>
          </div>

          {/* Quote column */}
          <div className=" md:max-w-2xl">
            <div
              className="relative"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating
                  ? `translateX(${direction === "next" ? "20px" : "-20px"})`
                  : "translateX(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4 rotate-180" />

              <blockquote className="text-md sm:text-md lg:text-md  text-white leading-[1.45] mb-6">
                "{t.quote}"
              </blockquote>

              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/10 relative overflow-hidden rounded-full">
                  <div
                    key={active}
                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                    style={{
                      animation: "progress 6s linear forwards",
                    }}
                  />
                </div>
                <span className="text-xs text-white/30 tabular-nums shrink-0">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? "next" : "prev")}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? "next" : "prev")}
              aria-label={`View ${item.name}'s testimonial`}
              className={`relative w-10 h-10 rounded-full overflow-hidden transition-all duration-300 border-2 ${
                i === active
                  ? "border-primary scale-110 ring-2 ring-primary/30"
                  : "border-white/10 opacity-40 hover:opacity-70 hover:border-white/60"
              }`}
            >
              <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-bold  text-primary">
                  {item.initials}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;