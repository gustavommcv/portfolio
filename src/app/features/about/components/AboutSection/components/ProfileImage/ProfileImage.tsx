import me from "../../../../../../../assets/images/me.webp";
import "./ProfileImage.scss";

export default function ProfileImage() {
  return (
    <div class="profile-image">
      <img src={me} alt="Gustavo Monnerat" />
    </div>
  );
}
