import CustomSection from "../../../../core/layout/Section/CustomSection";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import projectsSectionTranslations from "./projectsSectionTranslations";

import "./ProjectsSection.scss";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = () => projectsSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="projects-section"
      command="/projects.sh"
      error={true}
      short={true}
    >
      {/* TODO */}
      {/* Error component */}
      <div class={`not-found not-found--${theme()}`}>
        <h2 class={"not-found__title"}>{t().notFound.title}</h2>
        <h3 class={"not-found__subtitle"}>{t().notFound.subtitle}</h3>
        <p class={"not-found__description"}>{t().notFound.description}</p>
      </div>
    </CustomSection>
  );
}
