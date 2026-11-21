# Línea: Apps con login y datos

El circuito de una app real: las personas inician sesión con Clerk, n8n hace de backend y verifica quién pide cada cosa, y los datos quedan guardados en Supabase. Sin montar un servidor.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos con alguien que se anime con un poco de HTML, y para quien quiere entender cómo funciona una app por dentro. El código de la página de ejemplo ya está escrito. |
| **Qué vas a lograr** | Datos que entran por un formulario o una API y quedan en una base, y, en el nivel más alto, una página con login que habla con una API de n8n protegida. |
| **Tiempo estimado** | La jornada entera: 1 hora para el nivel inicial, 2 a 3 horas para el intermedio y lo que quede para lucirte. |
| **Qué necesitás** | Tu n8n ([guía 01](../00-empezar/01-cuenta-n8n-cloud.md)), un proyecto de Supabase ([guía 04](../00-empezar/04-cuenta-supabase.md)) y, para el login, una aplicación de Clerk ([guía 05](../00-empezar/05-cuenta-clerk.md)). |

## Qué es

Toda app tiene tres partes: **quién sos** (el login y la [sesión](../glosario.md#sesión)), **qué podés hacer** (una [API](../glosario.md#api) que revisa permisos) y **dónde quedan las cosas** (una [base de datos](../glosario.md#base-de-datos)). En esta línea, Clerk resuelve el login, n8n es la API y Supabase guarda los datos, con reglas de seguridad por fila ([RLS](../glosario.md#rls)).

## Por qué elegirla

- Aprendés cómo se arma una app profesional: tokens firmados ([JWT](../glosario.md#jwt)), [webhooks](../glosario.md#webhook) verificados y claves que nunca salen del servidor.
- Lo que construís sirve para casi cualquier idea que necesite usuarias, inscripciones o un panel.
- Se combina con las otras líneas: un agente detrás del login, o pagos en Fuji verificados para cada persona.

## Tu ruta, paso a paso

### Empezás con

1. **Tu primera API**: [`02-mi-primera-api`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/02-mi-primera-api), un webhook que recibe un pedido con un nombre y responde un saludo en JSON. Lo probás con un comando desde la terminal, como explica su README.
2. **Tu base**: [Tu proyecto en Supabase](../00-empezar/04-cuenta-supabase.md), con las tablas de Nodo Cero cargadas desde el SQL Editor.
3. **Del formulario a la tabla**: [`30-formulario-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase). Cada respuesta del formulario es una fila nueva.

**Cómo sabés que vas bien:** completás el formulario y la fila aparece en el **Table Editor** de Supabase.

### Después

1. **Una API sobre tus datos**: [`31-api-crud-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/31-api-crud-supabase) lista y crea filas con un webhook.
2. **Que la base avise**: [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) recibe un aviso de Supabase cada vez que entra una fila y la completa con IA.
3. **Tu aplicación en Clerk**: [guía 05](../00-empezar/05-cuenta-clerk.md), con las claves, el webhook firmado y la clave pública.

La guía de este nivel: [Formularios inteligentes que guardan y clasifican](../proyectos/05-formularios-inteligentes.md).

### Para lucirte

- **Perfiles sincronizados**: [`20-clerk-webhook-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase) recibe los avisos firmados de Clerk y mantiene al día la tabla `perfiles`.
- **Una API protegida**: [`21-clerk-api-protegida`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida) verifica el token de sesión de Clerk y responde `401` a quien no inició sesión.
- **La página con login**: [`clerk/app-ejemplo`](https://github.com/nodo-cero-bo/workflows/tree/main/clerk/app-ejemplo), una página HTML que inicia sesión y llama a la API protegida. Guía: [App con login y datos](../proyectos/02-app-con-login-y-datos.md).
- **Invitaciones**: [`22-clerk-invitaciones`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/22-clerk-invitaciones) invita personas por correo con la Backend API de Clerk.
- **Archivos**: [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) sube a Google Cloud Storage el archivo que llega por un formulario y devuelve su enlace.

## Los workflows que sirven

| Workflow | Qué hace | Nivel | Qué pide |
|---|---|---|---|
| [`02-mi-primera-api`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/02-mi-primera-api) | Un webhook que recibe un pedido y responde JSON. | Inicial | ninguna |
| [`30-formulario-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) | Formulario, fila en Supabase y página final. | Inicial | Supabase |
| [`31-api-crud-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/31-api-crud-supabase) | API para listar y crear filas. | Intermedio | Supabase |
| [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) | Aviso de Supabase al insertar una fila, la IA la clasifica. | Intermedio | Supabase, Gemini y Header Auth |
| [`20-clerk-webhook-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase) | Webhook firmado de Clerk a la tabla `perfiles`. | Intermedio | Supabase |
| [`21-clerk-api-protegida`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida) | API que exige la sesión de Clerk. | Avanzado | JWT Auth y Supabase |
| [`22-clerk-invitaciones`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/22-clerk-invitaciones) | Invitaciones por correo con Clerk. | Intermedio | Header Auth |
| [`13-fuji-verificar-pago`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago) | Verifica un pago en Fuji y, si querés, lo guarda. | Intermedio | Supabase (opcional) |
| [`41-pagos-fuji-con-login`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) | Login, pago verificado en Fuji y registro. | Avanzado | Supabase |
| [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) | Un archivo del formulario a un bucket, con su enlace. | Inicial | Google Cloud |
| [`64-limpiar-una-lista`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/64-limpiar-una-lista) | Limpia, deduplica y valida una lista antes de cargarla. | Inicial | ninguna |

Y dos carpetas de apoyo: [`supabase/sql`](https://github.com/nodo-cero-bo/workflows/tree/main/supabase/sql), con el esquema de las tablas, y [`clerk/app-ejemplo`](https://github.com/nodo-cero-bo/workflows/tree/main/clerk/app-ejemplo), con la página de ejemplo.

## Las guías de proyecto que encajan

- [02 App con login y datos](../proyectos/02-app-con-login-y-datos.md): el circuito completo, login, API protegida y base.
- [05 Formularios inteligentes](../proyectos/05-formularios-inteligentes.md): formulario, base y una IA que ordena.
- [08 Automatizá tu emprendimiento](../proyectos/08-automatiza-tu-emprendimiento.md): catálogo, pedidos y una API de productos.
- [03 Pagos verificables en Fuji](../proyectos/03-pagos-verificables-en-fuji.md), paso 4, si querés pagos detrás del login.

## Ideas para Santa Cruz y Bolivia

- **Inscripciones a talleres**: cada persona inicia sesión, se anota y ve sus talleres; la organización ve la lista completa en Supabase.
- **El panel de un emprendimiento**: pedidos que entran por formulario, un catálogo con API y un acceso con login para quien atiende.
- **Préstamo de libros o herramientas en el barrio**: quién tiene qué, desde cuándo y un aviso cuando vence.
- **Bolsa de voluntariado**: organizaciones que publican necesidades y voluntarias que se anotan con su cuenta.
- **Turnos para un espacio comunitario**: una cancha, un salón o una sala de estudio, sin anotar a mano. Sin datos sensibles de nadie.

## Cómo mostrarla en la demo

1. **El problema**: «Hoy las inscripciones se anotan en un cuaderno y se pierden».
2. **En vivo**: iniciá sesión en la página, hacé la acción principal (anotarte, pedir algo) y mostrá cómo aparece la fila en Supabase.
3. **La seguridad, a la vista**: llamá a la API sin sesión y mostrá el `401`. Es la forma más clara de mostrar que la API está protegida.
4. **Por dentro**: el canvas de n8n con la verificación del token y la ejecución de recién.
5. **Qué sigue**: quién lo usaría y qué le falta.

Cuidá la pantalla: ninguna **Secret key** ni la ventana de una credencial a la vista, y datos de prueba, nunca de personas reales.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| **Couldn’t connect with these settings** en Supabase | El **Host** va sin `/rest/v1` al final y la clave es la secreta ([guía 04](../00-empezar/04-cuenta-supabase.md)). |
| La API protegida responde `401` con la sesión iniciada | Revisá la clave pública PEM en la credencial **JWT Auth** y que el algoritmo sea `RS256` ([guía 05](../00-empezar/05-cuenta-clerk.md)). |
| La página no puede llamar a n8n por CORS | El origen de la página tiene que estar permitido en el workflow, igual en los dos lugares que indica la [guía de proyecto 02](../proyectos/02-app-con-login-y-datos.md). |
| El webhook de Clerk no llega | El workflow 20 tiene que estar publicado y el webhook de Clerk, apuntando a su **Production URL**. |
| Supabase no deja leer desde la página | Es RLS haciendo su trabajo: desde la página se usa la clave publicable y las reglas deciden. Lo sensible, por n8n. |

## Para seguir

- Las otras líneas: [IA](ia.md) · [Web3](web3.md) · [Impacto](impacto.md).
- Documentación oficial: [Supabase](https://supabase.com/docs), [Clerk](https://clerk.com/docs) y el nodo [Webhook de n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/).

---

[Líneas](README.md) · Anterior: [Web3 con Avalanche Fuji](web3.md) · Siguiente: [Impacto social y ambiental](impacto.md)
