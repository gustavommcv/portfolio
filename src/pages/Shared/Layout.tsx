import { ParentComponent } from "solid-js";
import "./Layout.scss";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useTheme } from "../../context/ThemeContextProvider";

const Layout: ParentComponent = (props) => {
  const { theme } = useTheme();

  return (
    <div class={`page-layout page-layout--${theme()}`}>
      <NavigationBar />
      {props.children}
    </div>
  );
};

export default Layout;
