import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Mukta({ subsets: ["devanagari"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
    title: "YoWatch | watch your favorite movies and tv shows",
    description: "Watch your favorite movies and tv shows",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-black bg-opacity-80")}>
                {children}
            </body>
        </html>
    );
}
