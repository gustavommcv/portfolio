import minimalNeovim from "../../../../../../../assets/images/projects/minimal-neovim.webp";
import gomodoro from "../../../../../../../assets/images/projects/gomodoro.webp";
import chMod from "../../../../../../../assets/images/projects/chmod-calculator.webp";

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
  nav?: string;
};

const featuredProjects: Project[] = [
  {
    title: {
      en: "Minimal Neovim",
      pt: "Minimal Neovim",
    },
    description: {
      en: "A modern, modular Neovim configuration optimized for productivity and aesthetics. Built with Lua.",
      pt: "Uma configuração moderna e modular do Neovim optimizada para produtividade e estética. Construído com Lua.",
    },
    shortDescription: {
      en: "A modern, modular Neovim configuration optimized for productivity and aesthetics. Built with Lua.",
      pt: "Uma configuração moderna e modular do Neovim optimizada para produtividade e estética. Escrito em Lua.",
    },
    image: minimalNeovim,
    technologies: ["Lua"],
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

    shortDescription: {
      en: "A lightning-fast CLI Pomodoro timer for developers, built in Go.",
      pt: "Um cronómetro CLI Pomodoro extremamente rápido para programadores, escrito em Go.",
    },

    image: gomodoro,
    technologies: ["Go"],
    link: "https://github.com/gustavommcv/gomodoro",
    nav: "/projects/gomodoro",
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
];

export default featuredProjects;
