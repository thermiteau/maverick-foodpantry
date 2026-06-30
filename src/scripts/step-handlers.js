import { addExpandCollapse } from './collapse-expand';

export default () => {
  window.addEventListener('formiowrapperPageChange', ({ detail: { page } }) => {
    if (page === 2) {
      addExpandCollapse(document.querySelector('.wizard-page'));
    }
  });
};
