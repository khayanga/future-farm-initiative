import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

type Partner = {
  name: string;
  logo: string;
  href?: string;
  country?: string;
};

const partners: Partner[] = [
  {
    name: "WFF Kenya",
    logo: "/kenya.png",
    href: "https://youth.world-food-forum.org/en",
    country: "Kenya",
  },
  
  {
    name: "JLA",
    logo: "/jla.png",
    href: "https://jacobsladder.africa/who-we-are/",
  },
   {
    name: "Mkulima Scrore",
    logo: "/mkulima.jpg",
    href: "https://mkulimascore360.com/",
  },
];

const PartnersSection = () => {
  return (
    <section className="px-8 py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
              Our Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Trusted{" "}
              <span className="font-serif linear-text italic">Partners</span>
            </h2>
            <p className="text-muted-foreground text-base mt-4 max-w-lg mx-auto">
              Working alongside leading organisations who share our commitment
              to transforming agricultural systems across Africa.
            </p>

            {/* Decorative rule */}
            <div className="mt-8 h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          {/* Partners Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="group flex flex-col items-center gap-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Logo container */}
                <div className="relative flex items-center justify-center w-44 h-24 rounded-md border border-border bg-muted/40 px-6 py-4 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-muted/80 group-hover:shadow-md">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-4  transition-all duration-300 group-hover:grayscale-20 group-hover:opacity-100"
                  />
                </div>

                {/* Name + country tag */}
                <div className="text-center">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {partner.name}
                  </p>
                  {partner.country && (
                    <span className="text-xs text-muted-foreground">
                      {partner.country}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            Interested in partnering with us?{" "}
            <a
              href="/contact"
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Get in touch
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;