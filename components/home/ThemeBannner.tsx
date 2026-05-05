"use client";

import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";

export default function ThemeBanner() {
  return (
    <section className="relative overflow-hidden  px-6 md:px-10 py-12 md:py-14 my-10 md:my-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Decorative Accent Lines */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-primary/15 rounded-tl-2xl" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-primary/15 rounded-br-2xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-white border border-primary/10 text-primary text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Theme 2026–2029
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
          Partnerships for{" "}
          <span className="font-georgia text-primary">
            the Great Transition
          </span>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Building the partnerships needed to accelerate Africa’s transition
          toward a smarter, more resilient agricultural future.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
        >
          <Users2 className="w-4 h-4" />
          Become a Partner
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}