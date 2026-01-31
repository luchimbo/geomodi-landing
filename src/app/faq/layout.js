export const metadata = {
    title: "FAQ - GeoModi | Preguntas Frecuentes sobre GEO",
    description: "Resolvé todas tus dudas sobre el servicio GEOMODI, optimización para motores de IA (GEO), precios y procesos de trabajo con TiendaNube.",
    alternates: {
        canonical: '/faq',
    },
    openGraph: {
        title: "FAQ - GeoModi | Todo sobre la Optimización para IA",
        description: "Preguntas frecuentes sobre cómo posicionar tu marca en ChatGPT, Gemini y los nuevos buscadores generativos.",
        url: "https://geomodi.ai/faq",
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
        title: "FAQ - GeoModi | Preguntas Frecuentes",
        description: "Preguntas frecuentes sobre cómo posicionar tu marca en ChatGPT, Gemini y los nuevos buscadores generativos.",
        images: ["/og-image.png"],
    }
};

export default function FAQLayout({ children }) {
    return <>{children}</>;
}
