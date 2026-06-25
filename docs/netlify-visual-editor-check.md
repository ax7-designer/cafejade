# Cafe Jade - Netlify and Visual Editor Check

Fecha: 2026-06-12

Nota 2026-06-25: este documento queda como evidencia historica. La demo vigente es `https://cafe-jade-palenque.vercel.app/`; la URL de Netlify es legacy y no debe usarse para revisar la version mas reciente.

## Objetivo

Validar el handoff de `README_HANDOFF.md` contra el proyecto real, confirmar que la publicacion en Netlify respondia en ese momento y dejar una siguiente actividad clara para continuar sin depender de memoria de conversacion.

## Evidencia revisada

- Proyecto local en `D:\CajeJade`.
- Archivo principal `index.html`.
- Handoff `README_HANDOFF.md`.
- Carpeta de fotos originales `FOTOS JADE/`.
- Scripts locales revisados en esa fecha; no son requeridos para el despliegue actual.
- Publicacion Netlify historica: `https://luxury-syrniki-73ec68.netlify.app/`.

## Resultado rapido

El handoff era util para el estado revisado en esa fecha. La estructura principal existia, las fotos originales estaban versionadas en la carpeta esperada y Netlify respondia con el sitio publicado.

## Comprobaciones

| Punto | Estado | Nota |
| --- | --- | --- |
| `index.html` existe | OK | Archivo principal del prototipo. |
| `FOTOS JADE/` existe | OK | Contiene fotografias originales de alta resolucion. |
| Scripts locales | Historico | No son requeridos para el despliegue estatico en Hostinger. |
| `Show-Dashboard.ps1` existe | OK | Panel auxiliar disponible. |
| `.env.example` existe | OK | Variables documentadas para integraciones. |
| Netlify responde | OK | HTTP `200` en la URL publica del handoff. |
| Foto original en Netlify | OK | `_MG_9539.jpg` responde como `image/jpeg`. |
| Ubicacion exacta | OK | Coordenadas `17.509475, -91.986831` presentes localmente y en Netlify. |
| Rutas de imagen usadas por el HTML | OK | Todas las rutas `FOTOS JADE/...` referenciadas existen localmente. |
| Editor visual local | OK | El servidor local entrega la pagina y el script de guardado existe. |
| Editor visual en produccion | Parcial | El script esta incluido en el HTML publicado, pero retorna antes de montar el panel si el hostname no es local. |

## Hallazgos importantes

1. El editor visual esta integrado dentro de `index.html`, no como archivo separado. Esto facilita prototipado, pero para una entrega formal conviene extraerlo o excluirlo del build publico.

2. La proteccion de produccion depende de esta condicion:

   ```js
   const isLocal = window.location.hostname === "localhost" ||
                   window.location.hostname === "127.0.0.1" ||
                   window.location.port !== "";
   ```

   En hosts publicos normales funciona porque el hostname no es local y no hay puerto visible. Aun asi, el codigo del editor viaja en el HTML, por eso se recomienda limpiarlo antes de produccion final.

3. Las fotos originales estan correctamente disponibles y las rutas sensibles a mayusculas/espacios deben conservarse exactamente, por ejemplo `FOTOS JADE/HAMBURGUESA REGIONAL.JPG`.

4. La ubicacion exacta de Cafe Jade ya esta presente con coordenadas y mapa embebido:

   `17.509475, -91.986831`

5. El sitio publicado en Netlify reflejaba al menos parte de las adecuaciones importantes de esa fecha, incluida la ubicacion exacta.

## Actividad recomendada de seguimiento

Realizar una "pre-entrega cliente" con estos pasos:

1. Hacer una revision visual en tres tamanos: movil, tablet y escritorio.
2. Ajustar encuadres desde el editor local solo donde una foto corte rostros, platos o texto visual importante.
3. Guardar cambios desde el editor local y revisar `git diff`.
4. Ejecutar una limpieza de produccion: separar o remover el editor visual del HTML publico cuando el prototipo deje de necesitar edicion rapida.
5. Confirmar que Vercel publica desde `main` despues del push y que Hostinger despliega desde `main` cuando se conecte hPanel.
6. Preparar una liga de demo y una lista breve de decisiones pendientes para el cliente: fotos finales, horarios, telefono/WhatsApp, ingles final y politicas de reservacion.

## Proxima accion sugerida

El siguiente trabajo deberia ser una revision visual responsive con capturas o inspeccion en navegador real. El objetivo no es redisenar de nuevo, sino cerrar detalles de presentacion: jerarquia, legibilidad, encuadres y confianza comercial antes de mostrarlo al cliente.
