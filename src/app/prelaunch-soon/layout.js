export const metadata = {
    title: "Próximamente - GeoModi",
    description: "La integración con tu plataforma de e-commerce estará disponible muy pronto. Registrate para recibir un beneficio exclusivo cuando se habilite.",
    openGraph: {
        title: "Próximamente - GeoModi | Integración con tu plataforma",
        description: "Mirá cómo GeoModi optimiza tus productos para que la IA los entienda y recomiende. ¡Beneficio exclusivo para early adopters!",
        url: "https://geomodi.ai/prelaunch-soon",
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
        title: "Próximamente - GeoModi",
        description: "Mirá cómo GeoModi optimiza tus productos para que la IA los entienda y recomiende.",
        images: ["/og-image.png"],
    }
};

export default function PrelaunchSoonLayout({ children }) {
    return <>{children}</>;
}
