/* eslint-disable no-unused-vars */
import { FormioWrapper } from './components/formio-wrapper';
import { ButtonGroup } from './components/button-group';
import attachStepHandler from './scripts/step-handlers';
import { ReapplySelected } from './scripts/reapply-selected';
import { HelpGuide } from './components/help-guide';
import mainView from './components/partials/help-guide-lb-main';
import initialView from './components/partials/help-guide-lb-initial';
import ingredients from './components/partials/help-guide-lb-ingredient';
import statements from './components/partials/help-guide-lb-statement';
import businessView from './components/partials/help-guide-lb-business';
import nameView from './components/partials/help-guide-lb-names';
import storageView from './components/partials/help-guide-lb-storage';
import dateMarks from './components/partials/help-guide-lb-date-mark';
import { configuration } from './config';
import { Environment } from './environment';

(() => {
  const cssReapplier = new ReapplySelected();
  const environment = new Environment();

  // Overwrite config with environment variables where applicable.
  const config = {};
  Object.keys(configuration).forEach((key) => {
    config[key] = { ...configuration[key], ...environment[key] };
  });
  window.formEnv = environment.flag;

  const lb = new FormioWrapper(config);
  attachStepHandler();
  const hg = new HelpGuide(document.getElementById('help-guide'), {
    views: {
      initial: initialView,
      3: mainView,
      4: nameView,
      5: businessView,
      6: dateMarks,
      7: storageView,
      8: ingredients,
      9: statements,
    },
    displayOnSteps: [3, 4, 5, 6, 7, 8, 9],
    formWrapper: lb,
    config: config.helpGuide,
  });

  window.addEventListener('DOMContentLoaded', () => {
    /* Remove Squiz default H1 */
    const pageHeader = document.querySelector('#qg-primary-content');
    if (pageHeader) {
      pageHeader.removeChild(document.querySelector('h1'));
    }

    const navigationSection = document.querySelector('#qg-section-nav');
    let sectionNav;
    if (!navigationSection) {
      sectionNav = document.createElement('div');
      sectionNav.id = 'qg-section-nav';
      document.body.appendChild(sectionNav);
      sectionNav = document.querySelector('#qg-section-nav');
      // eslint-disable-next-line max-len
      sectionNav.innerHTML = '<ul><li><a class="active" href="#">Label Buster</li></ul>';
    } else {
      sectionNav = navigationSection.querySelector('ul > li > a.active')
        .parentElement;
    }
    const unorderdList = document.createElement('ol');
    unorderdList.classList.add('lb', 'guide-sub-nav');
    sectionNav.appendChild(unorderdList);
    const sectionNavTarget = sectionNav.querySelector('ol');

    const sectionNavigation = new ButtonGroup(sectionNavTarget, 'navigation');
    const bg = new ButtonGroup(document.querySelector('.button-container'));
  });

  window.addEventListener('formioNewPageRender', (event) => {
    // automated email on summary
    if (event.detail.page === 10) {
      const newEvent = new CustomEvent('formiowrapperSendAdminEmail', {
        bubbles: true,
      });
      window.dispatchEvent(newEvent);
    }
  });

  window.dataLayer = window.dataLayer || [];
  window.addEventListener('formioWrapperTracking', (event) => {
    const { form } = event.detail;
    const { change } = event.detail;
    if (!form.changed) return;
    if (typeof form.changed.component === 'object') {
      const { title } = change.changed.instance.root._form || '';
      const { modified } = change.changed.instance.root._form || '';
      window.dataLayer.push({
        event: 'formio-interaction',
        'formio-name': title,
        'formio-input-id': change.changed.component.id,
        'formio-input-type': change.changed.component.type,
        'formio-input-value': change.changed.value,
        'formio-input-key': change.changed.component.key,
        'formio-input-label-raw': change.changed.component.label,
        'formio-version': modified,
        'formio-category': `Form: ${title}`,
        'formio-action': 'filled in',
      });
    }
  });

  const mutationObserver = new MutationObserver(() => {
    // apply styles against to any radio's
    cssReapplier.reapply(['radio']);
  });

  mutationObserver.observe(document.querySelector(config.form.selector), {
    childList: true,
    subtree: true,
  });
})();
