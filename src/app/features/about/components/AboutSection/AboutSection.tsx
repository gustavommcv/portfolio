import CustomSection from "../../../../core/layout/Section/CustomSection";
import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import aboutSectionTranslations from "./aboutSectionTranslations";

import meImage from "../../../../../assets/images/me.webp";

import "./AboutSection.scss";
import { createSignal, onMount } from "solid-js";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";

export default function AboutSection() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const t = () => aboutSectionTranslations[language()];

  const [age, setAge] = createSignal<number>(0);

  function calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);

    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      calculatedAge--;
    }

    return calculatedAge;
  }

  onMount(() => {
    setAge(calculateAge("2004-05-16"));
  });

  return (
    <CustomSection
      title={t().title}
      customClass="about-section"
      command="/me.sh"
      typingAnimation={true}
    >
      <div class="about-section__container fade">
        <div class={`about-section__text about-section__text--${theme()}`}>
          <h1 class={`about-section__title about-section__title--${theme()}`}>
            "Hello, World!"
          </h1>
          <p class="about-section__p1">{t().p1}</p>
          <p class="about-section__p2">{t().p2}</p>
          <p class="about-section__p3">{t().p3}</p>
          <div
            class={`about-section__additional-info about-section__additional-info--${theme()}`}
          >
            <p>Curitiba - PR - {t().country}</p>
            <p>
              {age()}y - {t().pronouns}
            </p>
          </div>
        </div>

        <div class="about-section__image-container">
          <img src={meImage} alt="Foto de Gustavo Monnerat" />
        </div>
      </div>
    </CustomSection>
  );
}
