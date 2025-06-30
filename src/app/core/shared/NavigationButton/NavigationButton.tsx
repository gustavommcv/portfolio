import { A } from "@solidjs/router";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import "./NavigationButton.scss";

export default function NavigationButton(props: {
  children: string;
  link: string;
}) {
  const { theme } = useTheme();

  return (
    <A
      href={`/${props.link}`}
      class={`navigation-button navigation-button--${theme()}`}
    >
      → {props.children}
    </A>
  );
}
