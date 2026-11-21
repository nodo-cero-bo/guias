# Recursos de Google Cloud

Qué servicios de Google Cloud se conectan hoy con n8n, con qué nodo, credencial y permiso, cuánto cuestan, ideas para combinarlos y los enlaces oficiales, todo en un lugar.

En Nodo Cero hay una mención especial «Mejor uso de Google Cloud», que reconoce al equipo que mejor use Google Cloud en su proyecto. Para esa mención cuenta cualquier servicio de Google Cloud (Vertex AI, Translation, Natural Language, Cloud Storage, BigQuery) y también Gemini con la clave gratis de Google AI Studio. Qué reconoce y cómo contarlo en la demo está en [Ganadores y menciones](../ganadores-y-menciones.md); esta página es la caja de herramientas. Para esa mención cuenta cualquier servicio de Google Cloud y también Gemini con la clave gratis de Google AI Studio.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos que suman Google Cloud a su proyecto, de cualquier línea, y quieren elegir bien qué servicio usar sin gastar de más. |
| **Qué vas a lograr** | Saber qué servicio sirve para qué, cómo se conecta con n8n, qué permiso necesita la cuenta de servicio y qué entra en el nivel gratuito. |
| **Tiempo estimado** | 10 minutos para recorrerla. |
| **Qué necesitás** | Nada para leerla. Para usar Google Cloud, un proyecto con su alerta de presupuesto y la credencial de n8n: [Google Cloud y créditos](../00-empezar/08-google-cloud.md). |

