import { useLocation } from "@solidjs/router";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import CustomSection from "../../layout/Section/CustomSection";
import "./ErrorPage.scss";
import { createMemo } from "solid-js";
import { Title } from "@solidjs/meta";

export default function ErrorPage() {
  const { theme } = useTheme();
  const location = useLocation();

  const currentPath = createMemo(() => location.pathname);

  // TODO
  // error command does not change when user changes route
  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - Error Page</Title>

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
          </div>
        </CustomSection>
      </div>
    </>
  );
}
