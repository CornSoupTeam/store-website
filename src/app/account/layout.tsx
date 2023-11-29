import type { Metadata } from "next";

import AuthContext from "./authcontent";

export const metadata: Metadata = {
  title: "SVER-DEV",
  description: "SVER-DEV의 강력한 인프라와 함께하세요 :>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext>
      <main>{children}</main>
    </AuthContext>
  );
}
