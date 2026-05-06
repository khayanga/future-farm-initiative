"use client";

import Link from "next/link";
import { ArrowRight, Users2 } from "lucide-react";

export default function ThemeBanner() {
  return (
   <section id="shambany" className="relative overflow-hidden py-24 rounded-md md:my-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1800&auto=format&fit=crop&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,44,36,0.7) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Theme 2026 – 2029
            </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
          Partnerships for{" "}
          <span className="font-georgia text-primary">
            the Great Transition
          </span>
        </h2>

        <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
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