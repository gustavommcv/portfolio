import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./FeaturedProjectsContainer.scss";
import { useFeaturedProjects } from "./useFeaturedProjects";

export default function FeaturedProjectsContainer() {
  const projects = useFeaturedProjects();
  const { theme } = useTheme();

  return (
    <div class="projects-container">
      {projects().map((project) => (
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
      ))}
    </div>
  );
}
