import { JSX } from "solid-js";
import "./CustomList.scss"

interface CustomListProps {
  title: string;
  children: JSX.Element;
}

export default function CustomList(props: CustomListProps) {
  return (
    <div class="custom-list">
      <h2 class="custom-list__title">{props.title}:</h2>
      <ul class="custom-list__list">{props.children}</ul>
    </div>
  );
}
