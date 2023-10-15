import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const popins = Poppins({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MakramyOdSerca.pl",
    description: "Makramy od serca",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl">
            <body className={popins.className}>{children}</body>
        </html>
    );
}
