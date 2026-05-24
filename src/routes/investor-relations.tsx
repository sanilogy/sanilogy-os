import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/investor-relations")({
  beforeLoad: () => {
    throw redirect({ to: "/why-invest" });
  },
});
