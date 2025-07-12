import { Title } from "@solidjs/meta";
import CustomSection from "../../../core/layout/Section/CustomSection";
import gomodoroGif from "../../../../assets/gifs/projects/gomodoro.gif";

import "./Gomodoro.scss";
import { useTheme } from "../../contexts/ThemeContext/ThemeContextProvider";
import { useLanguage } from "../../contexts/LanguageContext/LanguageContextProvider";
import gomodoroProjectsTranslations from "./gomodoroTranslations";

export default function Gomodoro() {
  const { theme } = useTheme();

  const { language } = useLanguage();

  const t = () => gomodoroProjectsTranslations[language()];

  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - Gomodoro Page</Title>

      <div class="gomodoro-page">
        <CustomSection
          title="Gomodoro"
          id="gomodoro"
          customClass="gomodoro-section"
          command="gomodoro"
          short={true}
          fade={false}
        >
          <div class="gomodoro-page__info">
            <img class="gomodoro-page__thumbnail" src={gomodoroGif} />

            <div class="gomodoro-page__description">
              <h2 class={`${theme()}`}>Gomodoro</h2>

              <p class={`${theme()}`}>{t().description}</p>

              <a
                class={`gomodoro-page__link gomodoro-page__link--${theme()}`}
                target="_blank"
                href="https://github.com/gustavommcv/gomodoro"
              >
                Repository
              </a>
            </div>
          </div>
        </CustomSection>
      </div>
    </>
  );
}
