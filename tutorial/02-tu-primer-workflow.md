# Parte 2: Tu primer workflow

Traé a tu n8n el workflow `01-hola-n8n`, ejecutalo con un botón y mirá qué hizo cada paso. Sin claves ni cuentas extra: funciona apenas lo importás.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien ya tiene su n8n abierto ([parte 1](01-tu-cuenta-de-n8n.md)) y nunca importó un workflow. |
| **Qué vas a lograr** | El workflow `01-hola-n8n` en tu n8n, ejecutado, con todos sus nodos en verde. |
| **Tiempo estimado** | 15 minutos |
| **Qué necesitás** | Tu n8n abierto con un workflow vacío. |

Importar es traer un workflow ya armado, en vez de empezar de una hoja en blanco. Un workflow, por dentro, es un texto en formato [JSON](../glosario.md#json): por eso se puede copiar y pegar.

## Pasos

### 1. Copiá el enlace del workflow

Copiá este enlace (seleccionalo y `Ctrl` + `C`; en Mac, `Cmd` + `C`):

```text
https://raw.githubusercontent.com/nodo-cero-bo/workflows/main/00-fundamentos/01-hola-n8n/workflow.json
```

Es el enlace «crudo» del archivo: el texto puro, sin la página de GitHub alrededor.

### 2. Pegalo en el canvas

1. Volvé a tu n8n, al workflow vacío de la parte 1 (o creá uno con **+**, **New workflow**).
2. Hacé clic en una parte vacía del canvas.
3. Pegá con `Ctrl` + `V` (en Mac, `Cmd` + `V`).
4. n8n pregunta **Import Workflow?**: tocá **Yes, import**.

**Qué vas a ver:** aparecen seis nodos conectados de izquierda a derecha (**Al tocar Execute**, **Datos de ejemplo**, **Separar y calcular**, **¿Equipo completo?**, **Mensaje: equipo completo** y **Mensaje: buscan integrantes**) y varios recuadros de colores con texto: son [notas adhesivas](../glosario.md#nota-adhesiva) que explican cada paso.

**Cómo sabés que funcionó:** ves los nodos en el canvas. Si no los ves enteros, usá la rueda del mouse para alejar, o el botón de ajustar a la pantalla de la esquina de abajo.

<details>
<summary>Otras dos formas de importar, por si esta no te sale</summary>

- **Desde el menú:** en el encabezado del workflow, menú **···**, **Import**, **From URL**. Pegá el mismo enlace y confirmá.
- **Desde la página del evento:** en el catálogo de [nodo-cero-bo.github.io](https://nodo-cero-bo.github.io), tocá **Copiar workflow** en la tarjeta de «Hola n8n» y pegá en el canvas con `Ctrl` + `V`.

Todas dejan el mismo resultado. Más detalle en [Importar los workflows](../00-empezar/02-importar-workflows.md).

</details>

### 3. Ponele nombre

1. Hacé clic en el nombre de arriba.
2. Escribí `Hola n8n` y tocá `Enter`.

**Cómo sabés que funcionó:** el nombre nuevo aparece arriba. Así lo encontrás después en **Personal**.

### 4. Leé la nota grande

La nota de la izquierda dice «Qué hace», «Qué necesitás» y «Cómo probarlo». Todos los workflows de Nodo Cero traen una así: leerla primero te ahorra muchas dudas.

### 5. Ejecutalo

1. Tocá **Execute workflow**, el botón de abajo del canvas.

> [!TIP]
> Este workflow tiene un único disparador, **Al tocar Execute**. Más adelante vas a ver workflows con dos (por ejemplo, un formulario y **Al tocar Execute**): ahí el botón dice **Execute workflow from** y el nombre de uno de ellos, y la flechita del costado abre un desplegable para elegir desde cuál arrancar. Para probar con los datos de ejemplo, elegí **Al tocar Execute**.

**Qué vas a ver:** los nodos se ponen en verde, uno detrás de otro, en un segundo. Sobre cada conexión aparece un número: cuántos datos pasaron por ahí. Ese número cuenta [items](../glosario.md#item).

**Cómo sabés que funcionó:** los seis nodos están en verde. Sobre la conexión que sale de **Separar y calcular** dice 3 items, y de **¿Equipo completo?** salen 1 por **true** y 2 por **false**.

Acabás de correr tu primera [ejecución](../glosario.md#ejecución).

### 6. Mirá qué salió

1. Hacé doble clic en **Mensaje: buscan integrantes**.
2. Mirá el lado derecho, **Output**: lo que salió de ese nodo.

**Qué vas a ver:** una ventana con tres zonas: **Input** a la izquierda (lo que entró), los parámetros del nodo en el medio y **Output** a la derecha (lo que salió). En **Output** hay dos items, uno por equipo, con un campo `mensaje` como «Equipo Motacú tiene 1 lugar libre. ¿Te sumás?».

**Cómo sabés que funcionó:** leés los dos mensajes, el de Motacú y el de Guapurú.

3. Arriba del **Output**, cambiá entre **Schema**, **Table** y **JSON**. Son los mismos datos, mostrados de tres formas: usá la que te resulte más clara.
4. Cerrá la ventana del nodo (la cruz de arriba, o un clic fuera de la ventana).

### 7. Mirá la ejecución guardada

1. Arriba del canvas, pasá a la pestaña **Executions**.
2. Elegí la ejecución de recién (la primera de la lista).

**Qué vas a ver:** el mismo workflow, con los datos de esa corrida. Podés abrir cada nodo y ver qué entró y qué salió, aunque ya haya pasado un rato.

**Cómo sabés que funcionó:** la ejecución aparece en la lista con su hora. Volvé a **Editor** para seguir.

Esto es lo que vas a usar siempre que algo no salga como esperabas: la ejecución te muestra en qué nodo cambió la historia.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| Pegás y no aparece nada | Hacé clic en el canvas antes de pegar y revisá que copiaste el enlace entero, desde `https` hasta `workflow.json`. |
| **Could not import workflow** o **Problem importing workflow** | El enlace tiene que ser el crudo (`raw.githubusercontent.com/...`), no la página de GitHub. Copiá el del paso 1 de nuevo. |
| Nodos con un signo de pregunta o **Skipped ... node(s) with missing type** | Tu n8n es más viejo que el de los workflows. En n8n Cloud, actualizalo desde la consola de la nube ([cómo](https://docs.n8n.io/deploy/use-n8n-cloud/update-your-version)). |
| No encontrás el botón **Execute workflow** | Está abajo del canvas, al centro. Si no lo ves, cerrá la ventana del nodo que tengas abierta. |
| Un nodo queda en rojo | Abrilo: arriba del **Output** está el mensaje de error. En este workflow no debería pasar: importalo de nuevo en un workflow vacío. |
| Importaste el workflow dos veces | No pasa nada. Menú **···** del que sobra, **Archive**. |

## Para seguir

- Siguiente: [Parte 3: Items y expresiones](03-items-y-expresiones.md), con este mismo workflow.
- El README del workflow, con más ejercicios: [`01-hola-n8n`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/01-hola-n8n).

---

[Tutorial](README.md) · Anterior: [Parte 1](01-tu-cuenta-de-n8n.md) · Siguiente: [Parte 3: Items y expresiones](03-items-y-expresiones.md)
