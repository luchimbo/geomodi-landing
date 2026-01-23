import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import PostHogPageView from './PostHogPageView'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "GeoModi - IA Generativa para tu marca",
  description: "Optimiza la visibilidad de tu marca en la era de la IA generativa.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <PHProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
        >
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
        </body>
      </PHProvider>
    </html>
  );
}

