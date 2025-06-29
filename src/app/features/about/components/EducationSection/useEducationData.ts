import { createMemo } from "solid-js";
import educationData from "./educationDataTranslations";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";

export function useEducationData() {
  const { language } = useLanguage();

  return createMemo(() =>
    educationData.map((edu) => ({
      title: edu.title[language()],
      institution: edu.institution[language()],
      period: edu.period[language()],
      type: edu.type[language()],
    })),
  );
}
