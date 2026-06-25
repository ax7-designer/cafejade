# Cafe Jade Palenque

Prototipo web estatico para Cafe Jade Palenque: cafeteria, restaurante y centro cultural de eventos.

## Demo vigente

https://cafe-jade-palenque.vercel.app/

Nota: `https://luxury-syrniki-73ec68.netlify.app/` es una URL legacy de Netlify y no debe considerarse la version mas reciente.

Repositorio GitHub: https://github.com/ax7-designer/cafejade

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

El prototipo ya incluye imagenes locales tomadas del sitio en produccion dentro de `assets/images/`. Para version final conviene revisar si se sustituyen por archivos de mayor resolucion o por nuevas fotos aprobadas.

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

1. Confirmar que `main` este actualizado en GitHub: `https://github.com/ax7-designer/cafejade`.
2. En Hostinger hPanel, crear o abrir el sitio del dominio temporal.
3. Asegurar que `public_html` este vacio o respaldado antes del primer despliegue.
4. En la seccion Git de hPanel, conectar el repositorio y la rama `main`.
5. Dejar el destino en `/public_html` y sin comando de build: el sitio es estatico.
6. Abrir el dominio temporal de Hostinger y verificar inicio, menu, reserva, mapa, logos e imagenes.
7. Cuando `cafejade.mx` este pagado, actualizar `canonical`, Open Graph y datos estructurados antes de apuntar DNS.

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
