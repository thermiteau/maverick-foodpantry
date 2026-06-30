/* eslint-disable */

import { fixture, html, expect } from '@open-wc/testing';
import { spy, assert } from 'sinon';
import { ButtonGroup } from '../src/components/button-group';

describe('Button Group Tests', () => {
  let element;
  let buttonGroup;

  beforeEach(async () => {
    element = await fixture(html` <div class="navigation" id="target"></div> `);
    buttonGroup = new ButtonGroup(element, 'navigation');
  });

  it('Configuration is set on load', () => {
    expect(buttonGroup.data).to.equal('navigation');
    expect(buttonGroup.target).to.equal(element);
  });

  it('Button group renders as expected', () => {
    const data = {
      navigation: [
        {
          title: 'Back',
          event: 'formGoToPrevious',
          cssClass: 'class1',
          disabled: false,
          displayed: true,
        },
        {
          title: 'Next',
          event: 'formGoToNext',
          cssClass: 'class2',
          disabled: true,
          displayed: true,
        },
        {
          title: 'Invisible',
          event: 'noevent',
          cssClass: 'nope',
          disabled: false,
          displayed: false,
        },
      ],
    };

    buttonGroup.updateTarget(data, element);
    const button = element.querySelector('button');
    expect(button.innerHTML).includes('Back');
    expect(button).to.be.ok;
    expect(JSON.stringify(button.classList)).includes('class1');
    expect(button.dataset.detail).includes('""');
    expect(button.dataset.event).equals('formGoToPrevious');

    const secondButton = element.querySelectorAll('button')[1];
    expect(secondButton.innerHTML).includes('Next');
    expect(secondButton).to.be.ok;
    expect(JSON.stringify(secondButton.classList)).includes('class2');
    expect(secondButton.dataset.detail).includes('""');
    expect(secondButton.dataset.event).equals('formGoToNext');
    expect(secondButton.disabled).equals(true);

  });

  it('Fire event fires an event', async (done) => {
    window.addEventListener('testEvent', () => {
      done();
    });
    const newEvent = {
      target: {
        dataset: {
          event: 'testEvent',
          detail: JSON.stringify({ nothing: true }),
        },
      },
    };
    buttonGroup.fireEvent(newEvent);
  });

  it('Fire listens to the update event without failure', () => {
    try {
      const newEvent = new CustomEvent('formiowrapperPageChange', {
        bubbles: true,
        detail: {
          navigation: [],
        },
      });
      window.dispatchEvent(newEvent);
    } catch (e) {
      console.log(e);
      expect('failure').to.equal(true);
    }
    expect(true).to.equal(true);
  });

  it('Ensure that the default condition is used', () => {
    const buttonGroup2 = new ButtonGroup(element);
    expect(buttonGroup2.data).to.equal('buttons');
  });
});

describe('Navigation specialities', () => {
  let element;
  let buttonGroup;

  beforeEach(async () => {
    element = await fixture(html` <div class="navigation" id="target"></div> `);
    buttonGroup = new ButtonGroup(element, 'navigation');
  });

  it('Button group as li renders as expected', () => {
    const data = {
      navigation: [
        {
          title: 'Back',
          event: 'formGoToPrevious',
          cssClass: 'class1',
          disabled: false,
          displayed: true,
          type: 'li',
        },
        {
          title: 'Next',
          event: 'formGoToNext',
          cssClass: 'class2',
          disabled: true,
          displayed: true,
          type: 'li',
        },
        {
          title: 'Invisible',
          event: 'noevent',
          cssClass: 'nope',
          disabled: false,
          displayed: false,
          type: 'li',
        },
      ],
    };

    buttonGroup.updateTarget(data, element);
    const button = element.querySelector('li');
    expect(button.innerHTML).includes('Back');
    expect(button).to.be.ok;
    const secondButton = element.querySelectorAll('li')[1];
    expect(secondButton.innerHTML).includes('Next');
    expect(secondButton).to.be.ok;
    const thirdButton = element.querySelectorAll('li')[2];
    expect(thirdButton).to.not.be.ok;
  });

  it('Button group has cancel confirmation rendered in the dom', () => {
    const data = {
      navigation: [
        {
          title: 'Back',
          event: 'formGoToPrevious',
          cssClass: 'class1',
          disabled: false,
          displayed: true,
        },
        {
          title: 'Next',
          event: 'formGoToNext',
          cssClass: 'class2',
          disabled: true,
          displayed: true,
        },
        {
          title: 'Cancel',
          event: 'formioCancel',
          cssClass: 'class3',
          disabled: false,
          displayed: true,
        },
      ],
    };

    buttonGroup.updateTarget(data, element);
    const noStay = element.querySelectorAll('button')[4];
    expect(noStay.innerHTML).includes('No, stay');
    const yesLeave = element.querySelectorAll('button')[5];
    expect(yesLeave.innerHTML).includes('Yes, leave');
    expect(element.querySelector('#cancelconfirmationwrapper')).to.be.ok;
    expect(element.querySelector('#cancelconfirmationdialog')).to.be.ok;
    expect(element.querySelector('.close')).to.be.ok;
    expect(element.querySelector('h2')).to.be.ok;

  });


  it('Process click not handles the different options', () => {
    const data = {
      navigation: [
        {
          title: 'Back',
          event: 'formGoToPrevious',
          cssClass: 'class1',
          disabled: false,
          displayed: true,
        },
        {
          title: 'Next',
          event: 'formGoToNext',
          cssClass: 'class2',
          disabled: true,
          displayed: true,
        },
        {
          title: 'Cancel',
          event: 'formioCancel',
          cssClass: 'class3',
          disabled: false,
          displayed: true,
        },
      ],
    };
    buttonGroup.updateTarget(data, element);

    const event = {
      target: {
        dataset: {
          event: 'testEvent',
          detail: JSON.stringify({test: 'data'}),
          confirm: true,
        }
      }
    }

    expect(buttonGroup.showDialog).equal(false);
    expect(Object.keys(buttonGroup.cancelEvent).length === 0
    && buttonGroup.cancelEvent.constructor === Object).to.equal(true);
    buttonGroup.processClick(event);
    expect(Object.keys(buttonGroup.cancelEvent).length === 0
    && buttonGroup.cancelEvent.constructor === Object).to.equal(false);
    expect(buttonGroup.cancelEvent.target.dataset.event).to.equal('testEvent');
    expect(buttonGroup.cancelEvent.target.dataset.detail).to.equal(event.target.dataset.detail);
    expect(buttonGroup.showDialog).equal(true);
    buttonGroup.confirmCancel();
    expect(buttonGroup.showDialog).equal(false);
  });

});
