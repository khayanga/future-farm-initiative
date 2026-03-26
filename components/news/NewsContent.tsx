import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import { ArrowRight, Camera, FileText, Video, Users, Sprout, CheckCircle2, CalendarDays } from "lucide-react";

const NewsContent = () => {

    const currentYear = new Date().getFullYear();
  return (
    <section className="bg-background">
      {/* Intro strip */}
      <div className="bg-teal-900 px-8 py-12 mt-6 rounded-md mx-2">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
          <p className="text-white/70 text-md leading-relaxed max-w-sm md:text-right">
            In {currentYear}, we are centering women their voices, their farms, their
            futures. Both calls are open now. Don't miss your chance to
            participate.
          </p>
        </div>
      </div>

      <div className="px-8 py-20">
        <div className="container">
          <ScrollReveal>
            <div className="space-y-16">

              {/* ── CARD 1: Call for Stories ── */}
              <article className="group relative rounded-md border border-border overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">

                {/* Top colour bar */}
                <div className="h-1 bg-linear-to-r from-teal-400 via-primary to-primary/30" />

                <div className="grid grid-cols-1 lg:grid-cols-12">

                  {/* Left accent column */}
                  <div className="lg:col-span-3 bg-linear-to-br from-teal-500/10 via-primary/5 to-transparent p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-500 border border-teal-500/20 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                        <CalendarDays className="w-3 h-3" />
                        Call for Stories
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-serif leading-snug mb-4">
                        Women Farmers{" "}
                        <span className="linear-text italic">2026</span>
                      </h3>
                      <p className="text-muted-foreground text-md leading-relaxed">
                        We're amplifying the voices of women farmers across East
                        Africa. Share your story of resilience, innovation, or
                        leadership in farming, agro-processing, pastoralism, or
                        agritech.
                      </p>
                    </div>

                    {/* Submission types */}
                    <div className="mt-8 space-y-3">
                      <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">
                        Submit As
                      </p>
                      {[
                        { icon: <FileText className="w-4 h-4" />, label: "Written story with photos" },
                        { icon: <Camera className="w-4 h-4" />, label: "Photo essay" },
                        { icon: <Video className="w-4 h-4" />, label: "Short video (90 secs)" },
                      ].map((type) => (
                        <div key={type.label} className="flex items-center gap-3 text-sm text-foreground/70">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            {type.icon}
                          </div>
                          {type.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right main content */}
                  <div className="lg:col-span-9 p-8 lg:p-10">
                    {/* Who can apply */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-4 h-4 text-primary" />
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">
                          Who Can Apply
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Smallholder women farmers",
                          "Women agripreneurs",
                          "Women pastoralists",
                          "Women in agro-processing",
                          "Women in agritech",
                        ].map((who) => (
                          <div key={who} className="flex items-start gap-3 p-3 rounded-md bg-muted/40 border border-border group-hover:border-primary/10 transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/70 leading-snug">{who}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pull quote */}
                    <blockquote className="relative border-l-4 border-primary pl-6 py-2 my-8">
                      <p className="text-lg font-semibold text-foreground font-serif italic leading-relaxed">
                        "Your story matters help us highlight the vital role
                        of women in Africa's food systems."
                      </p>
                    </blockquote>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        Submit Your Story <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Submissions open now · {currentYear} cohort
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* ── CARD 2: Farming as a Business Applications ── */}
              <article className="group relative rounded-md border border-border overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">

                {/* Top colour bar */}
                <div className="h-1 bg-linear-to-r from-primary via-emerald-400 to-primary/20" />

                <div className="grid grid-cols-1 lg:grid-cols-12">

                  {/* Left accent column */}
                  <div className="lg:col-span-3 bg-linear-to-br from-primary/10 via-emerald-500/5 to-transparent p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                        <CalendarDays className="w-3 h-3" />
                        Call for Applications
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-serif leading-snug mb-4">
                        Farming as a Business{" "}
                        <span className="linear-text italic">2026</span>
                      </h3>
                      <p className="text-muted-foreground text-md leading-relaxed">
                        In celebration of IYWF 2026, the Future Farms Initiative
                        invites 100 women farmers to join its flagship Farming as
                        a Business program.
                      </p>
                    </div>

                    {/* Spot counter */}
                    <div className="mt-8 p-5 rounded-md bg-teal-900 border border-white/5">
                      <p className="text-4xl text-primary font-bold font-serif linear-text leading-none mb-1">
                        100
                      </p>
                      <p className="text-xs text-white/70 uppercase tracking-widest">
                        Spots Available · {currentYear} Cohort
                      </p>
                    </div>
                  </div>

                  {/* Right main content */}
                  <div className="lg:col-span-9 p-8 lg:p-10">

                    {/* Program benefits */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-5">
                        <Sprout className="w-4 h-4 text-primary" />
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">
                          What Participants Gain
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "Professionalize & scale their farms",
                          "Improve farm productivity",
                          "Access structured markets",
                          "Tech-led farm management skills",
                          "Food safety compliance training",
                          "Business development support",
                          "Mentorship from industry leaders",
                          "Exposure to investment opportunities",
                        ].map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3 p-3 rounded-md bg-muted/40 border border-border group-hover:border-primary/10 transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/70 leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Who should apply */}
                    <div className="p-5 rounded-md bg-primary/5 border border-primary/15 mb-8">
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" /> Who Should Apply
                      </p>
                      <p className="text-md text-foreground/70 leading-relaxed">
                        Smallholder women farmers, agripreneurs, and women in
                        agro-processing or agritech who are ready to transform
                        their farm into a future-ready, profitable, and
                        sustainable enterprise.
                      </p>
                    </div>

                    {/* Pull quote */}
                    <blockquote className="relative border-l-4 border-primary pl-6 py-2 mb-8">
                      <p className="text-lg font-semibold text-foreground font-serif italic leading-relaxed">
                        "Transform your farm into a future-ready, profitable,
                        and sustainable enterprise."
                      </p>
                    </blockquote>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                      >
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/programs"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-primary/40 text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        Learn About the Program
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground sm:ml-auto">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Applications open · Limited spots
                      </div>
                    </div>
                  </div>
                </div>
              </article>

            </div>

            {/* Stay updated strip */}
            <div className="mt-20 rounded-md bg-muted/40 border border-border px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                  Stay in the Loop
                </p>
                <h3 className="text-xl font-bold text-foreground font-serif">
                  Don't miss future calls and program launches.
                </h3>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Join Our Mailing List <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;