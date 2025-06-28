import { ParentComponent } from "solid-js";
import { useTheme } from "../features/contexts/ThemeContext/ThemeContextProvider";
import NavigationBar from "../core/layout/NavigationBar/NavigationBar";

import "./Template.scss";

const Template: ParentComponent = (props) => {
  const { theme } = useTheme();

  return (
    <div class={`page-layout page-layout--${theme()}`}>
      <header>
        <NavigationBar />
      </header>

      {/* <FloatingIcons /> */}

      <div class="page-layout__children">{props.children}</div>
    </div>
  );
};

export default Template;
