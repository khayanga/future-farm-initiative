import ScrollReveal from "../ScrollReveal";
import {
  Cpu,
  Sun,
  ShieldCheck,
  BookOpen,
  TrendingUp,
  Users,
  BarChart2,
  Rocket,
} from "lucide-react";

const positions = [
  {
    number: "01",
    icon: <Cpu className="w-5 h-5" />,
    title: "Technology-Enabled & Data-Driven Farms",
    summary:
      "We are building farms that are technology-enabled and data-driven.",
    detail:
      "Modern farms must operate on information, not guesswork. We advocate for the integration of digital farm management systems, IoT sensors, satellite data, and analytics into everyday farm operations making every decision faster, more accurate, and more profitable.",
    tag: "Digital Transformation",
  },
  {
    number: "02",
    icon: <Sun className="w-5 h-5" />,
    title: "Renewable Energy–Led Production",
    summary:
      "We champion renewable energy–led production systems for resilience and efficiency.",
    detail:
      "Energy poverty is one of the biggest hidden costs in African agriculture. We push for solar-powered irrigation, cold chain systems, and processing infrastructure that reduce operational costs, cut emissions, and keep farms running regardless of grid reliability.",
    tag: "Clean Energy",
  },
  {
    number: "03",
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Food Safety & Compliance from Farm to Market",
    summary:
      "We embed food safety and compliance standards from farm to market.",
    detail:
      "Market access local, regional, and international is contingent on meeting food safety benchmarks. We advocate for standardized compliance frameworks that protect consumers, build buyer confidence, and position African farms to compete at the highest levels of the supply chain.",
    tag: "Standards & Compliance",
  },
  {
    number: "04",
    icon: <BookOpen className="w-5 h-5" />,
    title: "Indigenous Knowledge Meets Modern Innovation",
    summary:
      "We preserve and integrate indigenous knowledge with modern innovation.",
    detail:
      "Africa's agricultural heritage is a competitive advantage, not a relic. Centuries of ecological understanding, seed selection, and land stewardship hold solutions that modern science is only beginning to validate. We champion hybrid systems that honour this knowledge while amplifying it with technology.",
    tag: "Heritage & Innovation",
  },
  {
    number: "05",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Profitable, Sustainable & Scalable Farm Design",
    summary: "We design farms to be profitable, sustainable, and scalable.",
    detail:
      "A farm that cannot sustain itself financially cannot sustain communities or ecosystems. We advocate for farm designs that embed profitability at the operational level through cost control, output optimization, and diversified revenue while maintaining environmental integrity and room for growth.",
    tag: "Farm Economics",
  },
  {
    number: "06",
    icon: <Users className="w-5 h-5" />,
    title: "Skilled Labour as a Core Production Factor",
    summary: "We elevate skilled labour as a core factor of production.",
    detail:
      "Africa's youth bulge is an agricultural opportunity. We advocate for structured training, formal labour standards, and investment in farm-based skills development transforming agricultural work from informal subsistence into recognized, valued, and well-compensated careers.",
    tag: "Workforce Development",
  },
  {
  number: "07",
  icon: <BarChart2 className="w-5 h-5" />,
  title: "Market-Oriented Production",
  summary: "We promote production systems driven by real market demand.",
  detail:
    "Farms that produce with a clear market strategy leave value on the table. We support farmers in aligning their production with structured market demand, ensuring they grow what sells, meet quality standards, and access reliable buyers.",
  tag: "Market Access",
  },
  {
    number: "08",
    icon: <Rocket className="w-5 h-5" />,
    title: "Investment-Ready Farms",
    summary:
      "We are shaping farming as a modern, competitive, and investment-ready enterprise",
    detail:
      "To unlock capital and talent, the perception of farming must change. We are redefining agriculture as a high-value, tech-enabled enterprise that attracts investments and drives economic growth.",
    tag: "Sector Reimagination",
  },
];

const AdvocacyContent = () => {
  return (
    <section className="bg-background mt-6">

      {/* Intro strip */}
      
      <div className="text-foreground px-8 py-12">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-md font-semibold text-primary uppercase tracking-[0.2em] block mb-3">
              Future Farms Framework

            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground
             leading-tight max-w-xl"
            >
              Eight positions.{" "}
              <span className=" text-primary">
                One direction.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-md leading-relaxed max-w-sm md:text-right">
            Our advocacy is grounded in a clear, coherent strategy each position
            reinforcing the next, building toward a transformed agricultural
            sector.
          </p>
        </div>
      </div>

      {/* Positions */}
      <div className="px-8 py-20">
        <div className="container">
          <ScrollReveal>
            <div className="space-y-0 divide-y divide-border">
              {positions.map((pos, index) => (
                <div
                  key={pos.number}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 hover:bg-muted/20 -mx-8 px-8 transition-colors duration-300"
                >
                  {/* Number */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:pt-1">
                    <span className="text-4xl font-bold font-serif linear-text opacity-25 group-hover:opacity-60 transition-opacity duration-300 leading-none">
                      {pos.number}
                    </span>
                  </div>

                  {/* Icon + Title + Tag */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                        {pos.icon}
                      </div>
                      <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest border border-primary/20 rounded-full px-3 py-1">
                        {pos.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-georgia leading-snug mb-3">
                      {pos.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/70  leading-relaxed">
                      "{pos.summary}"
                    </p>
                  </div>

                  {/* Detail */}
                  <div className="lg:col-span-7 lg:pl-6 lg:border-l border-border">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {pos.detail}
                    </p>
                    <div className="mt-6 h-0.5 w-0 bg-linear-to-r from-primary to-primary/10 group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AdvocacyContent;
