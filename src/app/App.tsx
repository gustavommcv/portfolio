import { HashRouter, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import Template from "./Template/Template";
import HomePage from "./features/home/HomePage/HomePage";

function App() {
  return (
    <HashRouter root={Template}>
      <Route path="/" component={HomePage}></Route>
      <Route
        path="/about"
        component={lazy(() => import("./features/about/AboutPage/AboutPage"))}
      ></Route>
    </HashRouter>
  );
}

export default App;
