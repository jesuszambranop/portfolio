# Comandos para publicar en GitHub Pages

## 1. Crear repositorio en GitHub
Nombre sugerido:

```txt
jesus-zambrano-portfolio
```

## 2. Subir los archivos
Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Publica portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/jesus-zambrano-portfolio.git
git push -u origin main
```

## 3. Activar GitHub Pages
En GitHub:

```txt
Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / root → Save
```

## 4. Actualizar con nuevos casos

```bash
git add .
git commit -m "Agrega nuevo caso de automatización"
git push
```
