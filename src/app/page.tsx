import Image from "next/image";
import logo from "../../public/logo.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white py-36">
      <Image src={logo} alt="logo" width={100} height={500} />
      <div className="text-3xl font-bold">
        웹 스토어 봇 Cornbot에 오신 것을 환영합니다!
      </div>
      <h1 className="my-1">위의 로고를 누르면 대시보드로 이동합니다.</h1>
    </main>
  );
}
