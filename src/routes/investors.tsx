import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Download, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";

export const Route = createFileRoute("/investors")({
  component: InvestorsPage,
  head: () => ({
    meta: [
      { title: "Investor Relations — Sanilogy" },
      { name: "description", content: "India's first deep-tech platform for clean public infrastructure. Powered by AI, IoT, automation, and 8+ years of public toilet operations experience." },
      { property: "og:title", content: "Investor Relations — Sanilogy" },
      { property: "og:description", content: "AI + IoT public sanitation infrastructure platform — ₹10,800 Cr TAM. ESG-aligned and PPP-ready." },
    ],
  }),
});

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-4">
        <span className="w-6 h-px bg-accent" /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-[1.1]">{title}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function InvestorsPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto text-center">
          <img src={logo} alt="Sanilogy" className="h-12 w-auto mx-auto mb-8" />
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-5">
            <span className="w-6 h-px bg-accent" /> Investor Relations
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05] max-w-4xl mx-auto">
            India's First Deep-Tech Platform for <span className="text-accent">Clean Public Infrastructure.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powered by AI, IoT, automation, and 8+ years of real-world public toilet operations experience.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/sanilogy-pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition"
            >
              <FileText size={18}/> View Pitch Deck
            </a>
            <a
              href="/sanilogy-pitch-deck.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-border text-primary font-semibold hover:bg-secondary transition"
            >
              <Download size={18}/> Download Pitch Deck
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-95 transition">
              <Mail size={18}/> Contact Founder
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHead
            eyebrow="The Problem"
            title={<>Public sanitation is <span className="text-accent">broken at scale.</span></>}
          />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "India has over 6.3 lakh public toilets — many remain unhygienic, poorly maintained, and underutilized.",
              "Manual systems create inefficiencies, delayed maintenance, and low accountability.",
              "Citizens avoid public toilets due to cleanliness and safety concerns.",
              "Urban local bodies and PPP operators lack real-time visibility and integrated digital tools.",
            ].map((t, i) => (
              <div key={t} className="bg-white rounded-xl p-6 border border-border shadow-card flex gap-4">
                <div className="text-2xl font-display font-bold text-accent">0{i + 1}</div>
                <p className="text-foreground leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHead
            eyebrow="Sanilogy Solutions"
            title={<>Three integrated layers — <span className="text-accent">one platform.</span></>}
            sub="Hardware, infrastructure, and software unified into a single sanitation operating system."
          />
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              {
                t: "Auto Clean POD Toilet",
                feats: [
                  "Automatic entry system",
                  "Toilet bowl & seat cleaning",
                  "Automatic floor cleaning",
                  "User feedback system",
                  "Real-time monitoring",
                  "Modular, low-cost design",
                ],
              },
              {
                t: "Precast Toilet Infrastructure",
                feats: [
                  "Unibody infrastructure design",
                  "Vandal-proof construction",
                  "Plug-and-play toilet",
                  "Low water consumption",
                  "Minimum cleaning requirement",
                  "Passive design for rural & semi-urban",
                ],
              },
              {
                t: "AI + IoT Facility Management Platform",
                feats: [
                  "Real-time monitoring",
                  "User feedback system",
                  "Maintenance ticketing & records",
                  "Inventory, asset & staff tracking",
                  "Audit & quality management",
                  "Plug-and-play SaaS + hardware",
                ],
              },
            ].map((s) => (
              <div key={s.t} className="bg-white rounded-xl p-7 border border-border shadow-card">
                <h3 className="text-xl font-display font-bold text-primary mb-5">{s.t}</h3>
                <ul className="space-y-2.5">
                  {s.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={17} className="text-accent flex-shrink-0 mt-0.5"/> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHead
            eyebrow="Market Opportunity"
            title={<>Large addressable market for <span className="text-accent">facility management SaaS.</span></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { v: "4,50,000", l: "Addressable units in India" },
              { v: "₹2,000", l: "Avg. monthly SaaS revenue / building" },
              { v: "₹10,800 Cr", l: "Annual TAM (~$1.3 Billion)" },
              { v: "₹2,400 Cr", l: "SAM — Tier 1 & 2 cities" },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-xl p-6 border border-border shadow-card">
                <div className="text-3xl font-display font-bold text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
          {/* Funnel */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-card">
            <h3 className="text-xl font-display font-bold text-primary mb-6">Market Funnel: TAM → SAM → SOM</h3>
            <div className="space-y-3">
              {[
                { label: "TAM — Total Addressable Market", value: "₹10,800 Cr", width: "100%" },
                { label: "SAM — 1,00,000 Tier 1 & 2 units", value: "₹2,400 Cr", width: "60%" },
                { label: "SOM — 10,000 units (3–5 years)", value: "₹240 Cr", width: "25%" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="flex justify-between text-sm font-medium text-primary mb-1.5">
                    <span>{f.label}</span><span className="text-accent">{f.value}</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-red" style={{ width: f.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business model & revenue */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHead
            eyebrow="Business Model"
            title={<>Three revenue pillars. <span className="text-accent">Scalable from 10 to 10,000+ toilets.</span></>}
            sub="Hardware deploys the network. SaaS compounds the margins. Advertising amplifies the returns."
          />
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { t: "POD + IoT Hardware", d: "One-time infrastructure & hardware sale, plus annual maintenance contracts (AMC)." },
              { t: "AI + IoT SaaS Platform", d: "Recurring subscription revenue from facility management software — high gross margin." },
              { t: "Digital Advertising", d: "Exterior & interior screen advertising revenue across the network." },
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-xl p-7 border border-border shadow-card">
                <h3 className="text-xl font-display font-bold text-primary">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-secondary rounded-2xl p-8 border border-border">
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-4">Platform Modules</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Entry Management", "Feedback", "IoT Sensors", "Ticketing", "Inventory", "Staff Attendance", "Audit & Quality", "ESG Dashboards"].map((m) => (
                <div key={m} className="bg-white rounded-lg px-4 py-3 border border-border text-sm font-medium text-primary">{m}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Why Sanilogy Wins" title={<>An <span className="text-accent">operator-built</span> deep-tech moat.</>} />
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Sanitation-focused SaaS built on 8+ years of real public toilet operations experience.",
              "Plug-and-play modular technology — 100% modular design and easy installation.",
              "Aligned with government needs and PPP model compatibility.",
              "Swachh Bharat Mission and Smart City alignment.",
              "Strong public toilet operations and management expertise.",
              "Integrated hardware + software moat — hard to replicate.",
            ].map((t) => (
              <div key={t} className="bg-white rounded-xl p-5 border border-border flex gap-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Why Now" title={<>The forces aligning for <span className="text-accent">sanitation deep-tech.</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Economic", d: "Urban infrastructure and ESG reporting demand digital facility management." },
              { t: "Social", d: "Cleanliness, transparency, and citizen hygiene expectations are rising." },
              { t: "Technology", d: "IoT, AI, and SaaS now enable cost-effective scalable monitoring." },
              { t: "Policy", d: "Swachh Bharat Mission and Smart City programs accelerate adoption." },
            ].map((c) => (
              <div key={c.t} className="bg-white rounded-xl p-6 border border-border shadow-card">
                <div className="text-sm font-semibold text-accent uppercase tracking-wider">{c.t}</div>
                <p className="mt-3 text-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Leadership" title={<>The team building <span className="text-accent">Sanilogy.</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: "Yashwant Suthar",
                r: "Founder / CTO",
                d: "Master of Design, IIT Delhi. 16 years total experience, 9+ years in public toilet design, operations and management. Strategy, planning, NPD and public infrastructure design.",
              },
              {
                n: "Neelam Singh",
                r: "CEO / Co-Founder",
                d: "Operations, finance, audit, and quality control. 8+ years of public toilet operation and management experience.",
              },
              {
                n: "Ayush Sharma",
                r: "Embedded Developer",
                d: "8 years in embedded design and development. BE in Electronics and Communication.",
              },
              {
                n: "Krutika Pache",
                r: "Operations & Admin Manager",
                d: "11 years of operations experience; 3 years in public toilet operations and management.",
              },
            ].map((m) => (
              <div key={m.n} className="bg-white rounded-xl p-6 border border-border shadow-card">
                <div className="w-14 h-14 rounded-full bg-gradient-navy grid place-items-center text-white font-display font-bold text-lg mb-4">
                  {m.n.split(" ").map((p) => p[0]).join("")}
                </div>
                <div className="text-lg font-display font-bold text-primary">{m.n}</div>
                <div className="text-sm text-accent font-semibold">{m.r}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Roadmap" title={<>From <span className="text-accent">prototype to 50+ installations.</span></>} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { p: "0–6 months", d: "Prototype AI + IoT toilet module — entry system, sensors, and alerts." },
              { p: "9–12 months", d: "Field test in 2 pilot locations — 1 government and 1 private." },
              { p: "12–18 months", d: "Partner with 3 city bodies under PPP model." },
              { p: "18–24 months", d: "Reach 50 toilet installations and start generating early SaaS MRR." },
            ].map((r, i) => (
              <div key={r.p} className="bg-white rounded-xl p-6 border border-border shadow-card relative">
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  Phase 0{i + 1}
                </div>
                <div className="mt-3 text-lg font-display font-bold text-primary">{r.p}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-10 bg-gradient-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-white">
            Partner with Sanilogy to build <span className="text-accent">cleaner, smarter cities.</span>
          </h2>
          <p className="mt-5 text-lg text-white/75">Request the full investor deck or schedule a call with the founder.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/sanilogy-pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-md hover:opacity-95 transition"
            >
              <FileText size={18}/> View Complete Pitch Deck
            </a>
            <a
              href="/sanilogy-pitch-deck.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-primary font-semibold hover:bg-secondary transition"
            >
              <Download size={18}/> Download Pitch Deck
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition">
              Schedule Investor Meeting <ArrowRight size={18}/>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
