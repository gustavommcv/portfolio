import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./MiniAbout.scss";

export default function MiniAbout() {
  const { theme } = useTheme();

  return (
    <p class={`mini-about mini-about--${theme()}`}>
      Desenvolvedor Full Stack com foco em criar soluções digitais modernas e
      bem estruturadas, garantindo qualidade de código, boas práticas e
      arquitetura robusta.
    </p>
  );
}
