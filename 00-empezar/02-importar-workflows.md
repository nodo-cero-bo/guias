# Importar los workflows de la hackathon

Tres formas de traer a tu n8n los workflows de Nodo Cero, listos para usar: pegar el JSON en el canvas, importarlo desde una URL o subir el archivo. Y qué hacer justo después para que funcionen.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien ya tiene n8n abierto y quiere arrancar desde un workflow que funciona, en vez de una hoja en blanco. |
| **Qué vas a lograr** | Tener un workflow de la colección en tu n8n, con sus credenciales conectadas y probado. |
| **Tiempo estimado** | 10 minutos por workflow |
| **Qué necesitás** | Tu cuenta de n8n ([guía 01](01-cuenta-n8n-cloud.md)) y elegir un workflow de la [página](https://nodo-cero-bo.github.io) o del [repo de workflows](https://github.com/nodo-cero-bo/workflows). |

Palabras de esta guía, explicadas con un ejemplo en el [glosario](../glosario.md): [JSON](../glosario.md#json), [nota adhesiva](../glosario.md#nota-adhesiva), [credencial](../glosario.md#credencial), [webhook](../glosario.md#webhook), [URL de producción](../glosario.md#url-de-prueba-y-url-de-producción) y [publicar](../glosario.md#publicar).

## Dónde están los workflows

Todos viven en el repo [nodo-cero-bo/workflows](https://github.com/nodo-cero-bo/workflows), cada uno en su carpeta con tres archivos: `workflow.json` (lo que se importa), `README.md` (qué hace y cómo probarlo) y `meta.json` (lo que lee la página).

| Carpeta | Qué hay |
|---|---|
| [`00-fundamentos`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos) | Lo básico de n8n: datos, expresiones, tu primera API, HTTP Request, formularios y tu primer agente de IA. |
| [`10-avalanche-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji) | Leer la red de prueba Fuji de Avalanche: estado, saldos, transacciones, pagos, tokens y eventos. |
| [`20-clerk`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk) | Login con Clerk: webhooks firmados, una API protegida con la sesión e invitaciones. |
| [`30-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase) | Guardar y consultar datos en Supabase, cargar documentos para que la IA los use y reaccionar a cambios. |
| [`40-proyectos`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos) | Proyectos completos que juntan varias piezas. |

En la [página de Nodo Cero](https://nodo-cero-bo.github.io) está el mismo catálogo con filtros por tecnología y nivel. Cada tarjeta tiene cuatro botones: **Copiar workflow**, **Copiar enlace crudo**, **Ver en GitHub** y **Descargar**.

## Pasos

Elegí la forma que te quede más cómoda. Las tres dejan el mismo resultado.

### Forma 1: copiar y pegar en el canvas (la más rápida)

1. En la página, tocá **Copiar workflow** en la tarjeta que te interesa. Si estás en GitHub, abrí el `workflow.json` de la carpeta y tocá el ícono de copiar que está arriba a la derecha del archivo.
2. En n8n, tocá **+** y elegí **New workflow**.
3. Hacé clic en una parte vacía del canvas y pegá con `Ctrl` + `V` (en Mac, `Cmd` + `V`).
4. Aparecen los nodos y las notas adhesivas. Cambiale el nombre al workflow (arriba) por el del original, por ejemplo `Nodo Cero · Hola n8n`, así lo encontrás después.

### Forma 2: importar desde una URL

1. Conseguí el enlace crudo del `workflow.json`: en la página, **Copiar enlace crudo**. Tiene esta forma:

   ```text
   https://raw.githubusercontent.com/nodo-cero-bo/workflows/main/<carpeta>/<id>/workflow.json
   ```

   Por ejemplo, el del primer workflow:

   ```text
   https://raw.githubusercontent.com/nodo-cero-bo/workflows/main/00-fundamentos/01-hola-n8n/workflow.json
   ```

2. En n8n, creá un workflow nuevo y abrí el menú **···** del encabezado.
3. Elegí **Import** y después **From URL** (en algunas versiones se llama **Import from URL**).
4. Pegá el enlace y confirmá. El workflow aparece en el canvas.

> [!TIP]
> Atajo: si pegás el enlace crudo directamente en el canvas con `Ctrl` + `V`, n8n te pregunta **Import Workflow?** y lo trae al tocar **Yes, import**.

### Forma 3: subir el archivo

1. Descargá el `workflow.json`: en la página, **Descargar**; en GitHub, el ícono de descarga arriba a la derecha del archivo.
2. En n8n, creá un workflow nuevo y abrí el menú **···**.
3. Elegí **Import** y después **From file** (o **Import from File**), y buscá el archivo.

### Después de importar: credenciales, datos y una prueba

1. **Leé la nota grande de la izquierda.** Cada workflow trae una nota adhesiva con «Qué hace», «Qué necesitás» y «Cómo probarlo». Las notas chicas, al lado de los pasos, explican el porqué de cada uno.
2. **Conectá las credenciales.** Los workflows no traen ninguna clave: n8n te las pide. Abrí cada nodo que muestre un aviso y, en el campo de credencial, elegí una que ya tengas o **Create new credential**. La [guía de credenciales](03-credenciales.md) te cuenta cómo crear cada una.
3. **Cambiá los datos de ejemplo** que indique la nota (una dirección de wallet, el nombre de una tabla, una URL).
4. **Probalo** según cómo empieza:

   | Si el workflow empieza con | Para probarlo | Para que funcione por su cuenta |
   |---|---|---|
   | **Trigger manually** | **Execute workflow** (ejecutar el workflow), abajo del canvas | No hace falta publicar. |
   | **On form submission** (formulario) | **Execute workflow** abre el formulario de prueba. | **Publish** y compartís la URL de producción del formulario. |
   | **On webhook call** (webhook) | **Execute workflow** o **Listen for test event**, y llamá a la **Test URL**. | **Publish** y usá la **Production URL**. |
   | **On chat message** (chat) | **Open chat**, abajo del canvas. | **Publish**; con **Make Chat Publicly Available** tenés un chat con URL propia. |
   | **On a schedule** (horario) | **Execute workflow** | **Publish** y corre a la hora definida. |

   **Si el workflow tiene dos disparadores o más** (por ejemplo, un formulario y **Al tocar Execute**, o un horario y **Al tocar Execute**), el botón de abajo dice **Execute workflow from** y el nombre de uno de ellos, por ejemplo **Execute workflow from Formulario de reportes**. La flechita del costado abre un desplegable para elegir desde cuál arrancar: para probar con los datos de ejemplo, elegí el disparador manual (en estos workflows se llama **Al tocar Execute**, **Al hacer clic en Probar**, **Probar sin la página** o **Ejecutar a mano**). Si el botón dice **Execute** a secas, es la versión compacta del mismo botón.

5. **Mirá el resultado** en el **Output** de cada nodo o en la pestaña **Executions**.

<details>
<summary>Cómo llamar a un webhook desde la terminal</summary>

Las URL de prueba tienen `/webhook-test/` y las de producción `/webhook/`. Copiá la tuya del nodo Webhook. Para un pedido GET alcanza con abrirla en el navegador; para mandar datos podés usar `curl`:

```bash
curl -X POST "https://tu-nombre.app.n8n.cloud/webhook-test/mi-ruta" \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Ana", "idea": "Reportes de basurales"}'
```

En Windows usá `curl.exe` (en PowerShell, `curl` a secas es otro comando). Para no pelearte con las comillas, guardá el JSON en un archivo `datos.json` y mandalo así:

```powershell
curl.exe -X POST "https://tu-nombre.app.n8n.cloud/webhook-test/mi-ruta" -H "Content-Type: application/json" --data "@datos.json"
```

</details>

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| Pegás y no aparece nada | Hacé clic en el canvas antes de pegar, y revisá que hayas copiado el JSON entero (empieza con `{` y termina con `}`). |
| **Could not import workflow** o **Problem importing workflow** al usar una URL | El enlace tiene que ser el crudo (`raw.githubusercontent.com/...`), no la página de GitHub (`github.com/.../blob/...`). |
| **Skipped … node(s) with missing type** o nodos con un signo de pregunta | Tu n8n es más viejo que el de los workflows (n8n 2.48.7). En n8n Cloud, actualizá la versión desde la consola de la nube ([Update your version](https://docs.n8n.io/deploy/use-n8n-cloud/update-your-version)). |
| Un nodo marca que falta una credencial | Abrilo y elegí o creá la credencial ([guía 03](03-credenciales.md)). |
| El webhook responde que no está registrado | La **Test URL** funciona mientras n8n está escuchando (después de **Execute workflow**); la **Production URL**, cuando el workflow está publicado. |
| Importaste el mismo workflow dos veces | No pasa nada: abrí el que sobra y, en el menú **···**, elegí **Archive**. Si después querés borrarlo del todo, el mismo menú muestra **Delete**. |

## Para seguir

- Siguiente guía: [Credenciales](03-credenciales.md).
- Si querés llevarte tu versión: menú **···**, **Export JSON**. Antes de compartir el archivo, mirá qué nombres les pusiste a tus credenciales, porque viajan dentro del JSON (las claves no).
- Documentación oficial: [Export and import](https://docs.n8n.io/build/manage-workflows/export-and-import) y [Webhook node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/).

---

[Índice](../README.md) · Anterior: [Tu cuenta de n8n Cloud](01-cuenta-n8n-cloud.md) · Siguiente: [Credenciales](03-credenciales.md)
