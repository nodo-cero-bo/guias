# Glosario

Cada palabra nueva de la hackathon explicada en una a tres frases simples, con un ejemplo. Nadie nace sabiendo: si una guía usa una palabra que no conocés, buscala acá.

| De un vistazo | |
|---|---|
| **Para quién es** | Para cualquiera que se cruce con una palabra rara, en una guía, en un nodo o en una charla. También para quien ya sabe y quiere explicarla mejor. |
| **Qué vas a lograr** | Entender cada término lo justo para seguir construyendo, sin frenar. |
| **Tiempo estimado** | Un minuto por palabra. No hace falta leerlo de corrido. |
| **Qué necesitás** | Nada. Para buscar una palabra, usá `Ctrl` + `F` (en Mac, `Cmd` + `F`). |

Saltá a una parte: [n8n](#n8n) · [Internet y APIs](#internet-y-apis) · [Datos y login](#datos-y-login) · [IA](#ia) · [Web3 y Avalanche](#web3-y-avalanche) · [Google Cloud](#google-cloud) · [La hackathon](#la-hackathon)

> [!TIP]
> Los botones de n8n, Supabase, Clerk, Core y Google Cloud están en inglés. En este glosario y en las guías los escribimos tal como los vas a ver en pantalla, en **negrita**.

## n8n

### Workflow

Una receta de pasos que n8n corre en orden, de izquierda a derecha. Se arma conectando nodos en el canvas.

*Ejemplo*: «cuando alguien completa el formulario, guardá la respuesta en Supabase y avisame».

### Nodo

Cada paso de un workflow. Uno recibe datos, otro los transforma, otro los guarda o los manda a otro servicio.

*Ejemplo*: en [`01-hola-n8n`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/01-hola-n8n), **Separar y calcular** es un nodo que corre JavaScript.

### Trigger

El disparador: el primer nodo, el que decide cuándo arranca el workflow. Puede ser un clic, un formulario, un mensaje de chat, una hora del día o un pedido a una URL.

*Ejemplo*: **On form submission** arranca el workflow cada vez que alguien envía el formulario; **Trigger manually**, cuando vos tocás **Execute workflow**.

### Ejecución

El registro de una vez que el workflow corrió: qué entró y qué salió de cada nodo. Las encontrás en la pestaña **Executions**, arriba del canvas.

*Ejemplo*: si tu formulario recibió tres respuestas, vas a ver tres ejecuciones, una por respuesta.

### Item

Cada paquete de datos que viaja de un nodo al siguiente (también se escribe «ítem»). Casi todos los nodos trabajan una vez por cada item que les llega.

*Ejemplo*: en `01-hola-n8n` entra 1 item al nodo de JavaScript y salen 3, uno por equipo. El número aparece sobre la conexión.

### Expresión

Un pedacito de código entre llaves dobles, `{{ }}`, que n8n calcula cada vez que corre. Sirve para usar un dato que llegó de un paso anterior.

*Ejemplo*: `{{ $json.nombre }}` escribe el nombre que llegó en el item; `{{ $now.toFormat('HH:mm') }}` escribe la hora de ahora.

### Canvas

El lienzo del editor de n8n, donde ves los nodos y sus conexiones.

*Ejemplo*: para pegar un workflow copiado, hacés clic en una parte vacía del canvas y `Ctrl` + `V`.

### Nota adhesiva

Un recuadro de texto en el canvas que no ejecuta nada: explica. En inglés, *sticky note*.

*Ejemplo*: cada workflow de Nodo Cero trae una nota grande a la izquierda con «Qué hace», «Qué necesitás» y «Cómo probarlo».

### Publicar

Poner el workflow a funcionar por su cuenta, aunque cierres el editor. Hace falta para los formularios, los webhooks, los chats públicos y los horarios.

*Ejemplo*: tocás **Publish** en el encabezado del canvas y tu formulario queda andando con su URL de producción.

### URL de prueba y URL de producción

Los formularios y los webhooks tienen dos direcciones. La de prueba (con `/form-test/` o `/webhook-test/`) anda mientras el editor espera, después de tocar **Execute workflow**; la de producción (con `/form/` o `/webhook/`) anda cuando el workflow está publicado.

*Ejemplo*: probás con la de prueba y compartís con el público la de producción.

### Credencial

La llave guardada, cifrada, que n8n usa para entrar a otro servicio en tu nombre: una clave de API, un token, un usuario y contraseña. Los workflows de Nodo Cero no traen ninguna: cada persona conecta la suya.

*Ejemplo*: la credencial **Google Gemini(PaLM) Api** guarda tu clave de Google AI Studio. Más en la [guía de credenciales](00-empezar/03-credenciales.md).

### Pin data

Fijar los datos de salida de un nodo para probar el resto del workflow sin volver a pedirlos (en n8n, **Pin data**).

*Ejemplo*: fijás una respuesta del formulario y probás veinte veces lo que viene después, sin completarlo otra vez. Es un buen plan B para la demo.

### Code

El nodo que corre JavaScript (o Python) para lo que ningún otro nodo resuelve.

*Ejemplo*: en [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion), **Armar el resumen** es un Code que pasa de wei a AVAX sin redondear.

## Internet y APIs

### API

La puerta por la que un programa le pide datos o acciones a otro, con reglas fijas.

*Ejemplo*: Open-Meteo tiene una API que, si le pasás la latitud y la longitud de Santa Cruz, te devuelve el clima de ahora.

### Pedido HTTP

La forma de hablar con una API por internet: un método, una URL y, a veces, headers y un cuerpo. En n8n lo arma el nodo **HTTP Request**.

*Ejemplo*: [`03-http-request`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/03-http-request) hace dos pedidos reales, sin claves.

### Método

Qué querés hacer con el pedido. `GET` lee; `POST` manda datos (también existen `PUT`, `PATCH` y `DELETE`).

*Ejemplo*: pedir el clima es un `GET`; preguntarle algo a Fuji es un `POST`.

### Header y body

Los headers son datos sobre el pedido (en qué formato va, qué clave lo autoriza). El body, o cuerpo, es lo que mandás.

*Ejemplo*: `Content-Type: application/json` es un header; `{"method": "eth_blockNumber"}` va en el body.

### Código de respuesta

El número con el que contesta el servidor: los 200 dicen que salió bien, los 400 que el pedido tiene un problema y los 500 que falló el servidor.

*Ejemplo*: `401` es «no tenés permiso», `404` es «eso no existe» y `429` es «demasiados pedidos seguidos, esperá».

### JSON

Un formato de texto para datos: llaves, nombres entre comillas y sus valores. Es lo que viaja entre n8n y casi cualquier API; un workflow entero también es un JSON.

*Ejemplo*: `{"nombre": "Ana", "equipo": 2}`.

### Webhook

Una URL que n8n escucha: cuando alguien la llama, arranca el workflow. Sirve para que otro servicio le avise a n8n que pasó algo.

*Ejemplo*: Clerk llama al webhook del workflow 20 cada vez que alguien se registra.

### Hexadecimal

Una forma de escribir números con dieciséis símbolos, del `0` al `9` y de la `a` a la `f`. En Web3 los números vienen así, con `0x` adelante.

*Ejemplo*: `0xa869` es `43113`, el número de la red Fuji. En una expresión de n8n, `parseInt('0xa869', 16)` lo pasa a decimal.

## Datos y login

### Base de datos

Un lugar ordenado para guardar datos que duran, aunque el workflow termine.

*Ejemplo*: cada reporte de un formulario queda guardado en una base de Supabase, listo para consultarlo mañana.

### Tabla, fila y columna

Una tabla es como una hoja de cálculo: cada fila es un registro y cada columna, un dato de ese registro.

*Ejemplo*: en la tabla `reportes`, cada fila es un reporte y las columnas son `zona`, `descripcion` y `urgencia`.

### SQL

El idioma para crear tablas y pedirle datos a una base. En Supabase se escribe en el **SQL Editor**.

*Ejemplo*: `select * from reportes where urgencia = 'alta';` trae los reportes urgentes.

### Supabase

Un servicio con una base de datos Postgres en la nube y todo lo de alrededor: una API lista, login, archivos y búsqueda por significado. En la hackathon es la memoria de los proyectos.

*Ejemplo*: [Tu proyecto en Supabase](00-empezar/04-cuenta-supabase.md) te lleva de la cuenta a las tablas.

### RLS

*Row Level Security*: reglas de la base que deciden quién puede leer o escribir cada fila. Con RLS activado y sin reglas, la clave publicable no ve nada, y la clave secreta, la que usa n8n, las saltea.

*Ejemplo*: así nadie puede leer los reportes desde una página web, pero n8n sí puede guardarlos.

### Clave publicable y clave secreta

Supabase y Clerk tienen dos clases de clave. La publicable puede ir en una página web y respeta las reglas; la secreta va en n8n y en ningún otro lado.

*Ejemplo*: en Supabase, `sb_publishable_...` y `sb_secret_...`.

### Sesión

La prueba de que una persona ya inició sesión (hizo login). La página la manda en cada pedido para que el servidor sepa quién pide.

*Ejemplo*: con Clerk, la página manda el token de sesión a n8n en el header `Authorization`.

### JWT

Un token firmado, en tres partes separadas por puntos, que dice quién sos y hasta cuándo vale. Si alguien lo cambia, la firma deja de coincidir.

*Ejemplo*: [`21-clerk-api-protegida`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida) verifica el JWT de Clerk y responde `401` si falta o no es válido.

### Clerk

Un servicio de login y cuentas de usuarias para apps: registro, inicio de sesión, perfiles e invitaciones, sin que tengas que programarlos.

*Ejemplo*: [Tu aplicación en Clerk](00-empezar/05-cuenta-clerk.md).

## IA

### LLM

*Large language model*, o modelo de lenguaje: el programa de IA que lee un texto y escribe una respuesta.

*Ejemplo*: Gemini, de Google, es el LLM de los workflows de Nodo Cero.

### Prompt y mensaje de sistema

El prompt es lo que le pedís al modelo. El mensaje de sistema son las instrucciones fijas: quién es, cómo responde y qué no hace.

*Ejemplo*: «Sos el asistente de la biblioteca del barrio. Respondé en español, con voseo, y si no sabés algo, decilo».

### Agente

Un LLM que además puede decidir pasos: elegir una herramienta, usarla y responder con lo que encontró. En n8n es el nodo **AI Agent**.

*Ejemplo*: [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) decide si tiene que consultar un saldo o una transacción.

### Herramienta

Algo que un agente puede usar cuando lo necesita (en inglés, *tool*): una API, una búsqueda en documentos, una calculadora.

*Ejemplo*: un **HTTP Request Tool** conectado a la entrada **Tool** del agente.

### Memoria

Lo que el agente recuerda de la conversación. **Simple Memory** se borra si n8n se reinicia; **Postgres Chat Memory** la guarda en Supabase.

*Ejemplo*: gracias a la memoria, el agente sabe qué le preguntaste recién.

### Embeddings

Una lista de números que representa el significado de un texto. Textos que dicen cosas parecidas tienen números parecidos, y así se puede buscar por significado y no por palabras exactas.

*Ejemplo*: «¿cuándo cierran las inscripciones?» queda cerca de «la fecha límite para anotarse».

### Base vectorial

Una base que guarda embeddings y encuentra los más parecidos a una pregunta. En Supabase se hace con la extensión `pgvector`.

*Ejemplo*: la tabla `documentos` de Nodo Cero.

### RAG

Generación aumentada con búsqueda: antes de responder, el agente busca en tus documentos los pedazos más parecidos a la pregunta y contesta con eso. Así responde sobre lo tuyo y no inventa.

*Ejemplo*: [`32-cargar-documentos-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag) carga los documentos y [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) busca en ellos.

### Clasificar

Pedirle a la IA que elija una categoría de una lista o que saque datos ordenados de un texto libre.

*Ejemplo*: [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) lee cada idea nueva y le pone su categoría.

### Tokens de la IA

Los pedacitos en los que un modelo parte lo que lee y escribe. Los límites y los precios de la IA se cuentan en tokens. No es lo mismo que un token de blockchain ni que un token de sesión.

*Ejemplo*: un texto largo usa más tokens que una pregunta corta.

### Cuota

Cuántos pedidos podés hacer por minuto o por día en un servicio. Si te pasás, el servicio responde `429` hasta que pasa un rato.

*Ejemplo*: el nivel gratuito de Gemini tiene una cuota por minuto: si probás muy seguido, esperá un momento.

## Web3 y Avalanche

### Blockchain

Un registro público que comparten muchas computadoras: lo que se escribe queda a la vista de todo el mundo y no se puede borrar ni cambiar.

*Ejemplo*: cada transacción de Fuji queda registrada para siempre y cualquiera la puede leer.

### Avalanche, C-Chain y Fuji

Avalanche es una red de blockchain. La C-Chain es su cadena compatible con Ethereum, donde viven las direcciones `0x` y los contratos. Fuji es su red de prueba.

*Ejemplo*: los workflows de Nodo Cero leen la C-Chain de Fuji.

### Testnet

Una red de prueba: funciona igual que la principal, pero sus monedas no valen plata y se piden gratis.

*Ejemplo*: Fuji es la testnet de Avalanche. En Core Wallet se activa con **Testnet Mode**.

### Chain ID

El número que identifica a cada red, para no confundirlas.

*Ejemplo*: el de Fuji es `43113` (en hexadecimal, `0xa869`).

### Wallet

La app que guarda las llaves de tus cuentas de blockchain y firma tus transacciones.

*Ejemplo*: Core Wallet, la wallet de Avalanche: [guía 06](00-empezar/06-core-wallet-y-fuji.md).

### Dirección

El identificador público de una cuenta, como un número de cuenta: se puede compartir sin miedo. En la C-Chain empieza con `0x` y tiene 40 caracteres más.

*Ejemplo*: le pasás tu dirección a alguien de tu equipo para que te mande AVAX de prueba.

### Frase de recuperación

La lista de palabras que es la llave maestra de tu wallet: quien la tiene, controla todo lo que hay adentro. Nunca se comparte y nunca va en n8n.

*Ejemplo*: la anotás en papel al crear la wallet y la guardás. Nadie de la organización te la va a pedir.

### Faucet

Una página que regala monedas de prueba de una testnet.

*Ejemplo*: el [faucet de Fuji](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026), en Builder Hub, da AVAX de prueba.

### AVAX y wei

AVAX es la moneda de Avalanche. Las APIs cuentan en wei, la unidad más chica: 1 AVAX son 10^18 wei (un uno con dieciocho ceros).

*Ejemplo*: `500000000000000000` wei son 0.5 AVAX.

### Transacción

Una operación firmada que queda escrita en la red: mandar AVAX, llamar a un contrato o crear uno.

*Ejemplo*: mandarle 0.01 AVAX de prueba a alguien de tu equipo desde Core.

### Hash

Un código único que identifica algo, como una huella digital. El de una transacción empieza con `0x` y tiene 64 caracteres más.

*Ejemplo*: con el hash buscás la transacción en el explorador o la leés con el workflow 12, el desafío del día.

### Bloque y confirmaciones

Las transacciones se guardan en bloques, uno detrás de otro. Las confirmaciones cuentan cuántos bloques hubo desde el de tu transacción, incluido.

*Ejemplo*: en Avalanche una transacción es final apenas entra en un bloque; pedir más confirmaciones es un margen extra.

### Explorador

Una página web para mirar transacciones, bloques, direcciones y contratos de una red.

*Ejemplo*: el [explorador de Fuji](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).

### Gas

La medida del trabajo que hace la red para procesar una transacción. Se paga en AVAX: el costo es el gas usado por el precio de cada unidad.

*Ejemplo*: una transferencia simple usa 21000 de gas, y en Fuji cuesta una fracción mínima de AVAX de prueba.

### RPC y JSON-RPC

El RPC es la URL de un servidor de la red al que le hacés preguntas. JSON-RPC es el formato de esas preguntas: siempre un `POST` con un JSON que dice qué método llamás.

*Ejemplo*: `{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}` al RPC público de Fuji, `https://api.avax-test.network/ext/bc/C/rpc`, devuelve el último bloque.

### Contrato inteligente

Un programa que vive en la blockchain, con dirección propia, y que hace siempre lo mismo cuando alguien lo llama. Se escribe, por ejemplo, en Solidity.

*Ejemplo*: el registro de proyectos de [`avalanche/contratos`](https://github.com/nodo-cero-bo/workflows/tree/main/avalanche/contratos).

### Evento

El aviso que deja un contrato cuando pasa algo (también se le dice *log*). Queda guardado en el recibo de la transacción y n8n lo puede leer.

*Ejemplo*: `Transfer`, cada vez que un token cambia de dueña. Lo lee [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato).

### Token

En Web3, una moneda o ficha creada por un contrato. ERC-20 es el estándar de los tokens que funcionan como moneda.

*Ejemplo*: el USDC de prueba de Fuji, que lee [`15-fuji-token-erc20`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/15-fuji-token-erc20).

### ABI

La descripción de las funciones y eventos de un contrato: dice cómo llamarlo y cómo leer lo que responde.

*Ejemplo*: el workflow 15 arma a mano el pedido a la función `balanceOf` del token.

## Google Cloud

### Proyecto de Google Cloud

Google Cloud es la nube de Google, con servicios de IA, traducción, análisis de texto y archivos. Todo vive dentro de un proyecto, que tiene su ID, sus APIs habilitadas y su facturación.

*Ejemplo*: creás un proyecto `nodo-cero` para la hackathon y, al terminar, lo apagás. Paso a paso en [Google Cloud](00-empezar/08-google-cloud.md).

### Habilitar una API

En Google Cloud cada servicio se prende por proyecto, uno por uno. Si no está habilitado, responde con un error.

*Ejemplo*: **APIs & Services**, **Library**, buscás **Cloud Translation API** y tocás **Enable**.

### Cuenta de servicio

Una cuenta de Google para programas, no para personas. Su clave, un archivo JSON, es lo que n8n usa para entrar a Google Cloud con la credencial **Google Service Account API**.

*Ejemplo*: creás la cuenta `n8n-nodo-cero`, le das permiso para traducir y descargás su clave. Esa clave se cuida como una contraseña.

### Créditos y facturación

La cuenta de facturación paga el uso del proyecto. Los créditos son saldo que Google descuenta antes de cobrar, y muchos servicios tienen además un nivel gratuito por mes.

*Ejemplo*: si tu equipo recibió créditos de Google Cloud, los ves en **Billing**, **Credits**.

### Alerta de presupuesto

Un aviso por correo cuando el gasto del proyecto llega a un porcentaje del monto que definiste. Te avisa, pero no corta el gasto por su cuenta.

*Ejemplo*: un presupuesto de 5 dólares con avisos al 50, 90 y 100 por ciento.

### Vertex AI

La plataforma de IA de Google Cloud, con los modelos Gemini, que se paga con la facturación del proyecto. En n8n se usa con el nodo **Google Vertex Chat Model**.

*Ejemplo*: [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente).

### Cloud Translation

La API de traducción de Google Cloud. Entre sus idiomas están el quechua (`qu`), el aimara (`ay`) y el guaraní (`gn`).

*Ejemplo*: [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) traduce un aviso y arma un resumen.

### Cloud Natural Language

La API de Google Cloud que analiza un texto: si el tono es positivo o negativo (sentimiento) y qué personas, lugares u organizaciones nombra (entidades).

*Ejemplo*: [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) lee opiniones de un formulario.

### Cloud Storage y bucket

Cloud Storage guarda archivos en Google Cloud. Un bucket es un contenedor de archivos con un nombre que no se repite en todo el mundo.

*Ejemplo*: [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) sube a un bucket el archivo que llega por un formulario.

## La hackathon

### Línea

Cada uno de los cuatro caminos de la hackathon (en inglés, *track*): IA para tu comunidad, Web3 con Avalanche Fuji, Apps con login y datos, e Impacto social y ambiental. Cada equipo elige una.

*Ejemplo*: [las cuatro líneas](lineas/README.md), con su ruta paso a paso.

### Demo

La muestra en vivo de tu proyecto en las presentaciones: el problema, la solución y el flujo funcionando.

*Ejemplo*: [Cómo presentar tu proyecto](presentar.md).

### Mención especial

Un reconocimiento aparte de los tres primeros lugares. En Nodo Cero hay dos: «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud».

*Ejemplo*: [Ganadores y menciones](ganadores-y-menciones.md).

### Vitrina

El repo [`proyectos`](https://github.com/nodo-cero-bo/proyectos), donde cada equipo registra lo que construyó con un formulario.

*Ejemplo*: registrás tu proyecto antes de presentar, con su nombre, qué hace y qué tecnologías usa.

## Si algo falla

| Lo que pasa | Qué probar |
|---|---|
| La palabra que buscás no está | Preguntale a una persona de mentoría: seguro hay alguien que te la explica en un minuto. Después, si querés, sumala con un issue en este repo. |
| La explicación no te alcanza | Seguí el enlace del ejemplo: casi siempre lleva a un workflow o una guía donde la ves funcionando. |
| Un botón no se llama igual en tu pantalla | Las herramientas cambian los nombres cada tanto. Buscá una palabra parecida en el mismo lugar, o preguntá. |

## Para seguir

- Si nunca usaste n8n, empezá el tutorial [De cero a tu demo](tutorial/README.md).
- Las dudas y los miedos de siempre, respondidos: [Preguntas frecuentes](preguntas-frecuentes.md).
- Documentación oficial de n8n: [glosario de n8n](https://docs.n8n.io/glossary/), en inglés.

---

[Índice](README.md) · [Tutorial](tutorial/README.md) · [Preguntas frecuentes](preguntas-frecuentes.md)
