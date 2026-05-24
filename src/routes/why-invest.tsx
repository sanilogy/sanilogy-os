import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Building2,
  Cpu,
  Bot,
  TrendingUp,
  Target,
  Layers,
  MapPin,
  Wrench,
  Globe2,
  Linkedin,
} from "lucide-react";
import autoCleanPodConcept from "@/assets/technology/auto-clean-pod-toilet-concept.png";
import precastToiletConcept from "@/assets/technology/precast-toilet-concept.png";
import platformDashboard from "@/assets/platform-dashboard.png";
import { MAILTO_URL, PITCH_DECK_URL, TEAM_MEMBERS, WHATSAPP_URL } from "@/lib/site";

const PDF = PITCH_DECK_URL;
const WHATSAPP = WHATSAPP_URL;
const MAILTO = MAILTO_URL;

export const Route = createFileRoute("/why-invest")({
  component: WhyInvest,
  head: () => ({
    meta: [
      { title: "Why Invest in Sanilogy — Deep-Tech Sanitation Infrastructure" },
      {
        name: "description",
        content:
          "India's first deep-tech platform for clean public infrastructure. ₹10,800 Cr TAM, AI + IoT SaaS, 8+ years operations. Investment opportunity overview.",
      },
      { property: "og:title", content: "Why Invest in Sanilogy" },
      {
        property: "og:description",
        content:
          "Multi-layer revenue platform: POD hardware + AI/IoT SaaS + DOOH ads. Payback ~12 months. ₹1.5 Cr round.",
      },
    ],
  }),
});

