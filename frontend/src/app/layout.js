import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import CursorSpotlight from "@/components/CursorSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahira Developers | Premium Luxury Residential Plots & Real Estate",
  description: "Discover premium residential plots and luxury gated township layouts in Tamil Nadu's fastest growing hubs by Mahira Developers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Loader />
          <CursorSpotlight />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


