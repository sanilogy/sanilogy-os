import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, MessageCircle, FileText } from "lucide-react";

const WHATSAPP = "https://wa.me/918085952159?text=Hello%20Yashwant%2C%20I%20would%20like%20to%20know%20more%20about%20Sanilogy.";
const MAILTO = "mailto:yashwant.sanilogy@gmail.com?subject=Sanilogy%20Investment%20Inquiry&body=Hello%20Yashwant%2C%0A%0AI%20would%20like%20to%20connect%20regarding%20Sanilogy.%0A%0ARegards%2C";
import logo from "@/assets/sanilogy-logo.png";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Sanilogy" },
      { name: "description", content: "Contact Sanilogy in Indore for demos, partnerships, investor meetings, and government inquiries." },
      { property: "og:title", content: "Contact — Sanilogy" },
      { property: "og:description", content: "Email yashwant.sanilogy@gmail.com or call +91 80859 52159." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10 bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <img src={logo} alt="Sanilogy" className="h-10 w-auto mx-auto mb-6" />
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            <span className="w-6 h-px bg-accent" /> Contact
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
            Let's build <span className="text-accent">cleaner cities</span> together.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Demos, partnerships, investor meetings, government and PPP inquiries — start the conversation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <a href={MAILTO} className="bg-white rounded-xl p-6 border border-border shadow-card hover:shadow-elegant transition">
            <Mail size={22} className="text-accent mb-3"/>
            <div className="text-sm text-muted-foreground font-medium">Email Founder</div>
            <div className="mt-1 text-primary font-semibold break-all text-sm">yashwant.sanilogy@gmail.com</div>
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white rounded-xl p-6 shadow-card hover:opacity-95 transition">
            <MessageCircle size={22} className="mb-3"/>
            <div className="text-sm font-medium opacity-90">WhatsApp Now</div>
            <div className="mt-1 font-semibold">Chat on WhatsApp</div>
          </a>
          <a href="tel:+918085952159" className="bg-white rounded-xl p-6 border border-border shadow-card hover:shadow-elegant transition">
            <Phone size={22} className="text-accent mb-3"/>
            <div className="text-sm text-muted-foreground font-medium">Call Now</div>
            <div className="mt-1 text-primary font-semibold">+91 80859 52159</div>
          </a>
          <div className="bg-white rounded-xl p-6 border border-border shadow-card">
            <MapPin size={22} className="text-accent mb-3"/>
            <div className="text-sm text-muted-foreground font-medium">Location</div>
            <div className="mt-1 text-primary font-semibold">Indore, Madhya Pradesh, India</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a href="/sanilogy-pitch-deck.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-95 transition">
            <FileText size={16}/> View Complete Pitch Deck
          </a>
          <a href="/sanilogy-pitch-deck.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition">
            <FileText size={16}/> Download Pitch Deck
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-navy text-white rounded-2xl p-8 shadow-elegant">
            <Calendar size={28} className="text-accent mb-4"/>
            <h3 className="text-2xl font-display font-bold">Schedule an Investor Meeting</h3>
            <p className="mt-3 text-white/75 leading-relaxed">
              Speak directly with our founder. Walk through the pitch deck, market opportunity,
              business model and product roadmap.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Mail size={16} className="text-accent"/> yashwant.sanilogy@gmail.com</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-accent"/> +91 80859 52159</div>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-accent"/> Indore, Madhya Pradesh, India</div>
            </div>
            <a
              href="/sanilogy-pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-7 items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-95 transition"
            >
              View Pitch Deck
            </a>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-white rounded-2xl p-8 border border-border shadow-elegant space-y-4"
          >
            <h3 className="text-xl font-display font-bold text-primary mb-1">Send us a message</h3>
            <p className="text-sm text-muted-foreground mb-3">We typically respond within 1–2 business days.</p>
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="First name" className="bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent text-foreground"/>
              <input required placeholder="Last name" className="bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent text-foreground"/>
            </div>
            <input required type="email" placeholder="Work email" className="w-full bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent text-foreground"/>
            <input placeholder="Organization / City" className="w-full bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent text-foreground"/>
            <select className="w-full bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent text-foreground">
              <option>Request a Demo</option>
              <option>Investor Inquiry</option>
              <option>Government / Municipal</option>
              <option>PPP Partnership</option>
              <option>Franchise / Operator</option>
            </select>
            <textarea rows={4} placeholder="Tell us about your project" className="w-full bg-white border border-border rounded-md px-4 py-3 focus:outline-none focus:border-accent text-foreground"/>
            <button type="submit" className="w-full px-6 py-3.5 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition">
              {sent ? "Thank you — we'll be in touch." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
