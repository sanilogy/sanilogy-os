import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./technology";

export const Route = createFileRoute("/platform")({
  component: () => (
    <PageShell
      eyebrow="AI + IoT Platform"
      title={<>A command center for <span className="text-accent">city-scale</span> sanitation.</>}
      subtitle="Live monitoring, predictive maintenance, ticketing, inventory, audit and staff management — in one enterprise SaaS interface."
    >
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
        {[
          "Entry Management", "User Feedback", "IoT Sensors", "Ticketing",
          "Inventory", "Staff Attendance", "Audit & Quality", "ESG Dashboards",
        ].map((m) => (
          <div key={m} className="bg-white rounded-lg p-5 border border-border text-sm font-semibold text-primary">{m}</div>
        ))}
      </div>
    </PageShell>
  ),
  head: () => ({
    meta: [
      { title: "AI + IoT Platform — Sanilogy" },
      { name: "description", content: "Enterprise SaaS for managing public sanitation facilities — ticketing, inventory, audit, IoT and staff tracking." },
    ],
  }),
});
