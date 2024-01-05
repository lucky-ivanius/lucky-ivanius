"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import Accounts from "./accounts";

export default function SendAGift() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            id="send-a-gift"
            type="button"
            className="w-full bg-gradient-to-r from-pink-600 via-purple-700 to-fuchsia-700"
          >
            Send a gift
            <span className="ml-2">🎁</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-11/12">
          <DialogHeader>
            <DialogTitle>
              Send a gift
              <span className="ml-2">🎁</span>
            </DialogTitle>
          </DialogHeader>
          <Accounts />
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          id="send-a-gift"
          type="button"
          className="w-full bg-gradient-to-r from-pink-600 via-purple-700 to-fuchsia-700"
        >
          Send a gift
          <span className="ml-2">🎁</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Send a gift
            <span className="ml-2">🎁</span>
          </DrawerTitle>
        </DrawerHeader>
        <Accounts />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
