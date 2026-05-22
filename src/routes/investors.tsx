import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./technology";

export const Route = createFileRoute("/investors")({
  component: () => (
    <PageShell
      eyebrow="Investor Relations"
      title={<>A category we are <span className="text-gradient-red">creating</span> — not competing in.</>}
      subtitle="AI + hardware moat. High-margin SaaS. ESG-aligned. Globally scalable. Request the investor deck."
    />
  ),
  head: () => ({
    meta: [
      { title: "Investors — Sanilogy" },
      { name: "description", content: "Sanilogy investor relations: category creation in smart sanitation infrastructure." },
    ],
  }),
});
