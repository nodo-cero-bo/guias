# Recursos de Avalanche y Team1

Todo lo de Avalanche Fuji en un lugar: Core Wallet, el faucet, el explorador, Avalanche Academy, Team1, la documentación de la C-Chain y los workflows de Nodo Cero para Fuji.

Team1, el programa de comunidad de Avalanche, apoya el track de **Avalanche Fuji** de Nodo Cero. La mención especial «Mejor uso de Avalanche Fuji» reconoce al equipo que mejor integre Fuji en su proyecto ([ganadores y menciones](../ganadores-y-menciones.md)).

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien suma Fuji a su proyecto o quiere seguir aprendiendo de Avalanche después del sábado, desde cero o con experiencia en desarrollo. |
| **Qué vas a lograr** | Tener a mano cada enlace oficial (wallet, faucet, explorador, cursos, comunidad y documentación) y saber cuál usar en cada momento. |
| **Tiempo estimado** | 5 minutos para recorrerla. Los cursos, a tu ritmo. |
| **Qué necesitás** | Nada para leerla. Para usar Fuji, Core Wallet en modo testnet ([guía 06](../00-empezar/06-core-wallet-y-fuji.md)). |

## Llamados

| | Qué hacer | Para qué |
|---|---|---|
| 1 | **[Descargá Core Wallet](https://core.app/download?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | La wallet de Avalanche: extensión para el navegador y app para el celular. Con el modo testnet, pasa a Fuji. |
| 2 | **[Pedí AVAX de prueba en el faucet](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | AVAX sin valor para probar pagos, contratos y workflows. |
| 3 | **[Aprendé en Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | Cursos gratis con certificado, de lo básico a construir aplicaciones. |
| 4 | **[Sumate a Team1 LATAM](https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026#waitlist)** | La comunidad de Avalanche, también en Latinoamérica: encuentros, talleres y hackathons. |
| 5 | **[Explorá tus transacciones](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | El explorador de Fuji: cada transacción, bloque y contrato, a la vista. |

> [!NOTE]
> Los enlaces de esta página llevan parámetros de seguimiento (`utm_source=nodo-cero`). No tienen ningún dato tuyo: le cuentan a Team1 que llegaste desde Nodo Cero, para que pueda medir cuántas personas se sumaron gracias al evento.

## La red Fuji, a mano

| Dato | Valor |
|---|---|
| Red | Avalanche Fuji C-Chain (la red de prueba, compatible con Ethereum) |
| Chain ID | `43113` (en hexadecimal, `0xa869`) |
| RPC público | `https://api.avax-test.network/ext/bc/C/rpc` (sin clave) |
| Moneda | AVAX de prueba, con 18 decimales: 1 AVAX = 10^18 wei |
| Explorador | `https://build.avax.network/explorer/fuji/c-chain` |
| Ver una transacción | `https://build.avax.network/explorer/fuji/c-chain/tx/<hash>` |

Una prueba rápida desde la terminal, para confirmar que estás en Fuji:

```bash
curl -s https://api.avax-test.network/ext/bc/C/rpc \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_chainId","params":[]}'
```

La respuesta trae `"result":"0xa869"`.

## Core Wallet

- **[Descargá Core Wallet](https://core.app/download?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** o entrá a [core.app](https://core.app/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).
- Cómo activar el modo testnet, de la ayuda oficial de Core: [en la extensión](https://support.core.app/en/articles/13052998-core-extension-how-do-i-toggle-testnet-on-and-off) y [en la app del celular](https://support.core.app/en/articles/11469939-core-mobile-how-do-i-toggle-testnet-mode-on-and-off).
- La lección [Set Up Core Wallet](https://build.avax.network/academy/avalanche-l1/avalanche-fundamentals/03-multi-chain-architecture-intro/06-setup-core?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) de Avalanche Academy.
- Nuestra guía paso a paso, con el faucet y tu primera transacción: [Core Wallet y Avalanche Fuji](../00-empezar/06-core-wallet-y-fuji.md).

> [!WARNING]
> La frase de recuperación es la wallet. Nadie de la organización ni de mentoría te la va a pedir. Nunca la pegues en n8n, en un chat ni en un documento. Para la hackathon, usá una wallet nueva, separada de cualquiera que uses con plata real.

## Faucet y cuenta de Builder Hub

El faucet está en la consola de **Avalanche Builder Hub**, el portal para quienes construyen en Avalanche.

1. [Creá tu cuenta de Builder Hub](https://build.avax.network/login?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) con tu correo: te llega un código para entrar.
2. Abrí el [faucet de Fuji](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026), conectá Core y pedí AVAX en la C-Chain, con tu dirección que empieza con `0x`.

El faucet pide las dos cosas, la sesión iniciada y la wallet conectada, y entrega una cantidad chica por vez. En el mismo portal, Builder Hub, están Avalanche Academy, el explorador y la documentación.

## Avalanche Academy

Cursos gratis, a tu ritmo, con cuestionarios y certificado al terminar.

### Para cualquier persona, también desde el lado de negocio y emprendimiento

| Curso | Qué te llevás |
|---|---|
| [Blockchain Fundamentals](https://build.avax.network/academy/blockchain/blockchain-fundamentals?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) | Qué es una blockchain, pagos, firmas, consenso, contratos inteligentes, tokens y para qué existen las redes de prueba como Fuji. Sin requisitos previos: es el mejor punto de partida para entender qué valor le suma Web3 a un producto. |
| [x402 Payments](https://build.avax.network/academy/blockchain/x402-payment-infrastructure?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) | Pagos por uso a través de HTTP, pensados para APIs y agentes de IA. El primer módulo explica el problema de los pagos tradicionales y los casos de uso, útil para pensar un modelo de negocio; los siguientes son técnicos. |

Hoy Avalanche Academy no tiene un recorrido separado de negocios: estos dos son los que más sirven para pensar producto y emprendimiento.

### Para desarrolladoras

| Curso | Qué te llevás |
|---|---|
| [Avalanche Fundamentals](https://build.avax.network/academy/avalanche-l1/avalanche-fundamentals?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) | El consenso de Avalanche, su arquitectura de varias cadenas y las máquinas virtuales. Es el curso con el que Academy recomienda empezar. |
| [Intro to Solidity](https://build.avax.network/academy/blockchain/solidity-foundry?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) | Programar contratos inteligentes en Solidity, con eventos y tokens ERC-20. Te prepara para la guía [Tu contrato en Fuji](../proyectos/06-tu-contrato-en-fuji.md). |
| [x402 Payments](https://build.avax.network/academy/blockchain/x402-payment-infrastructure?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) | La implementación completa de pagos por HTTP, incluido el modo para agentes de IA. |
| [Encrypted ERC](https://build.avax.network/academy/blockchain/encrypted-erc?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) | Tokens con saldos y transferencias privadas. Para cuando ya te sentís cómoda con Solidity. |

El catálogo completo, con los cursos para crear tu propia red (L1), está en **[Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**.

## Team1 y Team1 LATAM

**Team1** es el programa de comunidad de Avalanche: builders, creadoras y creadores de contenido y personas que organizan eventos en distintos países, también en Latinoamérica. Organizan talleres, hackathons y encuentros, y acompañan a quienes construyen en el ecosistema.

- **[Sumate a Team1 LATAM](https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026#waitlist)**: en la página de Team1 está el formulario para sumarte. Cuando las postulaciones están cerradas, funciona como lista de espera.
- **[Eventos de Team1](https://luma.com/user/usr-DrrXj8SDE9OLNi6?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**: su calendario en Luma, con los próximos encuentros y talleres.
- **[Discord de Team1](https://discord.gg/team1?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**: el servidor oficial, para conversar con la comunidad.
- **[Blog de Team1](https://www.team1.blog/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**: historias y novedades.

<details>
<summary>Si tu proyecto sigue creciendo después del sábado</summary>

El ecosistema tiene programas de apoyo para proyectos que construyen en Avalanche, como los [grants del Builder Hub](https://build.avax.network/grants?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) y los [mini grants de Team1](https://build.avax.network/grants/team1-mini-grants?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026). Cada programa tiene sus propios requisitos, plazos y condiciones, que pueden cambiar: leelos en su página antes de postular. Nodo Cero no los administra.

</details>

## Documentación

| Tema | Enlace |
|---|---|
| La API JSON-RPC de la C-Chain (los métodos `eth_*` que usan los workflows) | [C-Chain RPC](https://build.avax.network/docs/rpcs/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) |
| La red principal de Avalanche y sus cadenas | [Primary Network](https://build.avax.network/docs/primary-network?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) |
| Verificar tu contrato en el explorador | [Using Explorer](https://build.avax.network/docs/primary-network/verify-contract/explorer?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) |
| JSON-RPC explicado, en español | [API JSON-RPC en ethereum.org](https://ethereum.org/es/developers/docs/apis/json-rpc/) |
| Contratos inteligentes y tokens ERC-20, en español | [Contratos inteligentes](https://ethereum.org/es/developers/docs/smart-contracts/) y [ERC-20](https://ethereum.org/es/developers/docs/standards/tokens/erc-20/) |
| El editor en el navegador para compilar y desplegar contratos | [Remix](https://remix.ethereum.org) |
| El lenguaje de los contratos | [Documentación de Solidity](https://docs.soliditylang.org/) |

## Los workflows de Nodo Cero para Fuji

Todos leen la red con el RPC público, sin claves y sin tocar tu wallet.

| Workflow | Qué hace |
|---|---|
| [`10-fuji-estado-de-la-red`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/10-fuji-estado-de-la-red) | Chain ID, último bloque y precio del gas, en números legibles. |
| [`11-fuji-saldo-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet) | El saldo en AVAX de cualquier dirección. |
| [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion) | El desafío del día: dado un hash, quién envió, a quién, cuánto, el gas, el estado, el bloque y el enlace al explorador. |
| [`13-fuji-verificar-pago`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago) | Verifica que un pago llegó al destino correcto, por el monto mínimo y con confirmaciones. |
| [`14-fuji-monitor-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet) | Revisa un saldo cada cierto tiempo y avisa si cambió. |
| [`15-fuji-token-erc20`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/15-fuji-token-erc20) | Saldo, símbolo y decimales de un token ERC-20. |
| [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) | Lee y decodifica los eventos de un contrato. Con su contrato de ejemplo en [`avalanche/contratos`](https://github.com/nodo-cero-bo/workflows/tree/main/avalanche/contratos). |
| [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) | Un agente de IA que responde preguntas sobre Fuji usando herramientas. |
| [`41-pagos-fuji-con-login`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) | Login con Clerk, verificación del pago en Fuji y registro en Supabase. |

Guías de proyecto con Fuji: [Pagos verificables](../proyectos/03-pagos-verificables-en-fuji.md), [Agente Web3](../proyectos/04-agente-web3-que-lee-fuji.md) y [Tu contrato en Fuji](../proyectos/06-tu-contrato-en-fuji.md).

## Si usaste Fuji en tu proyecto

Cuando [registres tu proyecto](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml), marcá **Avalanche Fuji** entre las tecnologías y sumá el hash de una transacción tuya en Fuji (es un dato público). El formulario también pregunta si el equipo instaló Core Wallet, si se inscribió en Avalanche Academy y si se sumó a Team1 LATAM: con eso, Team1 puede ver lo que se construyó con Fuji en Nodo Cero.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| El faucet no te deja pedir | Iniciá sesión en Builder Hub, conectá Core en **Testnet Mode** y usá tu dirección que empieza con `0x`. Si ya pediste hace poco, esperá: el faucet entrega una cantidad por vez. |
| Core muestra saldo cero después del faucet | Core está en la red principal: activá **Testnet Mode** ([cómo, en la extensión](https://support.core.app/en/articles/13052998-core-extension-how-do-i-toggle-testnet-on-and-off)). |
| El explorador no encuentra tu transacción | Revisá que el hash esté completo (66 caracteres con el `0x`) y que estés en el explorador de Fuji, no en el de la red principal. |
| Un workflow de Fuji devuelve un error del RPC | El RPC público tiene límites de uso: esperá un momento y no lo llames en bucle. |
| Remix no despliega tu contrato | Compilá con **EVM Version** en `cancun`, como pide la [documentación de Avalanche](https://build.avax.network/docs/avalanche-l1s/add-utility/deploy-smart-contract?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) ([guía 06 de proyecto](../proyectos/06-tu-contrato-en-fuji.md)). |

## Para seguir

- Si todavía no tenés wallet: [Core Wallet y Avalanche Fuji](../00-empezar/06-core-wallet-y-fuji.md), paso a paso.
- Elegí un proyecto con Fuji: [Pagos verificables](../proyectos/03-pagos-verificables-en-fuji.md), [Agente Web3](../proyectos/04-agente-web3-que-lee-fuji.md) o [Tu contrato en Fuji](../proyectos/06-tu-contrato-en-fuji.md).
- Ideas con Fuji para otras áreas: la sección Web3 del [banco de ideas](../ideas.md#web3).

---

[Índice](../README.md) · [Core Wallet y Avalanche Fuji](../00-empezar/06-core-wallet-y-fuji.md) · [Guías de proyecto](../proyectos/README.md)
