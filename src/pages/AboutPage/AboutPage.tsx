import Project from "../../components/Project/Project";
import projects from "../../components/Project/Projects";
import { useLanguage } from "../../context/LanguageContextProvider";
import { useTheme } from "../../context/ThemeContextProvider";
import "./AboutPage.scss";
import { aboutTranslations } from "./aboutTranslations";
import doomImage from "../../assets/Imgs/Projects/doom.gif";

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
          <p
            class={`about-page__paragraph about-page__paragraph--subtitle about-page__paragraph--subtitle--${theme()}`}
          >
            Skills:
          </p>
          <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
            <img
              alt="C"
              src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
            />
            <a href="https://dotnet.microsoft.com/">
              <img
                alt="C#"
                src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
              />
            </a>
            <a href="https://www.oracle.com/br/java/technologies/downloads/">
              <img
                alt="Java"
                src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
              />
            </a>
            <img
              alt="JavaScript"
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            />
            <a href="https://www.typescriptlang.org/">
              <img
                alt="Typescript"
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              />
            </a>
            <img
              alt="HTML"
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            />
            <img
              alt="CSS"
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            />
            <a href="https://react.dev/">
              <img
                alt="React"
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              />
            </a>
            <a href="https://tailwindcss.com/">
              <img
                alt="Tailwind"
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              />
            </a>
            <a href="https://www.mysql.com/">
              <img
                alt="MYSQL"
                src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              />
            </a>
            <a href="https://mariadb.org/">
              <img
                alt="MARIADB"
                src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
              />
            </a>
            <a href="https://dotnet.microsoft.com/">
              <img
                alt=".NET"
                src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"
              />
            </a>
            <a href="https://pages.github.com/">
              <img
                alt="GitHub Pages"
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
              />
            </a>
            <a href="https://git-scm.com/">
              <img
                alt="Git"
                src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
              />
            </a>
            <a href="https://www.postman.com/">
              <img
                alt="Postman"
                src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white"
              />
            </a>
            <a href="https://code.visualstudio.com/">
              <img
                alt="Visual Studio Code"
                src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
              />
            </a>
            <a href="https://nodejs.org/">
              <img
                alt="Node.js"
                src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              />
            </a>
            <a href="https://expressjs.com/">
              <img
                alt="Express.js"
                src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
              />
            </a>
            <a href="https://www.mongodb.com/">
              <img
                alt="MongoDB"
                src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
              />
            </a>
            <a href="https://solidjs.com/">
              <img
                alt="Solid.js"
                src="https://img.shields.io/badge/Solid.js-2C4F7C?style=for-the-badge&logo=solid&logoColor=white"
              />
            </a>
          </p>
        </div>
        <div class="about-page__image">
          <img src="https://picsum.photos/500/600" alt="" />
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
        <p class="about-page__description">
          {language() === "en"
            ? "I love to create things, and I'm always working on something new! You can view some of my favorite projects below."
            : "Eu amo criar coisas e estou sempre trabalhando em algo novo! Você pode ver alguns dos meus projetos favoritos abaixo."}
        </p>
        <div class="about-page__projects">
          {projects.map((project) => (
            <Project
              customClass=""
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
          <Project
            customClass="doom"
            title="See you in hell"
            description=""
            image={doomImage}
            link="/Portfolio/jfkadskkcbnircnijsfffffffffffffff728h"
          ></Project>
        </div>
      </div>
    </div>
  );
}
