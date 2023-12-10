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
        <div className="flex flex-col items-center min-h-screen bg-white">
          <div className="w-full xl:w-[1200px] mt-28 sm:px-2 lg:px-4 px-6">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold">계정 설정</h1>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7 14C10.623 14 9.74999 13.1046 9.74999 12C9.74999 10.8954 10.623 10 11.7 10C12.7769 10 13.65 10.8954 13.65 12C13.65 12.5304 13.4445 13.0391 13.0789 13.4142C12.7132 13.7893 12.2172 14 11.7 14Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.8841 16.063V14.721C16.8841 14.3887 17.0128 14.07 17.2419 13.835L18.1672 12.886C18.6443 12.3967 18.6443 11.6033 18.1672 11.114L17.2419 10.165C17.0128 9.93001 16.8841 9.61131 16.8841 9.27899V7.93599C16.8841 7.24398 16.3371 6.68299 15.6624 6.68299H14.353C14.029 6.68299 13.7182 6.55097 13.4891 6.31599L12.5638 5.36699C12.0867 4.87767 11.3132 4.87767 10.8361 5.36699L9.91087 6.31599C9.68176 6.55097 9.37102 6.68299 9.04702 6.68299H7.73759C7.41341 6.68299 7.10253 6.81514 6.87339 7.05034C6.64425 7.28554 6.51566 7.6045 6.51592 7.93699V9.27899C6.51591 9.61131 6.3872 9.93001 6.15809 10.165L5.23282 11.114C4.75573 11.6033 4.75573 12.3967 5.23282 12.886L6.15809 13.835C6.3872 14.07 6.51591 14.3887 6.51592 14.721V16.063C6.51592 16.755 7.06288 17.316 7.73759 17.316H9.04702C9.37102 17.316 9.68176 17.448 9.91087 17.683L10.8361 18.632C11.3132 19.1213 12.0867 19.1213 12.5638 18.632L13.4891 17.683C13.7182 17.448 14.029 17.316 14.353 17.316H15.6614C15.9856 17.3163 16.2966 17.1844 16.5259 16.9493C16.7552 16.7143 16.8841 16.3955 16.8841 16.063Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="mt-6 w-fit mx-auto">
              <img
                src={session?.user?.image}
                className="rounded-full"
                alt="profile picture"
              />
            </div>
            <div className="grid grid-cols-1 mt-10 gap-3">
              <button
                className="w-1/2 text-white bg-black text-center transform ease-in duration-100 active:scale-95 items-center rounded-xl m-auto py-2 font-bold"
                onClick={() => signIn("discord")}
              >
                서버 관리
              </button>
              <button
                className="w-1/2 text-white bg-black text-center transform ease-in duration-100 active:scale-95 items-center rounded-xl m-auto py-2 font-bold"
                onClick={() => signOut()}
              >
                로그아웃
              </button>
              <button
                className="w-1/2 text-white bg-black text-center transform ease-in duration-100 active:scale-95 items-center rounded-xl m-auto py-2 font-bold"
                onClick={() => signIn("discord")}
              >
                탈퇴하기
              </button>
              <button
                className="w-1/2 text-white bg-black text-center transform ease-in duration-100 active:scale-95  items-center rounded-xl m-auto py-2 font-bold"
                onClick={() => signIn("discord")}
              >
                서포트 서버
              </button>
            </div>
          </div>
        </div>
      </AuthContext>
    );
}
