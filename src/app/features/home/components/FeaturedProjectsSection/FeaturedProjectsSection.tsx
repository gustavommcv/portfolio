import CustomSection from "../../../../core/layout/Section/CustomSection";
import NavigationButton from "../../../../core/shared/NavigationButton/NavigationButton";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";
import FeaturedProjectsContainer from "./components/FeaturedProjectsContainer/FeaturedProjectsContainer";
import featuredProjectsTranslations from "./featuredProjectsTranslations";

export default function FeaturedProjectsSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = () => featuredProjectsTranslations[language()];

  return (
    <CustomSection
      title={t().title}
      customClass="featured-projects-section"
      command="/featured.sh"
      short={true}
      fade={true}
    >
      {/* TODO - New component (Warning) */}
      <div
        class={`contact-section__warning contact-section__warning--${theme()}`}
      >
        {t().warning}
      </div>
      <FeaturedProjectsContainer />
      <NavigationButton link="projects">{t().link}</NavigationButton>
    </CustomSection>
  );
}
