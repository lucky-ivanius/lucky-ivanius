"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

import me from "@/assets/portfolio/images/me.jpg";
import { Button } from "@/components/ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen items-center justify-center dark:bg-slate-800 dark:text-white">
      <div className="container flex flex-col items-center justify-center gap-8">
        <Avatar className="h-48 w-48 border-4 border-gray-500">
          <AvatarFallback>LI</AvatarFallback>
          <AvatarImage
            src={me.src}
            alt="lucky-ivanius"
            className="object-cover object-center"
          />
        </Avatar>
        <p className="text-sm font-medium">This page is under development 💻</p>
        <div className="grid grid-cols-4 justify-items-center gap-2 w-1/2">
          <Button
            className="hover:bg-transparent hover:text-gray-400 focus-visible:bg-transparent focus-visible:text-gray-400"
            size="icon"
            variant="ghost"
            asChild
          >
            <Link href="https://linkedin.com/in/lucky-ivanius" target="_blank">
              <LinkedInLogoIcon className="w-5/6 h-5/6" />
            </Link>
          </Button>
          <Button
            className="hover:bg-transparent hover:text-gray-400 focus-visible:bg-transparent focus-visible:text-gray-400"
            size="icon"
            variant="ghost"
            asChild
          >
            <Link href="https://github.com/lucky-ivanius" target="_blank">
              <GitHubLogoIcon className="w-5/6 h-5/6" />
            </Link>
          </Button>
          <Button
            className="hover:bg-transparent hover:text-gray-400 focus-visible:bg-transparent focus-visible:text-gray-400"
            size="icon"
            variant="ghost"
            asChild
          >
            <Link href="https://instagram.com/luckzivanius" target="_blank">
              <InstagramLogoIcon className="w-5/6 h-5/6" />
            </Link>
          </Button>
          <Button
            className="hover:bg-transparent hover:text-gray-400 focus-visible:bg-transparent focus-visible:text-gray-400"
            size="icon"
            variant="ghost"
            asChild
          >
            <Link href="mailto:luckzivanius@gmail.com" target="_blank">
              <EnvelopeClosedIcon className="w-5/6 h-5/6" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
