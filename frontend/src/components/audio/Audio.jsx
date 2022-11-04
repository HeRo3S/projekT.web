import React from "react";

function Audio() {
  return (
    <>
      <div id="player">
        <audio controls autoplay loop>
          <source src="../../audio/You.mp3" type="audio/ogg" />
          <embed
            src="../../audio/You.mp3"
            autostart="true"
            loop="true"
            hidden="true"
          />
        </audio>
      </div>
    </>
  );
}

export default Audio;
