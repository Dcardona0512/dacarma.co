# Correo del dominio — paso a paso

Objetivo: **recibir** en `hi@dacarma.co` y que el **formulario de contacto**
envíe de verdad, con el dominio bien autenticado para que nada caiga en spam.

## Punto de partida

Esto es lo que hay en el DNS ahora mismo:

```
MX    eforward1..5.registrar-servers.com        ← huérfanos, de Namecheap
TXT   v=spf1 include:spf.efwd.registrar-servers.com ~all   ← apunta a un servicio que ya no usas
DMARC (ninguno)
DKIM  (ninguno)
```

Los MX de Namecheap no funcionan porque su reenvío exige los nameservers de
Namecheap, y `dacarma.co` los tiene en Cloudflare. Por eso el panel te marca
**SPF: Soft fail** y **DKIM: Fail**.

Cada paso lleva una comprobación. **No pases al siguiente sin que la anterior dé
lo esperado** — en DNS los errores se acumulan y luego cuesta saber cuál fue.

---

# Parte 1 · Recibir en hi@dacarma.co

### 1.1 Activar Email Routing

Cloudflare → **Compute → Email Service → Email Routing** → elige `dacarma.co`.

> **Compute no aparece mientras estés dentro del dominio.** Es un menú de la
> cuenta, no de la zona. Pulsa **Back to Domains** (arriba a la izquierda) y
> entonces sí sale en la barra lateral.
>
> Atajo directo: `https://dash.cloudflare.com/<tu-cuenta>/email-service/routing`
> — fíjate en que la ruta no lleva el dominio en medio.

Pulsa **Enable / Get started**.

### 1.2 Aceptar el cambio de MX

Te avisará de que va a reemplazar los MX. **Acepta.** Los de Namecheap están
muertos. Deja estos:

```
MX  route1.mx.cloudflare.net   prioridad 2
MX  route2.mx.cloudflare.net   prioridad 12
MX  route3.mx.cloudflare.net   prioridad 98
```

### 1.3 Verificar tu Gmail como destino

**Destination addresses** → *Add* → `dcardona0512@gmail.com`.
Cloudflare manda un correo de confirmación: ábrelo y pulsa el enlace. Hasta que
no lo confirmes, no reenvía nada.

### 1.4 Crear la dirección

**Routing rules** → *Create address*:

| Custom address | Action | Destination |
|---|---|---|
| `hi@dacarma.co` | Send to an email | `dcardona0512@gmail.com` |

Es gratis y sin límite, así que puedes añadir `contacto@` o `david@` después.

### 1.5 Limpiar el SPF viejo

**DNS → Records**, filtra por `TXT`. Tiene que quedar **un solo** registro que
empiece por `v=spf1`. Si sigue el de Namecheap
(`include:spf.efwd.registrar-servers.com`), **bórralo**. Dos SPF se invalidan
entre sí.

De momento debe quedar solo:

```
v=spf1 include:_spf.mx.cloudflare.net ~all
```

### ✅ Comprobación 1

Mándate un correo a `hi@dacarma.co` desde otra cuenta (no desde tu propio
Gmail). Debe llegar a tu bandeja. Avísame y verifico el DNS por mi lado.

---

# Parte 2 · Que el formulario envíe (Resend)

### 2.1 Crear la cuenta y el dominio

1. Regístrate en **resend.com** (plan gratis: 3.000 correos/mes).
2. **Domains → Add Domain** → `dacarma.co`.
3. Te dará entre 2 y 3 registros DNS. Anótalos.

### 2.2 Añadir el DKIM

Resend te da algo como `resend._domainkey` con un valor largo. Añádelo en
Cloudflare **tal cual**, como TXT. Este no choca con nada.

> En Cloudflare, pon la nube en **gris (DNS only)** para todo lo de correo.
> Naranja es proxy HTTP y no aplica.

### 2.3 Fusionar el SPF — aquí está la trampa

