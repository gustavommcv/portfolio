import { A, useLocation } from "@solidjs/router";
import { createSignal, createEffect, onCleanup, onMount } from "solid-js";

import { navigationBarTranslations } from "./navigationBarTranslations";
import { useLanguage } from "../../../features/contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";

import ThemeButton from "./components/ThemeButton/ThemeButton";
import LanguageButton from "./components/LanguageButton/LanguageButton";

import "./NavigationBar.scss";

export default function NavigationBar() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => {
    const isOpen = !isMenuOpen();
    setIsMenuOpen(isOpen);

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 890) {
      setIsMenuOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  createEffect(() => {
    location.pathname;
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  });

  onMount(() => {
    window.addEventListener("resize", handleResize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
    document.body.classList.remove("overflow-hidden");
  });

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
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
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
