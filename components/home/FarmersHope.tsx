"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Sprout } from "lucide-react";

const farmers = [
  {
    name: "Mbuji Agribusiness",
    owner: "Elizabeth Chisomi",
    location: "Ruvuma, Tanzania",
    initials: "MB",
    color: "from-emerald-500 to-emerald-700",
    quote:
      "Coffee farming is more than a business for us it is dignity, education, and opportunity for our communities. My hope is to see women farmers gain equal access to finance, technology, and premium markets so they can grow stronger, more profitable agribusinesses. With the right support, we can build a future where African agriculture is modern, competitive, and empowering for the next generation.",
  },
  {
    name: "Versatile Growers",
    owner: "Nereah Agutu",
    location: "Kenya",
    initials: "VG",
    color: "from-emerald-500 to-emerald-700",
    quote:
      "Technology has transformed how I manage my farm. What once felt overwhelming is now organized, efficient, and data-driven. I can make better decisions, reduce waste, and improve productivity with confidence. More importantly, this transformation has given me renewed hope for the future and the ability to build a more sustainable and resilient farming business.",
  },
];

export default function FarmersHopeCarousel() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setActive(index);
      setTimeout(() => setTransitioning(false), 420);
    },
    [transitioning],
  );

  const goNext = useCallback(
    () => go((active + 1) % farmers.length),
    [active, go],
  );
  const goPrev = useCallback(
    () => go((active - 1 + farmers.length) % farmers.length),
    [active, go],
  );

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  const f = farmers[active];

  return (
    <section className="relative overflow-hidden bg-teal-900 px-6 py-12 my-12 rounded-md">
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* HEADING AREA */}

        <div className="flex items-start flex-col gap-3 mb-10 border-b border-white/5 pb-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-3">
            Real Stories from the Field
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Farmers’ Hope for the <span className=" text-primary">Future</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16  mx-auto">
          {/* LEFT: Farmer Identity */}
          <div className="w-full md:w-64 flex flex-row md:flex-col items-center md:items-start gap-4 ">
            <div
              className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br ${f.color} flex items-center justify-center shadow-xl transition-all duration-500`}
            >
              <span className="text-xl font-bold text-white tracking-tighter">
                {f.initials}
              </span>
            </div>

            <div className="flex flex-col text-left">
              <p className="text-lg font-bold text-white leading-tight">
                {f.owner}
              </p>
              <p className="text-sm text-primary font-medium">{f.name}</p>
              <p className="text-xs text-white/70 mt-0.5">{f.location}</p>
            </div>
          </div>

          {/* RIGHT: Quote & Nav */}
          <div className="flex-1 w-full flex flex-col justify-between min-h-40  md:max-w-2xl">
            <div
              key={active}
              className="relative"
              style={{ animation: `horizontalFadeIn 0.4s ease-out` }}
            >
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/10" />
              <blockquote className="text-md sm:text-md lg:text-md  text-white leading-[1.45] mb-6 ">
                {f.quote}
              </blockquote>
            </div>

            {/* Nav Row */}
            <div className="flex items-center gap-6 mt-auto">
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  className="p-1.5 rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="p-1.5 rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress & Pagination Dots */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {farmers.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === active ? "w-6 bg-primary" : "w-2 bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                <div className="hidden sm:block w-24 h-px bg-white/5 overflow-hidden">
                  <div
                    key={`bar-${active}`}
                    className="h-full bg-primary/40"
                    style={{ animation: "progressBar 6s linear forwards" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes horizontalFadeIn {
          from {
            opacity: 0;
            transform: translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
