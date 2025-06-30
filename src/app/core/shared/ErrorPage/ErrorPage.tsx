import { useLocation } from "@solidjs/router";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import CustomSection from "../../layout/Section/CustomSection";
import "./ErrorPage.scss";
import { createMemo } from "solid-js";
import { useLanguage } from "../../../features/contexts/LanguageContext/LanguageContextProvider";

export default function ErrorPage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const location = useLocation();

  const currentPath = createMemo(() => location.pathname);

  // TODO
  // error command does not change when user changes route
  return (
    <div class={`error-page`}>
      <CustomSection
        title="Error"
        customClass="projects-section"
        command={currentPath()}
        error={true}
        short={true}
      >
        <div class={`not-found not-found--${theme()}`}>
          <h2 class={"not-found__title"}>404 - Command not Found</h2>
          <h3 class={"not-found__subtitle"}>
            bash: {currentPath()}: command not found
          </h3>

          {location.pathname === "/projects" && (
            <p class={"not-found__description"}>
              {language() === "en"
                ? "Changing and adjusting projects page details. Feel free to have a coffee ☕ meanwhile!"
                : "Mudando e ajustando detalhes da página de projetos. Fique à vontade para tomar um café ☕ enquanto isso!"}
            </p>
          )}
        </div>
      </CustomSection>
    </div>
  );
}
