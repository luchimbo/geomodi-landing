export const metadata = {
    title: "Conectá tu tienda - GeoModi",
    description: "Ingresá el URL de tu tienda y seleccioná tu plataforma de e-commerce para comenzar a optimizar tus productos con IA generativa.",
    openGraph: {
        title: "Conectá tu tienda - GeoModi",
        description: "Optimizá tu tienda para que la IA la entienda y recomiende tus productos.",
        url: "https://geomodi.ai/prelaunch",
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
        title: "Conectá tu tienda - GeoModi",
        description: "Optimizá tu tienda para que la IA la entienda y recomiende tus productos.",
        images: ["/og-image.png"],
    }
};

export default function PrelaunchLayout({ children }) {
    return <>{children}</>;
}
