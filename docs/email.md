# Correo con el dominio: hi@dacarma.co

## Situación

El DNS de `dacarma.co` está delegado a Cloudflare (`harvey` y `meg.ns.
cloudflare.com`). En la zona hay unos registros MX que apuntan al reenvío de
Namecheap:

```
MX   10 eforward1.registrar-servers.com   (y eforward2..5)
TXT  v=spf1 include:spf.efwd.registrar-servers.com ~all
```

**Esos registros están huérfanos.** El reenvío de Namecheap solo funciona si el
dominio usa los nameservers de Namecheap; al mover el DNS a Cloudflare dejó de
poder configurarse, y los MX se quedaron copiados en la zona sin nada detrás.

Se resuelve con **Cloudflare Email Routing**: gratis, en el mismo panel donde ya
manejas el dominio, y sin límite de alias.

---

## Paso 1 — Activar Email Routing (gratis)

1. Cloudflare → **Compute → Email Service → Email Routing**, y ahí eliges
   **dacarma.co**.

   > Ojo: **no** está en el menú **Email** de la zona. Ese solo tiene DMARC
   > Management y Email Security. Cloudflare movió Email Routing al nivel de
   > cuenta, bajo Compute.

2. **Get started / Enable.**
3. Cloudflare te va a avisar de que **reemplaza los registros MX existentes**.
   Acepta: los de Namecheap no sirven de nada. Añade los suyos:
   ```
   MX  route1.mx.cloudflare.net   (prioridad 2)
   MX  route2.mx.cloudflare.net   (prioridad 12)
   MX  route3.mx.cloudflare.net   (prioridad 98)
   TXT v=spf1 include:_spf.mx.cloudflare.net ~all
   ```
4. **Destination address:** añade `dcardona0512@gmail.com`. Cloudflare te manda
   un correo de verificación — hay que abrirlo y confirmar.
5. **Custom address:** crea `hi@dacarma.co` → destino tu Gmail verificado.
6. Manda un correo de prueba a `hi@dacarma.co` desde otra cuenta.

### Comprueba que quede un solo SPF

Después de activarlo, en **DNS → Records** filtra por `TXT` y asegúrate de que
**no queden dos registros que empiecen por `v=spf1`**. Si sigue el viejo de
Namecheap, bórralo: dos SPF se invalidan entre sí y el correo empieza a caer en
spam. Debe quedar solo el de Cloudflare.

---

## Paso 2 — El problema de responder

El detalle que casi todo el mundo pasa por alto:

> Email Routing **solo recibe**. Si un reclutador escribe a `hi@dacarma.co` y tú
> respondes, el correo sale desde `dcardona0512@gmail.com`.

Para un CV eso resta: das una dirección profesional y contestas desde otra.

Gmail tiene *«Enviar como»* (Configuración → Cuentas e importación), pero exige
un **servidor SMTP del dominio**, y ni Cloudflare Email Routing ni el reenvío de
Namecheap lo dan. Opciones reales:

| Opción | Coste | Qué resuelve |
|---|---|---|
| **Cloudflare Email Routing** (paso 1) | Gratis | Recibes. Respondes desde Gmail. |
| **Zoho Mail Lite** | ~1 USD/mes | Buzón real con IMAP/SMTP. Se integra en Gmail con *Enviar como*. Reemplaza los MX. |
| **Google Workspace** | ~7 USD/mes | Todo dentro de Gmail, sin configurar nada. |

> El plan **gratuito** de Zoho ya no incluye IMAP/SMTP, así que no sirve para
> responder desde Gmail. Si vas por Zoho, tiene que ser el de pago.

**Recomendación:** haz el paso 1 hoy — gratis e inmediato, y ya puedes poner
`hi@dacarma.co` en el CV. Cuando empieces a recibir correo de reclutadores, pasa
a Zoho Mail Lite; por un dólar al mes se cierra el detalle.

**Mientras tanto**, en Gmail → Configuración → General → **Firma**, pon
`hi@dacarma.co`. No arregla el remitente, pero deja claro cuál es tu dirección.

---

## Paso 3 — Cuidado al configurar Resend

El formulario de contacto sigue devolviendo 500 porque faltan las claves de
Resend. Cuando lo configures, Resend pedirá registros DNS para poder **enviar**
desde el dominio, y ahí está la trampa:

> Ya vas a tener el SPF de Cloudflare Email Routing. Si añades el de Resend como
> un TXT nuevo, quedan **dos SPF** y se invalidan los dos.

Hay que **fusionarlos en uno**:

```
v=spf1 include:_spf.mx.cloudflare.net include:amazonses.com ~all
```

Un solo `v=spf1`, un solo `~all` al final. Confirma el `include` exacto que te
dé Resend. Los DKIM sí van como registros aparte, esos no chocan.

---

## Cuando funcione

Avísame y actualizo `hi@dacarma.co` en:

- `career/templates/cv-es.html` y `cv-en.html` (y regenero los PDF)
- `career/linkedin-about.md`
- `CONTACT_TO_EMAIL` en Vercel
