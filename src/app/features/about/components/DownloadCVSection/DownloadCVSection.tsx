import CustomSection from "../../../../core/layout/Section/CustomSection";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import downloadCVSectionTranslations from "./downloadCVSectionTranslations";

import "./DownloadCVSection.scss";

export default function DownloadCVSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = () => downloadCVSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="download-cv-section"
      command="/cv.sh"
      short={true}
      fade={true}
    >
      <div
        class={`contact-section__warning contact-section__warning--${theme()}`}
      >
        {t().warning} {language() === "pt" ? "{pt-br}*" : "{en-us}*"}
      </div>

      <div class="buttons-container">
        <div class="download-cv__button">
          <h3 class={`download-cv__title download-cv__title--${theme()}`}>
            CV DOCX
          </h3>
          <DownloadButton fileExtension="docx" />
        </div>
        <div class="download-cv__button">
          <h3 class={`download-cv__title download-cv__title--${theme()}`}>
            CV PDF
          </h3>
          <DownloadButton fileExtension="pdf" />
        </div>
        <div class="download-cv__button">
          <h3 class={`download-cv__title download-cv__title--${theme()}`}>
            CV ODT
          </h3>
          <DownloadButton fileExtension="odt" />
        </div>
      </div>
    </CustomSection>
  );
}
