import CustomSection from "../../../../core/layout/Section/CustomSection";
import CustomList from "../../../../core/shared/CustomList/CustomList";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import interestsSectionTranslations from "./interestsSectionTranslations";

export default function InterestsSection() {
  const { language } = useLanguage();

  const t = () => interestsSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="interests-section"
      command="/interests.sh"
      short={true}
      fade={false}
    >
      <CustomList title={t().listTitle}>
        <li>linux</li>
        <li>terminals and terminal tools</li>
        <li>fullstack development</li>
        <li>cyber security</li>
      </CustomList>
    </CustomSection>
  );
}
