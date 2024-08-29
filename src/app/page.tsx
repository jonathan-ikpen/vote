import Image from "next/image";
import Logo from "../../public/Logo-vote-animated.gif"

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-full">
      <h1 className="text-5xl font-extrabold text-center">Voting System</h1>
      {/* <Image src={Logo} width={700} alt={'Animated Logo'} /> */}
    </main>
  );
}
