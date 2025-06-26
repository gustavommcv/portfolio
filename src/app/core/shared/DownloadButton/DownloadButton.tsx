import { useLanguage } from "../../../features/contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import "./DownloadButton.scss";

export default function DownloadButton() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div class={`download-button download-button--${theme()}`}>
      {language() === "en" ? (
        <a
          class={`download-button__link download-button__link--${theme()}`}
          href="/portfolio/cv-en.docx"
          download="cv-en.docx"
        >
          Download
        </a>
      ) : (
        <a
          class={`download-button__link download-button__link--${theme()}`}
          href="/portfolio/cv-pt.docx"
          download="cv-pt.docx"
        >
          Baixar
        </a>
      )}
    </div>
  );
}
