# Línea: IA para tu comunidad

Agentes y asistentes de IA que responden, resumen, clasifican y traducen para una comunidad real, con Gemini (Google AI Studio o Vertex AI en Google Cloud) y la búsqueda en tus documentos con Supabase.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos que reciben siempre las mismas preguntas, que tienen documentos que nadie lee o que quieren que la información llegue en otro idioma. No hace falta saber de IA. |
| **Qué vas a lograr** | Un asistente o un flujo con IA que resuelve algo concreto para un grupo de personas, con un enlace para probarlo desde el celular. |
| **Tiempo estimado** | La jornada entera: 1 hora para el nivel inicial, 2 a 3 horas para el intermedio y lo que quede para lucirte. |
| **Qué necesitás** | Tu n8n ([guía 01](../00-empezar/01-cuenta-n8n-cloud.md)) y una clave gratis de Gemini ([guía 07](../00-empezar/07-clave-gemini.md)). Según la ruta: Supabase ([guía 04](../00-empezar/04-cuenta-supabase.md)) o Google Cloud ([guía 08](../00-empezar/08-google-cloud.md)). |

## Qué es

Un [LLM](../glosario.md#llm) como Gemini sabe mucho del mundo, pero nada de tu comunidad. Esta línea es para darle a la IA tres cosas que la vuelven útil: **instrucciones claras** (el [mensaje de sistema](../glosario.md#prompt-y-mensaje-de-sistema)), **tu información** (con [RAG](../glosario.md#rag), busca en tus documentos antes de responder) y **un trabajo concreto** dentro de un workflow: responder, clasificar, resumir o traducir.

## Por qué elegirla

- Se ve rápido: en una hora tenés un chat respondiendo.
- Sirve para casi cualquier grupo: un centro de estudiantes, una organización, un club, un emprendimiento, una biblioteca.
- Aprendés lo que más se usa hoy en automatización: agentes, memoria, herramientas y búsqueda por significado.
- Si usás Google Cloud (Vertex AI, Cloud Translation o Cloud Natural Language), tu proyecto puede contarlo para la mención «Mejor uso de Google Cloud».

## Tu ruta, paso a paso

### Empezás con

1. El tutorial, hasta la [parte 6: Tu agente con Gemini](../tutorial/06-tu-agente-con-gemini.md). Si ya usaste n8n, andá directo a la parte 6.
2. Reescribí el mensaje de sistema de [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia) para tu comunidad: quién es el asistente, qué sabe, cómo responde y qué hace cuando no sabe.
3. Hacé público el chat (**Make Chat Publicly Available** y **Publish**) y probalo desde el celular.

**Cómo sabés que vas bien:** el chat responde como el asistente de tu comunidad y dice «no sé» cuando le preguntás algo que no está en sus instrucciones.

### Después

1. Prepará tu base en Supabase ([guía 04](../00-empezar/04-cuenta-supabase.md)) y cargá uno o dos documentos públicos de tu comunidad con [`32-cargar-documentos-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag).
2. Cambiá tu agente por [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag): busca en tus documentos y recuerda la conversación de verdad.
3. O, si lo tuyo es ordenar mensajes y no conversar: [`65-clasificar-mensajes-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/65-clasificar-mensajes-con-ia) (consulta, reclamo o idea) o [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) (cada fila nueva, clasificada).

La guía completa de este nivel: [Asistente con IA para tu comunidad](../proyectos/01-asistente-ia-para-tu-comunidad.md).

### Para lucirte

- **Que hable el idioma de tu comunidad**: traducción a quechua, aimara o guaraní con Cloud Translation y resumen con Gemini, con [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir). Guía: [Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md).
- **Gemini en Google Cloud**: el asistente con Vertex AI de [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente), si tu equipo recibió créditos que lo cubran.
- **Escuchar opiniones**: [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) lee las respuestas de un formulario y dice si son positivas o negativas y qué nombran.
- **Donde ya está la gente**: el bot de Telegram con un agente de [`66-bot-de-telegram-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/66-bot-de-telegram-con-ia).
- **Herramientas propias**: sumale al agente un **HTTP Request Tool** que consulte una API, como hace [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) con Fuji.

## Los workflows que sirven

| Workflow | Qué hace | Nivel | Qué pide |
|---|---|---|---|
| [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia) | Tu primer agente: chat, Gemini y memoria simple. | Inicial | Gemini |
| [`32-cargar-documentos-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag) | Sube un documento, lo parte y guarda sus embeddings. | Intermedio | Supabase y Gemini |
| [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) | Agente que busca en tus documentos y recuerda en Postgres. | Avanzado | Supabase, Postgres y Gemini |
| [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) | Cada fila nueva de una tabla, clasificada por la IA. | Intermedio | Supabase y Gemini |
| [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) | Agente con herramientas que consultan la red Fuji. | Avanzado | Gemini |
| [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente) | Agente con Gemini en Vertex AI. | Intermedio | Google Cloud |
| [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) | Opiniones de un formulario: sentimiento, entidades y resumen. | Inicial | Google Cloud |
| [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) | Resumen con Gemini en Vertex AI y traducción con Cloud Translation, también a quechua, aimara y guaraní. | Intermedio | Google Cloud |
| [`62-noticias-rss`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/62-noticias-rss) | Lee un RSS público, filtra por palabras y arma un resumen (la IA es opcional). | Inicial | ninguna |
| [`65-clasificar-mensajes-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/65-clasificar-mensajes-con-ia) | Clasifica mensajes en consulta, reclamo o idea. | Inicial | Gemini |
| [`66-bot-de-telegram-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/66-bot-de-telegram-con-ia) | Un bot de Telegram con un agente de IA. | Intermedio | Telegram y Gemini |

Cada workflow trae su README con qué hace, qué necesitás y cómo probarlo, y una nota grande en el canvas. Si es tu primera vez, mirá antes [cómo importar](../00-empezar/02-importar-workflows.md).

## Las guías de proyecto que encajan

- [01 Asistente con IA para tu comunidad](../proyectos/01-asistente-ia-para-tu-comunidad.md): el camino completo, del chat simple al RAG con memoria.
- [05 Formularios inteligentes](../proyectos/05-formularios-inteligentes.md): un buzón que la IA ordena sola.
- [08 Automatizá tu emprendimiento](../proyectos/08-automatiza-tu-emprendimiento.md): un asistente que contesta las preguntas de siempre de un negocio.
- [09 Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md): avisos que llegan en quechua, aimara o guaraní.
- [04 Agente Web3 que lee Fuji](../proyectos/04-agente-web3-que-lee-fuji.md), si querés cruzarla con la línea Web3.

## Ideas para Santa Cruz y Bolivia

- **El asistente del centro de estudiantes**: responde sobre inscripciones, fechas y trámites de la carrera con el reglamento y el calendario públicos.
- **Avisos de salud en el idioma de cada barrio**: un aviso de prevención del dengue, con información oficial, traducido a guaraní y quechua y resumido en tres frases. Con revisión de una persona que hable el idioma.
- **Un buzón para una organización social**: los mensajes de la comunidad llegan clasificados en consulta, reclamo o idea, y cada semana sale un resumen.
- **El asistente de una feria de emprendedoras**: horarios, puestos, productos y cómo sumarse, desde un bot de Telegram.
- **Lo que opinan del barrio**: un formulario de opiniones sobre una plaza o un servicio, con el sentimiento y los temas que más se repiten.
- **Las noticias que te importan**: un resumen diario de noticias de un RSS público, filtrado por palabras como «agua», «incendio» o «becas».

Más ideas por área en el [banco de ideas](../ideas.md).

## Cómo mostrarla en la demo

1. **El problema, con una pregunta real**: «Todos los días nos preguntan lo mismo por chat».
2. **En vivo**: alguien del público escanea el QR del chat y hace una pregunta. Mostrá la respuesta y, en n8n, la ejecución: qué buscó en tus documentos y qué le pasó al modelo.
3. **La pregunta trampa**: preguntale algo que no sabe y mostrá que dice «no sé» en vez de inventar. Es lo que más confianza da.
4. **Si usaste Google Cloud**, mostrá el nodo de Google en el canvas y el resultado (la traducción, el sentimiento), y contalo al registrar el proyecto. Más en [Ganadores y menciones](../ganadores-y-menciones.md).
5. **Qué sigue**: qué documentos faltan y quién lo usaría de verdad.

Tené a mano capturas de buenas respuestas, por si la red falla, y usá datos inventados o públicos: nunca datos personales de nadie.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| Error `429` o de cuota en Gemini | Es el límite del nivel gratuito por minuto. Esperá un momento y hacé menos llamadas seguidas. |
| El agente inventa | Reforzá el mensaje de sistema («si no está en los documentos, decí que no sabés») y revisá que la búsqueda traiga los pedazos correctos. |
| El agente no encuentra nada en tus documentos | Revisá que el workflow 32 haya cargado filas en la tabla `documentos` y que el 33 use la misma credencial de Supabase. |
| Google Cloud responde `PERMISSION_DENIED` o `SERVICE_DISABLED` | Falta un rol de la cuenta de servicio o habilitar la API: [guía 08](../00-empezar/08-google-cloud.md#si-algo-falla). |
| La traducción a quechua, aimara o guaraní suena rara | La traducción automática a estos idiomas puede fallar. Pedile a una persona que hable el idioma que la revise y contalo en la demo. |

## Para seguir

- Las otras líneas: [Web3](web3.md) · [Apps](apps.md) · [Impacto](impacto.md).
- Documentación oficial: [IA en n8n](https://docs.n8n.io/build/integrate-ai), el nodo [AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/) y los cursos gratis de [learn.n8n.io](https://learn.n8n.io/).

---

[Líneas](README.md) · Siguiente: [Web3 con Avalanche Fuji](web3.md)
