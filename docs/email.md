# Correo con el dominio: hi@dacarma.co

## Lo que ya está montado

Miré el DNS de `dacarma.co` antes de tocar nada:

```
MX   10 eforward1.registrar-servers.com
     10 eforward2.registrar-servers.com
     10 eforward3.registrar-servers.com
     15 eforward4.registrar-servers.com
     20 eforward5.registrar-servers.com
TXT  v=spf1 include:spf.efwd.registrar-servers.com ~all
```

Eso es el **reenvío de correo gratuito de Namecheap**, ya apuntando bien desde
Cloudflare. No hay que tocar DNS: solo falta crear el alias.

---

## Paso 1 — Crear hi@dacarma.co (2 minutos, gratis)

1. Entra a **Namecheap → Domain List → dacarma.co → Manage**.
2. Pestaña **Advanced DNS**, sección **Mail Settings** (debe decir
   *Email Forwarding*).
3. En **Redirect Email**, añade:

   | Alias | Reenviar a |
   |---|---|
   | `hi` | `dcardona0512@gmail.com` |

4. Guarda. Tarda unos minutos.
5. Pruébalo: mándate un correo a `hi@dacarma.co` desde otra cuenta y mira que
   llegue a tu Gmail.

Con esto **recibes** en `hi@dacarma.co`. Ya lo puedes poner en el CV.

---

## Paso 2 — El problema de responder

Aquí está el detalle que casi todo el mundo pasa por alto:

> El reenvío gratuito solo **recibe**. Si un reclutador escribe a
> `hi@dacarma.co` y tú respondes, el correo sale desde
> `dcardona0512@gmail.com`.

Para un CV eso resta: das una dirección profesional y contestas desde otra.

Gmail tiene *«Enviar como»* (Configuración → Cuentas e importación → Enviar
como), pero **exige un servidor SMTP del dominio**, y el reenvío de Namecheap no
da SMTP. Hacen falta opciones:

| Opción | Coste | Qué resuelve |
|---|---|---|
| **Solo reenvío** (paso 1) | Gratis | Recibes. Respondes desde Gmail. |
| **Zoho Mail Lite** | ~1 USD/mes | Buzón real con IMAP/SMTP. Se integra en Gmail con *Enviar como*. Hay que cambiar los MX en Cloudflare. |
| **Google Workspace** | ~7 USD/mes | Todo dentro de Gmail, sin configurar nada raro. Lo más cómodo. |

> El plan **gratuito** de Zoho ya no incluye IMAP/SMTP, así que no sirve para
> responder desde Gmail. Si vas por Zoho, tiene que ser el de pago.

**Recomendación:** empieza por el paso 1 hoy, que es gratis e inmediato. Si
empiezas a recibir correo de reclutadores, pasa a Zoho Mail Lite — por un dólar
al mes se resuelve, y es lo que separa un perfil cuidado de uno a medias.

**Mientras tanto**, un truco decente: en Gmail, Configuración → General →
**Firma**, y pon `hi@dacarma.co` en ella. No arregla el remitente, pero deja
claro cuál es tu dirección buena.

---

## Paso 3 — Cuidado al configurar Resend

El formulario de contacto del sitio sigue devolviendo 500 porque faltan las
claves de Resend. Cuando lo configures, Resend te va a pedir que añadas
registros DNS para poder **enviar** desde el dominio. Ahí hay una trampa:

> **Ya existe un registro SPF.** Si añades el de Resend como un TXT nuevo, el
> dominio queda con **dos SPF** y eso invalida los dos. El correo empieza a
> caer en spam.

Hay que **fusionarlos en uno solo**. Del actual:

```
v=spf1 include:spf.efwd.registrar-servers.com ~all
```

a algo así (confirma el valor exacto que te dé Resend):

```
v=spf1 include:spf.efwd.registrar-servers.com include:amazonses.com ~all
```

Un solo registro, un solo `v=spf1`, un solo `~all` al final. Los DKIM que pida
Resend sí van como registros aparte, esos no chocan.

---

## Cuando funcione

Avísame y actualizo `hi@dacarma.co` en:

- `career/templates/cv-es.html` y `cv-en.html` (y regenero los PDF)
- `career/linkedin-about.md`
- `CONTACT_TO_EMAIL` en Vercel
