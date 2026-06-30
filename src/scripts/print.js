export function printScreen(e, sourceSelector) {
  document.querySelector('.btn-print').remove();
  document.querySelector('.help-guide-close').remove();
  document.querySelectorAll('.qg-acc-controls').forEach(elem => elem.parentNode.removeChild(elem));
  document.querySelectorAll('.arrow').forEach(elem => elem.parentNode.removeChild(elem));
  const contentSource = document.getElementById(sourceSelector);
  const checkboxes = contentSource.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(checkbox => checkbox.setAttribute('checked', true));
  document.body.innerHTML = contentSource.innerHTML;
  // check all images loaded before printing the doc
  Promise.all(Array.from(document.images).map((img) => {
    if (img.complete) {
      if (img.naturalHeight !== 0) return Promise.resolve();
      return Promise.reject(img);
    }
    return new Promise((resolve, reject) => {
      img.addEventListener('load', resolve);
      img.addEventListener('error', () => reject(img));
    });
  })).then(() => {
    window.print();
    window.location.reload();
  });
}
