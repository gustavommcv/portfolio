import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./MiniAbout.scss";
import miniAboutTranslations from "./miniAboutTranslations";

export default function MiniAbout() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <p class={`mini-about mini-about--${theme()}`}>
      {language() === "pt"
        ? miniAboutTranslations.pt
        : miniAboutTranslations.en}
    </p>
  );
}
