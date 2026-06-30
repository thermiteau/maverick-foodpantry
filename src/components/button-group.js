import { html, render, nothing } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { configuration } from '../config';

export class ButtonGroup {
  constructor(target, data = 'buttons') {
    this.target = target;
    this.data = data;
    this.showDialog = false;
    this.cancelEvent = {};
    this.fullData = [];

    window.addEventListener('formiowrapperPageChange', ({ detail }) => {
      this.updateTarget(detail);
    });
  }

  /**
   * @desc Updates the dom target, side effect.
   * @param {Array} data the event data
   */
  updateTarget(data) {
    this.fullData = data;
    render(this.updateButtons(data[this.data]), this.target);
  }

  /**
   * @param {Object} data the current page
   * @return {Object}
   */
  updateButtons(data) {
    const output = data.map(but => this.generateButton(
      but.title,
      but.event,
      but.cssClass,
      but.disabled,
      but.displayed,
      but.active,
      but.detail,
      but.type,
      but.confirm,
    ));

    let confirmation = nothing;
    if (JSON.stringify(output).indexOf('</li>') === -1) {
      confirmation = this._createConfirmation();
    }
    this.updateParentIfFirstStepSkipped(data);
    return html`${output}${confirmation}`;
  }

  /**
   * @param {Object} data the data used to generate all the buttons
   */
  updateParentIfFirstStepSkipped(data) {
    if (!data || !data[0] || data[0].type !== 'li') return;

    if (!configuration.navigation
        || !configuration.navigation.skipFirstNavStep) return;

    const parent = this.target.parentElement.querySelector('li > a.active');
    if (!parent) return;

    const currentPage = this.getCurrentPage(data);
    if (!parent.getAttribute('updated')) {
      const clickData = { ...data[0].detail, ...{ page: 0 } };
      parent.setAttribute('data-event', data[0].event);
      parent.setAttribute('data-confirm', !!data[0].confirm);
      parent.setAttribute('data-detail', JSON.stringify(clickData));
      parent.setAttribute('updated', true);
      parent.removeAttribute('href');
      parent.removeEventListener('click', (e) => { this.processClick(e); });
      parent.addEventListener('click', (e) => { this.processClick(e); });
    }

    if (currentPage === 0) {
      parent.classList.remove('opened');
    } else {
      parent.classList.add('opened');
    }
  }

  /**
   * @param {Object} data
   * @return {Number|NULL}
   */
  // eslint-disable-next-line class-methods-use-this
  getCurrentPage(data) {
    if (!data) return null;
    if (!data[0]) return null;
    if (!data[0].detail) return null;
    return data[0].detail.currentPage;
  }

  /**
   */
  // eslint-disable-next-line class-methods-use-this
  _createConfirmation() {
    return html`
      <div
        id="cancelconfirmationwrapper"
        ?hidden=${!this.showDialog}
        @click="${e => this.backgroundClose(e)}">
        <div id="cancelconfirmationdialog">
          <button class="close" @click="${() => this.toggleDialog()}">
              ${unsafeHTML(configuration.confirmation.closeXButton)}
          </button>
          <h2>${configuration.confirmation.title}</h2>
          ${configuration.confirmation.description}
          <hr>
          <div class="buttons">
            <button
              class="${configuration.confirmation.continueButtonCssClass}"
              @click="${() => this.toggleDialog()}">
              ${configuration.confirmation.continueButtonText}
            </button>
            <button
              class="${configuration.confirmation.leaveButtonCssClass}"
              @click="${event => this.confirmCancel(event)}">
              ${configuration.confirmation.leaveButtonText}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * @param {String} text the text on the button
   * @param {String} event the event the clicking the button fires
   * @param {String} cssClass the class string for the buttons display
   * @param {Boolean} disabled is the button disabled
   * @param {Boolean} displayed do we display the button
   * @param {Boolean} active if the nav button is active
   * @param {Object} detail detail object to pass through
   * @param {String} type type of element overrites button
   * @param {Boolean} confirm if there is a confirmation for this button press
   * @return {Object}
   */
  generateButton(
    text,
    event,
    cssClass,
    disabled,
    displayed,
    active,
    detail = '',
    type = 'button',
    confirm = false,
  ) {
    if (!displayed) return html``;
    const extraClass = disabled ? 'disabled' : '';
    const activeClass = active ? 'active' : '';
    const button = html` <button
      class="${cssClass} ${extraClass} ${activeClass}"
      data-event=${event}
      data-confirm=${confirm}
      data-detail=${JSON.stringify(detail)}
      @click="${e => this.processClick(e)}"
      ?disabled=${disabled}
    >
      ${text}
    </button>`;

    switch (type) {
      case 'li': {
        return html` <li class="${extraClass} ${activeClass}">${button}</li>`;
      }
      default: {
        return html`${button}`;
      }
    }
  }

  /**
   * @param {Object} event the event
   */
  processClick(event) {
    if (event.target.dataset.confirm !== 'false') {
      this.cancelEvent = {
        target: {
          dataset: {
            event: event.target.dataset.event,
            detail: event.target.dataset.detail,
          },
        },
      };
      this.toggleDialog();
      return;
    }
    this.fireEvent(event);
  }

  /**
   * @param {Object} event
   */
  // eslint-disable-next-line class-methods-use-this
  fireEvent(event) {
    const newEvent = new CustomEvent(event.target.dataset.event, {
      bubbles: true,
      detail: JSON.parse(event.target.dataset.detail),
    });
    window.dispatchEvent(newEvent);
  }

  /**
   */
  confirmCancel() {
    this.toggleDialog();
    const cancelEvent = { ...this.cancelEvent };
    this.cancelEvent = {};
    this.fireEvent(cancelEvent);
  }

  /**
   */
  toggleDialog() {
    this.showDialog = !this.showDialog;
    render(this.updateButtons(this.fullData[this.data]), this.target);
  }

  /**
   * @param {Object} event the click event
   */
  backgroundClose(event) {
    if (event.target.id !== 'cancelconfirmationwrapper') return;
    this.showDialog = false;
    render(this.updateButtons(this.fullData[this.data]), this.target);
  }
}
