import { A } from "@solidjs/router";
import "./NavigationBar.scss";
import ThemeButton from "../ThemeButton/ThemeButton";
import LanguageButton from "../LanguageButton/LanguageButton";
import { useLanguage } from "../../context/LanguageContextProvider";
import { navigationBarTranslations } from "./navigationBarTranslations";

export default function NavigationBar() {
  
  const { language } = useLanguage();

  return (
    <nav class="navigation-bar">
      <div>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/"
          end
        >
          {language() === "en"
            ? navigationBarTranslations.en.home
            : navigationBarTranslations.pt.home}
        </A>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/about"
        >
          {language() === "en"
            ? navigationBarTranslations.en.about
            : navigationBarTranslations.pt.about}
        </A>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/projects"
        >
          {language() === "en"
            ? navigationBarTranslations.en.projects
            : navigationBarTranslations.pt.projects}
        </A>
      </div>

      <div>
        <LanguageButton />
        <ThemeButton />
      </div>

      {/* <div class="navigation-bar__links">
        <a target="blank" href="https://github.com/gustavommcv">GitHub</a>
        <a target="blank" href="https://www.linkedin.com/in/gustavo-monnerat-da-costa-veronese-277144235/">Linkedin</a>
      </div> */}
    </nav>
  );
}
