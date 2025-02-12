import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// animate framer motion :
import { AnimatePresence } from "framer-motion";

// CONTEXT :
import ModalContextProvider from "@/context/modalContext";
import ToogleContextProvider from "@/context/toogleContext";
import HtmlWrapper from "./htmlWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "riobima - portfolio",
  description: "Patrio bimasuci blog, you'll find a greate write",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToogleContextProvider>
      <HtmlWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AnimatePresence mode="wait">
            <ModalContextProvider>{children}</ModalContextProvider>
          </AnimatePresence>
        </body>
      </HtmlWrapper>
    </ToogleContextProvider>
  );
}
