import { createMemo } from "solid-js";
import rawProjects from "./featuredProjectsData";
import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";

export function useFeaturedProjects() {
  const { language } = useLanguage();

  return createMemo(() =>
    rawProjects.map((p: any) => ({
      title: p.title[language()],
      description: p.description[language()],
      image: p.image,
      link: p.link,
      nav: p.nav,
    })),
  );
}
