import Footer from "../../../core/layout/Footer/Footer";
import AboutSection from "../components/AboutSection/AboutSection";
import DownloadCVSection from "../components/DownloadCVSection/DownloadCVSection";
import InterestsSection from "../components/InterestsSection/InterestsSection";
import LanguageSection from "../components/LanguageSection/LanguageSection";

import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div class={`about-page`}>
      <AboutSection />

      <InterestsSection />

      <LanguageSection />

      <DownloadCVSection />

      <Footer />
    </div>
  );
}
