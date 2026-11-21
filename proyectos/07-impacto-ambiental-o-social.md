# Impacto ambiental o social: reportes ciudadanos

Una idea abierta, inspirada en la sede, el Centro de Educación Ambiental: reportes ciudadanos de basurales, quemas o fugas de agua que la IA ordena y que quedan guardados para darles seguimiento.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos con una causa: ambiente, barrio, escuela, salud comunitaria, accesibilidad. El ejemplo es ambiental, pero el mismo esqueleto sirve para cualquier tema social. |
| **Qué vas a lograr** | Un formulario público para reportar, una tabla en Supabase con cada reporte, una IA que lo clasifica por tipo y urgencia, y un resumen para quien tiene que actuar. |
| **Tiempo estimado** | 2 a 3 horas |
| **Qué necesitás** | Tu n8n, un proyecto de Supabase ([guía 04](../00-empezar/04-cuenta-supabase.md)) y una clave de Gemini ([guía 07](../00-empezar/07-clave-gemini.md)). Ayuda haber hecho antes [Formularios inteligentes](05-formularios-inteligentes.md), porque este proyecto parte de ahí. |
| **Workflows** | [`04-formulario`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/04-formulario) · [`30-formulario-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) · [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) · la tabla de [`02_reportes.sql`](https://github.com/nodo-cero-bo/workflows/blob/main/supabase/sql/02_reportes.sql), la misma del [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales) · opcional: [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) y [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) |

Palabras de esta guía, explicadas con un ejemplo en el [glosario](../glosario.md): [base de datos](../glosario.md#base-de-datos), [RLS](../glosario.md#rls), [webhook](../glosario.md#webhook), [clasificar](../glosario.md#clasificar) y [RAG](../glosario.md#rag).

## La idea

Mucha gente ve un problema en su barrio y no sabe a quién avisar, o avisa por un chat donde el mensaje se pierde. Un buen sistema de reportes hace tres cosas: recibe fácil, ordena por su cuenta y no pierde nada.

```mermaid
flowchart LR
  V(["Vecina o vecino"]) -->|"escanea el QR y reporta"| F["Formulario de n8n"]
  F -->|"inserta"| T[("Supabase: reportes")]
  T -->|"Database Webhook"| IA["n8n + IA: tipo, urgencia y resumen"]
  IA -->|"completa la fila"| T
  H["Horario diario"] --> R["n8n arma el resumen del día"]
  T --> R
  R --> O(["Quien tiene que actuar"])
```

Antes de construir, definan en equipo: **¿quién recibe los reportes y qué hace con ellos?** Una organización, una junta vecinal, un centro de estudiantes. Sin esa respuesta, el sistema junta datos que nadie mira.

## Pasos

### 1. Prepará la tabla de reportes

1. En tu proyecto de Supabase, abrí el **SQL Editor**.
2. Abrí el archivo [`supabase/sql/02_reportes.sql`](https://github.com/nodo-cero-bo/workflows/blob/main/supabase/sql/02_reportes.sql) del repo de workflows, copialo entero, pegalo y tocá **Run**.

**Qué vas a ver:** el mensaje de que la consulta corrió sin errores. Es el mismo SQL del workflow [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales) y de la [guía 10](10-reportes-ambientales-con-foto.md): crea la tabla `reportes` y un bucket privado de Supabase Storage, `reportes-fotos`, que te va a servir si después sumás la foto. Está todo comentado: vale la pena leerlo.

**Cómo sabés que funcionó:** en **Table Editor** aparece `reportes`, vacía.

Las columnas que usa esta guía:

| Columna | Quién la completa | Qué guarda |
|---|---|---|
| `descripcion` | La persona, en el formulario | Qué pasa, de 5 a 2000 caracteres. Obligatoria. |
| `lugar` | La persona, en el formulario | Un barrio o una referencia, de 2 a 300 caracteres, nunca la dirección de una casa. Obligatoria. |
| `categoria` | La IA | Una de `basura`, `quema`, `agua`, `arboles`, `animales`, `ruido` u `otro`. Arranca en `otro`. |
| `urgencia` | La IA | `alta`, `media` o `baja`. Arranca en `media`. |
| `resumen` | La IA | Una frase, de hasta 500 caracteres. |
| `estado` | Quien atiende los reportes | `nuevo`, `en_revision`, `resuelto` o `descartado`. Arranca en `nuevo`. |
| `origen` | La tabla | `formulario`, salvo que se cargue otra cosa. |

La tabla rechaza una categoría, una urgencia o un estado que no estén en esas listas. Por eso, en el paso 3, un nodo limpia lo que contesta la IA antes de guardarlo.

La seguridad viene puesta: RLS activado y ninguna política, así que con la clave publicable nadie puede leer ni escribir, y n8n entra con la clave secreta, que saltea RLS.

> [!TIP]
> **¿Lo querés andando ya, en un único workflow?** El [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales) hace el formulario, la foto, la IA y el guardado de una vez, con esta misma tabla: seguí la [guía 10](10-reportes-ambientales-con-foto.md). Esta guía arma lo mismo pieza por pieza, para entender cada parte. Elegí un camino por proyecto de Supabase: si usás los dos a la vez, el paso 3 vuelve a clasificar los reportes que ya clasificó el 67.

### 2. Armá el formulario

1. Importá [`30-formulario-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) y conectá **Supabase API** en **Guardar la idea**. Si nunca armaste un formulario, mirá antes [`04-formulario`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/04-formulario).
2. Cambiale el nombre al workflow (por ejemplo, `Reportes · formulario`).
3. Abrí **Formulario de ideas**. En **Form Title** escribí «Reportá un problema de tu barrio» y dejá dos campos (borrá los otros con el tachito):

   | Label | Element Type | Custom Field Name | Detalle |
   |---|---|---|---|
   | ¿Qué pasa? | Textarea | `descripcion` | Prendé **Required Field**. En **Placeholder**: «Contanos qué viste, con detalles.» |
   | ¿Dónde? | Text Input | `lugar` | Prendé **Required Field**. En **Placeholder**: «Un barrio o una referencia cercana. No pongas la dirección de una casa.» |

   El **Custom Field Name** es el nombre con el que el dato sale del formulario: igual al de la columna, así el paso siguiente es directo.

   En **Options → Form Path**, cambiá `nodo-cero-ideas` por `nodo-cero-reportes`: dos workflows publicados no pueden usar la misma dirección, y así no choca con el 30 si ya lo tenés.

