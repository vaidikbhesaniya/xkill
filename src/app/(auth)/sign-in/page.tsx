'use client';

import GithubDark from '@/assets/github-dark.png';
// import GithubLight from "@/assets/github-light.png";
import Google from '@/assets/google.png';
import { Button } from '@/components/ui/button';
// import { signIn } from "next-auth/react";
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export default function SignIn() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="appLogo"></div>
      <div className="flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[0.5rem]">
          <span>Sign in</span>
          <span>to continue to xkill</span>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <Button
            className="flex gap-[1rem]"
            onClick={() => {
              // signIn("google");
            }}
          >
            <Image
              src={Google}
              alt="google"
              className="w-[1.5rem] h-[1.5rem]"
            />
            <span>Continue with Google</span>
          </Button>
          <Button
            className="flex gap-[1rem]"
            onClick={() => {
              // signIn("github");
            }}
          >
            <Image
              src={GithubDark}
              alt="github"
              className="w-[1.5rem] h-[1.5rem]"
            />
            <span>Continue with Github</span>
          </Button>
        </div>
        <span>
          No Account? <Link href="/sign-up">Sign-up</Link>
        </span>
      </div>
    </div>
  );
}
