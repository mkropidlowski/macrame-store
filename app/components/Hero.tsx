import Image from "next/image";
import macrame from "@/public/images/macrame.png";
import Button from "./Button";
import Header from "./Header";
import Link from "next/link";
import { InstagramLogo } from "./icons";

const Hero = () => (
    <>
        <Header />
        <div className="w-full md:h-[85vh] h-screen flex justify-center items-center bg-gradient-to-b from-[#fff3ee] to-[#ffdfd0] shadow-md">
            <div className="flex flex-col items-center mt-11">
                <div className="flex justify-center items-center w-[130px] h-[130px] rounded-full bg-white mt-[50px]">
                    <Image src={macrame} alt="Macrame" quality={100} priority={true} />
                </div>
                <div className="md:w-full w-[300px] flex flex-col items-center gap-5 mt-10">
                    <h2 className="text-[42px] text-center font-bold bg-gradient-to-r from-[#e300ab] to-[#c81e2b] bg-clip-text text-transparent drop-shadow-sm">
                        Ozdób Swój Dom Wyjątkowymi Makramami
                    </h2>
                    <h3 className="md:text-[36px] text-[30px] text-center font-medium bg-gradient-to-l from-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                        Unikalne Makramy Ręcznie Robione
                    </h3>
                    <Link href={"/#modele"}>
                        <Button>Sprawdź dostępne modele</Button>
                    </Link>
                    <h3 className="text-sm font-medium">oraz sprawdź mój profil</h3>
                    <Link href={"https://www.instagram.com/makramy.od.serca/"} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <InstagramLogo width={350} height={100} className="relative top-[-25px]" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </>
);

export default Hero;
