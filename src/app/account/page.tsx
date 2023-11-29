"use client";

import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";

// import discordlogo from "../../public/discord.svg";
import AuthContext from "./authcontent";

export default function AuthenticationPage() {
  const { data: session, status } = useSession();
  if (status == "unauthenticated") {
    return (
      <div>
        <meta http-equiv="refresh" content="0; url=/account/login"></meta>
      </div>
    );
  } else
    return (
      <AuthContext>
        <div className="flex min-h-screen bg-white flex flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <Image
            className="h-20 w-auto inline-block mr-5"
            src={sverdevlogo}
            alt="SverDevLogo"
          /> */}
            <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
              유저님, 환영합니다.
            </h2>
          </div>
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <button
                className="w-full text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
                onClick={() => signIn("discord")}
              >
                {/* <Image
                className="h-6 w-auto inline-block mr-2"
                src={discordlogo}
                alt="Discord"
              /> */}
                구매 내역
              </button>
              <button
                className="w-full text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
                onClick={() => signIn("discord")}
              >
                {/* <Image
                className="h-6 w-auto inline-block mr-2"
                src={discordlogo}
                alt="Discord"
              /> */}
                서버 관리하기
              </button>
              <button
                className="w-full text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
                onClick={() => signIn("discord")}
              >
                {/* <Image
                className="h-6 w-auto inline-block mr-2"
                src={discordlogo}
                alt="Discord"
              /> */}
                로그아웃
              </button>
              <button
                className="w-full text-white bg-black text-center transform ease-in duration-100 active:scale-95 mt-2 items-center rounded-xl m-auto py-2 font-bold pl-4"
                onClick={() => signOut()}
              >
                {/* <Image
                className="h-6 w-auto inline-block mr-2"
                src={discordlogo}
                alt="Discord"
              /> */}
                회원 탈퇴하기
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500"></p>
          </div>
        </div>
      </AuthContext>
    );
}
