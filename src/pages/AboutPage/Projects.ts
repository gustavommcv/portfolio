import portifolioImage from "../../assets/Imgs/Projects/Portfolio.png";
import airlockrestImage from "../../assets/Imgs/Projects/AirlockRest.png";
import booksAppImage from "../../assets/Imgs/Projects/BooksApp.png";
import tictactoeImage from "../../assets/Imgs/Projects/TicTacToe.png";
import todoImage from "../../assets/Imgs/Projects/todo.png";
import itauImage from "../../assets/Imgs/Projects/Itaú.jpg";
import chMod from "../../assets/Imgs/Projects/chmodCalc.png";
import Desafio1XP from "../../assets/Imgs/Projects/DesafioBootcamp1-xp.png";

type Project = {
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  shortDescription: {
    en: string;
    pt: string;
  };
  image: string;
  technologies: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: {
      en: "Bootcamp challenge - XP",
      pt: "Desafio do bootcamp - XP",
    },
    description: {
      en: "Challenge of the postgraduate bootcamp in software architecture and solutions (Api restful)",
      pt: "Desafio do bootcamp da pós-graduação em arquitetura e soluções de software (Api restful)",
    },
    shortDescription: {
      en: "Challenge of the postgraduate bootcamp in software architecture and solutions (Api restful)",
      pt: "Desafio do bootcamp da pós-graduação em arquitetura e soluções de software (Api restful)",
    },
    image: Desafio1XP,
    technologies: ["Docker", "Node.js", "Express", "MariaDB"],
    link: "https://github.com/gustavommcv/Desafio-Bootcamp-Arquitetura-de-Software",
  },
  {
    title: {
      en: "Itaú Unibanco - Challenge",
      pt: "Itaú Unibanco - Desafio",
    },
    description: {
      en: "REST API that receives Transactions and returns Statistics on those transactions. ",
      pt: "API REST que recebe Transações e retorna Estatísticas sob essas transações. ",
    },
    shortDescription: {
      en: "REST API that receives Transactions and returns Statistics on those transactions. ",
      pt: "API REST que recebe Transações e retorna Estatísticas sob essas transações. ",
    },
    image: itauImage,
    technologies: ["Java", "Spring", "JUnit"],
    link: "https://github.com/gustavommcv/Desafio-API-Itau",
  },
  {
    title: {
      en: "BooksApp",
      pt: "BooksApp",
    },
    description: {
      en: "A book management application that allows users to browse a catalog, leave ratings, and receive personalized recommendations based on their reviews.",
      pt: "Um aplicativo de gerenciamento de livros que permite aos usuários navegar por um catálogo, deixar avaliações e receber recomendações personalizadas com base em suas avaliações.",
    },
    shortDescription: {
      en: "A book management app with personalized recommendations.",
      pt: "Um aplicativo de gerenciamento de livros com recomendações personalizadas.",
    },
    image: booksAppImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/gustavommcv/BooksApp_frontend",
  },
  {
    title: {
      en: "Airlock REST",
      pt: "Airlock REST",
    },
    description: {
      en: "A clone of an API for a fictitious website, refactored to follow Clean Architecture principles, as part of a crash course on Apollo Server and GraphQL.",
      pt: "Um clone de uma API para um site fictício, refatorado para seguir os princípios da Clean Architecture, como parte de um curso intensivo sobre Apollo Server e GraphQL.",
    },
    shortDescription: {
      en: "A REST API clone following Clean Architecture.",
      pt: "Um clone de API REST seguindo Clean Architecture.",
    },
    image: airlockrestImage,
    technologies: [
      "Apollo Server",
      "GraphQL",
      "TypeScript",
      "Clean Architecture",
    ],
    link: "https://github.com/gustavommcv/AirlockRest",
  },
  {
    title: {
      en: "Chmod Calculator",
      pt: "Chmod Calculator",
    },
    description: {
      en: "Simple chmod calculator using only js, html & css ",
      pt: "Calculadora chmod simples usando apenas js, html & css",
    },
    shortDescription: {
      en: "Simple chmod calculator using only js, html & css ",
      pt: "Calculadora chmod simples usando apenas js, html & css",
    },
    image: chMod,
    technologies: ["JS", "HTML", "CSS"],
    link: "https://github.com/gustavommcv/chmod_calculator",
  },
  {
    title: {
      en: "Portfolio",
      pt: "Portfólio",
    },
    description: {
      en: "My personal portfolio website built with Solid.js to showcase my projects and skills.",
      pt: "Meu site de portfólio pessoal construído com Solid.js para exibir meus projetos e habilidades.",
    },
    shortDescription: {
      en: "The page you are currently browsing",
      pt: "A página em que está navegando neste momento",
    },
    image: portifolioImage,
    technologies: ["Solid.js", "TypeScript", "SCSS"],
    link: "https://github.com/gustavommcv/Portfolio",
  },
  {
    title: {
      en: "Tic-Tac-Toe",
      pt: "Jogo da Velha",
    },
    description: {
      en: "A simple tic-tac-toe game implemented using the minimax algorithm in C#.",
      pt: "Um simples jogo da velha implementado usando o algoritmo minimax em C#.",
    },
    shortDescription: {
      en: "A classic tic-tac-toe game with AI.",
      pt: "Um clássico jogo da velha com IA.",
    },
    image: tictactoeImage,
    technologies: ["C#", "Minimax Algorithm"],
    link: "https://github.com/gustavommcv/TicTacToe",
  },
  {
    title: {
      en: "Todo List",
      pt: "Lista de Tarefas",
    },
    description: {
      en: "A simple task management project with a Node.js back-end and a React front-end.",
      pt: "Um projeto simples de gerenciamento de tarefas com back-end em Node.js e front-end em React.",
    },
    shortDescription: {
      en: "A simple task management app.",
      pt: "Um aplicativo simples de gerenciamento de tarefas.",
    },
    image: todoImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/gustavommcv/to-do-app-main",
  },
];

export default projects;
