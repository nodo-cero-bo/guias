# Banco de ideas

Ideas de proyecto por área, cada una con los workflows de Nodo Cero con los que conviene arrancar. Tomá una tal cual, mezclá dos o usala de excusa para la tuya.

| De un vistazo | |
|---|---|
| **Para quién es** | Para equipos que todavía no eligieron qué construir, o que tienen una idea y quieren saber por dónde empezarla. |
| **Qué vas a lograr** | Una idea con su frase de «para quién y qué problema», y la lista de workflows para arrancar hoy. |
| **Tiempo estimado** | 15 minutos para elegir en equipo. |
| **Qué necesitás** | Las ganas de resolver algo concreto. Para arrancar, tu n8n abierto ([guía 01](00-empezar/01-cuenta-n8n-cloud.md)). |

Si ya eligieron [línea](lineas/README.md), cada una tiene además sus ideas para Santa Cruz y Bolivia: [IA](lineas/ia.md#ideas-para-santa-cruz-y-bolivia), [Web3](lineas/web3.md#ideas-para-santa-cruz-y-bolivia), [Apps](lineas/apps.md#ideas-para-santa-cruz-y-bolivia) e [Impacto](lineas/impacto.md#ideas-para-santa-cruz-y-bolivia).

Áreas: [Educación](#educación) · [Salud](#salud) · [Ambiente](#ambiente) · [Emprendimiento](#emprendimiento) · [Comunidad](#comunidad) · [Finanzas](#finanzas) · [Web3](#web3) · [todos los workflows](#los-workflows-de-un-vistazo)

## Cómo usar este banco

1. Leé el área que más le importa a tu equipo.
2. Elegí una idea y respondé en una frase: **¿para quién es y qué problema le resuelve?**
3. Importá los workflows de «Arrancá con» ([cómo importar](00-empezar/02-importar-workflows.md)) y hacelos andar tal cual vienen.
4. Recién después, cambialos para tu idea. Si hay una guía de proyecto parecida, seguila: te ahorra la mitad del camino.

Los números de «Arrancá con» son los ids de los workflows: al final de la página están todos, con su enlace.

## Educación

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Tutora de la materia | Un chat que responde con los apuntes y el programa de una materia, y recuerda en qué se quedó cada estudiante. | [05](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia), [32](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag), [33](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) · guía [01](proyectos/01-asistente-ia-para-tu-comunidad.md) |
| Consultas para docentes | Un formulario de dudas que la IA agrupa por tema, para que la docente responda una vez a todo el curso. | [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase), [34](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) · guía [05](proyectos/05-formularios-inteligentes.md) |
| Certificados de un taller | Quien completa un taller queda registrada en un contrato en Fuji y n8n arma su certificado verificable. | [16](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) · guía [06](proyectos/06-tu-contrato-en-fuji.md) |
| Inscripciones con login | Las estudiantes se registran con Clerk y ven sus inscripciones guardadas en Supabase. | [20](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase), [21](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida) · guía [02](proyectos/02-app-con-login-y-datos.md) |

## Salud

Ideas de orientación y organización: no reemplazan a profesionales de la salud, no dan diagnósticos y no guardan datos médicos de nadie.

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Dónde atenderme | Un asistente que responde con información pública de centros de salud: horarios, servicios y requisitos. | [05](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia), [32](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag), [33](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) · guía [01](proyectos/01-asistente-ia-para-tu-comunidad.md) |
| Campañas de vacunación o prevención | Un formulario para anotarse a una campaña y un resumen diario de cupos por zona para quien organiza. | [04](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/04-formulario), [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) · guía [07](proyectos/07-impacto-ambiental-o-social.md) |
| Recordatorios de bienestar | Un workflow con horario que manda consejos de bienestar validados por profesionales a quien se suscribe. | [01](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/01-hola-n8n), [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) |

## Ambiente

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Reportes ciudadanos | Basurales, quemas, fugas de agua: se reportan con un formulario, la IA los ordena por urgencia y queda un resumen diario. | [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase), [34](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) · guía [07](proyectos/07-impacto-ambiental-o-social.md) |
| Guía de reciclaje | Un chat que responde dónde y cómo separar cada residuo, con las guías públicas de tu ciudad. | [32](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag), [33](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) · guía [01](proyectos/01-asistente-ia-para-tu-comunidad.md) |
| Datos abiertos del clima | Un workflow que consulta una API pública (calidad del aire, lluvia, temperatura) y avisa cuando algo pasa de un límite. | [03](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/03-http-request), [14](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet) (el patrón del horario) |
| Árboles plantados, a la vista | Cada plantación queda registrada en un contrato en Fuji, con un mapa público armado por n8n. | [16](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) · guía [06](proyectos/06-tu-contrato-en-fuji.md) |

## Emprendimiento

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Pedidos sin cuaderno | Un formulario de pedidos que guarda todo en Supabase, con un resumen de lo que hay que preparar. | [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) · guía [08](proyectos/08-automatiza-tu-emprendimiento.md) |
| Catálogo siempre al día | Una API de productos que alimenta una página o una app sin tocar el código. | [02](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/02-mi-primera-api), [31](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/31-api-crud-supabase) · guía [08](proyectos/08-automatiza-tu-emprendimiento.md) |
| Atención a cualquier hora | Un asistente que contesta precios, horarios y envíos con la información del negocio. | [33](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) · guías [01](proyectos/01-asistente-ia-para-tu-comunidad.md) y [08](proyectos/08-automatiza-tu-emprendimiento.md) |
| Clientas frecuentes | Login con Clerk para que cada clienta vea sus pedidos y sus beneficios. | [20](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase), [21](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida), [22](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/22-clerk-invitaciones) · guía [02](proyectos/02-app-con-login-y-datos.md) |

## Comunidad

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Asistente de la organización | Responde cómo sumarse, qué actividades hay y a quién escribir, con los documentos de la organización. | [33](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) · guía [01](proyectos/01-asistente-ia-para-tu-comunidad.md) |
| Buzón de ideas que se ordena por su cuenta | Las propuestas de la comunidad llegan por formulario y la IA las agrupa por tema. | [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase), [34](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) · guía [05](proyectos/05-formularios-inteligentes.md) |
| Votación transparente | Cada voto es un evento en un contrato en Fuji y n8n publica el conteo. | [16](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) · guía [06](proyectos/06-tu-contrato-en-fuji.md) |
| Invitaciones a un evento | Una lista de invitadas que recibe su invitación por correo desde n8n y entra con su cuenta. | [22](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/22-clerk-invitaciones), [20](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase) |

## Finanzas

Ideas para aprender y organizarse, no para asesorar inversiones.

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Gastos del emprendimiento | Un formulario rápido para anotar cada gasto y un resumen semanal con IA: en qué se fue la plata. | [30](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase), [34](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) |
| Colecta con cuentas claras | Una colecta en AVAX de prueba donde cada aporte se verifica en Fuji y el total es público. | [13](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago), [14](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet) · guía [03](proyectos/03-pagos-verificables-en-fuji.md) |
| Educación financiera en el chat | Un asistente que explica conceptos (presupuesto, ahorro, interés) con materiales públicos y ejemplos simples. | [05](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia), [33](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) |

## Web3

| Idea | Qué hace | Arrancá con |
|---|---|---|
| Verificador de pagos | Dado un hash, n8n confirma que el pago llegó a la dirección correcta, por el monto justo. | [12](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion), [13](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago), [41](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) · guía [03](proyectos/03-pagos-verificables-en-fuji.md) |
| Explicadora de transacciones | Un agente que explica en español qué pasó en cualquier transacción de Fuji. | [40](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) · guía [04](proyectos/04-agente-web3-que-lee-fuji.md) |
| Alertas de una wallet | Un aviso cada vez que cambia el saldo de una wallet o llega un token. | [11](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet), [14](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet), [15](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/15-fuji-token-erc20) |
| Tablero de un contrato | Una página con lo que pasa en tu contrato, actualizada por n8n a partir de sus eventos. | [16](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) · guía [06](proyectos/06-tu-contrato-en-fuji.md) |

Para cualquier idea con Fuji, empezá por [Core Wallet y Avalanche Fuji](00-empezar/06-core-wallet-y-fuji.md) y tené a mano los [recursos de Avalanche](avalanche/recursos.md).

## Los workflows, de un vistazo

| Id | Workflow | Categoría |
|---|---|---|
| 01 | [Hola n8n: datos, expresiones y decisiones](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/01-hola-n8n) | Fundamentos |
| 02 | [Tu primera API](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/02-mi-primera-api) | Fundamentos |
| 03 | [Llamar a cualquier API con HTTP Request](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/03-http-request) | Fundamentos |
| 04 | [Un formulario de n8n](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/04-formulario) | Fundamentos |
| 05 | [Tu primer agente de IA](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia) | Fundamentos, IA |
| 10 | [Estado de la red Fuji](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/10-fuji-estado-de-la-red) | Avalanche Fuji |
| 11 | [Saldo de una wallet](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/11-fuji-saldo-wallet) | Avalanche Fuji |
| 12 | [Leer una transacción](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion) | Avalanche Fuji |
| 13 | [Verificar un pago](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago) | Avalanche Fuji |
| 14 | [Monitor de una wallet](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/14-fuji-monitor-wallet) | Avalanche Fuji |
| 15 | [Token ERC-20](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/15-fuji-token-erc20) | Avalanche Fuji |
| 16 | [Eventos de un contrato](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) | Avalanche Fuji |
| 20 | [Webhook de Clerk a Supabase](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/20-clerk-webhook-a-supabase) | Clerk, Supabase |
| 21 | [API protegida con Clerk](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/21-clerk-api-protegida) | Clerk, Supabase |
| 22 | [Invitaciones con Clerk](https://github.com/nodo-cero-bo/workflows/tree/main/20-clerk/22-clerk-invitaciones) | Clerk |
| 30 | [Formulario a Supabase](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/30-formulario-a-supabase) | Supabase |
| 31 | [API para leer y crear filas](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/31-api-crud-supabase) | Supabase |
| 32 | [Cargar documentos para la IA](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/32-cargar-documentos-rag) | Supabase, IA |
| 33 | [Agente con memoria y búsqueda en documentos](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/33-agente-con-memoria-y-rag) | Supabase, IA |
| 34 | [La IA clasifica cada fila nueva](https://github.com/nodo-cero-bo/workflows/tree/main/30-supabase/34-supabase-webhook-ia) | Supabase, IA |
| 40 | [Agente Web3 que lee Fuji](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) | Proyectos |
| 41 | [Pagos en Fuji con login](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/41-pagos-fuji-con-login) | Proyectos |
| 42 | [Reporte de KPIs del evento](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/42-reporte-kpis) | Proyectos |
| 50 | [Asistente con Gemini en Vertex AI](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente) | Google Cloud, IA |
| 51 | [Opiniones con Cloud Natural Language](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) | Google Cloud, IA |
| 52 | [Resumir y traducir con Google Cloud](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) | Google Cloud, IA |
| 53 | [Archivos a Cloud Storage](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) | Google Cloud |
| 60 | [Alerta del clima en Santa Cruz](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/60-alerta-del-clima) | Casos de uso |
| 61 | [Tipo de cambio: dólar a bolivianos](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/61-tipo-de-cambio) | Casos de uso |
| 62 | [Noticias por RSS](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/62-noticias-rss) | Casos de uso |
| 63 | [Leer una página web](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/63-leer-una-pagina-web) | Casos de uso |
| 64 | [Limpiar una lista (CSV)](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/64-limpiar-una-lista) | Casos de uso |
| 65 | [Clasificar mensajes con IA](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/65-clasificar-mensajes-con-ia) | Casos de uso, IA |
| 66 | [Bot de Telegram con IA](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/66-bot-de-telegram-con-ia) | Casos de uso, IA |
| 67 | [Reportes ambientales](https://github.com/nodo-cero-bo/workflows/tree/main/60-casos-de-uso/67-reportes-ambientales) | Casos de uso, IA, Supabase |

## Si algo falla

| Lo que pasa | Qué probar |
|---|---|
| Ninguna idea les convence | Piensen en algo que hoy les cuesta tiempo a ustedes o a alguien cercano (una organización, un negocio, una materia). Si se repite y lo hace una persona a mano, se puede automatizar. |
| La idea es enorme para un día | Quédense con el paso más chico que ya sirve: recibir los datos y guardarlos, o responder una sola pregunta. Lo demás va a «qué sigue» en la demo. |
| No saben qué workflow usar | Fíjense cómo empieza la idea: un formulario (04, 30), un chat (05, 33), una pregunta a otra app (02, 03, 31) o algo que pasa en Fuji (12, 13, 16). Arranquen por ese. |
| La idea necesita datos de personas | Diseñala para que funcione con datos inventados o públicos, y no pidas nada que no uses. En la demo, nunca datos reales de nadie. |
| Dos personas del equipo quieren ideas distintas | Elijan la que se pueda mostrar funcionando hoy. La otra puede ser una pieza que se suma después. |

## Para seguir

- Con la idea elegida, buscá la [guía de proyecto](proyectos/README.md) más parecida y seguila.
- Antes de pasar al frente, repasá [cómo presentar](presentar.md).
- Después del sábado, [seguí construyendo](seguir-construyendo.md).

---

[Índice](README.md) · [Guías de proyecto](proyectos/README.md) · [Cómo presentar](presentar.md)
