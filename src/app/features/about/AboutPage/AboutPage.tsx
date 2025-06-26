// import projects from "./projects";
// import { useLanguage } from "../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../contexts/ThemeContext/ThemeContextProvider";
import AboutSection from "../components/AboutSection/AboutSection";
// import ProjectCard from "../components/ProjectCard/ProjectCard";

import "./AboutPage.scss";

export default function AboutPage() {
  // const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div class={`about-page about-page--${theme()}`}>
      <AboutSection />

      {/*       <div */}
      {/*         class={`about-page__content about-page__content--2 about-page__content--${theme()}`} */}
      {/*       > */}
      {/*         <h2 class={`about-page__title about-page__title--${theme()}`}> */}
      {/*           {language() === "en" */}
      {/*             ? "Some of my projects" */}
      {/*             : "Alguns de meus projetos"} */}
      {/*         </h2> */}
      {/*         <p */}
      {/*           class={`about-page__description about-page__description--${theme()}`} */}
      {/*         > */}
      {/*           {language() === "en" */}
      {/*             ? "I love to create things, and I'm always working on something new! You can view some of my favorite projects below." */}
      {/*             : "Eu amo criar coisas e estou sempre trabalhando em algo novo! Você pode ver alguns dos meus projetos favoritos abaixo."} */}
      {/*         </p> */}
      {/*         <div class="about-page__projects"> */}
      {/*           {projects.map((project) => ( */}
      {/*             <ProjectCard */}
      {/*               link={project.link} */}
      {/*               title={language() === "en" ? project.title.en : project.title.pt} */}
      {/*               description={ */}
      {/*                 language() === "en" */}
      {/*                   ? project.shortDescription.en */}
      {/*                   : project.shortDescription.pt */}
      {/*               } */}
      {/*               image={project.image} */}
      {/*             /> */}
      {/*           ))} */}
      {/*         </div> */}
      {/*       </div> */}
    </div>
  );
}
