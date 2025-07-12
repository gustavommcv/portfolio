import gomodoroGif from "../../../../assets/gifs/projects/gomodoro.gif";

import "./Gomodoro.scss";
import { useLanguage } from "../../contexts/LanguageContext/LanguageContextProvider";
import gomodoroProjectsTranslations from "./gomodoroTranslations";
import CustomProjectPage from "../CustomProjectPage/CustomProjectPage";

export default function Gomodoro() {
  const { language } = useLanguage();

  const t = () => gomodoroProjectsTranslations[language()];

  return (
    <CustomProjectPage
      title="Gomodoro"
      command="gomodoro"
      gif={gomodoroGif}
      translations={t}
    />
  );
}
