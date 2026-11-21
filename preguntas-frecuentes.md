# Preguntas frecuentes

Las dudas y los miedos de siempre, respondidos sin vueltas: si rompés algo, si te van a cobrar, si hace falta programar, qué hacer cuando te trabás y cómo cuidar tus claves y tu wallet.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien llega con un poco de miedo, para quien nunca hizo una hackathon y para quien se trabó a mitad de camino. |
| **Qué vas a lograr** | Saber qué podés tocar sin miedo, qué cuesta plata y qué no, y a quién recurrir. |
| **Tiempo estimado** | 10 minutos de lectura. Volvé cuando te surja una duda. |
| **Qué necesitás** | Nada. Si una palabra no la conocés, está en el [glosario](glosario.md). |

Saltá a una parte: [Miedos](#miedos) · [Plata y cuentas](#plata-y-cuentas) · [Cuando te trabás](#cuando-te-trabás) · [Credenciales y datos](#credenciales-y-datos) · [Avalanche Fuji](#avalanche-fuji) · [Google Cloud](#google-cloud) · [El día del evento](#el-día-del-evento)

## Miedos

### ¿Rompo algo si toco?

No. Lo peor que puede pasar es que un nodo quede en rojo con un mensaje de error, y eso se arregla. Tu n8n es tuyo: nadie más ve tus workflows y ningún cambio tuyo afecta a otra persona.

Tres redes de seguridad, para probar con calma:

1. **Importá otra copia.** Los workflows originales siguen intactos en el [repo](https://github.com/nodo-cero-bo/workflows). Podés traerlos de nuevo cuantas veces quieras.
2. **Duplicá antes de cambiar.** Menú **···** del workflow, **Duplicate**: tocás la copia y el original queda como estaba.
3. **Volvé atrás.** n8n guarda un historial de versiones: menú **···**, **Version history**.

### No sé programar, ¿puedo participar?

Sí. n8n se arma conectando nodos con el mouse, y los workflows de Nodo Cero ya traen el código escrito y comentado. Además, un proyecto necesita mucho más que código: entender el problema, conseguir datos de ejemplo, escribir los mensajes, probar como lo haría alguien de afuera y contar la demo. Si nunca usaste n8n, seguí el tutorial [De cero a tu demo](tutorial/README.md).

### ¿Y si todo el mundo sabe más que yo?

Pasa menos de lo que parece: mucha gente en la sala abre n8n por primera vez hoy. Preguntar es parte de la hackathon, y la mentoría está para eso. Una pregunta tuya ayuda a otras que no se animaron a hacerla.

### ¿Y si no llego a terminar?

Es lo más común en una hackathon, y no pasa nada. Mostrá la parte que funciona, contá qué falta y qué harías después. Una demo chica que anda vale más que una grande que no arranca. Ideas para eso en [Cómo presentar tu proyecto](presentar.md).

### Las pantallas están en inglés, ¿me voy a perder?

Las guías escriben cada botón tal como aparece, en inglés y en **negrita**, y te dicen qué hace. Si un botón no está exactamente donde dice la guía, buscá el nombre de la sección y seguí desde ahí. Las herramientas cambian sus pantallas cada tanto.

## Plata y cuentas

### ¿Me van a cobrar?

Para la hackathon no hace falta pagar nada. Esto es lo que pide cada servicio:

| Servicio | ¿Pide tarjeta? | Lo que tenés que saber |
|---|---|---|
| n8n Cloud | No | Prueba gratis de 14 días. Al terminar, si no pasás a un plan pago, la instancia se borra: exportá tus workflows antes ([cómo](seguir-construyendo.md#1-guardá-tus-workflows-antes-de-que-termine-la-prueba)). |
| Supabase | No | Plan gratuito. Pausa los proyectos que no se usan durante una semana; se reactivan desde el panel. |
| Clerk | No | Plan gratuito. |
| Gemini (Google AI Studio) | No | Nivel gratuito con límites por minuto, que alcanza para la hackathon. |
| Core Wallet y Fuji | No | La wallet es gratis y los AVAX de Fuji son de prueba: no valen plata. |
| Google Cloud | Depende | La prueba gratis pide un medio de pago y no te cobra salvo que pases a una cuenta paga. Si tu equipo recibió créditos, seguí su enlace. Leé [Google Cloud](00-empezar/08-google-cloud.md) antes y creá la alerta de presupuesto. |
| OpenAI (opcional) | Sí | Se paga por uso. No hace falta: los workflows vienen con Gemini. |

Ante la duda, no cargues ninguna tarjeta y preguntá a la organización.

### ¿Qué pasa con mis cuentas después del sábado?

Siguen siendo tuyas. Lo único que vence pronto es la prueba de n8n Cloud, a los 14 días: antes de eso, exportá tus workflows y guardalos en tu compu o en tu GitHub. Todo el paso a paso está en [Seguir construyendo](seguir-construyendo.md).

### ¿Puedo usar n8n instalado en mi compu en vez de n8n Cloud?

Sí. Los workflows de Nodo Cero están probados en n8n 2.48.7: con esa versión o una más nueva se importan sin problemas. Lo único distinto es que los formularios y los webhooks de tu compu no se pueden abrir desde otros celulares, salvo que sepas exponerlos a internet.

## Cuando te trabás

### ¿Qué hago si me trabo?

Seguí este orden, de lo más rápido a lo más lento:

1. **Leé el error.** Abrí el nodo en rojo: arriba del **Output** está el mensaje. Casi siempre dice qué falta (una credencial, un dato, un permiso).
2. **Mirá la ejecución.** En la pestaña **Executions**, abrí la última y revisá qué entró y qué salió de cada nodo. El problema suele estar en el nodo de antes.
3. **Buscá en «Si algo falla».** Cada guía termina con una tabla de errores comunes y su arreglo.
4. **Preguntá a la mentoría.** Si después de quince minutos seguís igual, levantá la mano. Llevá el mensaje de error a la vista: ayuda mucho.
5. **Preguntá a la comunidad de n8n**, en [community.n8n.io](https://community.n8n.io/), si es después del evento.

### Importé un workflow y aparece lleno de avisos

Es normal. Los workflows no traen ninguna clave: los nodos que necesitan una credencial muestran un aviso hasta que conectás la tuya. Abrí cada uno y elegí o creá la credencial ([guía 03](00-empezar/03-credenciales.md)). Los workflows sin credenciales, como `01-hola-n8n` o `12-fuji-leer-transaccion`, andan apenas los importás.

### Toqué **Execute workflow** y no pasó nada

Fijate cómo empieza el workflow. Si empieza con un formulario, **Execute workflow** abre el formulario de prueba en otra pestaña y espera a que lo envíes. Si empieza con un webhook, espera a que alguien llame a su URL de prueba. Si empieza con un chat, se prueba con **Open chat**. La tabla de [Importar workflows](00-empezar/02-importar-workflows.md#después-de-importar-credenciales-datos-y-una-prueba) dice cómo se prueba cada uno.

### El formulario o el webhook andaban y dejaron de andar

Seguramente estás usando la URL de prueba, que anda nada más mientras el editor espera. Para que funcione siempre, publicá el workflow con **Publish** y usá la URL de producción ([glosario](glosario.md#url-de-prueba-y-url-de-producción)).

## Credenciales y datos

### ¿Qué es una credencial y dónde la pongo?

Es la llave que n8n usa para entrar a otro servicio en tu nombre. Se crea dentro de n8n, una vez, y la usan todos los nodos que la necesiten. Va en n8n y en ningún otro lado: ni en una nota, ni en un nodo de texto, ni en una captura. Todo el detalle en la [guía de credenciales](00-empezar/03-credenciales.md).

### ¿Le paso mis claves a mi equipo?

No. Cada persona crea sus propias cuentas y conecta sus propias credenciales. Para trabajar juntas, pásense el workflow exportado (menú **···**, **Export JSON**): las claves no viajan dentro del archivo, viaja nada más el nombre que le pusiste a la credencial.

### Se me filtró una clave, ¿qué hago?

Entrá al panel del servicio, borrala o rotala (generá una nueva), y actualizá la credencial en n8n. Borrar el mensaje o la captura no alcanza: la clave vieja hay que darla de baja.

### ¿Qué datos puedo usar en mi proyecto?

Datos inventados o públicos. Nada de nombres, teléfonos, correos ni direcciones de personas reales en los formularios, los documentos para la IA ni la demo. En el nivel gratuito de Gemini, Google puede usar lo que mandás para mejorar sus productos: otra razón para no mandarle datos de nadie.

### ¿La IA se puede equivocar?

Sí, a veces con mucha seguridad. Por eso los workflows de Nodo Cero le piden que diga «no sé» en vez de inventar, y por eso existe el RAG, que la hace responder con tus documentos ([glosario](glosario.md#rag)). Si traducís a quechua, aimara o guaraní, pedile a una persona que hable el idioma que revise el resultado antes de mostrarlo como definitivo.

## Avalanche Fuji

### ¿Necesito plata o criptomonedas de verdad?

No. Fuji es la red de prueba de Avalanche: sus AVAX no valen nada y se piden gratis en el [faucet](https://build.avax.network/console/primary-network/faucet?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026). Para la hackathon, usá una wallet nueva, separada de cualquiera que tenga plata real.

### ¿Es seguro conectar mi wallet?

Los workflows de Nodo Cero leen la red: nunca piden tu frase de recuperación ni tu clave privada, y n8n nunca toca tu wallet. Si algo o alguien te pide la frase de recuperación, es una estafa. Nadie de la organización ni de la mentoría te la va a pedir.

### ¿El RPC público de Fuji tiene límites?

Sí. El RPC público (`https://api.avax-test.network/ext/bc/C/rpc`) es gratis, no pide clave y lo comparte todo el mundo, así que tiene límites de uso. Si le hacés muchos pedidos seguidos, puede tardar o rechazar algunos. Para no toparte con eso:

- Probá a mano, con **Execute workflow**, en vez de dejar un workflow pidiendo datos sin parar.
- Si usás un **Schedule Trigger**, que corra cada algunos minutos, no cada pocos segundos.
- Si un pedido falla, esperá unos segundos y probá de nuevo. En el nodo HTTP Request, **Settings**, **Retry On Fail** reintenta por su cuenta.
- El «último bloque» a veces llega uno atrasado, porque el RPC reparte los pedidos entre varios servidores. Es normal.

### Mandé AVAX y no aparece

Esperá unos segundos y revisá que Core esté en **Testnet Mode** y que hayas usado la dirección que empieza con `0x`. Si tenés el hash, buscalo en el [explorador de Fuji](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026): ahí ves si salió bien. Más casos en [Core Wallet y Avalanche Fuji](00-empezar/06-core-wallet-y-fuji.md#si-algo-falla).

## Google Cloud

### ¿Necesito Google Cloud para usar Gemini?

No. Para Gemini alcanza con una clave gratis de Google AI Studio ([guía 07](00-empezar/07-clave-gemini.md)), que es lo que usan los workflows de IA. Google Cloud suma otros servicios: traducción, análisis de texto, archivos y Gemini a través de Vertex AI. Los workflows de la carpeta [`50-google-cloud`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud) los usan.

### ¿Me pueden cobrar en Google Cloud?

Puede pasar si usás más de lo que cubren los créditos y el nivel gratuito y tu cuenta es paga. Para que no te pase: creá una alerta de presupuesto apenas crees el proyecto, usá lo justo para la demo y, al terminar, borrá la clave de la cuenta de servicio y apagá el proyecto. Todo está en [Google Cloud](00-empezar/08-google-cloud.md).

## El día del evento

### ¿Qué línea elijo?

La que se acerque más al problema que quieren resolver o a lo que quieren aprender. Las cuatro están explicadas, con su ruta paso a paso, en [Las líneas de la hackathon](lineas/README.md). Cualquier línea puede llegar a los tres primeros lugares y a las dos menciones especiales.

### ¿Tengo que usar todas las tecnologías?

No. n8n es el centro, y de ahí sumás lo que tu proyecto necesite: IA, una base de datos, login, Fuji o Google Cloud. Un proyecto simple y claro se entiende mejor que uno que junta todo.

### ¿Cómo se eligen los ganadores?

Hay tres equipos ganadores (primero, segundo y tercer lugar) y dos menciones especiales: «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud». Se anuncian en el cierre, a las 15:45. Estas guías no definen criterios ni puntajes: si tenés una duda sobre eso, preguntale a la organización. Lo que sí está escrito es qué reconoce cada mención y cómo contar en la demo qué usaste: [Ganadores y menciones](ganadores-y-menciones.md).

### ¿Cuánto dura cada presentación?

El tiempo de cada equipo y el orden los cuenta la organización en el momento. Armá la demo para que se entienda aunque tengas que acortarla ([Cómo presentar tu proyecto](presentar.md)).

### ¿Y si la red del lugar falla justo en la demo?

Tené un plan B: capturas o un video corto del flujo funcionando, una ejecución exitosa guardada en **Executions** y, si usás Fuji, un hash ya verificado. Así se muestra igual ([plan B](presentar.md#4-prepará-el-plan-b)).

## Si algo falla

| Lo que pasa | Qué probar |
|---|---|
| Tu duda no está en esta página | Preguntale a la mentoría o a la organización. Si creés que le va a servir a más gente, abrí un issue en este repo para sumarla. |
| Una respuesta no coincide con lo que ves en pantalla | Las herramientas cambian. Buscá el nombre de la sección en la pantalla y avisanos con un issue. |
| Te trabaste y no sabés por dónde empezar | Volvé a [¿Qué hago si me trabo?](#qué-hago-si-me-trabo) y seguí los pasos en orden. |

## Para seguir

- Las palabras nuevas, explicadas: [Glosario](glosario.md).
- Si nunca usaste n8n: [De cero a tu demo](tutorial/README.md).
- La comunidad de n8n: [community.n8n.io](https://community.n8n.io/) y los cursos gratis de [learn.n8n.io](https://learn.n8n.io/).

---

[Índice](README.md) · [Glosario](glosario.md) · [Tutorial](tutorial/README.md)
