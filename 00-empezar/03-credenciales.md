# Credenciales: las llaves de tus workflows

Qué es una credencial en n8n, cómo crear las que piden los workflows de Nodo Cero y cómo cuidarlas para que nadie más use tus cuentas.

| De un vistazo | |
|---|---|
| **Para quién es** | Para todas las personas que van a conectar n8n con otro servicio: IA, Supabase, Clerk o GitHub. |
| **Qué vas a lograr** | Crear y probar una credencial, saber cuál pide cada workflow y no filtrar ninguna clave. |
| **Tiempo estimado** | 10 minutos, más lo que tarde abrir la cuenta del servicio. |
| **Qué necesitás** | Tu n8n abierto y la clave del servicio. Las guías [04](04-cuenta-supabase.md), [05](05-cuenta-clerk.md) y [07](07-clave-gemini.md) te dicen dónde está cada una. |

Palabras de esta guía, explicadas con un ejemplo en el [glosario](../glosario.md): [credencial](../glosario.md#credencial), [API](../glosario.md#api), [JWT](../glosario.md#jwt), [webhook](../glosario.md#webhook) y [frase de recuperación](../glosario.md#frase-de-recuperación).

## Qué es una credencial

Es la llave que n8n usa para entrar a otro servicio en tu nombre: una clave de API, un usuario y contraseña, un token. Se guarda cifrada en tu n8n, aparte del workflow, y muchos nodos pueden usar la misma.

Por eso los workflows de Nodo Cero no traen ninguna clave: cuando los importás, cada nodo que necesita una llave te la pide, y vos conectás la tuya. Si exportás tu workflow, las claves tampoco viajan (viaja el nombre que le pusiste a la credencial).

## Pasos

### 1. Creá la credencial desde el nodo que la necesita

Es la forma más directa, porque n8n ya sabe qué tipo de credencial hace falta.

1. Abrí el nodo que muestra el aviso de credencial (doble clic).
2. En el campo de credencial, elegí **Create new credential**.
3. Completá los campos. Copiá y pegá las claves, sin espacios al principio ni al final.
4. Guardá. n8n prueba la conexión y te muestra **Connection tested successfully** si salió bien.
5. Hacé clic en el nombre de la credencial (arriba de la ventana) y ponele uno claro, por ejemplo `Supabase · mi proyecto` o `Gemini · Nodo Cero`.

### 2. O creala desde el menú

1. Tocá **+** arriba a la izquierda y elegí **New credential** (o, en **Overview**, el botón **Create** y **Create credential**).
2. Buscá el tipo de credencial por su nombre (la tabla de abajo tiene los nombres exactos).
3. Completala y guardala. Después la elegís en cada nodo desde el campo de credencial.

### 3. Usá la credencial que pide cada workflow

| Credencial en n8n | Tipo | Para qué la usan los workflows | Dónde sacás los datos |
|---|---|---|---|
| **Google Gemini(PaLM) Api** | `googlePalmApi` | El modelo de IA de los agentes, la clasificación y los embeddings. | Una clave de Google AI Studio: [guía 07](07-clave-gemini.md). |
| **OpenAI** (alternativa) | `openAiApi` | Lo mismo, si preferís un modelo de OpenAI. | Una clave de la plataforma de OpenAI: [guía 07](07-clave-gemini.md#alternativa-openai). |
| **Supabase API** | `supabaseApi` | Leer y escribir tablas, y la búsqueda en tus documentos. | **Host**: la URL del proyecto. **Secret Key**: la clave secreta. [Guía 04](04-cuenta-supabase.md). |
| **Postgres** | `postgres` | La memoria del agente (nodo **Postgres Chat Memory**) en tu base de Supabase. | La conexión **Session pooler** de Supabase: [guía 04](04-cuenta-supabase.md#5-conectá-la-memoria-del-agente-postgres). |
| **JWT Auth** | `jwtAuth` | Verificar el token de sesión de Clerk (`21-clerk-api-protegida`). | **Key Type** `PEM Key`, la **JWKS Public Key** de Clerk en **Public Key**, **Private Key** vacía y **Algorithm** `RS256`: [guía 05](05-cuenta-clerk.md#3-copiá-la-clave-pública-para-verificar-sesiones-pem). |
| **Header Auth** | `httpHeaderAuth` | Invitar personas con la Backend API de Clerk (`22-clerk-invitaciones`) y proteger el webhook que llama Supabase (`34-supabase-webhook-ia`). | Para Clerk, **Name** `Authorization` y **Value** `Bearer sk_test_...` (la palabra `Bearer`, un espacio y tu **Secret key**). Para el 34, el encabezado y el secreto que dice su README. |
| Webhook de Clerk | ninguna | Recibir los avisos firmados de Clerk (`20-clerk-webhook-a-supabase`). | El **Signing Secret** (`whsec_...`) no es una credencial: va en el nodo **Configuración** del workflow 20: [guía 05](05-cuenta-clerk.md#4-creá-el-webhook-hacia-n8n). |
| **GitHub API** | `githubApi` | El reporte de proyectos (`42-reporte-kpis`). | Un token fine-grained de GitHub con los permisos **Administration** e **Issues** en **Read-only**, pegado en **Access Token**. El tráfico de un repo lo ve nada más quien puede escribir en él. |
| Avalanche Fuji | ninguna | Leer la red de prueba. | El RPC público de Fuji no pide clave. Nunca pongas la frase de recuperación ni la clave privada de tu wallet en n8n. |

> [!TIP]
> En n8n Cloud, algunos nodos de IA ofrecen **Use Gateway credits** en el campo de credencial: corren con créditos de n8n, sin crear una clave propia. La prueba gratis trae algunos créditos. Si el nodo que usás lo ofrece, es una buena forma de arrancar mientras sacás tu clave.

### 4. Cuidalas como cuidás tu contraseña

1. Nunca pegues una clave dentro de una nota adhesiva, un nodo **Edit Fields (Set)** o **Code**, un README, un chat de grupo, una captura de pantalla o un commit.
2. Cada quien conecta sus propias credenciales. Si trabajan en equipo, pásense el workflow exportado (menú **···**, **Export JSON**), no las claves.
3. Las claves secretas (la **Secret Key** de Supabase, la **Secret key** de Clerk, el token de GitHub) van en n8n y en ningún otro lado: nunca en una página web ni en el navegador.
4. En la demo, no abras la ventana de una credencial con la pantalla compartida.
5. Si una clave se filtró, borrala o rotala en el panel del servicio, creá una nueva y actualizá la credencial en n8n. Borrar el mensaje no alcanza.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| **Couldn’t connect with these settings** | Revisá que pegaste la clave completa, sin espacios, y en el campo correcto. En Supabase, el **Host** va sin `/rest/v1` al final. |
| La credencial no aparece en la lista del nodo | Es de otro tipo. Por ejemplo, un nodo de Gemini no muestra credenciales de OpenAI. Creala desde el mismo nodo con **Create new credential**. |
| El nodo responde 401 o 403 | La clave no es válida o no tiene permiso para eso. Generá una nueva en el panel del servicio. |
| Funcionaba y dejó de funcionar | Alguien rotó o borró la clave, o la prueba gratis del servicio terminó. Revisá el panel del servicio. |

## Para seguir

- Siguiente guía: [Tu proyecto en Supabase](04-cuenta-supabase.md).
- Documentación oficial: [Create and edit credentials](https://docs.n8n.io/build/understand-workflows/create-and-edit-credentials), la [biblioteca de credenciales](https://docs.n8n.io/integrations/builtin/credentials) y [Use Gateway credits](https://docs.n8n.io/build/understand-workflows/use-gateway-credits).

---

[Índice](../README.md) · Anterior: [Importar workflows](02-importar-workflows.md) · Siguiente: [Tu proyecto en Supabase](04-cuenta-supabase.md)
