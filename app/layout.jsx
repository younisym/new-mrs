import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "MRS Developments — A Vision Set In Stone",
  description:
    "MRS Developments — twenty-two years of regional craft, delivered. A leading Egyptian real-estate developer shaping residential, hospitality, and industrial landmarks across the UAE and Egypt.",
  metadataBase: new URL("https://mrsdevelopment.com"),
  openGraph: {
    title: "MRS Developments — A Vision Set In Stone",
    description:
      "Twenty-two years of regional craft across the UAE and Egypt. Not just building — elevating remarkable experiences.",
    type: "website",
    locale: "en_US",
    siteName: "MRS Developments"
  },
  twitter: {
    card: "summary_large_image",
    title: "MRS Developments — A Vision Set In Stone",
    description:
      "Twenty-two years of regional craft across the UAE and Egypt."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport = {
  themeColor: "#0a0d0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap"
        />
        {/* Preload hero image so the homepage paints quickly */}
        <link rel="preload" as="image" href="/images/hero-2.png" />
      </head>
      <body className="bg-ink-950 text-ivory-100 antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
