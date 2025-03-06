import { Route, Router } from "@solidjs/router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { lazy } from "solid-js";
import Layout from "./pages/Shared/Layout";

function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/about" component={lazy(() => import("./pages/AboutPage/AboutPage"))}></Route>
    </Router>
  );
}

export default App;
