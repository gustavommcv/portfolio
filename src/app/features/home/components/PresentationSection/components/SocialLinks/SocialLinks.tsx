import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <ul class={`social-links`}>
      <li>
        <a
          class={`social-links__link`}
          target="_blank"
          href="https://www.linkedin.com/in/gustavommcv/"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          class={`social-links__link`}
          target="_blank"
          href="https://github.com/gustavommcv"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}
