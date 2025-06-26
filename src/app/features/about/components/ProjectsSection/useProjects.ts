import { createMemo } from "solid-js";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import rawProjects from "./projects";

export function useProjects() {
  const { language } = useLanguage();

  return createMemo(() =>
    rawProjects.map((p) => ({
      title: p.title[language()],
      shortDescription: p.shortDescription[language()],
      description: p.description[language()],
      image: p.image,
      technologies: p.technologies,
      link: p.link,
    })),
  );
}
