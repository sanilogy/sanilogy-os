import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, ChevronDown, Building2, Cpu, Bot, Activity, Wifi, Droplets, ShieldCheck } from "lucide-react";
import heroPod from "@/assets/hero-pod.jpg";
import cityNetwork from "@/assets/city-network.jpg";
import dashboardImg from "@/assets/dashboard.jpg";

export function PageShell({
  eyebrow, title, subtitle, children,
}: { eyebrow: string; title: React.ReactNode; subtitle: string; children?: React.ReactNode }) {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 lg:px-10 bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">
          <span className="w-6 h-px bg-accent" /> {eyebrow}
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">{title}</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-9 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition">Request a Demo</Link>
          <a href="/sanilogy-pitch-deck.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition">
            <FileText size={18}/> View Pitch Deck
          </a>
        </div>
        {children}
      </div>
    </main>
  );
}

type Tab = {
  id: string;
  icon: typeof Building2;
  title: string;
  description: string;
  image: string;
  features: string[];
  layers?: { name: string; items: string[] }[];
  ctaLabel: string;
};

const TABS: Tab[] = [
  {
    id: "pod",
    icon: Building2,
    title: "Auto Clean POD Toilet",
    description: "A deep-tech, compact sanitation unit designed for premium public hygiene, high-footfall locations, and automated operations.",
    image: heroPod,
    features: [
      "Automatic entry system", "User feedback system", "Automatic floor cleaning system",
      "Toilet seat cleaning system", "Toilet bowl cleaning system", "Real-time monitoring system",
      "Modular infrastructure", "Low-cost design", "Usage-triggered automated cleaning",
      "UV sanitization", "Touchless access and payment", "Anti-vandal engineering",
      "24–30 sq ft footprint", "Plug-and-play deployment", "Predictive maintenance alerts",
    ],
    layers: [
      { name: "AI + IoT Layer", items: ["Usage-based automated cleaning", "Smart hygiene monitoring", "Real-time performance tracking", "Predictive maintenance alerts"] },
      { name: "Automation Layer", items: ["Auto seat and bowl cleaning", "UV sanitization", "Touchless access and payment"] },
      { name: "Urban Design Layer", items: ["24–30 sq ft footprint", "Anti-vandal engineering", "Modular plug-and-play deployment"] },
    ],
    ctaLabel: "View POD Solution",
  },
  {
    id: "precast",
    icon: Cpu,
    title: "Precast Toilet Infrastructure",
    description: "A low-cost, durable, plug-and-play public toilet infrastructure concept designed for rural, semi-urban, and public facility use.",
    image: cityNetwork,
    features: [
      "Unibody infrastructure design", "Vandal-proof design", "Plug-and-play toilet",
      "Low water consumption", "Minimum cleaning required", "Low-cost design",
      "Tapered side walls to prevent rainwater entry", "Tapered front wall to block outside visibility",
      "Open ventilation slits for cross ventilation", "Minimalist gender signage",
      "Ring-form door boundary to direct rainwater", "Roof-mounted concealed water tank",
      "Round seamless edges for safety and maintenance", "Cast concrete unibody with limestone or epoxy resin finish",
      "Partition wall design for easy demoulding",
    ],
    ctaLabel: "Explore Precast Infrastructure",
  },
  {
    id: "platform",
    icon: Bot,
    title: "AI + IoT Facility Management Platform",
    description: "A SaaS and IoT platform for real-time monitoring, accountability, maintenance, staff tracking, and quality management of public toilets and facilities.",
    image: dashboardImg,
    features: [
      "Automatic entry system", "User feedback system", "Real-time monitoring system",
      "Maintenance ticket and record system", "Inventory, asset, and staff tracking system",
      "Plug-and-play technology", "Low-cost operation SaaS and hardware",
      "Audit and quality management system", "Toilet cleaning analytics",
      "Toilet occupancy tracking", "Average usage time", "Average cleaning time",
      "Water consumption", "UV cleaning status", "Odor level monitoring",
      "Closed washroom alerts", "Multi-location dashboard",
    ],
    ctaLabel: "View Platform Dashboard",
  },
];

export const Route = createFileRoute("/technology")({
  component: TechnologyPage,
  head: () => ({
    meta: [
      { title: "Technology — Sanilogy" },
      { name: "description", content: "Auto Clean POD Toilet, Precast Infrastructure, and AI + IoT Facility Management Platform — deep technical overview." },
      { property: "og:title", content: "Technology — Sanilogy" },
      { property: "og:description", content: "Three integrated layers: Smart POD, Precast Infrastructure, and AI + IoT SaaS." },
    ],
  }),
});

function TechnologyPage() {
  const [open, setOpen] = useState<string>("pod");
  return (
    <>
      <PageShell
        eyebrow="Technology"
        title={<>The intelligence layer for <span className="text-accent">urban sanitation.</span></>}
        subtitle="Smart POD toilets, precast infrastructure, and an AI + IoT platform engineered for city-scale public sanitation."
      />
      <section className="px-6 lg:px-10 pb-24 bg-background">
        <div className="max-w-6xl mx-auto space-y-4">
          {TABS.map((tab) => {
            const isOpen = open === tab.id;
            const Icon = tab.icon;
            return (
              <div key={tab.id} className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? "" : tab.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/50 transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary grid place-items-center flex-shrink-0">
                      <Icon size={22} className="text-accent"/>
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-primary text-xl">{tab.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1 hidden md:block">{tab.description}</p>
                    </div>
                  </div>
                  <ChevronDown size={22} className={`text-accent flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}/>
                </button>
                {isOpen && (
                  <div className="border-t border-border p-6 md:p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="rounded-xl overflow-hidden border border-border bg-secondary">
                        <img src={tab.image} alt={tab.title} className="w-full h-auto object-cover"/>
                        <div className="p-3 text-xs text-muted-foreground text-center italic border-t border-border">
                          Reference: {tab.title}
                        </div>
                      </div>
                      <div>
                        <p className="text-base text-foreground leading-relaxed mb-5 lg:hidden">{tab.description}</p>
                        <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Key Features</div>
                        <div className="grid sm:grid-cols-2 gap-2 mb-6">
                          {tab.features.map((f) => (
                            <div key={f} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"/>{f}
                            </div>
                          ))}
                        </div>
                        {tab.layers && (
                          <>
                            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">What Makes It Different</div>
                            <div className="space-y-3">
                              {tab.layers.map((l) => (
                                <div key={l.name} className="p-4 bg-secondary rounded-lg border border-border">
                                  <div className="font-semibold text-primary text-sm mb-2">{l.name}</div>
                                  <ul className="text-xs text-muted-foreground space-y-1">
                                    {l.items.map((it) => <li key={it}>• {it}</li>)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        <div className="mt-6 flex gap-3 flex-wrap">
                          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition">
                            {tab.ctaLabel}
                          </Link>
                          <Link to="/why-invest" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition">
                            Why Invest
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <div className="hidden">{[Activity, Wifi, Droplets, ShieldCheck].map((_, i) => i)}</div>
    </>
  );
}
