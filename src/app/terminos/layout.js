export const metadata = {
    title: "Términos y Condiciones - GeoModi",
    description: "Términos de servicio y condiciones de uso de GeoModi. Conocé nuestras políticas de suscripción, cancelación y uso del servicio de optimización para IA.",
    alternates: {
        canonical: '/terminos',
    },
    openGraph: {
        title: "Términos y Condiciones - GeoModi",
        description: "Lee nuestros términos de servicio y condiciones de uso.",
        url: "https://geomodi.ai/terminos",
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
        title: "Términos y Condiciones - GeoModi",
        description: "Lee nuestros términos de servicio y condiciones de uso.",
        images: ["/og-image.png"],
    }
};

export default function TerminosLayout({ children }) {
    return <>{children}</>;
}
