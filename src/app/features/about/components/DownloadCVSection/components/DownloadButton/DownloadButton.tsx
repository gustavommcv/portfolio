import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./DownloadButton.scss";

interface DownloadButtonProps {
  fileExtension?: string;
}

export default function DownloadButton(props: DownloadButtonProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  props.fileExtension = props.fileExtension || "pdf";

  return (
    <div class={`download-button download-button--${theme()}`}>
      {language() === "en" ? (
        <a
          class={`download-button__link download-button__link--${theme()}`}
          href={`/portfolio/cv-en.${props.fileExtension}`}
          download={`cv-en.${props.fileExtension}`}
        >
          Download ↓
        </a>
      ) : (
        <a
          class={`download-button__link download-button__link--${theme()}`}
          href={`/portfolio/cv-pt.${props.fileExtension}`}
          download={`cv-pt.${props.fileExtension}`}
        >
          Baixar ↓
        </a>
      )}
    </div>
  );
}
