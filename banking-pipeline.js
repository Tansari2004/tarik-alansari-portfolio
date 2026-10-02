const viewer = document.querySelector('.image-viewer');
const viewerImage = viewer.querySelector('img');
const zoomButton = viewer.querySelector('.zoom-button');
let returnFocus;

document.querySelectorAll('.report a').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    returnFocus = link;
    viewerImage.src = link.href;
    viewerImage.alt = link.querySelector('img').alt;
    document.querySelector('#viewer-title').textContent = link.closest('figure').querySelector('h3').textContent;
    viewer.classList.remove('zoomed');
    zoomButton.textContent = 'Zoom in';
    zoomButton.setAttribute('aria-pressed', 'false');
    viewer.showModal();
    document.body.classList.add('viewer-open');
  });
});

viewer.querySelector('.close-viewer').addEventListener('click', () => viewer.close());
zoomButton.addEventListener('click', () => {
  const zoomed = viewer.classList.toggle('zoomed');
  zoomButton.textContent = zoomed ? 'Fit to screen' : 'Zoom in';
  zoomButton.setAttribute('aria-pressed', String(zoomed));
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  returnFocus?.focus({ preventScroll: true });
});
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});