¿Una palabra nueva? Está en el [glosario](../glosario.md#google-cloud).

## Llamados

| | Qué hacer | Para qué |
|---|---|---|
| 1 | **[Entrá a la consola](https://console.cloud.google.com/)** | Donde se crea el proyecto, se habilitan las APIs y se ven los gastos. |
| 2 | **[Mirá la prueba gratis y el nivel gratuito](https://cloud.google.com/free)** | Qué te da Google Cloud sin costo, y hasta dónde. |
| 3 | **[Creá tu alerta de presupuesto](https://docs.cloud.google.com/billing/docs/how-to/budgets)** | Un aviso por correo antes de que el gasto se te vaya de las manos. Hacelo antes de probar nada. |
| 4 | **[Seguí la guía paso a paso](../00-empezar/08-google-cloud.md)** | Proyecto, créditos, APIs, cuenta de servicio, credencial en n8n y cómo apagar todo. |
| 5 | **[Importá los workflows de Google Cloud](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud)** | Cinco ejemplos listos, con notas que explican cada paso. |

## Qué servicio, para qué y cómo se conecta

Todos usan la misma credencial de n8n, **Google Service Account API** (tipo `googleApi`), con la clave JSON de una [cuenta de servicio](../glosario.md#cuenta-de-servicio). Lo que cambia es el rol que le das a esa cuenta: dale nada más el que necesita cada servicio.

| Servicio | Para qué te sirve | Nodo de n8n | Rol de la cuenta de servicio | Workflow |
|---|---|---|---|---|
| **[Vertex AI](../glosario.md#vertex-ai)** (Gemini) | Conversar, resumir, clasificar, extraer datos de un texto o de una foto. | **Google Vertex Chat Model** (y **Embeddings Google Vertex** para buscar en documentos) | **Agent Platform User** (`roles/aiplatform.user`) | [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente) |
| **[Cloud Translation](../glosario.md#cloud-translation)** | Traducir a más de cien idiomas, entre ellos el quechua (`qu`), el aimara (`ay`) y el guaraní (`gn`). | **Google Translate** (con **Authentication** = **Service Account**) | **Cloud Translation API User** (`roles/cloudtranslate.user`) | [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) |
| **[Cloud Natural Language](../glosario.md#cloud-natural-language)** | Saber si un texto es positivo o negativo y qué personas, lugares u organizaciones nombra. | **HTTP Request** con la credencial (el nodo propio de Natural Language pide OAuth2) | **Service Usage Consumer** (`roles/serviceusage.serviceUsageConsumer`) | [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) |
| **[Cloud Storage](../glosario.md#cloud-storage-y-bucket)** | Guardar fotos, PDF y archivos en un bucket privado. | **Google Cloud Storage** (con **Authentication** = **Service Account**) | **Storage Object User** (`roles/storage.objectUser`), dado sobre el bucket | [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) |
| **BigQuery** | Guardar muchas filas y consultarlas con SQL: respuestas de encuestas, registros, mediciones. | **Google BigQuery** (operación **Execute Query**, que el 54 usa para guardar con un `INSERT` con parámetros y para consultar; con **Authentication** = **Service Account**) | **BigQuery Data Editor** (`roles/bigquery.dataEditor`) sobre el dataset y **BigQuery Job User** (`roles/bigquery.jobUser`) en el proyecto | [`54-bigquery-respuestas`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/54-bigquery-respuestas) |

Para cualquier otra API de Google Cloud que no tenga nodo propio, el camino es el mismo del workflow 51: un **HTTP Request** con **Predefined Credential Type** = **Google Service Account API**, y en la credencial, **Set up for use in HTTP Request node** activado con el scope `https://www.googleapis.com/auth/cloud-platform`.

> [!NOTE]
> Google le cambió el nombre a Vertex AI en 2026: en su documentación aparece como «Gemini Enterprise Agent Platform» o «Gemini platform», y el rol que antes se llamaba «Vertex AI User» ahora es **Agent Platform User**. La API sigue siendo `aiplatform.googleapis.com` y el nodo de n8n sigue siendo **Google Vertex Chat Model**.

## Cuánto cuesta

Datos de las páginas oficiales de Google, revisadas el 21 de noviembre de 2026. Los precios cambian: antes de usar algo a lo grande, mirá la página de precios de cada servicio.

| Servicio | Lo que no se cobra | Lo que conviene saber |
|---|---|---|
| Vertex AI (Gemini) | Nada: no tiene nivel gratuito. | Se paga por [tokens](../glosario.md#tokens-de-la-ia). Para quien abre la prueba gratis (o pasa a una cuenta paga) desde el 16 de noviembre de 2026, los USD 300 de bienvenida no pagan Vertex AI ni la API de Gemini de AI Studio ([página oficial](https://docs.cloud.google.com/free/docs/free-cloud-features)). |
| Cloud Translation | Los primeros 500.000 caracteres por mes (Google lo aplica como un crédito de USD 10 por mes). | Resumí antes de traducir: gasta menos. |
| Cloud Natural Language | Las primeras 5.000 unidades por mes de cada análisis (una unidad es un texto de hasta 1.000 caracteres). | El workflow 51 usa dos análisis por opinión: sentimiento y entidades. |
| Cloud Storage | 5 GB-mes de almacenamiento regional en `us-east1`, `us-west1` o `us-central1`. | Fuera de esas regiones, se cobra desde el primer byte. |
| BigQuery | 1 TiB de consultas y 10 GiB de almacenamiento por mes. | El **sandbox** de BigQuery se usa sin tarjeta, pero no acepta `INSERT` (DML) ni carga por streaming: para guardar filas desde n8n hace falta facturación. Cada consulta cuenta como mínimo 10 MB. |

**La prueba gratis.** Google Cloud da un crédito de bienvenida de USD 300 por 90 días a quien nunca fue cliente pago. Pide un medio de pago para verificar tu identidad y no cobra hasta que pases a una cuenta paga. Según la [página oficial](https://docs.cloud.google.com/free/docs/free-cloud-features), si abriste la prueba desde el 16 de noviembre de 2026, ese crédito **no paga Vertex AI** (que Google ahora llama «Gemini platform») **ni la API de Gemini de AI Studio**: sirve para los otros servicios de esta página. Si tu equipo recibió un código de créditos, sus condiciones pueden ser otras: mirá en **Billing → Credits** a qué servicios se aplica antes de contar con él.

**Para IA sin gastar**, usá Gemini con la clave de Google AI Studio, que tiene un nivel gratuito y no necesita Google Cloud: [guía 07](../00-empezar/07-clave-gemini.md) y el workflow [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia). Es lo que usan los workflows de IA que no son de Google Cloud (por ejemplo, el 05, el 65 y el 67). Si tu proyecto usa Gemini por AI Studio y otros servicios por Google Cloud, contalo así en la demo.

## Ideas para combinar servicios

Un buen uso de Google Cloud junta servicios para resolver algo real. Algunas ideas, de las [cuatro líneas](../lineas/README.md):

| Idea | Servicios | Arrancá con |
|---|---|---|
| **Avisos para tu barrio en su idioma**: un aviso largo se resume y se traduce al quechua, al aimara o al guaraní, y se manda por Telegram. | Vertex AI + Cloud Translation | [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) y la guía [Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md) |
| **Reportes ambientales con foto, en Google Cloud**: la guía [Reportes ambientales con foto](../proyectos/10-reportes-ambientales-con-foto.md) (workflow [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales)) guarda la foto en Supabase Storage y clasifica con Gemini por la clave de AI Studio. Para sumarle Google Cloud, cambiá **Subir la foto** por el nodo **Google Cloud Storage** del 53, y la IA, si tus créditos la cubren, por Gemini en Vertex AI. | Cloud Storage (+ Vertex AI, opcional) | [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales) y [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) |
| **Escuchar a tu comunidad**: un formulario de opiniones que mide el tono, junta los temas y avisa cuando algo sale mal. | Cloud Natural Language + BigQuery | [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) y [`54-bigquery-respuestas`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/54-bigquery-respuestas) |
| **Mensajes en cualquier idioma**: lo que llega en guaraní o en inglés se traduce al español y se clasifica. | Cloud Translation + Cloud Natural Language | [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) y [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) |
| **Asistente que conoce tus documentos**: Gemini en Vertex AI responde con lo que está en tus PDF, guardados con embeddings. Los workflows 32 y 33 usan Gemini por AI Studio: si cambiás los embeddings a **Embeddings Google Vertex**, cambialos en los dos (cargar y buscar) y volvé a cargar los documentos, porque cada modelo arma vectores distintos y la tabla `documentos` espera 3072 números por vector. | Vertex AI (chat y **Embeddings Google Vertex**) + Supabase | [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente), [`32-cargar-documentos-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag) y [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) |

Más ideas, por línea, en [Ideas de proyecto](../ideas.md).

## Cuidá la plata y las claves

1. **Alerta de presupuesto antes de probar** ([paso a paso](../00-empezar/08-google-cloud.md#5-creá-la-alerta-de-presupuesto-no-te-la-saltees)). Al crearla, Google cuenta el gasto ya descontados los créditos (**Savings**, todos tildados por defecto). Si querés que te avise según lo que usás aunque lo paguen los créditos, destildá **Savings**.
2. **Una alerta avisa, pero no frena.** Para Vertex AI y la API de Gemini, Google tiene además presupuestos con tope (**spend cap**), que pausan ese servicio al llegar al monto: [cómo se configuran](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps).
3. **La clave JSON es una llave de tu proyecto.** Nunca la subas a GitHub, no la pegues en un nodo **Code** ni en una nota, y no la muestres en la demo. Google lo dice en sus [buenas prácticas](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
4. **Al terminar, apagá todo**: borrá la clave de la cuenta de servicio y apagá el proyecto (queda 30 días para recuperarlo y después se borra). Pasos en la [guía](../00-empezar/08-google-cloud.md#11-al-terminar-apagá-todo).

## Documentación oficial

| Tema | Enlace |
|---|---|
| Prueba gratis y nivel gratuito | [Free cloud features](https://docs.cloud.google.com/free/docs/free-cloud-features) |
| Alertas de presupuesto y topes de gasto | [Budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets) y [spend caps](https://docs.cloud.google.com/billing/docs/how-to/budgets-spend-caps) |
| Claves de cuentas de servicio | [Crear y borrar claves](https://docs.cloud.google.com/iam/docs/keys-create-delete) |
| Apagar un proyecto | [Delete and restore projects](https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects) |
| Modelos de Gemini en Vertex AI | [Google models](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/google-models), [roles](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/access-control) y [precios](https://cloud.google.com/model-garden/pricing) |
| Cloud Translation | [Idiomas](https://docs.cloud.google.com/translate/docs/languages), [roles](https://docs.cloud.google.com/translate/docs/access-control) y [precios](https://cloud.google.com/products/translate/pricing) |
| Cloud Natural Language | [Idiomas](https://docs.cloud.google.com/natural-language/docs/languages), [annotateText v2](https://docs.cloud.google.com/natural-language/docs/reference/rest/v2/documents/annotateText) y [precios](https://cloud.google.com/products/natural-language/pricing) |
| Cloud Storage | [Roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles) y [URL firmadas](https://docs.cloud.google.com/storage/docs/access-control/signed-urls) |
| BigQuery | [Sandbox](https://docs.cloud.google.com/bigquery/docs/sandbox), [roles](https://docs.cloud.google.com/bigquery/docs/access-control) y [precios](https://cloud.google.com/bigquery/pricing) |
| n8n con Google | [Credenciales de Google](https://docs.n8n.io/integrations/builtin/credentials/google/), [cuenta de servicio](https://docs.n8n.io/integrations/builtin/credentials/google/service-account/), [Google Vertex Chat Model](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglevertex/), [Google Translate](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googletranslate/), [Google Cloud Storage](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecloudstorage/) y [Google BigQuery](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlebigquery/) |

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| `API has not been used in project ... or it is disabled` | Habilitá esa API en el proyecto (**APIs & Services → Library**), esperá un par de minutos y probá de nuevo. |
| `403` o `PERMISSION_DENIED` | A la cuenta de servicio le falta el rol de la tabla de arriba. Para Cloud Storage, el rol va sobre el bucket; para BigQuery, **BigQuery Data Editor** va sobre el dataset y **BigQuery Job User**, en el proyecto. |
| `Request had insufficient authentication scopes` en un **HTTP Request** (por ejemplo, en el workflow 51) | En la credencial, activá **Set up for use in HTTP Request node** y escribí el scope `https://www.googleapis.com/auth/cloud-platform`. |
| Al crear la clave JSON: `FAILED_PRECONDITION: Key creation is not allowed on this service account.` | Tu proyecto está dentro de una organización que bloquea las claves de cuentas de servicio. Usá una cuenta de Google personal y un proyecto sin organización (**No organization**). |
| No sabés si algo se está cobrando | **Billing → Reports** muestra el gasto por servicio y por día. |

Los demás errores, con su arreglo, están en la [guía de Google Cloud](../00-empezar/08-google-cloud.md#si-algo-falla) y en el README de cada workflow.

## Para seguir

- Qué reconoce la mención y cómo contarlo en la demo: [Ganadores y menciones](../ganadores-y-menciones.md).
- Un proyecto completo con Google Cloud: [Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md).
- Para presentar: [Cómo presentar tu proyecto](../presentar.md).

---

[Índice](../README.md) · [Google Cloud y créditos](../00-empezar/08-google-cloud.md) · [Recursos de Avalanche](../avalanche/recursos.md)
