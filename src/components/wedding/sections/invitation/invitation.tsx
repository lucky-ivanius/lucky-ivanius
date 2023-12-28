"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useAudio } from "@/hooks/use-audio";
import { useMediaQuery } from "@/hooks/use-media-query";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Invitation() {
  const params = useSearchParams();

  const guestName = params.get("to") ?? "Guest";

  const [open, setOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { play } = useAudio();

  const onOpenChange = (open: boolean) => {
    if (!open) play();

    setOpen(open);
  };

  if (isDesktop)
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invitation</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full flex flex-col items-center md:items-start justify-center pt-4 gap-4">
            <p>
              Dear <strong>{guestName}</strong> 🥰
              <br />
              We invite you to join us for our wedding.
            </p>
            <p className="text-xs italic">
              Please click the button below to open the invitation.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild className="w-full">
              <Button>
                <EnvelopeOpenIcon className="mr-2" />
                Open Invitation
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>🤵🏼 💍 👰🏻</DrawerTitle>
        </DrawerHeader>
        <div className="w-full h-full flex flex-col items-center md:items-start justify-center pt-4 gap-4">
          <p>
            Dear <strong>{guestName}</strong> 🥰
            <br />
            We invite you to join us for our wedding.
          </p>
          <p className="text-xs italic">
            Please click the button below to open the invitation.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>
              <EnvelopeOpenIcon className="mr-2" />
              Open Invitation
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
