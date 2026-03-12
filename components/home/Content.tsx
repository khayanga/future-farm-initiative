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
                  People to feed by 2050 in Africa
                </p>
              </div>
            </div>

            {/* 3. The Text Content */}
            <div className="text-primary">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block">
                The Paradox
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
                Past, Present & Future of Africa’s Agricultural Systems
              </h2>
              
             
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Africa holds nearly 65% of the world’s remaining arable land and
                vast agricultural potential, yet it remains the most
                food-insecure continent. This paradox is rooted in history.
                Colonial agricultural systems were designed around narrow export
                commodities, weakening local food systems and limiting
                diversification. Post-independence mechanization efforts lacked
                sustained institutional support, infrastructure, and systems
                integration. Over time, fragmented farm structures,
                underinvestment in technology and energy, and weak market
                coordination entrenched low productivity and inefficiency.
                Today, these structural weaknesses are compounded by rapid
                population growth, climate pressures, youth unemployment, and
                rising food demand. Many farms remain informal,
                under-capitalized, and disconnected from structured markets. The
                challenge is no longer simply increasing production, it is
                redesigning agricultural systems to be efficient, resilient, and
                market-aligned. 
                <br /><br />
                This reality led to the creation of the Future
                Farms Initiative and its standardization agenda. The Initiative
                focuses on transitioning farms into technology-driven,
                energy-efficient, investment-ready, food-safe, market-forward
                enterprises that preserve indigenous knowledge while improving
                profitability and operational efficiency. The past revealed the
                gaps. The present highlights the urgency. The future requires
                structured transformation equipping farmers to lead Africa’s
                sustainable development.
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