4. Abrí **Guardar la idea**. En **Table Name or ID**, elegí `reportes`. En los campos, dejá dos y borrá `nombre`, `idea` y `nivel`, que esta tabla no tiene:

   | Field Name or ID | Field Value |
   |---|---|
   | `descripcion` | `{{ $json.descripcion.trim() }}` |
   | `lugar` | `{{ $json.lugar.trim() }}` |

5. Abrí **Página de gracias** y cambiá el mensaje, porque el de ahora usa `nombre`, que ya no existe. Por ejemplo: `Tu reporte quedó guardado con el número {{ $json.id }}. Gracias por avisar.`
6. Probalo con **Execute workflow**: se abre el formulario de prueba en otra pestaña. Mandá un reporte inventado.

**Cómo sabés que funcionó:** la página dice «Tu reporte quedó guardado con el número...» y en **Table Editor → reportes** hay una fila con tu `descripcion` y tu `lugar`, `categoria` en `otro`, `urgencia` en `media` y `estado` en `nuevo`. La IA todavía no pasó: eso es el paso 3.

> [!IMPORTANT]
> No pidas nombre, teléfono ni correo. Un reporte anónimo protege a quien avisa y te evita guardar datos personales. Si alguna vez necesitás un contacto, que sea opcional, explicá para qué lo usás y nunca lo publiques.

### 3. Que la IA ordene cada reporte

1. Importá [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) y conectá sus tres credenciales: **Header Auth** en **Evento de Supabase** (**Name** `x-webhook-secreto` y un secreto largo en **Value**), **Google Gemini(PaLM) Api** en **Modelo Gemini** y **Supabase API** en **Guardar la categoría**.
2. Abrí **Evento de Supabase** y cambiá **Path** por `supabase-reportes`, por la misma razón que en el paso 2.
3. El workflow viene preparado para la tabla `ideas`. Abrí **Leer el evento**, borrá el código y pegá este, que acepta los reportes y le pasa a la IA el lugar y la descripción:

   ```javascript
   // Supabase manda { type, table, schema, record, old_record }. Seguimos nada más si es un
   // INSERT en public.reportes con una descripción. Cualquier otra cosa (por ejemplo un UPDATE)
   // recibe un 400 y no toca la base: así no hay bucles.
   const evento = $input.first().json.body ?? {};
   const fila = evento.record ?? {};

   const motivos = [];
   if (evento.type !== 'INSERT') motivos.push(`el evento es ${evento.type ?? 'desconocido'} y se espera INSERT`);
   if (evento.table !== 'reportes' || evento.schema !== 'public') motivos.push(`la tabla es ${evento.schema}.${evento.table} y se espera public.reportes`);
   if (fila.id === undefined || fila.id === null) motivos.push('la fila no trae id');
   if (typeof fila.descripcion !== 'string' || !fila.descripcion.trim()) motivos.push('la fila no trae texto en «descripcion»');

   return [{
     json: {
       valido: motivos.length === 0,
       motivos,
       id: fila.id ?? null,
       // Se sigue llamando «idea» porque así lo lee el nodo «Clasificar con IA».
       idea: `Lugar: ${fila.lugar ?? 'sin dato'}\nDescripción: ${String(fila.descripcion ?? '').trim()}`,
     },
   }];
   ```

