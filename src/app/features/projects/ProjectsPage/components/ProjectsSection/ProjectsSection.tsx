import projectsSectionTranslations from "./projectsSectionTranslations";

import "./ProjectsSection.scss";
import { useLanguage } from "../../../../contexts/LanguageContext/LanguageContextProvider";
import CustomSection from "../../../../../core/layout/Section/CustomSection";
import { A } from "@solidjs/router";
import { useTheme } from "../../../../contexts/ThemeContext/ThemeContextProvider";
import { useProjects } from "../../../../../core/shared/useProjects";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const projects = useProjects();

  const t = () => projectsSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="projects-section"
      command="/projects.sh"
      short={true}
    >
      <div class="projects-container">
        {projects().map((project) =>
          project.nav ? (
            <A
              href={project.nav}
              class={`project-card project-card--${theme()}`}
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                class="project-card__image"
              />
              <div class="project-card__container">
                <h3 class="project-card__title">{project.title}</h3>
                <p class="project-card__description">{project.description}</p>
              </div>
            </A>
          ) : (
            <a
              href={project.link}
              class={`project-card project-card--${theme()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                class="project-card__image"
              />
              <div class="project-card__container">
                <h3 class="project-card__title">{project.title}</h3>
                <p class="project-card__description">{project.description}</p>
              </div>
            </a>
          ),
        )}
      </div>
    </CustomSection>
  );
}
