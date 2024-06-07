'use client';

import GithubDark from '@/assets/github-dark.png';
import GithubLight from '@/assets/github-light.png';
import Google from '@/assets/google.png';
import { Button } from '@/components/ui/button';
import { AppStore } from '@/store/appStore';
import { signIn } from "next-auth/react";
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export default function SignUp() {
  const store = AppStore();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="border-2 border-border rounded-2xl px-8 py-12 ">
        <div className="xkill"></div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0rem]">
            <span className="font-extrabold text-2xl">Create Your Account</span>
            <span>to continue to xkill</span>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <Button
              className="text-primary bg-transparent flex gap-[1rem] border-2 border-border py-6"
              onClick={() => {
                signIn("google");
              }}
            >
              <Image
                src={Google}
                alt="google"
                className="w-[1.5rem] h-[1.5rem]"
              />
              <span className="mr-[6rem] md:mr-[10rem]">Continue with Google</span>
            </Button>
            <Button
              className="text-primary bg-transparent flex gap-[1rem] border-2 border-border py-6"
              onClick={() => {
                signIn("github");
              }}
            >
              {store.theme === 'light' ? (
                <Image
                  src={GithubLight}
                  alt="github"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              ) : (
                <Image
                  src={GithubDark}
                  alt="github"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              )}
              <span className="mr-[6rem] md:mr-[10rem]">Continue with Github</span>
            </Button>
          </div>
          <span className="text-[0.8rem]">
            Have an account?{' '}
            <Link href="/sign-in" className="underline">
              Sign-in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
