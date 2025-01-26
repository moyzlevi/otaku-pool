import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Global, css } from "@emotion/react";

const globalStyles = css`

  :root {
    --color-primary: #2A255F;
    --color-secondary: #3B376D;
    
    --color-primary-text: #FFFFFF;
    --color-primary-grey: #D9D9D9;

    --shadow-light: 0 2rem 5rem rgba(0,0,0,.06);
    --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);

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
