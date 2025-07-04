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
  fade?: boolean;
  typingAnimation?: boolean;
  error?: boolean;
  id?: string;
}) {
  const { theme } = useTheme();

  const username = "[guga@";
  const hostname = "arch";
  const path = "~]";
  const prompt = "$";

  return (
    <>
      <h2
        class={`custom-section__title custom-section__title--${theme()} ${props.customClass} ${props.fade === true ? "fade" : ""}`}
      >
        # {props.title}
      </h2>
      <section
        id={props.id}
        class={`custom-section custom-section--${theme()} ${props.customClass} ${props.fade === true ? "fade" : ""}`}
      >
        {!props.short ? (
          <TerminalLine
            command={props.command || "whoami"}
            username={username}
            hostname={hostname}
            prompt={prompt}
            path={path}
            animated={props.typingAnimation}
            error={props.error}
          />
        ) : (
          <TerminalLine
            command={props.command || "whoami"}
            path="~"
            prompt={prompt}
            animated={props.typingAnimation}
            error={props.error}
          />
        )}

        {props.children}
      </section>
    </>
  );
}
