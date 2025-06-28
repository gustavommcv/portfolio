import { JSX } from "solid-js";
import "./CustomSection.scss";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import TerminalLine from "./components/TerminalLine/TerminalLine";

export default function CustomSection(props: {
  children: JSX.Element;
  title: string;
  customClass: string;
}) {
  const { theme } = useTheme();

  return (
    <>
      <h2 class={`custom-section__title custom-section__title--${theme()}`}>
        # {props.title}
      </h2>
      <section
        class={`custom-section custom-section--${theme()} ${props.customClass} `}
      >
        <TerminalLine command="whoami" />
        {props.children}
      </section>
    </>
  );
}
