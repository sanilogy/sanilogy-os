import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./technology";

export const Route = createFileRoute("/franchise")({
  component: () => (
    <PageShell
      eyebrow="ESG & Impact"
      title={<>Infrastructure aligned with <span className="text-accent">public good.</span></>}
      subtitle="Built around Swachh Bharat Mission, Smart City programs, and global ESG reporting standards — cleaner cities, safer citizens, accountable operations."
    >
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {[
          { t: "Citizen Safety & Dignity", d: "Lit, monitored, accountable facilities for all." },
          { t: "Water Optimization", d: "Up to 60% reduction in water consumption." },
          { t: "Sustainable Infrastructure", d: "Low-energy operation and recyclable modules." },
          { t: "Public Health", d: "Continuous sanitization and cleanliness scoring." },
        ].map((c) => (
          <div key={c.t} className="bg-white rounded-xl p-6 border border-border shadow-card">
            <div className="text-lg font-display font-bold text-primary">{c.t}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </PageShell>
  ),
  head: () => ({
    meta: [
      { title: "ESG & Impact — Sanilogy" },
      { name: "description", content: "Sanilogy's ESG impact: water optimization, citizen safety, public health, and sustainable infrastructure." },
    ],
  }),
});
