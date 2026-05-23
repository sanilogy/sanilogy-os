import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/sanilogy-logo.png";
import { MAILTO_URL, PITCH_DECK_URL, TEAM_MEMBERS, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/investors")({
  component: InvestorsPage,
  head: () => ({
    meta: [
      { title: "Investor Relations - Sanilogy" },
      {
        name: "description",
        content:
          "Sanilogy is a deep-tech public sanitation infrastructure platform powered by AI, IoT, automation, and real public toilet operations experience.",
      },
      { property: "og:title", content: "Investor Relations - Sanilogy" },
      {
        property: "og:description",
        content:
          "AI + IoT public sanitation infrastructure platform with smart POD toilets, precast infrastructure, SaaS revenue, and ESG alignment.",
      },
    ],
  }),
});

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        <span className="h-px w-6 bg-accent" /> {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold leading-[1.1] text-primary md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

function InvestorsPage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-gradient-hero px-6 pb-20 pt-32 lg:px-10">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-6xl text-center">
          <img src={logo} alt="Sanilogy" className="mx-auto mb-8 h-12 w-auto" />
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" /> Investor Relations
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.05] text-primary md:text-6xl">
            India's public sanitation infrastructure,{" "}
            <span className="text-accent">rebuilt for scale.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Sanilogy combines Auto Clean POD toilets, precast infrastructure, and an AI + IoT
            facility management platform for government, PPP, and investor-backed deployments.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={PITCH_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-md transition hover:opacity-95"
            >
              <FileText size={18} /> View Pitch Deck
            </a>
            <a
              href={PITCH_DECK_URL}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-6 py-3 font-semibold text-primary transition hover:bg-secondary"
            >
              <Download size={18} /> Download Pitch Deck
            </a>
            <a
              href={MAILTO_URL}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-95"
            >
              <Mail size={18} /> Contact Founder
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="The Problem"
            title={
              <>
                Public sanitation is <span className="text-accent">broken at scale.</span>
              </>
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "India has over 6.3 lakh public toilets, many of which remain unhygienic, poorly maintained, and underutilized.",
              "Manual systems create inefficiencies, delayed maintenance, and low accountability.",
              "Citizens avoid public toilets because cleanliness and safety are not predictable.",
              "Urban local bodies and PPP operators lack real-time visibility and integrated digital tools.",
            ].map((text, index) => (
              <div
                key={text}
                className="flex gap-4 rounded-xl border border-border bg-white p-6 shadow-card"
              >
                <div className="font-display text-2xl font-bold text-accent">0{index + 1}</div>
                <p className="leading-relaxed text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Sanilogy Solutions"
            title={
              <>
                Three integrated layers. <span className="text-accent">One operating system.</span>
              </>
            }
            sub="Hardware, infrastructure, and software unified into a single sanitation operating system."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "Auto Clean POD Toilet",
                features: [
                  "Automatic entry system",
                  "Toilet bowl and seat cleaning",
                  "Automatic floor cleaning",
                  "User feedback system",
                  "Real-time monitoring",
                  "Modular, low-cost design",
                ],
              },
              {
                title: "Precast Toilet Infrastructure",
                features: [
                  "Unibody infrastructure design",
                  "Vandal-proof construction",
                  "Plug-and-play toilet",
                  "Low water consumption",
                  "Minimum cleaning requirement",
                  "Rural and semi-urban suitability",
                ],
              },
              {
                title: "AI + IoT Facility Management Platform",
                features: [
                  "Real-time monitoring",
                  "Maintenance ticketing and records",
                  "Inventory, asset, and staff tracking",
                  "Audit and quality management",
                  "Multi-location dashboard",
                  "Low-cost SaaS and hardware model",
                ],
              },
            ].map((solution) => (
              <div
                key={solution.title}
                className="rounded-xl border border-border bg-white p-7 shadow-card"
              >
                <h3 className="mb-5 font-display text-xl font-bold text-primary">
                  {solution.title}
                </h3>
                <ul className="space-y-2.5">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-accent" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            to="/solutions"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-95"
          >
            Explore Solutions <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Market Opportunity"
            title={
              <>
                Large addressable market for{" "}
                <span className="text-accent">facility management SaaS.</span>
              </>
            }
          />
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "4,50,000", label: "Addressable units in India" },
              { value: "INR 2,000", label: "Avg. monthly SaaS revenue / building" },
              { value: "INR 10,800 Cr", label: "Annual TAM" },
              { value: "INR 2,400 Cr", label: "SAM - Tier 1 & 2 cities" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white p-6 shadow-card"
              >
                <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
            <h3 className="mb-6 font-display text-xl font-bold text-primary">
              Market Funnel: TAM to SAM to SOM
            </h3>
            <div className="space-y-3">
              {[
                { label: "TAM - Total Addressable Market", value: "INR 10,800 Cr", width: "100%" },
                { label: "SAM - 1,00,000 Tier 1 & 2 units", value: "INR 2,400 Cr", width: "60%" },
                { label: "SOM - 10,000 units in 3-5 years", value: "INR 240 Cr", width: "25%" },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex justify-between text-sm font-medium text-primary">
                    <span>{row.label}</span>
                    <span className="text-accent">{row.value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-red"
                      style={{ width: row.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Business Model"
            title={
              <>
                Three revenue pillars.{" "}
                <span className="text-accent">Scalable from 10 to 10,000+ toilets.</span>
              </>
            }
            sub="Hardware deploys the network. SaaS compounds the margins. Advertising amplifies the returns."
          />
          <div className="mb-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "POD + IoT Hardware",
                text: "One-time infrastructure and hardware sale, plus annual maintenance contracts.",
              },
              {
                title: "AI + IoT SaaS Platform",
                text: "Recurring subscription revenue from monitoring, ticketing, audit, ESG, and quality dashboards.",
              },
              {
                title: "Digital Advertising",
                text: "Exterior and interior screen advertising revenue across high-footfall public infrastructure.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-white p-7 shadow-card"
              >
                <h3 className="font-display text-xl font-bold text-primary">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-secondary p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Platform Modules
            </h4>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                "Entry Management",
                "Feedback",
                "IoT Sensors",
                "Ticketing",
                "Inventory",
                "Staff Attendance",
                "Audit & Quality",
                "ESG Dashboards",
              ].map((module) => (
                <div
                  key={module}
                  className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow="Leadership"
            title={
              <>
                The team building <span className="text-accent">Sanilogy.</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-white p-6 shadow-card"
              >
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-navy font-display text-lg font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="font-display text-lg font-bold text-primary">{member.name}</div>
                <div className="text-sm font-semibold text-accent">{member.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                {"linkedin" in member && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-white md:text-5xl">
            Partner with Sanilogy to build{" "}
            <span className="text-accent">cleaner, smarter cities.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
            Request the full investor deck or schedule a call with the founder.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={PITCH_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-md transition hover:opacity-95"
            >
              <FileText size={18} /> View Complete Pitch Deck
            </a>
            <a
              href={PITCH_DECK_URL}
              download
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-primary transition hover:bg-secondary"
            >
              <Download size={18} /> Download Pitch Deck
            </a>
            <a
              href={MAILTO_URL}
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              <Mail size={18} /> Schedule Investor Meeting
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-95"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
