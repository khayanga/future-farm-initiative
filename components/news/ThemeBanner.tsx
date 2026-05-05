// import Link from "next/link";
// import { ArrowRight, Handshake, Sprout, Building2, Globe, Landmark, Users2 } from "lucide-react";

// const partners = [
//   { icon: <Sprout className="w-5 h-5" />, label: "Farmers" },
//   { icon: <Handshake className="w-5 h-5" />, label: "Innovators" },
//   { icon: <Building2 className="w-5 h-5" />, label: "Financial Institutions" },
//   { icon: <Landmark className="w-5 h-5" />, label: "Governments" },
//   { icon: <Globe className="w-5 h-5" />, label: "Development Partners" },
// ];

// const ThemeBanner = () => {
//   return (
//     <section className="relative overflow-hidden bg-teal-900 px-8 py-10 md:py-16 mb-12 rounded-md">
//       {/* Dot grid */}
//       <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
//           backgroundSize: "36px 36px",
//         }}
//       />

//       {/* Dual radial glows */}
//       <div
//         className="absolute top-0 left-0 w-125 h-100 opacity-[0.08] pointer-events-none"
//         style={{
//           background: "radial-gradient(ellipse at top left, hsl(var(--primary)) 0%, transparent 70%)",
//         }}
//       />
//       <div
//         className="absolute bottom-0 right-0 w-100 h-87.5 opacity-[0.05] pointer-events-none"
//         style={{
//           background: "radial-gradient(ellipse at bottom right, hsl(var(--primary)) 0%, transparent 70%)",
//         }}
//       />

     
//       <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-primary via-primary/40 to-transparent" />
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />


//       <div className="container relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

//           {/* Left content */}
//           <div className="lg:col-span-7">
//             {/* Theme period pill */}
           

//             {/* Headline */}
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
//               Partnerships for{" "}
//               <br className="hidden sm:block" />
//               <span className="font-georgia text-primary">
//                 the Great Transition
//               </span>
//             </h2>

//             {/* Body */}
//             <p className="text-white/70 text-base leading-relaxed max-w-xl mb-10">
//               This is a call to action bringing together farmers, innovators,
//               financial institutions, governments, and development partners to
//               collectively drive the transformation of African agriculture. The
//               Great Transition is not a moment. It is a movement.
//             </p>

//             {/* Partner tab CTA */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
//               >
//                 <Users2 className="w-4 h-4" />
//                 Become a Partner
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
//               </Link>
//               <Link
//                 href="/advocacy"
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/15 text-white/70 font-semibold text-sm hover:border-primary/40 hover:text-white transition-colors duration-200"
//               >
//                 Our Advocacy
//               </Link>
//             </div>
//           </div>

//           {/* Right: who's involved */}
//           <div className="lg:col-span-5">
//             <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">
//               Who the Transition Unites
//             </p>

//             <div className="space-y-3">
//               {partners.map((p, i) => (
//                 <div
//                   key={p.label}
//                   className="group flex items-center gap-4 p-4 rounded-md border border-white/[0.07] bg-white/2 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
//                   style={{ animationDelay: `${i * 80}ms` }}
//                 >
//                   {/* Number */}
//                   <span className="text-xs font-bold text-white/40 font-serif w-6 shrink-0">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>

//                   {/* Icon */}
//                   <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary/20 text-white/40 group-hover:text-primary flex items-center justify-center shrink-0 transition-all duration-300">
//                     {p.icon}
//                   </div>

//                   {/* Label */}
//                   <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-200">
//                     {p.label}
//                   </span>

//                   {/* Arrow */}
//                   <ArrowRight className="w-3.5 h-3.5 text-primary/0 group-hover:text-primary/60 ml-auto transition-all duration-300" />
//                 </div>
//               ))}
//             </div>

//             {/* Quote accent */}
//             <div className="mt-8 pl-5 border-l-2 border-primary/40">
//               <p className="text-sm text-white/70  leading-relaxed">
//                 "The future of African agriculture will not be built by one
//                 actor alone it will be built by all of us, together."
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThemeBanner;



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
    <section className="relative overflow-hidden rounded-2xl bg-teal-900 px-6 md:px-10 py-10 md:py-12 my-12">
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