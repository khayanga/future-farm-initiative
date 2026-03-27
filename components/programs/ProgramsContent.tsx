import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import { Briefcase, PiggyBank, BarChart2, ArrowRight } from "lucide-react";

const programs = [
  {
    number: "01",
    icon: <Briefcase className="w-6 h-6" />,
    tag: "Enterprise Transformation",
    title: "Farming as a Business Program",
    hook: "From subsistence production to commercial enterprise.",
    intro:
      "This program transforms the mindset and operating model of a farm from informal, output-focused production to a structured, investment-ready business.",
    body: "Farmers learn how to structure operations, optimize factors of production, integrate technology and renewable energy, comply with food safety standards, and plan for growth. The focus is on profitability, sustainability, scalability, and market competitiveness positioning farms as investable and resilient businesses.",
    outcomes: [
      "Structured farm operations & governance",
      "Technology & renewable energy integration",
      "Food safety compliance readiness",
      "Growth planning & market competitiveness",
      "Investment readiness positioning",
    ],
    accent: "from-emerald-500/30 via-emerald-500/10 to-transparent",
    iconColor: "bg-emerald-500/10 text-emerald-600",
    iconHover: "group-hover:bg-emerald-500 group-hover:text-white",
    statLabel: "Program Focus",
    stat: "Profitability & Scale",
  },
  // {
  //   number: "02",
  //   icon: <PiggyBank className="w-6 h-6" />,
  //   tag: "Financial Capability",
  //   title: "Financial Literacy Training",
  //   hook: "Confidence and clarity in every financial decision.",
  //   intro:
  //     "We strengthen farmers' financial confidence and decision-making capacity moving beyond guesswork to structured, data-backed financial management.",
  //   body: "This training covers budgeting, cost tracking, pricing strategies, savings, debt management, record-keeping, and understanding financing options. Farmers gain the ability to assess risk, plan investments, improve cash flow management, and engage formal and informal financial institutions effectively.",
  //   outcomes: [
  //     "Budgeting & cost tracking systems",
  //     "Pricing strategy & margin management",
  //     "Savings & debt management frameworks",
  //     "Investment planning & risk assessment",
  //     "Financial institution engagement skills",
  //   ],
  //   accent: "from-primary/30 via-primary/10 to-transparent",
  //   iconColor: "bg-primary/10 text-primary",
  //   iconHover: "group-hover:bg-primary group-hover:text-primary-foreground",
  //   statLabel: "Program Focus",
  //   stat: "Financial Resilience",
  // },
  {
    number: "02",
    icon: <BarChart2 className="w-6 h-6" />,
    tag: "Operational Excellence",
    title: "Farm Management for Climate Resilience",
    hook: "Practical skills to drive efficiency and consistent output.",
    intro:
      "We provide hands-on, practical skills to improve operational efficiency and productivity across every stage of the farm cycle.",
    body: "Farmers are trained on production planning, environmental monitoring, compliance documentation, quality control, and performance tracking. The program emphasizes data-driven decision-making, reduced losses, improved yields, and consistent market-ready output.",
    outcomes: [
      "Production planning & scheduling",
      "Environmental monitoring & compliance",
      "Quality control & documentation",
      "Performance tracking & data use",
      "Consistent market-ready output standards",
    ],
    accent: "from-teal-900/30 via-teal-900/10 to-transparent",
    iconColor: "bg-teal-900/10 text-teal-900",
    iconHover: "group-hover:bg-teal-900 group-hover:text-white",
    statLabel: "Program Focus",
    stat: "Yield & Efficiency",
  },
];

const ProgramsContent = () => {
  return (
    <section className="bg-background">
      {/* Intro strip */}
      
      <div className=" px-8 py-12 mt-12
      ">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-3">
              Core Programs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-xl">
              Built for real farmers.{" "}
              <span className=" text-primary">
                Designed for real transformation
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-md leading-relaxed max-w-sm md:text-right">
            Each program is designed to address a specific gap in the farmer
            transformation journey from mindset to operations to finance.
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="px-8 py-20">
        <div className="container">
          <ScrollReveal>
            <div className="space-y-12">
              {programs.map((program, index) => (
                <div
                  key={program.number}
                  className={`group relative rounded-md border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Top linear wash */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${program.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: number + stat sidebar */}
                    <div className="lg:col-span-2 bg-muted/40 group-hover:bg-muted/60 transition-colors duration-300 p-8 flex flex-row lg:flex-col justify-between lg:justify-start gap-6 border-b lg:border-b-0 lg:border-r border-border">
                      <span className="text-6xl font-bold font-serif linear-text opacity-30 group-hover:opacity-70 transition-opacity duration-300 leading-none">
                        {program.number}
                      </span>
                      <div className="lg:mt-auto">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                          {program.statLabel}
                        </p>
                        <p className="text-sm font-bold text-foreground font-serif">
                          {program.stat}
                        </p>
                      </div>
                    </div>

                    {/* Center: main content */}
                    <div className="lg:col-span-6 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border">
                      {/* Icon + tag */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`flex items-center justify-center w-11 h-11 rounded-full ${program.iconColor} ${program.iconHover} transition-all duration-300 shrink-0`}
                        >
                          {program.icon}
                        </div>
                        <span className="text-xs font-semibold text-primary/70 border border-primary/20 rounded-full px-3 py-1 uppercase tracking-widest">
                          {program.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-serif leading-snug mb-3">
                        {program.title}
                      </h3>

                      {/* Hook */}
                      <p className="text-base font-semibold text-primary mb-5 italic">
                        "{program.hook}"
                      </p>

                      {/* Intro + body */}
                      <p className="text-foreground/80 text-md leading-relaxed mb-3">
                        {program.intro}
                      </p>
                      <p className="text-muted-foreground text-md leading-relaxed">
                        {program.body}
                      </p>

                      {/* Accent line */}
                      <div className="mt-8 h-0.5 w-0 bg-linear-to-r from-primary to-primary/10 group-hover:w-20 transition-all duration-500" />
                    </div>

                    {/* Right: outcomes */}
                    <div className="lg:col-span-4 p-8 lg:p-10 bg-muted/20 group-hover:bg-muted/30 transition-colors duration-300">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5">
                        What Farmers Gain
                      </p>
                      <ul className="space-y-4">
                        {program.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </div>
                            <span className="text-sm text-foreground/70 leading-snug">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                      >
                        Enroll in this program
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 relative overflow-hidden rounded-md bg-teal-800 px-10 py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `radial-linear(circle, white 1px, transparent 1px)`,
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[7rem] font-serif font-bold text-white/3 leading-none select-none pointer-events-none uppercase">
                Enroll
              </span>

              <div id="enroll" className="relative z-10 max-w-lg ">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-3">
                  Ready to Begin?
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif leading-tight">
                  Every farm transformation{" "}
                  <span className="linear-text italic">
                    starts with a single program.
                  </span>
                </h3>
                <p className="mt-4 text-white/70  leading-relaxed text-md">
                  Reach out to learn which program is the right fit for your
                  farm's current stage and take the first structured step
                  toward building a future-ready enterprise.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProgramsContent;