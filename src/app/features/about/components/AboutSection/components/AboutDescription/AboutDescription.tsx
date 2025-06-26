import aboutDescTranslatiosn from "./aboutDescTranslations";

import "./AboutDescription.scss";
import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";
import SkillsList from "../SkillsList/SkillsList";

export default function AboutDescription() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div class="about-description">
      <h1
        class={`about-description__title about-description__title--${theme()}`}
      >
        {language() === "en" ? "About me" : "Sobre mim"}
      </h1>

      <p
        class={`about-description__paragraph about-description__paragraph--${theme()}`}
      >
        {aboutDescTranslatiosn[language()].introduction}
      </p>

      <p
        class={`about-description__paragraph about-description__paragraph--${theme()}`}
      >
        {aboutDescTranslatiosn[language()].experience}
      </p>

      <p
        class={`about-description__paragraph about-description__paragraph--${theme()}`}
      >
        {aboutDescTranslatiosn[language()].approach}
      </p>

      <p
        class={`about-description__paragraph about-description__paragraph--${theme()}`}
      >
        {aboutDescTranslatiosn[language()].focus}
      </p>

      <SkillsList />
    </div>
  );
}
