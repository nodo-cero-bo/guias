# Cómo presentar tu proyecto

Cómo armar una demo clara: el problema, tu solución, el flujo funcionando en vivo y qué sigue. Con un guion para completar, una lista para revisar antes de pasar y un plan B por si algo falla.

| De un vistazo | |
|---|---|
| **Para quién es** | Para cada equipo que va a mostrar su proyecto, aunque nunca haya presentado frente a público. |
| **Qué vas a lograr** | Una demo que se entiende a la primera, con el flujo de n8n funcionando y un respaldo listo. |
| **Tiempo estimado** | 45 minutos para armarla y ensayarla dos veces. |
| **Qué necesitás** | El proyecto andando (o una parte), una compu con tu n8n abierto y, si suma, un celular para mostrar el formulario, el chat o Core Wallet. |

En Nodo Cero, las presentaciones empiezan a las 15:00. El tiempo de cada equipo y el orden los cuenta la organización en el momento: armá la demo para que se entienda aunque tengas que acortarla.

## Pasos

### 1. Armá la historia en cuatro partes

| Parte | Qué contás | Ejemplo |
|---|---|---|
| **El problema** | Para quién es y qué le pasa hoy. Concreto, con una situación real. | «La directiva contesta las mismas preguntas todos los días por chat.» |
| **La solución** | Qué hace tu proyecto, en una o dos frases. Sin tecnicismos. | «Un asistente que responde con los documentos de la organización, a cualquier hora.» |
| **La demo en vivo** | El flujo funcionando, de la entrada a la salida. | Una pregunta en el chat, la respuesta y la ejecución en n8n. |
| **Qué sigue** | Qué le falta para usarse de verdad y quién lo usaría. | «Sumar los reglamentos y probarlo con el centro de estudiantes.» |

La demo es el corazón. Si tenés que recortar, recortá diapositivas, no la demo.

### 2. Completá tu guion

Copiá esto en un documento del equipo y completalo:

```text
PROBLEMA:   [quién] tiene este problema: [qué le pasa, con un ejemplo].
SOLUCIÓN:   Hicimos [nombre], que [qué hace] usando n8n [y qué más: IA, Supabase, Clerk, Fuji].
DEMO:       1. Muestro [la entrada: un formulario, un chat, un pago].
            2. Muestro [qué pasa en n8n].
            3. Muestro [el resultado: la fila, la respuesta, la verificación].
QUÉ SIGUE:  Para usarlo de verdad falta [esto]. Lo usaría [quién].
EQUIPO:     [nombres] y qué hizo cada una.
```

### 3. Prepará la demo para que se vea

1. **Una sola pestaña por paso**: dejá abiertas, en orden, las pestañas que vas a usar (el formulario, n8n, Supabase, el explorador).
2. **Zoom**: agrandá el navegador (`Ctrl` + `+`) para que el canvas y las tablas se lean desde el fondo de la sala.
3. **El canvas prolijo**: nodos con nombres claros, alineados de izquierda a derecha y con alguna nota que explique los pasos clave. Es lo primero que se ve.
4. **Datos de ejemplo cargados**: que la tabla, el chat o el resumen no arranquen vacíos. Datos inventados, nunca de personas reales.
5. **Lo que se escribe, ya escrito**: hashes, direcciones y preguntas en un bloc de notas para copiar y pegar, no para tipear en vivo.
6. **Credenciales cerradas**: no abras la ventana de una credencial ni el panel de claves de ningún servicio con la pantalla compartida.

### 4. Prepará el plan B

Las redes de los eventos fallan. Tené listo:

1. **Capturas o un video corto** del flujo funcionando, grabado cuando anduvo bien.
2. **Una ejecución exitosa** en la pestaña **Executions** de n8n: abrirla muestra qué entró y qué salió de cada nodo, aunque no haya red para correrlo de nuevo.
3. **Datos fijados** (**Pin data**) en el disparador, para poder ejecutar el resto del workflow sin esperar un formulario o un webhook. Desfijalos después.
4. **Si usás Fuji**, un hash de respaldo ya verificado.

