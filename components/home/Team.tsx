import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import { Linkedin, Twitter, Mail } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

const team: TeamMember[] = [
  {
    name: "Alice Ayuma",
    role: "Founder & Executive Director",
    bio: "I champion the FFI mission to build inclusive, climate-resilient farming systems by reimagining how agriculture works for farmers, the planet and the future.",
    image: "/alice.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/alice-ayuma/", email: "aliceaannette96@gmail.com" },
  },
  {
    name: "Virgil Khayanga",
    role: "Head of Technology and Digital Transformation",
    bio: "I deliver scalable digital platforms, to optimize agricultural operations and enhance decision-making processes.",
    image: "/virgil.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/virgil-khayanga-113b18262/", email: "devkhayanga@gmail.com" },
  },
  {
    name:"Lydia Kiswii",
    role:"Head of Programs",
    bio:"I lead the delivery of transformative programs empowering farmers with regenerative practices, climate-smart innovations, and data-driven solutions that enhance resilience, productivity, and sustainability.",
    image:"/lydia.jpg",
    socials: { linkedin:"https://www.linkedin.com/in/lydhia-kiswii-msc-613b29131/", email: "lydhiakiswii@gmail.com" }
  }
];

const TeamSection = () => {
  return (
    <section className="px-12 py-20 bg-muted/30">
      <div className="container">
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

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-background rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <div className="relative w-full h-120 md:h-92 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* linear overlay on hover for socials */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links — revealed on hover */}
                  {member.socials && (
                    <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"

                          aria-label="LinkedIn"
                          className="bg-white/90 hover:bg-white text-foreground rounded-full p-2 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          aria-label="Twitter"
                          className="bg-white/90 hover:bg-white text-foreground rounded-full p-2 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          aria-label="Email"
                          className="bg-white/90 hover:bg-white text-foreground rounded-full p-2 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-3 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 bg-linear-to-r from-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </div>
        
      </div>
    </section>
  );
};

export default TeamSection;