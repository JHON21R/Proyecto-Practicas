# Módulo 1 – ¿Cómo entendemos la salud?

Página web interactiva para el Módulo 1 del curso Ciudad Bienestar.

---

## Estructura del proyecto

```
proyecto practicas/
│
├── index.html          ← Página principal (solo estructura HTML, sin estilos ni lógica)
│
├── css/
│   └── styles.css      ← TODOS los estilos visuales organizados en 12 secciones
│
├── js/
│   └── modals.js       ← Lógica de modales flotantes y flip cards
│
├── data/
│   └── modulos.js      ← Textos y actividades de los 5 módulos del curso
│
├── img/                ← Carpeta para las imágenes del proyecto
│   └── (aquí van las imágenes)
│
└── README.md           ← Este archivo
```

---

## ¿Qué toca cada archivo?

| Quiero cambiar...                         | Archivo a editar          |
|-------------------------------------------|---------------------------|
| Título, subtítulo o textos del hero       | `index.html`              |
| Texto de los modales (Intención, Íconos)  | `index.html`              |
| Descripción o actividades de un módulo    | `data/modulos.js`         |
| Colores, tamaños, fuentes, diseño         | `css/styles.css`          |
| Comportamiento de modales o flip cards    | `js/modals.js`            |
| Agregar o quitar un módulo completo       | `data/modulos.js`         |
| Cambiar una imagen                        | `img/` + `index.html`     |

---

## Cómo cambiar una imagen

1. Copia tu imagen a la carpeta `img/` (ej: `img/hero.jpg`)
2. En `index.html`, busca el comentario `<!-- Imagen central -->` o `<!-- Imagen footer -->`
3. Reemplaza el `<div class="img-placeholder">🏥</div>` por:
   ```html
   <img src="img/hero.jpg" alt="Descripción de la imagen">
   ```

---

## Cómo agregar una actividad a un módulo

1. Abre `data/modulos.js`
2. Encuentra el módulo que quieres editar (busca el título)
3. Dentro del array `items`, agrega un nuevo objeto:
   ```js
   { icono: "📎", tipo: "Nombre del tipo", texto: "Descripción de la actividad." }
   ```

---

## Cómo agregar un módulo nuevo

1. Abre `data/modulos.js`
2. Copia uno de los objetos del array `MODULOS` y pégalo al final (antes del `]`)
3. Cambia el `id`, `numero`, `colorClase`, `colorBarra`, `titulo`, `descripcion` e `items`
4. Los colores de clase disponibles son: `m1` (rojo), `m2` (azul), `m3` (verde), `m4` (naranja), `m5` (morado)
5. Para un color nuevo, agrégalo en `css/styles.css` en la sección **11. Colores por Módulo**

---

## Cómo abrir el proyecto

Abre `index.html` directamente en cualquier navegador web (Chrome, Firefox, Safari, Edge).
No requiere servidor ni instalación adicional.
