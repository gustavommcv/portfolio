/* @refresh reload */
import { render } from "solid-js/web";
import { LanguageProvider } from "./app/features/contexts/LanguageContext/LanguageContextProvider";
import { ThemeProvider } from "./app/features/contexts/ThemeContext/ThemeContextProvider";
import App from "./app/App";

import "./styles.scss";

const root = document.getElementById("root");

render(
  () => (
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  ),
  root!,
);
