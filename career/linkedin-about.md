# «Acerca de» de LinkedIn

LinkedIn permite 2.600 caracteres y solo muestra **las 3 primeras líneas** antes
del «…ver más».

Pega **solo la versión en inglés**. Para el español usa *Añadir perfil en otro
idioma*, arriba a la derecha de tu perfil.

---

## Inglés — pega esto en «About»

```
I'm David Cardona Martínez, a full-stack developer from Cali, Colombia.

I build complete web applications, from the database schema to the interface someone actually uses. I can take a product from an idea to something running in production on my own: model the data, secure it, build the interface, wire up authentication and payments, deploy it and keep it running.

Some of what I can do:

• Complete apps with TypeScript, React and Next.js
• Design a database in PostgreSQL and keep changing it over time without breaking what's already there
• Keep each client's data separate so one can never see another's. I do that with policies in the database instead of the app code, because app code is easier to get wrong
• Set up login: by email, or with Google, Facebook and Apple
• Connect payments and other services: checkout, webhooks, subscriptions, scheduled jobs
• Build the admin side: inventory, orders, point of sale, reports with charts, CRM
• Make it work on any screen and stay readable for everyone
• Deploy on Vercel with a custom domain and updates on every push

Day to day I work with TypeScript, React, Next.js, PostgreSQL, Supabase, Tailwind CSS, Zod, Git and Vercel. I've also worked with Firebase and Stripe.

None of that comes from tutorials. It's all from products I built and still keep running. You can see them on my site.

Before this I trained as a commercial pilot. I still run a checklist for everything, which turned out to be a good habit for writing software.

I'm in Cali, open to full-stack or frontend work, remote or local.

dacarma.co
github.com/Dcardona0512
```

## Español — para el perfil en español de LinkedIn

```
Soy David Cardona Martínez, desarrollador full-stack, de Cali.

Construyo aplicaciones web completas, desde el esquema de la base de datos hasta la interfaz que alguien usa de verdad. Puedo llevar un producto de la idea a producción yo solo: modelar los datos, protegerlos, construir la interfaz, conectar autenticación y pagos, desplegarlo y mantenerlo funcionando.

Algo de lo que sé hacer:

• Aplicaciones completas con TypeScript, React y Next.js
• Diseñar una base de datos en PostgreSQL y seguir cambiándola con el tiempo sin romper lo que ya está
• Mantener separados los datos de cada cliente para que uno nunca vea los del otro. Eso lo resuelvo con políticas en la base de datos y no en el código, porque en el código es más fácil equivocarse
• Montar el acceso: por correo o con Google, Facebook y Apple
• Conectar pagos y otros servicios: checkout, webhooks, suscripciones, tareas programadas
• Armar la parte administrativa: inventario, pedidos, punto de venta, informes con gráficas, CRM
• Que funcione en cualquier pantalla y se lea bien
• Desplegar en Vercel con dominio propio y actualizaciones en cada push

En el día a día trabajo con TypeScript, React, Next.js, PostgreSQL, Supabase, Tailwind CSS, Zod, Git y Vercel. También he trabajado con Firebase y Stripe.

Nada de esto salió de tutoriales. Todo viene de productos que construí y que sigo manteniendo. Se pueden ver en mi sitio.

Antes de esto me formé como piloto comercial. Sigo usando checklist para todo, que resultó ser una buena costumbre para programar.

Estoy en Cali, abierto a trabajo full-stack o frontend, remoto o presencial.

dacarma.co
github.com/Dcardona0512
```

---

## Sobre Firebase y Stripe

Los busqué en tus tres repos: **cero coincidencias**, ninguno de los dos. Tus
pagos van por MercadoPago (`lib/mercadopago.ts` más el webhook) y tu backend es
Supabase.

Por eso no los mezclé con el resto. La lista principal dice «en el día a día
trabajo con…» y Firebase y Stripe van aparte, en «también he trabajado con».
Esa distinción importa: si un entrevistador pregunta «¿qué hiciste con Stripe?»,
la primera frase te compromete a un proyecto en producción y la segunda no.

**Si los aprendiste antes o en algo que no está en GitHub, la frase es cierta y
puedes dejarla tal cual.** Si no llegaste a usarlos de verdad, quítala: el resto
del texto se sostiene solo, y una respuesta dudosa sobre Stripe hace que el
entrevistador dude también de PostgreSQL y RLS, que sí dominas.

Es tu decisión, no la mía. Solo que la tomes sabiendo el riesgo.

---

## Qué estaba mal en tu versión

El arranque estaba bien. El problema era el cuerpo: pegaste el inventario
técnico completo, y ese archivo era material de referencia para la sección de
**Aptitudes**, no para el «Acerca de».

- **Se leía como un `package.json`, no como una persona.** Seis líneas seguidas
  de nombres separados por puntos medios. Nadie lee eso; se salta al siguiente
  perfil.
- **Referencias colgando.** Decía «TypeScript (all three projects)» y «SQL (73
  migrations)», pero como quitamos los nombres de los proyectos, el lector no
  sabe de qué tres proyectos hablas ni de dónde salen 73 migraciones.
- **Herramientas internas que a nadie le importan al contratar:** `clsx`,
  `tailwind-merge`, `lucide-react`. Restan, porque diluyen lo que sí pesa
  (PostgreSQL, RLS, multi-tenancy) en una lista donde todo parece igual de
  importante.
- **Faltaba la mitad del texto:** la línea del piloto, la ubicación, la
  disponibilidad y los enlaces.
- **Se perdió el tono natural** que habíamos trabajado.

Ahora las capacidades van en viñetas legibles y el stack en **una sola frase**
al final, con los nombres que un reclutador reconoce. El inventario completo
sigue en `stack.md`, que es de donde salen las 15 aptitudes de LinkedIn.

Una última cosa: **quité «Claude Code» del texto.** En Aptitudes puede ir, pero
en el «Acerca de» ocupa un sitio que rinde más con PostgreSQL, y hay
reclutadores que lo leen como que la herramienta hizo el trabajo. Tú decides.
