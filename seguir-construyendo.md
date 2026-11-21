# Seguir construyendo

Qué hacer después del sábado para que tu proyecto no se quede en la demo: guardarlo, publicarlo en tu GitHub, documentarlo, registrarlo en la vitrina y seguir aprendiendo.

| De un vistazo | |
|---|---|
| **Para quién es** | Para cada equipo que terminó la hackathon con algo andando (o casi) y quiere seguir. |
| **Qué vas a lograr** | Tus workflows a salvo, un repo propio con README, el proyecto en la vitrina de Nodo Cero y un camino claro para seguir aprendiendo. |
| **Tiempo estimado** | 40 minutos para guardar, publicar y registrar. Lo demás, a tu ritmo. |
| **Qué necesitás** | Tu n8n, una cuenta de GitHub y las ganas de seguir. |

## Pasos

El orden que te recomendamos:

1. [Guardá tus workflows](#1-guardá-tus-workflows-antes-de-que-termine-la-prueba) antes de que termine la prueba de n8n Cloud.
2. [Revisá el JSON](#2-revisá-el-json-antes-de-publicarlo) para no publicar datos de nadie.
3. [Publicalo en tu GitHub](#3-publicalo-en-tu-github) y [documentalo](#4-documentalo).
4. [Registralo en la vitrina](#5-registralo-en-la-vitrina-de-nodo-cero) de Nodo Cero.
5. Elegí un recurso para seguir aprendiendo esta semana: [n8n](#6-seguí-aprendiendo-n8n), [Avalanche](#7-seguí-con-avalanche) o [Supabase y Clerk](#8-seguí-con-supabase-y-clerk).

## 1. Guardá tus workflows antes de que termine la prueba

La prueba gratis de n8n Cloud dura 14 días. Si no pasás a un plan pago, al terminar n8n borra la instancia; después tenés 90 días para descargar tus workflows. Mejor no esperar:

1. Abrí cada workflow tuyo y, en el menú **···** del encabezado, elegí **Export JSON**. Se descarga un archivo `.json`.
2. Ponele un nombre claro (por ejemplo `reportes-ciudadanos.json`) y guardalo en una carpeta del proyecto.
3. Anotá aparte qué credenciales usa cada uno (el tipo, no la clave): te va a servir para volver a armarlo en otra instancia.

Para volver a usarlos, importalos como cualquier workflow de Nodo Cero ([guía 02](00-empezar/02-importar-workflows.md)) y reconectá tus credenciales.

> [!IMPORTANT]
> **Si usaste Google Cloud**, no lo dejes andando sin mirar: borrá la clave de la cuenta de servicio, revisá **Billing** y, si no lo vas a seguir usando, apagá el proyecto. Paso a paso en [Google Cloud y créditos](00-empezar/08-google-cloud.md#11-al-terminar-apagá-todo).

> [!NOTE]
> Si te quedaste sin prueba, n8n también se puede instalar en tu compu o en un servidor (self-hosted). Mirá [Host n8n](https://docs.n8n.io/deploy/host-n8n) y los planes de n8n Cloud en [n8n.io/pricing](https://n8n.io/pricing/). La guía oficial para descargar workflows de una prueba vencida está en [Download workflows](https://docs.n8n.io/deploy/use-n8n-cloud/download-workflows).

## 2. Revisá el JSON antes de publicarlo

El archivo exportado no trae tus claves, pero puede traer otras cosas que no querés publicar:

| Qué revisar | Por qué |
|---|---|
| `pinData` | Los datos fijados (pinned) para probar viajan dentro del JSON. Si fijaste respuestas reales de un formulario o de un webhook, pueden tener datos de personas. Desfijalos con **Unpin data** antes de exportar, o borrá ese bloque del archivo. |
| `credentials` | Viaja el nombre que le pusiste a cada credencial y un id interno, no la clave. Igual, que el nombre no diga nada privado. |
| Notas adhesivas, nodos **Edit Fields (Set)** y **Code** | Que no haya una clave, un correo o un teléfono escrito a mano. |
| URLs de webhooks | Que no aparezca la URL de producción de algo que no querés que cualquiera llame. |

## 3. Publicalo en tu GitHub

1. Si no tenés cuenta, [creala](https://docs.github.com/es/account-and-profile/how-tos/account-management/creating-an-account-on-github). Es gratis.
2. Creá un repo nuevo desde [github.com/new](https://github.com/new): público, con un nombre corto, y marcá **Add a README file**.
3. Subí tu `.json` con **Add file**, **Upload files** ([cómo agregar archivos a un repo](https://docs.github.com/es/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)).
4. Elegí una licencia para que otras personas sepan si pueden reusarlo. Para workflows y código, la MIT es simple y muy usada ([cómo agregar una licencia](https://docs.github.com/es/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository), [choosealicense.com](https://choosealicense.com/)).

Si nunca usaste GitHub, el recorrido oficial [Hola mundo](https://docs.github.com/es/get-started/using-github/hello-world) te lleva de la mano en un rato.

## 4. Documentalo

Un buen README hace que tu proyecto se entienda sin vos al lado. El repo de proyectos trae una plantilla lista: [PLANTILLA_README.md](https://github.com/nodo-cero-bo/proyectos/blob/main/PLANTILLA_README.md). Copiala en tu repo y completá:

1. **El problema**: para quién es y qué le pasa hoy.
2. **La solución**: qué hace tu flujo, en dos o tres frases.
3. **Cómo funciona**: los pasos del workflow, de la entrada a la salida. Una captura del canvas ayuda mucho.
4. **Tecnologías y credenciales**: qué servicios usa y qué tipo de credencial pide cada uno.
5. **Cómo probarlo**: importar, conectar credenciales y qué dato de prueba usar.
6. **Qué sigue**: lo que te gustaría sumar.

Para darle formato: [escritura y formato básicos en GitHub](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

<details>
<summary>Opcional: una página para tu proyecto con GitHub Pages</summary>

Si tu proyecto tiene una página (por ejemplo, la app con login de Clerk), GitHub Pages la publica gratis desde tu repo, en una dirección del estilo `tu-usuario.github.io/tu-repo`. Seguí la [guía rápida de GitHub Pages](https://docs.github.com/es/pages/quickstart). Acordate de sumar esa dirección a los orígenes permitidos de tu webhook (CORS) y, si usás Clerk, a la configuración de tu aplicación.

</details>

## 5. Registralo en la vitrina de Nodo Cero

El repo [nodo-cero-bo/proyectos](https://github.com/nodo-cero-bo/proyectos) junta los proyectos de la hackathon. Con una persona por equipo alcanza:

1. Entrá a **[Registrá tu proyecto](https://github.com/nodo-cero-bo/proyectos/issues/new?template=proyecto.yml)**.
2. Completá el formulario: nombre, equipo, qué hace, tecnologías y, si querés, el enlace a tu repo o video y el hash de una transacción en Fuji.
3. Envialo. Si después cambia algo, editá el issue: la ficha se actualiza sola.

Todo lo que pongas ahí es público: sin correos, teléfonos ni claves.

## 6. Seguí aprendiendo n8n

| Recurso | Para qué |
|---|---|
| [Documentación de n8n](https://docs.n8n.io/build-your-first-workflow) | La referencia de cada nodo y cada concepto. |
| [learn.n8n.io](https://learn.n8n.io/) | Cursos gratis, paso a paso. |
| [Plantillas de n8n](https://n8n.io/workflows/) | Miles de workflows de la comunidad para importar y estudiar. Cómo usarlas: [Use templates](https://docs.n8n.io/build/ways-of-building-workflows/use-templates). |
| [Foro de la comunidad](https://community.n8n.io/) | Para preguntar en la categoría [Questions](https://community.n8n.io/c/questions/12) y mostrar lo tuyo en [Built with n8n](https://community.n8n.io/c/built-with-n8n/15). |
| [Canal de YouTube de n8n](https://www.youtube.com/@n8n-io) | Tutoriales y novedades en video. |
| [Programa de creadores](https://n8n.io/creators/) | Si querés publicar tus workflows como plantillas para la comunidad. |
| [Manejo de errores](https://docs.n8n.io/build/flow-logic/handle-errors-gracefully) | El paso de «funciona en la demo» a «funciona todos los días». |

## 7. Seguí con Avalanche

Si tu proyecto usa Fuji, o te dio curiosidad:

- **[Aprendé en Avalanche Academy](https://build.avax.network/academy?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026)**: cursos gratis con certificado. Para cualquier persona, [Blockchain Fundamentals](https://build.avax.network/academy/blockchain/blockchain-fundamentals?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026).
- **[Sumate a Team1 LATAM](https://www.team1.network/?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026#waitlist)** y seguí los [eventos de Team1](https://luma.com/user/usr-DrrXj8SDE9OLNi6?utm_source=nodo-cero&utm_medium=github&utm_campaign=hackathon-n8n-bolivia-2026) en Luma.
- Todo junto, con el faucet, el explorador y la documentación: [Recursos de Avalanche](avalanche/recursos.md).

## 8. Seguí con Supabase y Clerk

- Supabase: [documentación](https://supabase.com/docs), [tablas](https://supabase.com/docs/guides/database/tables), [Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security), [IA y vectores](https://supabase.com/docs/guides/ai) y cómo [usar Clerk como login de Supabase](https://supabase.com/docs/guides/auth/third-party/clerk).
- Clerk: [documentación](https://clerk.com/docs), [JavaScript quickstart](https://clerk.com/docs/js-frontend/getting-started/quickstart), [tokens de sesión](https://clerk.com/docs/guides/sessions/session-tokens) e [invitaciones](https://clerk.com/docs/guides/users/inviting).

## Si algo falla

| Lo que ves | Qué probar |
|---|---|
| Mi prueba de n8n Cloud ya venció | Tenés 90 días para descargar tus workflows: seguí [Download workflows](https://docs.n8n.io/deploy/use-n8n-cloud/download-workflows). |
| GitHub no me deja subir el archivo | Revisá que estés en tu repo (no en uno ajeno) y que el archivo pese menos de 25 MB si lo subís desde el navegador. |
| Importé mi JSON en otra instancia y los nodos piden credenciales | Es lo esperado: las claves no viajan. Creá de nuevo cada credencial ([guía 03](00-empezar/03-credenciales.md)). |
| Publiqué una clave sin querer | Borrala del archivo y, sobre todo, rotala en el servicio donde la creaste: lo que se publicó una vez puede haber quedado copiado. |

## Para seguir

- Volvé a las [guías de proyecto](proyectos/README.md) y sumale una pieza nueva a lo tuyo.
- Buscá inspiración en el [banco de ideas](ideas.md).
- Cuando lo vuelvas a mostrar, repasá [cómo presentar](presentar.md).

---

[Índice](README.md) · [Guías de proyecto](proyectos/README.md) · [Recursos de Avalanche](avalanche/recursos.md)
