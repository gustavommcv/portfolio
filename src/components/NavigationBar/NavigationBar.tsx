import { A } from "@solidjs/router";
import "./NavigationBar.scss";
import ThemeButton from "../ThemeButton/ThemeButton";
import LanguageButton from "../LanguageButton/LanguageButton";
import { useLanguage } from "../../context/LanguageContextProvider";
import { navigationBarTranslations } from "./navigationBarTranslations";
import { useTheme } from "../../context/ThemeContextProvider";
import { createSignal } from "solid-js";

export default function NavigationBar() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen());
  };

  return (
    <nav class={`navigation-bar navigation-bar--${theme()}`}>
      <button class="hamburger" onClick={toggleMenu}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <div class={`${theme()} links ${isMenuOpen() ? "open" : ""}`}>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/"
          end
        >
          {language() === "en"
            ? navigationBarTranslations.en.home
            : navigationBarTranslations.pt.home}
        </A>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/about"
        >
          {language() === "en"
            ? navigationBarTranslations.en.about
            : navigationBarTranslations.pt.about}
        </A>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/projects"
        >
          {language() === "en"
            ? navigationBarTranslations.en.projects
            : navigationBarTranslations.pt.projects}
        </A>
      </div>

      <div class={`${theme()} settings ${isMenuOpen() ? "open" : ""}`}>
        <LanguageButton />
        <ThemeButton />
      </div>
    </nav>
  );
}
