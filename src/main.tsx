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

    --font-primary-bold: "Palanquin Dark";
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



  .anime-bg {
    background-image: url("https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ");
  }

  .colored-bg {
    background-color: #FFFFFF;
    background-image: none;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>
);
