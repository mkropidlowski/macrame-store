import Link from "next/link";
import { InstagramLogo } from "../icons";

const Contact = () => (
    <div className="max-w-[1240px] mt-[150px] scroll-mt-[100px]" id="kontakt">
        <div className="flex flex-col items-center h-[600px]">
            <h2 className="font-bold text-[45px]">Kontakt</h2>
            <Link href={"https://www.instagram.com/makramy.od.serca/"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                    <InstagramLogo width={350} height={100} />
                </a>
            </Link>
        </div>
    </div>
);

export default Contact;
