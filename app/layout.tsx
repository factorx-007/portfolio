import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Franclin Gonzales | Futuristic Portfolio",
  description: "Full-Stack Developer Portfolio - Futurism & Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-background text-foreground selection:bg-neon-cyan selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
