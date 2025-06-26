import { useTheme } from "../../../../../contexts/ThemeContext/ThemeContextProvider";
import { SkillBadge } from "./components/SkillBadge/SkillBadge";
import skills from "./skills";
import "./SkillsList.scss";

export default function SkillsList() {
  const { theme } = useTheme();

  return (
    <div class={`skills-list skills-list--${theme()}`}>
      <p class={`skills-list__title skills-list__title--${theme()}`}>Skills:</p>
      <div class={`skills-list__badges`}>
        {skills.map((skill) => (
          <SkillBadge name={skill.name} url={skill.url} badge={skill.badge} />
        ))}
      </div>
    </div>
  );
}
