import { ParentComponent } from "solid-js";
import "./Layout.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useTheme } from "../../context/ThemeContextProvider";
import FloatingIcons from "../../components/FloatingIcons/FloatingIcons";

const Layout: ParentComponent = (props) => {
  const { theme } = useTheme();

  return (
    <div class={`page-layout page-layout--${theme()}`}>
      <NavigationBar />
      <FloatingIcons />
      {props.children}
    </div>
  );
};

export default Layout;
