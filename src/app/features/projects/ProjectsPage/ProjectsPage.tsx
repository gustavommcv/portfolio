import { Title } from "@solidjs/meta";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import "./ProjectsPage.scss";

export default function ProjectsPage() {
  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - Home Page</Title>

      <div class={`projects-page`}>
        <ProjectsSection />
      </div>
    </>
  );
}
