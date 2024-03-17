import type { Metadata } from "next";

import AuthContext from "./authcontent";

export const metadata: Metadata = {
  title: "어부바",
  description: "당신을 위한 디스코드 서버, 어부바와 함께하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext>
      <main className="min-h-screen">{children}</main>
    </AuthContext>
  );
}
