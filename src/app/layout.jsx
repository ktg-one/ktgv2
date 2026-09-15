import { Fraunces, Ubuntu, Inter, Syne } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const iosevka = localFont({
  src: [
    { path: "../../public/fonts/Iosevka-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Iosevka-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://goodai.au'), 
  title: {
    default: "Good'ai — Business automations, sorted.",
    template: "%s | Good'ai"
  },
  description: "We build the boring stuff so your week gets shorter. Fixed-price automation, voice agents and clear terms, built in Perth and delivered online.",
  icons: {
    icon: "/assets/ktg.svg",
    shortcut: "/assets/ktg.svg",
  },
  openGraph: {
    title: "Good'ai — Business automations, sorted.",
    description: "We build the boring stuff so your week gets shorter. Fixed-price automation, voice agents and clear terms, built in Perth and delivered online.",
    type: "website",
    locale: "en_AU",
    siteName: "Good'ai Australia",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Good'ai Preview",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-black">
      <head>
      </head>
      <body
        className={`${fraunces.variable} ${ubuntu.variable} ${syne.variable} ${inter.variable} ${iosevka.variable} antialiased text-foreground overflow-x-hidden selection:bg-[#F3A62A] selection:text-[#111111] relative font-sans`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}