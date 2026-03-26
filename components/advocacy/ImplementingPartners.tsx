import ScrollReveal from "../ScrollReveal";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";



const ImplementingPartners = () => {
  return (
    <section id="partners" className="relative overflow-hidden bg-background px-8 py-24 mb-20 md:mb-32">
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
      {/* <span className="absolute text-center bottom-0 text-[16vw] font-serif font-bold text-foreground/5 leading-none select-none pointer-events-none uppercase">
        Partner
      </span> */}

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
              in implementing, scaling, and securing Africa's agricultural
              systems.
            </p>

            <div className="mx-auto">
              <Button variant="outline" size="lg" className="mt-8 border border-primary" >
                Explore Partnership Opportunities
                <ArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="mt-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />
          </div>

          
      

          {/* Footer */}
          <p className="text-center text-muted-foreground text-sm mt-10">
            All partnerships are subject to review and alignment with the Future
            Farms Initiative mandate.{" "}
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
