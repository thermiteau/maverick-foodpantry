/**
 * @param {Event} e the event on click
 * @param {Boolean} newState expand or collapse state
 */
export function modifyAccordionState(e, newState) {
  // composedPath is not SUPPORTED IN IE11,
  //  closest is working (supported using Babel polyfill)
  const accordionSection = e
    .composedPath()
    .find(
      element => element.classList && element.classList.contains('qg-accordion'),
    );
  if (!accordionSection) return;
  const articles = accordionSection.querySelectorAll(
    '.qg-accordion article input[type="checkbox"]',
  );
  articles.forEach((article) => {
    // eslint-disable-next-line no-param-reassign
    article.checked = newState;
  });
}

/**
 * @param {HTMLElement} accordionSection html section
 */
export const addExpandCollapse = (accordionSection) => {
  if (!accordionSection) return;
  const collapse = accordionSection.querySelector('.collapse');
  const expand = accordionSection.querySelector('.expand');
  if (expand) {
    expand.addEventListener('click', e => modifyAccordionState(e, true));
  }
  if (collapse) {
    collapse.addEventListener('click', e => modifyAccordionState(e, false));
  }
};
