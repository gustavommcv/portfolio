import { JSX } from "solid-js";
import "./CustomList.scss";
import { useTheme } from "../../../features/contexts/ThemeContext/ThemeContextProvider";

interface CustomListProps {
  title: string;
  children: JSX.Element;
}

export default function CustomList(props: CustomListProps) {
  const { theme } = useTheme();

  return (
    <div class="custom-list">
      <h2 class={`custom-list__title custom-list__title--${theme()}`}>
        {props.title}:
      </h2>
      <ul class={`custom-list__list custom-list__list--${theme()}`}>
        {props.children}
      </ul>
    </div>
  );
}
