import ScrollReveal from "../ScrollReveal";
import { Building2, TrendingUp, Cpu } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  tag: string;
  title: string;
  intro: string;
  body: string;
  number: string;
};

const services: Service[] = [
  {
    number: "01",
    tag: "Pillar One",
    icon: <Building2 className="w-6 h-6" />,
    title: "Institutional Support",
    intro:
      "We help farmers formalize and professionalize their enterprises.",
    body: "This includes strengthening governance structures, improving record-keeping and documentation, aligning with regulatory and food safety standards, and establishing clear operational systems. Our goal is to position farms as structured, credible, and sustainable businesses capable of long-term growth and market participation.",
  },
  {
    number: "02",
    tag: "Pillar Two",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Investor Readiness Support",
    intro:
      "We prepare farms to attract and responsibly utilize capital.",
    body: "This includes financial structuring, cost tracking, profitability analysis, growth planning, and development of clear investment proposals. We guide farmers in understanding financing options — from informal capital to institutional funding — and ensure they are equipped to engage confidently with financiers, partners, and investors.",
  },
  {
    number: "03",
    tag: "Pillar Three",
    icon: <Cpu className="w-6 h-6" />,
    title: "Technology Readiness Support",
    intro:
      "We enable farmers to adopt and integrate modern agricultural technologies effectively.",
    body: "This includes assessing digital capacity, introducing centralized farm management systems, strengthening data use, and preparing farms for tech-enabled monitoring and compliance. We ensure that technology adoption is practical, sustainable, and aligned with productivity, efficiency, and market access goals.",
  },
];

const ServicesContent = () => {
  return (
    <section className="px-8 py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          {/* Section intro */}
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
              Farmer Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-5">
              Three Core{" "}
              <span className="font-serif linear-text italic">Pillars</span>{" "}
              of Transformation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We support farmers transitioning from traditional operations to
              structured, scalable, and future-ready farming systems through
              three core pillars.
            </p>
          </div>

          {/* Decorative rule */}
          <div className="mb-16 h-px bg-linear-to-r from-primary/40 via-primary/10 to-transparent" />

          {/* Services — alternating layout */}
          <div className="space-y-0 divide-y divide-border">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start transition-colors duration-300 hover:bg-muted/20 -mx-8 px-8 rounded-sm ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Number + tag */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:pt-1">
                  <span className="text-5xl font-bold font-serif linear-text opacity-40 group-hover:opacity-70 transition-opacity duration-300 leading-none">
                    {service.number}
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest hidden lg:block">
                    {service.tag}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="lg:col-span-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-serif leading-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base font-medium text-foreground/80 leading-relaxed">
                    {service.intro}
                  </p>
                </div>

                {/* Body text */}
                <div className="lg:col-span-6 lg:pt-1">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.body}
                  </p>

                  {/* Accent line */}
                  <div className="mt-8 h-0.5 w-0 bg-linear-to-r from-primary to-primary/20 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesContent;