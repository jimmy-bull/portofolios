import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Space_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Mobile from "@/components/mycustom/mobile";
const inter = Inter({ subsets: ["latin"] });
const mono = Space_Mono({ subsets: ["latin"], weight: "400" });
export const Mono_space_700 = Space_Mono({ subsets: ["latin"], weight: "700", variable: '--font-mono-700', });
import Web1 from "@/components/mycustom/web1";
import Web2 from "@/components/mycustom/web2";
import Web3 from "@/components/mycustom/web3";
import Stack from "@/components/mycustom/stack";
import { StoreProvider } from "./redux/storeprovider";

export const metadata: Metadata = {
    title: "Bull Jimmy",
    description: "This the portofolio website for Bull Jimmy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={mono.className}>
                        {children}
                </body>
            </html>
        </StoreProvider>
    );
}
