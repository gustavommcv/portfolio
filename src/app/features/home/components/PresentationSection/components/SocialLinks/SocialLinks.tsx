import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./SocialLinks.scss";

// TODO
// Mix with ContactLinks component
export default function SocialLinks() {
  const { theme } = useTheme();

  return (
    <ul class={`social-links social-links--${theme()}`}>
      <li>
        <a
          class={`social-links__link social-links__link--${theme()}`}
          target="_blank"
          href="https://www.linkedin.com/in/gustavommcv/"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          class={`social-links__link social-links__link--${theme()}`}
          target="_blank"
          href="https://github.com/gustavommcv"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
