import CodeSnippet from "../../../../../../core/shared/CodeSnippet/CodeSnippet";
import DownloadButton from "../../../../../../core/shared/DownloadButton/DownloadButton";
import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./ContactsSection.scss";

interface ContactsSectionProps {
  enContact: string;
  ptContact: string;
  enDownload: string;
  ptDownload: string;
}

// TODO
// use this component on about page
export default function ContactsSection({
  enContact,
  ptContact,
  enDownload,
  ptDownload,
}: ContactsSectionProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <section class="contact-section">
      <p
        class={`contact-section__subtitle contact-section__subtitle--${theme()}`}
      >
        {language() === "en" ? enContact : ptContact}
        :
        <CodeSnippet />
      </p>

      <p
        class={`contact-section__subtitle contact-section__subtitle--${theme()}`}
      >
        {language() === "en" ? enDownload : ptDownload}
        :
        <DownloadButton />
      </p>
    </section>
  );
}
