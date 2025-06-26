import { ParentComponent } from "solid-js";
import { useTheme } from "../features/contexts/ThemeContext/ThemeContextProvider";
import NavigationBar from "../core/layout/Header/components/NavigationBar/NavigationBar";
import FloatingIcons from "../core/shared/FloatingIcons/FloatingIcons";

import "./Template.scss";

const Template: ParentComponent = (props) => {
  const { theme } = useTheme();

  return (
    <div class={`page-layout page-layout--${theme()}`}>
      <NavigationBar />
      <FloatingIcons />
      <div class="page-layout__children">{props.children}</div>
    </div>
  );
};

export default Template;
