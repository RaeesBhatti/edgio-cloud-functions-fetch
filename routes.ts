// This file was automatically added by edgio init.
// You should commit this file to source control.

import { Router } from "@edgio/core";
import { qwikRoutes } from "@edgio/qwik";

export default new Router()
  .use(qwikRoutes)
  .match("/override-in-ef/", {
    edge_function: "./src/edge-functions/override.ts",
  })
  .match("/robots.txt", {
    edge_function: "./src/edge-functions/change-static-on-the-fly.ts",
  })
