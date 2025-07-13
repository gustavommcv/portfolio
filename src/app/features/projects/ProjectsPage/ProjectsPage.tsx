import { Title } from "@solidjs/meta";
import "./ProjectsPage.scss";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

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
