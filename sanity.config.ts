import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
    basePath: "/studio",
    name: "Management_Content_Studio",
    title: "Management Content Studio",
    projectId,
    dataset,
    plugins: [deskTool(), visionTool()],
    studio: {
        components: {
            navbar: undefined,
        },
    },
    schema: {
        types: schemaTypes,
    },
});
