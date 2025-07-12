import { Title } from "@solidjs/meta";
import CustomSection from "../../../core/layout/Section/CustomSection";
import "./Gomodoro.scss";

export default function Gomodoro() {
  return (
    <>
      <Title>gus::monnerat - Full Stack Developer - Gomodoro Page</Title>

      <div class="gomodoro-page">
        <CustomSection
          title="Gomodoro"
          id="gomodoro"
          customClass="gomodoro-section"
          command="/gomodoro.go"
          short={true}
          fade={false}
        >
          <p>Hello</p>
        </CustomSection>
      </div>
    </>
  );
}
