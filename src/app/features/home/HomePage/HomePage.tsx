import "./HomePage.scss";
import PresentationSection from "../components/PresentationSection/PresentationSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TechStack from "../components/TechStack/TechStack";

export default function HomePage() {
  return (
    <div class="home-page">
      <PresentationSection />

      <ServicesSection />

      <TechStack />
    </div>
  );
}
