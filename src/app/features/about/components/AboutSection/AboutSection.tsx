import { useTheme } from "../../../contexts/ThemeContext/ThemeContextProvider";
import AboutDescription from "./components/AboutDescription/AboutDescription";
import ProfileImage from "./components/ProfileImage/ProfileImage";

import "./AboutSection.scss";

export default function AboutSection() {
  const { theme } = useTheme();

  return (
    <section class={`about-section about-section--${theme()}`}>
      <AboutDescription />
      <ProfileImage />
    </section>
  );
}
