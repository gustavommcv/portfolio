import "./HomePage.scss";
import PresentationSection from "../components/PresentationSection/PresentationSection";
import AboutSection from "../../about/components/AboutSection/AboutSection";

export default function HomePage() {
  return (
    <div class="home-page">
      <PresentationSection />
      <AboutSection />
    </div>
  );
}
