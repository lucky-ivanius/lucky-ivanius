"use client";

import { Button } from "@/components/ui/button";
import { useAudio } from "@/hooks/use-audio";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";

export default function BgMusic() {
  const { isPlaying, toggle } = useAudio();

  return (
    <Button
      onClick={toggle}
      variant="secondary"
      size="icon"
      className="fixed bottom-2 left-2 md:bottom-4 md:left-4 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rose-300 to-lime-300 ring md:ring-2 ring-ring ring-indigo-500"
    >
      {isPlaying ? (
        <PauseIcon className="w-4 h-4 md:w-6 md:h-6 stroke-1 md:stroke-[0.5] stroke-indigo-500" />
      ) : (
        <PlayIcon className="w-4 h-4 md:w-6 md:h-6 stroke-1 md:stroke-[0.5] stroke-indigo-500" />
      )}
    </Button>
  );
}
