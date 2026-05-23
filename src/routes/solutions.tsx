import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  ChevronDown,
  Factory,
  FileText,
  ShieldCheck,
} from "lucide-react";
import autoCleanPodFull from "@/assets/technology/auto-clean-pod-full.png";
import precastConcept from "@/assets/precast-concept.png";
import platformDashboard from "@/assets/platform-dashboard.png";
import { PITCH_DECK_URL } from "@/lib/site";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <main className="relative overflow-hidden bg-gradient-hero px-6 pb-12 pt-28 lg:px-10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-45" />
      <div className="relative mx-auto max-w-6xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-6 bg-accent" /> {eyebrow}
        </div>
        <h1 className="mx-auto max-w-5xl font-display text-4xl font-bold leading-[1.05] text-primary md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
        {children}
      </div>
    </main>
  );
}

type SolutionCard = {
  id: string;
  icon: typeof Building2;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  detailGroups?: { title: string; items: string[] }[];
};

const solutions: SolutionCard[] = [
  {
    id: "auto-clean-pod",
    icon: Building2,
    title: "Auto Clean POD Toilet",
    description:
      "A deep-tech, compact sanitation unit designed for premium public hygiene, high-footfall locations, and automated operations.",
    image: autoCleanPodFull,
    imageAlt: "Auto Clean POD Toilet full-width concept model with key features",
    features: [
      "Automatic entry system",
      "User feedback system",
      "Automatic floor cleaning system",
      "Toilet seat cleaning system",
      "Toilet bowl cleaning system",
      "Real-time monitoring system",
      "Modular infrastructure",
      "Low-cost design",
      "Usage-triggered automated cleaning",
      "UV sanitization",
      "Touchless access and payment",
      "Anti-vandal engineering",
      "24-30 sq ft footprint",
      "Plug-and-play deployment",
      "Predictive maintenance alerts",
    ],
    detailGroups: [
      {
        title: "AI + IoT Layer",
        items: [
          "Usage-based automated cleaning",
          "Smart hygiene monitoring",
          "Real-time performance tracking",
          "Predictive maintenance alerts",
        ],
      },
      {
        title: "Automation Layer",
        items: ["Auto seat and bowl cleaning", "UV sanitization", "Touchless access and payment"],
      },
      {
        title: "Urban Design Layer",
        items: [
          "24-30 sq ft footprint",
          "Anti-vandal engineering",
          "Modular plug-and-play deployment",
        ],
      },
    ],
  },
  {
    id: "precast",
    icon: Factory,
    title: "Precast Toilet Infrastructure",
    description:
      "A durable, low-cost, plug-and-play public toilet infrastructure concept designed for rural, semi-urban, and public facility use.",
    image: precastConcept,
    imageAlt: "Precast Toilet Infrastructure concept from the Sanilogy pitch deck",
    features: [
      "Unibody infrastructure design",
      "Vandal-proof design",
      "Plug-and-play toilet",
      "Low water consumption",
      "Minimum cleaning required",
      "Low-cost passive design",
      "Rural and semi-urban suitability",
      "Tapered side walls to prevent rainwater entry",
      "Tapered front wall to block outside visibility",
      "Open ventilation slits for cross ventilation",
      "Minimalist gender signage",
      "Ring-form door boundary to direct rainwater",
      "Roof-mounted concealed water tank",
      "Round and seamless edges for safety and easy maintenance",
      "Cast concrete unibody with limestone or epoxy resin finish",
      "Partition wall design for easy demoulding",
    ],
    detailGroups: [
      {
        title: "Built for Public Facilities",
        items: [
          "Durable single-body construction",
          "Low-maintenance surfaces",
          "Simple gender navigation",
        ],
      },
      {
        title: "Rural and Semi-Urban Fit",
        items: ["Passive ventilation", "Lower water use", "Fast plug-and-play deployment"],
      },
      {
        title: "Material and Safety",
        items: [
          "Round seamless edges",
          "Roof-mounted concealed water tank",
          "Concrete unibody with durable finish",
        ],
      },
    ],
  },
  {
    id: "platform",
    icon: Bot,
    title: "AI + IoT Facility Management Platform",
    description:
      "A SaaS and IoT platform for real-time monitoring, accountability, maintenance, staff tracking, and quality management of public toilets and public facilities.",
    image: platformDashboard,
    imageAlt: "AI and IoT facility management dashboard from the Sanilogy pitch deck",
    features: [
      "Automatic entry system",
      "User feedback system",
      "Real-time monitoring",
      "Maintenance ticket and record system",
      "Inventory, asset, and staff tracking",
      "Audit and quality management",
      "Plug-and-play technology",
      "Low-cost SaaS and hardware model",
      "Toilet cleaning analytics",
      "Toilet occupancy tracking",
      "Average usage time",
      "Average cleaning time",
      "Water consumption",
      "UV cleaning status",
      "Odor level monitoring",
      "Closed washroom alerts",
      "Multi-location dashboard",
    ],
    detailGroups: [
      {
        title: "Operations Layer",
        items: ["Maintenance tickets", "Staff and asset tracking", "Multi-location accountability"],
      },
      {
        title: "Analytics Layer",
        items: ["Cleaning analytics", "Occupancy tracking", "Water, UV, odor, and closure alerts"],
      },
      {
        title: "Quality Layer",
        items: [
          "Audit and quality management",
          "Maintenance records",
          "Plug-and-play SaaS and hardware model",
        ],
      },
    ],
  },
];

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Solutions - Sanilogy" },
      {
        name: "description",
        content:
          "Auto Clean POD Toilet, Precast Toilet Infrastructure, and AI + IoT Facility Management Platform for public sanitation.",
      },
      { property: "og:title", content: "Solutions - Sanilogy" },
      {
        property: "og:description",
        content:
          "Three integrated layers for government-ready smart sanitation infrastructure: POD toilets, precast infrastructure, and AI + IoT SaaS.",
      },
    ],
  }),
});

