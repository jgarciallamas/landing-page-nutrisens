# NUTRISENS — Landing Page

Landing page de producción para el producto **NUTRISENS** de Verdesmart (Verdtech).
Sonda multiparamétrica de nitrato y potasio en tiempo real.

## Stack

- **Next.js 16** con App Router
- **React 19** + **TypeScript 6**
- **Tailwind CSS 4** — configuración via `@theme` en `globals.css`
- **next-intl 4** — i18n ES / EN
- **react-hook-form 7** — formulario de contacto con validación
- **motion 12** — animaciones en scroll

## Instalación local

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# 3. Arrancar dev server
npm run dev
```

La app estará en `http://localhost:3000` (redirige automáticamente a `/es`).

## Estructura de carpetas

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Layout con metadata, fuentes, i18n provider
│   │   └── page.tsx         # Página principal — importa secciones
│   ├── api/contact/
│   │   └── route.ts         # Endpoint mock POST /api/contact
│   └── globals.css          # Tailwind @theme con paleta de marca
├── components/sections/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Metrics.tsx
│   ├── HowItWorks.tsx
│   ├── UseCases.tsx
│   ├── ContactCTA.tsx
│   └── Footer.tsx
├── i18n/
│   ├── routing.ts           # Locales: ['es', 'en'], default: 'es'
│   ├── request.ts           # getRequestConfig para next-intl
│   └── navigation.ts        # useRouter / usePathname tipados
├── messages/
│   ├── es.json              # Textos en español
│   └── en.json              # Textos en inglés
└── middleware.ts            # Routing de locales
```

## Variables de entorno

Ver `.env.example`. Las más relevantes:

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (para SEO/og) |
| `CONTACT_EMAIL` | Email destino del formulario de contacto |

## Despliegue en Vercel

1. Conectar el repositorio en [vercel.com](https://vercel.com)
2. Añadir las variables de entorno desde `.env.example`
3. Deploy automático — sin configuración adicional necesaria

El proyecto está configurado para despliegue directo:
- `next.config.ts` compatible con App Router + next-intl
- Sin build steps adicionales
- Sin dependencias que requieran configuración especial en Vercel

## Idiomas

- **Español** (`/es`) — idioma por defecto
- **Inglés** (`/en`) — selector en el navbar

Para añadir un idioma: editar `i18n/routing.ts` y añadir el archivo `messages/{locale}.json`.

## Endpoint de contacto

`POST /api/contact` — actualmente un mock que devuelve `200 OK`.
Para activarlo en producción, integrar en `app/api/contact/route.ts` con SMTP, SendGrid, HubSpot o el CRM que corresponda.
