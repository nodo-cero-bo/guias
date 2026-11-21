# Google Cloud y créditos

Creá un proyecto en Google Cloud, sumá los créditos si tu equipo los recibió, poné una alerta de presupuesto, habilitá las APIs y conectá una cuenta de servicio a n8n. Y cómo apagar todo al terminar.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos que quieren traducir (también a quechua, aimara o guaraní), analizar opiniones, guardar archivos, guardar respuestas en BigQuery o usar Gemini a través de Vertex AI con los workflows de [`50-google-cloud`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud). |
| **Qué vas a lograr** | Un proyecto de Google Cloud con su alerta de presupuesto, las APIs que necesitás habilitadas y la credencial **Google Service Account API** andando en n8n. |
| **Tiempo estimado** | 30 minutos |
| **Qué necesitás** | Una cuenta de Google personal, tu n8n abierto ([guía 01](01-cuenta-n8n-cloud.md)) y, si tu equipo recibió créditos de Google Cloud, el enlace para canjearlos. |

¿Una palabra nueva? Está en el [glosario](../glosario.md#google-cloud).

## Primero: ¿te hace falta Google Cloud?

| Si querés... | Usá |
|---|---|
| Un agente o un resumen con Gemini, gratis | La clave gratis de Google AI Studio, sin Google Cloud: [guía 07](07-clave-gemini.md) y el workflow [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia). Es lo que usan los workflows de IA que no son de Google Cloud. |
| Traducir a quechua (`qu`), aimara (`ay`) o guaraní (`gn`) | **Cloud Translation**, en Google Cloud. |
| Saber si una opinión es positiva o negativa, y qué lugares u organizaciones nombra | **Cloud Natural Language**, en Google Cloud. |
| Guardar fotos o archivos con un enlace | **Cloud Storage**, en Google Cloud. |
| Guardar respuestas y consultarlas con SQL | **BigQuery**, en Google Cloud. |
| Gemini con la facturación de un proyecto | **Vertex AI**, en Google Cloud. Ojo: el crédito de bienvenida de la prueba gratis ya no lo paga (mirá el aviso de abajo). |

Si lo tuyo es la primera fila, no sigas: la guía 07 alcanza. Si es alguna de las otras, seguí.

> [!IMPORTANT]
> **Sobre la plata, antes de empezar.** La prueba gratis de Google Cloud da un crédito de bienvenida de 300 dólares por 90 días, pide un medio de pago para verificar tu identidad y no te cobra salvo que pases a mano a una cuenta paga. Pero la [página oficial de la prueba gratis](https://docs.cloud.google.com/free/docs/free-cloud-features) dice que, para quien abre la prueba (o pasa a una cuenta paga) **desde el 16 de noviembre de 2026**, ese crédito **no paga Vertex AI** (que Google ahora llama «Gemini platform») **ni la API de Gemini de AI Studio**.
>
> - **Para IA gratis**, usá Gemini con la clave de Google AI Studio y su nivel gratuito: [guía 07](07-clave-gemini.md) y el workflow [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia). No necesita Google Cloud ni tarjeta.
> - **Vertex AI** (workflows 50 y 52) usalo nada más si tu equipo recibió créditos que lo cubran: en **Billing → Credits** ves a qué servicios se aplican.
> - **Translation, Natural Language, Cloud Storage y BigQuery** tienen un nivel gratuito por mes: los montos están en [Recursos de Google Cloud](../google-cloud/recursos.md#cuánto-cuesta).
>
> Ante la duda, no cargues ninguna tarjeta y preguntá a la organización.

> [!NOTE]
> **¿Tu equipo quiere competir por la mención «Mejor uso de Google Cloud»?** Para esa mención cuenta cualquier servicio de Google Cloud (Vertex AI, Translation, Natural Language, Cloud Storage, BigQuery) y también Gemini con la clave gratis de Google AI Studio: así cualquier equipo puede postularse sin pagar ni tener créditos. Si la organización reparte créditos de Google Cloud durante el evento, con ellos también podés usar Vertex AI y los demás servicios de esta guía. Lo que sí está escrito sobre la mención está en [Ganadores y menciones](../ganadores-y-menciones.md).

## Pasos

### 1. Entrá a la consola

1. Abrí [console.cloud.google.com](https://console.cloud.google.com/) con tu cuenta de Google personal (no la de una empresa o una universidad: suelen tener reglas que bloquean los pasos de abajo).
2. Si es la primera vez, elegí tu país y aceptá las condiciones.

**Qué vas a ver:** la consola de Google Cloud, con un menú a la izquierda (el ícono de tres rayas) y una barra de búsqueda arriba. Todo lo que dice esta guía lo podés encontrar escribiendo su nombre en esa barra.

### 2. Sumá los créditos

Hay dos caminos. Elegí el tuyo.

**Si tu equipo recibió créditos de Google Cloud:**

1. Abrí el enlace de canje con la misma cuenta de Google que vas a usar.
2. Revisá que la página muestre el nombre del programa o del evento, completá lo que pida y aceptá las condiciones.
3. Al terminar, la consola te lleva a **Billing**. En el menú de la izquierda de **Billing**, entrá a **Credits**: ahí ves el monto, lo que queda y hasta cuándo vale.

**Si no recibiste créditos:** podés usar la prueba gratis desde [cloud.google.com/free](https://cloud.google.com/free) (pide un medio de pago, mirá el aviso de arriba) o, para Gemini, quedarte con la [clave de AI Studio](07-clave-gemini.md).

**Cómo sabés que funcionó:** en **Billing**, **Credits**, aparece una fila con tus créditos y su saldo.

### 3. Creá el proyecto

1. Arriba a la izquierda, al lado del logo, tocá el selector de proyectos y elegí **New project**.
2. En **Project name**, escribí `nodo-cero`.
3. Si aparece una cuenta de facturación, elegí la de tus créditos o la de la prueba gratis. En **Location**, dejá **No organization**.
4. Tocá **Create** y esperá unos segundos.
5. Elegí el proyecto nuevo en el selector y anotá su **Project ID** (aparece en el tablero, en **Project info**). Algunos workflows te lo van a pedir.

**Cómo sabés que funcionó:** el selector de arriba muestra `nodo-cero`.

### 4. Vinculá la facturación

1. Buscá **Billing** en la barra de arriba y entrá.
2. Si dice **This project has no billing account**, tocá **Link a billing account**, elegí la cuenta de tus créditos o de la prueba y confirmá con **Set account**.
3. Si ves **Manage billing account**, el proyecto ya está vinculado: seguí.

### 5. Creá la alerta de presupuesto (no te la saltees)

Una alerta de presupuesto te avisa por correo antes de que el gasto se te vaya de las manos. Tarda dos minutos y te evita sorpresas.

1. En **Billing**, entrá a **Budgets & alerts** y tocá **Create budget**.
2. Ponele un nombre, por ejemplo `nodo-cero-alerta`, y en el alcance (**Scope**) elegí tu proyecto `nodo-cero`.
3. En esa misma pantalla, más abajo, está **Savings** (los descuentos y los créditos), con todo tildado. Así viene por defecto, y entonces el presupuesto cuenta el gasto **ya descontados tus créditos**: si tenés créditos, no te llega ningún aviso hasta que se acaban. **Destildá Savings**, así la alerta te avisa según lo que usás de verdad, aunque todavía lo paguen los créditos.
4. En **Amount**, elegí un monto chico, uno que puedas cubrir si algo sale mal, por ejemplo 5 dólares.
5. En las acciones, dejá los avisos al 50, 90 y 100 por ciento y confirmá que el correo vaya a tu cuenta.
6. Tocá **Finish**.

> [!WARNING]
> Una alerta avisa, pero **no corta el gasto** por su cuenta. Si la consola te ofrece un tope de gasto para el proyecto, usalo también. Y cuando te llegue un aviso, entrá a mirar qué lo provocó.

**Cómo sabés que funcionó:** tu presupuesto aparece en la lista de **Budgets & alerts**. Si lo abrís, en **Savings** no hay nada tildado.

### 6. Habilitá las APIs que vas a usar

Cada servicio se prende por proyecto. Habilitá nada más los que vas a usar:

1. Buscá **APIs & Services** y entrá a **Library**.
2. Buscá cada API de la tabla, abrila y tocá **Enable**.

| API | Para qué workflow |
|---|---|
| **Cloud Translation API** | [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) |
| **Cloud Natural Language API** | [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) |
| **Vertex AI API** (en algunas consolas aparece como **Agent Platform API**) | [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente) y el resumen de [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) |
| **Cloud Storage API** (en muchos proyectos ya viene habilitada) | [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) |
| **BigQuery API** (en muchos proyectos ya viene habilitada) | [`54-bigquery-respuestas`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/54-bigquery-respuestas) |

El workflow [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) usa dos: **Cloud Translation API** para traducir y la de Vertex AI para el resumen con Gemini.

No hace falta la **Cloud Resource Manager API**: los workflows 50 y 52 leen el ID del proyecto del nodo **Configuración**. Esa API la usa nada más la opción **From list** del campo del proyecto en el nodo de Vertex, para mostrarte la lista de tus proyectos.

**Cómo sabés que funcionó:** al abrir cada API, en vez de **Enable** ves **Manage** o **API Enabled**.

### 7. Creá la cuenta de servicio y su clave

Una cuenta de servicio es una cuenta de Google para programas: es la que n8n va a usar para entrar a tu proyecto.

1. Buscá **Service Accounts** (está en **IAM & Admin**) y tocá **Create service account**.
2. En el nombre, escribí `n8n-nodo-cero` y tocá **Create and continue**.
3. Dale los roles que necesitás, según lo que vas a usar:

   | Si vas a usar | Rol |
   |---|---|
   | Cloud Translation | **Cloud Translation API User** |
   | Cloud Natural Language | **Service Usage Consumer** |
   | Vertex AI | **Agent Platform User** (antes se llamaba **Vertex AI User**) |
   | BigQuery | **BigQuery Job User** (deja correr consultas en el proyecto) |

   Para Cloud Storage no le des un rol acá: se lo das sobre el bucket, en el paso 8. Para BigQuery, además de **BigQuery Job User**, la cuenta necesita **BigQuery Data Editor** sobre el dataset (no sobre todo el proyecto): el [README del workflow 54](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/54-bigquery-respuestas) te dice cómo, después de crear la tabla.

4. Tocá **Continue** y después **Done**.
5. Abrí la cuenta de servicio nueva, entrá a la pestaña **Keys** y tocá **Add key**, **Create new key**.
6. Elegí **JSON** y tocá **Create**. Se descarga un archivo `.json`.

   Si en vez del archivo aparece `FAILED_PRECONDITION: Key creation is not allowed on this service account.`, tu proyecto está dentro de una organización que bloquea las claves (la regla `iam.disableServiceAccountKeyCreation`). Mirá [Si algo falla](#si-algo-falla).

> [!WARNING]
> Ese archivo es una llave completa a tu proyecto. No lo subas a GitHub, no lo mandes por chat, no lo pegues en una nota ni lo muestres en la demo. Guardalo en tu compu y borralo cuando termines (paso 11).

**Cómo sabés que funcionó:** en la pestaña **Keys** aparece una clave con estado activo, y tenés el archivo en tu carpeta de descargas.

### 8. Si vas a guardar archivos: creá el bucket

Saltealo si no vas a usar Cloud Storage. Un [bucket](../glosario.md#cloud-storage-y-bucket) es el contenedor donde quedan tus archivos.

1. Buscá **Cloud Storage**, entrá a **Buckets** y tocá **Create**.
2. Elegí un nombre en minúsculas, sin espacios y que nadie haya usado en el mundo, por ejemplo `nodo-cero-` y el nombre de tu equipo.
3. En la ubicación, elegí una región, por ejemplo `us-central1`, que entra en el nivel gratuito. Lo demás, dejalo como viene (el acceso público queda bloqueado: así está bien).
4. Tocá **Create**.
5. Dentro del bucket, entrá a la pestaña **Permissions** y tocá **Grant access**.
6. En los principales nuevos, pegá el `client_email` de tu cuenta de servicio (lo vas a ver en el archivo `.json`), elegí el rol **Storage Object User** y guardá.

**Cómo sabés que funcionó:** el bucket aparece en **Buckets** y, en **Permissions**, tu cuenta de servicio figura con **Storage Object User**. Anotá el nombre del bucket: el workflow 53 te lo pide.

### 9. Conectala en n8n

1. Abrí el archivo `.json` con el Bloc de notas (o cualquier editor de texto). Vas a necesitar dos valores: `client_email` y `private_key`.
2. En n8n, en el nodo de Google que lo pida, elegí **Create new credential**. El tipo es **Google Service Account API**.
3. Completá:

   | Campo | Qué va |
   |---|---|
   | **Region** | Dejá el que viene, **Global (multi-region) - global**, salvo que el README del workflow diga otra cosa. Se usa para Vertex AI. |
   | **Service Account Email** | El valor de `client_email`: termina en `.iam.gserviceaccount.com`. |
   | **Private Key** | El valor de `private_key`, sin las comillas de los costados: el texto largo que empieza con `-----BEGIN` y termina con `KEY-----` y un `\n`. |
   | **Set up for use in HTTP Request node** | **Activalo para el workflow 51**, que llama a Cloud Natural Language con un nodo **HTTP Request**. Al activarlo aparece **Scope(s)**: escribí `https://www.googleapis.com/auth/cloud-platform`. Los otros nodos de Google (Translate, Cloud Storage, BigQuery, Vertex) piden sus permisos por su cuenta, así que podés usar la misma credencial con esta opción activada. |

4. Guardá. Ponele un nombre claro a la credencial, por ejemplo `Google Cloud · nodo-cero`.

**Cómo sabés que funcionó:** el aviso de credencial del nodo desaparece y, al ejecutar el workflow, el nodo de Google se pone en verde. Si el 51 responde `Request had insufficient authentication scopes`, a la credencial le falta el scope de arriba.

### 10. Probá un workflow

1. Importá [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) ([cómo importar](02-importar-workflows.md)) y leé su nota grande.
2. Abrí **Configuración** y escribí el **Project ID** de tu proyecto en `proyecto_id`.
3. Elegí tu credencial en **Gemini en Vertex AI** y en **Traducir el resumen**.
4. Tocá **Execute workflow**: se abre el formulario de prueba en otra pestaña. Pegá un aviso inventado (una feria, un corte de agua), elegí **Quechua** y tocá **Resumir y traducir**.

**Cómo sabés que funcionó:** la página final muestra el resumen en español y su traducción al quechua. En n8n, todos los nodos quedan en verde.

El resumen de este workflow lo hace Gemini en Vertex AI, que se paga con la facturación del proyecto (desde el 16 de noviembre de 2026, el crédito de bienvenida de la prueba gratis no lo cubre). Si tus créditos no cubren Vertex AI, cambiá **Gemini en Vertex AI** por un **Google Gemini Chat Model** con tu clave gratis de AI Studio ([guía 07](07-clave-gemini.md)): la traducción sigue siendo de Google Cloud.

Para armar un proyecto con esto, seguí la guía [Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md).

### 11. Al terminar, apagá todo

Cuando ya no lo uses (al final del día o cuando termine tu proyecto):

1. **Borrá la clave.** En **Service Accounts**, abrí `n8n-nodo-cero`, pestaña **Keys**, y borrá la clave. Borrá también el archivo `.json` de tu compu.
2. **Borrá la credencial en n8n** (o dejala: sin la clave en Google Cloud ya no sirve).
3. **Apagá el proyecto.** En **IAM & Admin**, **Settings**, tocá **Shut down**, escribí el **Project ID** y confirmá. Google lo guarda 30 días por si te arrepentís y después lo borra.

Si querés seguir usándolo después de la hackathon, no lo apagues, pero dejá la alerta de presupuesto y revisá **Billing** de vez en cuando.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| `API has not been used in project ... or it is disabled` o `SERVICE_DISABLED` | Falta habilitar esa API en el proyecto (paso 6). Después de habilitarla, esperá un par de minutos y probá de nuevo. |
| `PERMISSION_DENIED` o `403` | La cuenta de servicio no tiene el rol para esa API (paso 7). Sumalo en **IAM & Admin**, **IAM**, editando los permisos de la cuenta, y esperá un par de minutos. Para Cloud Storage el rol va sobre el bucket, y para BigQuery, **BigQuery Data Editor** va sobre el dataset. |
| `BILLING_DISABLED` o un error que habla de facturación | El proyecto no tiene una cuenta de facturación vinculada (paso 4), o los créditos se terminaron o vencieron. |
| Al crear la clave: `FAILED_PRECONDITION: Key creation is not allowed on this service account.` | Tu proyecto está dentro de una organización que bloquea las claves de cuentas de servicio (pasa con cuentas de empresas y universidades, y con organizaciones nuevas, donde viene así por defecto). Usá una cuenta de Google personal y un proyecto con **No organization** (paso 3). |
| n8n dice que la clave privada no es válida | Copiaste de más o de menos. Pegá el valor de `private_key` completo, sin las comillas de los costados. |
| Vertex AI responde que el modelo no existe o no está disponible | Dejá la **Region** de la credencial en **Global (multi-region) - global**, o elegí otro modelo de la lista del nodo. |
| Te llegó un aviso de presupuesto | Entrá a **Billing** y mirá qué servicio gastó. Si no lo esperabas, desactivá el workflow que lo usa (**Unpublish**) y borrá la clave (paso 11). |

## Para seguir

- Guía de proyecto: [Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md).
- Los workflows: la carpeta [`50-google-cloud`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud) del repo de workflows.
- Qué servicio sirve para qué, con su nodo, su rol y lo que cuesta: [Recursos de Google Cloud](../google-cloud/recursos.md).
- Qué reconoce la mención «Mejor uso de Google Cloud»: [Ganadores y menciones](../ganadores-y-menciones.md).
- Documentación oficial: [prueba gratis y nivel gratuito](https://docs.cloud.google.com/free/docs/free-cloud-features), [alertas de presupuesto](https://docs.cloud.google.com/billing/docs/how-to/budgets), [claves de cuentas de servicio](https://docs.cloud.google.com/iam/docs/keys-create-delete), [apagar un proyecto](https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects), [idiomas de Cloud Translation](https://docs.cloud.google.com/translate/docs/languages) y la [credencial de cuenta de servicio en n8n](https://docs.n8n.io/integrations/builtin/credentials/google/service-account/).

---

[Índice](../README.md) · Anterior: [Tu clave de Gemini](07-clave-gemini.md) · Siguiente: [Guías de proyecto](../proyectos/README.md)
