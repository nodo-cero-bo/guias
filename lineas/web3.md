# Línea: Web3 con Avalanche Fuji

Leer la red Fuji de Avalanche, verificar pagos, desplegar un contrato propio, escuchar sus eventos y armar agentes que entienden Fuji. Todo en la red de prueba, sin plata real, con el apoyo de Team1.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos con curiosidad por blockchain, aunque nunca hayan usado una wallet. Los primeros workflows no piden ninguna clave. |
| **Qué vas a lograr** | Una wallet en Fuji, tu primera transacción leída por n8n y un proyecto que usa la red: un verificador de pagos, un agente o tu propio contrato. |
| **Tiempo estimado** | La jornada entera: 1 hora para el nivel inicial, 2 a 3 horas para el intermedio y lo que quede para lucirte. |
| **Qué necesitás** | Tu n8n ([guía 01](../00-empezar/01-cuenta-n8n-cloud.md)) y Core Wallet en Fuji con AVAX de prueba ([guía 06](../00-empezar/06-core-wallet-y-fuji.md)). Para guardar pagos, Supabase; para el agente, Gemini. |

## Qué es

Una [blockchain](../glosario.md#blockchain) es un registro público que nadie puede borrar ni cambiar. [Fuji](../glosario.md#avalanche-c-chain-y-fuji) es la red de prueba de Avalanche: funciona igual que la principal, pero sus AVAX no valen plata y se piden gratis en un [faucet](../glosario.md#faucet). n8n la lee con pedidos [JSON-RPC](../glosario.md#rpc-y-json-rpc) al RPC público, sin claves: saldos, [transacciones](../glosario.md#transacción), [tokens](../glosario.md#token) y [eventos](../glosario.md#evento) de [contratos](../glosario.md#contrato-inteligente).

Esta línea es el track de **Avalanche Fuji**, que apoya Team1, el programa de comunidad de Avalanche.

## Por qué elegirla

- Aprendés Web3 de verdad, desde cero, sin arriesgar plata: todo es de prueba.
- Lo que n8n lee de Fuji es público y verificable: un pago, un registro o una donación que cualquiera puede comprobar en el [explorador](../glosario.md#explorador).
- El desafío del día, [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion), es la puerta de entrada perfecta.
- Tu proyecto puede contarlo para la mención «Mejor uso de Avalanche Fuji» ([qué reconoce](../ganadores-y-menciones.md)).

## Tu ruta, paso a paso

### Empezás con

1. **Tu wallet**: [Core Wallet y Avalanche Fuji](../00-empezar/06-core-wallet-y-fuji.md). Instalás Core, guardás tu frase de recuperación, activás **Testnet Mode**, pedís AVAX de prueba y mandás una transacción chica a alguien de tu equipo.
2. **Leer la red**: [`10-fuji-estado-de-la-red`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/10-fuji-estado-de-la-red) y [`11-fuji-saldo-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet), con tu dirección.
3. **El desafío del día**: [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion) con el hash de tu transacción. Paso a paso en la [parte 5 del tutorial](../tutorial/05-el-desafio-del-dia.md).

**Cómo sabés que vas bien:** n8n te devuelve tu propia transacción, con tu dirección en `de` y el monto que mandaste.

### Después

1. **Verificar un pago**: [`13-fuji-verificar-pago`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago) revisa estado, destino, monto mínimo y confirmaciones, y responde si el pago está verificado.
2. **Vigilar una wallet**: [`14-fuji-monitor-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet) revisa un saldo cada tanto y avisa si cambió.
3. **Tokens**: [`15-fuji-token-erc20`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/15-fuji-token-erc20) lee el saldo, el símbolo y los decimales de un token ERC-20.

La guía completa de este nivel: [Pagos verificables en Avalanche Fuji](../proyectos/03-pagos-verificables-en-fuji.md).

### Para lucirte

- **Tu contrato**: desplegá el contrato de ejemplo de [`avalanche/contratos`](https://github.com/nodo-cero-bo/workflows/tree/main/avalanche/contratos) con Remix y Core, y leé sus eventos con [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato). Guía: [Tu contrato en Fuji](../proyectos/06-tu-contrato-en-fuji.md).
- **Un agente que entiende Fuji**: [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) contesta en español sobre saldos, transacciones y bloques. Guía: [Agente Web3 que lee Fuji](../proyectos/04-agente-web3-que-lee-fuji.md).
- **Pagos con login**: [`41-pagos-fuji-con-login`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) junta Clerk, Fuji y Supabase: cada persona inicia sesión, manda el hash de su pago y queda registrado.

## Los workflows que sirven

| Workflow | Qué hace | Nivel | Qué pide |
|---|---|---|---|
| [`10-fuji-estado-de-la-red`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/10-fuji-estado-de-la-red) | Chain ID, último bloque y precio del gas, legibles. | Inicial | ninguna |
| [`11-fuji-saldo-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet) | El saldo en AVAX de una dirección. | Inicial | ninguna |
| [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion) | El desafío del día: quién, a quién, cuánto, gas, estado y bloque. | Inicial | ninguna |
| [`13-fuji-verificar-pago`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago) | Verifica un pago con reglas claras; opcional, lo registra en Supabase. | Intermedio | Supabase (opcional) |
| [`14-fuji-monitor-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet) | Revisa un saldo con un horario y avisa si cambió. | Intermedio | ninguna |
| [`15-fuji-token-erc20`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/15-fuji-token-erc20) | Saldo, símbolo y decimales de un token ERC-20. | Intermedio | ninguna |
| [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) | Lee y decodifica los eventos de un contrato. | Avanzado | ninguna |
| [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) | Agente de IA con herramientas que consultan Fuji. | Avanzado | Gemini |
| [`41-pagos-fuji-con-login`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) | Login con Clerk, pago verificado en Fuji y registro en Supabase. | Avanzado | Supabase |
| [`avalanche/contratos`](https://github.com/nodo-cero-bo/workflows/tree/main/avalanche/contratos) | Un contrato simple en Solidity y cómo desplegarlo con Remix y Core. | Avanzado | Core Wallet |

## Avalanche Fuji, a mano

| Llamado | Para qué |
|---|---|
| **[Descargá Core Wallet](https://core.app/download?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | La wallet de Avalanche, con modo testnet para pasar a Fuji. |
| **[Pedí AVAX de prueba en el faucet](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | Para probar pagos, contratos y workflows sin plata real. |
| **[Explorá tus transacciones](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | El explorador de Fuji: cada transacción, bloque y contrato. |
| **[Aprendé en Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | Cursos gratis con certificado, desde Blockchain Fundamentals. |
| **[Sumate a Team1 LATAM](https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026#waitlist)** | La comunidad de Avalanche que apoya el track de Fuji. |

Red: Avalanche Fuji C-Chain · Chain ID `43113` (`0xa869`) · RPC público `https://api.avax-test.network/ext/bc/C/rpc`. Todo lo demás, en [Recursos de Avalanche](../avalanche/recursos.md).

## Las guías de proyecto que encajan

- [03 Pagos verificables en Avalanche Fuji](../proyectos/03-pagos-verificables-en-fuji.md): de leer una transacción a una app con login.
- [04 Agente Web3 que lee Fuji](../proyectos/04-agente-web3-que-lee-fuji.md): IA y Web3 juntas.
- [06 Tu contrato en Fuji y n8n escuchando sus eventos](../proyectos/06-tu-contrato-en-fuji.md): dejá algo tuyo en la red.
- [08 Automatizá tu emprendimiento](../proyectos/08-automatiza-tu-emprendimiento.md) y [07 Impacto ambiental o social](../proyectos/07-impacto-ambiental-o-social.md), que suman Fuji como pieza opcional.

## Ideas para Santa Cruz y Bolivia

- **Cobros verificables para una feria o un taller**: quien paga manda el hash y n8n confirma en Fuji que el pago llegó, por el monto justo, antes de confirmar la inscripción.
- **Donaciones a la vista**: una wallet de prueba para una causa del barrio, vigilada por n8n, con una página que muestra cada donación y el total, verificables en el explorador.
- **Certificados que no se pueden falsificar**: un contrato que registra quién terminó un taller; cualquiera lo comprueba con el hash.
- **El origen de un producto**: una productora registra cada lote (miel, café, artesanías) en un contrato, y un QR en la etiqueta lleva a su historia en Fuji.
- **Reportes que nadie puede borrar**: los reportes ambientales de la línea Impacto, anclados en Fuji.
- **Fuji explicado para cualquiera**: un agente que cuenta en palabras simples qué pasó en una transacción, para quien nunca usó blockchain.

## Cómo mostrarla en la demo

1. **Aclará desde el principio que es la red de prueba**: «Esto corre en Fuji, la testnet de Avalanche: no es plata real».
2. **En vivo**: hacé una transacción chica desde Core (o tené el hash ya copiado), pasásela a tu workflow y mostrá lo que n8n leyó.
3. **Mostrá el explorador**: la misma transacción en el [explorador de Fuji](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026), para que se vea que es verificable.
4. **Qué hace n8n con eso**: verifica, guarda, avisa o le explica a una persona. Ahí está tu proyecto.
5. **Registrá el proyecto** marcando **Avalanche Fuji** entre las tecnologías y sumando el hash de una transacción ([vitrina](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml)).

Plan B: un hash de respaldo ya verificado y una ejecución exitosa guardada en **Executions**.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| El faucet no te deja pedir | Iniciá sesión en Builder Hub, conectá Core en **Testnet Mode** y usá la dirección que empieza con `0x`. |
| No ves tu saldo en Core | Core está en la red principal: activá **Testnet Mode**. |
| `encontrada: false` con tu hash | Revisá que esté completo (66 caracteres) y que sea de Fuji. |
| Los pedidos a Fuji tardan o fallan seguido | El RPC público es compartido y tiene límites: esperá unos segundos y no lo llames en un bucle sin pausa ([más](../preguntas-frecuentes.md#el-rpc-público-de-fuji-tiene-límites)). |
| Alguien te pide tu frase de recuperación | Es una estafa. Nadie de la organización ni de la mentoría te la va a pedir, y ningún workflow la necesita. |

## Para seguir

- Las otras líneas: [IA](ia.md) · [Apps](apps.md) · [Impacto](impacto.md).
- Para seguir aprendiendo después del sábado: [Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) y la referencia de la [API de la C-Chain](https://build.avax.network/docs/rpcs/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).

---

[Líneas](README.md) · Anterior: [IA para tu comunidad](ia.md) · Siguiente: [Apps con login y datos](apps.md)
