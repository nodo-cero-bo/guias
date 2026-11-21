# Guías de proyecto

Ocho proyectos completos, armados con los workflows de Nodo Cero, para construir en equipo y mostrar en la demo. Elegí uno, seguilo paso a paso y hacelo tuyo.

Cada guía junta varios workflows del repo [nodo-cero-bo/workflows](https://github.com/nodo-cero-bo/workflows) en algo que resuelve un problema real, y termina con cómo presentarlo.

## Los proyectos

| # | Proyecto | Qué construís | Tecnologías | Nivel |
|---|---|---|---|---|
| 01 | [Asistente con IA para tu comunidad](01-asistente-ia-para-tu-comunidad.md) | Un chat público que responde con la información de tus documentos y recuerda la conversación. | n8n, IA, Supabase | Inicial a intermedio |
| 02 | [App con login y datos](02-app-con-login-y-datos.md) | Una página con login de Clerk que llama a una API de n8n protegida y lee tu base en Supabase. | n8n, Clerk, Supabase | Avanzado |
| 03 | [Pagos verificables en Avalanche Fuji](03-pagos-verificables-en-fuji.md) | Un verificador de pagos: dado un hash, n8n confirma en Fuji que el pago llegó y lo registra. | n8n, Avalanche, Supabase, Clerk | Inicial a avanzado |
| 04 | [Agente Web3 que lee Fuji](04-agente-web3-que-lee-fuji.md) | Un agente de IA que contesta preguntas sobre saldos, transacciones, tokens y contratos en Fuji. | n8n, IA, Avalanche | Intermedio |
| 05 | [Formularios inteligentes que guardan y clasifican](05-formularios-inteligentes.md) | Un formulario que guarda cada respuesta en Supabase y la IA la clasifica sola. | n8n, IA, Supabase | Inicial a intermedio |
| 06 | [Tu contrato en Fuji y n8n escuchando sus eventos](06-tu-contrato-en-fuji.md) | Un contrato tuyo desplegado en Fuji y un workflow que lee lo que pasa en él. | n8n, Avalanche | Avanzado |
| 07 | [Impacto ambiental o social](07-impacto-ambiental-o-social.md) | Reportes ciudadanos con formulario, clasificación con IA y una base para darles seguimiento. | n8n, IA, Supabase | Intermedio |
| 08 | [Automatizá tu emprendimiento](08-automatiza-tu-emprendimiento.md) | Pedidos, consultas y catálogo de un emprendimiento, atendidos por n8n. | n8n, IA, Supabase | Inicial a intermedio |

## Cómo elegir

| Si tu equipo... | Empezá por |
|---|---|
| Nunca usó n8n y quiere algo vistoso rápido | [05 Formularios inteligentes](05-formularios-inteligentes.md) o [01 Asistente con IA](01-asistente-ia-para-tu-comunidad.md) |
| Tiene una causa o una organización en mente | [07 Impacto ambiental o social](07-impacto-ambiental-o-social.md) |
| Tiene un emprendimiento (propio o de alguien cercano) | [08 Automatizá tu emprendimiento](08-automatiza-tu-emprendimiento.md) |
| Quiere sumar Avalanche Fuji | [03 Pagos verificables](03-pagos-verificables-en-fuji.md), [04 Agente Web3](04-agente-web3-que-lee-fuji.md) o [06 Tu contrato](06-tu-contrato-en-fuji.md) |
| Sabe algo de desarrollo web | [02 App con login y datos](02-app-con-login-y-datos.md) |

Los proyectos se combinan: el asistente de la 01 puede atender a la clientela de la 08, y los reportes de la 07 se pueden registrar en Fuji con el contrato de la 06.

## Antes de arrancar

1. Repartan roles: alguien en n8n, alguien con las cuentas y los datos, alguien armando la demo. Roten si hace falta.
2. Creen las cuentas que pide la guía con las [guías de inicio](../00-empezar/01-cuenta-n8n-cloud.md). Cada persona usa sus propias credenciales.
3. Importen primero el workflow más simple de la guía y háganlo andar tal cual viene. Recién después, cámbienlo.
4. Registren el proyecto en la [vitrina](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml) cuando tengan algo andando, y preparen la demo con [cómo presentar](../presentar.md).

¿Ninguno te convence? Mirá el [banco de ideas](../ideas.md): cada idea dice con qué workflows arrancar.

---

[Índice](../README.md) · [Banco de ideas](../ideas.md) · [Cómo presentar](../presentar.md)
