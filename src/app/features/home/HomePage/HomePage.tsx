import "./HomePage.scss";
import PresentationSection from "../components/PresentationSection/PresentationSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../../../core/layout/Footer/Footer";
import TechStackSection from "../components/TechStackSection/TechStackSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection/FeaturedProjectsSection";
import { Title } from "@solidjs/meta";

export default function HomePage() {
  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - Home Page</Title>

      <div class="home-page">
        <PresentationSection />

        <ServicesSection />

        <TechStackSection />

        <FeaturedProjectsSection />

        <ContactSection />

        <Footer fade={true} />
      </div>
    </>
  );
}
