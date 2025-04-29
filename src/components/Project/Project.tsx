import { useTheme } from "../../context/ThemeContextProvider";
import "./Project.scss";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string | undefined;
};

export default function Project({
  title,
  description,
  image,
  link,
}: ProjectProps) {
  const { theme } = useTheme();

  return (
    <a target="blank" href={link} class={`project project--${theme()}`}>
      <img src={image} alt="" class="project__image" />
      <div>
        <h2 class="project__title">{title}</h2>
        <p class="project__description">{description}</p>
      </div>
    </a>
  );
}
