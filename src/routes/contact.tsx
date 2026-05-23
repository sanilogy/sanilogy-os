import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, FileText, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  MAILTO_URL,
  PITCH_DECK_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact - Sanilogy" },
      {
        name: "description",
        content:
          "Contact Sanilogy in Indore for demos, partnerships, investor meetings, and government inquiries.",
      },
      { property: "og:title", content: "Contact - Sanilogy" },
      {
        property: "og:description",
        content: "Email yashwant.sanilogy@gmail.com or call +91 80859 52159.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="relative min-h-screen bg-gradient-hero px-6 pb-24 pt-32 lg:px-10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <img src={logo} alt="Sanilogy" className="mx-auto mb-6 h-10 w-auto" />
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" /> Contact
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-primary md:text-6xl">
            Let's build <span className="text-accent">cleaner cities</span> together.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Demos, partnerships, investor meetings, government and PPP inquiries: start the
            conversation.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={MAILTO_URL}
            className="rounded-xl border border-border bg-white p-6 shadow-card transition hover:shadow-elegant"
          >
            <Mail size={22} className="mb-3 text-accent" />
            <div className="text-sm font-medium text-muted-foreground">Email Founder</div>
            <div className="mt-1 break-all text-sm font-semibold text-primary">{CONTACT_EMAIL}</div>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#25D366] p-6 text-white shadow-card transition hover:opacity-95"
          >
            <MessageCircle size={22} className="mb-3" />
            <div className="text-sm font-medium opacity-90">WhatsApp Now</div>
            <div className="mt-1 font-semibold">Chat on WhatsApp</div>
          </a>
          <a
            href={CONTACT_PHONE_HREF}
            className="rounded-xl border border-border bg-white p-6 shadow-card transition hover:shadow-elegant"
          >
            <Phone size={22} className="mb-3 text-accent" />
            <div className="text-sm font-medium text-muted-foreground">Call Now</div>
            <div className="mt-1 font-semibold text-primary">{CONTACT_PHONE_DISPLAY}</div>
          </a>
          <div className="rounded-xl border border-border bg-white p-6 shadow-card">
            <MapPin size={22} className="mb-3 text-accent" />
            <div className="text-sm font-medium text-muted-foreground">Location</div>
            <div className="mt-1 font-semibold text-primary">{CONTACT_LOCATION}</div>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <a
            href={PITCH_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground transition hover:opacity-95"
          >
            <FileText size={16} /> View Complete Pitch Deck
          </a>
          <a
            href={PITCH_DECK_URL}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-2.5 font-semibold text-primary transition hover:bg-secondary"
          >
            <FileText size={16} /> Download Pitch Deck
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-gradient-navy p-8 text-white shadow-elegant">
            <Calendar size={28} className="mb-4 text-accent" />
            <h3 className="font-display text-2xl font-bold text-white">
              Schedule an Investor Meeting
            </h3>
            <p className="mt-3 leading-relaxed text-white/75">
              Speak directly with our founder. Walk through the pitch deck, market opportunity,
              business model, and product roadmap.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={MAILTO_URL} className="flex items-center gap-3 hover:text-accent">
                <Mail size={16} className="text-accent" /> {CONTACT_EMAIL}
              </a>
              <a href={CONTACT_PHONE_HREF} className="flex items-center gap-3 hover:text-accent">
                <Phone size={16} className="text-accent" /> {CONTACT_PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" /> {CONTACT_LOCATION}
              </div>
            </div>
            <a
              href={PITCH_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground transition hover:opacity-95"
            >
              View Pitch Deck
            </a>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="space-y-4 rounded-2xl border border-border bg-white p-8 shadow-elegant"
          >
            <h3 className="mb-1 font-display text-xl font-bold text-primary">Send us a message</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              We typically respond within 1-2 business days.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="First name"
                className="rounded-md border border-border bg-white px-4 py-3 text-foreground focus:border-accent focus:outline-none"
              />
              <input
                required
                placeholder="Last name"
                className="rounded-md border border-border bg-white px-4 py-3 text-foreground focus:border-accent focus:outline-none"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Work email"
              className="w-full rounded-md border border-border bg-white px-4 py-3 text-foreground focus:border-accent focus:outline-none"
            />
            <input
              placeholder="Organization / City"
              className="w-full rounded-md border border-border bg-white px-4 py-3 text-foreground focus:border-accent focus:outline-none"
            />
            <select className="w-full rounded-md border border-border bg-white px-4 py-3 text-foreground focus:border-accent focus:outline-none">
              <option>Request a Demo</option>
              <option>Investor Inquiry</option>
              <option>Government / Municipal</option>
              <option>PPP Partnership</option>
              <option>Franchise / Operator</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your project"
              className="w-full rounded-md border border-border bg-white px-4 py-3 text-foreground focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-md transition hover:opacity-95"
            >
              {sent ? "Thank you - we'll be in touch." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
