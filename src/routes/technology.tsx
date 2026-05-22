import { createFileRoute, Link } from "@tanstack/react-router";

function PageShell({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <main className="relative min-h-screen pt-40 pb-32 px-6 lg:px-10 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-8 h-px bg-primary" /> {eyebrow}
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-gradient leading-[1.02]">
          {title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link to="/contact" className="px-6 py-3 rounded-full bg-gradient-red text-primary-foreground glow-red font-medium">
            Book a Demo
          </Link>
          <Link to="/" className="px-6 py-3 rounded-full glass font-medium hover:bg-white/[0.06]">
            Back Home
          </Link>
        </div>
        <div className="mt-20 glass-strong rounded-3xl p-10 text-left">
          <p className="text-muted-foreground">
            This page is part of the Sanilogy investor preview. Detailed content,
            interactive demos and downloadable materials are being prepared.
          </p>
        </div>
      </div>
    </main>
  );
}

export { PageShell };

export const Route = createFileRoute("/technology")({
  component: () => (
    <PageShell
      eyebrow="Technology"
      title={<>The intelligence layer for <span className="text-gradient-red">urban sanitation.</span></>}
      subtitle="AI-powered POD hardware, IoT mesh, and a real-time platform engineered for city-scale deployment."
    />
  ),
  head: () => ({
    meta: [
      { title: "Technology — Sanilogy" },
      { name: "description", content: "AI, IoT and automation powering Sanilogy smart sanitation infrastructure." },
    ],
  }),
});
