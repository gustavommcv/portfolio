import { Title } from "@solidjs/meta";
import { useTheme } from "../../contexts/ThemeContext/ThemeContextProvider";
import "./CustomProjectPage.scss";
import CustomSection from "../../../core/layout/Section/CustomSection";

export default function CustomProjectPage(props: {
  translations: any;
  title: string;
  command: string;
  gif: string;
}) {
  const { theme } = useTheme();

  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - {props.title} Page</Title>

      <div class={`custom-project-page`}>
        <CustomSection
          title={props.title}
          id={props.title.toLowerCase()}
          customClass={`${props.title.toLowerCase()}-section`}
          command={`${props.command}`}
          short={true}
          fade={false}
        >
          <div class="custom-project-page__info">
            <img class="custom-project-page__thumbnail" src={props.gif} />

            <div class="custom-project-page__description">
              <h2 class={`${theme()}`}>Gomodoro</h2>

              <p class={`${theme()}`}>{props.translations().description}</p>

              <a
                class={`custom-project-page__link custom-project-page__link--${theme()}`}
                target="_blank"
                href="https://github.com/gustavommcv/gomodoro"
              >
                Repository
              </a>
            </div>
          </div>
        </CustomSection>
      </div>
    </>
  );
}
