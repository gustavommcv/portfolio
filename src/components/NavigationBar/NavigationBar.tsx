import { A } from "@solidjs/router";
import "./NavigationBar.scss";
import ThemeButton from "../ThemeButton/ThemeButton";

export default function NavigationBar() {
  
  return (
    <nav class="navigation-bar">
      <div>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/"
          end
        >
          Home
        </A>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/about"
        >
          About Me
        </A>
        <A
          activeClass="navigation-bar__link--active"
          inactiveClass="navigation-bar__link"
          href="/projects"
        >
          My Projects
        </A>
      </div>

      <ThemeButton></ThemeButton>

      {/* <div class="navigation-bar__links">
        <a target="blank" href="https://github.com/gustavommcv">GitHub</a>
        <a target="blank" href="https://www.linkedin.com/in/gustavo-monnerat-da-costa-veronese-277144235/">Linkedin</a>
      </div> */}
    </nav>
  );
}
