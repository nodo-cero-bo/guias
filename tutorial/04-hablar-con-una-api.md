# Parte 4: Hablar con una API

Con el nodo HTTP Request, n8n le pide datos a cualquier servicio de internet. Importá `03-http-request`, que le pregunta el clima de Santa Cruz a una API pública y el último bloque a la red Fuji, sin claves ni cuentas.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien ya entiende items y expresiones ([parte 3](03-items-y-expresiones.md)) y quiere traer datos de afuera. |
| **Qué vas a lograr** | Dos pedidos reales funcionando, saber leer sus partes y cambiar la ciudad del clima. |
| **Tiempo estimado** | 20 minutos |
| **Qué necesitás** | Tu n8n abierto. Las dos APIs son públicas y no piden clave. |

## Primero, dos ideas

- Una [**API**](../glosario.md#api) es la puerta por la que un programa le pide datos a otro, con reglas fijas.
- Un [**pedido HTTP**](../glosario.md#pedido-http) tiene un [método](../glosario.md#método) (`GET` para leer, `POST` para mandar datos), una URL y, a veces, [headers y un body](../glosario.md#header-y-body). La respuesta trae un [código](../glosario.md#código-de-respuesta) (200 si salió bien) y los datos, casi siempre en JSON.

## Pasos

### 1. Importá el workflow

1. Creá un workflow nuevo: **+**, **New workflow**.
2. Copiá este enlace, hacé clic en el canvas, pegá con `Ctrl` + `V` y confirmá con **Yes, import**:

   ```text
   https://raw.githubusercontent.com/nodo-cero-bo/workflows/main/00-fundamentos/03-http-request/workflow.json
   ```

3. Ponele de nombre `HTTP Request`.

**Qué vas a ver:** cuatro nodos en fila: **Al tocar Execute**, **Clima en Santa Cruz**, **Último bloque de Fuji** y **Leer las respuestas**, con sus notas.

### 2. Ejecutalo

1. Tocá **Execute workflow**.

**Qué vas a ver:** los nodos se ponen en verde. Los dos del medio tardan un poco más: están esperando la respuesta de internet.

**Cómo sabés que funcionó:** los cuatro quedan en verde.

### 3. Mirá el pedido del clima

1. Abrí **Clima en Santa Cruz**.

**Qué vas a ver:** en el medio, **Method** en `GET` y la **URL** `https://api.open-meteo.com/v1/forecast`. Más abajo, **Send Query Parameters** activado, con `latitude` (`-17.78`), `longitude` (`-63.18`), `current` (qué datos de ahora querés) y `timezone` (`America/La_Paz`). n8n suma esos parámetros a la URL por vos.

2. En el **Output**, elegí la vista **JSON**.

**Cómo sabés que funcionó:** ves la respuesta de Open-Meteo y, adentro de `current`, la `temperature_2m` de ahora en Santa Cruz.

### 4. Mirá el pedido a Fuji

1. Abrí **Último bloque de Fuji**.

**Qué vas a ver:** **Method** en `POST`, la URL del [RPC](../glosario.md#rpc-y-json-rpc) público de Fuji (`https://api.avax-test.network/ext/bc/C/rpc`), un header `Content-Type: application/json` y un body en JSON con `"method": "eth_blockNumber"`. Así se le pregunta algo a una blockchain: siempre un `POST` a la misma URL, y en el cuerpo, qué querés saber.

**Cómo sabés que funcionó:** el **Output** dice algo como `{"jsonrpc": "2.0", "id": 1, "result": "0x3a91273"}`. Ese `result` es el número del último bloque, en [hexadecimal](../glosario.md#hexadecimal).

### 5. Mirá cómo se juntan las respuestas

1. Abrí **Leer las respuestas**.

**Qué vas a ver:** cada campo es una expresión. Dos cosas nuevas:

- `$('Clima en Santa Cruz').item.json.current.temperature_2m` lee un dato de otro nodo, que no es el anterior, usando su nombre.
- `parseInt($json.result, 16)` pasa el hexadecimal de Fuji a un número decimal.

**Cómo sabés que funcionó:** en el **Output**, el campo `resumen` dice algo como «En Santa Cruz hay 27,3 °C y Fuji va por el bloque 61.411.955.», con los números de ahora.

### 6. Cambiá la ciudad

1. Abrí **Clima en Santa Cruz**.
2. Cambiá `latitude` por `-16.50` y `longitude` por `-68.15`: es La Paz.
3. Tocá **Execute step** y después cerrá la ventana y tocá **Execute workflow** para correr todo.

**Cómo sabés que funcionó:** la temperatura cambia (casi seguro, más fresca). El `resumen` todavía dice «Santa Cruz» porque es texto fijo: cambialo vos en **Leer las respuestas** si querés.

### 7. Mirá cómo avanza Fuji

1. Esperá un minuto y tocá **Execute workflow** otra vez.

**Cómo sabés que funcionó:** el número de bloque subió. Fuji suma bloques cada pocos segundos, todo el día.

> [!NOTE]
> El RPC público de Fuji es gratis y lo comparte todo el mundo, así que tiene límites de uso. Probá con calma: si un pedido falla, esperá unos segundos y volvé a ejecutar. Más en [las preguntas frecuentes](../preguntas-frecuentes.md#el-rpc-público-de-fuji-tiene-límites).

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| **Último bloque de Fuji** da error `415` | Falta el header `Content-Type: application/json`. Importá el workflow de nuevo o revisá **Send Headers**. |
| Un nodo tarda y termina con un error de tiempo | La red del lugar está lenta o el servicio no contestó. Esperá unos segundos y ejecutá de nuevo. |
| Error `429` | Demasiados pedidos seguidos. Esperá un minuto. En **Settings** del nodo, **Retry On Fail** reintenta por su cuenta. |
| El clima responde con un error después de tu cambio | Revisá que la latitud y la longitud tengan punto decimal (no coma) y el signo menos adelante. |
| `bloque_fuji` sale vacío | El nodo de Fuji no respondió con `result`. Abrilo y leé su **Output**: si trae `error`, ahí dice por qué. |

## Para seguir

- Siguiente: [Parte 5: El desafío del día](05-el-desafio-del-dia.md), con varios pedidos a Fuji encadenados.
- Más ejercicios, como importar un comando `curl` con **Import cURL**: el README de [`03-http-request`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/03-http-request).
- Documentación oficial: [nodo HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest) y la [API de Open-Meteo](https://open-meteo.com/en/docs).

---

[Tutorial](README.md) · Anterior: [Parte 3](03-items-y-expresiones.md) · Siguiente: [Parte 5: El desafío del día](05-el-desafio-del-dia.md)
