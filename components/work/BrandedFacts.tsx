
import ScrollReveal from "../ScrollReveal";
import { Shield, Sprout, BarChart3 } from "lucide-react";

const facts = [
  {
    number: "01",
    icon: <Shield className="w-6 h-6" />,
    label: "Food Security",
    stat: "2.5B",
    statSub: "people to feed by 2050",
    headline: "Food security is no longer optional it is urgent.",
    body: "With Africa's population projected to reach 2.5 billion by 2050, the continent faces an unprecedented demand for safe, reliable, and locally produced food. The window to act is now.",
    accent: "from-emerald-500/30 to-transparent",
    iconBg:
      "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
  },
  {
    number: "02",
    icon: <Sprout className="w-6 h-6" />,
    label: "Tech-Led Agriculture",
    stat: "↑ 3×",
    statSub: "productivity potential with tech",
    headline: "Productivity & efficiency the fastest path to feeding more.",
    body: "Boosting farm productivity through technology is the most direct route to feeding more people while cutting post-harvest losses. Smart farming isn't the future — it's the present requirement.",
    accent: "from-primary/30 to-transparent",
    iconBg:
      "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    number: "03",
    icon: <BarChart3 className="w-6 h-6" />,
    label: "Farming as a Business",
    stat: "65%",
    statSub: "of arable land underutilized",
    headline: "When farming becomes a business, everything changes.",
    body: "Treating farming as a structured enterprise unlocks access to finance, builds climate resilience, and secures stable incomes for farmers and their families generation after generation.",
    accent: "from-amber-500/30 to-transparent",
    iconBg:
      "bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
  },
];

const BrandedFacts = () => {
  return (
    <section className="relative overflow-hidden bg-background px-8 py-24 mb-22">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] text-foreground pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />

      {/* Watermark */}
      <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[18vw] font-serif font-bold text-foreground/5 leading-none select-none pointer-events-none uppercase">
        Facts
      </span>

      <div className="container relative z-10">
        <ScrollReveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-3">
                What Drives Us
              </span>

              <h2 className="text-3xl max-w-md sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Three Truths About{" "}
                <span className="font-serif italic text-primary">
                  Africa's Food Future
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-md max-w-xs md:text-right leading-relaxed">
              Every initiative we run is anchored in these realities,Food security is urgent,
              Improved Productivity and  efficiency the fastest path to feeding more.
              Farming as a business unlocks finance, resilience, and lasting income.
  
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-primary/40 via-border to-transparent mb-16" />

          {/* Facts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className="group relative bg-background p-10 flex flex-col gap-7 hover:bg-muted/30 transition-colors duration-500"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Accent hover line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${fact.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-bold font-serif text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300 leading-none">
                    {fact.number}
                  </span>

                  <div
                    className={`flex items-center justify-center w-11 h-11 rounded-full ${fact.iconBg} transition-all duration-300`}
                  >
                    {fact.icon}
                  </div>
                </div>

                {/* Stat */}
                <div>
                  <p className="text-5xl lg:text-6xl font-bold font-serif gradient-text leading-none mb-1">
                    {fact.stat}
                  </p>

                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {fact.statSub}
                  </p>
                </div>

                {/* Label */}
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full border border-border text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {fact.label}
                </span>

                {/* Text */}
                <div className="flex flex-col gap-3 border-t border-border pt-6">
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {fact.headline}
                  </h3>

                  <p className="text-md text-muted-foreground leading-relaxed">
                    {fact.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default BrandedFacts;
