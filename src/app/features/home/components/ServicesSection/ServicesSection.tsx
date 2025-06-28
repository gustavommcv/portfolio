import CustomSection from "../../../../core/layout/Section/CustomSection";
import NavigationButton from "../../../../core/shared/NavigationButton/NavigationButton";
import Services from "./components/Services";
import "./ServicesSection.scss";

export default function ServicesSection() {
  return (
    <CustomSection
      title="Services"
      customClass="services-section fade"
      command="./services.sh"
      short={true}
    >
      <Services />
      <NavigationButton>Portfolio</NavigationButton>
    </CustomSection>
  );
}
