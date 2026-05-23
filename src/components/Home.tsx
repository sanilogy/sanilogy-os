import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Droplets,
  ShieldCheck,
  Building2,
  LineChart,
  Bot,
  Radar,
  Leaf,
  HeartHandshake,
  CheckCircle2,
  FileText,
} from "lucide-react";
import heroPodToilet from "@/assets/hero-pod-toilet-cutout.png";
import platformDashboard from "@/assets/platform-dashboard.png";
import { MAILTO_URL, PITCH_DECK_URL } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
} as const;

function Section({
  eyebrow,
  title,
  subtitle,
  children,
  id,
  muted,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 lg:px-10 ${muted ? "bg-secondary" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
                <span className="w-6 h-px bg-accent" /> {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-[1.1]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-10 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-primary mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Smart Sanitation Infrastructure · AI + IoT
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-display font-bold leading-[1.05] tracking-tight text-primary">
            AI-Powered Public Sanitation Infrastructure for
            <span className="text-accent"> Cleaner Cities.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Sanilogy combines smart POD toilets, IoT monitoring, automated cleaning, and a facility
            management SaaS to make public sanitation clean, accountable, and scalable.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/investors"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-95 transition shadow-md"
            >
              Explore Investor Opportunity
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition"
            >
              View Solutions
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-3 max-w-2xl">
            {[
              "8+ years public toilet operations experience",
              "AI + IoT enabled facility management platform",
              "Designed for ULBs, PPP operators & smart cities",
              "Scalable from 10 to 10,000+ toilets",
            ].map((s) => (
              <div key={s} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:-ml-2 lg:-mr-14 lg:max-w-none lg:justify-end xl:-mr-20">
            <img
              src={heroPodToilet}
              alt="Sanilogy Smart POD Toilet"
              width={797}
              height={966}
              className="h-auto w-full max-h-[38rem] select-none object-contain drop-shadow-[0_28px_50px_rgba(23,32,51,0.18)] md:max-h-[44rem] lg:w-[112%] lg:max-w-none lg:max-h-[48rem] xl:w-[120%] xl:max-h-[52rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Smart Cities",
    "Municipal Corporations",
    "PPP Operators",
    "Airports",
    "Metro Rail",
    "Highways",
  ];
  return (
    <section className="border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7 flex flex-wrap justify-between items-center gap-6">
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
          Designed for
        </span>
        {items.map((i) => (
          <span
            key={i}
            className="text-sm font-display font-semibold tracking-wide text-primary/70"
          >
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "India has 6.3+ lakh public toilets — many unhygienic and underutilized.",
    "Manual systems cause inefficiencies, delayed maintenance, low accountability.",
    "Citizens avoid public toilets due to cleanliness and safety concerns.",
    "ULBs and PPP operators lack real-time visibility and digital tools.",
  ];
  return (
    <Section
      muted
      eyebrow="The Problem"
      title={
        <>
          Public sanitation is broken at <span className="text-accent">infrastructure scale.</span>
        </>
      }
      subtitle="Billions of people rely on public facilities every day — yet operations still run on paper logs, manual labor, and zero intelligence."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-6 border border-border shadow-card flex gap-4"
          >
            <div className="text-2xl font-display font-bold text-accent">0{i + 1}</div>
            <p className="text-base text-foreground leading-relaxed">{t}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  const layers = [
    {
      icon: Building2,
      t: "Auto Clean POD Toilet",
      d: "Automatic entry, bowl, seat and floor cleaning. Real-time monitoring. Modular, low-cost design.",
    },
    {
      icon: Cpu,
      t: "Precast Toilet Infrastructure",
      d: "Unibody vandal-proof design. Plug-and-play. Low water use. Ideal for rural and semi-urban.",
    },
    {
      icon: Bot,
      t: "AI + IoT Facility Management Platform",
      d: "Real-time monitoring, ticketing, inventory, audit, staff & asset tracking — all in one SaaS.",
    },
  ];
  return (
    <Section
      eyebrow="The Sanilogy Stack"
      title={
        <>
          Three integrated layers. <span className="text-accent">One platform.</span>
        </>
      }
      subtitle="Hardware, infrastructure, and software unified into a single category-defining sanitation operating system."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {layers.map(({ icon: Icon, t, d }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-white rounded-xl p-7 border border-border shadow-card hover:shadow-elegant transition"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary grid place-items-center mb-5">
              <Icon size={22} className="text-accent" />
            </div>
            <h3 className="text-xl font-display font-bold text-primary">{t}</h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function DashboardSection() {
  return (
    <Section
      muted
      eyebrow="AI + IoT Platform"
      title={
        <>
          A command center for <span className="text-accent">city-scale</span> sanitation.
        </>
      }
      subtitle="Real-time monitoring across every facility, every sensor, every revenue stream — in one enterprise-grade interface."
    >
      <div className="relative rounded-2xl overflow-hidden bg-white border border-border shadow-elegant">
        <img
          src={platformDashboard}
          alt="Sanilogy AI + IoT Dashboard"
          className="w-full h-auto"
          loading="lazy"
          width={1600}
          height={1024}
        />
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-8">
        {[
          { t: "Live Monitoring", d: "Every facility, every sensor — in real time." },
          { t: "Predictive Maintenance", d: "AI flags issues before users notice." },
          { t: "Audit & Quality", d: "Compliance, SLA, and reporting built in." },
          { t: "Staff & Inventory", d: "Tickets, attendance, assets unified." },
        ].map((c) => (
          <div key={c.t} className="bg-white rounded-xl p-5 border border-border">
            <div className="text-sm font-semibold text-primary">{c.t}</div>
            <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{c.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Market() {
  const stats = [
    { v: "4.5L", l: "Addressable units in India" },
    { v: "₹10,800 Cr", l: "Annual TAM (~$1.3B)" },
    { v: "₹2,400 Cr", l: "SAM — Tier 1 & 2 cities" },
    { v: "₹240 Cr", l: "SOM — 3 to 5 year target" },
  ];
  return (
    <Section
      eyebrow="Market Opportunity"
      title={
        <>
          A large addressable market for{" "}
          <span className="text-accent">facility management SaaS.</span>
        </>
      }
      subtitle="From 10 buildings to 10,000+ — Sanilogy is built to scale across India's urban sanitation infrastructure."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-white rounded-xl p-7 border border-border shadow-card">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary">{s.v}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Investors() {
  return (
    <section className="relative py-24 px-6 lg:px-10 bg-gradient-navy text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            <span className="w-6 h-px bg-accent" /> Investor Relations
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-white">
            India's first deep-tech platform for{" "}
            <span className="text-accent">clean public infrastructure.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">
            Powered by AI, IoT, automation, and 8+ years of real-world public toilet operations
            experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PITCH_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold hover:opacity-95 transition shadow-md"
            >
              <FileText size={18} /> View Pitch Deck
            </a>
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold hover:bg-secondary transition"
            >
              Explore Business Model
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "₹10,800 Cr", l: "Annual TAM" },
            { v: "85%+", l: "SaaS gross margin" },
            { v: "8+ yrs", l: "Operations experience" },
            { v: "PPP Ready", l: "ULB & Smart City aligned" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur"
            >
              <div className="text-3xl font-display font-bold text-accent">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ESG() {
  const items = [
    {
      i: HeartHandshake,
      t: "Citizen Safety & Dignity",
      d: "Lit, monitored, accountable facilities for all.",
    },
    { i: Droplets, t: "Water Optimization", d: "Up to 60% reduction in water consumption." },
    { i: Leaf, t: "Sustainable Infrastructure", d: "Low-energy operation and recyclable modules." },
    { i: ShieldCheck, t: "Public Health", d: "Continuous sanitization and cleanliness scoring." },
  ];
  return (
    <Section
      muted
      eyebrow="ESG & Impact"
      title={
        <>
          Infrastructure aligned with <span className="text-accent">public good.</span>
        </>
      }
      subtitle="Built around Swachh Bharat Mission, Smart City programs, and global ESG reporting standards."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ i: Icon, t, d }) => (
          <div key={t} className="bg-white rounded-xl p-6 border border-border shadow-card">
            <div className="w-11 h-11 rounded-lg bg-secondary grid place-items-center mb-4">
              <Icon size={20} className="text-accent" />
            </div>
            <div className="text-lg font-display font-bold text-primary">{t}</div>
            <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-24 px-6 lg:px-10 bg-white border-t border-border">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-[1.1]">
          Building the operating system for{" "}
          <span className="text-accent">clean public sanitation.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Partner with Sanilogy to deploy AI-powered, accountable sanitation infrastructure across
          your city.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={MAILTO_URL}
            className="px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition"
          >
            Schedule Investor Meeting
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-95 transition"
          >
            Request a Demo
          </Link>
          <a
            href={PITCH_DECK_URL}
            download
            className="px-6 py-3 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition inline-flex items-center gap-2"
          >
            <FileText size={18} /> Download Pitch Deck
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <DashboardSection />
      <Market />
      <Investors />
      <ESG />
      <FinalCTA />
    </main>
  );
}

// Silence unused imports warning
void LineChart;
void Radar;
