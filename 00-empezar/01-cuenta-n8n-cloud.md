# Tu cuenta de n8n Cloud

Creá tu cuenta de prueba en n8n Cloud, recorré el editor y corré tu primer workflow: la base de todo lo que vas a construir en la hackathon y después.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien nunca usó n8n y para quien ya lo usó en su compu y quiere su espacio en la nube. |
| **Qué vas a lograr** | Tener tu instancia de n8n andando, moverte por el editor con confianza y leer tu primera ejecución. |
| **Tiempo estimado** | 20 minutos |
| **Qué necesitás** | Un correo al que puedas entrar y un navegador actualizado (Chrome, Edge o Firefox). |

## Primero, cuatro ideas

- Un **workflow** es una receta: pasos que corren en orden, de izquierda a derecha.
- Cada paso es un **nodo**. Uno recibe datos, otro los transforma, otro los guarda o los manda a otro servicio.
- El primer nodo es el **trigger** (disparador): decide cuándo arranca todo. Puede ser un clic, un formulario, un mensaje de chat, una hora del día o un pedido a una URL.
- Cada vez que el workflow corre queda una **ejecución**: un registro de qué entró y qué salió de cada nodo. Es tu mejor herramienta para entender y corregir.

<details>
<summary>Más palabras que vas a escuchar hoy</summary>

| Palabra | Qué quiere decir |
|---|---|
| Credencial | La llave guardada que n8n usa para conectarse a un servicio (una clave de API, un usuario y contraseña). Se crea una vez y la usan muchos nodos. |
| Expresión | Un pedacito de código entre llaves dobles, como `{{ $json.nombre }}`, que toma un dato del paso anterior. |
| Item | Cada fila de datos que viaja entre nodos. Si un nodo recibe tres items, en general trabaja tres veces. |
| Publicar | Poner el workflow «en producción» para que corra por su cuenta cuando llega un formulario, un webhook o la hora programada. |
| Canvas | El lienzo donde armás el workflow arrastrando y conectando nodos. |

</details>

## Pasos

### 1. Creá tu cuenta

