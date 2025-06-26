import { createSignal } from "solid-js";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";
import "./CodeSnippet.scss";

export default function CodeSnippet() {
  const email = "monnerat.gustavo@outlook.com";
  const [isCopied, setIsCopied] = createSignal(false);

  const { theme } = useTheme();

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
  );
}
