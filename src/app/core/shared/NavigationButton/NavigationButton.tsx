import { A } from "@solidjs/router";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";

import "./NavigationButton.scss";

export default function NavigationButton(props: {
  children: string;
  link: string;
}) {
  const { theme } = useTheme();

  const isAnchorLink = props.link.startsWith("#");

  if (isAnchorLink) {
    return (
      <a
        href={props.link}
        class={`navigation-button navigation-button--${theme()}`}
      >
        → {props.children}
      </a>
    );
  }

  return (
    <A
      href={`/${props.link}`}
      class={`navigation-button navigation-button--${theme()}`}
    >
      → {props.children}
    </A>
  );
}
