import CustomSection from "../../../../core/layout/Section/CustomSection";
import CustomList from "../../../../core/shared/CustomList/CustomList";
import { For } from "solid-js";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import languageSectionTranslations from "./languageSectionTranslations";

export default function LanguageSection() {
  const { language } = useLanguage();

  const t = () => languageSectionTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="interests-section"
      command="/languages.sh"
      short={true}
      fade={false}
    >
      <CustomList title={t().listTitle}>
        <For each={t().items}>{(item) => <li>{item}</li>}</For>
      </CustomList>
    </CustomSection>
  );
}
