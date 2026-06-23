# Portafolio — Jesús Zambrano Parrales

Repositorio estático para GitHub Pages. Diseñado para mostrar un perfil profesional híbrido: comunicación estratégica, marketing digital, producción audiovisual, analítica de datos, IA aplicada y automatización.

## Estructura recomendada

```txt
assets/
  docs/          CV y documentos descargables
  images/        campañas, piezas gráficas, mockups, miniaturas
  videos/        reels, spots, clips, muestras audiovisuales
  dashboards/    capturas o exports de Looker Studio / Power BI
  automation/    capturas de demos IA, GIFs, diagramas de flujos
  case-studies/  PDFs o imágenes de casos de estudio

data/
  projects.js    aquí se actualizan los casos del portafolio

private-material-not-for-publication/
  material sensible o no autorizado. NO publicar ni enlazar desde la web.
```

## Cómo actualizar el portafolio

1. Sube imágenes en `assets/images/`.
2. Sube videos en `assets/videos/`.
3. Edita `data/projects.js` y agrega una tarjeta nueva.
4. Haz commit con un mensaje claro, por ejemplo:

```bash
git add .
git commit -m "Agrega caso de campaña audiovisual"
git push
```

## Cómo insertar videos

Sube un archivo MP4 liviano a `assets/videos/` y en `data/projects.js` usa:

```js
mediaType: "video",
media: "assets/videos/nombre-del-video.mp4"
```

Para GitHub Pages conviene comprimir los videos. Si pesan mucho, usa YouTube oculto, Vimeo, Google Drive público o una miniatura con enlace externo.

## Material sensible

No publiques campañas de ataque, confrontación política, crisis con terceros identificables, nombres de adversarios, capturas agresivas o métricas de clientes sin autorización. Si necesitas mostrar capacidad estratégica, usa casos anonimizados y lenguaje profesional: análisis de conversación, reputación, contenido, dashboards, automatización y optimización de procesos.
