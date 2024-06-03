"use client";

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './ui/button';
import themeLight from '@/assets/theme-toggler-light.png';
import themeDark from '@/assets/theme-toggler-dark.png';

interface Props {
  currentTheme: string | undefined;
  setCurrentTheme: Dispatch<SetStateAction<string | undefined>>
}

export default function ThemeToggler({ currentTheme, setCurrentTheme }: Props) {
  const { setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
      }}
      className='bg-transparent p-0'
    >
      <Image
        src={currentTheme === 'light' ? themeDark : themeLight}
        alt="theme"
        className='w-[1.4rem] h-[1.4rem]'
        width={22}
        height={22}
      />
    </Button>
  );
}
