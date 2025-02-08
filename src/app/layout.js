import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmad Ahmed | Portfolio",
  description: "I'm Asma Ahmed a skilled Bioinformatics Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <link rel="icon" href="/asmaa.png" type="image/png" className="rounded-full" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}