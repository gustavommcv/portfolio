import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import "./NameTitle.scss";

interface NameTitleProps {
  title: string;
}

export default function NameTitle({ title }: NameTitleProps) {
  const { theme } = useTheme();

  return <h1 class={`name-title name-title--${theme()}`}>{title}</h1>;
}
