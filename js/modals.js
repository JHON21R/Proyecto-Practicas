/* ============================================================
   MÓDULO 1 – ¿Cómo entendemos la salud?
   Archivo: js/modals.js
   Responsabilidad:
     - Abrir y cerrar modales flotantes
     - Mostrar / ocultar lista de actividades dentro del modal
     - Cerrar con tecla Escape o clic en el fondo oscuro
   ============================================================ */


/**
 * Abre un modal por su ID.
 * @param {string} id - ID del elemento overlay a mostrar.
 */
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // evita scroll del fondo
}


/**
 * Cierra un modal por su ID.
 * @param {string} id - ID del elemento overlay a ocultar.
 */
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}


/**
 * Cierra el modal si el usuario hace clic en el fondo oscuro (backdrop).
 * Se usa en el evento onclick del overlay: backdropClose(event, 'id')
 * @param {MouseEvent} e  - Evento de clic.
 * @param {string}     id - ID del overlay.
 */
function backdropClose(e, id) {
  if (e.target === e.currentTarget) {
    closeModal(id);
  }
}


/**
 * Muestra u oculta la sección de actividades dentro de un modal.
 * El botón que llama esta función debe tener como siguiente hermano
 * el elemento .activities-section.
 * @param {HTMLElement} btn - Botón "Mostrar / Ocultar actividades".
 */
function toggleActs(btn) {
  const section = btn.nextElementSibling;
  const isOpen  = section.classList.toggle('open');
  btn.textContent = isOpen
    ? '▾ Ocultar recursos y actividades'
    : '▸ Ver recursos y actividades';
}


/* ── Cierre global con tecla Escape ─────────────────────── */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay.active').forEach(function (el) {
      el.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});
