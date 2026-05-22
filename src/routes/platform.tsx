import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./technology";

export const Route = createFileRoute("/platform")({
  component: () => (
    <PageShell
      eyebrow="AI Platform"
      title={<>A command center for <span className="text-gradient-red">city-scale</span> infrastructure.</>}
      subtitle="Live monitoring, predictive maintenance, revenue analytics and franchise operations in one interface."
    />
  ),
  head: () => ({
    meta: [
      { title: "AI Platform — Sanilogy" },
      { name: "description", content: "Enterprise SaaS platform for managing Sanilogy smart sanitation infrastructure." },
    ],
  }),
});
