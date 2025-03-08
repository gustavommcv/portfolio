import "./Project.scss";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  link: string | undefined;
  customClass: string | undefined;
};

export default function Project({
  title,
  description,
  image,
  link,
  customClass,
}: ProjectProps) {
  return (
    <a target={customClass != "doom" ? "blank" : ""} href={link} class={`project ${customClass}`}>
      <img src={image} alt="" class="project__image" />
      <div>
        <h2 class="project__title">{title}</h2>
        <p class="project__description">{description}</p>
      </div>
    </a>
  );
}
