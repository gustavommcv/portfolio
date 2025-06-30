import CustomSection from "../../../../core/layout/Section/CustomSection";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import projectsSectionTranslations from "./projectsSectionTranslations";

import "./ProjectsSection.scss";

export default function ProjectsSection() {
  const { language } = useLanguage();

  const t = () => projectsSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="projects-section"
      command="/projects.sh"
      short={true}
    >
      <p>Not implemented</p>
    </CustomSection>
  );
}
