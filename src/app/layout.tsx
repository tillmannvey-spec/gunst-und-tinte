import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./components/Navigation";
import ScrollTriggerRefresh from "./components/ScrollTriggerRefresh";

// Casta Font - Variable Font
const casta = localFont({
  src: "../../public/fonts/casta/Casta-Full-Variable-Font-FV.ttf",
  variable: "--font-casta",
  display: "swap",
  weight: "100 900",
});

// Space Mono Font
const spaceMono = localFont({
  src: [
    {
      path: "../../public/fonts/space-mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/space-mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gunst & Tinte - Letterpress Atelier & Grafikdesign",
  description: "Letterpress Atelier & Grafikdesign von Theresa - Handgefertigte Drucke und individuelles Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${casta.variable} ${spaceMono.variable}`}>
      <body className="antialiased">
        <ScrollTriggerRefresh />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
