import { createMemo } from "solid-js";
import rawProjects from "./ProjectsData";
import { useLanguage } from "../../features/contexts/LanguageContext/LanguageContextProvider";

export function useProjects() {
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
