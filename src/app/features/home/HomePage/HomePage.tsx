import { createSignal } from "solid-js";
import "./HomePage.scss";
import { homeTranslations } from "./homeTranslations";
import { useTheme } from "../../contexts/ThemeContext/ThemeContextProvider";
import { useLanguage } from "../../contexts/LanguageContext/LanguageContextProvider";

export default function HomePage() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const email = "monnerat.gustavo@outlook.com";
  const [isCopied, setIsCopied] = createSignal(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div class="home-page">
      <p class={`home-page__welcome home-page__welcome--${theme()}`}>
        {language() === "en"
          ? homeTranslations.en.welcome
          : homeTranslations.pt.welcome}
      </p>

      <h1 class={`home-page__title home-page__title--${theme()}`}>
        {language() === "en"
          ? homeTranslations.en.title
          : homeTranslations.pt.title}
      </h1>

      <div class={`home-page__subtitles home-page__subtitles--${theme()}`}>
        <p class="home-page__subtitle">
          {language() === "en"
            ? homeTranslations.en.subtitle1
            : homeTranslations.pt.subtitle1}
        </p>

        <span class="home__subtitle-split">|</span>

        <p class="home-page__subtitle">
          {language() === "en"
            ? homeTranslations.en.subtitle2
            : homeTranslations.pt.subtitle2}{" "}
          <span class={`xp xp--${theme()}`}>
            XP<span class="xp--e">E</span>
          </span>
        </p>
      </div>

      <div class="home-page__contact">
        <p
          class={`home-page__contact-title home-page__contact-title--${theme()}`}
        >
          {language() === "en"
            ? homeTranslations.en.contact
            : homeTranslations.pt.contact}
          :
        </p>

        <div class={`code-snippet code-snippet--${theme()}`}>
          <p>{email}</p>

          <button class="code-snippet__copy-button" onClick={handleCopyEmail}>
            {isCopied() ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill={theme() === "light" ? "currentColor" : "#6ccaa8"}
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill={theme() === "light" ? "currentColor" : "#6ccaa8"}
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            )}
          </button>
        </div>

        <p
          class={`home-page__download-title home-page__download-title--${theme()}`}
        >
          {language() === "en"
            ? homeTranslations.en.download
            : homeTranslations.pt.download}
          :
        </p>

        <div
          class={`home-page__download-button home-page__download-button--${theme()}`}
        >
          {language() === "en" ? (
            <a
              class={`home-page__download-link home-page__download-link--${theme()}`}
              href="/portfolio/cv-en.docx"
              download="cv-en.docx"
            >
              Download
            </a>
          ) : (
            <a
              class={`home-page__download-link home-page__download-link--${theme()}`}
              href="/portfolio/cv-pt.docx"
              download="cv-pt.docx"
            >
              Baixar
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
