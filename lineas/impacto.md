# Línea: Impacto social y ambiental

Problemas reales de Santa Cruz y Bolivia, resueltos con n8n: reportes ciudadanos, alertas del clima, educación, salud, emprendimiento y avisos en quechua, aimara y guaraní.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos con una causa: un barrio, una escuela, una organización, un tema de ambiente, de salud o de trabajo. Se puede empezar sin ninguna cuenta extra. |
| **Qué vas a lograr** | Un flujo que ayuda a un grupo concreto de personas: recibe un aviso o un reporte, lo ordena y le llega a quien tiene que actuar. |
| **Tiempo estimado** | La jornada entera: 1 hora para el nivel inicial, 2 a 3 horas para el intermedio y lo que quede para lucirte. |
| **Qué necesitás** | Tu n8n ([guía 01](../00-empezar/01-cuenta-n8n-cloud.md)). Según la ruta: una clave de Gemini ([guía 07](../00-empezar/07-clave-gemini.md)), Supabase ([guía 04](../00-empezar/04-cuenta-supabase.md)) o Google Cloud ([guía 08](../00-empezar/08-google-cloud.md)). Y, sobre todo, saber para quién es. |

## Qué es

La sede de la hackathon, el Centro de Educación Ambiental, es la inspiración: esta línea no se define por una tecnología sino por un problema. La pregunta de arranque es siempre la misma: **¿para quién es y qué le pasa hoy?** Después se elige la pieza: un formulario para recibir reportes, una IA que los ordena, una base para no perder nada, un horario que avisa, una traducción para que llegue a más gente.

## Por qué elegirla

- Lo que construís puede usarse el lunes: en tu barrio, tu escuela o tu organización.
- Junta todo lo aprendido: formularios, APIs públicas, IA, datos y, si querés, Web3 o Google Cloud.
- Varias piezas funcionan sin ninguna credencial, así que se puede arrancar en minutos.
- Si sumás Google Cloud o Avalanche Fuji, tu proyecto también puede contarlo para las menciones especiales ([qué reconoce cada una](../ganadores-y-menciones.md)).

## Tu ruta, paso a paso

### Empezás con

1. **Definí el problema en una frase**: quién, qué le pasa y quién debería enterarse. Sin esa frase, el sistema junta datos que nadie mira.
2. **Un aviso que llega por su cuenta**: [`60-alerta-del-clima`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/60-alerta-del-clima) lee cada mañana el pronóstico de Santa Cruz de la Sierra y arma una alerta si viene lluvia fuerte, tormenta o calor extremo. No pide ninguna clave.
3. **Un formulario propio**: [`04-formulario`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/04-formulario), para ver cómo se recibe un reporte y se muestra una página final.

**Cómo sabés que vas bien:** tenés la frase del problema escrita y un workflow andando que la toca de cerca.

### Después

1. **Reportes ciudadanos de punta a punta**: [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales), un formulario con foto, la IA que clasifica el reporte, Supabase que lo guarda y un aviso por Telegram si es urgente. Guía: [Reportes ambientales con foto](../proyectos/10-reportes-ambientales-con-foto.md).
2. **Ordenar mensajes**: [`65-clasificar-mensajes-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/65-clasificar-mensajes-con-ia) decide si cada mensaje es una consulta, un reclamo o una idea.
3. **Armarlo pieza por pieza**: si preferís entender cada parte, la guía [Impacto ambiental o social](../proyectos/07-impacto-ambiental-o-social.md) lo construye con [`30-formulario-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) y [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia).

### Para lucirte

- **En el idioma de cada barrio**: resumen y traducción al quechua, al aimara o al guaraní con [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir). Guía: [Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md).
- **Escuchar a la comunidad**: [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) dice si las opiniones de un formulario son positivas o negativas y de qué hablan.
- **Donde ya está la gente**: un bot de Telegram con [`66-bot-de-telegram-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/66-bot-de-telegram-con-ia).
- **Respuestas con información oficial**: un asistente que responde con guías públicas (cómo separar residuos, qué hacer ante una quema), con [`33-agente-con-memoria-y-rag`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag).
- **Que nadie lo pueda borrar**: registrá cada reporte o cada donación en un contrato propio en Fuji y leelo con [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) ([guía](../proyectos/06-tu-contrato-en-fuji.md)).

## Los workflows que sirven

| Workflow | Qué hace | Nivel | Qué pide |
|---|---|---|---|
| [`60-alerta-del-clima`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/60-alerta-del-clima) | Pronóstico de Santa Cruz cada mañana y alerta si viene lluvia fuerte o calor extremo. | Inicial | ninguna |
| [`61-tipo-de-cambio`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/61-tipo-de-cambio) | La cotización del día del dólar en bolivianos, con una API propia para convertir montos. | Inicial | ninguna |
| [`62-noticias-rss`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/62-noticias-rss) | Las noticias de un RSS que hablan de lo que te importa, en un resumen. | Inicial | ninguna (IA opcional) |
| [`63-leer-una-pagina-web`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/63-leer-una-pagina-web) | Saca datos ordenados de una página web pública. | Intermedio | ninguna |
| [`64-limpiar-una-lista`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/64-limpiar-una-lista) | Una lista CSV desordenada, limpia, sin repetidos y ordenada. | Inicial | ninguna |
| [`65-clasificar-mensajes-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/65-clasificar-mensajes-con-ia) | Consulta, reclamo o idea: cada mensaje por su camino. | Inicial | Gemini |
| [`66-bot-de-telegram-con-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/66-bot-de-telegram-con-ia) | Un bot de Telegram con un agente que recuerda cada chat. | Intermedio | Telegram y Gemini |
| [`67-reportes-ambientales`](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales) | Reporte ciudadano con foto, clasificado por la IA, guardado en Supabase y con aviso si es urgente. | Intermedio | Supabase y Gemini (Telegram, opcional) |
| [`30-formulario-a-supabase`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) | Cada respuesta de un formulario, una fila en Supabase. | Inicial | Supabase |
| [`34-supabase-webhook-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) | La IA clasifica cada fila nueva. | Intermedio | Supabase, Gemini y Header Auth |
| [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) | Tono y temas de las opiniones de un formulario. | Inicial | Google Cloud |
| [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) | Un aviso resumido y traducido al quechua, al aimara o al guaraní. | Intermedio | Google Cloud |
| [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) | Fotos o documentos de un formulario, guardados con su enlace. | Inicial | Google Cloud |

