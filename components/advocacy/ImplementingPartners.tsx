import ScrollReveal from "../ScrollReveal";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Farm Brand",
    price: "1,500",
    period: "Annually",
    description:
      "For individual farms and smallholder enterprises ready to formalize, brand, and enter structured markets under the Future Farms framework.",
    features: [
      "Farm standardization assessment",
      "Brand identity & documentation support",
      "Basic compliance & food safety onboarding",
      "Access to partner network directory",
      "Annual performance review",
    ],
    cta: "Become a Farm Brand Partner",
    highlight: false,
    badge: null,
  },
  {
    name: "Innovator",
    price: "2,500",
    period: "Annually",
    description:
      "For agribusinesses, cooperatives, and technology providers driving agricultural innovation and seeking deeper integration with the initiative's programs.",
    features: [
      "Everything in Farm Brand",
      "Technology readiness co-design sessions",
      "Co-branded program participation",
      "Priority access to investor introductions",
      "Quarterly strategy alignment calls",
      "Featured in initiative communications",
    ],
    cta: "Become an Innovator Partner",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Other",
    price: "3,000",
    period: "Annually",
    description:
      "For institutional partners, NGOs, development finance institutions, and governments seeking strategic alignment with the Future Farms standardization agenda.",
    features: [
      "Everything in Innovator",
      "Custom program co-design",
      "Policy & advocacy collaboration",
      "Named partnership in all materials",
      "Dedicated relationship manager",
      "Seat on the partner advisory forum",
    ],
    cta: "Explore Strategic Partnership",
    highlight: false,
    badge: null,
  },
];

const ImplementingPartners = () => {
  return (
    <section className="relative overflow-hidden bg-background px-8 py-24 mb-20 md:mb-32">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] text-foreground pointer-events-none"
        style={{
          backgroundImage: `radial-linear(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      {/* Watermark */}
      <span className="absolute text-center bottom-0 text-[16vw] font-serif font-bold text-foreground/5 leading-none select-none pointer-events-none uppercase">
        Partner
      </span>

      <div className="container relative z-10">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-4">
              Become an Implementing Partner
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Join the{" "}
              <span className="font-serif italic text-primary">Movement</span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              Partner with the Future Farms Initiative and play an active role
              in standardizing, scaling, and securing Africa's agricultural
              systems. Choose the tier that fits your mandate.
            </p>

            <div className="mt-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-xl"
                    : "bg-background border border-border hover:border-primary/40"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background text-primary text-xs font-bold px-3 py-1 rounded-full border border-border">
                    <Star className="w-3 h-3 fill-primary" />
                    {tier.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col gap-6 flex-1">
                  {/* Tier name */}
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                        tier.highlight
                          ? "text-primary-foreground/70"
                          : "text-primary"
                      }`}
                    >
                      {tier.period}
                    </p>

                    <h3
                      className={`text-2xl font-bold font-serif ${
                        tier.highlight
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-sm ${
                        tier.highlight
                          ? "text-primary-foreground/60"
                          : "text-muted-foreground"
                      }`}
                    >
                      KSH
                    </span>

                    <span
                      className={`text-5xl font-bold font-serif leading-none ${
                        tier.highlight
                          ? "text-primary-foreground"
                          : "linear-text"
                      }`}
                    >
                      {tier.price}
                    </span>

                    <span
                      className={`text-sm ${
                        tier.highlight
                          ? "text-primary-foreground/60"
                          : "text-muted-foreground"
                      }`}
                    >
                      / yr
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px ${
                      tier.highlight ? "bg-primary-foreground/20" : "bg-border"
                    }`}
                  />

                  {/* Description */}
                  <p
                    className={`text-md leading-relaxed ${
                      tier.highlight
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                            tier.highlight
                              ? "bg-primary-foreground/20"
                              : "bg-primary/20"
                          }`}
                        >
                          <Check
                            className={`w-2.5 h-2.5 ${
                              tier.highlight
                                ? "text-primary-foreground"
                                : "text-primary"
                            }`}
                          />
                        </div>

                        <span
                          className={`text-md leading-snug ${
                            tier.highlight
                              ? "text-primary-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`mt-4 inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-md text-sm font-semibold transition-all duration-200 ${
                      tier.highlight
                        ? "bg-background text-primary hover:bg-muted"
                        : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mt-10">
            All partnerships are subject to review and alignment with the
            Future Farms Initiative mandate.{" "}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Contact us
            </Link>{" "}
            to discuss custom arrangements.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImplementingPartners;