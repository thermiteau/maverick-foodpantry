/**
 * @class FormioWrapper
 */
export class FormioWrapper {
  /**
   * @param {Object} configuration the configuration object
   * @returns {void}
   */
  constructor(configuration) {
    this.config = configuration;
    this.formElement = {};
    this.emailElement = null;
    this.wizard = {};
    this.loaded = false;
    this.lastNavigation = null;
    this._addListeners(this.config.form.baseElement);
  }

  initialise(firstInit = true) {
    if (!this.config.form.location) return;
    this.submissionEndpoint = `${this.config.form.baseLocation}${this.config.form.pdfEndpoint}/${this.config.form.endpoint}`;
    this.formElement = document.querySelector('#formio');

    // create main form
    Formio.createForm(
      this.formElement,
      this.config.form.location,
      this.config.form.formioConfig,
    ).then((wizard) => {
      this.wizard = wizard;
      this.wizard.data.parent = wizard.id;
      this.wizard.data.adminEmail = this.formAdminEmail;
      this.wizard.data.downloadPDF = this.config.form.downloadPDF;
      this.formTitle = !this.formTitle ? wizard._form.title : this.formTitle;
      this.loaded = true;
      if (firstInit) {
        this._attachHandlers();
        this.createPDFInstance();
      }
    });
  }

  /**
   */
  _attachHandlers() {
    this.wizard.on('initialized', () => {
      this._firePageChangeEvent();
      this.scrollToTop();
    });
    this.wizard.on('render', () => {
      this._firePageChangeEvent();
      if (this.wizard.page === 0) {
        this.scrollToTop();
      }
      if (this.wizard.page === 8) {
        this.wizard.submission = {
          data: {
            ...this.wizard._data,
          },
        };
      }
    });
    this.wizard.on('change', (form, change) => {
      this._firePageChangeEvent();
      this._fireTrackingEvent(form, change);
    });
    this.wizard.on('downloadPDF', () => {
      this.wizard.data.sendEmail = false;
      this._downloadPDF();
    });
    this.wizard.on('sendEmail', () => {
      this.wizard.data.sendEmail = 'user';
      this._sendEmail();
    });
  }

