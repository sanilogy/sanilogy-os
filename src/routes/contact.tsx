import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Sanilogy" },
      { name: "description", content: "Get in touch with Sanilogy for demos, partnerships and investor inquiries." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="relative min-h-screen pt-40 pb-32 px-6 lg:px-10 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <span className="w-8 h-px bg-primary" /> Contact
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-gradient leading-[1.02]">
            Let&apos;s build the <span className="text-gradient-red">next city</span> together.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Demos, partnerships, investor meetings, franchise inquiries — start the conversation.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3"><Mail size={18} className="text-primary"/> hello@sanilogy.com</div>
            <div className="flex items-center gap-3"><Phone size={18} className="text-primary"/> +1 (000) 000-0000</div>
            <div className="flex items-center gap-3"><MapPin size={18} className="text-primary"/> Global HQ</div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-strong rounded-3xl p-8 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="First name" className="bg-background/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"/>
            <input required placeholder="Last name" className="bg-background/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"/>
          </div>
          <input required type="email" placeholder="Work email" className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"/>
          <input placeholder="Company" className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"/>
          <select className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition">
            <option>I&apos;m interested in a Demo</option>
            <option>Investor Inquiry</option>
            <option>Franchise / Partnership</option>
            <option>Government / Municipal</option>
          </select>
          <textarea rows={4} placeholder="Tell us about your project" className="w-full bg-background/40 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"/>
          <button type="submit" className="w-full px-6 py-3.5 rounded-full bg-gradient-red text-primary-foreground font-medium glow-red hover:opacity-95 transition">
            {sent ? "Thank you — we'll be in touch." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
