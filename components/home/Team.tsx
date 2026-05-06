
import Image from "next/image";
import { Button } from "../ui/button";

const countries = [
  { name: "Kenya", flag: "/kenyan.png" },
  { name: "Uganda", flag: "/uganda.png" },
  { name: "Tanzania", flag: "/tanzania.png" },
  { name: "Rwanda", flag: "/rwanda.png" },
  { name: "DRC", flag: "/drc.png" },
];

const TeamSection = () => {
  return (
    <section className="py-20  overflow-x-hidden">
      <div className="container px-6 lg:px-12 mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
            The People Behind the Initiative
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl">
              Meet the <span className="linear-text">Team</span>
            </h2>

            <p className="text-muted-foreground text-base max-w-md lg:text-right">
              We believe Africa’s farms must be designed for the future resilient,
              efficient, and productive. Our role is to enable the creation of
              farm systems that integrate technology, sustainability, and local
              context to help farmers and agribusinesses thrive in a changing climate.
            </p>
          </div>

          <div className="mt-8 h-px bg-linear-to-r from-primary/40 via-primary/10 to-transparent" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Farmers Card */}
            <div className="relative p-6 rounded-2xl bg-card shadow-sm border border-border overflow-hidden">
              <div className="hidden sm:block absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <h3 className="text-4xl font-bold text-primary mb-2">300+</h3>
                  <p className="text-lg font-semibold text-foreground/70">
                    Farmers Onboarded
                  </p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary text-primary"
                >
                  <a
                    href="https://forms.gle/H2kVgdNHtng5DHUR7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Farmers Community
                  </a>
                </Button>
              </div>
            </div>

            {/* Countries Card */}
            <div className="p-6 rounded-2xl bg-teal-900 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white mb-4">
                Across the EAC Community
              </h3>

              <div className="flex flex-wrap gap-3">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full border border-white/10"
                  >
                    <div className="relative w-5 h-5 rounded-full overflow-hidden">
                      <Image
                        src={country.flag}
                        alt={country.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <span className="text-sm text-white">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            {/* <div className="hidden sm:block absolute -inset-6 bg-primary/10 blur-3xl rounded-2xl pointer-events-none" /> */}

            <div className="relative w-full h-100 md:h-150 lg:h-full min-h-100 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/team.jpg"
                alt="Future Farms Initiative Team"
                fill
                className="object-cover object-[center_top]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">
                  Future Farms Initiative Team
                </p>
                <p className="text-xs text-white/70">
                  Building Africa’s agricultural future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
