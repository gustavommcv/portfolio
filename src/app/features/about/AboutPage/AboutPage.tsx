import Footer from "../../../core/layout/Footer/Footer";
import AboutSection from "../components/AboutSection/AboutSection";

import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div class={`about-page`}>
      <AboutSection />

      <Footer />
    </div>
  );
}
