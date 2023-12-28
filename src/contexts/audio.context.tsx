import { ReactNode, createContext } from "react";

export interface AudioContextProps {
  children: ReactNode;
  audioUrl: string;
}

export interface AudioContextValue {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

export const AudioContext = createContext<AudioContextValue | undefined>(
  undefined
);
