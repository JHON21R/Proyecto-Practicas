/* ============================================================
   database.js
   Gestión de la base de datos con NeDB (archivos locales)
   Colecciones:
     - usuarios.db  → datos de registro y autenticación
     - progreso.db  → unidades completadas por usuario
============================================================ */

const Datastore = require('@seald-io/nedb');
const path      = require('path');

const DB_DIR = path.join(__dirname, 'data');

const usuarios = new Datastore({
  filename:  path.join(DB_DIR, 'usuarios.db'),
  autoload:  true
});

const progreso = new Datastore({
  filename:  path.join(DB_DIR, 'progreso.db'),
  autoload:  true
});

/* ── Índices únicos ──────────────────────────────────────── */
usuarios.ensureIndex({ fieldName: 'email',    unique: true });
progreso.ensureIndex({ fieldName: 'clave',    unique: true }); // "userId_unidadId"

module.exports = { usuarios, progreso };
