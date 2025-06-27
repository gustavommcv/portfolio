import "./TerminalLine.scss";

interface TerminalLineProps {
  username?: string;
  hostname?: string;
  path?: string;
  prompt?: string;
  command?: string;
}

export default function TerminalLine(props: TerminalLineProps) {
  const username = () => props.username || "[gustavo";
  const hostname = () => props.hostname || "archlinux";
  const path = () => props.path || "~]";
  const prompt = () => props.prompt || "$";
  const command = () => props.command || "whoami";

  return (
    <div class="terminal-line">
      <span class="user-host">
        {username()}@{hostname()}
      </span>
      <div>
        <span class="path">{path()}</span>
        <span class="prompt">{prompt()}</span>
      </div>
      <span class="command">{command()}</span>
    </div>
  );
}
