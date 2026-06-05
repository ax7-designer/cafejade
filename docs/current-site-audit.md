# Current Site Audit

Revision del `index.html` actual contra la especificacion del prototipo.

## Resumen

El sitio actual ya funciona como una pagina estatica con CSS y JavaScript ligero. Tiene una base aprovechable: hero, menu visual, eventos, formulario de reservacion, boton fijo de WhatsApp, menu movil y animaciones simples.

La brecha principal no es tecnica, sino de arquitectura, contenido e identidad: todavia se siente como una plantilla gastronomica generica y conserva elementos que el brief pide quitar o convertir.

## Lo aprovechable

- Sitio de una sola pagina, compatible con publicacion estatica.
- Boton fijo de WhatsApp.
- Formulario de reservacion que genera mensaje de WhatsApp.
- Tarjetas de menu con seleccion tactil.
- Menu movil funcional.
- Animaciones por scroll con `IntersectionObserver`.
- Paleta base cercana a verde/dorado.

## Brechas contra el objetivo

### Navegacion

Estado inicial auditado:

- Inicio.
- Tienda.
- Bolsa de trabajo.
- Contactanos.
- Reservar Mesa.

Objetivo:

- Inicio.
- Menu.
- Nuestra Historia.
- Eventos.
- Contacto.
- Pedido/Reservar como acciones, no como secciones principales.

Accion requerida:

- Reemplazar `Tienda` por `Menu`.
- Eliminar `Bolsa de trabajo`.
- Agregar `Nuestra Historia`.
- Separar `Eventos` y `Contacto`.
- Mantener `Reservar` y `Pedir por WhatsApp` como botones de accion.

### Secciones

Estado actual:

- `siteHeader`.
- Hero sin id de inicio.
- Capsula de pedido online.
- `experiencias`, que mezcla eventos, musica y platillos.
- Bloques promocionales sueltos.
- `menu`.
- Galeria.
- `reservar`, que mezcla eventos y formulario.
- Footer.

Objetivo:

- `#inicio`.
- `#menu`.
- `#historia`.
- `#eventos`.
- `#contacto`.

Accion requerida:

- Consolidar bloques sueltos.
- Crear una seccion clara de historia.
- Dividir eventos y contacto.
- Mantener reservacion dentro de Eventos o Contacto como accion.

### Contenido

Estado actual:

- Hay textos atractivos pero algunos se sienten genericos.
- Hay una frase en ingles aislada: "A great cocktail for a great moment...".
- No existe version bilingue completa.
- Datos de contacto y redes estan incompletos o como enlaces vacios.

Objetivo:

- Voz sofisticada y cuidada.
- Bilingue ES/EN.
- Contenido alineado con Cafe Jade, Palenque y experiencia cultural.

Accion requerida:

- Usar `docs/content-map.md` como base.
- Confirmar telefono, WhatsApp, correo, direccion, horarios y redes.
- Reemplazar textos que suenen a plantilla.

### Imagenes

Estado actual:

- Todas las imagenes principales venian de Unsplash.
- No habia fotos locales del negocio en `assets/images`.

Objetivo:

- Usar la mayoria de imagenes actuales reales del sitio, si se proporcionan.
- Mejorarlas si es necesario.
- Usar imagen generada solo como apoyo si falta material.

Accion requerida:

- Crear inventario de fotos reales.
- Copiarlas a `assets/images`.
- Sustituir URLs externas por archivos locales.
- Usar banco de imagenes solo como respaldo temporal cuando no exista foto real.

Estado actualizado:

- Las fotografias del sitio en produccion ya fueron descargadas a `assets/images/`.
- `index.html` ya usa archivos locales y no URLs de Unsplash.

### Interacciones

Estado actual:

- WhatsApp fijo.
- Reservacion via WhatsApp.
- Seleccion de menu para notas.
- Eventos seleccionables.
- Menu movil.

Objetivo:

- Mantenerlo simple y estatico.
- Pedidos y reservaciones deben abrir WhatsApp o una integracion externa.
- Calendario real solo si se decide usar proveedor externo.

Accion requerida:

- Agregar mensajes separados para pedido, reserva y evento privado.
- Agregar alternador ES/EN.
- Evitar construir una app compleja si no hay necesidad operativa.

## Riesgos antes de produccion

- Falta confirmar datos reales de contacto.
- Falta material fotografico local.
- Falta version bilingue completa.
- Falta revisar en navegador movil/escritorio.
- Falta primer commit y repositorio remoto.
- Los tokens que existieron en archivos locales deben rotarse antes de publicar.

## Dictamen

El proyecto esta en buen punto para convertirse en prototipo presentable, pero `index.html` todavia no cumple la historia de 5 secciones. La siguiente intervencion debe ser una reestructura de contenido y navegacion, manteniendo la base estatica y las interacciones utiles ya existentes.
