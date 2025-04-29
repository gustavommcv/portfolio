import { HashRouter, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage/HomePage";
import { lazy } from "solid-js";
import Layout from "./pages/Shared/Layout";

function App() {
  return (
    <HashRouter root={Layout}>
      <Route path="/" component={HomePage}></Route>
      <Route
        path="/about"
        component={lazy(() => import("./pages/AboutPage/AboutPage"))}
      ></Route>
    </HashRouter>
  );
}

export default App;
