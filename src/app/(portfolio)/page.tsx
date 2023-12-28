"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-black dark:text-white">
      <h1>The main page is under development 😔</h1>
    </main>
  );
}
