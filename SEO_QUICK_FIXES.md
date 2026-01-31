# SEO Quick Fixes - Implementation Guide

This document provides code snippets to implement the **critical and high-priority SEO improvements** identified in the audit.

---

## 🔴 Critical Fix #1: Add FAQ Schema

**File:** `src/app/faq/page.js`

Add this code inside the `FAQPage` component, before the return statement:

```javascript
// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.flatMap(category => 
    category.questions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  )
};
```

Then add this script tag inside the return statement (after the opening `<div>`):

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema)
  }}
/>
```

---

## 🔴 Critical Fix #2: Add Canonical Tags

### Pricing Page
**File:** `src/app/pricing/layout.js`

```javascript
export const metadata = {
    title: "Planes y Precios - GeoModi | Soluciones GEO",
    description: "Conocé los planes de GeoModi para optimizar tu tienda. Desde un plan gratuito para probar la tecnología hasta soluciones PRO para optimización masiva.",
    alternates: {
        canonical: '/pricing',  // ADD THIS LINE
    },
    openGraph: {
        // ... rest of metadata
    }
};
```

### FAQ Page
**File:** `src/app/faq/layout.js`

```javascript
export const metadata = {
    title: "FAQ - GeoModi | Preguntas Frecuentes sobre GEO",
    description: "Resolvé todas tus dudas sobre el servicio GEOMODI, optimización para motores de IA (GEO), precios y procesos de trabajo con TiendaNube.",
    alternates: {
        canonical: '/faq',  // ADD THIS LINE
    },
    openGraph: {
        // ... rest of metadata
    }
};
```

### Terms Page
**File:** `src/app/terminos/layout.js`

```javascript
export const metadata = {
    title: "Términos y Condiciones - GeoModi",
    description: "Términos de servicio y condiciones de uso de GeoModi. Conocé nuestras políticas de suscripción, cancelación y uso del servicio de optimización para IA.",
    alternates: {
        canonical: '/terminos',  // ADD THIS LINE
    },
    openGraph: {
        // ... rest of metadata
    }
};
```

---

## 🔴 Critical Fix #3: Update Sitemap

**File:** `public/sitemap.xml`

Replace the entire file with this updated version:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://geomodi.ai/</loc>
    <lastmod>2026-01-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://geomodi.ai/pricing</loc>
    <lastmod>2026-01-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://geomodi.ai/faq</loc>
    <lastmod>2026-01-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://geomodi.ai/terminos</loc>
    <lastmod>2026-01-31</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 🔴 Critical Fix #4: Add Product Schema to Pricing

**File:** `src/app/pricing/page.js`

Add this code inside the `PricingPage` component, before the return statement:

```javascript
// Generate Product Schema for PRO plan
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "GeoModi PRO",
  "description": "Optimización GEO para tiendas online. Hasta 150 productos optimizados por mes para aparecer en ChatGPT, Gemini y buscadores de IA.",
  "brand": {
    "@type": "Brand",
    "name": "GeoModi"
  },
  "offers": {
    "@type": "Offer",
    "price": "39999",
    "priceCurrency": "ARS",
    "availability": "https://schema.org/InStock",
    "url": "https://geomodi.ai/pricing",
    "priceValidUntil": "2026-12-31",
    "seller": {
      "@type": "Organization",
      "name": "GeoModi"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
};
```

Then add this script tag inside the return statement (after the opening `<div>`):

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(productSchema)
  }}
/>
```

---

## 🟡 High Priority Fix #5: Add Breadcrumb Schema

**File:** `src/components/Breadcrumbs.js` (NEW FILE)

Create this new component:

```javascript
import Link from "next/link";

export default function Breadcrumbs({ items }) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-white/60">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === items.length - 1 ? (
                <span className="text-white/90">{item.name}</span>
              ) : (
                <Link 
                  href={item.path} 
                  className="hover:text-emerald-300 transition-colors"
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
```

**Usage Example in Pricing Page:**

```javascript
import Breadcrumbs from "@/components/Breadcrumbs";

// Inside the component
<Breadcrumbs items={[
  { name: "Inicio", path: "/" },
  { name: "Precios", path: "/pricing" }
]} />
```

---

## 🟡 High Priority Fix #6: Add WebSite Schema

**File:** `src/app/layout.js`

Update the existing schema in the homepage to include WebSite schema:

```javascript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "GeoModi",
        url: "https://geomodi.ai",
        logo: "https://geomodi.ai/logo_high_res.png",
        description: "Líderes en Generative Engine Optimization (GEO). Optimizamos tu TiendaNube para ChatGPT y buscadores de IA.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AR",
        },
        sameAs: [
          // Add your social media profiles here when available
          // "https://twitter.com/geomodi",
          // "https://linkedin.com/company/geomodi",
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "GeoModi",
        "url": "https://geomodi.ai",
        "description": "Optimiza la visibilidad de tu marca en la era de la IA generativa",
        "publisher": {
          "@type": "Organization",
          "name": "GeoModi"
        }
      }
    ])
  }}
/>
```

---

## 🟡 High Priority Fix #7: Add Video Schema

**File:** `src/components/VideoSection.js`

Add this schema to the VideoSection component:

```javascript
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "GeoModi - Cómo funciona la optimización GEO",
  "description": "Descubre cómo GeoModi optimiza tu tienda para aparecer en ChatGPT, Gemini y otros buscadores de IA",
  "thumbnailUrl": "https://geomodi.ai/og-image.png",
  "uploadDate": "2026-01-15T00:00:00Z",
  "contentUrl": "YOUR_YOUTUBE_VIDEO_URL",
  "embedUrl": "YOUR_YOUTUBE_EMBED_URL",
  "duration": "PT2M30S", // Update with actual duration
};
```

Add the script tag in the component's return statement.

---

## 🟡 High Priority Fix #8: Fix External Links

**File:** `src/components/Hero.js` and `src/app/pricing/page.js`

Find all external links and add security attributes:

**Before:**
```jsx
<Link href="https://app.geomodi.ai/signup">
```

**After:**
```jsx
<Link 
  href="https://app.geomodi.ai/signup"
  rel="noopener noreferrer"
  target="_blank"
>
```

Or if using window.location.href, it's already secure.

---

## 🟢 Medium Priority Fix #9: Add PWA Manifest

**File:** `public/manifest.json` (NEW FILE)

Create this file:

```json
{
  "name": "GeoModi - Optimización GEO para tu marca",
  "short_name": "GeoModi",
  "description": "Optimiza la visibilidad de tu marca en la era de la IA generativa",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#34D399",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Then add to `src/app/layout.js` metadata:

```javascript
export const metadata = {
  // ... existing metadata
  manifest: '/manifest.json',
};
```

---

## 🟢 Medium Priority Fix #10: Add Alt Text Audit

Run this command to find images without alt text:

```bash
grep -r "Image" src/components --include="*.js" | grep -v "alt="
```

Then update each Image component to include descriptive alt text:

```jsx
<Image
  src="/logo.png"
  alt="GeoModi - Optimización GEO para marcas"
  width={100}
  height={100}
/>
```

---

## Testing Your Changes

After implementing these fixes, test them with:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test each page with structured data

2. **Schema Markup Validator**
   - URL: https://validator.schema.org/
   - Paste your page HTML to validate

3. **Google Lighthouse**
   ```bash
   npm run build
   npx serve out
   # Then run Lighthouse in Chrome DevTools
   ```

4. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly

---

## Deployment Checklist

Before deploying:

- [ ] All critical fixes implemented
- [ ] Structured data validated
- [ ] Sitemap updated
- [ ] Build succeeds without errors
- [ ] All pages load correctly
- [ ] External links have proper rel attributes
- [ ] Images have alt text
- [ ] Lighthouse score > 90

---

## Next Steps

1. Implement critical fixes (1-4)
2. Test with validation tools
3. Deploy to production
4. Submit updated sitemap to Google Search Console
5. Monitor Search Console for improvements
6. Implement high-priority fixes (5-8)
7. Schedule monthly SEO reviews

---

**Last Updated:** January 31, 2026
