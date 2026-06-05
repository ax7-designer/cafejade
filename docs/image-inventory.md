# Image Inventory

Inventario base para sustituir las imagenes temporales del prototipo por material real de Cafe Jade.

## Objetivo

Reemplazar las imagenes genericas externas del `index.html` por archivos locales dentro de `assets/images/`.

## Estructura

- `assets/images/hero/`
- `assets/images/menu/`
- `assets/images/events/`
- `assets/images/brand/`

## Hero

Usar 1 imagen principal horizontal.

Checklist:

- Fachada o terraza con identidad clara.
- Buena iluminacion o posibilidad de mejora.
- Debe funcionar como portada en movil y escritorio.

Nombre sugerido:

- `assets/images/hero/cafe-jade-portada.jpg`

## Menu

Usar entre 4 y 8 imagenes.

Checklist:

- Cafe.
- Platillo principal.
- Bebida o coctel.
- Postre.
- Opcional: close-ups con textura o vajilla.

Nombres sugeridos:

- `assets/images/menu/cafe-especialidad.jpg`
- `assets/images/menu/platillo-destacado.jpg`
- `assets/images/menu/bebida-de-autor.jpg`
- `assets/images/menu/postre-de-la-casa.jpg`

## Events

Usar entre 2 y 4 imagenes.

Checklist:

- Musica en vivo.
- Ambiente nocturno.
- Evento privado o mesa montada.

Nombres sugeridos:

- `assets/images/events/musica-en-vivo.jpg`
- `assets/images/events/ambiente-nocturno.jpg`
- `assets/images/events/evento-privado.jpg`

## Brand

Usar recursos de apoyo.

Checklist:

- Logotipo.
- Isotipo si existe.
- Textura o detalle visual utilizable.

Nombres sugeridos:

- `assets/images/brand/logo-cafe-jade.png`
- `assets/images/brand/isotipo-cafe-jade.png`

## Estado actual

- No hay imagenes reales cargadas aun.
- `index.html` sigue usando placeholders externos.
- El sitio en produccion `https://produccion.cafejademexico.com/` si muestra fotografias originales del local y clientes.

## Criterio de reemplazo

- Prioridad 0: reutilizar las fotografias originales ya publicadas en el sitio real cuando tengan calidad suficiente.
- Prioridad 1: foto real actual del negocio.
- Prioridad 2: foto real mejorada.
- Prioridad 3: imagen generada solo si falta material.
