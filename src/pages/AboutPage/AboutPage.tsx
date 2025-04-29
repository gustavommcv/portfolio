import Project from "../../components/Project/Project";
import projects from "./Projects";
import { useLanguage } from "../../context/LanguageContextProvider";
import { useTheme } from "../../context/ThemeContextProvider";
import "./AboutPage.scss";
import { aboutTranslations } from "./aboutTranslations";
import me from "../../assets/Imgs/me.jpg";
import SkillsGrid from "../../components/SkillsGrid/SkillsGrid";

export default function AboutPage() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div class={`about-page about-page--${theme()}`}>
      <div class={`about-page__content about-page__content--${theme()}`}>
        <div class="about-page__description">
          <h1 class={`about-page__title about-page__title--${theme()}`}>
            {language() === "en" ? "About me" : "Sobre mim"}
          </h1>
          <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
            {aboutTranslations[language()].introduction}
          </p>
          <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
            {aboutTranslations[language()].experience}
          </p>
          <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
            {aboutTranslations[language()].approach}
          </p>
          <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
            {aboutTranslations[language()].focus}
          </p>
          <SkillsGrid></SkillsGrid>
        </div>
        <div class="about-page__image">
          <img src={me} alt="" />
        </div>
      </div>

      <div
        class={`about-page__content about-page__content--2 about-page__content--${theme()}`}
      >
        <h2 class={`about-page__title about-page__title--${theme()}`}>
          {language() === "en"
            ? "Some of my projects"
            : "Alguns de meus projetos"}
        </h2>
        <p
          class={`about-page__description about-page__description--${theme()}`}
        >
          {language() === "en"
            ? "I love to create things, and I'm always working on something new! You can view some of my favorite projects below."
            : "Eu amo criar coisas e estou sempre trabalhando em algo novo! Você pode ver alguns dos meus projetos favoritos abaixo."}
        </p>
        <div class="about-page__projects">
          {projects.map((project) => (
            <Project
              link={project.link}
              title={language() === "en" ? project.title.en : project.title.pt}
              description={
                language() === "en"
                  ? project.shortDescription.en
                  : project.shortDescription.pt
              }
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
