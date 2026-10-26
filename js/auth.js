/* ============================================================
   auth.js  –  Sesión y progreso del estudiante (por documento)
   ────────────────────────────────────────────────────────────
   El estudiante se identifica con su documento (tipo + número).
   El progreso se guarda en el servidor y persiste entre sesiones.

   ⚠️  PRODUCCIÓN: cambia API_BASE por la dirección pública del
       servidor, por ejemplo:
       var API_BASE = 'http://38.224.56.117:3001/api';
============================================================ */

var API_BASE = 'http://localhost:3001/api';

/* Clave para recordar la sesión en este navegador */
var CLAVE_SESION = 'aps_sesion_v1';

/* ── Registrar o recuperar al participante ───────────────── */
function registrarParticipante(tipoDoc, numeroDoc) {
  return fetch(API_BASE + '/participante', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ tipoDoc: tipoDoc, numeroDoc: numeroDoc })
  }).then(function(r) { return r.json(); });
}

/* ── Guardar / leer / cerrar la sesión del navegador ─────── */
function guardarSesion(docId, tipoDoc, numeroDoc) {
  try {
    localStorage.setItem(CLAVE_SESION, JSON.stringify({
      docId: docId, tipoDoc: tipoDoc, numeroDoc: numeroDoc
    }));
  } catch (e) {}
}

function obtenerSesion() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_SESION));
  } catch (e) {
    return null;
  }
}

function cerrarSesion() {
  try { localStorage.removeItem(CLAVE_SESION); } catch (e) {}
}

/* ── Marcar una actividad como completada en el servidor ─── */
function marcarProgresoServidor(docId, actividadId) {
  return fetch(API_BASE + '/progreso', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ docId: docId, actividadId: actividadId })
  })
  .then(function(r) { return r.json(); })
  .catch(function()  { return {}; });
}

/* ── Consultar el progreso guardado del estudiante ───────── */
function consultarProgresoServidor(docId) {
  return fetch(API_BASE + '/progreso/' + encodeURIComponent(docId))
    .then(function(r) { return r.json(); })
    .then(function(data) { return (data && data.completadas) || []; })
    .catch(function()  { return []; });
}
