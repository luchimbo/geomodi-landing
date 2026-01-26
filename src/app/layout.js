import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Toaster } from 'sonner'

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
  title: "GeoModi - IA Generativa para tu marca | Líder en GEO",
  description: "Optimiza la visibilidad de tu marca en la era de la IA generativa. Transforma tu catálogo de TiendaNube para que ChatGPT, Gemini y Claude te recomienden.",
  keywords: ["GEO", "Generative Engine Optimization", "IA para e-commerce", "TiendaNube", "Optimización IA", "ChatGPT SEO", "Marketing Digital 2026"],
  authors: [{ name: "GeoModi Team" }],
  metadataBase: new URL('https://geomodi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GeoModi - Domina la búsqueda en la era de la IA",
    description: "La tecnología que traduce tu e-commerce al idioma de la IA. Aparece en las respuestas de ChatGPT y Gemini.",
    url: 'https://geomodi.com',
    siteName: 'GeoModi',
    images: [
      {
        url: '/logo_high_res.png',
        width: 1200,
        height: 630,
        alt: 'GeoModi - IA Generativa para Marcas',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoModi - IA Generativa para Marcas',
    description: '¿Tu marca está preparada para 2026? Optimizá tu catálogo para buscadores de IA.',
    images: ['/logo_high_res.png'],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui', // Debes reemplazar por el código que te da GSC
  },
  category: 'technology',
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
          <Toaster position="top-center" richColors />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}

