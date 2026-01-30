import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import ScrollTriggerRefresh from "./components/ScrollTriggerRefresh";

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
    <html lang="de">
      <body className="antialiased">
        <ScrollTriggerRefresh />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
