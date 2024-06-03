"use client"

import { fonts } from '@/fonts/fonts';
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

export default function Appbar() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('light');
  const router = useRouter();

  useEffect(() => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentTheme(prefersDark ? 'dark' : 'light');
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full bg-appbar h-[10vh] flex items-center justify-between px-[1.5rem]">
      <div className="flex items-center gap-[2rem]">
        <div className="cursor-pointer">
          <Image
            src={currentTheme === 'light' ? './images/menu-light.png' : './images/menu-dark.png'}
            alt="menuBar"
            className="w-[1.4rem] h-[1.4rem]"
            width={22}
            height={22}
          />
        </div>
        <div
          className={`${fonts.calSans} text-[2rem] text-primary p-0 cursor-pointer`}
          onClick={() => router.push("/")}
        >
          xkill
        </div>
      </div>
      <div className="flex items-center gap-[2rem]">
        <div className="cursor-pointer">
          <Image
            src={currentTheme === 'light' ? './images/share-light.png' : './images/share-dark.png'}
            alt="shareBtn"
            className="w-[1.4rem] h-[1.4rem]"
            width={22}
            height={22}
          />
        </div>
        <ThemeToggler currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
        <div className="cursor-pointer">
          <Image
            src={currentTheme === 'light' ? './images/login-light.png' : './images/login-dark.png'}
            alt="loginBtn"
            className="w-[1.4rem] h-[1.4rem]"
            width={22}
            height={22}
          />
        </div>
      </div>
    </div>
  );
}
