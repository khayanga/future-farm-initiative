
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Sprout,
  Building2,
  Globe,
  Landmark,
  Users2,
} from "lucide-react";

const partners = [
  { icon: <Sprout className="w-4 h-4" />, label: "Farmers" },
  { icon: <Handshake className="w-4 h-4" />, label: "Innovators" },
  { icon: <Building2 className="w-4 h-4" />, label: "Finance" },
  { icon: <Landmark className="w-4 h-4" />, label: "Government" },
  { icon: <Globe className="w-4 h-4" />, label: "Development Partners" },
];

export default function ThemeBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-teal-950 px-6 md:px-10 py-10 md:py-12 my-12">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
           <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Theme 2026 – 2029
            </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
               Partnerships for{" "}
               <br className="hidden sm:block" />
               <span className="font-georgia text-primary">
                 the Great Transition
               </span>
             </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            The future of African agriculture will be built through bold
            collaboration uniting key ecosystem players to accelerate the shift
            toward a smarter, more resilient food system.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition"
            >
              <Users2 className="w-4 h-4" />
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/advocacy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 font-semibold text-sm hover:border-primary/40 hover:text-white transition"
            >
              Our Advocacy
            </Link>
          </div>
        </div>

        {/* Right Partner Pills */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">
            The Ecosystem We Unite
          </p>

          <div className="flex flex-wrap gap-3">
            {partners.map((partner) => (
              <div
                key={partner.label}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-white/80 text-sm font-medium"
              >
                <span className="text-primary">{partner.icon}</span>
                {partner.label}
              </div>
            ))}
          </div>

          <div className="mt-8 pl-4 border-l-2 border-primary/40">
            <p className="text-md  text-white/70">
              “Transformation happens when ecosystems move together.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}