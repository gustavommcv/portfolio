import { useLanguage } from "../../context/LanguageContextProvider";
import "./AboutPage.scss";
import { aboutTranslations } from "./aboutTranslations";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div class="about-page">
      <div class="about-page__description">
        <h1>{aboutTranslations[language()].aboutMe}</h1>
        <p>{aboutTranslations[language()].introduction}</p>
        <p>{aboutTranslations[language()].experience}</p>
        <p>{aboutTranslations[language()].approach}</p>
        <p>{aboutTranslations[language()].focus}</p>
        <p>{aboutTranslations[language()].passion}</p>
      </div>

      <div class="about__page__image">
        <img src="https://picsum.photos/500/600" alt="" />
      </div>
    </div>
  );
}
