import "./TerminalLine.scss";

interface TerminalLineProps {
  username?: string;
  hostname?: string;
  path?: string;
  prompt?: string;
  command?: string;
}

export default function TerminalLine(props: TerminalLineProps) {
  const username = props.username;
  const hostname = props.hostname;
  const path = props.path;
  const prompt = props.prompt;
  const command = props.command;

  return (
    <div class="terminal-line">
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
      <span class="command">{command}</span>
    </div>
  );
}
