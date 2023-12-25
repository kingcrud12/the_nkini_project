import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "bvdt4jfo",
  dataset: "production",
  apiVersion: "2023-12-24",
  useCdn: false,
};

const client = createClient(config);

export default client;