import { createMemo } from "solid-js";
import rawProjects from "./FeaturedProjectsData";
import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";

export function useFeaturedProjects() {
  const { language } = useLanguage();

  return createMemo(() =>
    rawProjects.map((p: any) => ({
      title: p.title[language()],
      shortDescription: p.shortDescription[language()],
      description: p.description[language()],
      image: p.image,
      technologies: p.technologies,
      link: p.link,
    })),
  );
}
