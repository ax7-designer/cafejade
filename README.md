# Cafe Jade Palenque

Prototipo web estatico para Cafe Jade Palenque: cafeteria, restaurante y centro cultural de eventos.

## Estado actual

- `index.html`: prototipo principal de una sola pagina.
- `brief.html`: brief/cuestionario del proyecto.
- `Show-Dashboard.ps1`: tablero local opcional para progreso interno.
- `.env.example`: ejemplo de variables locales, sin secretos reales.
- `docs/prototype-spec.md`: especificacion de producto para el prototipo.
- `docs/content-map.md`: mapa de contenido bilingue ES/EN.
- `docs/current-site-audit.md`: auditoria del `index.html` actual contra el objetivo.
- `docs/implementation-plan.md`: fases recomendadas para llegar al prototipo presentable.
- `docs/demo-handoff.md`: estado actual del prototipo y pendientes antes de version final.
- `docs/prototype-readiness.md`: evidencia rapida de lo cumplido, lo pendiente y el estado del prototipo.

Todavia no hay imagenes locales del negocio dentro del proyecto. Para el prototipo final conviene crear `assets/images/` y colocar ahi fotos reales del lugar, platillos, bebidas, eventos y fachada.

## Direccion del sitio

Estructura objetivo:

1. Inicio: primera impresion, foto principal y llamada a la accion.
2. Menu: galeria visual de platillos, cafes y bebidas.
3. Nuestra Historia: ambiente, valores y origen del cafe.
4. Eventos: musica en vivo, reservaciones y eventos privados.
5. Contacto: mapa, WhatsApp, horario y redes sociales.

Acciones principales:

- WhatsApp fijo en pantalla.
- Pedidos en linea como boton de accion.
- Reservaciones como formulario o enlace a WhatsApp/calendario.
- Version en ingles para turistas internacionales.

## Publicacion en Hostinger con Git

Este proyecto puede mantenerse como sitio estatico sin Node.js. Para publicarlo con Git:

1. Inicializar Git localmente.
2. Crear un repositorio remoto en GitHub.
3. Subir solo archivos publicos del sitio, nunca `.env` ni credenciales locales.
4. En Hostinger hPanel, abrir el sitio y usar la seccion Git.
5. Conectar el repositorio y rama principal.
6. Dejar el install path vacio si debe desplegarse en `/public_html`.

Nota: Hostinger requiere que la carpeta destino este vacia para el primer despliegue Git.

## Seguridad antes del primer commit

Antes de subir a GitHub:

- Rotar cualquier token que haya estado escrito en archivos locales.
- Revisar que `.gemini/settings.json` no se agregue al repositorio.
- Mantener credenciales en `.env` local o variables de entorno del sistema.
- Confirmar telefonos, redes sociales, mapa y enlaces reales.

## Siguiente fase sugerida

Convertir `index.html` en el prototipo presentable:

- Corregir navegacion: Inicio, Menu, Nuestra Historia, Eventos, Contacto.
- Quitar Bolsa de trabajo/login.
- Cambiar Tienda a boton de pedido.
- Agregar idioma ingles.
- Sustituir imagenes genericas por fotos reales o imagenes mejoradas.
- Verificar en movil y escritorio antes de presentar.
