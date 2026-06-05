# Cafe Jade Prototype Spec

## Objetivo

Crear un prototipo web estatico, presentable y facil de publicar para Cafe Jade Palenque. El sitio debe conservar la esencia tradicional del lugar, modernizar la experiencia visual y funcionar como carta de presentacion para turistas, clientes locales y personas que buscan reservar o pedir.

## Tipo de sitio

- Sitio estatico de una sola pagina.
- HTML, CSS y JavaScript ligero.
- Sin Node.js obligatorio para produccion.
- Compatible con despliegue Git en Hostinger.
- Preparado para actualizarse por versiones mediante commit y push.

## Audiencia

- Visitantes locales que quieren ver menu, horarios, eventos y ubicacion.
- Turistas nacionales e internacionales que visitan Palenque.
- Personas que desean reservar una mesa, cotizar un evento privado o pedir por WhatsApp.

## Personalidad visual

Direccion inicial:

- Colorido mexicano con caracter chiapaneco.
- Verde jade como color principal.
- Terracota para calidez, alimento y tierra.
- Dorado para detalle sofisticado.
- Sensacion cultural, cuidada, gastronomica y acogedora.

Evitar:

- Plantilla generica de cafeteria.
- Exceso de lujo frio.
- Aspecto de app compleja.
- Secciones de bolsa de trabajo o login interno.

## Voz de marca

Tono:

- Sofisticado y cuidado.
- Cercano, sin sonar informal de mas.
- Sensible al contexto cultural de Palenque.

Frase guia:

> Una experiencia gastronomica que va mas alla de lo ordinario.

## Arquitectura de pagina

### 1. Inicio

Funcion:

- Primera impresion fuerte.
- Mostrar Cafe Jade como restaurante, cafeteria y espacio cultural.
- Activar acciones principales.

Contenido esperado:

- Foto principal real del lugar o una imagen mejorada a partir de material actual.
- Titular con el nombre Cafe Jade.
- Subtitulo breve sobre gastronomia, cafe y cultura en Palenque.
- Botones: Ver menu, Reservar, Pedir por WhatsApp.

### 2. Menu

Funcion:

- Mostrar platillos, cafe, bebidas y postres de forma visual.
- Funcionar bien en movil y pantallas tactiles.

Contenido esperado:

- Categorias simples: Platillos, Cafe, Bebidas, Postres.
- Tarjetas visuales con imagen, nombre, descripcion corta y precio si esta confirmado.
- Accion para pedir o consultar por WhatsApp.

### 3. Nuestra Historia

Funcion:

- Explicar quienes son y por que el lugar importa.
- Conectar el ambiente con Palenque, Chiapas y la experiencia cultural.

Contenido esperado:

- Texto editorial corto.
- Imagen de ambiente, fachada, interior o equipo.
- Valores: hospitalidad, sabor, cultura, cuidado, encuentro.

### 4. Eventos

Funcion:

- Presentar musica en vivo, noches culturales, reservaciones y eventos privados.

Contenido esperado:

- Lista de proximos eventos o tarjetas de eventos ejemplo para prototipo.
- Accion: Reservar / Cotizar evento.
- Mencion de musica en vivo y experiencias privadas.

### 5. Contacto

Funcion:

- Hacer facil encontrar, llamar o escribir.

Contenido esperado:

- Mapa embebido o bloque preparado para mapa.
- WhatsApp.
- Telefono.
- Correo.
- Horario.
- Redes sociales.
- Direccion completa cuando este confirmada.

## Acciones principales

### WhatsApp fijo

Debe estar visible en todo momento, especialmente en movil.

Casos:

- Consultar informacion.
- Reservar.
- Pedir.
- Cotizar evento privado.

### Pedidos en linea

Para prototipo estatico, la opcion recomendada es:

- Boton "Pedir por WhatsApp".
- Mensaje prellenado con pedido o categoria seleccionada.

Evolucion futura:

- Integracion con servicio externo de pedidos.
- Catalogo administrable.
- Pagos en linea.

### Reservaciones

Para prototipo estatico, la opcion recomendada es:

- Formulario ligero que abre WhatsApp con los datos.
- Campos: nombre, fecha, personas, motivo o notas.

Evolucion futura:

- Calendario externo embebido.
- Sistema con disponibilidad real.
- Confirmaciones automaticas.

### Version en ingles

Para prototipo:

- Alternador ES / EN en la interfaz.
- Textos principales traducidos.

Evolucion futura:

- Paginas separadas `/en/`.
- SEO bilingue por idioma.

## Imagenes

Prioridad:

1. Fotos reales actuales del sitio.
2. Fotos reales mejoradas.
3. Imagenes generadas solo cuando falte material o para exploracion visual.
4. Banco de imagenes solo como sustituto temporal.

Carpetas sugeridas:

- `assets/images/hero/`
- `assets/images/menu/`
- `assets/images/events/`
- `assets/images/brand/`

## Requisitos de entrega del prototipo

El prototipo se considera presentable cuando:

- La navegacion tenga solo: Inicio, Menu, Nuestra Historia, Eventos, Contacto.
- No exista Bolsa de trabajo ni login interno.
- Tienda/pedidos sea una accion, no una seccion principal.
- Tenga WhatsApp fijo.
- Tenga una base bilingue ES/EN.
- Use imagenes locales o una estrategia clara para sustituir imagenes genericas.
- Abra correctamente en navegador sin build.
- Este listo para primer commit y push.

