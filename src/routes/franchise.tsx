import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./technology";

export const Route = createFileRoute("/franchise")({
  component: () => (
    <PageShell
      eyebrow="Franchise"
      title={<>Own a piece of the <span className="text-gradient-red">future of cities.</span></>}
      subtitle="Become a Sanilogy franchise partner and operate premium, revenue-generating smart sanitation infrastructure."
    />
  ),
  head: () => ({
    meta: [
      { title: "Franchise — Sanilogy" },
      { name: "description", content: "Partner with Sanilogy to deploy and operate smart sanitation infrastructure." },
    ],
  }),
});
