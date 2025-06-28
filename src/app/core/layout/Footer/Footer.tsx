import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import "./Footer.scss";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer class={`footer footer--${theme()} fade`} role="contentinfo">
      <div class="footer__content">
        <p class="footer__copyright">
          &copy; <span class="footer__year">2025</span> Made with{" "}
          <span class="footer__heart" aria-label="love">
            ♥
          </span>{" "}
          by <span class="footer__author">Gustavo Monnerat</span>
        </p>

        <p class="footer__theme-credit">
          This site was styled with the{" "}
          <a
            href="https://github.com/EdenEast/nightfox.nvim"
            class={`footer__link footer__link--${theme()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            NightFox
          </a>{" "}
          theme
        </p>
      </div>
    </footer>
  );
}
