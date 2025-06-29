import CustomSection from "../../../../core/layout/Section/CustomSection";
import CustomList from "../../../../core/shared/CustomList/CustomList";
import gopherSmallImage from "../../../../../assets/images/gopher-s.webp";
import gopherLargeImage from "../../../../../assets/images/gopher-l.webp";

import "./TechStackSection.scss";

export default function TechStackSection() {
  return (
    <CustomSection
      title="Tech Stack"
      customClass="tech-stack-section"
      command="/tech-stack.sh"
      short={true}
      fade={true}
    >
      <CustomList title="Tech Stack">
        <li>Golang/gin</li>
        <li>C#/Asp.net</li>
        <li>Java/SpringBoot</li>
        <li>Javascript/React/Angular/SolidJS</li>
        <li>HTML/CSS/SASS/Tailwind</li>
        <li>SQL/PostgreSQL/MySQL/MongoDB</li>
        <li>Docker/Kubernetes/AWS</li>
      </CustomList>

      <picture class="tech-stack-section__image-container">
        <source media="(max-width: 1180px)" srcset={gopherSmallImage} />
        <img
          class="tech-stack-section__image"
          src={gopherLargeImage}
          alt="Go Gopher"
        />
      </picture>
    </CustomSection>
  );
}
