"use client";
import React, { useEffect, useState } from "react";
import {
  AudioContext,
  AudioContextProps,
  AudioContextValue,
} from "../contexts/audio.context";

export const AudioProvider: React.FC<AudioContextProps> = ({
  children,
  audioUrl,
}) => {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioInstance = new Audio(audioUrl);

    audioInstance.volume = 0.3;
    audioInstance.loop = true;

    setAudio(audioInstance);
  }, [audioUrl]);

  const play = () => {
    audio?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audio?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    isPlaying ? pause() : play();
    setIsPlaying(!isPlaying);
  };

  const value: AudioContextValue = {
    isPlaying,
    play,
    pause,
    toggle,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
