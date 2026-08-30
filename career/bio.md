# Bio corta — LinkedIn «Acerca de» y README de GitHub

Reemplaza el texto que tenías. Sirve igual para el «About» corto de LinkedIn,
la bio de GitHub o cualquier sitio donde te presentes en pocas líneas.

Para el «About» largo de LinkedIn, usa el de `Guia-LinkedIn-David-Cardona.pdf`.

---

## Inglés

```
I'm David Cardona Martínez, a full-stack developer from Cali, Colombia.
I build and run products in production — not demos.

TUMARKET (tumarket.co) — a multi-tenant SaaS I designed, built and operate on
my own. Corner shops get an online storefront, a POS with cash closing,
inventory with barcode scanning, order picking and sales reports. Behind it:
PostgreSQL on Supabase with row-level security on every table, 73 versioned
migrations, MercadoPago subscriptions with webhooks, and sign-in through
Google, Facebook and Apple.

DCM ACCESS — a bilingual brokerage marketplace with its own CRM: leads,
opportunities, deals, commissions and providers.

dacarma.co — my portfolio, rebuilt from scratch in Next.js.

My stack

• TypeScript — every line of all three projects
• React · Next.js (App Router)
• PostgreSQL · Supabase
• Tailwind CSS
• Server Actions · REST APIs · Zod
• Supabase Auth · OAuth · Row-Level Security
• MercadoPago (checkout + webhooks)
• Git · GitHub · Vercel

https://github.com/Dcardona0512
```

## Español

```
Soy David Cardona Martínez, desarrollador full-stack desde Cali, Colombia.
Construyo y opero productos en producción, no demos.

TUMARKET (tumarket.co) — un SaaS multi-tienda que diseñé, construí y opero yo
solo. Las tiendas de barrio obtienen escaparate en línea, POS con cierre de
caja, inventario con lector de códigos de barras, alistamiento de pedidos e
informes de ventas. Detrás: PostgreSQL en Supabase con seguridad a nivel de
fila en todas las tablas, 73 migraciones versionadas, suscripciones con
MercadoPago y webhooks, y acceso con Google, Facebook y Apple.

DCM ACCESS — marketplace bilingüe de brokerage con CRM propio: leads,
oportunidades, negocios, comisiones y proveedores.

dacarma.co — mi portafolio, reconstruido desde cero en Next.js.

Mi stack

• TypeScript — en las tres bases de código, sin excepción
• React · Next.js (App Router)
• PostgreSQL · Supabase
• Tailwind CSS
• Server Actions · APIs REST · Zod
• Supabase Auth · OAuth · Row-Level Security
• MercadoPago (checkout + webhooks)
• Git · GitHub · Vercel

https://github.com/Dcardona0512
```

---

## Qué cambió y por qué

### Lo que quité

Busqué cada tecnología de tu lista en los tres repos. Estas dieron **cero
coincidencias**, y el `package.json` de TUMARKET lo confirma:

| Decías | Lo que realmente usas |
|---|---|
| Firebase | **Supabase** |
| SASS / «preprocesadores CSS» | **Tailwind CSS v4** |
| MySQL | **PostgreSQL 17** |
| NodeJS (como habilidad suelta) | Es el runtime de Next.js, no algo que hayas construido aparte |
| UI / UX, Figma | Sin rastro en el código |

No digo que no los hayas tocado nunca. El problema es otro: **un entrevistador
técnico pregunta por lo que listas.** Si dices Firebase y llevas seis meses en
Supabase, la respuesta va a sonar dudosa — y a partir de ahí duda del resto de
la lista, incluida la parte que sí dominas.

Si de verdad los manejas, vuelve a ponerlos. Pero decide eso a conciencia, no
por rellenar.

### Lo que faltaba

Esto es lo grave: **no mencionabas TypeScript**, y es el 100% de tu código.
Tampoco PostgreSQL, RLS, multi-tenancy, webhooks de pago ni una sola línea
sobre TUMARKET — que es, con diferencia, lo más fuerte que tienes.

Tu texto anterior describía a alguien que ha hecho cursos. Tu código describe a
alguien que puso un SaaS multi-tienda en producción. Eran dos personas
distintas.

### Lo que reescribí

- **«Me considero muy creativo y autodidacta»** → fuera. Los adjetivos sobre
  uno mismo no convencen a nadie; el reclutador los descuenta automáticamente.
  «73 migraciones versionadas» sí dice algo.
- **«Amplio conocimiento en…»** → fuera. *Amplio* según quién. Se sustituye por
  lo que construiste.
- **Producto antes que lista.** Ahora se abre con lo que existe y funciona; el
  stack va después, como respaldo.
- **Erratas:** «Grid Layoud» → *Grid Layout*; «Martinez» → *Martínez*.

### Un detalle honesto

He dejado «HTML» y «CSS» fuera de la lista del stack a propósito: a estas
alturas se dan por supuestos y ocupan sitio que rinde más con PostgreSQL o RLS.
En el CV sí están, porque ahí los filtros automáticos los buscan por palabra
clave.
