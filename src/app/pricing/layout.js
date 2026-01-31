export const metadata = {
    title: "Planes y Precios - GeoModi | Soluciones GEO",
    description: "Conocé los planes de GeoModi para optimizar tu tienda. Desde un plan gratuito para probar la tecnología hasta soluciones PRO para optimización masiva.",
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        title: "Planes y Precios - GeoModi | Empezá hoy tu camino en la IA",
        description: "Elegí el plan que mejor se adapte a tu marca y dominá los resultados de búsqueda de IA en 2026.",
        url: "https://geomodi.ai/pricing",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "GeoModi - Mapping the Future",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Planes y Precios - GeoModi",
        description: "Elegí el plan que mejor se adapte a tu marca y dominá los resultados de búsqueda de IA en 2026.",
        images: ["/og-image.png"],
    }
};

export default function PricingLayout({ children }) {
    return <>{children}</>;
}
