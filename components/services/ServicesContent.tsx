import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { Building2, TrendingUp, Cpu, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
    body: "We support agribusinesses in building strong, market-ready brands and structured business systems. Our work focuses on developing clear market strategies, brand positioning, and brand identity frameworks."
  },
  {
    number: "02",
    tag: "Pillar Two",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Investor Readiness Support",
    intro:
      "We prepare farms to attract and responsibly utilize capital.",
    body: "We support agribusinesses in becoming investment-ready and financially structured. This includes setting up clear financial systems, tracking costs, analyzing profitability, and planning for growth, as well as developing strong investment proposals. We also guide businesses in understanding different financing options and prepare them to confidently engage with investors, partners, and funders."
  ,
  },
  {
    number: "03",
    tag: "Pillar Three",
    icon: <Cpu className="w-6 h-6" />,
    title: "Technology Readiness Support",
    intro:
      "We enable farmers to adopt and integrate modern agricultural technologies effectively.",
    body: "We support agribusinesses in adopting practical, tech-enabled systems. This includes assessing digital capacity and introducing tools and knowledge that strengthen data use, and preparing for technology-driven monitoring and compliance. The goal is to ensure technology adoption improves productivity, efficiency, and market access."


  },
];

const ServicesContent = () => {
  return (
    <section className="px-8 py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          {/* Section intro */}
          <div className="max-w-7xl mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
              Farmer Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-5">
              Three Core{" "}
              <span className="font-serif linear-text italic">Pillars</span>{" "}
              of Transformation
            </h2>
            <div className="flex flex-row  justify-between  ">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              We support farmers transitioning from traditional operations to
              structured, scalable, and future-ready farming systems through
              three core pillars.
            </p>
            <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 px-8 rounded-md transition-all duration-300">
              <Link href="https://calendar.app.google/HqAjtdcVn7FPAyg68" target="_blank" className="inline-flex justify-items-center">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            </div>
            
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