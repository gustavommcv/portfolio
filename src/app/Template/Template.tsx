import { ParentComponent } from "solid-js";
import { useTheme } from "../features/contexts/ThemeContext/ThemeContextProvider";
import NavigationBar from "../core/layout/NavigationBar/NavigationBar";

import "./Template.scss";
// import Footer from "../core/layout/Footer/Footer";

// TODO
// Not found page
const Template: ParentComponent = (props) => {
  const { theme } = useTheme();

  return (
    <div class={`page-layout page-layout--${theme()}`}>
      <header>
        <NavigationBar />
      </header>

      <div class="page-layout__children">{props.children}</div>

      {/* <Footer /> */}
    </div>
  );
};

export default Template;
