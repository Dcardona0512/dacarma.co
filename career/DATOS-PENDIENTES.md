# Datos que faltan

Los textos de `linkedin.md`, `cv-en.md` y `cv-es.md` están escritos y listos,
pero llevan marcadores `[[ ]]` en los sitios donde hace falta un dato que solo
tú tienes. **No inventé ninguno**: un reclutador estricto pregunta por fechas y
títulos, y un dato inflado hunde la entrevista entera.

Responde aquí abajo y yo los sustituyo en los tres documentos.

---

## 1. Formación

| Dato | Respuesta |
|---|---|
| Título(s) académicos | |
| Institución | |
| Años (inicio–fin) | |
| ¿Terminado o en curso? | |

## 2. Licencia de piloto

| Dato | Respuesta |
|---|---|
| Nombre exacto de la licencia | |
| Autoridad emisora (¿Aerocivil?) | |
| Año de obtención | |

> Va en **Certificaciones**, no en Experiencia. Es el gancho, no la historia.

## 3. Formación en software

Cursos, bootcamps o certificaciones, con emisor y fecha. Si es autodidacta,
dilo tal cual: es perfectamente respetable y mejor que adornarlo.

| Curso / certificación | Emisor | Fecha |
|---|---|---|
| | | |

## 4. Inglés

Tu nivel real. Es de los primeros filtros para cualquier puesto remoto, y se
comprueba en los primeros dos minutos de llamada.

- [ ] Básico — leo documentación
- [ ] Intermedio — leo y escribo, me cuesta la conversación
- [ ] Avanzado — trabajo sin problema
- [ ] Bilingüe

## 5. TUMARKET: las 5 tiendas

Hay 5 tiendas y pedidos reales en la base de datos. Cambia mucho el peso de la
viñeta según qué sean:

- [ ] Clientes que pagan
- [ ] Clientes en periodo de prueba
- [ ] Negocios conocidos/familiares usándolo de verdad
- [ ] Pruebas mías

## 6. DACARMA

| Dato | Respuesta |
|---|---|
| ¿Desde cuándo trabajas en esto? (mes/año) | |
| ¿Está constituida legalmente o es marca propia? | |
| ¿Has facturado algún trabajo de desarrollo? | |

## 7. Otros trabajos de desarrollo

Cualquier encargo pagado, aunque fuera informal: quién, qué construiste, cuándo.
Cuenta como experiencia profesional.

## 8. Disponibilidad

| Dato | Respuesta |
|---|---|
| Ubicación a mostrar | Santiago de Cali, Colombia |
| Modalidad | remoto / híbrido / presencial |
| ¿Te reubicarías? | |
| ¿Buscas activamente o estás abierto? | |

## 9. Teléfono para el CV

El CV lleva correo y teléfono. ¿Qué número pongo? (o lo dejo solo con correo)

---

## Auditoría del recorrido del reclutador

Recorrí tus enlaces igual que lo haría alguien revisando tu perfil. Resultado:

| Comprobación | Estado |
|---|---|
| dacarma.co | ✅ 200 |
| tumarket.co | ✅ 200 |
| dcmxaccess.vercel.app | ✅ 200 |
| github.com/Dcardona0512 | ✅ 200 |
| linkedin.com/in/dacarma | ✅ (devuelve 999 a bots, normal; abre bien en navegador) |
| README de `dacarma.co` | ✅ existe y está bien escrito |
| README de `dcm-access` | ✅ existe y está bien escrito |
| **Formulario de contacto** | ❌ **error 500** |
| **Enlaces ajenos en el portafolio** | ❌ **3 enlaces** |
| README de perfil de GitHub | ❌ no existe |

### Lo que hay que arreglar, por orden de daño

1. **Tres tarjetas de dacarma.co enlazan a trabajo ajeno.** Confirmado en el
   HTML de producción: dos a `hxmzaehsan.com/templates/*` y una a
   `framer.com/marketplace/templates/solopreneur/`. Un reclutador que pulse ve
   plantillas de otra persona presentadas como tu portafolio. **Es el problema
   más grave que tienes.** Lo mínimo: sustituir una por DCM ACCESS y quitar las
   otras dos — dos proyectos reales valen más que cuatro con relleno.

2. **El formulario de contacto devuelve 500.** Faltan `RESEND_API_KEY`,
   `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL` en Vercel. Si alguien te escribe
   desde el portafolio, ese mensaje se pierde sin que nadie se entere.

3. **No tienes README de perfil en GitHub.** Es lo primero que se ve al entrar
   a tu cuenta y ahora mismo está vacío. Se arregla creando un repo llamado
   `Dcardona0512` con un `README.md`. Fija además los tres repos.

4. **TUMARKET es privado**, así que no cuenta como muestra de código por más
   que sea tu mejor trabajo. Opciones: hacerlo público, extraer un módulo
   representativo a un repo aparte, o publicar un caso de estudio con capturas
   del panel en el portafolio.
