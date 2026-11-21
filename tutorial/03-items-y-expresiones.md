# Parte 3: Items y expresiones

Las dos ideas que más vas a usar en n8n, aprendidas tocando el workflow de la parte 2: qué es un item y cómo una expresión toma un dato del paso anterior. Con un error a propósito, para perderle el miedo.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien ya ejecutó `01-hola-n8n` ([parte 2](02-tu-primer-workflow.md)) y quiere entender qué pasó adentro. |
| **Qué vas a lograr** | Leer los items que entran y salen de un nodo, escribir tu primera expresión y cambiar un dato para ver cómo cambia el camino. |
| **Tiempo estimado** | 20 minutos |
| **Qué necesitás** | El workflow `Hola n8n` de la parte 2, abierto en tu n8n. |

## Primero, dos ideas

- Un [**item**](../glosario.md#item) es un paquete de datos, como una fila de una planilla. Los nodos reciben items, hacen su trabajo una vez por cada uno y pasan los items al siguiente.
- Una [**expresión**](../glosario.md#expresión) es un pedacito de código entre llaves dobles, `{{ }}`, que n8n calcula en el momento. `{{ $json.equipo }}` quiere decir «el campo `equipo` del item que está entrando».

## Pasos

### 1. Mirá un item

1. Si no lo hiciste, tocá **Execute workflow** para que los nodos tengan datos.
2. Hacé doble clic en **Datos de ejemplo**.

**Qué vas a ver:** en el medio, cuatro campos: `evento`, `fecha`, `cupo_por_equipo` y `equipos`. A la derecha, en **Output**, **1 item** con esos cuatro datos. El campo `equipos` es una lista con tres equipos adentro.

**Cómo sabés que funcionó:** en **Output** dice 1 item. Cerrá la ventana.

### 2. Mirá cómo 1 item se vuelve 3

1. Hacé doble clic en **Separar y calcular**.
2. Compará los dos costados: **Input** a la izquierda, **Output** a la derecha.

**Qué vas a ver:** a la izquierda entra 1 item (el de **Datos de ejemplo**); a la derecha salen 3, uno por equipo, cada uno con `equipo`, `integrantes` y `lugares_libres`. En el medio está el código JavaScript que lo hace, con comentarios que explican cada línea. No hace falta entenderlo todo: alcanza con ver qué entra y qué sale.

**Cómo sabés que funcionó:** el **Output** dice 3 items. Por eso el nodo siguiente, **¿Equipo completo?**, trabaja tres veces: una por equipo.

### 3. Leé una expresión que ya existe

1. Volvé a abrir **Datos de ejemplo** y hacé clic en el valor del campo `fecha`.

**Qué vas a ver:** el valor es `{{ $now.setZone('America/La_Paz').toFormat('dd/MM/yyyy') }}`, de otro color que un texto fijo. Debajo aparece **Result**: la fecha de hoy, ya calculada.

Leela de a pedazos: `$now` es «ahora», `.setZone('America/La_Paz')` lo pasa a la hora de Bolivia y `.toFormat('dd/MM/yyyy')` lo escribe como día, mes y año.

**Cómo sabés que funcionó:** el **Result** muestra la fecha de hoy. Cerrá la ventana.

### 4. Escribí tu primera expresión

1. Hacé doble clic en **Mensaje: equipo completo**.
2. Tocá **Add Field**. En el nombre del campo nuevo, escribí `saludo`.
3. Del lado izquierdo, en **Input**, buscá el campo `equipo` y **arrastralo** hasta el valor del campo `saludo`.

**Qué vas a ver:** n8n escribe por vos la expresión `{{ $json.equipo }}` y, debajo, el **Result**: «Equipo Tajibo».

4. Hacé clic en el valor y escribí `Hola, ` antes de la expresión, para que quede así:

   ```text
   Hola, {{ $json.equipo }}. Te damos la bienvenida a Nodo Cero.
   ```

5. Tocá **Execute step**, arriba de la ventana del nodo.

**Cómo sabés que funcionó:** en **Output**, el item tiene un campo nuevo, `saludo`, con «Hola, Equipo Tajibo. Te damos la bienvenida a Nodo Cero.».

> [!TIP]
> Arrastrar un campo del **Input** es la forma más fácil de escribir una expresión: n8n arma el camino por vos. Si preferís escribirla, empezá con `{{` y n8n pasa el campo a modo expresión (también se puede elegir **Expression** en vez de **Fixed**, arriba a la derecha de cada campo).

### 5. Equivocate a propósito

1. En el mismo campo `saludo`, cambiá `$json.equipo` por `$json.equipa` (con «a» al final).

**Qué vas a ver:** el **Result** pierde el nombre del equipo: `equipa` no existe en el item, así que n8n no tiene qué poner.

2. Volvé a escribir `equipo`.

**Cómo sabés que funcionó:** el **Result** vuelve a mostrar «Equipo Tajibo». Eso es todo lo que pasa cuando una expresión se equivoca: no se rompe nada, el dato queda vacío. Cuando algo «no aparece», revisá cómo se llama el campo en el **Input**.

### 6. Cambiá un dato y mirá cómo cambia el camino

1. Abrí **Datos de ejemplo** y buscá, en la lista `equipos`, el «Equipo Motacú», que tiene `"integrantes": 3`.
2. Cambiá el `3` por un `4`. Cuidá las comas y las comillas: tocá nada más el número.
3. Cerrá la ventana y tocá **Execute workflow**.

**Qué vas a ver:** ahora salen 2 items por **true** y 1 por **false**. Motacú pasó al camino de los equipos completos.

**Cómo sabés que funcionó:** abrí **Mensaje: equipo completo** y encontrás dos mensajes, el de Tajibo y el de Motacú.

Ese es el corazón de n8n: los datos entran, cada nodo hace su parte con cada item y las decisiones mandan cada item por su camino.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| El **Input** de un nodo está vacío | Todavía no ejecutaste el workflow, o lo cambiaste después. Tocá **Execute workflow** de nuevo. |
| No podés arrastrar el campo | Revisá que el **Input** esté en la vista **Schema** o **Table**, y soltá el campo justo encima del valor. |
| La expresión aparece como texto, sin calcularse | Le falta el modo expresión: escribila con `{{` y `}}`, o elegí **Expression** en el campo. |
| **Datos de ejemplo** da un error después del cambio | Se borró una coma, una llave o una comilla de la lista. Deshacé con `Ctrl` + `Z` o importá el workflow de nuevo. |
| El **Result** dice algo sobre `undefined` o queda vacío | El campo no se llama así en el **Input**. Copiá el nombre exacto, con mayúsculas y guiones bajos. |

## Para seguir

- Siguiente: [Parte 4: Hablar con una API](04-hablar-con-una-api.md).
- Documentación oficial: [estructura de datos de n8n](https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure) y [expresiones](https://docs.n8n.io/build/work-with-data/transform-data/expressions-for-data-transformation).

---

[Tutorial](README.md) · Anterior: [Parte 2](02-tu-primer-workflow.md) · Siguiente: [Parte 4: Hablar con una API](04-hablar-con-una-api.md)
