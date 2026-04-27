import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const signature = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-signature" });

export const metadata: Metadata = {
  title: "Don Bosco School, Park Circus • Official Website",
  description: "Welcome to the official website of Don Bosco School, Park Circus, Kolkata. Discover our academics, co-curricular activities, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${signature.variable} font-sans antialiased bg-cream`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
