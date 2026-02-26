/* ============================================================
   CASS — js/main.js
   Gallery lightbox + booking form success message + media tabs
   ============================================================ */

(function () {
  'use strict';

  /* ── Gallery Lightbox ─────────────────────────────────────── */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox && lightbox.querySelector('.lightbox-img');
  var lightboxClose = lightbox && lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
    lightbox.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
  }

  // Open on tile click or Enter/Space keypress
  document.querySelectorAll('.gallery-tile[data-lightbox]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      openLightbox(tile.dataset.lightbox, tile.dataset.alt);
    });
    tile.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(tile.dataset.lightbox, tile.dataset.alt);
      }
    });
  });

  // Close on button click
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close on backdrop click (outside the image)
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Close on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) {
      closeLightbox();
    }
  });

  /* ── Media category tab toggle ────────────────────────────── */
  document.querySelectorAll('.media-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.media-tab').forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
    });
  });

  /* ── Booking form: show success message on submit ─────────── */
  var bookingForm = document.querySelector('.booking-form');
  var formSuccess = document.getElementById('form-success');

  if (bookingForm && formSuccess) {
    bookingForm.addEventListener('submit', function () {
      // Show success banner after a brief delay (Formspree redirects, but
      // this covers AJAX-style integrations or future enhancement).
      setTimeout(function () {
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 500);
    });
  }

}());
