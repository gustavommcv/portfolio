import { useProjects } from "./useProjects";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import "./ProjectsSection.scss";
import { useLanguage } from "../../features/contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../features/contexts/ThemeContext/ThemeContextProvider";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const projects = useProjects();

  return (
    <section class={`projects-section projects-section--${theme()}`}>
      <h2 class={`projects-section__title projects-section__title--${theme()}`}>
        {language() === "en"
          ? "Some of my projects"
          : "Alguns de meus projetos"}
      </h2>

      <p
        class={`projects-section__paragraph projects-section__paragraph--${theme()}`}
      >
        {language() === "en"
          ? "I love to create things, and I'm always working on something new! You can view some of my favorite projects below."
          : "Eu amo criar coisas e estou sempre trabalhando em algo novo! Você pode ver alguns dos meus projetos favoritos abaixo."}
      </p>

      <div class="projects-section__projects">
        {projects().map((project) => (
          <ProjectCard
            title={project.title}
            description={project.shortDescription}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
