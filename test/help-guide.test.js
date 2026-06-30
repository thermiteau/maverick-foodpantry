/* eslint-disable */

import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import { HelpGuide } from '../src/components/help-guide';
import mainView from '../src/components/partials/help-guide-lb-main';
import initialView from '../src/components/partials/help-guide-lb-initial';
import ingredients from '../src/components/partials/help-guide-lb-ingredient';
import businessView from '../src/components/partials/help-guide-lb-business';
import { FormioWrapper } from '../src/components/formio-wrapper';
import { configuration } from '../src/config.js';
import { TemplateResult } from 'lit-html';

async function helpGuideSetup() {
  const formWrapper = new FormioWrapper(configuration);
  const domElement = await fixture(html` <div id="help-guide"></div> `);
  return new HelpGuide(domElement, {
    views: {
      initial: initialView,
      3: mainView,
      5: businessView,
      8: ingredients,
    },
    displayOnSteps: [3, 5, 8],
    formWrapper: formWrapper,
    config: {
      initialState: 'onboarding',
      overwriteMobileStateWith: false,
      mobileSize: 991,
    }
  });
}

describe('Help Guide Tests.', () => {
  let helpGuide;

  beforeEach(async () => {
    helpGuide = await helpGuideSetup();
  });

  it('Help Guide constructor returns instance of HelpGuide prototype', async () => {
    expect(helpGuide).to.be.an.instanceof(HelpGuide);
  });

  it('render method should return TemplateResult when provided with state', async () => {
    expect(
      helpGuide.render({
        firstView: true,
        open: true,
      }),
    ).to.be.an.instanceof(TemplateResult);
  });

  it('createTemplate method should return a TemplateResult when provided state', async () => {
    expect(
      helpGuide.createTemplate({
        firstView: true,
        open: true,
      }),
    ).to.be.an.instanceof(TemplateResult);
  });

  it('createTemplate method should not return a TemplateResult without state', async () => {
    expect(helpGuide.createTemplate()).to.equal(null);
  });

  it('_callout method should return TemplateResult', async () => {
    expect(helpGuide._callout()).to.be.an.instanceof(TemplateResult);
  });

  it('_closeButton method should return TemplateResult', async () => {
    expect(helpGuide._closeButton()).to.be.an.instanceof(TemplateResult);
  });

  it('_overlay method should return TemplateResult', async () => {
    expect(helpGuide._overlay()).to.be.an.instanceof(TemplateResult);
  });

  it('this.state to an object', async () => {
    expect(helpGuide.state).to.be.an('object');
  });

  it('_setState should set this.state to new object including new state and old state', async () => {
    helpGuide._setState({ a: 1 });
    helpGuide._setState({ b: 2 });
    expect(helpGuide.state).to.include({ a: 1, b: 2 });
  });

  it('target should be set to a HTMLElement', async () => {
    expect(helpGuide.target).to.be.an.instanceOf(HTMLElement);
  });
});
