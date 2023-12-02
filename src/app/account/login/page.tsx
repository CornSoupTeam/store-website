"use client";

import { signIn, useSession, signOut } from "next-auth/react";

import AuthContext from "../authcontent";

export default function AuthenticationPage() {
  const { data: session, status } = useSession();

  if (status == "unauthenticated") {
    return (
      <div className="flex min-h-screen bg-white flex flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Cornbot에 오신 것을 환영합니다!
          </h2>
        </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <button
              className="w-full text-white bg-indigo-500 text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
              onClick={() => signIn("discord", { callbackUrl: "/account" })}
            >
              Discord로 로그인하기
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500"></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen bg-white flex flex-col justify-center px-6 lg:px-8"></div>
    );
  }
}
