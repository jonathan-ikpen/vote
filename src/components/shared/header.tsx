import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import LogoNosh from "../../../public/logo-no-sh.png"

const HomeHeader = () => {
  return (
        <div className="flex justify-between w-full absolute p-6">
            <Link href={'/'}>
            <h1 className="text-xl font-bold text-center flex gap-2 items-center ">
                Pti<Image src={LogoNosh} width={70} alt={'Logo'} className=" fopacity-0 " />
            </h1>
               
            </Link>
            <div className="flex gap-4">
                <Button variant={'outline'} asChild>
                    <Link href="/register">
                        Register
                    </Link>
                </Button>
                <Button variant={'link'} asChild>
                    <Link href="/vote">
                        Vote
                    </Link>
                </Button>
            </div>
        </div>
        );
};

export default HomeHeader;
