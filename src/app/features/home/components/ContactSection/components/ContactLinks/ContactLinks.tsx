import CodeSnippet from "../../../../../../core/shared/CodeSnippet/CodeSnippet";
import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./ContactLinks.scss";

// TODO
// Copy & send email buttons
export default function ContactLinks() {
  const { theme } = useTheme();

  return (
    <ul class={`contact-links contact-links--${theme()}`}>
      <CodeSnippet />
    </ul>
  );
}
