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
          id="directions-for-use"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="directions-for-use">
            <span class="title"> Directions for use </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p></p>
          <p>
            Directions for use are the instructions for how to prepare the food
            so that it is ready to eat. This includes directions for that are
            required for health or safety reasons.
          </p>
          <p>
            For example: frozen chicken tenders may have the directions for use
            as ‘This is a raw product. Must be cooked prior to eating. Cook from
            frozen. Please ensure chicken is fully cooked before eating’.
          </p>
          <h4>Further information</h4>
          <p>
            <i>Australia and New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a
                href="http://www.comlaw.gov.au/Series/F2015L00393"
                target="_blank"
              >
                Standard 1.2.6
              </a>
              Information requirements – directions for use and storage
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="storage-conditions"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="storage-conditions">
            <span class="title"> Storage conditions </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Storage conditions are instructions about how to store food so that
            the food will keep until the best-before or use-by date.
          </p>
          <p>
            For example, storage conditions for milk may be ‘store below 5°C’.
          </p>
          <h4>Further information</h4>
          <p>
            <i>Australia and New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a
                href="http://www.comlaw.gov.au/Series/F2015L00393"
                target="_blank"
              >
                Standard 1.2.6
              </a>
              Information requirements – directions for use and storage
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
          id="bamboo-shoot"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145848" />
          <label for="bamboo-shoot">
            <span class="title"> Bamboo shoots </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is raw bamboo shoots:</b>
            <br />
            The label must include directions for use indicating that bamboo
            shoots should be fully cooked before being eaten.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00393"
                  target="_blank"
                >
                  Standard 1.2.6
                </a>
                Information requirements – directions for use and storage
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="cassava-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145850" />
          <label for="cassava-food">
            <span class="title"> Cassava </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is raw sweet cassava:</b>
            <br />
            The label must include directions for use indicating that sweet
            cassava should be peeled and fully cooked before being consumed.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00393"
                  target="_blank"
                >
                  Standard 1.2.6
                </a>
                Information requirements – directions for use and storage
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="fish-seafood"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145854" />
          <label for="fish-seafood">
            <span class="title"> Fish, crustacea and seafood </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b
              >If the food is raw fish which has been moulded or combined to
              look like a cut or fillet of fish:</b
            >
            <br />
            The label must say that the food is either formed or joined and give
            cooking instructions to make it safe to eat.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00393"
                  target="_blank"
                >
                  Standard 1.2.6
                </a>
                Information requirements – directions for use and storage
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00429"
                  target="_blank"
                >
                  Standard 2.2.3
                </a>
                Fish and fish products.
                <ul>
                  <li>
                    See section 2.2.3—3 Labelling of formed or joined fish
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="meat-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145868" />
          <label for="meat-food">
            <span class="title"> Meat and meat products </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b
              >If the food is raw meat which has been moulded or combined to
              look like a cut of meat:</b
            >
            <br />
            The label must say that the food is either formed or joined and give
            cooking instructions to make it safe to eat.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00393"
                  target="_blank"
                >
                  Standard 1.2.6
                </a>
                Information requirements – directions for use and storage
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00427"
                  target="_blank"
                >
                  Standard 2.2.1
                </a>
                Meat and meat products.
                <ul>
                  <li>
                    See section 2.2.1—8 Information about raw meat joined or
                    formed into the semblance of a cut of meat
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  </div>
`;
