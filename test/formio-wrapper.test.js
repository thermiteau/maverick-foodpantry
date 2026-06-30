/* eslint-disable */

import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { stub, spy, assert } from 'sinon';
import { FormioWrapper } from '../src/components/formio-wrapper';
import { configuration } from './config.js';

describe('Formio Wrapper Tests.', () => {
  let wrapper = {};
  let element;
  beforeEach(async () => {
    element = await fixture(html` <div id="formio"></div> `);
    window.Formio = {};
    Formio.createForm = () => {};
    stub(window.Formio, 'createForm').resolves();
    Formio.wizard = {};
    Formio._data = {};

    wrapper = new FormioWrapper(configuration);
    wrapper.wizard.redraw = () => {};
  });

  it('wrapper is initialised', async () => {
    expect(wrapper).to.be.ok;
    expect(wrapper.config.buttons.css.base).equals('qg-btn');
    expect(wrapper.config.buttons.css.cancel).equals('btn-link');
    expect(wrapper.config.buttons.css.next).equals('btn-primary');
    expect(wrapper.config.buttons.css.previous).equals('btn-default');
    expect(wrapper.config.buttons.overwriteFirstButton).equals(true);
    expect(wrapper.config.buttons.overwriteValue).equals('Start');
    expect(typeof wrapper.config.form.baseElement).equals('object');
    expect(typeof wrapper.config.form.location).equals('string');
    expect(wrapper.config.form.location).equals(
      'https://api.forms.platforms.qld.gov.au/fesrqwsyzlbtegd/formwizard',
    );
    expect(wrapper.config.buttons.overwriteFirstButton).equals(true);
    expect(wrapper.config.buttons.overwriteValue).equals('Start');
    expect(wrapper.config.buttons.showButtonsOnLast).equals(false);
    expect(wrapper.loaded).equals(false);
    expect(wrapper.config.scroll.target).equals(0);
    expect(typeof wrapper.wizard).equals('object');
  });

  it('function initialise works', async () => {
    wrapper.initialise();
    try {
      const event = new CustomEvent('DOMContentLoaded', {
        bubbles: true,
      });
      window.dispatchEvent(event);
    } catch (e) {
      expect(false).equals(true);
    }
    expect(true).equals(true);
  });

  it('Not loaded throws exception', async () => {
    try {
      wrapper.notLoaded();
    } catch (e) {
      expect(typeof e).equals('object');
      expect(e.name).equals('Loaded Exception');
    }
  });

  it('scroll to top works', async () => {
    const targetElement = document.querySelector(configuration.form.selector);
    const scroll = spy(element, 'scroll');
    const focus = spy(targetElement, 'focus');
    wrapper.scrollToTop(element, configuration.form.selector);
    scroll.restore();
    focus.restore();
    assert.calledOnce(scroll);
    assert.calledOnce(focus);
  });

  it('_gotoPage function throws an error when loaded is false', async () => {
    wrapper.loaded = false;
    try {
      wrapper._goToPage(0);
    } catch (e) {
      expect(typeof e).equals('object');
    }
  });

  it('_gotoPage triggers the right wizard function', async () => {
    wrapper.loaded = true;
    wrapper.wizard.setPage = () => Promise.resolve(true);
    wrapper._updateStorage = () => {};
    wrapper.wizard.pages = [
      {
        component: {
          title: 'something',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];
    const spied = spy(wrapper.wizard, 'setPage');
    wrapper._goToPage(0);
    spied.restore();
    assert.calledOnce(spied);
  });

  it('_goToPreviousPage function throws an error when loaded is false', async () => {
    wrapper.loaded = false;
    try {
      wrapper._goToPreviousPage();
    } catch (e) {
      expect(typeof e).equals('object');
    }
  });

  it('_goToPreviousPage triggers the right wizard function', async () => {
    wrapper.loaded = true;
    wrapper.wizard.prevPage = () => {};
    wrapper.wizard.pages = [
      {
        component: {
          title: 'something',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];
    const spied = spy(wrapper.wizard, 'prevPage');
    wrapper.wizard.page = 1;
    wrapper._goToPreviousPage();
    spied.restore();
    assert.calledOnce(spied);
  });

  it('_gotoNextPage function throws an error when loaded is false', async () => {
    wrapper.loaded = false;
    try {
      wrapper._goToNextPage();
    } catch (e) {
      expect(typeof e).equals('object');
    }
  });

  it('_goToNextPage triggers the right wizard function', async () => {
    wrapper.loaded = true;
    wrapper.wizard.page = 0;
    wrapper.wizard.pages = [
      {
        component: {
          title: 'something',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];

    wrapper.wizard.nextPage = () => {};
    const spied = spy(wrapper.wizard, 'nextPage');
    wrapper._goToNextPage();
    spied.restore();
    assert.calledOnce(spied);
  });

  it('_goToNextPage skips if terms are accepted', async () => {
    wrapper.loaded = true;
    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      true,
    );
    wrapper.wizard.page = 1;
    wrapper.wizard.pages = [
      {
        component: {
          title: 'something',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];
    wrapper.wizard.nextPage = () => {};
    const spied = spy(wrapper, '_shouldNextPageBeSkipped');
    wrapper._goToNextPage();
    spied.restore();
    assert.calledOnce(spied);
  });

  it('_goToPreviousPage skips if terms are accepted', async () => {
    wrapper.loaded = true;
    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      true,
    );
    wrapper.wizard.page = 2;
    wrapper.wizard.pages = [
      {
        component: {
          title: 'something',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];
    wrapper.wizard.prevPage = () => {};
    const spied = spy(wrapper, '_shouldPreviousPageBeSkipped');
    wrapper._goToPreviousPage();
    spied.restore();
    assert.calledOnce(spied);
  });

  it('check page validity uses formio validity', async () => {
    const response = wrapper._checkPageValidity(-1, [], {});
    expect(response).equals(false);
    const checkPageValidity = () => true;
    const checkPageValidity2 = () => false;

    let pages = [
      {
        checkValidity: checkPageValidity,
      },
      {
        checkValidity: checkPageValidity,
      },
      {
        checkValidity: checkPageValidity2,
      },
    ];
    const spied = spy(pages[1], 'checkValidity');
    wrapper._checkPageValidity(1, pages, {});
    spied.restore();
    assert.calledOnce(spied);

    pages = [
      {
        checkValidity: checkPageValidity,
      },
      {
        checkValidity: checkPageValidity2,
      },
      {
        checkValidity: checkPageValidity2,
      },
    ];

    let result = wrapper._checkPageValidity(1, pages, {});
    expect(result).equals(false);
    result = wrapper._checkPageValidity(2, pages, {});
    expect(result).equals(false);
  });

  it('determine title page functioning correctly', async () => {
    wrapper.config.buttons.overwriteFirstButton = false;
    const failure = wrapper._determineTitleChange('does not matter');
    expect(failure).equals(false);
    wrapper.config.buttons.overwriteFirstButton = true;
    const success = wrapper._determineTitleChange(configuration.terms.title);
    expect(success).equals(true);
  });

  it('page change event is fired as expected', async () => {
    const stubbedMenu = stub(wrapper, 'buildProgressMenuData');
    const stubbedButtons = stub(wrapper, 'buildButtonData');
    const stubbedFire = stub(wrapper.config.form.baseElement, 'dispatchEvent');
    wrapper._firePageChangeEvent();
    stubbedMenu.restore();
    stubbedButtons.restore();
    stubbedFire.restore();
    assert.calledOnce(stubbedMenu);
    assert.calledOnce(stubbedButtons);
    assert.calledOnce(stubbedFire);
  });

  it('button data works as anticipated', async () => {
    wrapper.wizard.pages = [
      {
        component: {
          title: 'something',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];

    const stubbedValidity = stub(wrapper, '_checkPageValidity').returns(true);
    wrapper.wizard.page = 1;
    const validResponse = wrapper.buildButtonData();
    expect(typeof validResponse).equals('object');
    expect(validResponse.length).equals(3);
    expect(validResponse[0].title).equals('Back');
    expect(validResponse[0].event).equals('formiowrapperGoToPrevious');
    expect(validResponse[0].cssClass).equals('qg-btn btn-default');
    expect(validResponse[0].disabled).equals(false);
    expect(validResponse[0].displayed).equals(true);
    expect(validResponse[0].visited).equals(false);

    expect(validResponse[1].title).equals('Next');
    expect(validResponse[1].event).equals('formiowrapperGoToNext');
    expect(validResponse[1].cssClass).equals('qg-btn btn-primary');
    expect(validResponse[1].disabled).equals(false);
    expect(validResponse[1].displayed).equals(true);
    expect(validResponse[1].visited).equals(false);

    expect(validResponse[2].title).equals('Cancel');
    expect(validResponse[2].event).equals('formiowrapperCancel');
    expect(validResponse[2].cssClass).equals('qg-btn btn-link');
    expect(validResponse[2].disabled).equals(false);
    expect(validResponse[2].displayed).equals(true);
    expect(validResponse[2].visited).equals(false);

    wrapper.wizard.page = 0;
    const firstResponse = wrapper.buildButtonData();
    expect(typeof firstResponse).equals('object');
    expect(firstResponse.length).equals(3);

    expect(firstResponse[0].title).equals('Back');
    expect(firstResponse[0].displayed).equals(false);

    expect(firstResponse[1].title).equals('Start');
    expect(firstResponse[1].displayed).equals(true);

    expect(firstResponse[2].title).equals('Cancel');
    expect(firstResponse[2].disabled).equals(false);

    wrapper.wizard.page = 2;
    const lastResponse = wrapper.buildButtonData();
    expect(typeof lastResponse).equals('object');
    expect(lastResponse.length).equals(3);

    expect(lastResponse[0].title).equals('Back');
    expect(lastResponse[0].displayed).equals(false);

    expect(lastResponse[1].title).equals('Next');
    expect(lastResponse[1].displayed).equals(false);

    expect(lastResponse[2].title).equals('Cancel');
    expect(lastResponse[2].displayed).equals(false);

    wrapper.config.buttons.overwriteFirstButton = false;
    wrapper.wizard.page = 0;
    const notStart = wrapper.buildButtonData();
    expect(typeof notStart).equals('object');
    expect(notStart.length).equals(3);

    expect(notStart[1].title).equals('Next');
    expect(notStart[1].displayed).equals(true);
    wrapper.config.buttons.overwriteFirstButton = true;
    stubbedValidity.restore();
  });

  it('buildProgressMenuData works as anticipated', async () => {
    const stubbedValidity = stub(wrapper, '_checkPageValidity').returns(true);
    wrapper.wizard.page = 1;
    const badProgresss = wrapper.buildProgressMenuData();
    expect(badProgresss.length).equals(0);

    wrapper.wizard.components = [
      {
        component: {
          title: 'First Page',
        },
      },
      {
        component: {
          title: 'terms and conditions',
        },
      },
      {
        component: {
          title: 'something',
        },
      },
    ];
    wrapper.wizard._seenPages = [0, 1];

    const initialProgressBar = wrapper.buildProgressMenuData();
    expect(initialProgressBar.length).equals(3);
    expect(initialProgressBar[0].cssClass).includes('qg-btn btn-link');
    expect(typeof initialProgressBar[0].detail).equals('object');
    expect(initialProgressBar[0].title).equals('First Page');
    expect(initialProgressBar[0].event).equals('formiowrapperGoToPage');
    expect(initialProgressBar[0].disabled).equals(false);
    expect(initialProgressBar[0].displayed).equals(true);

    expect(initialProgressBar[1].cssClass).includes('qg-btn btn-link');
    expect(initialProgressBar[1].cssClass).includes('active');
    expect(initialProgressBar[1].cssClass).includes('visited');
    expect(typeof initialProgressBar[1].detail).equals('object');
    expect(initialProgressBar[1].title).equals('terms and conditions');
    expect(initialProgressBar[1].event).equals('formiowrapperGoToPage');
    expect(initialProgressBar[1].disabled).equals(false);
    expect(initialProgressBar[1].displayed).equals(true);

    expect(initialProgressBar[2].cssClass).includes('qg-btn btn-link');
    expect(typeof initialProgressBar[2].detail).equals('object');
    expect(initialProgressBar[2].title).equals('something');
    expect(initialProgressBar[2].event).equals('formiowrapperGoToPage');
    expect(initialProgressBar[2].disabled).equals(true);
    expect(initialProgressBar[2].displayed).equals(true);
    stubbedValidity.restore();
  });

  it('determines if _shouldNextPageBeSkipped is working', async () => {
    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      false,
    );

    wrapper.config.terms.skipIfTermsAlreadyAccepted = false;
    const pages = [
      { component: { title: 'Something mundane' } },
      { component: { title: wrapper.config.terms.title } },
      { component: { title: 'Another boring title' } },
    ];
    let response = wrapper._shouldNextPageBeSkipped(0, []);
    expect(response).equals(false);
    wrapper.config.terms.skipIfTermsAlreadyAccepted = true;
    response = wrapper._shouldNextPageBeSkipped(0, pages);
    expect(response).equals(false);

    response = wrapper._shouldNextPageBeSkipped(0, pages);
    expect(response).equals(false);

    response = wrapper._shouldNextPageBeSkipped(1, pages);
    expect(response).equals(false);

    wrapper.config.terms.termsStorageType.setItem(
      wrapper.config.terms.termsStorageName,
      true,
    );
    response = wrapper._shouldNextPageBeSkipped(0, pages);
    expect(response).equals(true);

    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      false,
    );
    response = wrapper._shouldNextPageBeSkipped(0, pages);
    expect(response).equals(false);
  });

  it('determines if _shouldPreviousPageBeSkipped is working', async () => {
    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      false,
    );
    wrapper.config.terms.skipIfTermsAlreadyAccepted = false;
    const pages = [
      { component: { title: 'Something mundane' } },
      { component: { title: wrapper.config.terms.title } },
      { component: { title: 'Another boring title' } },
    ];
    let response = wrapper._shouldPreviousPageBeSkipped(0, []);
    expect(response).equals(false);

    wrapper.config.terms.skipIfTermsAlreadyAccepted = true;
    response = wrapper._shouldPreviousPageBeSkipped(2, pages);
    expect(response).equals(false);

    response = wrapper._shouldPreviousPageBeSkipped(2, pages);
    expect(response).equals(false);

    response = wrapper._shouldPreviousPageBeSkipped(1, pages);
    expect(response).equals(false);

    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      true,
    );
    response = wrapper._shouldPreviousPageBeSkipped(2, pages);
    expect(response).equals(true);

    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      false,
    );
    response = wrapper._shouldPreviousPageBeSkipped(1, pages);
    expect(response).equals(false);
  });

  it('Terms already accepted sets storage', async () => {
    wrapper.config.terms.skipIfTermsAlreadyAccepted = false;
    const pages = [
      { component: { title: 'Something mundane' } },
      { component: { title: wrapper.config.terms.title } },
      { component: { title: 'Another boring title' } },
    ];
    wrapper.wizard._seenPages = [0];
    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      true,
    );
    let response = wrapper._areTermsAccepted(1, pages);
    expect(response).equals(true);

    wrapper.config.terms.termsStorageType.setItem(
      configuration.terms.termsStorageName,
      false,
    );
    response = wrapper._areTermsAccepted(1, pages);
    expect(response).equals(false);

    sessionStorage.removeItem(configuration.terms.termsStorageName);
    response = wrapper._areTermsAccepted(1, pages);
    expect(response).equals(true);
  });

  it('_updateIfCompleted works', async () => {
    wrapper.config.terms.termsStorageType.removeItem(configuration.storageName);
    wrapper.config.terms.skipIfTermsAlreadyAccepted = false;
    const pages = [
      { component: { title: 'Something mundane' } },
      { component: { title: wrapper.config.terms.title } },
      { component: { title: 'Another boring title' } },
    ];
    wrapper.config.form.title = 'Test form';
    let response = wrapper._updateIfCompleted(1, []);
    expect(response).equals(false);
    response = wrapper._updateIfCompleted(0, pages);
    expect(response).equals(false);
    response = wrapper._updateIfCompleted(1, pages);
    expect(response).equals(false);
    response = wrapper._updateIfCompleted(2, pages);
    expect(response.length).equals(1);
    expect(response[0]).equals('Test form');
  });

  it('ensure gotonext page doesnt go to far', async () => {
    wrapper.loaded = true;
    wrapper.wizard.page = 1;
    wrapper.wizard.pages = [
      { component: { title: 'Something mundane' } },
      { component: { title: wrapper.config.terms.title } },
      { component: { title: 'Another boring title' } },
    ];
    wrapper._shouldNextPageBeSkipped = () => {
      return true;
    };
    wrapper.wizard.setPage = () => Promise.resolve(true);
    const spied = spy(wrapper, '_goToPage');
    wrapper._goToNextPage();
    spied.restore();
    assert.calledOnce(spied);
    expect(spied.getCall(0).calledWith(2)).equals(true);
  });

  it('_fireExtraEvent works', async () => {
    wrapper.formTitle = 'Test form';
    let response = wrapper._fireExtraEvent('testEvent');
    expect(typeof response).equals('object');
    expect(response.bubbles).equals(true);
    expect(response.detail.title).equals('Test form');
  });

  it('form submission', async () => {
    if (!wrapper.pdfInstance) {
      wrapper.pdfInstance = {};
    }
    wrapper.pdfInstance.submit = () => {};
    const spied = spy(wrapper.pdfInstance, 'submit');
    wrapper._formSubmission();
    spied.restore();
    assert.calledOnce(spied);
  });

  it('download pdf is requested download', async () => {
    wrapper.requestedDownload = true;
    const spied = spy(wrapper, '_formSubmission');
    wrapper._downloadPDF();
    spied.restore();
    assert.notCalled(spied);
  });

  it('_packageData works as expected', async () => {
    const data1 = {
      data: 'one',
      object: {
        one: 1,
        two: 2,
      },
      shared: {
        beef: 'sweet',
      }
    };

    const data2 = {
      data: 'two',
      shared: {
        beef: 'under',
        pork: 'none',
      }
    };

    const response = wrapper._packageData(data1, data2);
    const object = wrapper._unpackageData(response);
    expect(object.data).equals('two');
    expect(object.object.one).equals(1);
    expect(object.object.two).equals(2);
    expect(object.shared.beef).equals('under');
    expect(object.shared.pork).equals('none');
  });

  afterEach(async () => {});
});
