import { createFileRoute } from "@tanstack/react-router";
import Home from "@/components/Home";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sanilogy — AI Operating System for Public Sanitation" },
      {
        name: "description",
        content:
          "Sanilogy transforms public toilets into intelligent, automated, revenue-generating smart city infrastructure powered by AI and IoT.",
      },
      { property: "og:title", content: "Sanilogy — Reinventing Public Sanitation" },
      {
        property: "og:description",
        content:
          "Smart POD toilets, AI platform and IoT mesh for next-generation urban infrastructure.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return <Home />;
}
