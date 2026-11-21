# Parte 6: Tu agente con Gemini

Sacá una clave gratis de Gemini, conectala a n8n y conversá con tu primer agente de IA: el workflow `05-agente-ia`, que responde como el asistente de Nodo Cero y recuerda lo que le dijiste.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien ya importó y ejecutó workflows ([partes 2 a 5](02-tu-primer-workflow.md)) y nunca armó un agente de IA. |
| **Qué vas a lograr** | Una credencial de Gemini andando, un chat que responde con los datos del evento y un mensaje de sistema escrito por vos. |
| **Tiempo estimado** | 20 minutos |
| **Qué necesitás** | Tu n8n abierto y una cuenta de Google personal. |

## Primero, tres ideas

- Un [**LLM**](../glosario.md#llm) es un modelo de lenguaje: lee un texto y escribe una respuesta. Gemini es el de Google.
- Un [**agente**](../glosario.md#agente) es un LLM con instrucciones, [memoria](../glosario.md#memoria) y, si querés, herramientas.
- Una [**credencial**](../glosario.md#credencial) es la llave que n8n usa para entrar a otro servicio en tu nombre. Esta es la primera que vas a crear.

## Pasos

### 1. Sacá tu clave de Gemini

1. Entrá a [aistudio.google.com/apikey](https://aistudio.google.com/apikey) con tu cuenta de Google y aceptá las condiciones si te lo pide.
2. Si no aparece ninguna clave en la lista, tocá **Create API key**.
3. Copiá la clave.

**Qué vas a ver:** una lista con tu clave, dentro de un proyecto que Google crea por su cuenta.

**Cómo sabés que funcionó:** tenés la clave copiada. Tratala como una contraseña: va en n8n y en ningún otro lado. Si algo no te deja seguir, la [guía 07](../00-empezar/07-clave-gemini.md#si-algo-falla) tiene los errores comunes.

### 2. Importá el workflow

1. Creá un workflow nuevo, hacé clic en el canvas, pegá este enlace con `Ctrl` + `V` y confirmá con **Yes, import**:

   ```text
   https://raw.githubusercontent.com/nodo-cero-bo/workflows/main/00-fundamentos/05-agente-ia/workflow.json
   ```

2. Ponele de nombre `Mi primer agente`.

**Qué vas a ver:** **Mensaje en el chat** conectado a **Agente de IA**, y debajo del agente dos nodos redondos: **Modelo Gemini** y **Memoria simple**. **Modelo Gemini** muestra un aviso: le falta la credencial. Es normal.

### 3. Conectá la credencial

1. Abrí **Modelo Gemini** (doble clic).
2. En **Credential**, elegí **Create new credential**.
3. En **API Key**, pegá tu clave. El **Host** dejalo como viene.
4. Guardá.

**Qué vas a ver:** el mensaje **Connection tested successfully**.

**Cómo sabés que funcionó:** al cerrar la ventana, el aviso de **Modelo Gemini** desapareció.

### 4. Conversá

1. Tocá **Open chat**, abajo del canvas.
2. Escribí `Hola, ¿qué podés hacer por mí?` y mandalo.

**Qué vas a ver:** se abre un panel de chat. A los pocos segundos, el agente responde en español, con voseo, y los nodos se ponen en verde.

3. Seguí con `¿A qué hora es el almuerzo?`.

**Cómo sabés que funcionó:** responde que el almuerzo es a las 12:00. Lo sabe porque está escrito en sus instrucciones.

4. Ahora escribí `¿Qué te pregunté recién?`.

**Cómo sabés que funcionó:** se acuerda de la pregunta del almuerzo. Eso es la **Memoria simple**, que guarda los últimos mensajes de la conversación.

### 5. Mirá qué pasó por dentro

1. Abrí **Agente de IA** y buscá los registros (**Logs**).

**Qué vas a ver:** qué recibió el modelo, qué contestó y cuánto tardó. Cuando una respuesta te sorprenda, mirá acá primero.

### 6. Escribile tus propias instrucciones

El [mensaje de sistema](../glosario.md#prompt-y-mensaje-de-sistema) le dice al agente quién es y cómo responde. Es lo que más cambia el resultado.

1. En **Agente de IA**, abrí **Options** y buscá **System Message**.
2. Leé el que viene y reemplazalo por uno para tu proyecto. Por ejemplo:

   ```text
   Sos el asistente de la biblioteca de un barrio de Santa Cruz de la Sierra.
   Ayudás a encontrar libros, a conocer los horarios (lunes a viernes de 14:00 a 19:00)
   y a anotarse en los talleres de lectura de los sábados.
   Respondé en español, con voseo, en frases cortas.
   Si no sabés algo, decilo y sugerí preguntar en la biblioteca. No inventes datos.
   ```

3. Cerrá la ventana, abrí el chat y preguntá `¿A qué hora abren?`.

**Cómo sabés que funcionó:** responde con el horario que escribiste. Y si le preguntás algo que no está en las instrucciones, te dice que no sabe en vez de inventar.

> [!TIP]
> Probá dos o tres versiones del mensaje de sistema y quedate con la que mejor responda. Decirle qué hacer cuando no sabe algo es lo que más mejora a un agente.

### 7. Hacé público el chat (opcional)

1. Abrí **Mensaje en el chat** y activá **Make Chat Publicly Available**.
2. Tocá **Publish** en el encabezado del canvas y confirmá.
3. Volvé a abrir **Mensaje en el chat** y copiá la URL del chat.

**Cómo sabés que funcionó:** la URL abre el chat en otra pestaña o en tu celular, sin entrar a n8n. Cualquiera con el enlace puede usarlo: cuando termines de mostrarlo, despublicá con **Unpublish** en el menú **···**.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| `API key not valid` | Copiá la clave de nuevo, completa y sin espacios. Si es una clave vieja, creá una nueva en AI Studio. |
| Error `429` o de cuota | Llegaste al límite del nivel gratuito por minuto. Esperá un momento y probá de nuevo. |
| El nodo dice que el modelo no existe | Abrí **Modelo Gemini** y elegí otro en **Model**: los de la familia **Flash** y **Flash-Lite** tienen nivel gratuito. |
| No aparece **Open chat** | Aparece en los workflows que empiezan con un chat. Revisá que **Mensaje en el chat** esté conectado al agente. |
| Responde en inglés | Agregá al mensaje de sistema: «Respondé siempre en español, con voseo». |
| No se acuerda de lo anterior | Revisá que **Memoria simple** esté conectada a la entrada de memoria del agente. Si n8n se reinició, la memoria simple empieza de cero: es normal. |

## Para seguir

- Siguiente: [Parte 7: Tu propio flujo](07-tu-propio-flujo.md), para juntar todo lo que aprendiste.
- Si te gustó la IA: la línea [IA para tu comunidad](../lineas/ia.md) y el proyecto [Asistente con IA para tu comunidad](../proyectos/01-asistente-ia-para-tu-comunidad.md).
- Más detalle sobre la clave, y la alternativa de OpenAI: [Tu clave de Gemini](../00-empezar/07-clave-gemini.md).

---

[Tutorial](README.md) · Anterior: [Parte 5](05-el-desafio-del-dia.md) · Siguiente: [Parte 7: Tu propio flujo](07-tu-propio-flujo.md)
