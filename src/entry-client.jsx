import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import { system } from "./theme.js";

const container = document.getElementById("root");

const fullApp = (
  <StrictMode>
    <HelmetProvider>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </StrictMode>
);

if (container && container.children.length > 0) {
  hydrateRoot(container, fullApp);
} else if (container) {
  createRoot(container).render(fullApp);
}