### 5. Ensayá

1. Hacé la demo completa dos veces, en voz alta, con alguien del equipo mirando el reloj.
2. Decidan quién habla en cada parte y quién maneja la compu.
3. Pensá dos preguntas que te pueden hacer y cómo las responderías. Si te preguntan algo que no sabés, decilo: «no lo probamos todavía» es una buena respuesta.

### 6. Registrá el proyecto antes de presentar

Registralo en la vitrina con el formulario de **[Registrá tu proyecto](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml)**: nombre, equipo, qué hace, tecnologías y, si querés, el enlace a tu repo o video y un hash de Fuji. Así queda a la vista de la mentoría, de los aliados y de quien quiera seguir tu trabajo.

## Lista para revisar antes de pasar

- [ ] El problema se entiende en una frase.
- [ ] La demo muestra la entrada, lo que pasa en n8n y el resultado.
- [ ] Los workflows que usa la demo están publicados (si empiezan con un formulario, un webhook, un chat o un horario) y probados con la **Production URL**.
- [ ] Las pestañas están abiertas y en orden, y el zoom se lee desde lejos.
- [ ] Los datos de ejemplo están cargados y no son de personas reales.
- [ ] Ninguna clave, correo ni teléfono a la vista: ni en el canvas, ni en las notas, ni en las tablas.
- [ ] El plan B está listo: capturas o video, una ejecución exitosa y, si aplica, un hash de respaldo.
- [ ] La batería de la compu y del celular está cargada.
- [ ] El proyecto está registrado en la [vitrina](https://github.com/nodo-cero-bo/proyectos).
- [ ] Ensayaron al menos dos veces.

## Si tu proyecto usa Fuji, Google Cloud o Clerk

Contalo con claridad en la demo y en el registro. Hay tres lugares y dos menciones especiales, «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud»: qué reconoce cada una y cómo contarlo, en [Ganadores y menciones](ganadores-y-menciones.md).

- **Fuji**: mostrá la transacción o el contrato en el [explorador de Fuji](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) y qué hace n8n con esos datos.
- **Google Cloud**: nombrá cada servicio que usaste (Vertex AI, Cloud Translation, Cloud Natural Language, Cloud Storage) y mostrá su nodo en el canvas y el resultado, sin abrir la credencial.
- **Clerk**: mostrá el login y cómo n8n verifica quién pide cada cosa (por ejemplo, el `401` cuando no hay sesión).

## Si algo falla

| Lo que pasa | Qué hacer |
|---|---|
| Se cae la red justo en la demo | Pasá al plan B sin disculparte de más: «Les muestro la ejecución que corrimos hace un rato». |
| Un nodo da error en vivo | Abrilo y leé el mensaje: mostrar cómo se diagnostica también es parte de la demo. Si no sale rápido, pasá a la ejecución guardada. |
| La IA responde algo raro | Contalo con naturalidad («los modelos a veces se equivocan; por eso le pedimos que cite la fuente») y mostrá una respuesta buena guardada. |
| Te quedás sin tiempo | Saltá directo al resultado de la demo y a «qué sigue». |
| Se te olvida lo que ibas a decir | Mirá el guion. Para eso está. |

## Para seguir

- Después del evento: [Seguir construyendo](seguir-construyendo.md), para guardar, publicar y documentar tu proyecto.
- Para documentarlo, la [plantilla de README](https://github.com/nodo-cero-bo/proyectos/blob/main/PLANTILLA_README.md) del repo de proyectos.
- Para fijar datos y probar sin depender de la red: [Pin and mock data](https://docs.n8n.io/build/work-with-data/pin-and-mock-data) y cómo [depurar ejecuciones](https://docs.n8n.io/build/understand-workflows/understand-executions/debug-executions) en la documentación de n8n.

---

[Índice](README.md) · [Guías de proyecto](proyectos/README.md) · [Seguir construyendo](seguir-construyendo.md)
