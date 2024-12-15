import React, { useState, useEffect } from "react";

import styles from "./styles/SwitchRow.module.scss";
import { SoundIcon } from "@/assets/icons/SoundIcon";

export const TimerSoundButton = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioInstance = new Audio("/timer.mp3");
    setAudio(audioInstance);

    return () => {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.src = "";
      }
    };
  }, []);

  const handlePlaySound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .catch((error) => console.error("Error playing audio:", error));
    }
  };

  return (
    <button onClick={handlePlaySound} aria-label="Test sound" className={styles.timerSoundButton}>
      <SoundIcon />
    </button>
  );
};
