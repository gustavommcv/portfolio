import { useLanguage } from "../../../contexts/LanguageContext/LanguageContextProvider";
import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";

import "./Greeting.scss";

interface GreetingProps {
  enGreeting: string;
  ptGreeting: string;
}

export default function Greeting({ enGreeting, ptGreeting }: GreetingProps) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <p class={`greeting greeting--${theme()}`}>
      {language() === "en" ? enGreeting : ptGreeting}
    </p>
  );
}
