"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import Accounts from "./accounts";

const title = "Send a Gift";
const giftEmoticon = <span className="ml-2">🎁</span>;
export default function SendAGift() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" className="w-full" variant="outline">
            {title}
            {giftEmoticon}
          </Button>
        </DialogTrigger>
        <DialogContent className="w-11/12">
          <DialogHeader>
            <DialogTitle>
              {title}
              {giftEmoticon}
            </DialogTitle>
          </DialogHeader>
          <Accounts />
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button type="button" className="w-full" variant="outline">
          {title}
          {giftEmoticon}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {title}
            {giftEmoticon}
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
