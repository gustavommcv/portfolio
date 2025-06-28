import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./ContactLinks.scss";

// TODO
// Copy & send email buttons
export default function ContactLinks() {
  const { theme } = useTheme();

  return (
    <ul class={`contact-links contact-links--${theme()}`}>
      <li>monnerat.gustavo@outlook.com</li>
      <li>+55 41 991892192</li>
    </ul>
  );
}
