import Image from "next/image";

const stats = [
  {
    title: "300+",
    label: "Farmers Onboarded",
  },
];

const countries = [
  { name: "Kenya", flag: "/kenyan.png" },
  { name: "Uganda", flag: "/uganda.png" },
  { name: "Tanzania", flag: "/tanzania.png" },
  { name: "Rwanda", flag: "/rwanda.png" },
  { name: "DRC", flag: "/drc.png" },
];

const TeamSection = () => {
  return (
    <section className="px-6 lg:px-12 py-20 bg-muted/30 relative overflow-hidden">
      <div className="container">

        {/* Header */}
         <div className="mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
               The People Behind the Initiative
             </span>
             <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl">
                 Meet the{" "}
                 <span className=" linear-text ">Team</span>
               </h2>
               <p className="text-muted-foreground text-base max-w-md lg:text-right">
                We believe Africa’s farms must be designed for the future, resilient, efficient, and productive. Our role is to enable the creation of farm systems that integrate technology, sustainability, and local context to enable farmers and agribusinesses to thrive in a changing climate.
               </p>
             </div>
             {/* Decorative rule */}
             <div className="mt-8 h-px bg-linear-to-r from-primary/40 via-primary/10 to-transparent" />
           </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Farmers Card */}
            <div className="p-7 rounded-2xl bg-background border border-border shadow-sm hover:shadow-lg transition relative overflow-hidden">
              
              {/* subtle glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />

              <h3 className="text-4xl font-bold text-primary mb-2">
                300+
              </h3>

              <p className="text-sm font-semibold text-foreground">
                Farmers Onboarded
              </p>
            </div>

            {/* Countries Card */}
            <div className="p-7 rounded-2xl bg-teal-900  shadow-sm hover:shadow-lg transition">

              <h3 className="text-2xl font-bold text-white mb-4">
                Across the EAC Community
              </h3>

              {/* Flags */}
              <div className="flex flex-wrap gap-4">
                {countries.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-muted px-3 py-2 rounded-full border border-border hover:border-primary/40 transition"
                  >
                    <div className="relative w-5 h-5 rounded-full overflow-hidden">
                      <Image
                        src={c.flag}
                        alt={c.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Team Image */}
          <div className="relative">

            {/* Glow behind image */}
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-2xl" />

            <div className="relative w-full h-105 lg:h-130  rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/team.jpg"
                alt="Future Farms Initiative Team"
                fill
                className="object-cover "
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

              {/* caption */}
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