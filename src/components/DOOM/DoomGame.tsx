import { onMount } from "solid-js";
import "./DoomGame.scss";

declare const Dosbox: any;

export default function DoomGame() {
  onMount(() => {
    // @ts-ignore
    const dosbox = new Dosbox({
      id: "dosbox",
      onload: function (dosbox: any) {
        dosbox.run("/uploads/DOOM-@evilution.zip", "./DOOM/DOOM.EXE");
      },
      // @ts-ignore
      onrun: function (dosbox: any, app: string) {
        console.log("App '" + app + "' is runned");
      },
    });
  });

  return (
    <div>
      <div id="dosbox" class="dosbox-container"></div>
    </div>
  );
}
