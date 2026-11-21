# Parte 5: El desafío del día

Dado el hash de una transacción de Avalanche Fuji, n8n te dice quién la envió, a quién, cuánto, cuánto costó, si salió bien y en qué bloque quedó. Es el workflow `12-fuji-leer-transaccion`, el desafío del día.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien ya hizo un pedido a Fuji en la [parte 4](04-hablar-con-una-api.md). No hace falta saber de blockchain: el workflow trae una transacción de ejemplo. |
| **Qué vas a lograr** | Leer una transacción real de Fuji desde n8n, entender cada dato y, si tenés Core Wallet, leer una tuya. |
| **Tiempo estimado** | 20 minutos; 20 más si creás tu wallet para leer tu propia transacción. |
| **Qué necesitás** | Tu n8n abierto. Para una transacción tuya, Core Wallet en Fuji con AVAX de prueba ([guía 06](../00-empezar/06-core-wallet-y-fuji.md)). |

## Primero, cuatro ideas

- [**Fuji**](../glosario.md#avalanche-c-chain-y-fuji) es la red de prueba de Avalanche: funciona igual que la de verdad, pero sus AVAX no valen plata. Es una [testnet](../glosario.md#testnet).
- Una [**transacción**](../glosario.md#transacción) es una operación que queda escrita en la red para siempre, por ejemplo mandar AVAX a alguien.
- Su [**hash**](../glosario.md#hash) es su huella: un código único que empieza con `0x` y tiene 64 caracteres más.
- El [**gas**](../glosario.md#gas) es lo que cuesta procesarla. Los montos vienen en [wei](../glosario.md#avax-y-wei): 1 AVAX son 10^18 wei.

## Pasos

### 1. Importá el workflow

1. Creá un workflow nuevo, hacé clic en el canvas, pegá este enlace con `Ctrl` + `V` y confirmá con **Yes, import**:

   ```text
   https://raw.githubusercontent.com/nodo-cero-bo/workflows/main/10-avalanche-fuji/12-fuji-leer-transaccion/workflow.json
   ```

2. Ponele de nombre `Leer una transacción en Fuji`.

**Qué vas a ver:** seis nodos en fila: **Al hacer clic en Probar**, **Tu hash**, **Leer la transacción**, **Leer el recibo**, **Leer el último bloque** y **Armar el resumen**. Arriba de **Tu hash** hay una nota que dice «Pegá tu hash acá».

### 2. Ejecutalo con el hash de ejemplo

1. Tocá **Execute workflow**.

**Qué vas a ver:** los seis nodos en verde. Los tres del medio son pedidos [JSON-RPC](../glosario.md#rpc-y-json-rpc) a Fuji, como el de la parte 4: uno trae la transacción (lo que se pidió), otro el recibo (lo que pasó) y otro el último bloque (para contar confirmaciones).

**Cómo sabés que funcionó:** los seis quedan en verde.

### 3. Leé el resumen

1. Abrí **Armar el resumen** y mirá el **Output** en la vista **JSON**.

**Qué vas a ver:** algo así (las confirmaciones van a ser más, porque la red siguió avanzando):

```json
{
  "encontrada": true,
  "estado": "exitosa",
  "tipo": "transferencia de AVAX",
  "de": "0xd2717e58381adbce9a5422dcd3003f490253da40",
  "para": "0x74e3ce84499e0fe6c951878e48f610d61d24a520",
  "montoAVAX": "0.5",
  "gasUsado": 21000,
  "costoAVAX": "0.00000000000336",
  "bloque": 61411475,
  "confirmaciones": 798,
  "explorador": "https://build.avax.network/explorer/fuji/c-chain/tx/0xe3f00c7d004c3219b867f2349e528be962712ea328b9e7007b233b58af655150"
}
```

| Campo | Qué quiere decir |
|---|---|
| `estado` | `exitosa` si salió bien, `fallida` si no movió el monto, `pendiente` si todavía no entró en un bloque. |
| `de` y `para` | Las [direcciones](../glosario.md#dirección) de quien mandó y de quien recibió. |
| `montoAVAX` | Cuánto se mandó, ya pasado de wei a AVAX. |
| `gasUsado` y `costoAVAX` | El trabajo que hizo la red y lo que costó: casi nada. |
| `bloque` y `confirmaciones` | En qué [bloque](../glosario.md#bloque-y-confirmaciones) quedó y cuántos bloques pasaron desde entonces. |
| `explorador` | El enlace para verla en el [explorador](../glosario.md#explorador) de Fuji. |

**Cómo sabés que funcionó:** `encontrada` es `true` y `estado` es `exitosa`.

### 4. Comparalo con el explorador

1. Copiá el enlace de `explorador` y abrilo en otra pestaña.

**Qué vas a ver:** la misma transacción en la página del explorador de Fuji: mismo origen, mismo destino, mismo monto.

**Cómo sabés que funcionó:** los datos coinciden. n8n leyó lo mismo que muestra el explorador, pero ahora lo podés usar en un workflow: guardarlo, verificarlo, avisarlo.

### 5. Leé una transacción tuya (opcional)

Si todavía no tenés una, seguí la [guía 06](../00-empezar/06-core-wallet-y-fuji.md): instalás Core, activás **Testnet Mode**, pedís AVAX de prueba en el [faucet](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026), mandás `0.01` AVAX a alguien de tu equipo y copiás el hash desde la actividad de Core.

1. Abrí **Tu hash** y reemplazá el valor del campo `hash` por el tuyo. Pegalo completo, sin espacios.
2. Cerrá la ventana y tocá **Execute workflow**.

**Cómo sabés que funcionó:** en **Armar el resumen**, `de` es tu dirección y `montoAVAX` es lo que mandaste.

> [!WARNING]
> El hash y tu dirección son públicos: se pueden compartir. Tu **frase de recuperación** no: nunca la pegues en n8n ni en ningún lado. Ningún workflow de Nodo Cero la pide.

### 6. Probá los casos raros

Probar qué pasa cuando algo sale mal también es aprender. Poné cada uno en **Tu hash** y ejecutá:

| Probá con | Qué tenés que ver |
|---|---|
| `0x` seguido de 64 unos (`0x1111...`) | `encontrada: false` y un mensaje que dice que no existe en Fuji. |
| Un hash cortado, por ejemplo los primeros 20 caracteres | `encontrada: false` y el error del RPC explicado. |
| `0x2b2da849d8c9184fa7e207ba8e4c91509491383b1cb69cabacd772ade0edc178` | `tipo: "llamada a un contrato"`, monto 0 y un evento. |

**Cómo sabés que funcionó:** ningún caso deja el workflow en rojo: el resumen te explica qué pasó. Un buen workflow avisa con claridad en vez de romperse.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| `encontrada: false` con tu hash | Revisá que esté completo (66 caracteres con el `0x`) y que sea de Fuji, no de la red principal: en Core, **Testnet Mode** tiene que estar activado. |
| `estado: "pendiente"` | La transacción todavía no entró en un bloque. Esperá unos segundos y ejecutá de nuevo. |
| Un pedido a Fuji da error o tarda mucho | El RPC público es compartido y tiene límites de uso. Esperá unos segundos y probá otra vez. |
| `confirmaciones` es un número raro, como 1 | El RPC a veces responde un «último bloque» atrasado. Ejecutá de nuevo. |
| No tenés AVAX de prueba | El faucet pide iniciar sesión en Builder Hub y tener Core conectado. Mientras tanto, usá el hash de ejemplo: el desafío funciona igual. |

## Para seguir

- Siguiente: [Parte 6: Tu agente con Gemini](06-tu-agente-con-gemini.md).
- Si te gustó Fuji: la línea [Web3 con Avalanche Fuji](../lineas/web3.md) y el proyecto [Pagos verificables en Fuji](../proyectos/03-pagos-verificables-en-fuji.md).
- El README del workflow: [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion).
- Para aprender más de blockchain, gratis y desde cero: [Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).

---

[Tutorial](README.md) · Anterior: [Parte 4](04-hablar-con-una-api.md) · Siguiente: [Parte 6: Tu agente con Gemini](06-tu-agente-con-gemini.md)
