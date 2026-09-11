/* ============================================================
   auth.js  –  Progreso sin login ni formulario
   Genera un ID anónimo único por navegador (se guarda en localStorage).
   Sincroniza progreso de actividades individuales con el servidor.
============================================================ */

const API = 'http://localhost:3001/api';

/* ── ID anónimo del participante ─────────────────────────── */
function getParticipanteId() {
  var id = localStorage.getItem('vs_pid');
  if (!id) {
    id = 'anon_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('vs_pid', id);
  }
  return id;
}

/* ── Marcar actividad como revisada ─────────────────────── */
function marcarRevisada(actividadId) {
  return fetch(API + '/progreso', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ email: getParticipanteId(), actividadId })
  })
  .then(function(r) { return r.json(); })
  .catch(function()  { return {}; });
}

/* ── Consultar progreso ──────────────────────────────────── */
function consultarProgreso() {
  return fetch(API + '/progreso/' + encodeURIComponent(getParticipanteId()))
    .then(function(r) { return r.json(); })
    .catch(function()  { return { revisadas: [] }; });
}
