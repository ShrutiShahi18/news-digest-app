import { NhostClient } from "@nhost/react";

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
  graphqlUrl: import.meta.env.VITE_NHOST_GRAPHQL_URL,
  autoRefreshToken: true, // Ensure automatic token refresh
  clientStorageType: "localStorage", // Persist session
});


export default nhost;
