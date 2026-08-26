import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { AppToaster } from "./components/toaster";

import App from "./App.jsx";
import { system } from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ChakraProvider value={system}>
        <App />
        <AppToaster/>
      </ChakraProvider>
    </HelmetProvider>
  </StrictMode>
);