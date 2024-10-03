import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

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
        className={`mx-auto min-h-screen max-w-3xl antialiased dark:bg-zinc-950 dark:text-gray-100 ${space_grotesk.className} text-white`}
      >
        <main className="mx-4  px-2 md:px-0 lg:mx-auto  min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
