/* eslint-disable no-nested-ternary */
import { html, render } from 'lit-html';
/**
 * @class HelpGuide
 */
// eslint-disable-next-line no-unused-vars
export class HelpGuide {
  /**
   * @param {HTMLElement} target the target for the help guide
   * @param {Object} config contains views and initialState setting of menu
   */
  constructor(target, config) {
    // for open accordion item animation
    this.target = target;
    this.views = config.views;
    this.shouldAnimate = true;
    this.config = config.config;

    if (config.formWrapper) {
      this.formWrapper = config.formWrapper;
      this.displayOnSteps = new Map();
      config.displayOnSteps.map(step => this.displayOnSteps.set(step, true));
    }
    this.initialState = localStorage.getItem('help-guide')
      ? 'active'
      : this.config.initialState;

    if (this.initialState === 'minimized') {
      this._setState({
        firstView: false,
        open: false,
      });
    } else if (this.initialState === 'active') {
      this._setState({
        firstView: false,
        open: true,
      });
    } else {
      this._setState({
        firstView: true,
        open: true,
      });
    }

    this.updateTemplate();
    this._initAccordionButtons();
    this._onHashChange();
    // has seen help guide
    localStorage.setItem('help-guide', true);
    window.addEventListener('formiowrapperPageChange', () => {
      this.updateTemplate();
    });
    window.addEventListener('formioNewPageRender', () => {
      this.updateTemplate({ open: this._overWriteStateWithConfig() });
    });

    // eslint-disable-next-line no-shadow
    document.body.addEventListener('click', ({ target }) => {
      if (target.classList.contains('accordion-btn')) {
        this.returnTab = target;
        const itemID = target.dataset.accordionItem;
        const isOpen = this.state.open;
        if (!this.state.open) {
          this.updateTemplate({ open: true });
        }

        setTimeout(() => {
          this._openAccordionItem(itemID, isOpen);
        }, 500);
      }
    });
  }

  /**
   * @param {Object} newState new state object
   */
  _setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
  }

  /**
   * @return {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  _overWriteStateWithConfig() {
    if (this.state.firstView) {
      return this.state.open;
    }
    if (typeof this.config.overwriteMobileStateWith !== 'undefined'
      && window.innerWidth <= this.config.mobileSize) {
      return this.config.overwriteMobileStateWith;
    }
    if (typeof this.config.overwriteDesktopStateWith !== 'undefined'
      && window.innerWidth > this.config.mobileSize) {
      return this.config.overwriteDesktopStateWith;
    }
    return this.state.open;
  }

  /**
   * @param {String} itemID the id of the accordion item
   * @param {Boolean} isOpen if its open
   */
  _openAccordionItem(itemID, isOpen) {
    const accordionItem = document.getElementById(itemID);
    this.activeAccordion = accordionItem.parentElement;
    this._addKeyboardTrap();
    if (accordionItem.checked && isOpen) {
      return;
    }
    const articles = document.querySelectorAll(
      '.help-guide-content .qg-accordion article input[type="checkbox"]',
    );
    articles.forEach((article) => {
      // eslint-disable-next-line no-param-reassign
      article.checked = false;
    });

    accordionItem.checked = true;

    document.querySelector(`#${itemID}`).scrollIntoView({
      behavior: 'smooth',
    });
  }

  _addKeyboardTrap() {
    const focusableElements = this.activeAccordion.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ,
    );
    const firstItem = focusableElements[0];
    const lastItem = focusableElements[focusableElements.length - 1];

    firstItem.focus();

    const keyboardTrap = (e) => {
      const isFocusedInAccordion = Array.from(focusableElements).some(
        element => element === e.target,
      );

      if (e.target === lastItem) {
        e.preventDefault();
        this.updateTemplate({ open: false });
        this.returnTab.focus();
      }

      if (e.target === lastItem || !isFocusedInAccordion) {
        document.removeEventListener('keydown', keyboardTrap);
      }
    };
    document.addEventListener('keydown', keyboardTrap);
  }

  // eslint-disable-next-line class-methods-use-this
  _initAccordionButtons() {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      const parent = target.closest('article');
      if (target.className === 'acc-heading') {
        // .control.checked is not supported in IE11
        parent.querySelector('input').checked = !parent.querySelector('input')
          .checked;
      }
    });
  }

  _onHashChange() {
    window.addEventListener('hashchange', () => {
      // eslint-disable-next-line no-restricted-globals
      const locationId = location.hash.replace('#', '');
      this._openAccordionItem(locationId);
    }, false);
  }

  _closeButton() {
    return html`
      <button
        class="btn btn-link help-guide-close"
        @click=${() => this.updateTemplate({ open: false })}
      >
        Hide <i class="fa fa-arrow-right"></i>
      </button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _overlay(isVisible) {
    return html`<div
      class="overlay ${isVisible ? 'visible' : 'hide'}"
      @click=${!this.state.firstView
    ? () => this.updateTemplate({ open: false }) : ''}
    >
    </div>`;
  }

  // CLOSED STATE
  _callout() {
    return html`
      <button
        class="help-guide-callout"
        @click=${() => {
    this.updateTemplate({ open: true });
    const expandButton = document.querySelector('#help-guide #expand');
    expandButton.focus();
  }}
      >
        <i class="fa fa-book"></i>
        <span>Help guide</span>
      </button>
    `;
  }

  /**
   * @param {Object} newState the new state object
   */
  updateTemplate(newState) {
    if (newState) {
      this.shouldAnimate = true;
      this._setState(newState);
    }
    if (this.displayOnSteps.has(this.formWrapper.wizard.page)) {
      this.render(this.state);
      this.shouldAnimate = false;
    } else {
      this.render(null);
    }
    if (this.state.firstView) {
      const gotItButton = document.querySelector('#gotHelpGuide');
      if (gotItButton) {
        const keyboardTrap = (e) => {
          e.preventDefault();
          if (e.code === 'Enter' && e.target === gotItButton) {
            gotItButton.click();
          } else {
            gotItButton.focus();
          }
        };

        gotItButton.addEventListener('click', () => {
          document.querySelector('#focusTarget').focus();
          document.removeEventListener('keydown', keyboardTrap);
          this.updateTemplate({ open: this._overWriteStateWithConfig() });
        });

        document.addEventListener('keydown', keyboardTrap);
        gotItButton.focus();
      }
    }
  }

  /**
   * @param {Object} state the state
   * @return {HTMLTemplate}
   */
  createTemplate(state) {
    if (!state) return null;
    return html`
      ${!state.open ? this._callout() : ''}
      ${state.open ? this._overlay(state.firstView) : ''}
      <div
        class=${`help-guide-content ${
    this.shouldAnimate ? (state.open ? 'open-menu' : 'close-menu') : ''
  } ${!state.open && !this.shouldAnimate ? 'hide' : ''}`}
      >
        <div class="top-block">
          <div class="side-padding">
            <i class="fa fa-book"></i>
            <h2>Help guide</h2>
          </div>
          ${!state.firstView ? this._closeButton() : ''}
        </div>
        ${state.firstView
    ? this.views.initial(() => this.updateTemplate({ firstView: false }))
    : this.views[this.formWrapper.wizard.page]()}
      </div>
    `;
  }

  /**
   * @param {Object} state the state object
   * @return {HTMLTemplate}
   */
  render(state) {
    const templateResult = state ? this.createTemplate(state) : null;
    render(templateResult, this.target);
    return templateResult;
  }
}
