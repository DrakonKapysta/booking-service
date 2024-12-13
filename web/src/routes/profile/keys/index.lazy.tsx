import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile/keys/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/profile/keys/"!</div>;
}
