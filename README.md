<p align="center">
  <img src="assets/cabecera.png" alt="n8n presenta Nodo Cero, Hackathon n8n Bolivia. Guías paso a paso: creá tus cuentas, importá workflows, conectá credenciales y presentá tu proyecto. Enfocada en mujeres, de la mano de Women Techmakers Santa Cruz." width="100%">
</p>

<p align="center">
  <a href="https://github.com/nodo-cero-bo/guias/actions/workflows/auditar.yml"><img src="https://github.com/nodo-cero-bo/guias/actions/workflows/auditar.yml/badge.svg" alt="Auditor de las guías"></a>
  <img src="https://img.shields.io/badge/gu%C3%ADas-38-FF91AC?style=flat-square" alt="38 guías">
  <img src="https://img.shields.io/badge/n8n-2.48.7-FF91AC?style=flat-square" alt="n8n 2.48.7">
  <a href="LICENSE"><img src="https://img.shields.io/badge/licencia-CC%20BY%204.0-5A0026?style=flat-square" alt="Licencia CC BY 4.0"></a>
</p>

<p align="center">
  <a href="https://nodo-cero-bo.github.io"><b>Página del evento</b></a> ·
  <a href="https://github.com/nodo-cero-bo/workflows">Workflows</a> ·
  <a href="https://github.com/nodo-cero-bo/proyectos">Proyectos</a> ·
  <a href="https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml">Registrá tu proyecto</a>
</p>

# Guías de Nodo Cero

Guías paso a paso para construir con n8n: crear tus cuentas, importar workflows, conectar credenciales, armar un proyecto completo, presentarlo y seguir después del sábado.

**Nodo Cero – Hackathon n8n Bolivia** es la hackathon de la comunidad n8n en Bolivia, enfocada en mujeres, de la mano de Women Techmakers Santa Cruz: sábado 21 de noviembre de 2026, en el Centro de Educación Ambiental (CEA) de Santa Cruz de la Sierra. Estas guías sirven para el día del evento y para seguir aprendiendo a tu ritmo. No hace falta haber usado n8n nunca: se aprende haciendo.

