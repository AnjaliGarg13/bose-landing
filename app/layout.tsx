import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bose QuietComfort Ultra Pro — Built for how your mind actually moves.",
  description:
    "Flagship wireless headphones engineered for professionals. Six-mic AI beamforming, FlowState device switching, and all-day comfort. Clear calls. Seamless switching. All-day control.",
  openGraph: {
    title: "Bose QuietComfort Ultra Pro",
    description: "Built for how your mind actually moves.",
    images: ["/images/hero-lifestyle.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#08080A] text-[#F0EDE8]`}>
        {children}
      </body>
    </html>
  );
}
