import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Droplets,
  Zap,
  ShieldCheck,
  Activity,
  Wifi,
  Sparkles,
  Building2,
  LineChart,
  Bot,
  Eye,
  Recycle,
  Leaf,
  HeartHandshake,
  Radar,
} from "lucide-react";
import heroPod from "@/assets/hero-pod.jpg";
import cityNetwork from "@/assets/city-network.jpg";
import dashboardImg from "@/assets/dashboard.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Section({
  eyebrow,
  title,
  subtitle,
  children,
  id,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-3xl mb-16"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-4">
                <span className="w-8 h-px bg-primary" /> {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-gradient leading-[1.05]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
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
    <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-10 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/20 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Smart City Infrastructure · AI + IoT
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-semibold leading-[0.98] tracking-tight">
            <span className="text-gradient">Reinventing Public</span>
            <br />
            <span className="text-gradient">Sanitation Through </span>
            <span className="text-gradient-red">AI.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl">
            Sanilogy transforms public toilets into intelligent, automated,
            revenue-generating urban infrastructure ecosystems.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/technology"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-red text-primary-foreground font-medium glow-red hover:opacity-95 transition"
            >
              Explore Technology
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/investors"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/[0.06] transition font-medium"
            >
              Investor Relations
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/[0.06] transition font-medium"
            >
              Book a Demo
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "98.7%", l: "Cleanliness Score" },
              { v: "60%", l: "Water Saved" },
              { v: "24/7", l: "AI Monitoring" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-display font-semibold text-gradient-red">
                  {s.v}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass-strong shadow-elegant">
            <img
              src={heroPod}
              alt="Sanilogy Smart POD"
              width={1920}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          {/* Floating KPI cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 glass-strong rounded-2xl p-4 w-52 hidden md:block"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Activity size={14} className="text-primary" /> Live Occupancy
            </div>
            <div className="mt-1 text-2xl font-display font-semibold">12 / 18</div>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-red" />
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 glass-strong rounded-2xl p-4 w-56 hidden md:block"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Wifi size={14} className="text-primary" /> IoT Devices
            </div>
            <div className="mt-1 text-2xl font-display font-semibold">2,148 <span className="text-xs text-muted-foreground">online</span></div>
            <div className="mt-1 text-xs text-primary">99.98% uptime</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const items = ["AIRPORTS", "METRO RAIL", "HIGHWAYS", "MUNICIPAL", "SMART CITIES", "RETAIL"];
  return (
    <section className="border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-wrap justify-between items-center gap-6">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Built for
        </span>
        {items.map((i) => (
          <span key={i} className="text-sm font-display tracking-[0.2em] text-muted-foreground/70">
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Poor maintenance & accountability",
    "Unsafe and unhygienic facilities",
    "Manual, unmonitored operations",
    "Massive water and energy waste",
    "Zero data, zero visibility",
    "Broken user experience",
  ];
  return (
    <Section
      eyebrow="The Problem"
      title={<>The world&apos;s most overlooked infrastructure is <span className="text-gradient-red">broken.</span></>}
      subtitle="Public sanitation moves billions of people every day — yet it runs on manual labor, paper logs, and zero intelligence."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all"
          >
            <div className="text-5xl font-display font-semibold text-primary/30 group-hover:text-primary/60 transition">
              0{i + 1}
            </div>
            <p className="mt-3 text-lg">{t}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  const layers = [
    { icon: Building2, t: "Smart POD Toilets", d: "Self-cleaning, sensor-rich, premium modular hardware." },
    { icon: Bot, t: "Automation & Robotics", d: "UV, mist, bowl-bots and predictive cleaning cycles." },
    { icon: Cpu, t: "AI Platform", d: "Cleanliness scoring, predictive maintenance, anomaly detection." },
    { icon: Radar, t: "IoT Mesh", d: "Occupancy, water, air, energy — every signal, every second." },
    { icon: LineChart, t: "Revenue OS", d: "Ads, EV charging, premium usage, franchise economics." },
    { icon: ShieldCheck, t: "Compliance Layer", d: "SLA enforcement, audit trails, smart-city integrations." },
  ];
  return (
    <Section
      eyebrow="The Sanilogy Stack"
      title={<>One operating system. <span className="text-gradient-red">Six intelligent layers.</span></>}
      subtitle="Hardware, software and services unified into a single category-defining infrastructure platform."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {layers.map(({ icon: Icon, t, d }, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative glass rounded-2xl p-6 overflow-hidden group hover:border-primary/40 transition"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
            <Icon size={28} className="text-primary mb-4" />
            <h3 className="text-xl font-display font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function PodShowcase() {
  const feats = [
    { i: Droplets, t: "Auto-cleaning Bowl & Floor" },
    { i: Sparkles, t: "UV Sanitization" },
    { i: Eye, t: "Touchless Operation" },
    { i: Radar, t: "Smart Occupancy" },
    { i: Recycle, t: "Water Optimization" },
    { i: Wifi, t: "Smart Ventilation" },
    { i: Zap, t: "EV Charging Ready" },
    { i: LineChart, t: "Digital Ad Display" },
  ];
  return (
    <Section
      eyebrow="Smart POD"
      title={<>A piece of <span className="text-gradient-red">urban infrastructure</span> people actually want to use.</>}
    >
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 relative rounded-3xl overflow-hidden glass-strong">
          <img src={heroPod} alt="Smart POD" className="w-full h-full object-cover" loading="lazy" width={1920} height={1280}/>
          <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {feats.map(({ i: Icon, t }) => (
            <div key={t} className="glass rounded-xl p-4">
              <Icon size={20} className="text-primary mb-2" />
              <div className="text-sm font-medium leading-snug">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function DashboardSection() {
  return (
    <Section
      eyebrow="AI + IoT Platform"
      title={<>A command center for <span className="text-gradient-red">city-scale</span> sanitation.</>}
      subtitle="Real-time monitoring across every POD, every sensor, every revenue stream — in one enterprise-grade interface."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden glass-strong shadow-elegant"
      >
        <img src={dashboardImg} alt="Sanilogy Dashboard" className="w-full h-auto" loading="lazy" width={1600} height={1024}/>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        {/* Floating tiles */}
        <div className="absolute top-6 right-6 hidden md:flex flex-col gap-3">
          <div className="glass-strong rounded-xl px-4 py-3 w-52">
            <div className="text-xs text-muted-foreground">Cleanliness</div>
            <div className="text-2xl font-display font-semibold text-primary">98.7</div>
          </div>
          <div className="glass-strong rounded-xl px-4 py-3 w-52">
            <div className="text-xs text-muted-foreground">Water saved today</div>
            <div className="text-2xl font-display font-semibold">14,210 L</div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4 mt-8">
        {[
          { t: "Live Monitoring", d: "Every POD, every sensor, real-time." },
          { t: "Predictive Maintenance", d: "AI flags issues before users do." },
          { t: "Revenue Analytics", d: "Ads, EV, premium usage in one view." },
          { t: "Franchise Management", d: "Multi-location SLA & payouts." },
        ].map((c) => (
          <div key={c.t} className="glass rounded-xl p-5">
            <div className="text-sm font-semibold">{c.t}</div>
            <div className="text-xs text-muted-foreground mt-1">{c.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    "User enters the POD",
    "Occupancy sensors activate",
    "Usage analytics recorded",
    "Smart cleaning is triggered",
    "AI scores cleanliness in real time",
    "Maintenance alerts dispatched",
    "Dashboard updates instantly",
  ];
  return (
    <Section
      eyebrow="How It Works"
      title={<>From a single visit to <span className="text-gradient-red">city-wide intelligence.</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"} pl-12 md:pl-12`}
            >
              <div className="absolute left-0 md:left-auto md:right-auto top-4 w-8 h-8 rounded-full bg-gradient-red glow-red grid place-items-center text-primary-foreground font-semibold text-sm"
                style={{
                  left: undefined,
                }}
              >
                {i + 1}
              </div>
              <div className="glass rounded-2xl p-5 ml-2">
                <div className="text-xs text-primary uppercase tracking-widest">Step 0{i + 1}</div>
                <div className="mt-1 text-lg font-display">{s}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function BusinessModel() {
  const streams = [
    "SaaS Subscriptions",
    "Franchise Royalties",
    "Infrastructure Deployment",
    "Advertising Revenue",
    "EV Charging Revenue",
    "Premium Usage",
    "Analytics Subscriptions",
  ];
  return (
    <Section
      eyebrow="Business Model"
      title={<>A <span className="text-gradient-red">multi-stream</span> recurring revenue flywheel.</>}
      subtitle="Hardware deploys the network. Software compounds the margins. Services lock in the moat."
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-3">
          {streams.map((s, i) => (
            <div key={s} className="glass rounded-xl p-4">
              <div className="text-xs text-primary">0{i + 1}</div>
              <div className="text-sm font-medium mt-1">{s}</div>
            </div>
          ))}
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-glow" />
          <div className="absolute inset-8 rounded-full border border-primary/40" />
          <div className="absolute inset-16 rounded-full border border-primary/60" />
          <div className="absolute inset-24 rounded-full bg-gradient-red glow-red grid place-items-center">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary-foreground">Flywheel</div>
              <div className="text-xs text-primary-foreground/80">recurring · compounding</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Investors() {
  const items = [
    { v: "$50B+", l: "Global smart sanitation TAM" },
    { v: "85%+", l: "Gross margin on SaaS layer" },
    { v: "10x", l: "Revenue per POD vs legacy" },
    { v: "100+", l: "Cities in deployment pipeline" },
  ];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={cityNetwork} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-4">
            <span className="w-8 h-px bg-primary" /> Investor Relations
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-gradient leading-[1.05]">
            A category we are <span className="text-gradient-red">creating</span> — not competing in.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            AI + hardware moat. High-margin SaaS. ESG-aligned. Globally scalable.
            Sanilogy is positioned to define an entire infrastructure layer.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-14">
          {items.map((s) => (
            <div key={s.l} className="glass-strong rounded-2xl p-6">
              <div className="text-4xl font-display font-semibold text-gradient-red">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/investors"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-red text-primary-foreground font-medium glow-red"
          >
            Investor Deck <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ESG() {
  const items = [
    { i: HeartHandshake, t: "Women & Public Safety", d: "Lit, monitored, panic-button enabled facilities." },
    { i: Droplets, t: "Water Optimization", d: "Up to 60% reduction in water consumption." },
    { i: Leaf, t: "Sustainable Infrastructure", d: "Low-energy operation, recyclable modules." },
    { i: ShieldCheck, t: "Public Health", d: "Continuous sanitization & cleanliness scoring." },
  ];
  return (
    <Section
      eyebrow="ESG & Impact"
      title={<>Infrastructure with <span className="text-gradient-red">a conscience.</span></>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ i: Icon, t, d }) => (
          <div key={t} className="glass rounded-2xl p-6">
            <Icon size={26} className="text-primary mb-3" />
            <div className="text-lg font-display font-semibold">{t}</div>
            <div className="text-sm text-muted-foreground mt-2">{d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0">
        <img src={cityNetwork} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[160px]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-display font-semibold text-gradient leading-[1.02]">
          Building the future <br />operating system for <span className="text-gradient-red">public sanitation.</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/investors" className="px-6 py-3.5 rounded-full bg-gradient-red text-primary-foreground font-medium glow-red">
            Schedule Investor Meeting
          </Link>
          <Link to="/contact" className="px-6 py-3.5 rounded-full glass font-medium hover:bg-white/[0.06]">
            Request Live Demo
          </Link>
          <Link to="/franchise" className="px-6 py-3.5 rounded-full glass font-medium hover:bg-white/[0.06]">
            Franchise With Sanilogy
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <LogoStrip />
      <Problem />
      <Solution />
      <PodShowcase />
      <DashboardSection />
      <HowItWorks />
      <BusinessModel />
      <Investors />
      <ESG />
      <FinalCTA />
    </main>
  );
}
