import { useLanguage } from "../../../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./Subtitles.scss";

interface SubtitlesProps {
  enSubtitle1: string;
  enSubtitle2: string;
  ptSubtitle1: string;
  ptSubtitle2: string;
}

export default function Subtitles({
  enSubtitle1,
  enSubtitle2,
  ptSubtitle1,
  ptSubtitle2,
}: SubtitlesProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div class={`subtitles subtitles--${theme()}`}>
      <p class="subtitle-1">
        {language() === "en" ? enSubtitle1 : ptSubtitle1}
      </p>

      <span class="subtitles-split">&</span>

      <p class="subtitle-2">
        {language() === "en" ? enSubtitle2 : ptSubtitle2}{" "}
        <span class={`xp xp--${theme()}`}>
          XP<span class="xp--e">E</span>
        </span>
      </p>
    </div>
  );
}
