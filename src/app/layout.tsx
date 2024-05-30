import type { Metadata } from "next";
import "./globals.css";
import { Space_Mono } from "next/font/google";
const mono = Space_Mono({ subsets: ["latin"], weight: "400" });
export const Mono_space_700 = Space_Mono({ subsets: ["latin"], weight: "700", });
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
