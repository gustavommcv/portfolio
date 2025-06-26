import { ParentComponent, createEffect } from "solid-js";
import { useLocation } from "@solidjs/router";
import { useTheme } from "../features/contexts/ThemeContext/ThemeContextProvider";
import NavigationBar from "../core/layout/Header/components/NavigationBar/NavigationBar";
import FloatingIcons from "../core/shared/FloatingIcons/FloatingIcons";

import "./Template.scss";

const Template: ParentComponent = (props) => {
  const { theme } = useTheme();

  const location = useLocation();

  createEffect(() => {
    if (location.pathname === "/jfkadskkcbnircnijsfffffffffffffff728h") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <div class={`page-layout page-layout--${theme()}`}>
      <NavigationBar />
      <FloatingIcons />
      <div class="page-layout__children">{props.children}</div>
    </div>
  );
};

export default Template;