## Las guías de proyecto que encajan

- [10 Reportes ambientales con foto](../proyectos/10-reportes-ambientales-con-foto.md): el workflow 67 de punta a punta, más el clima.
- [07 Impacto ambiental o social](../proyectos/07-impacto-ambiental-o-social.md): reportes ciudadanos armados pieza por pieza.
- [09 Traducí y resumí con Google Cloud](../proyectos/09-traducir-y-resumir-con-google-cloud.md): avisos que llegan en quechua, aimara o guaraní.
- [08 Automatizá tu emprendimiento](../proyectos/08-automatiza-tu-emprendimiento.md): para emprendedoras y negocios del barrio.
- [01 Asistente con IA para tu comunidad](../proyectos/01-asistente-ia-para-tu-comunidad.md): respuestas con los documentos de una organización.

## Ideas para Santa Cruz y Bolivia

- **Quemas y humo**: reportes de focos de quema o de humo por zona, con la urgencia que decide la IA y un resumen del día para quien tiene que actuar.
- **Basurales y puntos de reciclaje**: un mapa de reportes con foto, y un asistente que responde cómo separar residuos.
- **Calor y lluvia**: la alerta del clima del workflow 60 enviada por Telegram a un grupo de una escuela o un barrio, con recomendaciones simples.
- **Avisos de salud que se entienden**: una campaña de prevención del dengue o de vacunación, resumida en tres frases y traducida al guaraní o al quechua, revisada por una persona hablante.
- **Educación ambiental**: un asistente para visitas escolares a un centro de educación ambiental, que responde con los materiales públicos del lugar.
- **Precios para emprendedoras**: la cotización del día del workflow 61 convertida en un mensaje para quien compra insumos en dólares.
- **La voz del barrio**: un formulario de opiniones sobre una plaza o un servicio, con el tono y los temas que más se repiten.

Cuidá a las personas: nada de nombres, teléfonos ni direcciones de casas en los reportes, y fotos sin caras ni patentes.

## Cómo mostrarla en la demo

1. **Empezá por la persona, no por la tecnología**: «Esta es la esquina, este es el basural, nadie sabe a quién avisar».
2. **En vivo**: mostrá el QR del formulario y pedí que alguien del público mande un reporte (o un mensaje, o una opinión).
3. **Lo que pasa por dentro**: la fila que aparece en Supabase, la clasificación de la IA, la traducción o la alerta. Una cosa a la vez.
4. **Quién lo recibe**: mostrá el aviso o el resumen que le llega a quien tiene que actuar. Ahí se ve el impacto.
5. **Qué sigue**: con quién lo probarían de verdad y qué les falta para que lo usen.

Cargá antes algunos ejemplos inventados, para que el resumen tenga algo que contar, y tené capturas por si la red falla.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| El equipo no se decide por un problema | Elijan algo que alguien del equipo vivió de cerca. El [banco de ideas](../ideas.md) tiene más, por área. |
| La alerta del clima no avisa nada | Es buena señal: hoy no hay lluvia fuerte ni calor extremo. Para ver cómo se ve la alerta, en **Dónde y cuándo avisar** cambiá `simular` de `no` a `calor` o `lluvia`, y volvé a ponerlo en `no` después. |
| La IA clasifica mal | Repetí la lista exacta de categorías en las instrucciones y dale un ejemplo de cada una. |
| El formulario no sube la foto | Probá con una foto chica (menos de unos pocos MB) y revisá que el campo sea de tipo archivo. |
| La traducción suena rara | Pedile a una persona que hable el idioma que la revise antes de mostrarla como definitiva, y contalo en la demo. |

## Para seguir

- Las otras líneas: [IA](ia.md) · [Web3](web3.md) · [Apps](apps.md).
- Más ideas por área: el [banco de ideas](../ideas.md).
- Datos abiertos y APIs públicas sin clave que usan los workflows: [Open-Meteo](https://open-meteo.com/en/docs).

---

[Líneas](README.md) · Anterior: [Apps con login y datos](apps.md)
