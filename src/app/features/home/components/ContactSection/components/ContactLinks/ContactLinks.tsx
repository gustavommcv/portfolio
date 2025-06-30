import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./ContactLinks.scss";

// TODO
// Copy & send email buttons
// Copy number button
export default function ContactLinks() {
  const { theme } = useTheme();

  return (
    <ul class={`contact-links contact-links--${theme()}`}>
      <li>
        <span class={`contact-links__span contact-links__span--${theme()}`}>
          Email:
        </span>{" "}
        monnerat.gustavo@outlook.com
      </li>
      <li>
        <span class={`contact-links__span contact-links__span--${theme()}`}>
          Phone:
        </span>{" "}
        +55 (41)99189-2192
      </li>
      <li>
        <span class={`contact-links__span contact-links__span--${theme()}`}>
          Discord:
        </span>{" "}
        gustamonnerat
      </li>
    </ul>
  );
}
