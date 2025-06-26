import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";

import "./NameTitle.scss";

interface NameTitleProps {
  enTitle: string;
  ptTitle: string;
}

export default function NameTitle({ enTitle, ptTitle }: NameTitleProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <h1 class={`name-title name-title--${theme()}`}>
      {language() === "en" ? enTitle : ptTitle}
    </h1>
  );
}
