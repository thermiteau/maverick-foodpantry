/* eslint-disable */

import { fixture, html, expect } from '@open-wc/testing';
import {
  addExpandCollapse,
  modifyAccordionState,
} from '../src/scripts/collapse-expand';

describe('Collapse Expand Tests', () => {
  let section;

  beforeEach(async () => {
    section = await fixture(html`
      <section class="qg-accordion">
        <button class="expand">Expand all</button>
        <button class="collapse">Collapse all</button>
        <article><input type="checkbox" /></article>
        <article><input type="checkbox" /></article>
      </section>
    `);
  });

  it('expand control checks every accordion checkbox', () => {
    addExpandCollapse(section);
    section.querySelector('.expand').click();
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      expect(checkbox.checked).to.equal(true);
    });
  });

  it('collapse control unchecks every accordion checkbox', () => {
    addExpandCollapse(section);
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
    section.querySelector('.collapse').click();
    checkboxes.forEach((checkbox) => {
      expect(checkbox.checked).to.equal(false);
    });
  });
});

describe('Collapse Expand guard paths', () => {
  it('tolerates a missing collapse control and still wires expand', async () => {
    const section = await fixture(html`
      <section class="qg-accordion">
        <button class="expand">Expand all</button>
        <article><input type="checkbox" /></article>
      </section>
    `);
    expect(() => addExpandCollapse(section)).to.not.throw();
    section.querySelector('.expand').click();
    expect(section.querySelector('input[type="checkbox"]').checked).to.equal(
      true,
    );
  });

  it('tolerates a missing expand control and still wires collapse', async () => {
    const section = await fixture(html`
      <section class="qg-accordion">
        <button class="collapse">Collapse all</button>
        <article><input type="checkbox" checked /></article>
      </section>
    `);
    expect(() => addExpandCollapse(section)).to.not.throw();
    section.querySelector('.collapse').click();
    expect(section.querySelector('input[type="checkbox"]').checked).to.equal(
      false,
    );
  });

  it('tolerates both controls missing', async () => {
    const section = await fixture(html`
      <section class="qg-accordion">
        <article><input type="checkbox" /></article>
      </section>
    `);
    expect(() => addExpandCollapse(section)).to.not.throw();
  });

  it('tolerates a null section', () => {
    expect(() => addExpandCollapse(null)).to.not.throw();
  });

  it('modifyAccordionState returns without error when no accordion is in the path', () => {
    const event = {
      composedPath: () => [document.body, document, window],
    };
    expect(() => modifyAccordionState(event, true)).to.not.throw();
  });
});
