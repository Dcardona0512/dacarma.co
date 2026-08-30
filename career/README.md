# career/

Perfil profesional de David Cardona Martínez, escrito desde evidencia
verificable de los proyectos reales — no desde una plantilla genérica.

## Archivos

| Archivo | Qué es |
|---|---|
| `DATOS-PENDIENTES.md` | **Empieza aquí.** Los datos que faltan y la auditoría de tus enlaces |
| `pdf/` | Los tres PDF listos para usar |
| `templates/` | HTML del que salen los PDF — aquí se edita el contenido |
| `build-pdf.js` | Genera los PDF desde las plantillas |
| `linkedin.md` · `cv-en.md` · `cv-es.md` | Los mismos textos en Markdown, por si quieres copiarlos sueltos |
| `linkedin-about.md` | **El «Acerca de» de LinkedIn**, listo para pegar (EN y ES) |
| `stack.md` | Inventario completo de tu stack, verificado contra el código |
| `bio.md` | Bio corta (EN/ES) para GitHub o presentaciones breves |
| `github-profile-README.md` | README de perfil de GitHub, listo para pegar |

### `pdf/`

| PDF | Para qué |
|---|---|
| `David-Cardona-Martinez-Desarrollador-Full-Stack.pdf` | CV en español — 1 página |
| `David-Cardona-Martinez-Full-Stack-Developer.pdf` | CV en inglés — 1 página |
| `Guia-LinkedIn-David-Cardona.pdf` | Guía de 5 páginas para llenar LinkedIn, con los textos listos para copiar |

## Regenerar los PDF

Después de editar cualquier plantilla de `templates/`:

```bash
npx playwright install chromium   # solo la primera vez
node career/build-pdf.js
```

El script avisa si un CV se pasa de una página. Playwright no está en las
dependencias del proyecto a propósito: son 50 MB que el sitio no necesita para
compilar.

## Orden de trabajo

1. Rellena `DATOS-PENDIENTES.md`.
2. Sustituye los marcadores en `templates/cv-es.html`, `templates/cv-en.html` y
   `templates/linkedin-guide.html` — están marcados con `class="todo"` y salen
   resaltados en amarillo en el PDF.
3. Regenera los PDF y **borra el aviso de borrador** (`.draft-note`) de los CV.
4. Arregla los problemas de credibilidad de `DATOS-PENDIENTES.md`.
5. Actualiza LinkedIn siguiendo la guía.

## De dónde sale cada afirmación

Todo lo que dicen estos documentos se comprobó contra la fuente, no contra lo
que recuerdas haber hecho:

- **73 migraciones · RLS en 9 tablas · PostgreSQL 17** — leído del proyecto
  Supabase `tumarket`.
- **5 tiendas · 408 productos · 136 categorías · pedidos reales** — conteo de
  filas en producción.
- **121 archivos TypeScript** — árbol del repo `tumarket`.
- **MercadoPago, cron, OAuth, ZXing** — dependencias y rutas del repo.
- **Stack de cada proyecto** — `package.json` de los tres repos.

Si una viñeta deja de ser cierta (por ejemplo, cambia el número de tiendas),
actualízala. Un número desactualizado en una entrevista cuesta más que no
haberlo puesto.

## Criterio de redacción

- **Verificable o fuera.** No aparecen Docker, AWS ni testing porque no hay
  rastro de ellos en tu código. Un entrevistador técnico lo detecta en la
  primera pregunta, y a partir de ahí duda de todo lo demás.
- **Números antes que adjetivos.** "73 migraciones versionadas con RLS en las 9
  tablas" pesa más que "experiencia sólida en bases de datos".
- **El piloto, una sola vez.** Es el gancho que te hace memorable frente a mil
  perfiles de React. Repetirlo hace dudar de tu compromiso con el desarrollo,
  así que aparece en una frase del "About" y en Certificaciones. En ningún
  sitio más.
- **Sin "Junior".** No te van a exigir menos por ponértelo, y un SaaS
  multi-tenant en producción no lo es.

## Adaptar el CV a cada oferta

No mandes el mismo PDF a todo. Por cada oferta:

1. Lee los requisitos y reordena "Competencias técnicas" para que lo que piden
   quede primero.
2. Ajusta las tres primeras palabras del Perfil al puesto exacto.
3. Si la oferta es de frontend, recorta las viñetas de base de datos a una.
4. **Nunca añadas una tecnología que no hayas usado** para encajar en la oferta.

## Cada tres meses

- Actualiza las cifras de TUMARKET.
- Añade los proyectos nuevos y quita los que ya no representan tu nivel.
- Revisa que los cuatro enlaces sigan vivos.