1. Entrá a [app.n8n.cloud/register](https://app.n8n.cloud/register).
2. Completá tus datos y confirmá tu correo si te lo pide.
3. Elegí el nombre de tu instancia: es la dirección propia de tu n8n, del estilo `tu-nombre.app.n8n.cloud`. Usá algo corto y fácil de recordar.
4. Esperá a que la instancia arranque (puede tardar un par de minutos) y entrá al editor.

> [!NOTE]
> La prueba gratis de n8n Cloud dura 14 días, con las funciones del plan Pro y hasta 1000 ejecuciones, y no pide tarjeta. Si no pasás a un plan pago, al terminar la prueba n8n borra la instancia, y tenés 90 días para descargar tus workflows. Antes del día 14, exportá lo que hiciste: te contamos cómo en [Seguir construyendo](../seguir-construyendo.md#1-guardá-tus-workflows-antes-de-que-termine-la-prueba).

### 2. Recorré el editor

| Dónde | Qué encontrás |
|---|---|
| Menú de la izquierda, **Overview** | Todo lo tuyo junto: workflows, credenciales y ejecuciones. |
| Menú de la izquierda, **Personal** | Tu espacio. Ahí quedan los workflows que creás o importás. |
| Botón **+** arriba a la izquierda | **New workflow** y **New credential**, entre otras cosas. También está el botón **Create** arriba a la derecha de Overview. |
| Encabezado del canvas | El nombre del workflow, el botón **Publish** y el menú **···** (importar, exportar, duplicar, historial de versiones). |
| Pestañas **Editor** y **Executions** | Arriba del canvas: una para armar, otra para ver cada vez que el workflow corrió. |
| Botón **Execute** | Abajo del canvas: ejecuta el workflow a mano para probarlo. |

Cuando abrís un nodo con doble clic ves tres zonas: **Input** a la izquierda (lo que llega), los parámetros en el centro y **Output** a la derecha (lo que sale). La salida se puede mirar como **Table**, **JSON** o **Schema**.

### 3. Armá tu primer workflow en cinco minutos

1. Tocá **+** y elegí **New workflow**. Hacé clic en el nombre de arriba y ponele `Mi primer workflow`.
2. Tocá **Add first step…** y elegí **Trigger manually**. Este trigger arranca el workflow cuando vos tocás el botón.
3. Tocá el **+** que aparece a la derecha del nodo, buscá **Edit Fields (Set)** y agregalo.
4. Dentro del nodo, agregá un campo llamado `saludo` con el valor `Hola desde Nodo Cero`.
5. Agregá otro campo llamado `hora` y en el valor escribí `{{ $now.toFormat('HH:mm') }}`. Vas a ver que el texto se pone de otro color: es una expresión, y n8n la calcula cada vez.
6. Cerrá el nodo y tocá **Execute** (ejecutar el workflow). Abrí el nodo de nuevo y mirá el **Output**: tenés tu primer dato armado por n8n.

> [!TIP]
> No hace falta guardar: n8n guarda cada cambio por su cuenta a los pocos segundos y arma un historial de versiones (menú **···**, **Version history**).

### 4. Mirá tus ejecuciones

1. Arriba del canvas, pasá a la pestaña **Executions**.
2. Elegí la ejecución de recién. Vas a ver el workflow con los datos de esa corrida: hacé clic en cada nodo para ver qué entró y qué salió.
3. Volvé a **Editor** para seguir armando.

Las ejecuciones que lanzás a mano mientras probás no cuentan para el límite del plan; cuentan las de producción (las que arranca un trigger cuando el workflow está publicado).

### 5. Entendé cuándo hace falta publicar

Mientras armás, probás a mano. Pero un workflow que empieza con un formulario, un webhook, un chat o un horario necesita estar **publicado** para funcionar por su cuenta:

1. Tocá **Publish** en el encabezado del canvas (atajo: `Shift` + `P`).
2. Confirmá con **Publish** en la ventana que aparece.
3. Desde ese momento, el formulario y el webhook usan su URL de producción, y el horario corre a la hora que definiste.

Si después cambiás algo, el botón te avisa que hay cambios sin publicar: publicá de nuevo para que la versión nueva quede en producción. Para despublicar, usá **Unpublish** en el menú **···**.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| No te llega el correo de confirmación | Revisá la carpeta de spam o promociones y esperá un par de minutos antes de pedirlo de nuevo. |
| La instancia tarda en abrir | Es normal la primera vez. Esperá y recargá la página. |
| **Publish** aparece gris | No hay cambios para publicar, o el workflow no tiene un trigger que necesite publicarse (con **Trigger manually** se prueba a mano). |
| El formulario o el webhook no responden desde afuera | Fijate que el workflow esté publicado y que estés usando la **Production URL**, no la de prueba. |
| Un nodo queda en rojo | Abrilo: arriba del **Output** está el mensaje de error. Casi siempre es un dato que no llegó o una credencial que falta. |

## Para seguir

- Siguiente guía: [Importar los workflows de la hackathon](02-importar-workflows.md).
- Documentación oficial: [Build your first workflow](https://docs.n8n.io/build-your-first-workflow), [Save and publish workflows](https://docs.n8n.io/build/understand-workflows/save-and-publish-workflows), [Understand executions](https://docs.n8n.io/build/understand-workflows/understand-executions) y los [atajos de teclado](https://docs.n8n.io/build/keyboard-shortcuts).
- Cursos gratis de n8n, paso a paso: [learn.n8n.io](https://learn.n8n.io/).
- Preguntas y respuestas de la comunidad: [community.n8n.io](https://community.n8n.io/).

---

[Índice](../README.md) · Siguiente: [Importar workflows](02-importar-workflows.md)
