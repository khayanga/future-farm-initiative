"use client";

import { useState } from "react";

import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  "Farmer Program Inquiry",
  "Partnership & Collaboration",
  "Investor Relations",
  "Media & Press",
  "Call for Applications",
  "General Inquiry",
];

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Us",
    value: "info@futurefarms.org",
    href: "mailto:info@futurefarms.org",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Call Us",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Find Us",
    value: "Nairobi, Kenya · Kigali, Rwanda",
    href: "#",
  },
];

const page = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-background px-8 py-20">
      <div className="container">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* ── LEFT: Form ── */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex flex-col items-start gap-6 py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground font-serif mb-3">
                      Message received.
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                      Thank you for reaching out to the Future Farms Initiative.
                      Our team will review your message and get back to you
                      within 2–3 business days.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-primary font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5">
                      Your Details
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* First Name */}
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground ${focused === "fname" ? "top-2 text-[10px] text-primary font-semibold uppercase tracking-widest" : "top-1/2 -translate-y-1/2 text-sm"}`}>
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          onFocus={() => setFocused("fname")}
                          onBlur={(e) => !e.target.value && setFocused(null)}
                          className="w-full pt-6 pb-3 px-4 bg-muted/40 border border-border rounded-md text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground ${focused === "lname" ? "top-2 text-[10px] text-primary font-semibold uppercase tracking-widest" : "top-1/2 -translate-y-1/2 text-sm"}`}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          onFocus={() => setFocused("lname")}
                          onBlur={(e) => !e.target.value && setFocused(null)}
                          className="w-full pt-6 pb-3 px-4 bg-muted/40 border border-border rounded-md text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                        />
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground ${focused === "email" ? "top-2 text-[10px] text-primary font-semibold uppercase tracking-widest" : "top-1/2 -translate-y-1/2 text-sm"}`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          onFocus={() => setFocused("email")}
                          onBlur={(e) => !e.target.value && setFocused(null)}
                          className="w-full pt-6 pb-3 px-4 bg-muted/40 border border-border rounded-md text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                        />
                      </div>

                      {/* Organisation */}
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground ${focused === "org" ? "top-2 text-[10px] text-primary font-semibold uppercase tracking-widest" : "top-1/2 -translate-y-1/2 text-sm"}`}>
                          Organisation (optional)
                        </label>
                        <input
                          type="text"
                          onFocus={() => setFocused("org")}
                          onBlur={() => setFocused(null)}
                          className="w-full pt-6 pb-3 px-4 bg-muted/40 border border-border rounded-md text-sm text-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                      Reason for Contact
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {reasons.map((reason) => (
                        <button
                          type="button"
                          key={reason}
                          onClick={() => setSelectedReason(reason)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            selectedReason === reason
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground bg-muted/30"
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                      Your Message
                    </p>
                    <div className="relative">
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your farm, your project, or how we can help..."
                        onFocus={() => setFocused("msg")}
                        onBlur={() => setFocused(null)}
                        className={`w-full p-4 bg-muted/40 border rounded-md text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-200 resize-none ${focused === "msg" ? "border-primary" : "border-border"}`}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:opacity-90 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className="lg:col-span-5 flex flex-col gap-8">

              {/* Contact details card */}
              <div className="rounded-md bg-foreground border border-white/5 p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-primary/60 via-primary/20 to-transparent" />

                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6 relative z-10">
                  Direct Contact
                </p>

                <div className="space-y-5 relative z-10">
                  {contactDetails.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary/20 text-primary flex items-center justify-center shrink-0 transition-colors duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-white leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Offices */}
              <div className="rounded-md border border-border p-8 bg-muted/20">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
                  Our Presence
                </p>
                <div className="space-y-6">
                  {[
                    { country: "Kenya", city: "Nairobi", flag: "🇰🇪", note: "East Africa Hub" },
                    { country: "Rwanda", city: "Kigali", flag: "🇷🇼", note: "Partner Office" },
                  ].map((office) => (
                    <div key={office.country} className="flex items-start gap-4">
                      <span className="text-2xl leading-none mt-0.5">{office.flag}</span>
                      <div>
                        <p className="font-bold text-foreground font-serif">{office.city}, {office.country}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">{office.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div className="flex items-start gap-3 px-5 py-4 rounded-md bg-primary/5 border border-primary/15">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1.5 shrink-0" />
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-foreground">We typically respond within 2–3 business days.</span>{" "}
                  For urgent program inquiries, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default page;