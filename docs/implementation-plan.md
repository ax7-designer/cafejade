# Implementation Plan

Plan de trabajo para convertir el sitio actual en un prototipo presentable de Cafe Jade Palenque.

## Fase 1: Base segura y versionable

Estado: en progreso avanzado.

Tareas:

- Inicializar Git.
- Quitar secretos de archivos locales.
- Agregar `.gitignore`.
- Agregar `.env.example`.
- Documentar flujo Hostinger/Git.
- Rotar credenciales expuestas antes de subir a GitHub.

## Fase 2: Reestructura del prototipo

Estado: pendiente de confirmacion visual.

Tareas:

- Cambiar navegacion a Inicio, Menu, Nuestra Historia, Eventos, Contacto.
- Quitar Bolsa de trabajo/login.
- Convertir Tienda/pedidos en boton de accion.
- Crear ids estables: `inicio`, `menu`, `historia`, `eventos`, `contacto`.
- Ordenar el recorrido completo en una sola pagina.
- Mantener WhatsApp fijo.

## Fase 3: Contenido bilingue

Estado: base creada en `docs/content-map.md`.

Tareas:

- Agregar alternador ES/EN.
- Traducir textos principales.
- Traducir botones y formularios.
- Mantener mensajes de WhatsApp en espanol por defecto, salvo seleccion EN.

## Fase 4: Imagenes

Estado: pendiente de material real.

Tareas:

- Recibir o localizar imagenes actuales reales del sitio.
- Crear carpetas en `assets/images`.
- Reemplazar imagenes de Unsplash por imagenes locales.
- Mejorar imagenes reales si el material lo permite.
- Usar imagen generada solo para cubrir faltantes claros.

## Fase 5: Reservas y pedidos

Estado: prototipo funcional basico ya existe parcialmente.

Tareas:

- Separar flujos de WhatsApp: pedido, reserva, evento privado.
- Revisar numero oficial.
- Revisar campos de formulario.
- Definir si el calendario sera solo formulario, enlace externo o sistema real.

## Fase 6: Verificacion local

Estado: pendiente.

Tareas:

- Abrir `index.html` en navegador.
- Revisar escritorio.
- Revisar movil.
- Probar menu movil.
- Probar alternador de idioma.
- Probar botones de WhatsApp.
- Probar formulario de reserva.
- Revisar que no haya texto encimado.
- Revisar que no existan enlaces vacios visibles.

## Fase 7: Primer commit y publicacion

Estado: completada parcialmente; falta conectar Hostinger.

Tareas:

- Revisar `git status` antes de cada publicacion.
- Confirmar que no haya secretos antes de cada push.
- Mantener `main` actualizado en GitHub.
- Usar Vercel como demo vigente mientras Hostinger queda listo.
- Configurar Hostinger Git deployment.

## Decision pendiente

Antes de ejecutar la Fase 2, confirmar el brief visual:

> Verde jade + terracota + dorado, mexicano/chiapaneco, sofisticado y cuidado, una sola pagina estatica bilingue.

