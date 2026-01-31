# 🧪 Testing Commands - SEO Improvements

Este archivo contiene todos los comandos y URLs para testear las mejoras SEO implementadas.

---

## 🏗️ Build & Local Testing

### 1. Build de Producción
```bash
npm run build
```
**Esperado:** Build exitoso sin errores

### 2. Preview Local
```bash
npx serve out
```
**Esperado:** Sitio disponible en http://localhost:3000

---

## 🔍 Online Validation Tools

### Google Rich Results Test

#### Homepage (Organization + WebSite Schema)
```
https://search.google.com/test/rich-results?url=https://geomodi.ai/
```
**Esperado:** 
- ✅ Organization schema válido
- ✅ WebSite schema válido

#### Pricing Page (Product + Breadcrumb Schema)
```
https://search.google.com/test/rich-results?url=https://geomodi.ai/pricing
```
**Esperado:**
- ✅ Product schema válido
- ✅ BreadcrumbList schema válido
- ✅ Precio mostrado: ARS $39.999

#### FAQ Page (FAQPage + Breadcrumb Schema)
```
https://search.google.com/test/rich-results?url=https://geomodi.ai/faq
```
**Esperado:**
- ✅ FAQPage schema válido
- ✅ BreadcrumbList schema válido
- ✅ Todas las preguntas listadas

---

## 📋 Schema Validator (Schema.org)

### Validar Homepage
```
https://validator.schema.org/#url=https://geomodi.ai/
```

### Validar Pricing
```
https://validator.schema.org/#url=https://geomodi.ai/pricing
```

### Validar FAQ
```
https://validator.schema.org/#url=https://geomodi.ai/faq
```

**Esperado:** Todos los schemas sin errores ni warnings

---

## 📱 Mobile & Accessibility Testing

### Mobile-Friendly Test
```
https://search.google.com/test/mobile-friendly?url=https://geomodi.ai/
```
**Esperado:** ✅ Page is mobile friendly

### PWA Testing
1. Abrir sitio en Chrome
2. Abrir DevTools (F12)
3. Ir a "Application" tab
4. Click en "Manifest"

**Esperado:**
- ✅ Manifest loaded: `/manifest.json`
- ✅ Name: "GeoModi - Optimización GEO para tu marca"
- ✅ Icons: 2 icons loaded
- ✅ Theme color: #34D399

---

## 🚀 Google Lighthouse Audit

### Comando CLI
```bash
npm install -g lighthouse
lighthouse https://geomodi.ai/ --view
```

### Chrome DevTools
1. Abrir sitio en Chrome
2. F12 para DevTools
3. Click pestaña "Lighthouse"
4. Seleccionar "SEO" y "Best Practices"
5. Click "Analyze page load"

**Esperado:**
- SEO Score: >90
- Best Practices: >90
- Accessibility: >80

---

## 🔗 Sitemap Testing

### Verificar Sitemap
```
https://geomodi.ai/sitemap.xml
```

**Esperado:**
```xml
✅ https://geomodi.ai/
✅ https://geomodi.ai/pricing
✅ https://geomodi.ai/faq
✅ https://geomodi.ai/terminos
```

### Validar XML
```
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```
Pegar: `https://geomodi.ai/sitemap.xml`

---

## 🔍 Canonical Tags Verification

### Manual Check
Abrir cada página y buscar en source code:

#### Pricing
```
view-source:https://geomodi.ai/pricing
```
Buscar: `<link rel="canonical" href="https://geomodi.ai/pricing"`

#### FAQ
```
view-source:https://geomodi.ai/faq
```
Buscar: `<link rel="canonical" href="https://geomodi.ai/faq"`

#### Terminos
```
view-source:https://geomodi.ai/terminos
```
Buscar: `<link rel="canonical" href="https://geomodi.ai/terminos"`

---

## 🎯 Breadcrumb Testing

### Visual Check
1. Ir a https://geomodi.ai/pricing
2. Verificar breadcrumb visible: **Inicio / Precios**
3. Ir a https://geomodi.ai/faq
4. Verificar breadcrumb visible: **Inicio / FAQ**

### Schema Check
Ver source code de pricing o faq, buscar:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

---

## 🔬 Structured Data Testing (Manual)

### Product Schema (Pricing Page)
```javascript
// Abrir console en /pricing
// Buscar en HTML:
document.querySelector('script[type="application/ld+json"]').textContent
```

