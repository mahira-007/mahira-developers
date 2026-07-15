import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import CursorSpotlight from "@/components/CursorSpotlight";

// Body font — clean, neutral, highly legible
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Heading font — condensed, modern, bold
const interTight = Inter_Tight({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata = {
  title: "Mahira Developers | Premium Luxury Residential Plots & Real Estate",
  description: "Discover premium residential plots and luxury gated township layouts in Tamil Nadu's fastest growing hubs by Mahira Developers.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
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


