import { useTheme } from "../../../../../features/contexts/ThemeContext/ThemeContextProvider";
import "./TerminalLine.scss";

interface TerminalLineProps {
  username?: string;
  hostname?: string;
  path?: string;
  prompt?: string;
  command?: string;
  animated?: boolean;
  error?: boolean;
}

export default function TerminalLine(props: TerminalLineProps) {
  const username = props.username;
  const hostname = props.hostname;
  const path = props.path;
  const prompt = props.prompt;
  const command = props.command;

  const { theme } = useTheme();

  return (
    <div
      class={`terminal-line terminal-line--${theme()} ${
        props.animated ? `typing-animation typing-animation--${theme()}` : ""
      }`}
    >
      {username && (
        <span class="user-host">
          {username}
          {hostname}
        </span>
      )}
      <div>
        {path && <span class="path">{path}</span>}
        <span class="prompt">{prompt}</span>
      </div>
      <span
        class={`command ${props.error === true ? "command--error" : `command--${theme()}`}`}
      >
        {command}
      </span>
    </div>
  );
}
