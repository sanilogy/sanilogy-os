import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Leaf, ShieldCheck, Droplets } from "lucide-react";
import { PageShell } from "./solutions";

export const Route = createFileRoute("/impact")({
  component: ImpactPage,
  head: () => ({
    meta: [
      { title: "Impact - Sanilogy" },
      {
        name: "description",
        content:
          "Sanilogy's public impact across citizen dignity, water optimization, sustainable infrastructure, and accountable public health.",
      },
    ],
  }),
});

function ImpactPage() {
  const impactAreas = [
    {
      icon: HeartHandshake,
      title: "Citizen Safety & Dignity",
      description: "Lit, monitored, and accountable facilities designed for daily public use.",
    },
    {
      icon: Droplets,
      title: "Water Optimization",
      description:
        "Operational systems built to reduce avoidable water use across public facilities.",
    },
    {
      icon: Leaf,
      title: "Sustainable Infrastructure",
      description:
        "Low-maintenance, durable infrastructure aligned with long-term urban operations.",
    },
    {
      icon: ShieldCheck,
      title: "Public Health",
      description:
        "Continuous sanitization, feedback loops, and cleanliness monitoring for higher trust.",
    },
  ];

  return (
    <PageShell
      eyebrow="ESG & Impact"
      title={
        <>
          Infrastructure aligned with <span className="text-accent">public good.</span>
        </>
      }
      subtitle="Built around Swachh Bharat Mission, Smart City programs, and global ESG reporting standards: cleaner cities, safer citizens, and accountable operations."
    >
      <div className="mt-12 grid gap-5 text-left md:grid-cols-2 lg:grid-cols-4">
        {impactAreas.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-border bg-white p-6 shadow-card">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-secondary">
              <Icon size={20} className="text-accent" />
            </div>
            <div className="font-display text-lg font-bold text-primary">{title}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
