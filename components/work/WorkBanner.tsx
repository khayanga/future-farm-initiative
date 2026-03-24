import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WorkBanner = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl mt-3">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/farm3.jpg"
          alt="Aerial view of African farmland with modern agriculture technology"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Facilitating the transition to {" "}
            <span className="text-primary">future</span> ready farms
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
             From governance to technology we equip farms with the systems,
            tools, and confidence to compete, grow, and lead in modern markets.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="rounded-md px-8 py-6 text-base text-white 
              bg-linear-to-r from-primary via-primary to-emerald-600
              hover:from-primary hover:via-primary hover:to-emerald-500
              transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/service">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="rounded-md px-8 py-6 text-base border-white/60 text-white bg-white/20"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkBanner;
