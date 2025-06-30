import { createMemo } from "solid-js";
import rawProjects from "./projects";
import { useLanguage } from "../../features/contexts/LanguageContext/LanguageContextProvider";

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
