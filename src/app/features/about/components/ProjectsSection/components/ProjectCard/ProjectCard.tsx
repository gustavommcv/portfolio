import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./ProjectCard.scss";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectProps) {
  const { theme } = useTheme();

  return (
    <div class={`project-card project-card--${theme()}`}>
      <div class="project-card__cover">
        <img src={image} />
      </div>

      <div class="project-card__body">
        <h3 class="project-card__title">{title}</h3>
        <p class="project-card__description">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__link"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
