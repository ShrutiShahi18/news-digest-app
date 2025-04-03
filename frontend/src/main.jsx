import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NhostProvider, NhostClient } from "@nhost/react"; // ✅ Import NhostProvider
import { ApolloProvider } from "@apollo/client"; // ✅ Import ApolloProvider
import "./index.css";
import App from "./App.jsx";
import client from "./apolloClient";

// ✅ Initialize Nhost Client
const nhost = new NhostClient({
  subdomain: "ktkucbnyhybpruopvqyu",
  region: "ap-south-1",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </NhostProvider>
  </StrictMode>
);
