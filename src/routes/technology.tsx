import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";

function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10 bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">
          <span className="w-6 h-px bg-accent" /> {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
          {title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-9 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition">
            Request a Demo
          </Link>
          <a
            href="/sanilogy-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition"
          >
            <FileText size={18}/> View Pitch Deck
          </a>
        </div>
        {children}
      </div>
    </main>
  );
}

export { PageShell };

export const Route = createFileRoute("/technology")({
  component: () => (
    <PageShell
      eyebrow="Solutions"
      title={<>The intelligence layer for <span className="text-accent">urban sanitation.</span></>}
      subtitle="Smart POD toilets, precast infrastructure, and an AI + IoT platform engineered for city-scale public sanitation."
    >
      <div className="mt-14 grid md:grid-cols-3 gap-5 text-left">
        {[
          { t: "Auto Clean POD Toilet", d: "Automatic entry, bowl, seat & floor cleaning with real-time monitoring." },
          { t: "Precast Infrastructure", d: "Unibody, vandal-proof, plug-and-play modular toilets for rural & urban use." },
          { t: "AI + IoT Platform", d: "SaaS for monitoring, ticketing, inventory, audit, and staff management." },
        ].map((c) => (
          <div key={c.t} className="bg-white rounded-xl p-6 border border-border shadow-card">
            <h3 className="font-display font-bold text-primary text-lg">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </PageShell>
  ),
  head: () => ({
    meta: [
      { title: "Solutions — Sanilogy" },
      { name: "description", content: "Smart POD toilets, precast infrastructure, and AI + IoT facility management platform from Sanilogy." },
    ],
  }),
});
