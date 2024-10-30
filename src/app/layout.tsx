import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Roboto_Slab } from "next/font/google";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { CLIENT } from "~/lib/constants/config";

const robotoSlab = Roboto_Slab({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const viewport: Viewport = {
  themeColor: "#FF4C00",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(CLIENT.host),
  title: CLIENT.title,
  description: CLIENT.description,
  robots: "index, follow",
  keywords: CLIENT.keywords,
  generator: "Shield",
  creator: "@MKSingh_Dev",
  openGraph: {
    images: `${CLIENT.host}/og-image.png`,
    type: "website",
    locale: "en_US",
    siteName: CLIENT.name,
    title: CLIENT.title,
    description: CLIENT.description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@shield_auth",
    creator: "@MKSingh_Dev",
    title: CLIENT.title,
    description: CLIENT.description,
    images: `${CLIENT.host}/og-image.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${robotoSlab.variable} flex flex-col min-h-svh antialiased bg-background-base overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
