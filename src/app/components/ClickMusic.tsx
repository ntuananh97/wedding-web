import React from "react";
import AutoAudioPlayer from "./AudioPlayer";

const ClickMusic = () => {
  return (
    <>
      <AutoAudioPlayer src="/sounds/Marry You.mp3" />

      <p className="ladi-headline">
        click music
        <br />
      </p>
    </>
  );
};

export default ClickMusic;
