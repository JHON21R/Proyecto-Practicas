/* ============================================================
   Curso APS – Temas de los módulos
   Archivo: data/modulos.js

   ⚠️  INSTRUCCIONES PARA MANTENIMIENTO:
   ─────────────────────────────────────
   Cuando lleguen los recursos de cada módulo:
   1. Guarda el archivo en la carpeta correspondiente:
      - Audios          → audio/
      - Textos/páginas  → contenido/
      - PDFs            → img/
      - Imágenes        → img/
   2. En este archivo cambia la acción del item:
        accion: "proximamente"
      por la que corresponda:
        accion: "audio", archivo: "audio/nombre.mp3"
        accion: "visor", archivo: "contenido/nombre.html"
        accion: "pdf",   archivo: "img/nombre.pdf"

   TIPOS DE ACCIÓN DISPONIBLES:
     "audio"       → Reproduce un audio dentro de la página
     "visor"       → Abre el contenido dentro de la página
     "pdf"         → Descarga o abre el PDF directamente
     "youtube"     → Abre video de YouTube en pestaña nueva
     "proximamente"→ Muestra modal "próximamente"
     "separador"   → Línea divisoria visual con etiqueta
============================================================ */

const MODULOS = [

  /* ══════════════════════════════════════════════════════
     TARJETA 1 – Contexto de la Atención Primaria en Salud
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-1",
    numero:      1,
    colorClase:  "m1",
    colorBarra:  "#00897b",
    emoji:       "🐦",
    imgEmoji:    "🗺️",
    imgFrente:   "img/Modulo-1.jpg",
    titulo:      "Contexto de la Atención Primaria en Salud",
    descripcion: "La Atención Primaria en Salud (APS) es una estrategia comunitaria integral, que ha evolucionado desde la declaración de Alma-Ata de 1978 hasta el contexto colombiano con la Ley 1438 de 2011. Su enfoque transforma a un modelo moderno centrado la promoción del bienestar en la sociedad.",
    actividad:   "✏️ Actividad de Aprendizaje",
    items: [

      {
        icono:   "🎧",
        tipo:    "Audio introductorio",
        texto:   "Introducción al Módulo 1.",
        accion:  "audio",
        archivo: "audio/introtemaAPS.mp3"
      },
      {
        icono:   "📝",
        tipo:    "Antecedente APS",
        texto:   "Antecedente de la Atención Primaria en Salud.",
        accion:  "link",
        url:     "http://38.224.56.117:8081/lineatiempo/index.html"
      },
      {
        icono:   "🎧",
        tipo:    "Narrativa Histórica Salud Colectiva",
        texto:   "Recorrido histórico de la Salud Colectiva.",
        accion:  "audio",
        archivo: "audio/APS_audio_documental.mp3"
      },
      {
        icono:   "📋",
        tipo:    "Actividad",
        texto:   "Viaje por la Historia de la APS.",
        accion:  "link",
        url:     "http://38.224.56.117:8081/moodle/mod/scorm/view.php?id=1266"
      },
      {
        icono:   "📄",
        tipo:    "Lecturas de apoyo",
        texto:   "Material de apoyo complementario.",
        accion:  "proximamente"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 2 – Salud Colectiva Como Apuesta Latinoamericana
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-2",
    numero:      2,
    colorClase:  "m2",
    colorBarra:  "#1565c0",
    emoji:       "🧠",
    imgEmoji:    "💙",
    imgFrente:   "img/Modulo-2.jpg",
    titulo:      "Salud Colectiva Como Apuesta Latinoamericana",
    descripcion: "La Salud Colectiva es un campo interdisciplinario de pensamiento y acción que supera la visión puramente biológista de la salud. Es un enfoque que busca comprender el procesos de salud y enfermedad desde las condiciones socioeconómicas, políticas y culturales de las personas, basándose en los aportes de la teoría critica latinoamericana.",
    actividad:   "💬 Foro Reconociendo Experiencias",
    items: [
      {
        icono:   "🎧",
        tipo:    "Audio introductorio",
        texto:   "Introducción a la Unidad II.",
        accion:  "audio",
        archivo: "audio/IntroSaludColectiva.mp3"
      },
      {
        icono:   "📝",
        tipo:    "Contexto de Salud Colectiva",
        texto:   "Lectura sobre el contexto de la Salud Colectiva.",
        accion:  "link",
        url:     "http://38.224.56.117:8081/lineasaludcolectiva/index.html"
      },
      {
        icono:   "🎧",
        tipo:    "Narrativa Histórica Salud Colectiva",
        texto:   "Recorrido histórico de la Salud Colectiva.",
        accion:  "audio",
        archivo: "audio/narrativa-salud-colectiva.mp3"
      },
      { 
        icono:   "▶️",
        tipo:    "Experiencia ciudad bienestar",
        texto:   "Recorrido histórico de la Salud Colectiva.",
        accion:  "video",
        archivo: "pendiente"
      },
      {
        icono:   "✏️",
        tipo:    "Actividad",
        texto:   "Ciudad Bienestar como estrategia territorial.",
        accion:  "link",
        url:     "http://38.224.56.117:8081/moodle/mod/scorm/view.php?id=1270"
      },
      {
        icono:   "📄",
        tipo:    "Lecturas de Apoyo",
        texto:   "Material de apoyo complementario.",
        accion:  "proximamente"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 3 – Determinantes y determinación social de la salud
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-3",
    numero:      3,
    colorClase:  "m3",
    colorBarra:  "#43a047",
    emoji:       "🌿",
    imgEmoji:    "🌱",
    imgFrente:   "img/Modulo-3.jpg",
    titulo:      "Dos miradas sobre la salud: los determinantes sociales y la determinación sociales de la salud ",
    descripcion: "El derecho a la salud en Colombia está consagrado como un principio autónomo e irrenunciable que resguarda la dignidad humana bajo la Ley Estatutaria 1751 de 2015. Asimismo, la Política Pública de Salud Colectiva de Pasto articula la salud como un proceso social e histórico que requiere la acción coordinada entre el Estado y la sociedad civil en articulación con la responsabilidad estatal.",
    actividad:   "🧩 Actividad de Reflexión",
    items: [
      {
        icono:   "🎧",
        tipo:    "Audio de Introducción",
        texto:   "Introducción al Módulo 3.",
        accion:  "audio",
        archivo: "audio/AudioIntroDeterminantes.m4a"
      },
      {
        icono:   "📄",
        tipo:    "Determinantes Sociales de la Salud",
        texto:   "Lectura sobre los determinantes sociales de la salud.",
         accion:  "link",
        url:     "http://38.224.56.117:8081/contextodeterminacion/index.html"
      },
      {
        icono:   "📄",
        tipo:    "Determinación VS Determinantes",
        texto:   "Comparación entre determinación y determinantes.",
        accion:  "link",
        url:     "http://38.224.56.117:8081/Determinantes/index.html"
      },
      {
        icono:   "🧩",
        tipo:    "Actividad",
        texto:   "Actividad evaluativa del Módulo 3.",
        accion:    "contenido",
        contenido: "caso-elena-determinantes"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 4 – El territorio como escenario de articulación
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-4",
    numero:      4,
    colorClase:  "m4",
    colorBarra:  "#fb8c00",
    emoji:       "🏘️",
    imgEmoji:    "🌍",
    imgFrente:   "img/Modulo-4.jpg",
    titulo:      "El territorio como escenario de articulación",
    descripcion: "Comprender el territorio como una construcción social, dinámica y relacional, configurada por las formas en que los humanos y no humanos que conforman comunidades lo habitan, lo usan, lo significan y lo transforman, teniendo en cuenta también las relaciones entre dimensiones sociales, culturales, económicas, ambientales y político-institucionales; desde ahí es posible el reconocimiento que configuran condiciones particulares de vida, salud, enfermedad y cuidado, y cómo el territorio constituye un escenario de encuentro y articulación entre la Atención Primaria en Salud (APS), Ciudad Bienestar–PSPIC (CB), las comunidades y otros actores territoriales. ",
    actividad:   "🧩 Actividad Reflexiva",
    items: [
      {
        icono:   "🎧",
        tipo:    "Audio introductorio",
        texto:   "Introducción al Módulo 4.",
        accion:  "audio",
        archivo: "audio/Audio_Intro_Territorio.mp3"
      },
      {
        icono:   "🧩",
        tipo:    "Tejiendo el territorio como espacio de vida",
        texto:   "Material de lectura del Módulo 4.",
        accion:  "proximamente"
      },
      {
        icono:   "▶️",
        tipo:    "Experiencia en el Territorio",
        texto:   "Video de apoyo del Módulo 4.",
        accion:  "proximamente"
      },
      {
        icono:   "📄",
        tipo:    "Lecturas de Apoyo",
        texto:   "Material de apoyo complementario.",
        accion:  "proximamente"
      },
      {
        icono:   "🧩",
        tipo:    "Actividad",
        texto:   "Actividad reflexiva del Módulo 4.",
        accion:  "proximamente"
      }
    ]
  }

];
