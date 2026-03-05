import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adithyan A | Full-Stack Software Engineer",
  description: "Portfolio of Adithyan A — Full-Stack Software Engineer, CS Student, and Linux enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Providers>
          {/* The cursor trail canvas lives above everything but doesn't block clicks */}
          <FluidCursor />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