  /**
   * @param {Object} baseObject object to trigger listeners and events on
   */
  _addListeners(baseObject = window) {
    this._removeListeners(baseObject);
    baseObject.addEventListener('DOMContentLoaded', () => {
      this.initialise();
    });

    baseObject.addEventListener('formiowrapperGoToNext', () => {
      this._goToNextPage();
      this.scrollToTop();
      if (this.config.extraTriggersOnActions.next) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.next);
      }
    });

    baseObject.addEventListener('formiowrapperGoToPrevious', () => {
      this._goToPreviousPage();
      this.scrollToTop();
      if (this.config.extraTriggersOnActions.previous) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.previous);
      }
    });
    baseObject.addEventListener('formiowrapperCancel', () => {
      if (this.config.form.clearStorageOnCancel) {
        this._clearStorage();
      } else {
        this._goToPage(0);
      }
      if (this.config.extraTriggersOnActions.cancel) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.cancel);
      }
    });

    baseObject.addEventListener('formiowrapperGoToPage', (event) => {
      this._goToPage(Number(event.detail.page));
      this.scrollToTop();
      if (this.config.extraTriggersOnActions.goto) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.goto);
      }
    });

    baseObject.addEventListener('formiowrapperSendAdminEmail', () => {
      this.wizard.data.sendEmail = 'admin';
      this._sendEmail();
    });

    baseObject.addEventListener('formiowrapperPageChange', (event) => {
      if (event.detail.page !== this.currentPageRef) {
        this._fireExtraEvent('formioNewPageRender');
        this.currentPageRef = this.wizard.page;
      }
    });
  }

  /**
   * @param {Object} baseObject object to trigger listeners and events on
   */
  _removeListeners(baseObject = window) {
    baseObject.removeEventListener('DOMContentLoaded', () => {
      this.initialise();
    });

    baseObject.removeEventListener('formiowrapperGoToNext', () => {
      this._goToNextPage();
    });

    baseObject.removeEventListener('formiowrapperGoToPrevious', () => {
      this._goToPreviousPage();
      if (this.config.extraTriggersOnActions.previous) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.previous);
      }
    });

    baseObject.removeEventListener('formiowrapperCancel', () => {
      if (this.config.form.clearStorageOnCancel) {
        this._clearStorage();
      } else {
        this._goToPage(0);
      }
      if (this.config.extraTriggersOnActions.cancel) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.cancel);
      }
    });

    baseObject.removeEventListener('formiowrapperGoToPage', (event) => {
      this._goToPage(Number(event.detail.page));
      if (this.config.extraTriggersOnActions.goto) {
        this._fireExtraEvent(this.config.extraTriggersOnActions.goto);
      }
    });

    baseObject.removeEventListener('formiowrapperSendAdminEmail', () => {
      this.wizard.data.sendEmail = 'admin';
      this._sendEmail();
    });

    baseObject.removeEventListener('formiowrapperPageChange', (event) => {
      if (event.detail.page !== this.currentPageRef) {
        this._fireExtraEvent('formioNewPageRender');
        this.currentPageRef = this.wizard.page;
      }
    });
  }

  /**
   * @param {String} event the event name to fire
   * @return {Event}
   */
  _fireExtraEvent(event) {
    const newEvent = new CustomEvent(event, {
      bubbles: true,
      detail: {
        title: this.config.form.title,
        page: this.wizard && this.wizard.page ? this.wizard.page : 0,
      },
    });
    this.config.form.baseElement.dispatchEvent(newEvent);
    return newEvent;
  }

  /**
   * @returns {void}
   */
  // eslint-ignored here while committing
  _firePageChangeEvent() {
    this._updateStorages();
    const event = new CustomEvent('formiowrapperPageChange', {
      bubbles: true,
      detail: {
        title: this.config.form.title,
        page: this.wizard && this.wizard.page ? this.wizard.page : 0,
        navigation: this.buildProgressMenuData(),
        buttons: this.buildButtonData(),
      },
    });
    this.config.form.baseElement.dispatchEvent(event);
  }

  _updateStorages() {
    if (this.wizard.page === 0 && this.lastNavigation === null) {
      this._populateDataFromStorage(
        this.config.storage.type,
        this.config.form.title,
      );
    } else {
      this._updateStorage(
        this.config.storage.type,
        this.config.form.title,
        this.wizard.data,
        this.wizard._seenPages,
        this.wizard.page,
      );
    }
  }

  /**
   * @param {Object} storage the storage option
   * @param {String} key the key within the storage
   * @param {Object} data the new data to be stored
   * @param {Array} seenPages the seen pages
   * @param {Number} page the page number
   */
  // eslint-disable-next-line class-methods-use-this
  _updateStorage(storage, key, data, seenPages, page) {
    if (this.wizard.page === 0) return;
    const rawData = storage.getItem(key);
    let newStorage = {};
    try {
      const previousStorage = rawData ? this._unpackageData(rawData) : {};
      newStorage = { ...previousStorage, ...data };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Data corrupted, ignoring');
      newStorage = { ...data };
    }
    newStorage.page = page;
    newStorage._seenPages = seenPages;
    newStorage.lastNavigation = this.lastNavigation;
    storage.setItem(key, this._packageData(newStorage));
  }

  /**
   * @param {Object} storage the storage option
   * @param {String} key the key within the storage
   */
  _populateDataFromStorage(storage, key) {
    const storedData = storage.getItem(key);
    const termsStorage = this.config.terms.termsStorageType;
    if (storedData) {
      try {
        this.storedData = this._unpackageData(storedData);
        this.wizard._seenPages = this.storedData._seenPages;
        this.lastNavigation = this.storedData.lastNavigation || 0;
        delete this.storedData._seenPages;
        this.wizard.page = this.storedData.page;
        delete this.storedData.page;

        this.wizard.data = this.storedData;
        this.wizard.data[this.config.terms.dataName] = JSON.parse(
          termsStorage.getItem(this.config.terms.termsStorageName),
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Stored data corrupted, skipping');
      }

      if (this.lastNavigation !== null) {
        let lowestValid = this.lastNavigation;
        let counter;

        // Ensure we have the last valid page to load on.
        for (counter = this.lastNavigation; counter > 0; counter -= 1) {
          if (
            !this._checkPageValidity(
              counter,
              this.wizard.components,
              this.wizard.data,
            )
          ) {
            lowestValid = counter;
          }
        }
        this._goToPage(lowestValid);
      }
    }
  }

  /**
   * @param {Object} storedData stored object
   * @param {Object} newData new data object from formio
   * @returns {String} the stringified object
   */
  // eslint-disable-next-line class-methods-use-this
  _packageData(storedData, newData) {
    const newStorage = { ...storedData, ...newData };

    const keys = Object.keys(newStorage);
    keys.forEach((key) => {
      newStorage[key] = JSON.stringify(newStorage[key]);
    });
    return JSON.stringify(newStorage);
  }

  /**
   * @param {String} stringData the stringified object
   * @return {Object} the unpackaged object
   */
  // eslint-disable-next-line class-methods-use-this
  _unpackageData(stringData) {
    let data = {};
    try {
      data = JSON.parse(stringData);
      const keys = Object.keys(data);
      keys.forEach((key) => {
        data[key] = JSON.parse(data[key]);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Stored data corrupted, skipping');
    }
    return data;
  }

  /**
   */
  _clearStorage() {
    this.config.terms.termsStorageType.clear();
    this.config.storage.type.clear();
    this.lastNavigation = 0;
    this.wizard._seenPages = [];
    this.wizard.emit('resetForm');
    // Hack cause formio doesn't reset properly.
    document.location.reload();
  }

  /**
   * @returns {Array} the array of options to distribute
   */
  buildProgressMenuData() {
    const navigationArray = [];
    if (!this.wizard || !this.wizard.components) {
      return navigationArray;
    }
    let invalidPreviousStep = false;
    this.wizard.components.forEach((page, offset) => {
      const isValid = this._checkPageValidity(
        offset,
        this.wizard.components,
        this.wizard.data,
      );

      const active = offset === this.wizard.page;
      const activeClass = active ? 'active' : '';
      const visited = this._seenPages(offset, this.wizard._seenPages);
      const visitedClass = visited ? 'visited' : '';

      if (!visited) {
        invalidPreviousStep = true;
      }
      const outputObject = {
        // eslint-disable-next-line max-len
        cssClass: `${this.config.navigation.baseClass} ${activeClass} ${visitedClass}`,
        detail: {
          page: offset,
          currentPage: this.wizard.page,
        },
        event: 'formiowrapperGoToPage',
        title: page.component.title,
        disabled: invalidPreviousStep,
        displayed: true,
        active,
        type: 'li',
      };
      if (!isValid) {
        invalidPreviousStep = true;
      }
      if (!(this.config.navigation.skipFirstNavStep && offset === 0)) {
        navigationArray.push(outputObject);
      }
    });
    return navigationArray;
  }

  /**
   * @description if you skip a terms and conditions page it may not come up
   * as seen... so therefore if we have seen any pages after that it is
   * classified as seen also.
   * @param {Number} page current page number being examined
   * @param {Array} seenPages the list of seen pages
   * @return {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  _seenPages(page, seenPages) {
    if (!seenPages.length) return false;
    if (seenPages.indexOf(page + 1) !== -1) return true;
    if (seenPages.indexOf(page) !== -1) return true;
    return false;
  }

  /**
   * @return {Array} the button data array
   */
  buildButtonData() {
    const { page } = this.wizard;
    const { pages } = this.wizard;
    const { data } = this.wizard;
    const { base } = this.config.buttons.css;

    const previousButton = {
      title: 'Back',
      event: 'formiowrapperGoToPrevious',
      cssClass: `${base} ${this.config.buttons.css.previous}`,
      disabled: false,
      displayed: true,
      visited: false,
    };

    const nextButton = {
      title: 'Next',
      event: 'formiowrapperGoToNext',
      cssClass: `${base} ${this.config.buttons.css.next}`,
      disabled: !this._checkPageValidity(page, pages, data),
      displayed: true,
      visited: false,
    };

    const cancelButton = {
      title: 'Cancel',
      event: 'formiowrapperCancel',
      cssClass: `${base} ${this.config.buttons.css.cancel}`,
      disabled: false,
      displayed: true,
      visited: false,
      confirm: this.config.buttons.confirmOnCancel,
    };

    if (page === 0) {
      previousButton.displayed = false;
      if (this.config.buttons.overwriteFirstButton) {
        cancelButton.displayed = false;
        nextButton.title = this.config.buttons.overwriteValue;
      }

      if (this.config.buttons.overwriteFirstButtonShowExtras) {
        cancelButton.displayed = true;
        previousButton.displayed = true;
        previousButton.event = 'formiowrapperCancel';
      }
    }

    if (page === this.wizard.pages.length - 1) {
      nextButton.displayed = false;
      if (!this.config.buttons.showButtonsOnLast) {
        previousButton.displayed = false;
        cancelButton.displayed = false;
      }
    }

    const currentPageTitle = this.wizard.pages[page].component.title;
    if (this._determineTitleChange(currentPageTitle)) {
      nextButton.title = 'Accept';
      nextButton.disabled = !this._checkPageValidity(page, pages, data);
    }

    return [previousButton, nextButton, cancelButton];
  }

  /**
   * @param {String} currentPageTitle the current page title
   * @return {Boolean}
   */
  _determineTitleChange(currentPageTitle) {
    if (!this.config.buttons.overwriteFirstButton) return false;
    return currentPageTitle.toLowerCase().includes(this.config.terms.title);
  }

  /**
   * @param {Number} page the current page number
   * @param {Array} pages the wizard pages
   * @return {Boolean}
   */
  _shouldNextPageBeSkipped(page, pages) {
    if (!this.config.terms.skipIfTermsAlreadyAccepted) return false;
    const pageTitle = pages[page + 1].component.title;
    if (!pageTitle.toLowerCase().includes(this.config.terms.title)) {
      return false;
    }
    return this._areTermsAccepted(page, pages);
  }

  /**
   * @param {Number} page the current page number
   * @param {Array} pages the wizard pages
   * @return {Boolean}
   */
  _shouldPreviousPageBeSkipped(page, pages) {
    if (!this.config.terms.skipIfTermsAlreadyAccepted) return false;
    const pageTitle = pages[page - 1].component.title;
    if (!pageTitle.toLowerCase().includes(this.config.terms.title)) {
      return false;
    }
    return this._areTermsAccepted(page, pages);
  }

  /**
   * @param {Number} page the wizard page number
   * @param {Array} pages the wizard pages
   * @return {Boolean}
   */
  _areTermsAccepted(page, pages) {
    const termsStorage = this.config.terms.termsStorageType;
    let storedValue = termsStorage.getItem(this.config.terms.termsStorageName);

    try {
      storedValue = typeof storedValue !== 'undefined'
        ? JSON.parse(storedValue)
        : storedValue;
      if (typeof storedValue === 'boolean') {
        return storedValue;
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('terms not set');
    }

    const previousPageNumber = page;
    const previousPageTitle = pages[previousPageNumber].component.title;
    if (previousPageTitle.toLowerCase().includes(this.config.terms.title)) {
      termsStorage.setItem(this.config.terms.termsStorageName, true);
      return true;
    }
    return false;
  }

  /**
   * @param {Number} offset the offset in the page array
   * @param {Object} pages the details about the page
   * @param {Object} data the data entered by the user
   * @returns {Boolean}
   */
  // eslint-disable-next-line class-methods-use-this
  _checkPageValidity(offset, pages, data) {
    if (offset < 0) return false;
    return pages[offset].checkValidity(data);
  }

  /**
   * @return {Boolean}
   */
  _goToNextPage() {
    if (!this.loaded) {
      this.notLoaded();
    }
    if (this.wizard.page === this.wizard.pages.length - 1) return false;
    if (this._shouldNextPageBeSkipped(this.wizard.page, this.wizard.pages)) {
      const proposedPage = this.wizard.page + 2;
      const targetPage = proposedPage < this.wizard.pages.length
        ? proposedPage
        : this.wizard.page + 1;
      this._updateStorage(
        this.config.storage.type,
        this.config.form.title,
        this.wizard.data,
        this.wizard._seenPages,
        targetPage,
      );
      this._goToPage(targetPage);
      this.lastNavigation = targetPage;
      return true;
    }
    this._updateIfCompleted(this.wizard.page + 1, this.wizard.pages);
    this._areTermsAccepted(this.wizard.page, this.wizard.pages);
    this._updateStorage(
      this.config.storage.type,
      this.config.form.title,
      this.wizard.data,
      this.wizard._seenPages,
      this.wizard.page + 1,
    );
    this.lastNavigation = this.wizard.page + 1;
    this.wizard.nextPage();
    return true;
  }

  /**
   * @param {Number} page the current page number
   * @param {Array} pages the array of pages
   * @return {Boolean|String}
   */
  _updateIfCompleted(page, pages) {
    if (!page) return false;
    if (!pages || !pages.length) return false;
    if (page === pages.length - 1) {
      let completed = JSON.parse(
        this.config.storage.type.getItem(this.config.storage.name),
      );
      if (!completed || !completed.length) {
        completed = [];
      }
      if (this.config.form.title) {
        completed.push(this.config.form.title);
        completed = [...new Set(completed)];
      }
      this.config.storage.type.setItem(
        this.config.storage.name,
        JSON.stringify(completed),
      );
      return completed;
    }
    return false;
  }

  /**
   * @return {Boolean}
   */
  _goToPreviousPage() {
    if (!this.loaded) {
      this.notLoaded();
      return false;
    }
    if (
      this._shouldPreviousPageBeSkipped(this.wizard.page, this.wizard.pages)
    ) {
      const proposedPage = this.wizard.page - 2;
      const targetPage = proposedPage <= 0 ? proposedPage
        : this.wizard.page - 1;
      this._updateStorage(
        this.config.storage.type,
        this.config.form.title,
        this.wizard.data,
        this.wizard._seenPages,
        targetPage,
      );
      this.lastNavigation = targetPage;
      this._goToPage(targetPage);
      return true;
    }
    this._updateStorage(
      this.config.storage.type,
      this.config.form.title,
      this.wizard.data,
      this.wizard._seenPages,
      this.wizard.page - 1,
    );
    this.lastNavigation = this.wizard.page - 1;
    this.wizard.prevPage();
    return true;
  }

  /**
   * @param {Number} pageNo the page number provided by the wizard instance
   * @return {Boolean}
   */
  _goToPage(pageNo) {
    if (!this.loaded) {
      this.notLoaded();
    }
    if (!this.wizard || !this.wizard.pages) return false;

    this._updateStorage(
      this.config.storage.type,
      this.config.form.title,
      this.wizard.data,
      this.wizard._seenPages,
      pageNo,
    );

    this._updateIfCompleted(pageNo, this.wizard.pages);

    // Oddness... seems it doesn't set page the first time.
    this.wizard.setPage(pageNo).then(() => {
      this.wizard.setPage(pageNo);
      this.wizard.redraw();
    });
    return true;
  }

  /**
   */
  notLoaded() {
    const errorObject = {
      element: this.formElement,
      loaded: this.loaded,
      settings: this.settings,
      name: 'Loaded Exception',
      message: 'FormIO not properly loaded',
    };

    throw errorObject;
  }

  /**
   * @param {HTMLElement} baseElement the base element for scrolling (window)
   * @param {HTMLElement} focusTarget the element for query selecting (document)
   */
  scrollToTop(
    baseElement = this.config.form.baseElement,
    focusTarget = this.config.scroll.focusTarget,
  ) {
    if (this.config.scroll.target !== -1) {
      baseElement.scroll({
        top: this.config.scroll.target,
        behavior: this.config.scroll.type,
      });
    }
    const target = this.config.form.queryElement.querySelector(focusTarget);
    if (!target) return;
    target.focus();
  }

  /**
   * @return {void}
   */
  createPDFInstance() {
    if (!this.config.form.pdfEndpoint || !this.config.form.sendPDF) return;
    Formio.createForm(
      document.createElement('div'),
      `${this.config.form.baseLocation}${this.config.form.pdfEndpoint}`,
    ).then((pdfInstance) => {
      this.pdfInstance = pdfInstance;
    });
  }

  /**
   * @param {String} sendEmail user or admin for the send email attribute
   */
  _triggerEmailSubmission(sendEmail) {
    if (!this.config.form.location) return;
    if (!this.emailElement) {
      this.emailElement = document.createElement('div');
      this.emailElement.setAttribute('id', 'emailElement');
      this.emailElement.setAttribute('hidden', true);
    }

    Formio.createForm(this.emailElement, `${this.config.form.location}`).then(
      (formInstance) => {
        const wizardData = JSON.parse(JSON.stringify(this.wizard.data));
        if (!wizardData.children) {
          wizardData.children = '';
        }
        if (wizardData.children.length) {
          wizardData.children = `${wizardData.children},`;
        }
        wizardData.children = `${wizardData.children} ${formInstance.id}`;
        const emailForm = formInstance;
        emailForm.data = wizardData;
        emailForm.sendEmail = sendEmail;
        emailForm.submit();
      },
    );
    this.emailElement.innerHTML = '';
    this.emailElement = null;
  }

  /**
   * @return {Response}
   */
  _formSubmission() {
    this.pdfInstance.data = this.wizard.data;
    return this.pdfInstance.submit();
  }

  /**
   * @return {void}
   */
  _downloadPDF() {
    if (this.requestedDownload || !this.config.form.sendPDF) return;
    this.requestedDownload = true;
    // wizard event does not capture EventTarget
    const downloadButton = this.config.form.queryElement.querySelector(
      '[name="data[downloadSummary]"',
    );
    downloadButton.disabled = true;

    this._formSubmission().then((successBody) => {
      const { pdfDownloadName } = this.config.form;
      const formioWrapper = this;
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        `${this.submissionEndpoint}/${successBody._id}/download`,
        true,
      );
      xhr.responseType = 'arraybuffer';
      xhr.onload = function openPdf() {
        if (this.status === 200) {
          const blob = new Blob([this.response], { type: 'application/pdf' });
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // IE 11
            window.navigator.msSaveOrOpenBlob(blob);
          } else {
            // Other browsers
            const data = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = data;
            link.download = pdfDownloadName(successBody.data);
            link.click();
            setTimeout(() => {
              // For Firefox
              window.URL.revokeObjectURL(data);
            }, 100);
          }
        }
        downloadButton.disabled = false;
        formioWrapper.requestedDownload = false;
      };
      xhr.send();
    });
  }

  /**
   * @return {void}
   */
  _sendEmail() {
    if (this.requestedEmail) return;
    let previousEmail = '';
    let previousConfirm = '';
    const emailButton = this.config.form.queryElement.querySelector(
      '[name="data[emailButton]"',
    );
    if (this.wizard.data.sendEmail === 'user') {
      emailButton.disabled = true;
      emailButton.setAttribute('busy', true);
      this.requestedEmail = true;
      setTimeout(() => {
        this.requestedEmail = false;
        emailButton.disabled = false;
        emailButton.setAttribute('busy', false);
      }, 3000);
    } else {
      previousEmail = this.wizard.data[
        this.config.form.emailField];
      previousConfirm = this.wizard.data[
        this.config.form.emailConfirmField];
      this.wizard.data[
        this.config.form.adminField] = this.config.form.adminEmail;
      this.wizard.data[
        this.config.form.emailField] = this.config.form.adminEmail;
      this.wizard.data[
        this.config.form.emailConfirmField] = this.config.form.adminEmail;
    }
    this._triggerEmailSubmission(this.wizard.data.sendEmail);
    if (this.wizard.data.sendEmail !== 'user') {
      this.wizard.data[this.config.form.emailField] = previousEmail;
      this.wizard.data[this.config.form.emailConfirmField] = previousConfirm;
    }
  }

  /**
   * @param {Object} form the form object
   * @param {Object} change the change object
   */
  _fireTrackingEvent(form, change) {
    const newEvent = new CustomEvent('formioWrapperTracking', {
      bubbles: true,
      detail: {
        form,
        change,
        title: !this.formTitle ? this.wizard._form.title : this.formTitle,
      },
    });
    this.config.form.baseElement.dispatchEvent(newEvent);
  }
}
