import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cybermaxi News App",
  description: "A News Web App Created By Cybermaxi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 transition-all duration-700 dark:bg-zinc-900
      `}
      >
        <Providers>
          <div className="mx-auto max-w-6xl">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
