import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <section className="px-8 py-12">
      <div className="container">
        <ScrollReveal>
          <div className="block overflow-hidden">
            <div className="relative mb-8 lg:mb-4 lg:ml-12 lg:float-right w-full lg:w-1/2 max-w-125">
              <Image
                src="/farmer-tech.jpg"
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
                  Africa must produce at least 30% more food to feed people by 2050
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
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Content;