4. Abrí **Clasificar con IA** (un Information Extractor). En **Attributes**, dejá tres, con estos nombres y descripciones (las mismas que usa el workflow 67). La descripción de cada atributo es la instrucción para la IA:

   | Name | Description |
   |---|---|
   | `categoria` | Una sola de estas, en minúsculas y sin tildes: basura (residuos, microbasurales), quema (quemas, chaqueos, humo, incendios), agua (cañerías rotas, inundaciones, canales tapados o contaminados), arboles (tala, árboles caídos o en riesgo), animales (fauna herida, maltrato o animales sueltos), ruido, u otro (si no encaja). |
   | `urgencia` | alta si hay riesgo para personas ahora (fuego, humo cerca de casas o escuelas, inundación, cables o árboles por caer); media si es un problema serio pero sin riesgo inmediato; baja en otro caso. Una sola palabra: alta, media o baja. |
   | `resumen` | Una frase corta en español (máximo 20 palabras) que diga qué pasa y dónde. Sin datos personales. |

   Borrá el atributo `motivo`. En **Options → System Prompt Template**, reemplazá el texto por el del workflow 67: «Sos una persona experta en temas ambientales que ordena reportes ciudadanos de Santa Cruz de la Sierra, Bolivia. Leé el reporte y completá los atributos pedidos. Si dudás entre dos categorías, elegí la del problema principal. No inventes datos que no estén en el reporte.»

5. Abrí **Elegir la categoría**, borrá el código y pegá este. Deja los valores que la tabla acepta: si la IA escribe `Basura` o `árboles`, o algo fuera de la lista, lo pasa a una opción válida.

   ```javascript
   // La IA puede contestar con mayúsculas, tildes o palabras fuera de la lista.
   // Normalizamos y, si no es una opción válida, usamos «otro» y «media»: así la tabla nunca rechaza el reporte.
   const CATEGORIAS = ['basura', 'quema', 'agua', 'arboles', 'animales', 'ruido', 'otro'];
   const URGENCIAS = ['alta', 'media', 'baja'];
   const evento = $('Leer el evento').first().json;
   const salida = $input.first().json.output ?? {};
   const limpiar = (t) => String(t ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

   const categoria = CATEGORIAS.includes(limpiar(salida.categoria)) ? limpiar(salida.categoria) : 'otro';
   const urgencia = URGENCIAS.includes(limpiar(salida.urgencia)) ? limpiar(salida.urgencia) : 'media';
   const resumen = String(salida.resumen ?? '').trim().slice(0, 500);

   return [{ json: { id: evento.id, categoria, urgencia, resumen } }];
   ```

6. Abrí **Guardar la categoría**, el nodo que actualiza la fila. En **Table Name or ID**, elegí `reportes`. La fila se sigue buscando por su `id`. En los campos a escribir, dejá tres:

   | Field Name or ID | Field Value |
   |---|---|
   | `categoria` | `{{ $json.categoria }}` |
   | `urgencia` | `{{ $json.urgencia }}` |
   | `resumen` | `{{ $json.resumen }}` |

