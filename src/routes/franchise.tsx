import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/franchise")({
  beforeLoad: () => {
    throw redirect({ to: "/impact" });
  },
});
