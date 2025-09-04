import type { Metadata } from "next";
import { Inter, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "MoharChess - Chess Classes for All Ages",
  description: "Become a Chess Pro with MoharChess! Chess can be a challenging and rewarding pursuit that offers both mental and physical benefits for those who engage in it.",
  keywords: "chess, kids, children, chess classes, chess lessons, chess school, chess training, mohar chess",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${manrope.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
