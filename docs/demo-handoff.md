# Demo Handoff

Estado del prototipo y especificaciones de diseño.

## Resuelto en la última evolución

1.  **Imágenes de Alta Resolución y Reales:**
    *   Sustituidas las fotos genéricas/de stock por material real optimizado tomado directamente de la carpeta de fotos propia del cliente (`D:\CajeJade\FOTOS JADE`).
    *   Las imágenes fueron procesadas a tamaños y calidades óptimas para web usando Pillow, reduciendo el peso de archivos de ~15MB a menos de **300KB** en promedio (formato JPEG progresivo con calidad 85%).
2.  **Copywriting Enfocado en el Huésped (User-First):**
    *   Se eliminaron explicaciones técnicas de cómo usar el prototipo ("pedido táctil", "base bilingüe", "pedido directo en un toque").
    *   Se implementó copy de marketing de alto valor bilingüe (ES/EN) destacando la atmósfera mística de La Cañada, la cocina de autor y la música acústica.
    *   La llamada a la acción secundaria del Hero ahora es **Reservar mesa** y lleva al formulario de contacto directamente.
3.  **Galería de Menú Dinámica con Filtros:**
    *   Se retiró el sistema de selección de productos y el botón de "Pedir por WhatsApp" desde el menú.
    *   El menú es ahora una galería limpia con precios visibles (9 platillos y bebidas estructurados).
    *   Se implementó una barra de filtros interactiva con Vanilla JS que permite filtrar los productos instantáneamente por: *Todos, Bebidas y Café, Comida y Especialidades, Postres*.
4.  **Tipografía Editorial y Espaciado Premium:**
    *   Se corrigió la variable `--font-display` para utilizar realmente la tipografía de Google importada **Playfair Display**, dándole un aspecto editorial y de lujo de inmediato.
    *   Se ajustó el interletrado (`letter-spacing`) en encabezados grandes (`-0.015em` para Playfair) y en subtítulos/eyebrows en mayúsculas (`0.12em` para Inter) logrando jerarquía y elegancia visual.
5.  **Especificación y Guía para Reemplazo de Logotipo:**
    *   Se agregaron clases específicas y guías comentadas directamente en el código para facilitar el futuro cambio de marca.

---

## Pendiente en Futuras Sesiones

1.  **Implementar Logo Final:**
    *   Cuando el cliente provea los logos vectoriales o rasterizados finales.
    *   *Especificaciones del Logo:*
        *   **Formato:** SVG inline o enlazado para evitar pixelación. Alternativamente, PNG de mínimo `120px` de ancho.
        *   **Color:** Se requiere una versión monocromática clara/blanca (o dorado suave `#ead6a6`) para que contraste en el menú de navegación transparente sobre el fondo oscuro.
2.  **Afinación de Precios y Menú Fijo:**
    *   Validar con el cliente si los precios colocados para las nuevas fotos son correctos o si deben ajustarse.
