import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global, css } from "@emotion/react";

const globalStyles = css`

  :root {
    --color-primary-text: #FFFFFF;

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: "Palanquin", serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
}
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>
);
