/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContextProvider.tsx";
import { LanguageProvider } from "./context/LanguageContextProvider.tsx";

const root = document.getElementById("root");

render(
  () => (
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  ),
  root!
);
