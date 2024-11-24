import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { RootProvider } from "@/components/root-provider";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const fontLogo = localFont({
  src: "../../public/fonts/neopixel-regular.otf",
  variable: "--font-logo",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.name,
  icons: {
    icon: "/kleio-grad.png",
    shortcut: "/kleio-grad.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1920,
        height: 1080,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Kleio",
    title: siteConfig.name,
    description: siteConfig.description,
    images: {
      url: siteConfig.ogImage,
      width: 1920,
      height: 1080,
      alt: siteConfig.name,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable,
          fontHeading.variable,
          fontLogo.variable
        )}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
