import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import ThemeBanner from "./ThemeBannner";

const Content = () => {

  const currentYear = new Date().getFullYear();
  return (
    <section className="px-8 py-12">
      <div className="container">
        <ScrollReveal>
          <div className="block overflow-hidden">
            <div className="relative mb-8 lg:mb-4 lg:ml-12 lg:float-right w-full lg:w-1/2 max-w-125">
              <Image
                src="/nereah.jpeg"
                width={500}
                height={500}
                alt="African farmer using modern technology in greenhouse"
                className="rounded-md w-full object-cover aspect-square shadow-xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl rounded-sm p-6 max-w-48 sm:max-w-60">
                <p className="text-3xl font-bold font-serif gradient-text">
                  2.5B
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Africa must produce at least 30% more food by 2050 to feed its population.
                </p>
              </div>
            </div>

            {/* 3. The Text Content */}
            <div className="text-primary">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block">
                The great transition
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
                The Future of Africa’s Agricultural Systems
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Africa holds vast agricultural potential, yet food insecurity
                persists due to historically fragmented systems,
                underinvestment, and weak market coordination. Today, rising
                demand, climate pressures, and informality make it clear that
                the challenge is not just production, but building efficient,
                resilient, and market-aligned agricultural systems. The Future
                Farms Initiative was created to drive this shift - transitioning
                farms into technology-driven, energy-efficient,
                investment-ready, and market-oriented enterprises that improve
                productivity, profitability, and long-term sustainability.
              </p>

              <Button
                variant="outline"
                className="rounded-md border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/work">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <ThemeBanner/>

          {/* Intro strip */}
          <div className="bg-teal-950 px-8 py-12 mt-14 md:mt-16 lg:mt-28 rounded-md mx-2">
            <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Left */}
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em] block mb-3">
                  Active in {currentYear}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Two open calls.{" "}
                  <span className="text-primary">
                    One mission.
                  </span>
                </h2>
              </div>

              {/* Right */}
              <div className="flex flex-col items-start md:items-end gap-4 max-w-sm">
                <p className="text-white/70 text-md leading-relaxed md:text-right">
                  In {currentYear}, we are centering women their voices, their farms, their
                  futures. Both calls are open now. Don't miss your chance to
                  participate.
                </p>

                {/* CTA Button */}
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/40 rounded-md px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  View Updates
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Content;
