# Parte 8: Tu demo

Prepará la demo de las 15:00: qué mostrar y en qué orden, el canvas prolijo, el plan B por si falla la red, el registro en la vitrina y cómo contar qué usaste. Ensayala dos veces y listo.

| De un vistazo | |
|---|---|
| **Para quién es** | Para cada equipo que va a presentar, aunque sea su primera vez frente a público y aunque el proyecto no esté terminado. |
| **Qué vas a lograr** | Una demo que se entiende a la primera, con el flujo funcionando, un respaldo listo y el proyecto registrado. |
| **Tiempo estimado** | 30 minutos, más dos ensayos. |
| **Qué necesitás** | Tu flujo (el de la [parte 7](07-tu-propio-flujo.md) o el de tu proyecto) y, si suma, un celular para mostrar el formulario o el chat. |

Una [demo](../glosario.md#demo) no es un examen: es contar una historia corta y mostrar que funciona. El tiempo de cada equipo y el orden los cuenta la organización en el momento, así que armala para que se entienda aunque tengas que acortarla.

## Pasos

### 1. Elegí la historia en una frase

Completá esta frase en equipo:

```text
[Quién] tiene este problema: [qué le pasa]. Hicimos [nombre], que [qué hace] con n8n.
```

Por ejemplo: «Quien recibe un pago en AVAX de prueba no sabe si llegó de verdad. Hicimos un verificador donde pegás el hash y n8n te lo confirma leyendo Fuji».

**Cómo sabés que funcionó:** alguien de afuera del equipo la escucha y la repite con sus palabras.

### 2. Armá la demo en tres momentos

| Momento | Qué mostrás | En el flujo de la parte 7 |
|---|---|---|
| La entrada | Lo que hace una persona | Abrir el formulario desde el celular y pegar un hash. |
| Lo que pasa en n8n | El canvas y la ejecución | El workflow con los nodos en verde y **Armar el resumen** abierto. |
| El resultado | Lo que recibe la persona | La página final y el enlace al explorador de Fuji. |

**Cómo sabés que funcionó:** podés hacer los tres momentos de corrido sin buscar nada.

### 3. Prolijá el canvas

Es lo primero que se ve en la pantalla grande.

1. Ponele a cada nodo un nombre que diga qué hace (clic derecho, **Rename**), como «Leer la transacción» en vez de «HTTP Request1».
2. Ordenalo: clic derecho en el canvas, **Tidy up workflow**.
3. Sumá una nota que explique el flujo en dos líneas: clic derecho, **Add sticky note**.
4. Agrandá el navegador (`Ctrl` + `+`) para que se lea desde el fondo de la sala.

**Cómo sabés que funcionó:** alguien que nunca vio el workflow entiende qué hace mirando los nombres.

### 4. Publicá y probá como lo haría alguien de afuera

1. Si tu flujo empieza con un formulario, un chat o un webhook, tocá **Publish**.
2. Probalo con la URL de producción, desde un celular que no sea el tuyo.

**Cómo sabés que funcionó:** el resultado llega y la ejecución aparece en **Executions**.

### 5. Prepará el plan B

Las redes de los eventos fallan. Tené listo, antes de pasar:

1. **Una ejecución exitosa** en la pestaña **Executions**: abrirla muestra qué entró y qué salió de cada nodo, aunque no haya red.
2. **Capturas o un video corto** del flujo funcionando.
3. **Datos fijados**: en el primer nodo, **Pin data**, para poder ejecutar el resto sin esperar el formulario ([glosario](../glosario.md#pin-data)). Desfijalos después.
4. **Lo que se escribe, ya escrito**: el hash, la dirección o la pregunta en un bloc de notas, para copiar y pegar.

**Cómo sabés que funcionó:** si te sacan internet ahora mismo, igual podés mostrar el resultado.

### 6. Cuidá lo que se ve

1. No abras la ventana de ninguna credencial con la pantalla compartida.
2. Que no aparezca ninguna clave, correo ni teléfono: ni en el canvas, ni en las notas, ni en las tablas.
3. Usá datos inventados o públicos, nunca de personas reales.

### 7. Registrá el proyecto en la vitrina

1. Abrí **[Registrá tu proyecto](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml)** (hace falta una cuenta de GitHub).
2. Completá el nombre, el equipo, qué hace y qué tecnologías usa. Si usaste Fuji, sumá el hash de una transacción (es un dato público).

**Cómo sabés que funcionó:** tu proyecto aparece en la [vitrina](https://github.com/nodo-cero-bo/proyectos/issues) con su número.

### 8. Contá qué usaste

Hay tres lugares y dos menciones especiales: «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud». Si tu proyecto usa Fuji o Google Cloud, decilo con claridad y mostralo funcionando: la transacción en el explorador, el nodo de Google en el canvas. Cómo contarlo, en [Ganadores y menciones](../ganadores-y-menciones.md).

### 9. Ensayá dos veces

1. Hacé la demo completa en voz alta, con alguien del equipo mirando el reloj.
2. Decidan quién habla y quién maneja la compu.
3. Pensá dos preguntas que te pueden hacer. Si te preguntan algo que no sabés, «no lo probamos todavía» es una buena respuesta.

**Cómo sabés que funcionó:** la segunda vez sale más corta y más tranquila que la primera.

## Si algo falla

| Lo que pasa | Qué hacer |
|---|---|
| Se cae la red justo en la demo | Pasá al plan B sin disculparte de más: «Les muestro la ejecución que corrimos hace un rato». |
| Un nodo da error en vivo | Abrilo y leé el mensaje: mostrar cómo se diagnostica también es parte de la demo. Si no sale rápido, pasá a la ejecución guardada. |
| La IA responde algo raro | Contalo con naturalidad («los modelos a veces se equivocan; por eso le pedimos que diga cuando no sabe») y mostrá una respuesta buena guardada. |
| No terminaron todo | Mostrá lo que funciona y contá qué falta. Una parte que anda vale más que un todo que no arranca. |
| Te quedás sin tiempo | Saltá directo al resultado y a qué harían después. |

## Para seguir

- La guía completa, con un guion para completar y una lista para revisar: [Cómo presentar tu proyecto](../presentar.md).
- Después del sábado: [Seguir construyendo](../seguir-construyendo.md), para guardar tus workflows antes de que termine la prueba de n8n Cloud.
- Terminaste el tutorial. Para que tu proyecto crezca: tu [línea](../lineas/README.md) y las [guías de proyecto](../proyectos/README.md).

---

[Tutorial](README.md) · Anterior: [Parte 7](07-tu-propio-flujo.md) · [Índice](../README.md)
