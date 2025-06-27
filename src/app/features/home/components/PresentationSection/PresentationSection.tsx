import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";
import ContactsSection from "./components/ContactSection/ContactsSection";
import NameTitle from "./components/NameTitle/NameTitle";
import Subtitles from "./components/Subtitles/Subtitles";
import presentationTranslations from "./presentationTranslations";

import "./PresentationSection.scss";
import TerminalLine from "./components/TerminalLine/TerminalLine";
import MiniAbout from "./components/MiniAbout/MiniAbout";

export default function PresentationSection() {
  const { theme } = useTheme();
  return (
    <section class={`presentation-section presentation-section--${theme()}`}>
      <TerminalLine />

      <NameTitle title="gustavo_monnerat" />

      <Subtitles
        enSubtitle1={presentationTranslations.en.subtitle1}
        enSubtitle2={presentationTranslations.en.subtitle2}
        ptSubtitle1={presentationTranslations.pt.subtitle1}
        ptSubtitle2={presentationTranslations.pt.subtitle2}
      />

      <MiniAbout />

      <ContactsSection
        enContact={presentationTranslations.en.contact}
        enDownload={presentationTranslations.en.download}
        ptContact={presentationTranslations.pt.contact}
        ptDownload={presentationTranslations.pt.download}
      />
    </section>
  );
}