Los workflows que usan las guías están en el repo [**nodo-cero-bo/workflows**](https://github.com/nodo-cero-bo/workflows) y en el catálogo de la [**página del evento**](https://nodo-cero-bo.github.io), con el botón «Copiar workflow» para pegarlos directo en tu canvas.

## ¿Primera vez? Empezá acá

Si nunca usaste n8n, seguí el tutorial **[De cero a tu demo](tutorial/README.md)**: ocho partes chicas, de crear tu cuenta a presentar un flujo propio, con lo que vas a ver en cada paso, cómo saber que funcionó y qué hacer si algo falla. No se rompe nada si probás.

| Si necesitás | Andá a |
|---|---|
| Entender una palabra nueva | [Glosario](glosario.md): workflow, nodo, item, JSON, webhook, wallet, hash, RAG y más, cada una con un ejemplo. |
| Sacarte un miedo o una duda | [Preguntas frecuentes](preguntas-frecuentes.md): «¿rompo algo?», «¿me van a cobrar?», «no sé programar», «¿qué hago si me trabo?». |
| Saber cómo es el cierre | [Ganadores y menciones](ganadores-y-menciones.md): los tres lugares y las dos menciones especiales. |

## Empezá en tres pasos

1. **Creá tu cuenta de n8n Cloud** y recorré el editor: [guía 01](00-empezar/01-cuenta-n8n-cloud.md).
2. **Importá un workflow** de la colección (copiar y pegar, desde una URL o un archivo): [guía 02](00-empezar/02-importar-workflows.md).
3. **Conectá tus credenciales**, las llaves que n8n usa para hablar con otros servicios: [guía 03](00-empezar/03-credenciales.md).

Con eso andando, elegí una línea y una ruta.

## Las cuatro líneas

Cada equipo elige una línea (en inglés, *track*). Cualquier línea puede llegar a los tres primeros lugares y a las dos menciones especiales, «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud» ([qué reconoce cada una](ganadores-y-menciones.md)).

| Línea | De qué se trata |
|---|---|
| [IA para tu comunidad](lineas/ia.md) | Agentes y asistentes con Gemini (Google AI Studio o Vertex AI en Google Cloud) y RAG con Supabase. |
| [Web3 con Avalanche Fuji](lineas/web3.md) | Leer la red, verificar pagos, contratos y eventos, y agentes que leen Fuji. Con Team1. |
| [Apps con login y datos](lineas/apps.md) | Clerk, Supabase y n8n como backend: el circuito de una app real. |
| [Impacto social y ambiental](lineas/impacto.md) | Problemas reales de Santa Cruz y Bolivia: reportes ciudadanos, educación, salud, emprendimiento y traducción a quechua, aimara y guaraní. |

Cada línea trae su ruta paso a paso por nivel, los workflows que sirven, ideas para Santa Cruz y Bolivia y cómo mostrarla en la demo. Todas juntas, en [Las líneas de la hackathon](lineas/README.md).

## Elegí tu ruta

| Ruta | Es para vos si... | Terminás con |
|---|---|---|
| [Ruta inicial](#ruta-inicial) | Nunca usaste n8n y querés algo que funcione hoy. | Un formulario que guarda en una base de datos y una IA que ordena cada respuesta. O, con el [tutorial](tutorial/README.md), un flujo propio que lee Fuji. |
| [Ruta IA](#ruta-ia) | Te interesan los agentes de IA. | Un asistente con enlace público que responde con tus documentos y recuerda la conversación. |
| [Ruta Web3 con Avalanche Fuji](#ruta-web3-con-avalanche-fuji) | Querés sumar blockchain a tu proyecto, aunque nunca hayas usado una wallet. | Una wallet en Fuji, tu primera transacción leída por n8n y un verificador de pagos, un agente o tu propio contrato. |
| [Ruta app con login y datos](#ruta-app-con-login-y-datos) | Alguien del equipo se anima con un poco de HTML. | Una página con login de Clerk, una API de n8n protegida y los datos en Supabase. |
| [Ruta impacto social y ambiental](#ruta-impacto-social-y-ambiental) | Tu equipo tiene una causa: un barrio, una escuela, la salud o el ambiente. | Reportes ciudadanos con foto que la IA ordena, alertas del clima y avisos en quechua, aimara o guaraní. |

Las rutas se cruzan: arrancá por una y tomá piezas de otra cuando las necesites.

### Ruta inicial

Para quien abre n8n por primera vez. Los primeros workflows no piden ninguna credencial. La forma más guiada es el tutorial [De cero a tu demo](tutorial/README.md); si preferís ir por tu cuenta:

1. [Tu cuenta de n8n Cloud](00-empezar/01-cuenta-n8n-cloud.md): el editor, tu primer workflow y las ejecuciones.
2. [Importar workflows](00-empezar/02-importar-workflows.md), empezando por [`01-hola-n8n`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/01-hola-n8n): datos, expresiones y decisiones.
3. Probá [`02-mi-primera-api`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/02-mi-primera-api) y [`04-formulario`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/04-formulario): tu primera API y tu primer formulario.
4. Abrí tus cuentas: [credenciales](00-empezar/03-credenciales.md), [Supabase](00-empezar/04-cuenta-supabase.md) y [Gemini](00-empezar/07-clave-gemini.md).
5. Tu proyecto: [Formularios inteligentes que guardan y clasifican](proyectos/05-formularios-inteligentes.md). Si tu equipo tiene una causa, seguí con [Impacto ambiental o social](proyectos/07-impacto-ambiental-o-social.md).

### Ruta IA

Para armar agentes que conversan, buscan en documentos y recuerdan.

1. Si todavía no la tenés, [tu cuenta de n8n Cloud](00-empezar/01-cuenta-n8n-cloud.md) y [cómo importar](00-empezar/02-importar-workflows.md).
2. [Tu clave de Gemini](00-empezar/07-clave-gemini.md) y tu primer agente con [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia).
3. [Tu proyecto en Supabase](00-empezar/04-cuenta-supabase.md): las tablas y la conexión Postgres para la memoria del agente.
4. Tu proyecto: [Asistente con IA para tu comunidad](proyectos/01-asistente-ia-para-tu-comunidad.md), con [`32-cargar-documentos-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag) y [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag).
5. Para sumar: la clasificación con IA de [Formularios inteligentes](proyectos/05-formularios-inteligentes.md) o el asistente para un negocio de [Automatizá tu emprendimiento](proyectos/08-automatiza-tu-emprendimiento.md).
6. Para lucirte con Google Cloud: [Google Cloud y créditos](00-empezar/08-google-cloud.md) y [Traducí y resumí con Google Cloud](proyectos/09-traducir-y-resumir-con-google-cloud.md).

La ruta completa, por nivel: [línea IA para tu comunidad](lineas/ia.md).

### Ruta Web3 con Avalanche Fuji

Fuji es la red de prueba de Avalanche: funciona igual que la principal, pero sus AVAX no tienen valor y se piden gratis. La hackathon tiene un track de Avalanche Fuji, con el apoyo de Team1, y la mención especial «Mejor uso de Avalanche Fuji». La ruta completa, por nivel: [línea Web3 con Avalanche Fuji](lineas/web3.md).

1. [Core Wallet y Avalanche Fuji](00-empezar/06-core-wallet-y-fuji.md): tu wallet, el modo testnet, AVAX de prueba en el faucet y tu primera transacción.
2. Importá [`10-fuji-estado-de-la-red`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/10-fuji-estado-de-la-red) y [`11-fuji-saldo-wallet`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet): leen la red sin claves.
3. El desafío del día: [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion), con el hash de tu transacción.
4. Tu proyecto: [Pagos verificables en Fuji](proyectos/03-pagos-verificables-en-fuji.md), [Agente Web3 que lee Fuji](proyectos/04-agente-web3-que-lee-fuji.md) o [Tu contrato en Fuji](proyectos/06-tu-contrato-en-fuji.md).
5. Todo lo de Avalanche y Team1 junto: [Recursos de Avalanche](avalanche/recursos.md).

| Llamado | Para qué |
|---|---|
| **[Descargá Core Wallet](https://core.app/download?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | La wallet de Avalanche, con modo testnet para pasar a Fuji. |
| **[Pedí AVAX de prueba en el faucet](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | Para probar pagos, contratos y workflows sin plata real. |
| **[Aprendé en Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | Cursos gratis con certificado, de Blockchain Fundamentals a Solidity. |
| **[Sumate a Team1 LATAM](https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026#waitlist)** | La comunidad de Avalanche, que apoya el track de Fuji. |
| **[Explorá tus transacciones](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)** | El explorador de Fuji: cada transacción, bloque y contrato, a la vista. |

### Ruta app con login y datos

El circuito de una app real: login, una API que verifica quién pide cada cosa y una base de datos. La ruta completa, por nivel: [línea Apps con login y datos](lineas/apps.md).

1. [Tu proyecto en Supabase](00-empezar/04-cuenta-supabase.md): la URL, las claves y las tablas de Nodo Cero.
2. [Tu aplicación en Clerk](00-empezar/05-cuenta-clerk.md): las claves, el webhook firmado y la clave pública en formato PEM.
3. [Credenciales](00-empezar/03-credenciales.md): cuáles van en n8n y cuáles nunca salen de ahí.
4. Tu proyecto: [App con login y datos](proyectos/02-app-con-login-y-datos.md), con [`20-clerk-webhook-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase), [`21-clerk-api-protegida`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida) y la página de [`clerk/app-ejemplo`](https://github.com/nodo-cero-bo/workflows/tree/main/clerk/app-ejemplo).
5. Para sumar: invitaciones por correo con [`22-clerk-invitaciones`](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/22-clerk-invitaciones), o pagos verificados detrás del login con [`41-pagos-fuji-con-login`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) ([guía](proyectos/03-pagos-verificables-en-fuji.md)).

### Ruta impacto social y ambiental

Para equipos con una causa. Se empieza sin ninguna cuenta extra y se suma lo que haga falta.

1. Definí el problema en una frase: quién, qué le pasa y quién debería enterarse.
2. Un aviso que llega por su cuenta: [`60-alerta-del-clima`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/60-alerta-del-clima), el pronóstico de Santa Cruz cada mañana, sin claves.
3. Abrí tus cuentas: [Supabase](00-empezar/04-cuenta-supabase.md) y [Gemini](00-empezar/07-clave-gemini.md).
4. Tu proyecto: [Reportes ambientales con foto](proyectos/10-reportes-ambientales-con-foto.md), listo para importar, o [Impacto ambiental o social](proyectos/07-impacto-ambiental-o-social.md), pieza por pieza.
5. Para sumar: avisos en quechua, aimara o guaraní con [Traducí y resumí con Google Cloud](proyectos/09-traducir-y-resumir-con-google-cloud.md), o reportes que nadie puede borrar con [Tu contrato en Fuji](proyectos/06-tu-contrato-en-fuji.md).

La ruta completa, por nivel: [línea Impacto social y ambiental](lineas/impacto.md).

## Todas las guías

### Para empezar

| # | Guía | Qué hacés | Tiempo |
|---|---|---|---|
| 01 | [Tu cuenta de n8n Cloud](00-empezar/01-cuenta-n8n-cloud.md) | Creás tu cuenta de prueba, recorrés el editor, armás tu primer workflow y leés una ejecución. | 20 min |
| 02 | [Importar los workflows](00-empezar/02-importar-workflows.md) | Traés un workflow de tres formas (pegar, URL o archivo), conectás credenciales y lo probás. | 10 min por workflow |
| 03 | [Credenciales](00-empezar/03-credenciales.md) | Creás y probás credenciales, sabés cuál pide cada workflow y cómo cuidarlas. | 10 min |
| 04 | [Tu proyecto en Supabase](00-empezar/04-cuenta-supabase.md) | Creás el proyecto, cargás las tablas con el SQL Editor y conectás la base a n8n, también como memoria del agente. | 25 min |
| 05 | [Tu aplicación en Clerk](00-empezar/05-cuenta-clerk.md) | Creás la aplicación, copiás las claves, configurás el webhook con su secreto y la clave pública PEM. | 20 min |
| 06 | [Core Wallet y Avalanche Fuji](00-empezar/06-core-wallet-y-fuji.md) | Instalás Core, guardás tu frase de recuperación, pasás a Fuji, pedís AVAX de prueba y mirás tu transacción. | 20 min |
| 07 | [Tu clave de Gemini](00-empezar/07-clave-gemini.md) | Sacás una clave gratis en Google AI Studio y la conectás a tu primer agente. Con la alternativa de OpenAI. | 10 min |
| 08 | [Google Cloud y créditos](00-empezar/08-google-cloud.md) | Creás el proyecto, sumás los créditos si tu equipo los recibió, ponés la alerta de presupuesto, habilitás las APIs y conectás la cuenta de servicio. Y cómo apagar todo. | 30 min |

### Tutorial: De cero a tu demo

Para quien nunca usó n8n, en pasos chicos, con «Qué vas a ver» y «Cómo sabés que funcionó» en cada uno. Más detalle en el [índice del tutorial](tutorial/README.md).

| Parte | Qué hacés | Tiempo |
|---|---|---|
| [1. Tu cuenta de n8n](tutorial/01-tu-cuenta-de-n8n.md) | Creás tu cuenta de n8n Cloud y conocés el editor. | 15 min |
| [2. Tu primer workflow](tutorial/02-tu-primer-workflow.md) | Importás `01-hola-n8n`, lo ejecutás y mirás qué pasó. | 15 min |
| [3. Items y expresiones](tutorial/03-items-y-expresiones.md) | Entendés cómo viajan los datos y escribís tu primera expresión. | 20 min |
| [4. Hablar con una API](tutorial/04-hablar-con-una-api.md) | Con `03-http-request`, el clima de Santa Cruz y el último bloque de Fuji. | 20 min |
| [5. El desafío del día](tutorial/05-el-desafio-del-dia.md) | Con `12-fuji-leer-transaccion`, leés una transacción de Fuji. | 20 min |
| [6. Tu agente con Gemini](tutorial/06-tu-agente-con-gemini.md) | Con `05-agente-ia`, tu primer agente de IA. | 20 min |
| [7. Tu propio flujo](tutorial/07-tu-propio-flujo.md) | Combinás piezas: un formulario que lee una transacción y la explica. | 45 min |
| [8. Tu demo](tutorial/08-tu-demo.md) | Preparás la demo, el plan B y el registro del proyecto. | 30 min |

### Guías de proyecto

Cada una junta varios workflows en algo que resuelve un problema real y termina con cómo presentarlo en la demo. Más detalle en el [índice de proyectos](proyectos/README.md).

| # | Proyecto | Arranca con | Nivel |
|---|---|---|---|
| 01 | [Asistente con IA para tu comunidad](proyectos/01-asistente-ia-para-tu-comunidad.md) | `05`, `32`, `33` | Inicial a intermedio |
| 02 | [App con login y datos](proyectos/02-app-con-login-y-datos.md) | `20`, `21`, `clerk/app-ejemplo` | Avanzado |
| 03 | [Pagos verificables en Avalanche Fuji](proyectos/03-pagos-verificables-en-fuji.md) | `12`, `13`, `41` | Inicial a avanzado |
| 04 | [Agente Web3 que lee Fuji](proyectos/04-agente-web3-que-lee-fuji.md) | `40`, `15`, `16` | Intermedio |
| 05 | [Formularios inteligentes que guardan y clasifican](proyectos/05-formularios-inteligentes.md) | `04`, `30`, `34` | Inicial a intermedio |
| 06 | [Tu contrato en Fuji y n8n escuchando sus eventos](proyectos/06-tu-contrato-en-fuji.md) | `16`, `avalanche/contratos` | Avanzado |
| 07 | [Impacto ambiental o social: reportes ciudadanos](proyectos/07-impacto-ambiental-o-social.md) | `30`, `34` | Intermedio |
| 08 | [Automatizá tu emprendimiento](proyectos/08-automatiza-tu-emprendimiento.md) | `30`, `31`, `32`, `33` | Inicial a intermedio |
| 09 | [Traducí y resumí con Google Cloud](proyectos/09-traducir-y-resumir-con-google-cloud.md) | `52` | Intermedio |
| 10 | [Reportes ambientales con foto](proyectos/10-reportes-ambientales-con-foto.md) | `67`, `60` | Inicial a intermedio |

Los números son los ids de los workflows del repo [nodo-cero-bo/workflows](https://github.com/nodo-cero-bo/workflows): cada guía los enlaza a su carpeta.

### Para pensar, presentar y seguir

| Guía | Para qué |
|---|---|
| [Las líneas de la hackathon](lineas/README.md) | Las cuatro líneas, con su ruta por nivel, sus workflows, ideas para Santa Cruz y Bolivia y cómo mostrarlas. |
| [Ganadores y menciones](ganadores-y-menciones.md) | Los tres lugares y las dos menciones especiales: qué reconoce cada una y cómo contar en la demo qué usaste. |
| [Glosario](glosario.md) | Cada palabra nueva en una a tres frases simples, con un ejemplo. |
| [Preguntas frecuentes](preguntas-frecuentes.md) | Los miedos y las dudas de siempre: si rompés algo, si te cobran, qué hacer cuando te trabás. |
| [Banco de ideas](ideas.md) | Ideas por área (educación, salud, ambiente, emprendimiento, comunidad, finanzas y Web3), cada una con los workflows para arrancar. |
| [Cómo presentar tu proyecto](presentar.md) | Problema, solución, demo en vivo y qué sigue. Con un guion para completar, una lista para revisar y un plan B. |
| [Seguir construyendo](seguir-construyendo.md) | Guardar tus workflows, publicarlos en tu GitHub, documentarlos, registrar el proyecto y seguir aprendiendo. |
| [Recursos de Avalanche](avalanche/recursos.md) | Core Wallet, faucet, explorador, Avalanche Academy, Team1 y la documentación de la C-Chain. |
| [Recursos de Google Cloud](google-cloud/recursos.md) | Qué servicio sirve para qué, con qué nodo, credencial y rol, cuánto cuesta e ideas para combinarlos. |

## Cómo están armadas

Todas las guías siguen la misma forma, para que sepas dónde buscar:

1. **De un vistazo**: para quién es, qué vas a lograr, el tiempo estimado y qué necesitás antes de empezar.
2. **Pasos** numerados, de a uno, con los nombres de los botones tal como aparecen en cada herramienta (en inglés, como los vas a ver en pantalla).
3. **Si algo falla**: una tabla con lo que ves y qué probar.
4. **Para seguir**: la siguiente guía y la documentación oficial.

Lo opcional viene plegado: tocá el título para abrirlo. Las guías de proyecto suman **Cómo presentarlo en la demo**, y el tutorial, en cada paso, **Qué vas a ver** y **Cómo sabés que funcionó**. Cada palabra nueva tiene su explicación en el [glosario](glosario.md).

Las pantallas de n8n Cloud, Supabase, Clerk y Core cambian cada tanto. Si un botón no está exactamente donde dice la guía, buscá el nombre de la sección (por ejemplo, **API keys** o **Webhooks**) y seguí desde ahí.

## Tres cuidados

- **Tus credenciales son tuyas.** Cada persona conecta las suyas en su n8n. Ninguna clave va en una nota, una captura, un chat ni un commit.
- **Nada de datos personales.** En los formularios, los documentos para la IA y la demo, usá datos inventados o públicos.
- **La frase de recuperación es la wallet.** Nadie de la organización ni de la mentoría te la va a pedir. Usá una wallet nueva, separada de cualquiera con plata real.

<details>
<summary>La agenda del sábado 21 de noviembre</summary>

| Hora | Qué pasa |
|---|---|
| 08:00 | Acreditación y café |
| 12:00 | Almuerzo |
| 14:30 | Refrigerio |
| 15:00 | Presentaciones |
| 15:45 | Cierre, menciones y foto grupal |
| 16:00 | Fin |

Equipos de hasta cuatro personas. Antes de presentar, registrá tu proyecto en la [vitrina](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml) y repasá [cómo presentar](presentar.md).

</details>

## Sumá o corregí algo

Si una guía tiene un paso que ya no coincide con la pantalla, un enlace roto o algo que se puede explicar mejor, abrí un issue o mandá un pull request.

Antes de mandarlo, corré el auditor de las guías. Revisa las reglas de texto, la estructura de cada guía, los enlaces internos y los enlaces al repo de workflows (necesita Node 18 o más nuevo):

```bash
node tools/auditar_guias.mjs                 # reglas, estructura y enlaces internos
node tools/auditar_guias.mjs --red           # además, prueba en vivo cada enlace externo
node tools/auditar_guias.mjs --workflows ../workflows   # además, confirma que existan las carpetas de los workflows
```

El mismo auditor corre en cada push con GitHub Actions ([`.github/workflows/auditar.yml`](.github/workflows/auditar.yml)).

## Con quiénes lo hacemos

<p align="center"><sub>PRESENTA</sub><br><br>
  <a href="https://n8n.io"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/n8n-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/n8n-claro.png" height="48" alt="n8n"></picture></a>
</p>

<p align="center"><sub>CON EL APOYO DE</sub><br><br>
  <a href="https://supabase.com"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/supabase-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/supabase-claro.png" height="30" alt="Supabase"></picture></a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://clerk.com"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/clerk-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/clerk-claro.png" height="32" alt="Clerk"></picture></a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/team1-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/team1-claro.png" height="30" alt="Team1"></picture></a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.aspireleaders.org"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/aspire-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/aspire-claro.png" height="40" alt="Aspire Institute"></picture></a>
</p>

<p align="center"><sub>EN COLABORACIÓN CON</sub><br><br>
  <a href="https://www.instagram.com/wtmsantacruz/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/wtm-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/wtm-claro.png" height="36" alt="Women Techmakers Santa Cruz"></picture></a>
</p>

<p align="center"><sub>SEDE</sub><br><br>
  <a href="https://www.santacruz.gob.bo"><picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/gobierno-oscuro.png"><img src="https://raw.githubusercontent.com/nodo-cero-bo/guias/main/assets/aliados/gobierno-claro.png" height="40" alt="Gobierno Autónomo Departamental de Santa Cruz"></picture></a>
</p>

## Licencia y marcas

Las guías de este repo están bajo la licencia [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](LICENSE): podés copiarlas, adaptarlas y compartirlas para cualquier fin, citando a Nodo Cero como fuente, enlazando la licencia e indicando si hiciste cambios ([resumen de la licencia en español](https://creativecommons.org/licenses/by/4.0/deed.es)). El auditor de [`tools/`](tools) es código bajo licencia MIT, como indica su encabezado.

n8n, Supabase, Clerk, Avalanche, Core, Team1, Aspire Institute, Google Cloud, Google Gemini, OpenAI, Telegram, GitHub, Women Techmakers, el Gobierno Autónomo Departamental de Santa Cruz y los demás nombres y logos que aparecen en estas guías son marcas de sus dueños. Los logos de la cabecera y de esta página son los oficiales de cada marca, se usan para nombrar a quienes hacen posible el evento y no entran en la licencia de este repo.
