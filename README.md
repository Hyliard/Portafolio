# Luis Gerardo Martínez · Portafolio

QA Engineer con experiencia profesional en productos web y móviles, banca y medios de pago. Estoy en transición activa hacia desarrollo iOS con Swift y SwiftUI: aplico mi experiencia en calidad al desarrollo, las pruebas y el diseño de soluciones confiables.

## Enfoque y tecnologías

- **iOS:** Swift, SwiftUI, SwiftData, Xcode, TestFlight y App Store Connect.
- **QA:** pruebas funcionales, de regresión e integración, Playwright, Postman, Insomnia y validación de datos con SQL.
- **Herramientas:** Git, GitHub, Docker y APIs REST.
- **Experiencia práctica en Auth API:** Node.js, Express, PostgreSQL y Prisma.
- **Sitio web:** HTML, CSS y JavaScript, sin proceso de compilación.

## Proyectos destacados

| Proyecto | Descripción | Código |
| --- | --- | --- |
| PassGenerator iOS | SwiftUI, NavigationStack, SecRandomCopyBytes y muestreo con rechazo. Categorías garantizadas, fortaleza, copiado accesible y modos claro/oscuro. | [Repositorio](https://github.com/Hyliard/passGeneratoriOS) |
| TodoListApp | SwiftUI y SwiftData en iOS 17+. Creación, eliminación y cambio de estado de tareas con persistencia local. | [Repositorio](https://github.com/Hyliard/TodoListApp) |
| IPC Argentina | Ajustes monetarios por composición de inflación mensual del BCRA (API v4, variable 27). Períodos trimestrales, validación de datos e historial local con registros automáticos y manuales. | [Repositorio](https://github.com/Hyliard/IPCArgentina) |
| CodeQR | Generación de QR con HTML, CSS y JavaScript. Interfaz responsive, validación de enlaces y modos claro/oscuro. | [Repositorio](https://github.com/Hyliard/CodeQR) · [Demo](https://hyliard.github.io/CodeQR/) |
| Auth API | API REST con Node.js, Express, PostgreSQL, Prisma y Docker Compose. bcryptjs, JWT, sesiones persistentes y revocables, gestión de dispositivos y colección Postman. | [Repositorio](https://github.com/Hyliard/auth-api) |
| Portafolio personal | Experiencia profesional y selección de proyectos, navegación por categorías, tema persistente y textos expandibles. | [Repositorio](https://github.com/Hyliard/Portafolio) |

Los proyectos iOS encabezan la navegación de categorías. Las páginas de iOS y web presentan primero los proyectos destacados y conservan trabajos anteriores de aprendizaje al final. No se afirma publicación en App Store.

## Ejecutar localmente

Desde la raíz del repositorio, con Python 3 instalado:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8000` en el navegador. Detener el servidor con `Ctrl+C`. Las fuentes e iconos externos requieren conexión a Internet.

## Estructura

```text
index.html                 Perfil, experiencia y habilidades
projects.html              Categorías: iOS, web y backend
ios-projects.html          Aplicaciones iOS
web-projects.html          Aplicaciones web
backend-projects.html      Auth API
contact.html               Canales de contacto
css/                       Estilos por página y theme.css compartido
js/scripts.js              Tema claro/oscuro y botones «Leer más»
assets/images/             Fotos, capturas y portadas SVG
assets/icons/              Iconos y recursos heredados
LICENSE                    Licencia MIT
```

## Diseño y revisión

Se mantiene la estructura visual existente, las tarjetas y los modos claro y oscuro. El tema se guarda en `localStorage`; sin preferencia guardada se utiliza la del sistema. Los controles incluyen foco visible y los botones «Leer más» comunican su estado expandido.

PassGenerator, TodoListApp, CodeQR e IPC Argentina utilizan capturas PNG, presentadas mediante CSS sin deformar sus proporciones. Auth API conserva una portada técnica SVG. Las categorías iOS, web y backend utilizan las portadas `projects-ios-cover.png`, `projects-web-cover.png` y `projects-backend-cover.png`, respectivamente.

Para revisar cambios, recorrer las seis páginas mediante HTTP, comprobar navegación, temas, textos expandibles, imágenes y tamaños móvil/tablet/escritorio. Ejecutar `git diff --check` antes de publicar.

## Contacto y licencia

[GitHub](https://github.com/Hyliard) · [LinkedIn](https://www.linkedin.com/in/luis-gerardo-martinez-03898582/) · [Correo](mailto:luisgerardomartinezh@gmail.com)

Licencia [MIT](LICENSE).
