/* ============================================================
   server.js  –  Viaje hacia el sentir
   Puerto: 3001

   RUTAS:
     POST /api/participante          → Registrar o recuperar participante
     GET  /api/participante/:email   → Datos del participante
     POST /api/progreso              → Marcar actividad como revisada
     GET  /api/progreso/:email       → Progreso completo del participante
============================================================ */

const express  = require('express');
const cors     = require('cors');
const path     = require('path');
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

participantes.ensureIndex({ fieldName: 'email', unique: true });
progreso.ensureIndex({ fieldName: 'clave', unique: true }); // "email_actividadId"

/* ── Middlewares ─────────────────────────────────────────── */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

/* ══════════════════════════════════════════════════════════
   POST /api/participante
   Body: { nombre, email }
   Crea el participante si no existe. Si ya existe lo devuelve.
══════════════════════════════════════════════════════════ */
app.post('/api/participante', function(req, res) {
  const { nombre, email } = req.body;
  if (!nombre || !email)
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });

  const emailLower = email.toLowerCase().trim();

  participantes.findOne({ email: emailLower }, function(err, doc) {
    if (doc) {
      /* Ya existe — devuelve sus datos */
      return res.json({ nuevo: false, participante: doc });
    }
    participantes.insert({
      nombre: nombre.trim(),
      email:  emailLower,
      ingresadoEn: new Date()
    }, function(err2, nuevo) {
      if (err2) return res.status(500).json({ error: 'Error al guardar participante' });
      res.status(201).json({ nuevo: true, participante: nuevo });
    });
  });
});

/* ══════════════════════════════════════════════════════════
   GET /api/participante/:email
   Devuelve datos del participante
══════════════════════════════════════════════════════════ */
app.get('/api/participante/:email', function(req, res) {
  const email = req.params.email.toLowerCase().trim();
  participantes.findOne({ email }, function(err, doc) {
    if (!doc) return res.status(404).json({ error: 'No encontrado' });
    res.json({ participante: doc });
  });
});

/* ══════════════════════════════════════════════════════════
   POST /api/progreso
   Body: { email, actividadId }
   Marca una actividad individual como revisada.
   actividadId formato: "act-1__3" (unidadId + índice del item)
══════════════════════════════════════════════════════════ */
app.post('/api/progreso', function(req, res) {
  const { email, actividadId } = req.body;
  if (!email || !actividadId)
    return res.status(400).json({ error: 'email y actividadId son obligatorios' });

  const clave = email.toLowerCase() + '_' + actividadId;

  progreso.findOne({ clave }, function(err, doc) {
    if (doc) return res.json({ mensaje: 'Ya revisada', progreso: doc });

    progreso.insert({
      clave,
      email:       email.toLowerCase(),
      actividadId,
      revisadoEn:  new Date()
    }, function(err2, nuevo) {
      if (err2) return res.status(500).json({ error: 'Error al guardar progreso' });
      res.status(201).json({ mensaje: 'Actividad revisada', progreso: nuevo });
    });
  });
});

/* ══════════════════════════════════════════════════════════
   GET /api/progreso/:email
   Devuelve array con los actividadId revisados por el participante
══════════════════════════════════════════════════════════ */
app.get('/api/progreso/:email', function(req, res) {
  const email = req.params.email.toLowerCase().trim();
  progreso.find({ email }, function(err, docs) {
    if (err) return res.status(500).json({ error: 'Error al consultar progreso' });
    res.json({ revisadas: docs.map(function(d) { return d.actividadId; }) });
  });
});

/* ── Iniciar ─────────────────────────────────────────────── */
app.listen(PORT, function() {
  console.log('');
  console.log('  ✅  Servidor corriendo en http://localhost:' + PORT);
  console.log('  📚  Curso: Viaje hacia el sentir');
  console.log('  🗄️   Datos en: server/data/');
  console.log('');
});
