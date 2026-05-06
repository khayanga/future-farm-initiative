

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const farmers = [
  {
    name: "Mbuji Agribusiness",
    owner: "Elizabeth Chisomi",
    location: "Ruvuma, Tanzania",
    initials: "MB",
    gradient: "from-emerald-500 to-green-700",
    glowColor: "rgba(16,185,129,0.10)",
    quote:
      "Coffee farming is more than a business for us it is dignity, education, and opportunity for our communities. My hope is to see women farmers gain equal access to finance, technology, and premium markets so they can grow stronger, more profitable agribusinesses.",
  },
  {
    name: "Versatile Growers",
    owner: "Nereah Agutu",
    location: "Kenya",
    initials: "VG",
    gradient: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20,184,166,0.10)",
    quote:
      "Technology has transformed how I manage my farm. I can make better decisions, reduce waste, and improve productivity with confidence. More importantly, this transformation has given me renewed hope for the future of my farm.",
  },
];

export default function FarmersHope() {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % farmers.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + farmers.length) % farmers.length), []);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  const farmer = farmers[active];

  return (
    <section className="relative overflow-hidden rounded-md my-12 bg-teal-950 md:my-48 ">
      {/* Dot grid */}
      

       <div className="absolute top-0 left-0 w-125 h-100 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 10% 0%, rgba(74,222,128,0.08) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-100 h-100 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 90% 100%, rgba(45,212,191,0.07) 0%, transparent 60%)' }} />

         <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />


      {/* Dynamic colour glow tied to active farmer */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 70% at 5% 55%, ${farmer.glowColor}, transparent)`,
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-80 h-64 pointer-events-none opacity-[0.05]"
        style={{
          background: "radial-gradient(ellipse at top right, hsl(var(--primary)), transparent 70%)",
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-primary/60 via-primary/20 to-transparent" />

      {/* Ghost quote */}
      <span className="absolute -left-2 top-0 text-[9rem] font-serif font-bold text-white/2.5 leading-none select-none pointer-events-none">
        "
      </span>

      <div className="relative z-10 px-6 sm:px-10 py-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
         <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
             Real Stories from the Field
           </span>
           <h2 className="mt-3 text-3xl md:text-5xl text-white font-bold  leading-tight">
             Farmers’ Hope for the <span className="text-primary">Future</span>
           </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5 items-stretch">

          {/* Identity card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`id-${active}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.32 }}
              className="relative rounded-xl border border-white/8 bg-white/4 p-5 flex flex-row lg:flex-col items-center lg:items-start gap-4 overflow-hidden"
            >
              {/* Top colour line on card */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${farmer.gradient}`} />

              {/* Avatar */}
              <div
                className={`shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-linear-to-br ${farmer.gradient} flex items-center justify-center text-white text-lg font-bold font-serif shadow-lg`}
              >
                {farmer.initials}
              </div>

              {/* Info */}
              <div>
                <p className="text-lg font-bold text-white leading-snug">{farmer.owner}</p>
                <p className="text-md font-semibold text-primary mt-0.5">{farmer.name}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-3 h-px bg-primary/50 inline-block" />
                  <p className="text-sm text-white/70">{farmer.location}</p>
                </div>
              </div>

              
            </motion.div>
          </AnimatePresence>

          {/* Quote card */}
          <div className="relative rounded-xl border border-white/8 bg-white/3 p-6 md:p-8 flex flex-col justify-between min-h-[190px] overflow-hidden">
            {/* Corner wash */}
            <div
              className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-[0.03]"
              style={{ background: "radial-gradient(circle at top right, white, transparent)" }}
            />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={`q-${active}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.36 }}
                className="text-sm sm:text-[15px] md:text-base text-white/70 leading-[1.8] relative z-10"
              >
                <span className="text-primary text-2xl  leading-none align-top mr-1 opacity-50">"</span>
                {farmer.quote}
                <span className="text-primary text-2xl  leading-none align-bottom ml-1 opacity-50">"</span>
              </motion.blockquote>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/6">
              {/* Dot pills */}
              <div className="flex items-center gap-1.5">
                {farmers.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? "w-6 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Progress sweep */}
              <div className="flex-1 mx-5 h-px bg-white/[0.07] rounded-full overflow-hidden">
                <div
                  key={active}
                  className="h-full bg-primary/40 rounded-full"
                  style={{ animation: "farmProg 6.5s linear forwards" }}
                />
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="group w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-primary/50 hover:text-primary transition-all duration-200"
                >
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="group w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:border-primary/50 hover:text-primary transition-all duration-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes farmProg {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}