# Core Wallet y Avalanche Fuji

Descargá Core Wallet, creá una wallet de prueba, pasala a la red Fuji, pedí AVAX de prueba en el faucet y mirá tu primera transacción en el explorador. Todo en la red de prueba: no se usa plata real.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien quiere sumar Web3 a su proyecto (pagos verificables, registros públicos, tokens), aunque nunca haya usado una wallet. |
| **Qué vas a lograr** | Una wallet en Fuji con AVAX de prueba, una transacción tuya y su hash, listo para usar en los workflows de Avalanche. |
| **Tiempo estimado** | 20 minutos |
| **Qué necesitás** | Chrome (o un navegador basado en Chromium) o tu celular, y papel y lápiz para anotar la frase de recuperación. |

Palabras de esta guía, explicadas con un ejemplo en el [glosario](../glosario.md): [wallet](../glosario.md#wallet), [testnet](../glosario.md#testnet), [frase de recuperación](../glosario.md#frase-de-recuperación), [faucet](../glosario.md#faucet), [dirección](../glosario.md#dirección), [hash](../glosario.md#hash), [gas](../glosario.md#gas), [explorador](../glosario.md#explorador), [JSON-RPC](../glosario.md#rpc-y-json-rpc) y [wei](../glosario.md#avax-y-wei).

## Qué es Fuji

Avalanche tiene una red principal, donde los tokens valen plata, y **Fuji**, su red de prueba: funciona igual, pero sus AVAX no tienen valor y se piden gratis. Es el lugar ideal para aprender, probar y mostrar un proyecto. Los workflows de Nodo Cero leen la **C-Chain** de Fuji, la cadena compatible con Ethereum.

| Dato | Valor |
|---|---|
| Red | Avalanche Fuji C-Chain |
| Chain ID | `43113` (en hexadecimal, `0xa869`) |
| RPC público | `https://api.avax-test.network/ext/bc/C/rpc` |
| Moneda | AVAX de prueba (18 decimales: 1 AVAX = 10^18 wei) |
| Explorador | [build.avax.network/explorer/fuji/c-chain](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) |
| Faucet | [Builder Hub, Testnet Faucet](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) |

## Pasos

### 1. Descargá Core Wallet

1. Entrá a **[Descargá Core Wallet](https://core.app/download?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**. Está como extensión para Chrome y como app para iPhone y Android.
2. Para la hackathon te recomendamos la extensión del navegador: es la que se conecta con el faucet, con Remix y con tu página.
3. Cuando se instale, fijala en la barra del navegador (el ícono del rompecabezas, y el pin al lado de Core) para tenerla a mano.

> [!TIP]
> Si ya tenés MetaMask instalada, puede pelearse con Core por la misma página. Desactivala un rato desde la página de extensiones del navegador mientras probás.

### 2. Creá tu wallet y guardá la frase de recuperación

1. Abrí Core y elegí crear una wallet nueva.
2. Core te muestra una **frase de recuperación**: una lista de palabras en orden. Escribila en papel, palabra por palabra, en el mismo orden.
3. Confirmá las palabras que te pida y elegí una contraseña para abrir Core en esta compu.

> [!WARNING]
> **La frase de recuperación es la wallet.** Quien la tiene, controla todo lo que hay adentro. Nadie de la organización, ninguna persona de mentoría y ningún soporte te la va a pedir, nunca. No la pegues en n8n, en un chat, en una foto ni en un documento en la nube. Para la hackathon, usá una wallet nueva, separada de cualquiera que uses con plata real.

### 3. Activá el modo testnet y pasá a Fuji

1. En la extensión de Core, abrí **Settings** con el ícono del engranaje, arriba a la derecha.
2. Activá el interruptor **Testnet Mode**. Core pasa a Fuji por su cuenta. En la app del celular, el interruptor tiene el mismo nombre ([cómo encontrarlo](https://support.core.app/en/articles/11469939-core-mobile-how-do-i-toggle-testnet-mode-on-and-off)).
3. Copiá tu dirección de la **C-Chain**: empieza con `0x`. Es la que vas a usar en el faucet, en los workflows y para recibir pagos de prueba.

Core también muestra direcciones de otras cadenas de Avalanche (las que empiezan con `fuji` o `avax`): para este track, usá la que empieza con `0x`.

### 4. Pedí AVAX de prueba en el faucet

1. Abrí el **[faucet de Fuji](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**, en la consola de Avalanche Builder Hub.
2. El faucet pide dos cosas: haber iniciado sesión en Builder Hub y tener tu wallet conectada. Si no tenés cuenta, [creala acá](https://build.avax.network/login?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) con tu correo: te llega un código para entrar.
3. Conectá Core Wallet cuando te lo pida.
4. Pedí AVAX en la **C-Chain**.
5. Volvé a Core: en unos segundos tenés que ver tu saldo de prueba.

El faucet entrega una cantidad chica por vez y después hay que esperar para volver a pedir. Para la hackathon alcanza: cada transacción de prueba gasta muy poco.

### 5. Hacé una transacción y mirala en el explorador

1. En Core, tocá **Send** y mandá una cantidad chica (por ejemplo `0.01` AVAX) a la dirección `0x` de alguien de tu equipo. Confirmá.
2. En la actividad de Core, abrí la transacción y copiá su **hash**: empieza con `0x` y tiene 64 caracteres más.
3. Abrí el explorador de Fuji con tu hash al final:

   ```text
   https://build.avax.network/explorer/fuji/c-chain/tx/<tu-hash>
   ```

   Vas a ver quién la mandó, a quién, cuánto, el gas que costó, el bloque y si salió bien.

4. Guardá ese hash: es el dato de entrada del desafío del día, el workflow [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion), y del verificador de pagos, [`13-fuji-verificar-pago`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago).

### 6. Leé Fuji desde n8n

Fuji se lee con pedidos JSON-RPC al RPC público, sin claves. Probá este pedido desde la terminal (o mirá cómo lo hace el workflow [`10-fuji-estado-de-la-red`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/10-fuji-estado-de-la-red)):

```bash
curl -s https://api.avax-test.network/ext/bc/C/rpc \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_chainId","params":[]}'
```

La respuesta trae `"result":"0xa869"`, que en decimal es `43113`: estás en Fuji. Las respuestas vienen en hexadecimal y los montos en wei; los workflows te muestran cómo pasarlos a números y a AVAX.

Después seguí con [`11-fuji-saldo-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet) (con tu dirección) y con el 12 (con tu hash).

## Llevalo más lejos

- **[Aprendé en Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**: cursos gratis, de [Blockchain Fundamentals](https://build.avax.network/academy/blockchain/blockchain-fundamentals?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) (sin código) a [Avalanche Fundamentals](https://build.avax.network/academy/avalanche-l1/avalanche-fundamentals?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).
- **[Sumate a Team1 LATAM](https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026#waitlist)**: Team1 es el programa de comunidad de Avalanche y apoya el track de Fuji de Nodo Cero.
- Todo lo de Avalanche junto, en [Recursos de Avalanche](../avalanche/recursos.md).

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| El faucet no te deja pedir | Revisá que hayas iniciado sesión en Builder Hub, que Core esté conectado y en **Testnet Mode**, y que uses la dirección `0x`. Si el faucet se quedó sin saldo, avisá a mentoría y probá un rato después. |
| No ves tu saldo | Core está en la red principal: activá **Testnet Mode**. |
| El explorador no encuentra la transacción | Esperá unos segundos, revisá que el hash esté completo (66 caracteres con el `0x`) y que estés en el explorador de Fuji, no en el de la red principal. |
| Core no aparece al conectar | Fijate que la extensión esté activa y que no haya otra wallet respondiendo primero (ver el consejo de MetaMask). |
| Perdiste la frase de recuperación | En una wallet de prueba no es grave: creá una nueva y pedí AVAX de prueba otra vez. Por eso nunca se usa la misma wallet para plata real. |

## Para seguir

- Siguiente guía: [Tu clave de Gemini](07-clave-gemini.md).
- La lección oficial [Set Up Core Wallet](https://build.avax.network/academy/avalanche-l1/avalanche-fundamentals/03-multi-chain-architecture-intro/06-setup-core?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) de Avalanche Academy.
- La referencia de la [API JSON-RPC de la C-Chain](https://build.avax.network/docs/rpcs/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).
- Guías de proyecto con Fuji: [Pagos verificables](../proyectos/03-pagos-verificables-en-fuji.md), [Agente Web3](../proyectos/04-agente-web3-que-lee-fuji.md) y [Tu contrato en Fuji](../proyectos/06-tu-contrato-en-fuji.md).

---

[Índice](../README.md) · Anterior: [Tu aplicación en Clerk](05-cuenta-clerk.md) · Siguiente: [Tu clave de Gemini](07-clave-gemini.md)
