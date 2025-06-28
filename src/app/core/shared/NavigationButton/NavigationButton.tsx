import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import "./NavigationButton.scss";

export default function NavigationButton(props: { children: string }) {
  const { theme } = useTheme();

  return (
    <button class={`navigation-button navigation-button--${theme()}`}>
      {" "}
      → {props.children}
    </button>
  );
}
