import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  title: "GROUNDEYE | On-Ground Concierge & Asset Audit | Udaipur, Rajasthan",
  description:
    "Distance Is Yours. Duty Is Ours. GroundEye is Udaipur's dedicated on-ground concierge and asset audit enterprise. Specializing in Asset Intelligence, Villa & BnB Care, and Fast-Rent Scout.",
  keywords: [
    "GroundEye",
    "Asset Audit Udaipur",
    "Physical Property Inspection Udaipur",
    "GPS Timestamped Property Verification",
    "Villa Care Udaipur",
    "Homestay BnB Concierge Udaipur",
    "Fast Rent Scout Rajasthan",
    "Distance is yours duty is ours",
    "A New Perspective A New Presence",
  ],
  authors: [{ name: "GROUNDEYE" }],
  openGraph: {
    title: "GROUNDEYE | A New Perspective. A New Presence.",
    description:
      "Distance is yours, duty is ours. Independent on-ground concierge & asset audit enterprise in Udaipur, Rajasthan. Asset Intelligence, Villa & BnB Care, Fast-Rent Scout.",
    url: "https://groundeye.in",
    siteName: "GROUNDEYE",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1C1A] antialiased selection:bg-[#B89360] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
