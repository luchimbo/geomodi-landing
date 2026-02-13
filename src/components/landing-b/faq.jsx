"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/landing-b/ui/accordion"
import { SectionWrapper } from "@/components/landing-b/section-wrapper"
import { AnimatedSection } from "@/components/landing-b/animated-section"

const faqs = [
  {
    question: "¿Qué incluye exactamente el servicio GeoModi?",
    answer:
      "Es una tecnología de optimización masiva diseñada para integrarse directamente con TiendaNube. El sistema accede a tu catálogo completo y, mediante un motor de procesamiento avanzado, transforma las descripciones básicas en activos de alta densidad semántica optimizados para GEO. Incluye la reestructuración automática de cada ficha con jerarquía técnica, principios de respuesta directa y tablas comparativas de autoridad.",
  },
  {
    question: "¿Qué no está incluido en el servicio GeoModi?",
    answer:
      "No incluye la edición de imágenes, la gestión de inventario, cambios en el diseño de la plantilla de la tienda ni la gestión de campañas publicitarias. GEOMODI se enfoca exclusivamente en la inteligencia de los textos para motores de respuesta.",
  },
  {
    question: "¿El servicio de GeoModi es estratégico, operativo o ambos?",
    answer:
      "GEOMODI es una solución puramente operativa de alta eficiencia. Está diseñada para ser la herramienta de ejecución definitiva: vos no tenés que pensar en la estrategia de optimización ni en cómo estructurar la información para la IA; nuestra tecnología ya tiene ese conocimiento integrado. Tu único trabajo es elegir los productos y hacer clic; GEOMODI se encarga de toda la complejidad operativa de transformar tu catálogo de forma automática y masiva.",
  },
  {
    question: "¿Cómo es el proceso desde que se contrata el servicio hasta la implementación?",
    answer:
      "Es un flujo de tres pasos: 1) Vinculás tu tienda de TiendaNube. 2) El sistema importa automáticamente tu catálogo. 3) Seleccionás los productos (de forma masiva o individual) y hacés clic en Optimizar. La descripción se actualiza automáticamente en tu tienda.",
  },
  {
    question: "¿Qué necesitan de nuestro lado para empezar con GeoModi?",
    answer:
      "Solo la URL o el acceso a tu tienda de TiendaNube. No necesitás cargar archivos ni redactar instrucciones adicionales.",
  },
  {
    question: "¿GeoModi trabaja sobre nuestro contenido existente o crea contenido nuevo?",
    answer:
      "Toma tu descripción actual como insumo base y la reconstruye totalmente. No es una simple corrección; es una transformación integral que expande la información técnica y la organiza para ser citable por modelos de IA.",
  },
  {
    question: "¿El servicio GeoModi se adapta a nuestro negocio o es un framework estándar?",
    answer:
      "Nuestra tecnología aplica un framework de autoridad automático. El sistema identifica la categoría y vertical de cada producto de forma inteligente, adaptando la estructura semántica y el contenido técnico sin necesidad de que el usuario configure tonos o estilos manualmente.",
  },
  {
    question: "¿En cuánto tiempo se empiezan a ver resultados con GeoModi?",
    answer:
      "La actualización en tu tienda es instantánea. En cuanto a la visibilidad externa, los nuevos textos tardan unos pocos días en ser procesados por los algoritmos e impactar en los resultados de búsqueda de las IA.",
  },
  {
    question: "¿Existe un periodo mínimo de contratación para GeoModi?",
    answer:
      "No hay contratos a largo plazo. GEOMODI funciona bajo un esquema de pago mensual flexible.",
  },
  {
    question: "¿Puedo cancelar el servicio GeoModi cuando quiera?",
    answer:
      "Sí, podés cancelar la suscripción en cualquier momento. Los textos que ya fueron optimizados permanecen en tu TiendaNube; no se pierden al cancelar.",
  },
  {
    question: "¿Hay algún tipo de garantía o prueba inicial en GeoModi?",
    answer:
      "Sí, contamos con un Plan Gratuito que te permite optimizar hasta cinco publicaciones sin costo para que valides la potencia de la tecnología antes de pasar a un plan pago.",
  },
  {
    question: "¿Quién es el dueño del contenido optimizado o creado dentro de GeoModi?",
    answer:
      "El dueño absoluto es el cliente. Una vez que el sistema actualiza tu descripción en TiendaNube, ese contenido es propiedad de tu marca.",
  },
  {
    question: "¿Cómo maneja GeoModi la confidencialidad de la información?",
    answer:
      "GEOMODI solo accede a la información pública de tus productos para realizar la optimización. Los datos operativos de tu tienda se manejan bajo estrictos protocolos de privacidad y seguridad.",
  },
]

export function FAQ() {
  return (
    <SectionWrapper id="faq" className="scroll-mt-20">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Preguntas frecuentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}
