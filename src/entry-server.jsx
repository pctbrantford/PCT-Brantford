import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

import { AppRoutes } from "./App.jsx";
import { system } from "./theme.js";

HelmetProvider.canUseDOM = false;

export function render(url) {
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <ChakraProvider value={system}>
          <MemoryRouter initialEntries={[url]}>
            <AppRoutes />
          </MemoryRouter>
        </ChakraProvider>
      </HelmetProvider>
    </StrictMode>
  );

  return {
    html,
    helmet: helmetContext.helmet,
  };
}