function SolutionsPage() {
  const [open, setOpen] = useState("auto-clean-pod");

  return (
    <main className="bg-background">
      <PageShell
        eyebrow="Solutions"
        title={
          <>
            Public sanitation infrastructure, <span className="text-accent">made accountable.</span>
          </>
        }
        subtitle="Sanilogy brings together smart toilet hardware, precast infrastructure, and an AI + IoT operating platform for government, PPP, and investor-backed deployments."
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-md transition hover:opacity-95"
          >
            Request a Demo <ArrowRight size={17} />
          </Link>
          <a
            href={PITCH_DECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-6 py-3 font-semibold text-primary transition hover:bg-secondary"
          >
            <FileText size={18} /> View Pitch Deck
          </a>
        </div>
      </PageShell>

      <section className="px-6 pb-24 pt-8 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-4">
          {solutions.map((solution) => {
            const isOpen = open === solution.id;
            const Icon = solution.icon;

            return (
              <article
                key={solution.id}
                className="overflow-hidden rounded-xl border border-border bg-white shadow-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : solution.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-secondary/55 md:p-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-lg bg-secondary">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-bold text-primary">
                        {solution.title}
                      </h2>
                      <p className="mt-1 hidden text-sm leading-6 text-muted-foreground md:block">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={22}
                    className={`flex-shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-border p-5 md:p-8">
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-foreground md:hidden">
                        {solution.description}
                      </p>

                      <figure className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                        <img
                          src={solution.image}
                          alt={solution.imageAlt}
                          className="h-auto w-full object-contain"
                          loading="lazy"
                        />
                      </figure>

                      <ul className="sr-only">
                        {solution.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      {solution.detailGroups && (
                        <div className="grid gap-4 md:grid-cols-3">
                          {solution.detailGroups.map((group) => (
                            <div
                              key={group.title}
                              className="flex h-full flex-col rounded-lg border border-border bg-secondary p-5"
                            >
                              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                                <ShieldCheck size={16} className="flex-shrink-0 text-accent" />
                                {group.title}
                              </div>
                              <ul className="space-y-1.5 text-sm leading-6 text-muted-foreground">
                                {group.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-foreground shadow-md transition hover:opacity-95"
                        >
                          Discuss Deployment <ArrowRight size={16} />
                        </Link>
                        <Link
                          to="/why-invest"
                          className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-2.5 font-semibold text-primary transition hover:bg-secondary"
                        >
                          Why Invest
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
