"use client";

import { useEffect, useState } from "react";

import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Send,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { a } from "framer-motion/client";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwqZBBJ3lkaip0dlPKRPAK-a4PLWxYaMVGZWIsOdgEV7YcjLQCwbtOgJoQPe6qHLBqM/exec";
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
    value: "futurefarms@arbarnegroup.com",
    href: "mailto:futurefarms@arbarnegroup.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Call Us",
    value: "+254757721222",
    href: "tel:+254757721222",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Find Us",
    value: "Nairobi, Kenya",
    href: "#",
  },
];

const page = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const [startTime, setStartTime] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
    website: "",
  });

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🛡️ HONEYPOT CHECK
    if (formData.website) {
      console.warn("Spam detected (honeypot)");
      return;
    }

    const timeTaken = Date.now() - startTime;
    if (timeTaken < 3000) {
      console.warn("Spam detected (too fast)");
      return;
    }

    if (formData.message.length < 10) {
      alert("Message is too short.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          reason: selectedReason || "General Inquiry",
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        message: "",
        website: "",
      });

      setSelectedReason("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-background rounded-md  px-8 py-12">
      <div className="container">
        <div className="mb-6 md:mb-12 max-w-3xl">
          <h1 className="text-primary text-3xl  ">Contact Us</h1>
          <p className="text-muted-foreground text-md leading-relaxed max-w-md md:text-left">
            Have questions or want to learn more about the Future Farms
            Initiative? Fill out the form below and we'll get back to you as
            soon as possible.
          </p>
        </div>

        <ScrollReveal>
          <div className="flex flex-col gap-8 md:flex-row lg:flex-row md:gap-16">
            {/* ── LEFT: Form ── */}
            <div className="space ">
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    className="hidden"
                  />

                  {/* Section */}
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">
                      Your Details
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            handleChange("firstName", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-md border border-border bg-muted/40 text-sm text-foreground 
          placeholder:text-muted-foreground/50 
          focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
          transition-all duration-200"
                          placeholder="John"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            handleChange("lastName", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-md border border-border bg-muted/40 text-sm text-foreground 
          focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
          transition-all duration-200"
                          placeholder="Doe"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-sm font-medium text-foreground">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-md border border-border bg-muted/40 text-sm text-foreground 
          focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
          transition-all duration-200"
                          placeholder="you@example.com"
                        />
                      </div>

                      {/* Organisation */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-sm font-medium text-foreground">
                          Organisation{" "}
                          <span className="text-muted-foreground">
                            (optional)
                          </span>
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) =>
                            handleChange("organization", e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-md border border-border bg-muted/40 text-sm text-foreground 
          focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
          transition-all duration-200"
                          placeholder="Your company / farm"
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
                          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
            ${
              selectedReason === reason
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground bg-muted/30"
            }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Your Message
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your farm, your project, or how we can help..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-border bg-muted/40 text-sm text-foreground 
      placeholder:text-muted-foreground/50 
      focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary 
      transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground 
    font-semibold text-sm rounded-md hover:opacity-90 transition-all duration-200 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div className=" flex flex-col gap-8">
              {/* Contact details card */}
              <div className="rounded-md bg-teal-900 border border-white/5 p-8 relative overflow-hidden">
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
                    {
                      country: "Kenya",
                      city: "Nairobi",
                      flag: "🇰🇪",
                      note: "East Africa Hub",
                    },
                  ].map((office) => (
                    <div
                      key={office.country}
                      className="flex items-start gap-4"
                    >
                      <span className="text-2xl leading-none mt-0.5">
                        {office.flag}
                      </span>
                      <div>
                        <p className="font-bold text-foreground font-serif">
                          {office.city}, {office.country}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">
                          {office.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div className="flex items-start gap-3 px-5 py-4 rounded-md bg-primary/5 border border-primary/15">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-1.5 shrink-0" />
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-foreground">
                    We typically respond within 2–3 business days.
                  </span>{" "}
                  For urgent program inquiries, please mention it in your
                  message.
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
