"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "About Us", href: "/" },
  { name: "Our Work", href: "/work" },
  { name: "Our Advocacy", href: "/advocacy" },
  { name: "Services", href: "/service" },
  {name:"Our Programs", href:"/programs"},
  { name: "News & Updates", href: "/news" },
  { name: "Contact Us", href: "/contact" }, 
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="https://www.linkedin.com/company/arbarne-agriculture-group/"  target="_blank" rel="noopener noreferrer">
          <Image src="/logo2.png" alt="Future Farms Logo" width={250} height={250} className="inline-block mr-2" />
           
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          
        </div>

        
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-background/95 border-b border-border px-4 pb-6 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;