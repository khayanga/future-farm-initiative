import { Leaf, Mail, MapPin, Phone, ArrowUpRight, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: "About", href: "/" },
  { label: "Our Work", href: "/work" },
  { label: "Services", href: "/service" },
  { label: "Programs", href: "/programs" },
  { label: "Advocacy", href: "/advocacy" },
  { label: "News & Updates", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const partners = ["WFF Kenya", "WFF Rwanda", "JLA"];

const socials = [
  
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/arbarne-agriculture-group/", label: "LinkedIn" },
  { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/futurefarms_africa?igsh=cDBheXd6MHY0emEz", label: "Instagram" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-teal-900 text-white">
    {/* Dot grid texture */}
    <div
      className="absolute inset-0 opacity-[0.035] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }}
    />

    {/* Radial glow top-left */}
    <div
      className="absolute top-0 left-0 w-125 h-125 opacity-[0.07] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at top left, hsl(var(--primary)) 0%, transparent 70%)",
      }}
    />

    {/* Top accent bar */}
    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-primary via-primary/40 to-transparent" />

    {/* Ghost word */}
    <span className="absolute -bottom-4 right-0 text-[15vw] text-center font-serif font-bold text-white/2 leading-none select-none pointer-events-none pr-4 uppercase">
      Future Farms
    </span>

    <div className="relative z-10 container px-8 ">

      {/* ── Top section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-12 border-b border-white/8">

        {/* Brand block */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-2">
            <div className=" flex items-center justify-center bg-white/90 rounded-full p-2">
              <Image src="/footer.png" alt="Logo" width={180} height={180} className="object-cover rounded-full" />
            </div>
           
          </div>

          <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
            Redesigning Africa's agricultural systems for a future-ready tomorrow through technology, and structured transformation.
            An initiative of the{" "}
            <a
              href="https://arbarnegroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-primary"
            >
              Arbarne agriculture group
            </a>
          </p>

          {/* Stat strip */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { stat: "2.5B", label: "People to feed by 2050" },
              { stat: "65%", label: "World's arable land" },
              { stat: "3", label: "Core pillars" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold font-serif gradient-text leading-none mb-0.5">
                  {item.stat}
                </p>
                <p className="text-[11px] text-white/60 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 uppercase tracking-widest mr-1">Follow</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">
            Navigate
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Partners */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="w-4 h-4" />, text: "futurefarms@arbarnegroup.com", href: "mailto:futurefarms@arbarnegroup.com" },
                { icon: <Phone className="w-4 h-4" />, text: "+254757721222", href: "tel:+254757721222" },
                { icon: <MapPin className="w-4 h-4" />, text: "Nairobi, Kenya ·" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className=" group flex items-center  gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-white/5 group-hover:bg-primary/20 flex items-center justify-center shrink-0 text-primary transition-colors duration-200">
                      {item.icon}
                    </span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
              Implementing Partners
            </h4>
            <div className="flex flex-wrap gap-2">
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-xs text-white/70 border border-white/10 rounded-full px-3 py-1.5 hover:border-primary/30 hover:text-white/70 transition-colors duration-200 cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-primary border border-primary/30 rounded-md px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Become a Partner
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-white/50">
        <span>© {currentYear} Future Farms Initiative. All rights reserved.</span>
        <div className="flex items-center gap-5">
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-white/60 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;