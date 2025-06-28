import "./HomePage.scss";
import PresentationSection from "../components/PresentationSection/PresentationSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

export default function HomePage() {
  return (
    <div class="home-page">
      <PresentationSection />

      <ServicesSection />
    </div>
  );
}
