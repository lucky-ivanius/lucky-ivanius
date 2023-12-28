import { AudioContext } from "@/contexts/audio.context";
import { useContext } from "react";

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
