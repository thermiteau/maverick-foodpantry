/* eslint-disable */

import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { stub, spy, assert } from 'sinon';
import { FormioWrapper } from '../src/components/formio-wrapper';
import { configuration } from './config.js';

describe('Formio Wrapper Event Tests.', () => {
  let wrapper = {};
  let element;
  beforeEach(async () => {
    element = await fixture(html` <div id="formio"></div> `);
    window.Formio = {};
    Formio.createForm = () => {};
    stub(window.Formio, 'createForm').resolves();
    Formio.wizard = {
      pages: [],
    };
    Formio._data = {};
    configuration.form.baseElement = element;
    wrapper = new FormioWrapper(configuration);
    wrapper.wizard.redraw = () => {};
  });

  it('_addListeners works as intended', async () => {
    wrapper.loaded = true;
    wrapper._clearStorage = () => {};
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
          title: 'redundant',
        },
      },
    ];
    wrapper.wizard.nextPage = () => {};
    wrapper.wizard.prevPage = () => {};
    wrapper.wizard.setPage = () => Promise.resolve(true);
    wrapper.wizard.resetValue = () => {};
    window.repopulateIngridientDataGrid = () => {};

    const spiedInitialise = spy(wrapper, 'initialise');
    const spiedGoToNext = spy(wrapper, '_goToNextPage');
    const spiedFireExtraEvent = spy(wrapper, '_fireExtraEvent');
    const spiedGoToPreviousPage = spy(wrapper, '_goToPreviousPage');
    const spiedGoToPage = spy(wrapper, '_goToPage');

    wrapper._addListeners(element);
    element.dispatchEvent(new CustomEvent('DOMContentLoaded'));
    element.dispatchEvent(new CustomEvent('formiowrapperGoToNext'));
    element.dispatchEvent(new CustomEvent('formiowrapperGoToPrevious'));
    element.dispatchEvent(
      new CustomEvent('formiowrapperGoToPage', {
        bubbles: true,
        detail: { page: 1 },
      }),
    );
    element.dispatchEvent(new CustomEvent('formiowrapperCancel'));

    spiedInitialise.restore();
    spiedGoToNext.restore();
    spiedFireExtraEvent.restore();
    spiedGoToPreviousPage.restore();
    spiedGoToPage.restore();

    assert.calledTwice(spiedInitialise);
    assert.calledTwice(spiedGoToNext);
    assert.called(spiedFireExtraEvent);
    assert.calledTwice(spiedGoToPreviousPage);
    assert.called(spiedGoToPage);
  });

  it('_addListeners gotopage', async () => {
    wrapper.loaded = true;
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
    ];
    wrapper.wizard.nextPage = () => {};
    wrapper.wizard.prevPage = () => {};
    wrapper.wizard.setPage = () => Promise.resolve(true);

    const spiedGoToPage = spy(wrapper, '_goToPage');

    wrapper._addListeners(element);
    element.dispatchEvent(
      new CustomEvent('formiowrapperGoToPage', {
        bubbles: true,
        detail: { page: 1 },
      }),
    );

    spiedGoToPage.restore();

    assert.calledTwice(spiedGoToPage);
  });
});
