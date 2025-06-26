import { homeTranslations } from "./homeTranslations";
import Greeting from "../components/Greeting/Greeting";
import NameTitle from "../components/NameTitle/NameTitle";
import Subtitles from "../components/Subtitles/Subtitles";
import ContactsSection from "../components/ContactSection/ContactsSection";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <div class="home-page">
      <Greeting
        enGreeting={homeTranslations.en.greeting}
        ptGreeting={homeTranslations.pt.greeting}
      />

      <NameTitle
        enTitle={homeTranslations.en.title}
        ptTitle={homeTranslations.pt.title}
      />

      <Subtitles
        enSubtitle1={homeTranslations.en.subtitle1}
        enSubtitle2={homeTranslations.en.subtitle2}
        ptSubtitle1={homeTranslations.pt.subtitle1}
        ptSubtitle2={homeTranslations.pt.subtitle2}
      />

      <ContactsSection
        enContact={homeTranslations.en.contact}
        enDownload={homeTranslations.en.download}
        ptContact={homeTranslations.pt.contact}
        ptDownload={homeTranslations.pt.download}
      />
    </div>
  );
}
