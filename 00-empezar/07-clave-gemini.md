# Tu clave de Gemini

Sacá una clave gratis de la API de Gemini en Google AI Studio y conectala a n8n para que tus agentes respondan, clasifiquen y resuman. Con la alternativa de OpenAI y la de los créditos de n8n Cloud.

| De un vistazo | |
|---|---|
| **Para quién es** | Para quien va a usar IA en su proyecto: un agente que conversa, una clasificación automática, resúmenes o búsqueda en documentos. |
| **Qué vas a lograr** | La credencial **Google Gemini(PaLM) Api** andando en n8n y tu primer agente respondiendo en el chat. |
| **Tiempo estimado** | 10 minutos |
| **Qué necesitás** | Una cuenta de Google y tu n8n abierto. |

## Pasos

### 1. Creá la clave en Google AI Studio

1. Entrá a [aistudio.google.com/apikey](https://aistudio.google.com/apikey) con tu cuenta de Google. Si es la primera vez, aceptá las condiciones.
2. Cada clave vive dentro de un proyecto de Google Cloud. Si es tu primera vez en AI Studio, al aceptar las condiciones se crean un proyecto y una clave por su cuenta: la vas a ver en la lista. Si no aparece ninguna, tocá **Create API key**. Si ya usabas Google Cloud, primero importá un proyecto (**Dashboard**, **Projects**, **Import projects**) y creá la clave ahí.
3. Copiá la clave. Tratala como una contraseña: no la pegues en ningún lado que no sea la credencial de n8n.

Las claves nuevas de AI Studio ya vienen restringidas a la API de Gemini, así que no hace falta configurar nada más. Si tenés una clave vieja sin restricciones, la API la rechaza: creá una nueva.

> [!NOTE]
> La API de Gemini tiene un nivel gratuito, con límites de uso, que alcanza para la hackathon. En el nivel gratuito, Google puede usar lo que mandás para mejorar sus productos: no le mandes datos personales ni sensibles de nadie.

### 2. Conectala en n8n

1. Importá el workflow [`05-agente-ia`](https://github.com/nodo-cero-bo/workflows/tree/main/00-fundamentos/05-agente-ia) (o abrí cualquier nodo **Google Gemini Chat Model**).
2. En el campo de credencial, elegí **Create new credential**. El tipo es **Google Gemini(PaLM) Api**.
3. Completá:

   | Campo | Qué va |
   |---|---|
   | **Host** | Dejá el que viene: `https://generativelanguage.googleapis.com` |
   | **API Key** | Tu clave de AI Studio |

4. Guardá. Tenés que ver **Connection tested successfully**.

### 3. Probá tu primer agente

1. En el workflow 05, tocá **Open chat**, abajo del canvas.
2. Escribí algo como `Hola, ¿qué podés hacer por mí?` y mandalo.
3. Mirá la respuesta y después abrí el nodo **Agente de IA**: en sus registros ves qué recibió el modelo, qué contestó y cuánto tardó.
4. Cambiá el mensaje de sistema del agente (la parte que le dice quién es y cómo responder) y volvé a probar. Ahí está la mitad de la magia.

> [!TIP]
> El workflow ya trae un modelo elegido. Si n8n te muestra una lista para cambiarlo, los de la familia **Flash** y **Flash-Lite** tienen nivel gratuito y responden rápido.

### Alternativa: OpenAI

<details>
<summary>Usar un modelo de OpenAI en lugar de Gemini</summary>

1. Creá una clave en [platform.openai.com/api-keys](https://platform.openai.com/api-keys). La API de OpenAI se paga por uso: para que funcione, la cuenta necesita saldo cargado.
2. En n8n, creá una credencial **OpenAI** y pegá la clave en **API Key**.
3. En el workflow, borrá el nodo **Modelo Gemini** (un **Google Gemini Chat Model**), agregá un **OpenAI Chat Model** en la entrada **Chat Model** del agente y elegí tu credencial.
4. Probalo con **Open chat**, igual que antes.

</details>

### Alternativa: créditos de n8n Cloud

En n8n Cloud, algunos nodos de IA muestran **Use Gateway credits** en el campo de credencial: corren con créditos de tu instancia, sin crear una cuenta ni una clave en otro servicio. La prueba gratis incluye algunos créditos. Si tu nodo lo ofrece, sirve para arrancar ya y conectar tu clave después.

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| Error `429` o de cuota | Llegaste al límite del nivel gratuito por minuto. Esperá un momento y probá de nuevo, o hacé menos llamadas seguidas. |
| `API key not valid` | Copiá la clave otra vez, completa y sin espacios. Si es una clave vieja, creá una nueva en AI Studio: las claves viejas sin restricciones ya no funcionan. |
| AI Studio dice que no tenés permiso para crear la clave en ese proyecto (**You do not have permission to create a key in this project**) | Ese proyecto es de una organización y no tenés el permiso. Pedíselo a quien lo administra, o creá la clave con una cuenta de Google personal. |
| Un proyecto importado no deja usar el nivel gratuito | Google puede pedir verificar el proyecto antes. Para la hackathon, lo más rápido es una cuenta de Google personal, donde AI Studio arma el proyecto por su cuenta. |
| El nodo dice que el modelo no existe | Google retira modelos viejos cada tanto. Elegí otro de la lista del nodo. |
| El agente responde en inglés | Agregá al mensaje de sistema: «Respondé siempre en español, con voseo, en frases cortas». |

## Para seguir

- Ahora sí: elegí una [guía de proyecto](../proyectos/README.md). Para IA, empezá por [Asistente con IA para tu comunidad](../proyectos/01-asistente-ia-para-tu-comunidad.md).
- Documentación oficial: [credencial de Gemini en n8n](https://docs.n8n.io/integrations/builtin/credentials/googleai/), el nodo [AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/), [IA en n8n](https://docs.n8n.io/build/integrate-ai), [claves de la API de Gemini](https://aistudio.google.com/docs/api-key) y [precios y nivel gratuito](https://aistudio.google.com/docs/pricing).

---

[Índice](../README.md) · Anterior: [Core Wallet y Avalanche Fuji](06-core-wallet-y-fuji.md) · Siguiente: [Guías de proyecto](../proyectos/README.md)
