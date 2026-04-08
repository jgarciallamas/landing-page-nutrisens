# Prompt — Landing Page NUTRISENS

Crea una landing page completa y lista para producción para el producto NUTRISENS,
utilizando Next.js con App Router y Tailwind CSS.

## PRODUCTO
- Nombre: NUTRISENS
- Fabricante: Verdesmart (Verdtech)
- Descripción: Sonda multiparamétrica patentada que mide en tiempo real la
  concentración y tendencia de nitrato y potasio en el suelo.
- Diferenciador clave: Primera sonda mundial con capacidad dual (nitrato +
  potasio simultáneos); datos continuos en tiempo real, sin esperas ni
  interrupciones en campo.
- Métricas probadas:
  · Hasta 60% de ahorro en uso de nitratos
  · +30% de eficiencia en el uso de potasio
  · +11% de mejora en calibre de tomate
- Beneficios principales:
  · Optimización del fertirriego basada en datos reales
  · Minimización de la lixiviación de nitratos hacia acuíferos
  · Cumplimiento de normativas europeas (Dir. 91/676/EC, 2003/1882/EC)
  · Compatible con agricultura ecológica

## AUDIENCIA
- Técnicos agrícolas con experiencia de campo
- Distribuidores de equipos y sensores (sondas de humedad, estaciones
  climáticas, equipos de fertirrigación)

## OBJETIVO DE CONVERSIÓN
CTA principal: formulario de contacto o botón "Solicitar información" que
derive al equipo comercial. El usuario debe sentir urgencia de contactar.

## ESTRUCTURA DE SECCIONES (en este orden)
1. Navbar — Logo Verdesmart + navegación anclas + selector de idioma ES | EN
2. Hero — Headline impactante, subheadline técnico, CTA principal, imagen/
   ilustración de la sonda en campo
3. El problema — Dolor del agricultor/técnico: tomar decisiones de
   fertilización sin datos en tiempo real
4. La solución — Cómo NUTRISENS resuelve el problema, con icono o diagrama
   simple del funcionamiento
5. Métricas / Prueba social — Las 3 métricas clave en formato de stat cards
   grandes y visibles
6. Cómo funciona — Paso a paso (3-4 pasos): instalar sonda → datos en tiempo
   real → análisis → decisión de fertirriego
7. Casos de uso — Aplicaciones: cultivos intensivos, agricultura ecológica,
   zonas con regulación hídrica estricta
8. CTA final — Sección de contacto con formulario simple (nombre, email,
   empresa, mensaje) + llamada a la acción emocional
9. Footer — Logo, links legales, contacto, redes sociales

## IDENTIDAD VISUAL
- Paleta:
  · Verde principal: #97cc02
  · Verde oscuro (hover/acento): #496302
  · Grises texto: #747474, #626262
  · Fondo: #FCFCFC
  · Footer background: #474747
- Tipografía:
  · Headings: Montserrat (700)
  · Body: Lato (400/600)
  · Importar desde Google Fonts
- Logo: https://verdtech.es/wp-content/uploads/2017/04/logo1.png
- Estilo visual: limpio, moderno, con imágenes de campo agrícola de alta
  calidad (usar Unsplash placeholders si no hay assets reales). Inspiración
  visual: landing pages de agtech con hero de pantalla completa, secciones
  alternando fondo blanco/verde muy suave, iconografía lineal.

## TONO DE COMUNICACIÓN
Técnico-científico pero cercano y atractivo. El contenido debe generar
confianza en el técnico agrícola (datos, cifras, precisión) a la vez que
engancha emocionalmente (sostenibilidad, innovación, control). Dificultar el
abandono mediante micro-interacciones y copywriting directo al dolor del
profesional.

## IDIOMA Y I18N
- Idioma por defecto: Español (ES)
- Soporte para inglés (EN) mediante selector en el navbar
- Implementar con next-intl v4.9.0
- Todos los textos deben estar externalizados en archivos de traducción
  (es.json / en.json)

## REQUISITOS TÉCNICOS — STACK
- Next.js 16.2.2 con App Router
- React 19.2.4
- TypeScript 6.0.2
- Tailwind CSS 4.2.2 — configuración via CSS con @theme (sin tailwind.config.js)
- next-intl 4.9.0 para i18n
- react-hook-form 7.72.1 para el formulario de contacto con validación
- motion 12.38.0 (antes framer-motion) para animaciones en scroll
- Totalmente responsive (mobile-first)
- SEO básico: metadata en layout.tsx con título, descripción y og:image
- Formulario de contacto: el endpoint /api/contact devuelve 200 OK (mock)

## REPOSITORIO Y DESPLIEGUE
- Inicializar repositorio Git con estructura lista para GitHub
- El repositorio debe ser público
- Incluir archivo .gitignore adecuado para Next.js (excluir node_modules,
  .env.local, .next, etc.)
- Incluir README.md con instrucciones de instalación y arranque local
- La configuración del proyecto debe ser compatible con despliegue directo
  en Vercel (sin configuración adicional):
  · next.config.ts correcto para App Router
  · Variables de entorno documentadas en .env.example
  · Sin dependencias que requieran build steps adicionales en Vercel

## ENTREGA ESPERADA
- Estructura de carpetas completa de Next.js
- Un componente por sección en /components/sections/
- Página principal en /app/[locale]/page.tsx
- Archivos de traducción en /messages/es.json y /messages/en.json
- Tailwind config de paleta de colores de marca en globals.css via @theme
- README.md con setup local y guía de despliegue en Vercel
- .env.example con variables documentadas
