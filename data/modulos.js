/* ============================================================
   MÓDULO 1 – "Viaje hacia el sentir, entendiendo la Salud Mental"
   Archivo: data/modulos.js

   ⚠️  INSTRUCCIONES PARA MANTENIMIENTO:
   ─────────────────────────────────────
   Cuando el ingeniero entregue los archivos descargados:
   1. Guarda el archivo en la carpeta correspondiente:
      - Textos/páginas  → contenido/
      - PDFs            → img/
      - Imágenes        → img/
   2. En este archivo cambia:
        accion: "link",  url: "http://localhost:8888/..."
      por:
        accion: "visor", archivo: "contenido/nombre.html"
      o para PDFs:
        accion: "pdf",   archivo: "img/nombre.pdf"

   TIPOS DE ACCIÓN:
     "link"        → Abre en Moodle (pestaña nueva)
     "visor"       → Abre el contenido dentro de la página
     "pdf"         → Descarga o abre el PDF directamente
     "youtube"     → Abre video de YouTube en pestaña nueva
     "proximamente"→ Muestra modal "próximamente"
     "separador"   → Línea divisoria visual con etiqueta
============================================================ */

const MODULOS = [

  /* ══════════════════════════════════════════════════════
     TARJETA 1 – Unidad I: Conceptos / Normatividad
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-1",
    numero:      1,
    colorClase:  "m1",
    colorBarra:  "#00897b",
    emoji:       "🐦",
    imgEmoji:    "🗺️",
    titulo:      "Contexto de la Atención Primaria en Salud",
    descripcion: "La Atención Primaria en Salud es una estrategia que ofrece atención integral, accesible y de calidad, enfocándose en la promoción de la salud, la prevención de enfermedades y la participación comunitaria. Su evolución ha sido significativa, desde el reconocimiento en Alma-Ata en 1978 hasta su desarrollo en Colombia con la Ley 1438 de 2011, avanzando hacia un modelo más preventivo y participativo.",
    recurso:     "🎧 Audio introductorio del módulo",
    recursos: [
      "🎧 Audio introductorio del módulo",
      "📝 Antecedente APS",
      "📋 Lectura: Viaje por la Historia de la APS",
      "📄 Lecturas de apoyo"
    ],
    actividad:   "✏️ Actividad de Aprendizaje",
    items: [

      {
        icono:   "▶️",
        tipo:    "Audio introductorio",
        texto:   "AudioModulo1 — Introducción al Módulo 1.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/course/section.php?id=2#module-5"
      },
      {
        icono:   "📝",
        tipo:    "Antecedente APS",
        texto:   "Antecedente de la Atención Primaria en Salud.",
        accion:  "proximamente"
      },
      {
        icono:   "📋",
        tipo:    "Lectura",
        texto:   "Viaje por la Historia de la APS.",
        accion:  "proximamente"
      },
      {
        icono:   "📄",
        tipo:    "Lecturas de apoyo",
        texto:   "Material de apoyo complementario.",
        accion:  "proximamente"
      },
      {
        icono:   "📄",
        tipo:    "Cuento",
        texto:   "Iniciando el viaje — Explorando la salud mental.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=7"
      },
      {
        icono:   "💬",
        tipo:    "Foro",
        texto:   "Reflexionemos sobre el viaje de la salud mental.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/forum/view.php?id=8"
      },
      {
        icono:   "📋",
        tipo:    "Hitos Salud Mental",
        texto:   "Ruta del Viajero — Recorrido histórico de la salud mental en Colombia desde 1991.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=9"
      },
      {
        icono:   "📥",
        tipo:    "Hitos Salud Mental PDF",
        texto:   "Documento completo en PDF — normatividad desde 1991 hasta 2025.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/pluginfile.php/36/mod_resource/content/1/HITOS%20DE%20LA%20SALUD%20MENTAL.pdf"
      },
      {
        icono:   "📄",
        tipo:    "Mitos y realidades — Obligatoria",
        texto:   "Mitos y realidades de la salud Mental.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=11"
      },
      {
        icono:   "📥",
        tipo:    "Documento mitos y realidades PDF",
        texto:   "Documento mitos y realidades Salud Mental.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=12"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Emociones – Autoestima",
        accion:  "separador"
      },

      {
        icono:   "📋",
        tipo:    "Los Diálogos del Viajerito",
        texto:   "Episodio: Emociones y Sentimientos.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=14"
      },
      {
        icono:   "📋",
        tipo:    "Autoconcepto y autoestima",
        texto:   "Lectura y reflexión sobre la imagen propia.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=15"
      },
      {
        icono:   "🏝️",
        tipo:    "La isla desierta",
        texto:   "Recurso de aprendizaje — Descubre tu valor.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=16"
      },
      {
        icono:   "📋",
        tipo:    "Afectaciones a la salud Mental",
        texto:   "Estrés, depresión y ansiedad.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=17"
      },
      {
        icono:   "🔗",
        tipo:    "Actividad didáctica",
        texto:   "Actividad didáctica interactiva.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/url/view.php?id=18"
      },
      {
        icono:   "▶️",
        tipo:    "Video complementario",
        texto:   "Diferencia entre Estrés, Eustrés y Distrés.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/url/view.php?id=19"
      },
      {
        icono:   "▶️",
        tipo:    "Video complementario",
        texto:   "¿Qué es el estrés y la ansiedad?",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/url/view.php?id=20"
      },
      {
        icono:   "▶️",
        tipo:    "Video complementario",
        texto:   "Depresión — Video informativo.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/url/view.php?id=21"
      },
      {
        icono:   "▶️",
        tipo:    "Video complementario",
        texto:   "Procrastinación — Video informativo.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/url/view.php?id=22"
      },
      {
        icono:   "🔗",
        tipo:    "Conceptos clave",
        texto:   "Conceptos clave de la Unidad II.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/url/view.php?id=23"
      },
      {
        icono:   "🧩",
        tipo:    "Test evaluativo",
        texto:   "Test unidad II. Reconociendo conceptos — Abrió: 1 de marzo de 2026.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/quiz/view.php?id=24"
      },
      {
        icono:   "📁",
        tipo:    "Recursos infografías",
        texto:   "Carpeta con material visual de apoyo.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/folder/view.php?id=25"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 2 – Unidad II: Trastornos y Rutas de Atención
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-2",
    numero:      2,
    colorClase:  "m2",
    colorBarra:  "#1565c0",
    emoji:       "🧠",
    imgEmoji:    "💙",
    titulo:      "Salud Colectiva Como Apuesta Latinoamericana",
    descripcion: "La Salud Colectiva es un campo de pensamiento, conocimiento y acción construido históricamente a partir del cuestionamiento de las formas tradicionales de comprender la salud, la enfermedad y las prácticas de salud. Su trayectoria recoge los aportes de la medicina social, el movimiento de la salud en latinoamerica y las ciencias sociales, ampliando la mirada más allá de lo individual y biológico para reconocer que los procesos de salud-enfermedad están vinculados con las condiciones sociales, económicas, políticas, culturales, históricas y territoriales en las que transcurre la vida.",
    recurso:     "🎧 Audio introductorio de la unidad",
    recursos: [
      "🎧 Audio introductorio de la unidad",
      "📄 Contexto de Salud Colectiva",
      "📄 Narrativa Historica Salud Colectiva",
      "▶️ Ciudad Bienestar como Estrategia Territorial",
      "📄 Lecturas de Apoyo",
    ],
    actividad:   "💬 Foro Reconociendo Experiencias",
    items: [

      /* ─── Audio de apertura ─────────────────────────── */
      {
        icono:   "🎧",
        tipo:    "Audio introductorio",
        texto:   "audioUIIAI.mp3 — Introducción a la Unidad II.",
        accion:  "proximamente"    /* ⏳ Pendiente: cuando llegue el archivo de audio */
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Trastorno Mental",
        accion:  "separador"
      },

      {
        icono:   "📋",
        tipo:    "Más allá de los términos",
        texto:   "Trastorno o enfermedad mental — lectura introductoria.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=28"
      },
      {
        icono:   "💬",
        tipo:    "Foro",
        texto:   "¿Qué diferencia hay entre trastorno y enfermedad mental?",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/forum/view.php?id=29"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Epilepsia",
        accion:  "separador"
      },

      {
        icono:   "📋",
        tipo:    "Trastorno Epilepsia",
        texto:   "Información sobre el trastorno de epilepsia.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=31"
      },
      {
        icono:   "🖼️",
        tipo:    "Infografía Epilepsia",
        texto:   "Material visual sobre la epilepsia.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=32"
      },
      {
        icono:   "🗺️",
        tipo:    "Ruta de Atención Epilepsia",
        texto:   "Ruta institucional de atención para epilepsia.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=33"
      },
      {
        icono:   "📥",
        tipo:    "ABC Epilepsia",
        texto:   "Documento ABC sobre epilepsia.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=34"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Consumo de SPA",
        accion:  "separador"
      },

      {
        icono:   "▶️",
        tipo:    "Video Test — Consumo de SPA",
        texto:   "Hablemos de Consumo de Sustancias Psicoactivas.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=36"
      },
      {
        icono:   "📋",
        tipo:    "Sobre las sustancias psicoactivas",
        texto:   "Lectura sobre las sustancias psicoactivas.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=37"
      },
      {
        icono:   "🗺️",
        tipo:    "Ruta de Atención Consumo SPA",
        texto:   "Ruta institucional de atención para consumo de SPA.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=38"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Bibliografía",
        accion:  "separador"
      },

      {
        icono:   "📚",
        tipo:    "Bibliografía",
        texto:   "Referencias bibliográficas de la unidad.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=43"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Conducta Suicida",
        accion:  "separador"
      },

      {
        icono:   "▶️",
        tipo:    "Video Test — Conducta Suicida",
        texto:   "Hablemos de la Conducta Suicida.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=44"
      },
      {
        icono:   "🖼️",
        tipo:    "Infografía Conducta Suicida",
        texto:   "Infografía sobre la Conducta Suicida.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=45"
      },
      {
        icono:   "🗺️",
        tipo:    "Ruta de Atención Conducta Suicida",
        texto:   "Ruta institucional de atención para conducta suicida.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/page/view.php?id=47"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Violencias",
        accion:  "separador"
      },

      {
        icono:   "▶️",
        tipo:    "Video Test — Violencias",
        texto:   "Hablemos sobre Violencias.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=48"
      },
      {
        icono:   "🖼️",
        tipo:    "Infografía sobre las violencias",
        texto:   "Material visual sobre las violencias.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=49"
      },
      {
        icono:   "🗺️",
        tipo:    "Ruta de Atención Violencia de Género",
        texto:   "Ruta institucional de atención para violencia de género.",
        accion:  "link",
        url:     "http://localhost:8888/moodle/mod/resource/view.php?id=49"
      },

      /* ─── Separador ─────────────────────────────────── */
      {
        icono:   "",
        tipo:    "separador",
        texto:   "Evaluación",
        accion:  "separador"
      },

      {
        icono:   "🧩",
        tipo:    "Reto de saberes",
        texto:   "Explorando lo aprendido — Evaluación final de la Unidad II.",
        accion:  "link",           /* Requiere login en Moodle para guardar nota */
        url:     "http://localhost:8888/moodle/mod/quiz/view.php?id=51"
      }

    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 3 – Unidad III: Módulo 3
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-3",
    numero:      3,
    colorClase:  "m3",
    colorBarra:  "#43a047",
    emoji:       "🌿",
    imgEmoji:    "🌱",
    titulo:      "Unidad III",
    descripcion: "Descripción del Módulo 3. Actualiza este texto con el contenido correspondiente.",
    recurso:     "🎧 Audio introductorio del módulo",
    actividad:   "🧩 Actividad del Módulo 3",
    items: [
      {
        icono:   "▶️",
        tipo:    "Audio / Video introductorio",
        texto:   "Introducción al Módulo 3.",
        accion:  "proximamente"
      },
      {
        icono:   "📄",
        tipo:    "Lectura",
        texto:   "Material de lectura del Módulo 3.",
        accion:  "proximamente"
      },
      {
        icono:   "🧩",
        tipo:    "Actividad",
        texto:   "Actividad evaluativa del Módulo 3.",
        accion:  "proximamente"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 4 – Unidad IV: Módulo 4
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-4",
    numero:      4,
    colorClase:  "m4",
    colorBarra:  "#fb8c00",
    emoji:       "🏘️",
    imgEmoji:    "🌍",
    titulo:      "Unidad IV",
    descripcion: "Descripción del Módulo 4. Actualiza este texto con el contenido correspondiente.",
    recurso:     "🎧 Audio introductorio del módulo",
    actividad:   "🧩 Actividad del Módulo 4",
    items: [
      {
        icono:   "▶️",
        tipo:    "Audio / Video introductorio",
        texto:   "Introducción al Módulo 4.",
        accion:  "proximamente"
      },
      {
        icono:   "📄",
        tipo:    "Lectura",
        texto:   "Material de lectura del Módulo 4.",
        accion:  "proximamente"
      },
      {
        icono:   "🧩",
        tipo:    "Actividad",
        texto:   "Actividad evaluativa del Módulo 4.",
        accion:  "proximamente"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════
     TARJETA 5 – Unidad V: Módulo 5
  ══════════════════════════════════════════════════════ */
  {
    id:          "act-5",
    numero:      5,
    colorClase:  "m5",
    colorBarra:  "#8e24aa",
    emoji:       "🤝",
    imgEmoji:    "💜",
    titulo:      "Unidad V",
    descripcion: "Descripción del Módulo 5. Actualiza este texto con el contenido correspondiente.",
    recurso:     "🎧 Audio introductorio del módulo",
    actividad:   "🧩 Actividad del Módulo 5",
    items: [
      {
        icono:   "▶️",
        tipo:    "Audio / Video introductorio",
        texto:   "Introducción al Módulo 5.",
        accion:  "proximamente"
      },
      {
        icono:   "📄",
        tipo:    "Lectura",
        texto:   "Material de lectura del Módulo 5.",
        accion:  "proximamente"
      },
      {
        icono:   "🧩",
        tipo:    "Actividad",
        texto:   "Actividad evaluativa del Módulo 5.",
        accion:  "proximamente"
      }
    ]
  }

];
