import NameTitle from "./components/NameTitle/NameTitle";
import Subtitles from "./components/Subtitles/Subtitles";
import presentationTranslations from "./presentationTranslations";
import MiniAbout from "./components/MiniAbout/MiniAbout";
import CustomSection from "../../../../core/layout/Section/CustomSection";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import "./PresentationSection.scss";
import NavigationButton from "../../../../core/shared/NavigationButton/NavigationButton";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";

// TODO
// dynamic language
export default function PresentationSection() {
  const { language } = useLanguage();

  return (
    <CustomSection
      title="Who am I"
      customClass="presentation-section"
      typingAnimation={true}
    >
      <div class="fade">
        <NameTitle title="gustavo_monnerat" />

        <Subtitles
          enSubtitle1={presentationTranslations.en.subtitle1}
          enSubtitle2={presentationTranslations.en.subtitle2}
          ptSubtitle1={presentationTranslations.pt.subtitle1}
          ptSubtitle2={presentationTranslations.pt.subtitle2}
        />

        <MiniAbout />

        <SocialLinks />

        <NavigationButton link="#contact">
          {language() === "pt"
            ? presentationTranslations.pt.contact
            : presentationTranslations.en.contact}
        </NavigationButton>
      </div>
    </CustomSection>
  );
}
