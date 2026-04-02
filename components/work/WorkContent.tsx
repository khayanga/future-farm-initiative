import ScrollReveal from "../ScrollReveal";
import {
  TrendingDown,
  CircleDollarSign,
  Zap,
  CloudLightning,
} from "lucide-react";

type Challenge = {
  icon: React.ReactNode;
  number: string;
  stat: string;
  statLabel: string;
  title: string;
  body: string;
};

const challenges: Challenge[] = [
  {
    number: "01",
    icon: <TrendingDown className="w-5 h-5" />,
    stat: "~40%",
    statLabel: "below potential yield",
    title: "Farm Productivity Remains Persistently Low",
    body: "Despite fertile soils and vast arable land, most African farms operate far below their productive potential. Without structured systems, technical support, and standardized practices, yields stagnate and so do livelihoods.",
  },
  {
    number: "02",
    icon: <CircleDollarSign className="w-5 h-5" />,
    stat: "600M+",
    statLabel: "smallholders underserved",
    title: "Farmers Trapped in Low-Income Cycles",
    body: "Smallholder farmers remain locked in subsistence cycles with no clear pathway to profitability. Lack of market access, financial literacy, and investment readiness keeps generations of farming families from building real wealth.",
  },
  {
    number: "03",
    icon: <Zap className="w-5 h-5" />,
    stat: "< 5%",
    statLabel: "tech adoption rate",
    title: "Technology Exists But Adoption is Limited",
    body: "The tools to transform African agriculture already exist - precision monitoring, digital farm management, and data-driven decision-making. Yet adoption remains critically low due to cost barriers, capacity gaps, and a lack of structured support.",
  },
  {
    number: "04",
    icon: <CloudLightning className="w-5 h-5" />,
    stat: "3×",
    statLabel: "more climate vulnerable",
    title: "Climate Shocks Increasingly Erode Farm Incomes",
    body: "African farmers are among the most exposed to climate volatility yet the least equipped to absorb it. Unpredictable rains, drought cycles, and extreme weather events are wiping out harvests and reversing hard-won gains in farm productivity.",
  },
];

const WorkContent = () => {
  return (
    <section className="bg-muted/30 mt-6">
      {/* ── Intro banner strip ── */}
      <div className=" text-foreground px-8 py-10">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-2">
              Why Our Work Matters
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl  leading-tight max-w-lg">
              The urgency is{" "}
              <span className="text-primary">real and immediate.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm md:text-right">
            Four compounding crises are converging across Africa's agricultural
            sector. Each one demands structured, scalable intervention now.
          </p>
        </div>
      </div>

      {/* ── Challenges grid ── */}
      <div className="px-8 py-20">
        <div className="container">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {challenges.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-background p-10 lg:p-12 flex flex-col gap-6 hover:bg-muted/30 transition-colors duration-300"
                >
                  {/* Top row: number + icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold font-serif gradient-text opacity-30 group-hover:opacity-60 transition-opacity duration-300 leading-none">
                      {item.number}
                    </span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Stat callout */}
                  <div>
                    <p className="text-5xl font-bold font-serif gradient-text leading-none mb-1">
                      {item.stat}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      {item.statLabel}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-linear-to-r from-primary/40 to-transparent w-12 group-hover:w-24 transition-all duration-500" />

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-serif leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-md text-muted-foreground leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bottom CTA strip ── */}
            <div
              id="act"
              className="mt-20 relative overflow-hidden rounded-md bg-muted/40 border border-border px-10 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              {/* Decorative large text */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[8rem] font-serif font-bold text-foreground/3 leading-none select-none pointer-events-none">
                ACT
              </span>

              <div className="relative z-10 max-w-lg">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-3">
                  The Response
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-serif leading-tight">
                  These aren't isolated challenges ,{" "}
                  <span className="text-primary">
                    they reflect a deeper system failure
                  </span>
                </h3>
                <p className="mt-4 text-md text-muted-foreground text-base leading-relaxed">
                  The Future Farms Initiative was designed to address these gaps
                  at their root, providing structured support and a long-term
                  pathway for farmer transformation.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="/service"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Our Services
                </a>
                <a
                  href="/advocacy"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WorkContent;
