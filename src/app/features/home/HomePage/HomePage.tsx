import "./HomePage.scss";
import PresentationSection from "../components/PresentationSection/PresentationSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TechStack from "../components/TechStack/TechStack";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../../../core/layout/Footer/Footer";

export default function HomePage() {
  return (
    <div class="home-page">
      <PresentationSection />

      <ServicesSection />

      <TechStack />

      <ContactSection />

      <Footer />
    </div>
  );
}