Resend te pedirá un SPF. **No lo añadas como registro nuevo**: ya tendrás el de
Cloudflare del paso 1.5, y dos SPF invalidan el dominio entero.

**Edita el que existe** y mete los dos `include`:

```
v=spf1 include:_spf.mx.cloudflare.net include:amazonses.com ~all
```

Un solo `v=spf1`, un solo `~all` al final. Confirma el `include` exacto que te
muestre Resend (suele ser `amazonses.com`).

### 2.4 Verificar en Resend

Vuelve a Resend y pulsa **Verify**. Puede tardar unos minutos.

### 2.5 Poner las claves en Vercel

Vercel → proyecto **dacarma-co** → **Settings → Environment Variables**:

| Variable | Valor |
|---|---|
| `RESEND_API_KEY` | La clave de Resend (empieza por `re_`) |
| `CONTACT_TO_EMAIL` | `hi@dacarma.co` |
| `CONTACT_FROM_EMAIL` | `Portfolio <hi@dacarma.co>` |

Marca los tres para **Production**. Después **Deployments → Redeploy**, porque
las variables solo se leen al construir.

### ✅ Comprobación 2

Entra a `dacarma.co/contact`, manda un mensaje de prueba y mira que te llegue.
Yo puedo comprobar que la API deje de devolver 500.

---

# Parte 3 · Cerrar con DMARC

Con SPF y DKIM en pie, DMARC le dice a los servidores qué hacer si algo no
cuadra. Sin él, cualquiera puede falsificar tu dominio.

**DNS → Records → Add record:**

| Campo | Valor |
|---|---|
| Type | `TXT` |
| Name | `_dmarc` |
| Content | `v=DMARC1; p=none; rua=mailto:hi@dacarma.co` |

`p=none` significa «solo obsérvalo y repórtame». Es lo correcto al empezar:
recibes informes sin arriesgarte a que se bloquee correo legítimo.

Al cabo de dos o tres semanas sin problemas, súbelo a `p=quarantine` y más
adelante a `p=reject`.

### ✅ Comprobación 3

El panel de **DMARC Management** debería pasar de `N/A` a mostrar tu política, y
SPF de *Soft fail* a *Pass*.

---

# Parte 4 · Responder desde hi@dacarma.co

El detalle que casi nadie prevé:

> Email Routing **solo recibe**. Si un reclutador escribe a `hi@dacarma.co` y
> respondes, el correo sale desde `dcardona0512@gmail.com`.

Para un CV eso resta. Gmail tiene *Enviar como*, pero exige **SMTP del
dominio**, y ni Cloudflare ni el reenvío lo dan.

| Opción | Coste | Qué resuelve |
|---|---|---|
| Solo Email Routing | Gratis | Recibes; respondes desde Gmail |
| **Zoho Mail Lite** | ~1 USD/mes | Buzón real con IMAP/SMTP; se integra en Gmail |
| Google Workspace | ~7 USD/mes | Todo nativo en Gmail |

> El plan **gratuito** de Zoho ya no trae IMAP/SMTP, así que no sirve para esto.

**Mientras tanto**, en Gmail → Configuración → General → **Firma**, pon
`hi@dacarma.co`. No arregla el remitente, pero deja clara tu dirección buena.

---

# Orden recomendado

| Cuándo | Qué | Tiempo |
|---|---|---|
| Hoy | Parte 1 — recibir en `hi@dacarma.co` | 10 min |
| Hoy | Parte 2 — Resend, para que el formulario funcione | 20 min |
| Esta semana | Parte 3 — DMARC | 5 min |
| Cuando llegue correo real | Parte 4 — buzón para responder | — |

Cuando termines la Parte 1 y la 2, avísame: verifico el DNS y el formulario, y
actualizo `hi@dacarma.co` en los dos CV (regenerando los PDF) y en el «Acerca
de» de LinkedIn.
