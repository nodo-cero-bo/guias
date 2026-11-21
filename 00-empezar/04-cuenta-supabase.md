# Tu proyecto en Supabase

Creá un proyecto gratis en Supabase, encontrá su URL y sus claves, cargá las tablas de Nodo Cero con el SQL Editor y conectá la base a n8n, también como memoria de tu agente de IA.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien quiere que su proyecto guarde datos: respuestas de formularios, perfiles, pagos, documentos para la IA. |
| **Qué vas a lograr** | Un proyecto de Supabase con las tablas `perfiles`, `ideas`, `pagos_fuji` y `documentos`, y las credenciales **Supabase API** y **Postgres** andando en n8n. |
| **Tiempo estimado** | 25 minutos |
| **Qué necesitás** | Una cuenta de GitHub o un correo, tu n8n abierto y la carpeta [`supabase/sql`](https://github.com/nodo-cero-bo/workflows/tree/main/supabase/sql) del repo de workflows. |

## Qué es Supabase

Una base de datos Postgres en la nube con todo lo que hace falta alrededor: una API lista para usar, login, archivos y extensiones como `pgvector`, que permite guardar «embeddings» para que la IA busque en tus documentos por significado y no por palabras exactas. En la hackathon la usamos como la memoria de los proyectos: todo lo que entra por n8n puede quedar guardado ahí.

## Pasos

### 1. Creá tu cuenta y tu proyecto

1. Entrá a [supabase.com/dashboard/sign-up](https://supabase.com/dashboard/sign-up). Podés registrarte con GitHub o con tu correo.
2. Si te lo pide, creá una organización (con el plan gratuito alcanza).
3. Tocá **New project** y completá:
   - **Project name**: por ejemplo `nodo-cero`.
   - **Database Password**: usá la opción para generar una contraseña segura y **guardala en un lugar seguro**. La vas a necesitar en el paso 5 y Supabase no te la vuelve a mostrar.
   - **Region**: la más cercana a Bolivia que aparezca en la lista (una de Sudamérica, si está).
4. Confirmá y esperá uno o dos minutos a que el proyecto termine de prepararse.

> [!NOTE]
> El plan gratuito permite dos proyectos activos y pausa los que no se usan durante una semana. Si volvés y tu proyecto está pausado, entrá al panel y reactivalo: los datos siguen ahí.

### 2. Encontrá la URL y las claves

En el panel de tu proyecto hay dos lugares que vas a usar seguido:

- El botón **Connect**, arriba: muestra la URL del proyecto, la clave publicable y las cadenas de conexión a la base.
- La sección **Settings**, **API Keys**: ahí están todas las claves del proyecto.

| Clave | Cómo empieza | Dónde se puede usar |
|---|---|---|
| URL del proyecto | `https://<tu-proyecto>.supabase.co` | En todos lados: no es secreta. |
| Publicable | `sb_publishable_...` | En una página web o una app: respeta las reglas de seguridad de tus tablas (RLS). |
| Secreta | `sb_secret_...` | En n8n y en ningún otro lado: saltea las reglas de seguridad y puede leer y escribir todo. |
| `anon` y `service_role` (heredadas) | `eyJ...` | Las versiones viejas de la publicable y la secreta. Siguen funcionando mientras Supabase las mantenga; si tu proyecto las muestra, la `service_role` cumple el papel de la secreta. |

Si en **API Keys** no tenés ninguna clave secreta, creá una desde esa misma sección.

### 3. Creá la credencial Supabase API en n8n

1. En n8n, **+**, **New credential**, y buscá **Supabase API** (o creala desde un nodo de Supabase con **Create new credential**).
2. Completá:

   | Campo | Qué va |
   |---|---|
   | **Host** | La URL del proyecto, por ejemplo `https://abcdefghijkl.supabase.co`, **sin** `/rest/v1` al final. |
   | **Secret Key** | Tu clave secreta (`sb_secret_...`). También acepta la `service_role` heredada. |

3. Guardá. Tenés que ver **Connection tested successfully**.

### 4. Cargá las tablas de Nodo Cero con el SQL Editor

El repo de workflows trae el esquema listo, con comentarios que explican cada tabla y cada regla de seguridad.

1. Abrí la carpeta [`supabase/sql`](https://github.com/nodo-cero-bo/workflows/tree/main/supabase/sql): tiene dos archivos y su README explica cada tabla.
2. En Supabase, en el menú de la izquierda, entrá a **SQL Editor** y abrí una consulta nueva.
3. Primero, `00_esquema.sql`: copiá todo su contenido, pegalo y tocá **Run** (o `Ctrl` + `Enter`). Crea las tablas, la búsqueda y la memoria del agente, y se puede correr las veces que quieras.
4. Después, si querés datos para probar, `01_datos_de_ejemplo.sql` en una consulta nueva: carga tres ideas de ejemplo (es opcional y necesita el esquema del paso anterior).
5. Entrá a **Table Editor**: tenés que ver `perfiles`, `ideas`, `pagos_fuji`, `documentos` y `n8n_chat_histories` (la memoria del agente).

<details>
<summary>Qué son las reglas de seguridad (RLS) y por qué importan</summary>

Row Level Security (RLS) son reglas que dicen quién puede leer o escribir cada fila. Con RLS activado, alguien que tenga la clave publicable (por ejemplo, desde una página web) puede hacer nada más que lo que las reglas permiten. n8n usa la clave secreta, que saltea esas reglas: por eso esa clave vive en n8n y nunca en el navegador. Los archivos de `supabase/sql` activan RLS en cada tabla y explican cada regla en los comentarios.

</details>

<details>
<summary>Qué hace la tabla documentos</summary>

Guarda pedacitos de tus documentos junto con su «embedding», una lista de números que representa el significado del texto. La extensión `pgvector` y la función de búsqueda que crea el SQL permiten encontrar los pedacitos más parecidos a una pregunta. Es lo que usan los workflows `32-cargar-documentos-rag` y `33-agente-con-memoria-y-rag`.

</details>

### 5. Conectá la memoria del agente (Postgres)

El agente del workflow [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) recuerda la conversación en una tabla de tu base, con el nodo **Postgres Chat Memory**. Para eso n8n se conecta directo a Postgres, y hay un detalle: la conexión directa de Supabase usa IPv6, mientras que el **Session pooler** funciona por IPv4 en todos los planes. Por eso usamos el pooler, en modo sesión.

1. En Supabase, tocá **Connect** y elegí **Session pooler**. Vas a ver una cadena como esta:

   ```text
   postgresql://postgres.abcdefghijkl:[YOUR-PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:5432/postgres
   ```

   Copiá el host tal cual lo muestra tu panel: una región puede tener más de un pooler.

2. En n8n, **+**, **New credential**, **Postgres**, y completá con los datos de esa cadena:

   | Campo | Qué va | En el ejemplo |
   |---|---|---|
   | **Host** | Lo que está entre `@` y `:5432` | `aws-0-sa-east-1.pooler.supabase.com` |
   | **Database** | `postgres` | `postgres` |
   | **User** | `postgres.` más la referencia de tu proyecto | `postgres.abcdefghijkl` |
   | **Password** | La contraseña de la base del paso 1, tal cual (sin codificar) | |
   | **Port** | `5432` (modo sesión) | `5432` |
   | **SSL** | **Require** | |
   | **Ignore SSL Issues (Insecure)** | Activado: la conexión va cifrada, pero n8n no valida el certificado propio de Supabase. | |

3. Guardá y esperá el **Connection tested successfully**.

### 6. Opcional: avisos de la base a n8n

<details>
<summary>Database Webhooks, para que n8n se entere cuando entra una fila</summary>

Supabase puede llamar a un webhook de n8n cada vez que se inserta, cambia o borra una fila. Es lo que usa el workflow [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) para que la IA clasifique cada fila nueva.

1. En n8n, importá el workflow 34. Su webhook está protegido con un secreto: en el nodo **Evento de Supabase**, creá una credencial **Header Auth** con **Name** `x-webhook-secreto` y, en **Value**, un secreto largo (el README del workflow trae una consulta SQL que te genera uno).
2. Publicalo con **Publish** y copiá la **Production URL** de **Evento de Supabase** (termina en `/webhook/supabase-ideas`).
3. En Supabase, entrá a **Integrations**, **Database Webhooks** (si te pide habilitarlos, habilitalos) y tocá **Create a new hook**.
4. Elegí la tabla `ideas` y nada más el evento **Insert**. En **Type of webhook**, **HTTP Request** con método `POST`, y pegá la URL de n8n. Subí el **Timeout** a 5000 ms (la IA tarda unos segundos) y en **HTTP Headers** sumá `x-webhook-secreto` con el mismo secreto de la credencial.
5. Insertá una fila de prueba desde el **Table Editor** y mirá la pestaña **Executions** del workflow en n8n.

El cuerpo que llega a n8n trae `type`, `table`, `record` (la fila nueva) y `old_record`.

</details>

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| **Couldn’t connect with these settings** en **Supabase API** | El **Host** va sin `/rest/v1` y la clave tiene que ser la secreta: la publicable no pasa la prueba de la credencial. |
| `password authentication failed` en **Postgres** | El usuario es `postgres.<referencia>` (con el punto) y la contraseña es la de la base, no una clave de API. Si no la recordás, usá **Reset database password** en la ventana **Connect**. |
| `self-signed certificate` | Activá **Ignore SSL Issues (Insecure)** en la credencial **Postgres**. |
| La conexión se queda colgada o da un error de red | Probablemente usaste la conexión directa (`db.<referencia>.supabase.co`). Cambiá al host del **Session pooler**. |
| `prepared statement ... does not exist` | Usaste el puerto `6543` (modo transacción). Para n8n, `5432`. |
| `relation "perfiles" does not exist` | Falta correr `00_esquema.sql` (paso 4), o lo corriste en otro proyecto. |
| El proyecto no responde | Puede estar pausado por inactividad: reactivalo desde el panel. |

## Para seguir

- Siguiente guía: [Tu aplicación en Clerk](05-cuenta-clerk.md).
- Documentación oficial: [primeros pasos](https://supabase.com/docs/guides/getting-started), [claves de API](https://supabase.com/docs/guides/getting-started/api-keys), [conectarse a Postgres](https://supabase.com/docs/guides/database/connecting-to-postgres), [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security), [IA y vectores](https://supabase.com/docs/guides/ai) y [Database Webhooks](https://supabase.com/docs/guides/database/webhooks).
- En n8n: el nodo [Supabase](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase/), el [Supabase Vector Store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoresupabase/) y la [Postgres Chat Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat/).

---

[Índice](../README.md) · Anterior: [Credenciales](03-credenciales.md) · Siguiente: [Tu aplicación en Clerk](05-cuenta-clerk.md)
