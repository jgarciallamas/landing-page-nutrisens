# NUTRISENS Landing Page — Contexto del Proyecto

## Producto
- **Nombre**: NUTRISENS — sonda multiparamétrica (nitrato + potasio simultáneos, tiempo real)
- **Fabricante**: Verdesmart (Verdtech)
- **Diferenciador**: Primera sonda mundial dual nitrato+potasio; datos continuos sin interrupciones
- **Métricas clave**: -60% nitratos, +30% eficiencia potasio, +11% calibre tomate

## Audiencia
Técnicos agrícolas y distribuidores de equipos/sensores de fertirrigación.

## Objetivo de conversión
CTA → formulario "Solicitar información" que derive al equipo comercial. Generar urgencia.

## Stack técnico
- Next.js 16.2.2 (App Router) + React 19.2.4 + TypeScript 6.0.2
- Tailwind CSS 4.2.2 — config via CSS con `@theme` (sin tailwind.config.js)
- next-intl 4.9.0 — ES por defecto, soporte EN
- react-hook-form 7.72.1 — formulario de contacto con validación
- motion 12.38.0 — animaciones en scroll
- Endpoint `/api/contact` → mock 200 OK

## Identidad visual
- Verde principal: `#97cc02` | Verde oscuro hover: `#496302`
- Grises: `#747474`, `#626262` | Fondo: `#FCFCFC` | Footer bg: `#474747`
- Headings: Montserrat 700 | Body: Lato 400/600 (Google Fonts)
- Logo: `https://verdtech.es/wp-content/uploads/2017/04/logo1.png`
- Estilo: agtech, hero full-screen, secciones alternas blanco/verde suave, iconografía lineal

## Estructura de secciones (orden fijo)
1. Navbar — logo + anclas + selector ES|EN
2. Hero — headline impactante + CTA + imagen sonda en campo
3. El problema — decisiones sin datos en tiempo real
4. La solución — cómo funciona NUTRISENS + diagrama simple
5. Métricas — 3 stat cards grandes
6. Cómo funciona — 3-4 pasos: instalar → datos → análisis → fertirriego
7. Casos de uso — cultivos intensivos, ecológica, zonas con regulación hídrica
8. CTA final — formulario (nombre, email, empresa, mensaje)
9. Footer — logo, links legales, contacto, redes

## Estructura de carpetas esperada
```
/app/[locale]/page.tsx          — página principal
/components/sections/           — un componente por sección
/messages/es.json               — textos ES
/messages/en.json               — textos EN
/app/globals.css                — @theme con paleta de marca
/app/api/contact/route.ts       — mock endpoint
```

## Requisitos de entrega
- Totalmente responsive (mobile-first)
- SEO básico: metadata en layout.tsx (título, descripción, og:image)
- Git + .gitignore para Next.js + README.md + .env.example
- Compatible con despliegue directo en Vercel (sin config adicional)
- Todos los textos externalizados en es.json / en.json
