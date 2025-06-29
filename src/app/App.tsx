import { HashRouter, Route } from "@solidjs/router";
import { createEffect, lazy, onMount } from "solid-js";
import Template from "./Template/Template";
import HomePage from "./features/home/HomePage/HomePage";
import { useTheme } from "./features/contexts/ThemeContext/ThemeContextProvider";

function App() {
  const { theme } = useTheme();

  createEffect(() => {
    document.body.style.background = theme() === "dark" ? "#0f0f11" : "#f8f9fa";
  });

  onMount(() => {
    document.body.className = theme();
  });

  return (
    <HashRouter root={Template}>
      <Route path="/" component={HomePage} />
      <Route
        path="/about"
        component={lazy(() => import("./features/about/AboutPage/AboutPage"))}
      />
    </HashRouter>
  );
}

export default App;
