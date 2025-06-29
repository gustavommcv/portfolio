import { For } from "solid-js";
import CustomSection from "../../../../core/layout/Section/CustomSection";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";
import "./EducationSection.scss";
import educationSectionTranslations from "./educationSectionTranslations";
import { useEducationData } from "./useEducationData";
export default function EducationSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const educations = useEducationData();

  const t = () => educationSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="education-section"
      command="/education.sh"
      short={true}
      fade={true}
    >
      <div
        class={`contact-section__warning contact-section__warning--${theme()}`}
      >
        {t().warning}
      </div>
      <div class="education-container">
        <For each={educations()}>
          {(education, index) => (
            <>
              <div class="education-container__item">
                <h3
                  class={`education-container__title education-container__title--${theme()}`}
                >
                  {education.title}
                </h3>
                <p
                  class={`education-container__info education-container__info--${theme()}`}
                >
                  {education.type}
                </p>
                <p
                  class={`education-container__info education-container__info--${theme()}`}
                >
                  {education.institution}
                </p>
                <p
                  class={`education-container__info education-container__info--${theme()}`}
                >
                  {education.period}
                </p>
              </div>
              {index() < educations().length - 1 && (
                <div
                  class={`education-container__split education-container__split--${theme()}`}
                >
                  ↓
                </div>
              )}
            </>
          )}
        </For>
      </div>{" "}
    </CustomSection>
  );
}
