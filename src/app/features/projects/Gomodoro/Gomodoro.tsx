import { Title } from "@solidjs/meta";
import CustomSection from "../../../core/layout/Section/CustomSection";
import gomodoroGif from "../../../../assets/images/projects/gomodoro.webp";

import "./Gomodoro.scss";
import { useTheme } from "../../contexts/ThemeContext/ThemeContextProvider";

export default function Gomodoro() {
  const { theme } = useTheme();

  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - Gomodoro Page</Title>

      <div class="gomodoro-page">
        <CustomSection
          title="Gomodoro"
          id="gomodoro"
          customClass="gomodoro-section"
          command="/gomodoro.go"
          short={true}
          fade={false}
        >
          <div class="gomodoro-page__info">
            <img class="gomodoro-page__thumbnail" src={gomodoroGif} />

            <div class="gomodoro-page__description">
              <h2 class={`${theme()}`}>Gomodoro</h2>

              <p class={`${theme()}`}>
                Gomodoro é uma ferramenta CLI (Command Line Interface)
                minimalista e eficiente para implementar a técnica Pomodoro
                diretamente no seu terminal. Desenvolvido em Go (se ainda nao
                ficou claro).
              </p>
            </div>
          </div>
        </CustomSection>
      </div>
    </>
  );
}
