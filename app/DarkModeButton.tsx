"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme ==="system" ? systemTheme : theme

  return <button>
    {
      currentTheme === "dark" ? (
        <SunIcon className="w-8 h-8 cursor-pointer text-yellow-500" onClick={() => setTheme("light")}/>
      ) : (
        <MoonIcon className="w-8 h-8 cursor-pointer text-gray-900" onClick={() => setTheme("dark")}/>
      )
    }
  </button>;
}
