/* ============================================================
   scorm.js  –  Puente con la API SCORM 1.2 de Moodle
   ────────────────────────────────────────────────────────────
   Guarda y recupera el progreso del estudiante usando el propio
   sistema de Moodle (cmi.suspend_data). NO requiere servidor
   propio ni instalar nada en Moodle.

   Si el curso se abre FUERA de un LMS (por ejemplo, para revisión
   abriendo index.html directo), todo degrada de forma segura:
   las funciones no fallan, simplemente no guardan nada.
============================================================ */

var SCORM = (function () {
  var api = null;
  var iniciado = false;

  /* ── Buscar la API de SCORM en la jerarquía de ventanas ── */
  function buscarAPIEnVentana(win) {
    var intentos = 0;
    while (win.API == null && win.parent != null && win.parent != win && intentos < 20) {
      intentos++;
      win = win.parent;
    }
    return win.API || null;
  }

  function localizarAPI() {
    var win = window;
    var encontrada = buscarAPIEnVentana(win);
    /* También buscar en la ventana que abrió esta (popups) */
    if (!encontrada && win.opener != null && typeof win.opener != 'undefined') {
      encontrada = buscarAPIEnVentana(win.opener);
    }
    return encontrada;
  }

  /* ── Inicializar la comunicación con el LMS ── */
  function iniciar() {
    api = localizarAPI();
    if (!api) {
      /* No hay LMS (modo revisión / fuera de Moodle) */
      iniciado = false;
      return false;
    }
    var ok = api.LMSInitialize('');
    iniciado = (ok === 'true' || ok === true);
    return iniciado;
  }

  /* ── Leer un valor del modelo CMI ── */
  function obtener(clave) {
    if (!iniciado || !api) return '';
    return api.LMSGetValue(clave);
  }

  /* ── Escribir un valor en el modelo CMI ── */
  function establecer(clave, valor) {
    if (!iniciado || !api) return false;
    return api.LMSSetValue(clave, valor) === 'true';
  }

  /* ── Confirmar/guardar los cambios en el LMS ── */
  function guardar() {
    if (!iniciado || !api) return false;
    return api.LMSCommit('') === 'true';
  }

  /* ── Cerrar la comunicación con el LMS ── */
  function terminar() {
    if (!iniciado || !api) return false;
    var ok = api.LMSFinish('');
    iniciado = false;
    return ok === 'true';
  }

  /* ── Helpers de alto nivel para el progreso del curso ────── */

  /* Devuelve el arreglo de actividades completadas guardado */
  function leerProgreso() {
    var data = obtener('cmi.suspend_data');
    if (!data) return [];
    try {
      var parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  /* Guarda el arreglo de actividades completadas */
  function escribirProgreso(lista) {
    establecer('cmi.suspend_data', JSON.stringify(lista));
    guardar();
  }

  /* Marca el curso como incompleto/completo según el avance */
  function marcarEstado(completo) {
    establecer('cmi.core.lesson_status', completo ? 'completed' : 'incomplete');
    guardar();
  }

  return {
    iniciar:         iniciar,
    terminar:        terminar,
    estaActivo:      function () { return iniciado; },
    leerProgreso:    leerProgreso,
    escribirProgreso: escribirProgreso,
    marcarEstado:    marcarEstado
  };
})();
