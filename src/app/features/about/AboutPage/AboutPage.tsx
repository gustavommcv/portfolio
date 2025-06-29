import Footer from "../../../core/layout/Footer/Footer";
import { useTheme } from "../../contexts/ThemeContext/ThemeContextProvider";
import AboutSection from "../components/AboutSection/AboutSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

import "./AboutPage.scss";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <div class={`about-page about-page--${theme()}`}>
      <AboutSection />

      <ProjectsSection />

      <Footer />
    </div>
  );
}
