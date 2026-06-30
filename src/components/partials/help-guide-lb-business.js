import { html } from 'lit-html';
import { modifyAccordionState } from '../../scripts/collapse-expand';
import { printScreen } from '../../scripts/print';

export default () => html`
  <div class="side-padding vertical-padding">
    <a
      class="controls btn-print"
      @click="${e => printScreen(e, 'help-guide')}"
    >
      <span class="fa fa-print"></span>
      Print
    </a>
    <h2>General requirements</h2>
    <section class="qg-accordion flex-column" aria-label="Accordion Label">
      <div class="qg-acc-controls">
        <button
          class="controls expand"
          @click="${e => modifyAccordionState(e, true)}"
        >
          Expand all
        </button>
        <span class="controls">|</span>
        <button
          class="controls collapse"
          @click="${e => modifyAccordionState(e, false)}"
        >
          Collapse all
        </button>
      </div>
      <article>
        <input
          id="business-details"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="business-details">
            <span class="title"> Business details </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Business details are the name and address of the food business that
            is the supplier, manufacturer, packer, vendor or importer of the
            food.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a
                href="http://www.comlaw.gov.au/Series/F2015L00386"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.1
              </a>
              Requirements to have labels or otherwise provide information
            </li>
            <li>
              <a
                href="http://www.comlaw.gov.au/Series/F2015L00389"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.2
              </a>
              Information requirements – food identification
            </li>
          </ul>
          <p>
            <i>Food Standards Australia and New Zealand</i>
          </p>
          <ul>
            <li>
              <a
                href="https://www.foodstandards.gov.au/code/userguide/pages/overviewoffoodlabell1267.aspx"
                target="_blank"
                rel="noopener"
              >
                User Guides - Overview of Food Labelling
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>

  <div class="side-padding vertical-padding">
    <h2>Food with extra requirements</h2>
    <section class="qg-accordion flex-column" aria-label="Accordion Label">
      <div class="qg-acc-controls">
        <button
          class="controls expand"
          @click="${e => modifyAccordionState(e, true)}"
        >
          Expand all
        </button>
        <span class="controls">|</span>
        <button
          class="controls collapse"
          @click="${e => modifyAccordionState(e, false)}"
        >
          Collapse all
        </button>
      </div>
      <article>
        <input
          id="vending-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145883" />
          <label for="vending-food">
            <span class="title"> Food sold from a vending machine </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If your food is sold from a vending machine:</b>
            <br />
            The name and business address of the supplier of the vending machine
            must be clearly displayed on the vending machine.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00386"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.1
                </a>
                Requirements to have labels or otherwise provide information
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="hamper-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145859" />
          <label for="hamper-food">
            <span class="title"> Food sold in a hamper </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b
              >If your food is sold in a hamper (e.g. gourmet cheese, olives and
              nuts in a gift box with cheese knife):</b
            >
            <br />
            The name and address of the supplier of the hamper must be provided
            with the hamper.
          </p>
          <p>
            Note: Labelling information must be provided for each item of food
            in the hamper. This can include information on a label for packaged
            food, or information provided in a product sheet for unpackaged
            food.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00386"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.1
                </a>
                Requirements to have labels or otherwise provide information
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="kava-root"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145866" />
          <label for="kava-root">
            <span class="title"> Kava and kava root </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b
              >If the food for sale is not in a package and consists of kava
              root:</b
            >
            <br />
            The name and address for the supplier of the kava root must
          </p>
          <ul>
            <li>Be displayed with the food; or</li>
            <li>Accompany the food for sale</li>
          </ul>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00386"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.1
                </a>
                Requirements to have labels or otherwise provide information
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  </div>
`;
