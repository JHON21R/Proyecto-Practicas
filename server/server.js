/* ============================================================
   server.js  –  Curso APS / Ciudad Bienestar
   Puerto: 3001

   Identificación del estudiante por DOCUMENTO (tipo + número).
   El progreso de las actividades se guarda por estudiante y
   persiste entre sesiones.

   RUTAS:
     POST /api/participante          → Registrar o recuperar participante
     GET  /api/participante/:docId   → Datos del participante
     POST /api/progreso              → Marcar una actividad como completada
     GET  /api/progreso/:docId       → Progreso completo del participante
============================================================ */

const express   = require('express');
const cors      = require('cors');
const path      = require('path');
const Datastore = require('@seald-io/nedb');

const app  = express();
const PORT = 3001;

/* ── Base de datos ───────────────────────────────────────── */
const DB_DIR = path.join(__dirname, 'data');

const participantes = new Datastore({
  filename: path.join(DB_DIR, 'participantes.db'),
  autoload: true
});

const progreso = new Datastore({
  filename: path.join(DB_DIR, 'progreso.db'),
  autoload: true
});

participantes.ensureIndex({ fieldName: 'docId', unique: true });
progreso.ensureIndex({ fieldName: 'clave', unique: true }); // "docId_actividadId"

/* ── Middlewares ─────────────────────────────────────────── */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

/* ── Utilidad: arma el identificador del documento ──────── */
function construirDocId(tipoDoc, numeroDoc) {
  return String(tipoDoc).toUpperCase().trim() + '-' + String(numeroDoc).trim();
}

/* ══════════════════════════════════════════════════════════
   POST /api/participante
   Body: { tipoDoc, numeroDoc }
   Crea el participante si no existe. Si ya existe lo devuelve.
══════════════════════════════════════════════════════════ */
app.post('/api/participante', function(req, res) {
  const { tipoDoc, numeroDoc } = req.body;
  if (!tipoDoc || !numeroDoc)
    return res.status(400).json({ error: 'El tipo y número de documento son obligatorios' });

  const docId = construirDocId(tipoDoc, numeroDoc);

  participantes.findOne({ docId: docId }, function(err, doc) {
    if (err) return res.status(500).json({ error: 'Error al consultar participante' });
    if (doc) {
      /* Ya existe — devuelve sus datos */
      return res.json({ nuevo: false, participante: doc });
    }
    participantes.insert({
      docId:       docId,
      tipoDoc:     String(tipoDoc).toUpperCase().trim(),
      numeroDoc:   String(numeroDoc).trim(),
      ingresadoEn: new Date()
    }, function(err2, nuevo) {
      if (err2) return res.status(500).json({ error: 'Error al guardar participante' });
      res.status(201).json({ nuevo: true, participante: nuevo });
    });
  });
});

/* ══════════════════════════════════════════════════════════
   GET /api/participante/:docId
   Devuelve datos del participante
══════════════════════════════════════════════════════════ */
app.get('/api/participante/:docId', function(req, res) {
  const docId = req.params.docId.trim();
  participantes.findOne({ docId: docId }, function(err, doc) {
    if (err) return res.status(500).json({ error: 'Error al consultar participante' });
    if (!doc) return res.status(404).json({ error: 'No encontrado' });
    res.json({ participante: doc });
  });
});

/* ══════════════════════════════════════════════════════════
   POST /api/progreso
   Body: { docId, actividadId }
   Marca una actividad individual como completada.
══════════════════════════════════════════════════════════ */
app.post('/api/progreso', function(req, res) {
  const { docId, actividadId } = req.body;
  if (!docId || !actividadId)
    return res.status(400).json({ error: 'docId y actividadId son obligatorios' });

  const clave = docId + '_' + actividadId;

  progreso.findOne({ clave: clave }, function(err, doc) {
    if (err) return res.status(500).json({ error: 'Error al consultar progreso' });
    if (doc) return res.json({ mensaje: 'Ya completada', progreso: doc });

    progreso.insert({
      clave:       clave,
      docId:       docId,
      actividadId: actividadId,
      completadoEn: new Date()
    }, function(err2, nuevo) {
      if (err2) return res.status(500).json({ error: 'Error al guardar progreso' });
      res.status(201).json({ mensaje: 'Actividad completada', progreso: nuevo });
    });
  });
});

/* ══════════════════════════════════════════════════════════
   GET /api/progreso/:docId
   Devuelve array con los actividadId completados por el participante
══════════════════════════════════════════════════════════ */
app.get('/api/progreso/:docId', function(req, res) {
  const docId = req.params.docId.trim();
  progreso.find({ docId: docId }, function(err, docs) {
    if (err) return res.status(500).json({ error: 'Error al consultar progreso' });
    res.json({ completadas: docs.map(function(d) { return d.actividadId; }) });
  });
});

/* ── Iniciar ─────────────────────────────────────────────── */
app.listen(PORT, function() {
  console.log('');
  console.log('  ✅  Servidor corriendo en http://localhost:' + PORT);
  console.log('  📚  Curso: Atención Primaria en Salud');
  console.log('  🗄️   Datos en: server/data/');
  console.log('');
});
