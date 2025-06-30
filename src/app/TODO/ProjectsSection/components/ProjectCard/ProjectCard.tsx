import { useTheme } from "../../../../features/contexts/ThemeContext/ThemeContextProvider";
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
    <div class={`project-card-old project-card-old--${theme()}`}>
      <div class="project-card-old__cover">
        <img src={image} />
      </div>

      <div class="project-card-old__body">
        <h3 class="project-card-old__title">{title}</h3>
        <p class="project-card-old__description">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="project-card-old__link"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
