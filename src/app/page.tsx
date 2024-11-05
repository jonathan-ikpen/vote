import Image from "next/image";
import Logo from "../../public/pti-logo.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full gap-5 p-6">
      {/* <Image src={Logo} alt={'pti logo'} width={150} /> */}
      <h1 className="text-5xl font-extrabold text-center">PTI Voting System</h1>
      <p className="text-lg max-md:text-sm max-w-[700px] text-center font-semibold">A <span className="text-green-600">Safe</span> and <span className="text-green-600">Automated</span> way to Register and Vote From the <span className="text-green-600">Comfort</span> of your hostels and homes without the hassle of queues.</p>
      <Button className="p-6 bg-green-600 hover:bg-green-800">
        <Link href={'/register'}>Get Started</Link>
      </Button>
    </main>
  );
}
