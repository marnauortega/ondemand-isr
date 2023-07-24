import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "ondemand-isr",
  projectId: "x5q1obfu",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
