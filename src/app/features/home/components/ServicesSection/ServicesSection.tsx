import CustomSection from "../../../../core/layout/Section/CustomSection";
import CustomList from "../../../../core/shared/CustomList/CustomList";
import NavigationButton from "../../../../core/shared/NavigationButton/NavigationButton";

import "./ServicesSection.scss";

export default function ServicesSection() {
  return (
    <CustomSection
      title="Services"
      customClass="services-section fade"
      command="./services.sh"
      short={true}
    >
      <CustomList title="Meus Serviços">
        <li>Landing pages</li>
        <li>Portfolio</li>
        <li>Manutenção de código</li>
        <li>Conversão de design para código</li>
      </CustomList>

      <NavigationButton>Portfolio</NavigationButton>
    </CustomSection>
  );
}
