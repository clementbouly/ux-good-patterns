import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { indexRoute } from "./routes/index";
import { exampleRoute } from "./routes/example.$exampleId";

const routeTree = rootRoute.addChildren([indexRoute, exampleRoute]);

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  defaultViewTransition: {
    types: ({ fromLocation, toLocation }) => {
      // No animation on first load
      if (!fromLocation) {
        return ["none"];
      }

      const fromDepth = fromLocation.pathname.split("/").filter(Boolean).length;
      const toDepth = toLocation.pathname.split("/").filter(Boolean).length;

      // Going deeper (home -> example) = forward
      // Going back (example -> home) = backward
      return toDepth > fromDepth ? ["slide-forward"] : ["slide-backward"];
    },
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
