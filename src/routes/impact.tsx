import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  Building2,
  Droplets,
  Factory,
  HeartHandshake,
  Leaf,
  Recycle,
  ShieldCheck,
} from "lucide-react";
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

  const sdgs = [
    {
      number: "3",
      title: "Good Health and Well-being",
      icon: Activity,
      connection:
        "Improves public hygiene, reduces exposure to unsafe sanitation, and supports healthier urban environments.",
    },
    {
      number: "6",
      title: "Clean Water and Sanitation",
      icon: Droplets,
      connection:
        "Directly supports access to cleaner, smarter, and better-managed public sanitation infrastructure.",
    },
    {
      number: "9",
      title: "Industry, Innovation and Infrastructure",
      icon: Factory,
      connection:
        "Uses AI, IoT, automation, and modular infrastructure to modernize public sanitation systems.",
    },
    {
      number: "11",
      title: "Sustainable Cities and Communities",
      icon: Building2,
      connection:
        "Supports cleaner, safer, more inclusive, and better-managed urban public infrastructure.",
    },
    {
      number: "12",
      title: "Responsible Consumption and Production",
      icon: Recycle,
      connection:
        "Promotes optimized use of water, consumables, maintenance resources, and operational efficiency.",
    },
    {
      number: "13",
      title: "Climate Action",
      icon: Leaf,
      connection:
        "Supports resource efficiency and data-driven infrastructure management that can reduce waste and improve sustainability.",
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

      <section className="mt-20 text-left">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" /> SDG Alignment
          </div>
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-primary md:text-5xl">
            Aligned with Global Sustainable Development Goals
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sanilogy contributes to cleaner cities, safer public spaces, better hygiene access, and
            more accountable sanitation infrastructure.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sdgs.map(({ number, title, icon: Icon, connection }) => (
            <div
              key={number}
              className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-card"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-navy text-white">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                  SDG {number}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{connection}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
