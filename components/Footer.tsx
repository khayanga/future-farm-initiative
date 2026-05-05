import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Linkedin,
  Instagram,
} from "lucide-react";
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

const socials = [
  {
    icon: <Linkedin className="w-4 h-4" />,
    href: "https://www.linkedin.com/showcase/future-farms-initiative/",
    label: "LinkedIn",
  },
  {
    icon: <Instagram className="w-4 h-4" />,
    href: "https://www.instagram.com/futurefarms_africa",
    label: "Instagram",
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-teal-900 text-white">
    {/* Background effects */}
    <div
      className="absolute inset-0 opacity-[0.035] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }}
    />

    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-primary via-primary/40 to-transparent" />

    {/* Ghost text */}
    <span className="absolute -bottom-4 right-0 text-[15vw] text-center font-georgia font-bold text-white/2 leading-none select-none pointer-events-none pr-4 uppercase">
      Future Farms
    </span>

    {/* ✅ MAIN CONTAINER (MATCHES LAYOUT) */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
      {/* ── Top Section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-12 border-b border-white/10">
        {/* Brand */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="mb-4">
            <div className="bg-white/90 p-2 inline-block">
              <Image src="/footer.png" alt="Logo" width={140} height={140} />
            </div>
          </div>

          <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
            Redesigning Africa's agricultural systems for a future-ready
            tomorrow through technology and structured transformation. An
            initiative of{" "}
            <a
              href="https://arbarnegroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-primary"
            >
              Arbarne Agriculture Group
            </a>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            {[
              { stat: "2.5B", label: "People to feed by 2050" },
              { stat: "65%", label: "World's arable land" },
              { stat: "3", label: "Core pillars" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold font-serif mb-1">
                  {item.stat}
                </p>
                <p className="text-[11px] text-white/60 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <span className="text-xs text-white/60 uppercase tracking-widest">
              Follow
            </span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        {/* Nav */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
            Navigate
          </h4>

          {/* 2-column on mobile, 1 column on desktop */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 justify-items-center lg:grid-cols-1 lg:justify-items-start">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <div>
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:futurefarms@arbarnegroup.com"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  futurefarms@arbarnegroup.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254757721222"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <Phone className="w-4 h-4" />
                  +254 757 721222
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-5 py-3 rounded-md hover:bg-primary hover:text-white transition"
          >
            Become a Partner
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      
      <div className="flex flex-col items-center justify-center gap-4 py-6 text-sm text-white/50 text-center">
        <span>
          © {currentYear} Future Farms Initiative. All rights reserved.
        </span>
        <div className="flex gap-5">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
