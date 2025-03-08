import { Route, Router } from "@solidjs/router";
import HomePage from "./pages/HomePage/HomePage";
import { lazy } from "solid-js";
import Layout from "./pages/Shared/Layout";
import DoomGame from "./components/DOOM/DoomGame";

function App() {
  return (
    <Router root={Layout} base="/Portfolio">
      <Route path="/" component={HomePage}></Route>
      <Route
        path="/about"
        component={lazy(() => import("./pages/AboutPage/AboutPage"))}
      ></Route>
      <Route
        path="/jfkadskkcbnircnijsfffffffffffffff728h"
        component={DoomGame}
      ></Route>
    </Router>
  );
}

export default App;
