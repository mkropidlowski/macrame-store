"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Home, Instagram } from "./icons";
import macrameLogo from "@/public/images/macrameLogo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full z-10 bg-white flex flex-col lg:flex-row items-center justify-between px-5 lg:px-10 py-5 shadow-md">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                    <Image src={macrameLogo} alt="Logo Macrame" width={42} height={42} quality={100} priority={true} />
                    <Link href={"/"}>
                        <h2 className="md:text-2xl text-xl font-medium tracking-wider drop-shadow-md">
                            MakramyOdSerca.pl
                        </h2>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            <ul
                className={`${menuOpen ? "block" : "hidden"} w-full lg:flex lg:flex-row text-center gap-4 mt-4 lg:mt-0`}
            >
                <li onClick={closeMenu}>
                    <Link href={"/"}>
                        <Button fullWidth>
                            <Home width={30} height={21} />
                        </Button>
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link href={"/#o-mnie"}>
                        <Button fullWidth>o mnie</Button>
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link href={"/#modele"}>
                        <Button fullWidth>modele</Button>
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link href={"/#dostepne-od-reki"}>
                        <Button fullWidth>dostępne od ręki</Button>
                    </Link>
                </li>
                <li onClick={closeMenu}>
                    <Link href={"/#kontakt"}>
                        <Button fullWidth>kontakt</Button>
                    </Link>
                </li>
                <li className="flex items-center justify-center">
                    <Link href={"https://www.instagram.com/makramy.od.serca/"} legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Instagram width={35} height={35} />
                        </a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
