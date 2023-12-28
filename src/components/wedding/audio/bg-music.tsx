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
      className="fixed bottom-2 left-2 rounded-full w-12 h-12"
    >
      {isPlaying ? (
        <PauseIcon className="w-full h-full" />
      ) : (
        <PlayIcon className="w-full h-full" />
      )}
    </Button>
  );
}
