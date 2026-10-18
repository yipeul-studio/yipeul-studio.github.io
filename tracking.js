// One delegated listener covers mouse, touch and keyboard activation.
// Only fixed UI metadata is sent; clicks do not represent completed bookings.
(() => {
  if (window.yipeulPixelClicksInstalled) return;
  window.yipeulPixelClicksInstalled = true;
  document.addEventListener('click', (event) => {
    const control = event.target?.closest?.('[data-pixel-event]');
    if (!control || control.disabled || typeof window.fbq !== 'function') return;
    const parameters = {
      button_id: control.dataset.pixelId,
      placement: control.dataset.pixelPlacement
    };
    if (control.tagName === 'SUMMARY') {
      parameters.action = control.parentElement.open ? 'close' : 'open';
    }
    try {
      window.fbq('trackCustom', control.dataset.pixelEvent, parameters);
    } catch (_) {
      // Analytics must never prevent navigation or interaction.
    }
  });
})();
