import CustomSection from "../../../../core/layout/Section/CustomSection";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import ContactLinks from "./components/ContactLinks/ContactLinks";
import contactSectionTranslations from "./contactSectionTranslations";

import "./ContactSection.scss";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";

export default function ContactSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = () => contactSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="contact-section fade"
      command="./contact.sh"
      short={true}
    >
      <div
        class={`contact-section__warning contact-section__warning--${theme()}`}
      >
        {t().warning}
      </div>

      <div class={`contact-section__desc contact-section__desc--${theme()}`}>
        {t().desc}
      </div>
      <ContactLinks />
    </CustomSection>
  );
}