function Section({
  id,
  muted,
  children,
}: {
  id?: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 px-6 lg:px-10 ${muted ? "bg-secondary" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
      <span className="w-6 h-px bg-accent" /> {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-[1.1]">
      {children}
    </h2>
  );
}

function WhyInvest() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Eyebrow>Investor Opportunity</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05] max-w-4xl mx-auto"
          >
            Why Invest in <span className="text-accent">Sanilogy?</span>
          </motion.h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sanilogy is building India's first deep-tech platform for clean public infrastructure —
            combining AI, IoT, automation, smart sanitation hardware, and real-world public toilet
            operations experience.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition"
            >
              <FileText size={18} /> View Complete Pitch Deck
            </a>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-95 transition"
            >
              <Mail size={18} /> Contact Founder
            </a>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition"
            >
              Explore Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1 — Problem */}
      <Section muted>
        <div className="max-w-3xl mb-12">
          <Eyebrow>The Problem</Eyebrow>
          <H2>
            The problem is <span className="text-accent">large and urgent.</span>
          </H2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {[
              "India has 6.3+ lakh public toilets — many unhygienic, poorly maintained, and underutilized.",
              "Manual systems create inefficiencies, delayed maintenance, and low accountability.",
              "Citizens avoid public toilets due to cleanliness and safety concerns.",
              "ULBs and PPP operators lack real-time visibility and integrated digital tools.",
            ].map((t, i) => (
              <div
                key={t}
                className="bg-white rounded-xl p-5 border border-border shadow-card flex gap-3"
              >
                <div className="text-xl font-display font-bold text-accent">0{i + 1}</div>
                <p className="text-sm text-foreground leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img
              src={precastToiletConcept}
              alt="Sanilogy public sanitation infrastructure"
              className="w-full h-full object-contain bg-white"
            />
          </div>
        </div>
      </Section>

      {/* Section 2 — Market is Ready */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>The Market is Ready</Eyebrow>
            <H2>
              India has upgraded every experience.{" "}
              <span className="text-accent">Except public toilets.</span>
            </H2>
            <ul className="mt-7 space-y-3 text-base text-foreground">
              {[
                "Urban consumers are increasingly willing to pay for comfort, convenience, and hygiene.",
                "Hygiene awareness has structurally increased post-COVID.",
                "UPI and digital payments have made ₹20–₹30 micro-payments frictionless.",
                "Users already pay for parking, coffee, delivery, and better mobility experiences.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0" />{" "}
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 p-5 rounded-xl bg-gradient-navy text-white">
              <p className="text-lg font-display font-semibold">
                "The consumer is ready to pay. The service is not yet available at scale."
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img
              src={autoCleanPodConcept}
              alt="Sanilogy POD"
              className="w-full h-auto object-contain bg-white"
            />
          </div>
        </div>
      </Section>

      {/* Section 3 — Solution */}
      <Section muted>
        <div className="max-w-3xl mb-12">
          <Eyebrow>The Sanilogy Solution</Eyebrow>
          <H2>
            A three-layer <span className="text-accent">deep-tech stack.</span>
          </H2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              i: Building2,
              t: "Auto Clean POD Toilet",
              img: autoCleanPodConcept,
              items: [
                "Automatic entry system",
                "Toilet bowl + seat cleaning",
                "Automatic floor cleaning",
                "User feedback system",
                "Real-time monitoring",
                "Modular, low-cost design",
              ],
            },
            {
              i: Cpu,
              t: "Precast Toilet Infrastructure",
              img: precastToiletConcept,
              items: [
                "Unibody, vandal-proof design",
                "Plug-and-play deployment",
                "Low water consumption",
                "Minimum cleaning required",
                "Low-cost passive design",
                "Rural & semi-urban suitable",
              ],
            },
            {
              i: Bot,
              t: "AI + IoT Platform",
              img: platformDashboard,
              items: [
                "Real-time monitoring",
                "Ticketing & inventory",
                "Staff & asset tracking",
                "Audit & quality system",
                "Plug-and-play tech",
                "Low-cost SaaS + hardware",
              ],
            },
          ].map(({ i: Icon, t, img, items }) => (
            <div
              key={t}
              className="bg-white rounded-xl border border-border shadow-card overflow-hidden flex flex-col"
            >
              <div className="h-40 overflow-hidden bg-secondary">
                <img src={img} alt={t} className="w-full h-full object-contain bg-white" />
              </div>
              <div className="p-6">
                <div className="w-11 h-11 rounded-lg bg-secondary grid place-items-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold text-primary">{t}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {items.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-accent">•</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 4 — Business Model */}
      <Section>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Business Model</Eyebrow>
          <H2>
            A <span className="text-accent">multi-layer revenue platform</span> for clean urban
            infrastructure.
          </H2>
          <p className="mt-4 text-muted-foreground">
            Sanilogy is not only a toilet infrastructure company — it operates across hardware,
            SaaS, and advertising revenue streams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            {
              i: Building2,
              t: "POD + IoT Technology as Hardware",
              d: "POD/Precast toilet infrastructure sale, IoT hardware, and annual maintenance contracts.",
            },
            {
              i: Bot,
              t: "AI + IoT Platform as SaaS",
              d: "Recurring SaaS revenue per facility — monitoring, ticketing, audit, ESG dashboards.",
            },
            {
              i: TrendingUp,
              t: "Exterior / Interior Digital Advertisement",
              d: "DOOH advertisement on POD exteriors and interiors — high-footfall urban inventory.",
            },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-gradient-navy text-white rounded-xl p-7">
              <Icon size={26} className="text-accent mb-4" />
              <h3 className="text-lg font-display font-bold text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow-card">
          <div className="text-sm font-semibold text-primary mb-3">Additional revenue streams</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
            {[
              "Premium toilet usage",
              "Shower & service add-ons",
              "Odor detection module",
              "Auto-fragrance module",
              "ESG dashboard add-on",
              "IoT AMC contracts",
            ].map((x) => (
              <div key={x} className="flex gap-2">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                {x}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 5 — Market Opportunity */}
      <Section muted>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Market Opportunity</Eyebrow>
          <H2>
            A <span className="text-accent">₹10,800 Cr</span> annual TAM for facility management
            SaaS.
          </H2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { v: "4,50,000", l: "Addressable units in India" },
            { v: "₹10,800 Cr", l: "Annual TAM (~$1.3B)" },
            { v: "₹2,400 Cr", l: "SAM — Tier 1 & 2 cities" },
            { v: "₹240 Cr", l: "SOM — 3 to 5 year target" },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-xl p-7 border border-border shadow-card">
              <div className="text-3xl font-display font-bold text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        {/* Funnel */}
        <div className="bg-white rounded-2xl p-8 border border-border shadow-card mb-10">
          <div className="text-sm font-semibold text-primary mb-5">Market Funnel</div>
          <div className="space-y-3">
            {[
              { l: "TAM — 4.5L units × ₹2,000/mo", v: "₹10,800 Cr", w: "100%" },
              { l: "SAM — 1L units in Tier 1 & 2 cities", v: "₹2,400 Cr", w: "70%" },
              { l: "SOM — 10,000 units in 3–5 yrs", v: "₹240 Cr", w: "35%" },
            ].map((r) => (
              <div key={r.l}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground">{r.l}</span>
                  <span className="font-semibold text-primary">{r.v}</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: r.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* POD opportunity */}
        <div className="bg-gradient-navy text-white rounded-2xl p-8">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Urban POD Opportunity
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { v: "500M+", l: "Urban population" },
              { v: "~200M", l: "Daily movers" },
              { v: "10%", l: "Paying users (est.)" },
              { v: "2×/mo", l: "Usage frequency" },
              { v: "₹1,200 Cr", l: "Annual urban potential" },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-2xl font-display font-bold text-accent">{s.v}</div>
                <div className="mt-1 text-xs text-white/75">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 6 — Unit Economics */}
      <Section>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Unit Economics</Eyebrow>
          <H2>
            Strong per-POD economics with <span className="text-accent">~12 month payback.</span>
          </H2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { l: "CAPEX per POD", v: "₹5–7 Lac" },
            { l: "Monthly Revenue", v: "₹85K–₹90K", sub: "Premium ₹60K + DOOH ₹25–30K" },
            { l: "Monthly OPEX", v: "₹15K–₹20K" },
            { l: "Monthly EBITDA", v: "₹65K–₹70K" },
          ].map((c) => (
            <div key={c.l} className="bg-white rounded-xl p-6 border border-border shadow-card">
              <div className="text-sm text-muted-foreground">{c.l}</div>
              <div className="mt-2 text-2xl font-display font-bold text-primary">{c.v}</div>
              {c.sub && <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>}
            </div>
          ))}
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl p-6 bg-accent text-accent-foreground">
            <div className="text-sm font-semibold opacity-90">Payback</div>
            <div className="mt-1 text-3xl font-display font-bold">&lt; 12 months</div>
            <div className="mt-1 text-sm opacity-90">
              ~15 months conservative case at 50 users/day
            </div>
          </div>
          <div className="rounded-xl p-6 bg-secondary border border-border text-sm text-muted-foreground italic">
            Indicative assumptions based on pitch deck model and subject to location, footfall, and
            operating conditions.
          </div>
        </div>
      </Section>

      {/* Section 7 — Competitive Advantage */}
      <Section muted>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Competitive Advantage</Eyebrow>
          <H2>
            Why <span className="text-accent">Sanilogy wins.</span>
          </H2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-7 border border-border shadow-card">
            <div className="flex items-center gap-2 mb-5">
              <XCircle className="text-muted-foreground" size={22} />
              <h3 className="font-display font-bold text-primary text-lg">What Sanilogy is NOT</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Not subsidy dependent",
                "Not donation driven",
                "Not a manual pay-and-use toilet",
                "Not inconsistent commodity sanitation",
                "Not merely listing third-party toilets",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <XCircle size={16} className="text-muted-foreground/70 mt-0.5 flex-shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-navy text-white rounded-2xl p-7">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="text-accent" size={22} />
              <h3 className="font-display font-bold text-lg text-white">What Sanilogy IS</h3>
            </div>
            <ul className="space-y-3 text-sm text-white/85">
              {[
                "Deep-tech urban micro-infrastructure",
                "AI-powered & IoT-monitored",
                "Productized & scalable",
                "Revenue-generating from day one",
                "PPP-ready, ULB & Smart-City aligned",
                "Backed by 8+ years operations experience",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 8 — Scale Blueprint */}
      <Section>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Scale Blueprint</Eyebrow>
          <H2>
            Density-driven rollout. <span className="text-accent">Predictable expansion.</span>
          </H2>
          <p className="mt-4 text-muted-foreground">
            Lower OPEX, faster maintenance, repeatable city-by-city deployment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              i: MapPin,
              t: "City Cluster Entry",
              d: "10–20 PODs in dense city clusters and high-footfall zones.",
            },
            {
              i: Wrench,
              t: "Shared Operations",
              d: "One local AMC hub, centralized maintenance, shared dashboard.",
            },
            {
              i: Layers,
              t: "Standardized Replication",
              d: "Same POD architecture and standardized deployment process.",
            },
            {
              i: Globe2,
              t: "Multi-City Expansion",
              d: "Cluster → city → regional hub → national network.",
            },
          ].map(({ i: Icon, t, d }, i) => (
            <div
              key={t}
              className="relative bg-white rounded-xl p-6 border border-border shadow-card"
            >
              <div className="text-xs text-accent font-bold mb-2">STAGE 0{i + 1}</div>
              <Icon size={22} className="text-accent mb-3" />
              <h3 className="font-display font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 9 — Roadmap */}
      <Section muted>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Roadmap</Eyebrow>
          <H2>
            From prototype to <span className="text-accent">50+ installations.</span>
          </H2>
        </div>
        <div className="relative grid md:grid-cols-4 gap-5">
          {[
            {
              p: "0–6 months",
              t: "Prototype",
              d: "AI + IoT toilet module — entry, sensors, alerts.",
            },
            {
              p: "9–12 months",
              t: "Field Pilots",
              d: "2 pilot locations — 1 government + 1 private.",
            },
            {
              p: "12–18 months",
              t: "PPP Partnerships",
              d: "Partner with 3 city bodies under PPP model.",
            },
            {
              p: "18–24 months",
              t: "50+ Installs",
              d: "Reach 50 installations and early SaaS MRR.",
            },
          ].map((r, i) => (
            <div
              key={r.p}
              className="bg-white rounded-xl p-6 border border-border shadow-card relative"
            >
              <div className="absolute -top-3 left-6 text-xs font-bold text-accent-foreground bg-accent px-3 py-1 rounded-full">
                {r.p}
              </div>
              <div className="mt-3 text-xs text-muted-foreground">Phase 0{i + 1}</div>
              <h3 className="mt-1 font-display font-bold text-primary text-lg">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 10 — Team */}
      <Section>
        <div className="max-w-3xl mb-12">
          <Eyebrow>Team</Eyebrow>
          <H2>
            Operators, designers, engineers —{" "}
            <span className="text-accent">deep in the field.</span>
          </H2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-xl p-6 border border-border shadow-card text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-navy text-white grid place-items-center mx-auto mb-4 font-display font-bold text-xl">
                {m.name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div className="font-display font-bold text-primary">{m.name}</div>
              <div className="text-xs text-accent font-semibold mt-1">{m.role}</div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{m.bio}</p>
              {"linkedin" in m && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-primary hover:text-accent"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Section 11 — The Ask */}
      <Section muted>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>The Ask</Eyebrow>
            <H2>
              Raising <span className="text-accent">₹1.5 Cr</span> to scale prototype to pilot.
            </H2>
            <p className="mt-4 text-muted-foreground">
              Capital deployed across team, prototype, operations, and contingency.
            </p>
            <div className="mt-7 space-y-3">
              {[
                { l: "Manpower", v: 57, c: "bg-accent" },
                { l: "Prototype", v: 28, c: "bg-primary" },
                { l: "Utility & Other Costs", v: 10, c: "bg-foreground" },
                { l: "Contingency Cost", v: 5, c: "bg-muted-foreground" },
              ].map((r) => (
                <div key={r.l}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground">{r.l}</span>
                    <span className="font-semibold text-primary">{r.v}%</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden border border-border">
                    <div className={`h-full ${r.c} rounded-full`} style={{ width: `${r.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition"
            >
              <Target size={18} /> Discuss Investment Opportunity
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-border shadow-elegant">
            {/* Donut */}
            <div className="relative w-64 h-64 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {(() => {
                  const data = [
                    { v: 57, c: "hsl(var(--accent))" },
                    { v: 28, c: "hsl(var(--primary))" },
                    { v: 10, c: "hsl(var(--foreground))" },
                    { v: 5, c: "hsl(var(--muted-foreground))" },
                  ];
                  let acc = 0;
                  return data.map((d, i) => {
                    const dash = `${d.v} ${100 - d.v}`;
                    const off = 25 - acc;
                    acc += d.v;
                    return (
                      <circle
                        key={i}
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="transparent"
                        stroke={d.c}
                        strokeWidth="5.5"
                        strokeDasharray={dash}
                        strokeDashoffset={off}
                      />
                    );
                  });
                })()}
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-xs text-muted-foreground">Total Raise</div>
                  <div className="text-3xl font-display font-bold text-primary">₹1.5 Cr</div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
              {[
                { l: "Manpower 57%", c: "bg-accent" },
                { l: "Prototype 28%", c: "bg-primary" },
                { l: "Utility 10%", c: "bg-foreground" },
                { l: "Contingency 5%", c: "bg-muted-foreground" },
              ].map((x) => (
                <div key={x.l} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-sm ${x.c}`} />
                  {x.l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 12 — Final CTA */}
      <section className="relative py-24 px-6 lg:px-10 bg-gradient-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-white">
            Invest in the future of{" "}
            <span className="text-accent">clean public infrastructure.</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
            Sanilogy combines public sanitation infrastructure, AI + IoT, automation, and recurring
            platform revenue into a scalable urban infrastructure opportunity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition"
            >
              <FileText size={18} /> View Complete Pitch Deck
            </a>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold hover:bg-secondary transition"
            >
              <Mail size={18} /> Contact Founder
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#25D366] text-white font-semibold hover:opacity-95 transition"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
