# Parte 1: Tu cuenta de n8n

Creá tu cuenta de prueba en n8n Cloud, esperá a que arranque tu espacio y dá una primera vuelta por el editor. Es gratis y no pide tarjeta.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien todavía no tiene n8n. Si ya tenés una cuenta (o n8n 2.48.7 o más nuevo en tu compu), pasá a la [parte 2](02-tu-primer-workflow.md). |
| **Qué vas a lograr** | Tu n8n propio abierto en el navegador y un workflow vacío listo para usar. |
| **Tiempo estimado** | 15 minutos (unos minutos son de espera). |
| **Qué necesitás** | Un correo al que puedas entrar y un navegador actualizado: Chrome, Edge o Firefox. |

n8n es una herramienta para armar automatizaciones conectando pasos: «cuando pase esto, hacé aquello». Cada automatización se llama [workflow](../glosario.md#workflow) y cada paso, [nodo](../glosario.md#nodo).

## Pasos

### 1. Abrí la página de registro

1. Entrá a [app.n8n.cloud/register](https://app.n8n.cloud/register).
2. Completá tu nombre, tu correo y una contraseña nueva (no la de tu correo).

**Qué vas a ver:** un formulario de registro de n8n Cloud. Puede que te pregunte para qué lo vas a usar: respondé lo que quieras, no cambia nada importante.

### 2. Confirmá tu correo

1. Abrí tu correo y buscá el mensaje de n8n.
2. Tocá el enlace o el botón de confirmación, si te lo pide.

**Cómo sabés que funcionó:** volvés a n8n y te deja seguir. Si el correo no llega en un par de minutos, mirá en spam o en promociones.

### 3. Elegí el nombre de tu instancia

Tu instancia es tu n8n propio, con una dirección del estilo `tu-nombre.app.n8n.cloud`.

1. Escribí un nombre corto y fácil de recordar, sin espacios. Por ejemplo, tu nombre y un número.
2. Confirmá y esperá.

**Qué vas a ver:** una pantalla de espera mientras n8n prepara tu espacio. Puede tardar un par de minutos: es normal.

**Cómo sabés que funcionó:** se abre el panel de n8n, con un menú a la izquierda donde dice **Overview**.

> [!NOTE]
> La prueba gratis dura 14 días, con hasta 1000 ejecuciones, y no pide tarjeta. Antes de que termine, exportá tus workflows: está explicado en [Seguir construyendo](../seguir-construyendo.md#1-guardá-tus-workflows-antes-de-que-termine-la-prueba).

### 4. Conocé el panel

| Dónde | Qué es |
|---|---|
| **Overview**, en el menú de la izquierda | Todo lo tuyo junto: workflows, credenciales y ejecuciones. |
| **Personal**, en el mismo menú | Tu espacio: ahí quedan los workflows que creás o importás. |
| El botón **+**, arriba a la izquierda | Para crear cosas nuevas: **New workflow**, **New credential**. |

**Cómo sabés que funcionó:** encontrás los tres en tu pantalla. No hace falta tocar nada todavía.

### 5. Creá un workflow vacío

1. Tocá **+** y elegí **New workflow**.
2. Hacé clic en el nombre de arriba (dice algo como «My workflow») y escribí `Mi primer workflow`.

**Qué vas a ver:** el [canvas](../glosario.md#canvas), un lienzo con puntitos, y en el medio un botón **Add first step…**. Abajo, el botón **Execute workflow**. Arriba, las pestañas **Editor** y **Executions**.

**Cómo sabés que funcionó:** el nombre nuevo aparece arriba. n8n guarda por su cuenta cada cambio a los pocos segundos: no hay botón de guardar que olvidar.

Dejá esta pestaña abierta: en la parte 2 la vas a usar.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| No llega el correo de confirmación | Mirá spam y promociones, esperá dos minutos y pedilo de nuevo. Revisá que el correo esté bien escrito. |
| El nombre de instancia que querés ya existe | Sumale un número o una palabra. Es la dirección de tu n8n y nada más. |
| La instancia tarda mucho en abrir | Esperá unos minutos más y recargá la página. La primera vez es lo más lento. |
| La red del lugar está lenta | Probá con los datos del celular compartidos a la compu, o pedile a alguien del equipo que avance con su cuenta mientras tanto. |
| Ya tenías una cuenta vieja de n8n | Usala, pero fijate la versión: los workflows de Nodo Cero son para n8n 2.48.7 o más nuevo. En n8n Cloud se actualiza desde la consola de la nube ([cómo](https://docs.n8n.io/deploy/use-n8n-cloud/update-your-version)). |

## Para seguir

- Siguiente: [Parte 2: Tu primer workflow](02-tu-primer-workflow.md).
- Más detalle sobre el editor, las ejecuciones y cuándo publicar: [Tu cuenta de n8n Cloud](../00-empezar/01-cuenta-n8n-cloud.md).

---

[Tutorial](README.md) · Siguiente: [Parte 2: Tu primer workflow](02-tu-primer-workflow.md)
