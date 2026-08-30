# Todo lo que usas

Inventario completo, sacado leyendo tus tres repos, tu proyecto de Supabase y
los despliegues. **Nada por memoria ni por suposición.** Si algo no está aquí,
es porque no aparece en tu código.

---

## Lenguajes

| | Dónde |
|---|---|
| **TypeScript** | Los tres proyectos, sin excepción. 647 KB en TUMARKET, 536 KB en DCM ACCESS |
| **JavaScript** | Configuración y scripts |
| **SQL** | 73 migraciones: tablas, políticas, funciones, triggers |
| **HTML** | Semántico, en todo el marcado |
| **CSS** | Tailwind más CSS propio para animaciones y máscaras |

## Frontend

- **React 19** — Server y Client Components
- **Next.js** — App Router, versiones 15 y 16
- **Tailwind CSS v4** — con `@theme` y tokens de diseño
- **Motion** (antes Framer Motion) — animaciones con muelles
- **SVG escrito a mano** — las gráficas de informes de TUMARKET no usan
  librería: ejes, escalas, barras apiladas y etiquetas, todo propio
- **lucide-react** — iconos en DCM ACCESS
- **clsx** y **tailwind-merge** — composición de clases
- Diseño **responsive** y **accesibilidad WCAG** (contraste verificado,
  `prefers-reduced-motion`)

## Backend y datos

- **PostgreSQL 17**
- **Supabase** — Postgres gestionado, y además:
  - **Auth** con sesiones
  - **Storage** con políticas por carpeta
  - **Realtime** para pedidos en vivo
  - **RPC** — funciones de negocio en la base de datos
  - **Migraciones** versionadas (73 en TUMARKET)
  - **Tipos generados** desde el esquema (`database.types.ts`)
- **Row-Level Security** — activo en las 9 tablas
- **Multi-tenancy** — aislamiento por tienda con políticas y triggers
- **Server Actions** de Next.js
- **API Routes** — webhooks, cron, confirmación de cuenta
- **Next.js Middleware** — refresco de sesión y protección de rutas
- **Zod** — validación de entradas en DCM ACCESS

## Autenticación y seguridad

- Supabase Auth: registro y acceso por correo, confirmación
- **OAuth**: Google, Facebook y Apple
- Row-Level Security como capa de autorización
- Rutas reservadas y protegidas
- Honeypot y validación en servidor en formularios

## Integraciones

- **MercadoPago** — checkout, webhook, suscripciones con cortesía, vencimiento
  y planes mensual/anual
- **Resend** — correo transaccional
- **ZXing** — lectura de códigos de barras con la cámara
- Generación de **códigos QR**
- **Tareas cron** — avisos de vencimiento
- **Vercel Analytics**
- **`next/og` ImageResponse** — iconos generados por tienda, con versión en la
  URL para evitar caché obsoleta

## Infraestructura y herramientas

- **Vercel** — despliegue continuo desde Git, dominios, variables de entorno,
  protección de despliegues
- **Cloudflare** — DNS
- **Git** y **GitHub**
- **ESLint** y **Prettier** (con `prettier-plugin-tailwindcss`)
- **Claude Code**
- **i18n** — enrutado por idioma con segmento `[locale]`

## Prácticas

- Migraciones versionadas y reproducibles desde cero
- Autorización en la base de datos, no en el código de aplicación
- Tipado estricto de punta a punta, con tipos generados desde el esquema
- Accesibilidad: contraste WCAG, movimiento reducido, textos alternativos
- SEO: metadatos, Open Graph, redirección de dominio

---

## Las 15 de LinkedIn

La sección de Aptitudes no debe llevar todo lo de arriba. LinkedIn pondera **las
tres primeras** y son las que se validan con recomendaciones. En este orden:

```
1. TypeScript          6. Tailwind CSS        11. Database Design
2. React               7. Node.js             12. Authentication & Authorization
3. Next.js             8. REST APIs           13. Web Accessibility (WCAG)
4. PostgreSQL          9. Git                 14. Responsive Web Design
5. Supabase           10. Vercel              15. SQL
```

## Lo que NO deberías listar

Lo busqué en los tres repos y no aparece. Si lo pones, te lo van a preguntar:

| | Lo que sí usas |
|---|---|
| Firebase | Supabase |
| SASS / preprocesadores | Tailwind CSS v4 |
| MySQL | PostgreSQL 17 |
| Docker | Vercel |
| AWS | Vercel + Supabase |
| Testing (Jest, Vitest, Playwright) | No hay tests en ninguno de los tres |
| GraphQL | REST y Server Actions |
| Redux / Zustand | Estado de React y Context |

**Los tests son el hueco más visible de tu perfil.** Un reclutador técnico lo va
a notar: tres proyectos, cero pruebas automatizadas. No lo listes como
habilidad, pero considera añadir unas cuantas a TUMARKET — con eso pasa a ser
algo que sí puedes poner.
