# Cafe Jade - Pendientes Para Cliente y Operacion

Fecha: 2026-06-12

## Identidad visual

- Resuelto en prototipo: se integraron los logotipos vectoriales oficiales en navegacion fija, hero y footer.
- Assets publicados:
  - `assets/images/brand/logo-cj-horizontal-blanco.svg`
  - `assets/images/brand/logo-cj-horizontal-verde.svg`
  - `assets/images/brand/logo-cj-simbolo-original.svg`
- Pendiente opcional: validar con el cliente si la version blanca horizontal debe mantenerse como uso principal en fondos oscuros.

## Menu completo

- Pendiente: pedir al cliente el menu completo digitalizado.
- Formato ideal: tabla con categoria, nombre del platillo/bebida, descripcion corta, precio, disponibilidad, imagen sugerida y notas de promocion.
- Razon: con una tabla limpia se puede completar la web sin capturar manualmente desde imagenes o PDF.

## Cambios futuros de menu

Si el cliente quiere cambiar precios, imagenes, nombres, promociones, combos o descuentos con frecuencia, se recomienda definir uno de estos caminos:

1. Mantener cambios manuales por version: editar HTML, hacer commit y publicar en Vercel/Hostinger.
2. Usar una fuente editable tipo hoja de calculo: el sitio consume o se genera desde una tabla aprobada.
3. Agregar un CMS ligero: panel privado para que el cliente edite menu, eventos y promociones sin tocar codigo.

Para este prototipo estatico, la opcion 1 es suficiente. Para operacion frecuente, la opcion 2 o 3 sera mas mantenible.

## Correo empresarial

- Pendiente: crear y configurar `contacto@cafejade.com`.
- Gestion sugerida: Hostinger, junto con dominio, DNS y buzones.
- No sustituir el correo actual en produccion hasta confirmar que el nuevo buzon recibe y envia correctamente.

## SEO y GEO

- Pendiente operativo: cuando exista dominio final, reemplazar la URL de demo Vercel en `canonical`, Open Graph y datos estructurados.
- Pendiente comercial: confirmar horarios, telefono oficial, dominio final, correo final y menu completo para enriquecer buscadores tradicionales y respuestas de modelos de lenguaje.
