import { Title } from "@solidjs/meta";
import Footer from "../../../core/layout/Footer/Footer";
import AboutSection from "../components/AboutSection/AboutSection";
import DownloadCVSection from "../components/DownloadCVSection/DownloadCVSection";
import EducationSection from "../components/EducationSection/EducationSection";
import InterestsSection from "../components/InterestsSection/InterestsSection";
import LanguageSection from "../components/LanguageSection/LanguageSection";

import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - About Page</Title>

      <div class={`about-page`}>
        <AboutSection />

        <EducationSection />

        <InterestsSection />

        <LanguageSection />

        <DownloadCVSection />

        <Footer />
      </div>
    </>
  );
}
