import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContextProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aashish Kushwaha | Portfolio",
  description:
    "Aashish Kushwaha - Software Engineer with expertise in Python-based data engineering, backend APIs, and LLM-powered automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 top-0 text-gray-950 pt-28 sm:pt-36 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#bae6fd] absolute -z-10 top-[-6rem] right-[-11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#1e3a5f]
        "
        ></div>
        <div
          className="bg-[#99f6e4] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem]
        w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#134e4a]
        "
        ></div>
        <ThemeContextProvider>
          <Toaster position="top-right" />
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