7. Publicalo, copiá la **Production URL** de **Evento de Supabase** y creá en Supabase un Database Webhook sobre la tabla `reportes`, evento **Insert** nada más, con `x-webhook-secreto` y tu secreto en **HTTP Headers** ([guía 04, paso 6](../00-empezar/04-cuenta-supabase.md#6-opcional-avisos-de-la-base-a-n8n)).
8. Publicá también el formulario, mandá un reporte desde el celular y mirá cómo se completa la fila.

**Cómo sabés que funcionó:** unos segundos después de mandar el reporte, su fila en **Table Editor → reportes** tiene `categoria`, `urgencia` y `resumen` puestos por la IA (tocá **Refresh** si no cambia). En n8n, la pestaña **Executions** del workflow de IA muestra una ejecución en verde.

### 4. El resumen del día

1. Creá un workflow nuevo que empiece con un **Schedule Trigger** (por ejemplo, todos los días a las 18:00).
2. Agregá un nodo de Supabase que lea las filas de `reportes` del día (filtrá por `creado_en`).
3. Agregá un paso de IA que arme un resumen: cuántos hay por `categoria`, cuáles tienen `urgencia` alta y en qué `lugar` se repiten.
4. Mandá el resumen a quien tiene que actuar, por el canal que use (un correo, un mensaje o una página).
5. Publicalo.

<details>
<summary>Hacelo tuyo: ideas para sumar</summary>

- **Foto del problema**: el formulario de n8n acepta archivos, y el SQL ya creó el bucket privado `reportes-fotos`. Guardá la imagen ahí y su ruta en la columna `foto_ruta`: el nodo **Subir la foto** del workflow 67 lo hace, copialo. Avisá que la foto no muestre caras ni patentes.
- **Asistente que responde dudas**: cargá guías públicas (cómo separar residuos, qué hacer ante una quema) y armá un asistente con [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag), como en la [guía 01](01-asistente-ia-para-tu-comunidad.md).
- **Estado del reporte**: que la organización cambie `estado` a `en_revision` o `resuelto` y n8n lo refleje en una página pública con los números del mes. El final de `02_reportes.sql` trae comentado cómo mostrar nada más los datos que no son sensibles.
- **La categoría que elige la persona**: si querés que quien reporta también elija el tipo, sumá una columna con `alter table public.reportes add column if not exists categoria_elegida text;` y un campo **Dropdown** en el formulario. La IA sigue completando `categoria`.
- **Reportes verificables en Fuji**: que cada reporte se registre en un contrato propio, para que nadie lo pueda borrar, y que n8n lo lea con [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato). Seguí la [guía 06 de proyecto](06-tu-contrato-en-fuji.md).

</details>

## Cómo presentarlo en la demo

1. **El problema, con una situación concreta**: un basural que crece en una esquina y nadie sabe a quién avisar.
2. **La solución**: reportar en treinta segundos desde el celular, y que el sistema ordene y avise.
3. **Demo en vivo**:
   - Mostrá el QR del formulario y pedí que alguien del público mande un reporte.
   - Con la tabla de Supabase proyectada, mostrá cómo entra el reporte y cómo la IA completa tipo, urgencia y resumen.
   - Mostrá el resumen del día (ejecutá el workflow a mano para no esperar al horario).
   - Si sumaste Fuji, mostrá el reporte registrado en el explorador.
4. **Qué sigue**: quién recibiría los reportes y qué haría falta para que lo usen de verdad.

Cargá antes algunos reportes de ejemplo, inventados y sin datos de nadie, para que el resumen tenga algo que contar.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| El formulario guarda, pero la IA nunca completa la fila | El workflow de IA tiene que estar publicado y el Database Webhook, sobre `reportes`, evento **Insert** y con la **Production URL**. |
| El workflow de IA corre en bucle | El Database Webhook escucha también **Update**. Dejalo nada más en **Insert**. |
| La IA devuelve una categoría fuera de la lista | **Elegir la categoría** la pasa a `otro`. Si pasa seguido, repetí la lista exacta en la descripción del atributo. Para algo más firme, usá el nodo **Text Classifier**. |
| Error `null value in column` al insertar | Un campo obligatorio de la tabla no llegó: revisá que el **Custom Field Name** de cada campo sea `descripcion` y `lugar`, y el mapeo de **Guardar la idea**. |
| Error `violates check constraint` | Un valor no entra en la tabla: una descripción de menos de 5 caracteres, o una categoría o urgencia fuera de la lista (revisá el código de **Elegir la categoría**). |
| `relation "public.reportes" does not exist` | Falta correr `02_reportes.sql` (paso 1). |
| `permission denied` (error `42501`) | Corré de nuevo el SQL completo: incluye los permisos que necesita la clave secreta. Y revisá que la credencial use la clave secreta, no la publicable. |
| El workflow de IA responde 400 | Abrí la ejecución y mirá `motivos`: el aviso no es un **Insert** en `public.reportes`, o la fila no trae `descripcion`. |
| El resumen diario sale vacío | Revisá el filtro de fecha: Supabase guarda `creado_en` en UTC y Bolivia está cuatro horas atrás. |

## Para seguir

- Documentación de Supabase: [tablas](https://supabase.com/docs/guides/database/tables), [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security) y [Database Webhooks](https://supabase.com/docs/guides/database/webhooks).
- Documentación de n8n: [n8n Form Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/), [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) y [Text Classifier](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier/).
- Más ideas por área: el [banco de ideas](../ideas.md).

---

[Guías de proyecto](README.md) · Anterior: [Tu contrato en Fuji](06-tu-contrato-en-fuji.md) · Siguiente: [Automatizá tu emprendimiento](08-automatiza-tu-emprendimiento.md)
