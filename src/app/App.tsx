import { HashRouter, Route } from "@solidjs/router";
import { createEffect, lazy, onMount } from "solid-js";
import Template from "./Template/Template";
import HomePage from "./features/home/HomePage/HomePage";
import { useTheme } from "./features/contexts/ThemeContext/ThemeContextProvider";
import ErrorPage from "./core/shared/ErrorPage/ErrorPage";

function App() {
  const { theme } = useTheme();

  createEffect(() => {
    document.body.style.background = theme() === "dark" ? "#0C0C0C" : "#E9E0D9";
  });

  onMount(() => {
    document.body.className = theme();
  });

  const projects = [
    {
      id: "gomodoro",
      component: lazy(() => import("./features/projects/Gomodoro/Gomodoro")),
    },
  ];

  // TODO
  // Scroll to top
  return (
    <HashRouter root={Template}>
      <Route path="/" component={HomePage} />

      <Route
        path="/about"
        component={lazy(() => import("./features/about/AboutPage/AboutPage"))}
      />

      <Route
        path="/projects"
        component={lazy(
          () => import("./features/projects/ProjectsPage/ProjectsPage"),
        )}
      />

      <Route path="/projects">
        {projects.map((project) => (
          <Route path={`/${project.id}`} component={project.component} />
        ))}
      </Route>

      <Route path="*" component={ErrorPage} />
    </HashRouter>
  );
}

export default App;
