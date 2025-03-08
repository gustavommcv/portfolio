import { ParentComponent, createEffect } from "solid-js";
import "./Layout.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useTheme } from "../../context/ThemeContextProvider";
import FloatingIcons from "../../components/FloatingIcons/FloatingIcons";
import { useLocation } from "@solidjs/router";

const Layout: ParentComponent = (props) => {
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
      <div class="page-layout__children">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
