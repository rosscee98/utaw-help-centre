import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_IO_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_IO_DATASET,
  useCdn: true,
  apiVersion: "2023-05-30",
});

export async function getGuides() {
  return client.fetch('*[_type == "guide"] | order(_createdAt asc)');
}
