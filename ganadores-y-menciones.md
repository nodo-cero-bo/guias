# Ganadores y menciones

En Nodo Cero hay tres equipos ganadores y dos menciones especiales: «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud». Qué reconoce cada una y cómo contar en la demo lo que usaste.

| De un vistazo | |
|---|---|
| **Para quién es** | Para cada equipo que va a presentar, y para quien quiere saber cómo sumar Fuji o Google Cloud a su proyecto. |
| **Qué vas a lograr** | Saber cómo es el cierre del día y llegar a la demo contando con claridad qué construiste y con qué. |
| **Tiempo estimado** | 5 minutos de lectura. |
| **Qué necesitás** | Tu proyecto, aunque sea una parte, y la demo en preparación ([Cómo presentar tu proyecto](presentar.md)). |

## Cómo es

- **Tres equipos ganadores**: primer, segundo y tercer lugar.
- **Dos menciones especiales**: «Mejor uso de Avalanche Fuji» y «Mejor uso de Google Cloud». Para la de Google Cloud cuenta cualquier servicio de Google Cloud (Vertex AI, Translation, Natural Language, Cloud Storage, BigQuery) y también Gemini con la clave gratis de Google AI Studio.
- **Cualquier equipo puede llegar a cualquiera**: no importa la [línea](lineas/README.md) que eligieron. Un proyecto de la línea Impacto que usa Fuji, o uno de la línea IA que usa Google Cloud, cuentan igual.
- **Cuándo**: las presentaciones empiezan a las 15:00, y los lugares y las menciones se anuncian en el cierre, a las 15:45.

Estas guías no definen criterios ni puntajes, y no los vamos a inventar. Lo que sí podés hacer es que se entienda bien qué construiste: para eso está esta página. Si tenés una duda sobre cómo se elige, preguntale a la organización el día del evento.

## Mención «Mejor uso de Avalanche Fuji»

**Qué reconoce:** al equipo que mejor integre Avalanche Fuji, la red de prueba de Avalanche, en su proyecto. Es parte del track de Avalanche Fuji, con el apoyo de Team1.

**Formas de sumar Fuji a tu proyecto**, con los workflows de Nodo Cero:

