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
    <div class="navigation-bar__container">
      <nav class={`navigation-bar navigation-bar--${theme()}`}>
        <button class={`hamburger hamburger--${theme()}`} onClick={toggleMenu}>
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

        <div
          class={`navigation-bar__menu navigation-bar__menu--${theme()} ${
            isMenuOpen() ? "open" : ""
          }`}
        >
          <div class="navigation-bar__links">
            <A
              activeClass="navigation-bar__link--active"
              inactiveClass="navigation-bar__link"
              href="/"
              end
              onClick={toggleMenu}
            >
              {language() === "en"
                ? navigationBarTranslations.en.home
                : navigationBarTranslations.pt.home}
            </A>
            <A
              activeClass="navigation-bar__link--active"
              inactiveClass="navigation-bar__link"
              href="/about"
              onClick={toggleMenu}
            >
              {language() === "en"
                ? navigationBarTranslations.en.about
                : navigationBarTranslations.pt.about}
            </A>
            {/* <A
              activeClass="navigation-bar__link--active"
              inactiveClass="navigation-bar__link"
              href="/projects"
              onClick={toggleMenu}
            >
              {language() === "en"
                ? navigationBarTranslations.en.projects
                : navigationBarTranslations.pt.projects}
            </A> */}
          </div>

          <div class="navigation-bar__settings">
            <LanguageButton />
            <ThemeButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
