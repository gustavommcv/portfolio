import CustomSection from "../../../../core/layout/Section/CustomSection";
import CustomList from "../../../../core/shared/CustomList/CustomList";
import NavigationButton from "../../../../core/shared/NavigationButton/NavigationButton";
import servicesSectionTranslations from "./servicesSectionTranslations";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import { For } from "solid-js";

import "./ServicesSection.scss";

export default function ServicesSection() {
  const { language } = useLanguage();

  const t = () => servicesSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="services-section"
      command="/services.sh"
      short={true}
      fade={true}
    >
      <CustomList title={t().listTitle}>
        <For each={t().items}>{(item) => <li>{item}</li>}</For>
      </CustomList>

      <NavigationButton link="projects">{t().button}</NavigationButton>
    </CustomSection>
  );
}
