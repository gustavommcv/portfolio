import "./NavigationButton.scss"

export default function NavigationButton(props: { children: string }) {
  return <button class={`navigation-button`}> → {props.children}</button>;
}
