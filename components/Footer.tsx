
import { Leaf, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="bg-primary text-background/80 px-8 py-12">
    <div >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl font-bold text-background">Future Farms Initiative</span>
          </div>
          <p className="text-background/60 max-w-sm leading-relaxed">
            Redesigning Africa's agricultural systems for a future-ready tomorrow through standardized transformation.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-background mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Advocacy", "Partners", "News"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="text-background/60 hover:text-primary transition-colors text-sm">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-background mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-background/60">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@futurefarms.org</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nairobi, Kenya</span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
        © {currentYear} Future Farms Initiative. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
