import minimalNeovim from "../../../assets/images/projects/minimal-neovim.webp";
import gomodoro from "../../../assets/images/projects/gomodoro.webp";
import chMod from "../../../assets/images/projects/chmod-calculator.webp";
import signoTech from "../../../assets/images/projects/signo-tech.webp";
import portfolioImage from "../../../assets/images/projects/portfolio.webp";
import airlockrestImage from "../../../assets/images/projects/airlock-rest.webp";
import booksAppImage from "../../../assets/images/projects/books-app.webp";
import tictactoeImage from "../../../assets/images/projects/tic-tac-toe.webp";
import todoImage from "../../../assets/images/projects/todo.webp";
import itauImage from "../../../assets/images/projects/itau.webp";
import desafio1XP from "../../../assets/images/projects/desafio-bootcamp-1-xp.webp";

type Project = {
  title: {
    en: string;
    pt: string;
  };

  description: {
    en: string;
    pt: string;
  };

  image: string;
  link?: string;
  nav?: string;
};

const projectsData: Project[] = [
  {
    title: {
      en: "Minimal Neovim",
      pt: "Minimal Neovim",
    },

    description: {
      en: "A modern, modular Neovim configuration optimized for productivity and aesthetics. Built with Lua.",
      pt: "Uma configuração moderna e modular do Neovim optimizada para produtividade e estética. Construído com Lua.",
    },

    image: minimalNeovim,
    link: "https://github.com/gustavommcv/minimal-neovim",
  },

  {
    title: {
      en: "Gomodoro",
      pt: "Gomodoro",
    },
    description: {
      en: "A lightning-fast CLI Pomodoro timer for developers, built in Go.",
      pt: "Um cronómetro CLI Pomodoro extremamente rápido para programadores, escrito em Go.",
    },
    image: gomodoro,
    link: "https://github.com/gustavommcv/gomodoro",
    nav: "/projects/gomodoro",
  },

  {
    title: {
      en: "Voting System",
      pt: "Sistema de Votação",
    },
    description: {
      en: "Competence assessment - Signo Tech",
      pt: "Avaliação de competência - Signo Tech",
    },
    image: signoTech,
    link: "https://github.com/gustavommcv/sistema-de-votacao-client",
  },

  {
    title: {
      en: "Chmod Calculator",
      pt: "Chmod Calculator",
    },
    description: {
      en: "Simple chmod website calculator, written with only js, html & css ",
      pt: "Website de uma calculadora chmod simples, escrita usando apenas js, html & css",
    },
    image: chMod,
    link: "https://github.com/gustavommcv/chmod_calculator",
  },

  {
    title: {
      en: "Bootcamp challenge - XP",
      pt: "Desafio do bootcamp - XP",
    },
    description: {
      en: "Challenge of the postgraduate bootcamp in software architecture and solutions (Api restful)",
      pt: "Desafio do bootcamp da pós-graduação em arquitetura e soluções de software (Api restful)",
    },
    image: desafio1XP,
    link: "https://github.com/gustavommcv/Desafio-Bootcamp-Arquitetura-de-Software",
  },

  {
    title: {
      en: "Itaú Unibanco - Challenge",
      pt: "Itaú Unibanco - Desafio",
    },
    description: {
      en: "REST API that receives Transactions and returns Statistics on those transactions.",
      pt: "API REST que recebe Transações e retorna Estatísticas sob essas transações.",
    },
    image: itauImage,
    link: "https://github.com/gustavommcv/Desafio-API-Itau",
  },

  {
    title: {
      en: "BooksApp",
      pt: "BooksApp",
    },
    description: {
      en: "A book management application that allows users to browse a catalog & leave ratings.",
      pt: "Um aplicativo de gerenciamento de livros que permite aos usuários navegar por um catálogo & deixar avaliações.",
    },
    image: booksAppImage,
    link: "https://github.com/gustavommcv/BooksApp_frontend",
  },

  {
    title: {
      en: "Airlock REST",
      pt: "Airlock REST",
    },
    description: {
      en: "A clone of an API for a fictitious website, refactored to follow Clean Architecture principles.",
      pt: "Um clone de uma API para um site fictício, refatorado para seguir os princípios da Clean Architecture.",
    },
    image: airlockrestImage,
    link: "https://github.com/gustavommcv/AirlockRest",
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
    image: portfolioImage,
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
    image: tictactoeImage,
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
    image: todoImage,
    link: "https://github.com/gustavommcv/to-do-app-main",
  },
];

export default projectsData;
