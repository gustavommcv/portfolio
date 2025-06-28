import { JSX } from "solid-js";
import "./CustomSection.scss";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import TerminalLine from "./components/TerminalLine/TerminalLine";

export default function CustomSection(props: {
  children: JSX.Element;
  title: string;
  customClass: string;
  command?: string;
  short?: boolean;
}) {
  const { theme } = useTheme();

  const username = "[gustavo@";
  const hostname = "archlinux";
  const path = "~]";
  const prompt = "$";

  return (
    <>
      <h2
        class={`custom-section__title custom-section__title--${theme()} ${props.customClass}`}
      >
        # {props.title}
      </h2>
      <section
        class={`custom-section custom-section--${theme()} ${props.customClass} `}
      >
        {!props.short ? (
          <TerminalLine
            command={props.command || "whoami"}
            username={username}
            hostname={hostname}
            prompt={prompt}
            path={path}
          />
        ) : (
          <TerminalLine command={props.command || "whoami"} prompt={prompt} />
        )}

        {props.children}
      </section>
    </>
  );
}
