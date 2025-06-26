import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";

export default function SkillsGrid() {
  const { theme } = useTheme();

  return (
    <>
      <p
        class={`about-page__paragraph about-page__paragraph--subtitle about-page__paragraph--subtitle--${theme()}`}
      >
        Skills:
      </p>
      <p class={`about-page__paragraph about-page__paragraph--${theme()}`}>
        <a href="https://archlinux.org/">
          <img
            alt="Linux"
            src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
          />
        </a>

        <a href="https://www.docker.com/">
          <img
            alt="Docker"
            src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge"
          />
        </a>

        <a href="https://git-scm.com/">
          <img
            alt="Git"
            src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
          />
        </a>

        <a href="https://neovim.io/">
          <img
            alt="Neovim"
            src="https://img.shields.io/badge/Neovim-57A143?logo=neovim&logoColor=white&style=for-the-badge"
          />
        </a>

        <a href="https://go.dev/">
          <img
            alt="GOlang"
            src="https://img.shields.io/badge/Go-00ADD8?logo=Go&logoColor=white&style=for-the-badge"
          />
        </a>

        <a href="https://www.lua.org/">
          <img
            alt="Lua"
            src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"
          />
        </a>

        <a href="https://dotnet.microsoft.com/">
          <img
            alt=".NET"
            src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"
          />
        </a>

        <a href="https://www.java.com/pt-BR/">
          <img
            alt="Java"
            src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
          />
        </a>

        <a href="https://www.typescriptlang.org/">
          <img
            alt="Typescript"
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
          />
        </a>

        <a href="https://expressjs.com/">
          <img
            alt="Express.js"
            src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
          />
        </a>

        <a href="https://sass-lang.com/">
          <img
            alt="Sass"
            src="https://img.shields.io/badge/Sass-C69?style=for-the-badge&logo=sass&logoColor=fff"
          />
        </a>

        <a href="https://tailwindcss.com/">
          <img
            alt="Tailwind"
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          />
        </a>

        <a href="https://angular.dev/">
          <img
            alt="Angular"
            src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
          />
        </a>

        <a href="https://react.dev/">
          <img
            alt="React"
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          />
        </a>

        <a href="https://solidjs.com/">
          <img
            alt="Solid.js"
            src="https://img.shields.io/badge/Solid.js-2C4F7C?style=for-the-badge&logo=solid&logoColor=white"
          />
        </a>

        <a href="https://www.postgresql.org/">
          <img
            alt="Postgresql"
            src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white"
          />
        </a>

        <a href="https://www.mysql.com/">
          <img
            alt="MYSQL"
            src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
          />
        </a>

        <a href="https://www.mongodb.com/">
          <img
            alt="MongoDB"
            src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
          />
        </a>
      </p>
    </>
  );
}