| Si querés... | Empezá con |
|---|---|
| Leer una transacción y explicarla | [`12-fuji-leer-transaccion`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/12-fuji-leer-transaccion), el desafío del día |
| Verificar que un pago llegó | [`13-fuji-verificar-pago`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/13-fuji-verificar-pago) y la guía [Pagos verificables](proyectos/03-pagos-verificables-en-fuji.md) |
| Que una IA conteste sobre Fuji | [`40-agente-web3-fuji`](https://github.com/nodo-cero-bo/workflows/tree/main/40-proyectos/40-agente-web3-fuji) y la guía [Agente Web3](proyectos/04-agente-web3-que-lee-fuji.md) |
| Dejar algo tuyo en la red | [`avalanche/contratos`](https://github.com/nodo-cero-bo/workflows/tree/main/avalanche/contratos), [`16-fuji-eventos-contrato`](https://github.com/nodo-cero-bo/workflows/tree/main/10-avalanche-fuji/16-fuji-eventos-contrato) y la guía [Tu contrato en Fuji](proyectos/06-tu-contrato-en-fuji.md) |
| Ver todo el camino | La línea [Web3 con Avalanche Fuji](lineas/web3.md) |

**Cómo contarlo en la demo:**

1. **Decí dónde está Fuji y para qué**: «Fuji es la red de prueba de Avalanche; la usamos para que cada pago se pueda verificar».
2. **Mostralo funcionando**: la transacción o el contrato en el [explorador de Fuji](https://build.avax.network/explorer/fuji/c-chain?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026), y lo que hace n8n con esos datos.
3. **Aclará que es de prueba**: no se usa plata real.
4. **Registralo**: en el [formulario de la vitrina](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml), marcá **Avalanche Fuji** entre las tecnologías y sumá el hash de una transacción tuya (es un dato público). El formulario también pregunta si el equipo instaló Core Wallet, si se inscribió en Avalanche Academy y si se sumó a Team1 LATAM, para que Team1 pueda ver lo que se construyó con Fuji.

Todo lo de Avalanche, junto: [Recursos de Avalanche](avalanche/recursos.md).

## Mención «Mejor uso de Google Cloud»

**Qué reconoce:** al equipo que mejor use Google Cloud en su proyecto.

**Formas de sumar Google Cloud a tu proyecto**, con los workflows de Nodo Cero:

| Si querés... | Servicio | Empezá con |
|---|---|---|
| Un asistente con Gemini en Google Cloud | Vertex AI | [`50-vertex-ai-asistente`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/50-vertex-ai-asistente) |
| Entender el tono y los temas de muchas opiniones | Cloud Natural Language | [`51-sentimiento-natural-language`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/51-sentimiento-natural-language) |
| Que un aviso llegue en quechua, aimara o guaraní | Cloud Translation y Vertex AI | [`52-traducir-y-resumir`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/52-traducir-y-resumir) y la guía [Traducí y resumí con Google Cloud](proyectos/09-traducir-y-resumir-con-google-cloud.md) |
| Guardar fotos o archivos con un enlace | Cloud Storage | [`53-archivos-a-cloud-storage`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/53-archivos-a-cloud-storage) |
| Guardar respuestas y consultarlas con SQL | BigQuery | [`54-bigquery-respuestas`](https://github.com/nodo-cero-bo/workflows/tree/main/50-google-cloud/54-bigquery-respuestas) |

Para crear el proyecto, sumar los créditos si tu equipo los recibió y conectar la credencial, seguí [Google Cloud y créditos](00-empezar/08-google-cloud.md). Qué servicio sirve para qué, cuánto cuesta e ideas para combinarlos: [Recursos de Google Cloud](google-cloud/recursos.md). Ojo con la plata: desde el 16 de noviembre de 2026, el crédito de bienvenida de la prueba gratis de Google Cloud no paga Vertex AI ni la API de Gemini ([aviso de la guía](00-empezar/08-google-cloud.md#primero-te-hace-falta-google-cloud)). Para IA gratis está Gemini con la clave de Google AI Studio ([guía 07](00-empezar/07-clave-gemini.md)). Para esa mención cuenta cualquier servicio de Google Cloud y también Gemini con la clave gratis de Google AI Studio.

**Cómo contarlo en la demo:**

1. **Nombrá cada servicio y para qué lo usaste**: «Cloud Translation traduce el aviso al guaraní; Gemini en Vertex AI lo resume antes».
2. **Mostralo funcionando**: el nodo de Google en el canvas, la ejecución y el resultado (la traducción, el sentimiento, el archivo guardado).
3. **Cuidá la pantalla**: no muestres la clave JSON de la cuenta de servicio ni la ventana de la credencial.
4. **Registralo**: en el [formulario de la vitrina](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml), contá en la descripción qué servicios de Google Cloud usa el proyecto.

Y al terminar el día, apagá lo que no uses: [cómo](00-empezar/08-google-cloud.md#11-al-terminar-apagá-todo).

## Antes de presentar, para todos los equipos

- [ ] El proyecto está registrado en la [vitrina](https://github.com/nodo-cero-bo/proyectos).
- [ ] La demo muestra la entrada, lo que pasa en n8n y el resultado ([parte 8 del tutorial](tutorial/08-tu-demo.md)).
- [ ] Si usan Fuji o Google Cloud, lo dicen con claridad y lo muestran funcionando.
- [ ] El plan B está listo: una ejecución exitosa guardada, capturas y, si usan Fuji, un hash ya verificado.
- [ ] Ninguna clave, correo ni teléfono a la vista.
- [ ] Ensayaron al menos dos veces y saben quién habla en cada parte.

## Si algo falla

| Lo que pasa | Qué hacer |
|---|---|
| No saben si su proyecto entra en una mención | Preguntale a la organización antes de presentar. |
| El proyecto usa Fuji y Google Cloud | Cuenten las dos cosas: cada mención reconoce algo distinto. |
| No llegaron a integrar lo que querían | Muestren lo que funciona y cuenten qué falta. Una parte que anda se entiende mejor que un todo que no arranca. |
| La red falla justo en la demo | Pasen al plan B: la ejecución guardada en **Executions** y el hash ya verificado en el explorador. |

## Para seguir

- Cómo armar la demo, con un guion para completar: [Cómo presentar tu proyecto](presentar.md).
- Las cuatro líneas y sus rutas: [Las líneas de la hackathon](lineas/README.md).
- Después del sábado: [Seguir construyendo](seguir-construyendo.md).

---

[Índice](README.md) · [Las líneas](lineas/README.md) · [Cómo presentar](presentar.md)
