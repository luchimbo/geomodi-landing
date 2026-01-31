import Link from "next/link";

export default function Breadcrumbs({ items, theme = "dark" }) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://geomodi.ai${item.path}`
        }))
    };

    const isDark = theme === "dark";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className={`flex items-center space-x-2 text-sm ${isDark ? 'text-white/60' : 'text-[#1A0B5E]/60'}`}>
                    {items.map((item, index) => (
                        <li key={item.path} className="flex items-center">
                            {index > 0 && <span className="mx-2">/</span>}
                            {index === items.length - 1 ? (
                                <span className={isDark ? 'text-white/90' : 'text-[#1A0B5E]/90'}>{item.name}</span>
                            ) : (
                                <Link
                                    href={item.path}
                                    className={`transition-colors ${isDark ? 'hover:text-emerald-300' : 'hover:text-emerald-600'}`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