**Esperado:** JSON con Product schema, price: "39999", currency: "ARS"

### FAQ Schema (FAQ Page)
```javascript
// Abrir console en /faq
// Buscar en HTML:
document.querySelector('script[type="application/ld+json"]').textContent
```

**Esperado:** JSON con FAQPage schema y array de Questions

---

## 📊 Google Search Console

### Después del Deploy

#### 1. Submit Sitemap
```
https://search.google.com/search-console
```
1. Seleccionar propiedad `geomodi.ai`
2. Ir a "Sitemaps"
3. Agregar: `https://geomodi.ai/sitemap.xml`

#### 2. Request Indexing
Para cada página nueva/actualizada:
1. Ir a "URL Inspection"
2. Pegar URL
3. Click "Request Indexing"

URLs a indexar:
- `https://geomodi.ai/`
- `https://geomodi.ai/pricing`
- `https://geomodi.ai/faq`
- `https://geomodi.ai/terminos`

#### 3. Monitor Rich Results
1. Ir a "Enhancements"
2. Ver secciones:
   - FAQs
   - Products
   - Breadcrumbs

**Esperado (después de 1-2 semanas):**
- ✅ FAQ rich snippets detectados
- ✅ Product rich snippets detectados
- ✅ Breadcrumb rich snippets detectados

---

## 🐛 Common Issues & Solutions

### Issue: Schema no detectado
**Solución:** 
1. Verificar que el script está en el HTML (view source)
2. Validar JSON en https://jsonlint.com/
3. Re-test con Google Rich Results Test

### Issue: Canonical no funciona
**Solución:**
1. Verificar que está en `<head>` section
2. Verificar URL absoluta correcta
3. Limpiar caché del browser

### Issue: Breadcrumb no visible
**Solución:**
1. Verificar import de componente
2. Check console por errores
3. Verificar theme prop (dark/light)

---

## ✅ Pre-Deploy Checklist

Antes de hacer deploy a producción:

- [ ] Build sin errores: `npm run build`
- [ ] Sitemap válido (4 páginas)
- [ ] Canonical tags en todas las páginas
- [ ] Breadcrumbs visibles en /pricing y /faq
- [ ] Manifest.json accesible
- [ ] No hay errores en consola del browser
- [ ] Todos los links funcionan
- [ ] Schemas validados con Google Rich Results Test

---

## 📈 Monitoring Post-Deploy

### Semana 1
- [ ] Verificar indexación en Google Search Console
- [ ] Revisar errores de rastreo
- [ ] Confirmar que sitemap fue procesado
- [ ] Verificar rich snippets empiezan a aparecer

### Semana 2-4
- [ ] Monitorear posiciones de keywords
- [ ] Revisar CTR en Search Console
- [ ] Analizar impresiones y clicks
- [ ] Verificar Core Web Vitals

### Mes 2-3
- [ ] Análisis completo de tráfico orgánico
- [ ] Revisar conversiones from organic
- [ ] Analizar páginas top performers
- [ ] Planear próximas optimizaciones

---

## 🎯 Expected Results Timeline

### Inmediato (Deploy day)
- ✅ Sitemap actualizado
- ✅ Canonical tags activos
- ✅ Breadcrumbs visibles

### 1-3 días
- ✅ Google re-crawlea páginas
- ✅ Schemas detectados en Search Console

### 1-2 semanas
- ✅ Rich snippets empiezan a aparecer en búsquedas
- ✅ 15-20% mejora en visibilidad

### 1 mes
- ✅ 25-35% mejora en CTR
- ✅ Rankings mejorados para keywords objetivo

---

## 🛠️ Tools Quick Links

| Tool | URL | Purpose |
|------|-----|---------|
| Rich Results Test | https://search.google.com/test/rich-results | Validar structured data |
| Schema Validator | https://validator.schema.org/ | Validar schemas |
| Mobile Test | https://search.google.com/test/mobile-friendly | Test mobile UX |
| Lighthouse | Chrome DevTools | Performance audit |
| Search Console | https://search.google.com/search-console | Monitoring |
| PageSpeed Insights | https://pagespeed.web.dev/ | Core Web Vitals |

---

**¡Todas las herramientas y comandos listos para testing!** 🧪✨
