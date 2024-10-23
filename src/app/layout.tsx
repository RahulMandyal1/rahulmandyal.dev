import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Rahul Mandyal",
  description: "Full-Stack Software Engineer .",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-auto min-h-screen max-w-3xl antialiased text-gray-100 bg-primaryBg  ${space_grotesk.className} `}
      >
        <main className="mx-4  px-2 md:px-0 lg:mx-auto  min-h-screen  bg-primaryBg ">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
