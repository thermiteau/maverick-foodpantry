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
          id="ad-statement"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="ad-statement">
            <span class="title"> Advisory statements </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Advisory statements let consumers know important information about
            the safety (e.g. unpasteurised), suitability (e.g. not suitable as a
            complete milk replacement for children under 5 years) and effect
            (e.g. laxative) of the food or ingredient.
          </p>
          <p>
            An advisory statement must provide the same meaning as the statement
            listed in the Food Standards Code but can be written in your own
            words.
          </p>
          <p></p>
          <h4>Further reading</h4>
          <i>Australia New Zealand Food Standards Code</i>
          <ul>
            <li>
              <a
                href="https://www.legislation.gov.au/Details/F2017C00418"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.3
              </a>
              Information requirements – warning statements, advisory statements
              and declarations
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Details/F2016C00827"
                target="_blank"
                rel="noopener"
              >
                Schedule 9
              </a>
                Mandatory advisory statements and declarations
            </li>
          </ul>
          <p>Food Standards Australia and New Zealand</p>
          <ul>
            <li>
              <a
                href="https://www.foodstandards.gov.au/code/userguide/Documents/Guide%20to%201.2.3%20-%20Warning%20and%20Advisory%20Statements.pdf"
                target="_blank"
                rel="noopener"
              >
                User Guide – Warning and Advisory Statements and Declarations
              </a>
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="alt-declaration"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="alt-declaration">
            <span class="title"> Allergen declarations </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Some foods and ingredients can cause allergic reactions and must be
            stated on the label.
          </p>
          <p>
            You must state any allergen listed in Standard 1.2.3 when present in
            a food as:
          </p>
          <ul>
            <li>An ingredient</li>
            <li>An ingredient of a compound ingredient</li>
            <li>A substance used as a food additive</li>
            <li>An ingredient or component of a food additive</li>
            <li>A substance or food used as a processing aid</li>
            <li>An ingredient or component of a processing aid.</li>
          </ul>
            
            <p>
                The presence of an allergen in a food must be included in the ingredient list and in a summary statement using the required names. The summary statement must be:
            </p>
            <ul>
                <li>separate from the ingredient list</li>
                <li>located near the ingredient list</li>
                <li>printed in bold font</li>
                <li>use the same typeface and size as the ingredient list</li>
                <li>start with the word ‘Contains’</li>
                <li>must not include any other words except for the required names that can be used for the summary statement.</li>
            </ul>
            <p>Note: Sometimes a different required name must be used in the ingredient list and summary statement.</p>
          <p>
            Allergen declarations are required on individual portion packs that
            have a surface area of 30cm2 or greater.
          </p>

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
              Requirement to have labels or otherwise provide information
              <ul>
                <li>
                  See section 1.2.1—6 When the food for sale must bear a label
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/F2015L00397/latest/text"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.3
              </a>
                Information requirements – warning statements, advisory statements and declarations.
                <ul>
                    <li>See 1.2.3 Division 3 Mandatory declarations</li>
                </ul>
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Details/F2016C00827"
                target="_blank"
                rel="noopener"
              >
                  Schedule 9
              </a>
                Mandatory advisory statements and declarations
            </li>
          </ul>
            <p>Allergen Bureau - the peak industry body representing food industry allergen management in Australia and New Zealand.
                <ul>
                    <li>https://allergenbureau.net/</li>
                </ul>                
            </p>
        </div>
      </article>

      <article>
        <input
          id="warn-statement"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="warn-statement">
            <span class="title"> Warning statements </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            The warning statement must be displayed on the label in the exact
            words and type size as specified in the Food Standards Code. Warning
            statements must be a minimum size of type of 3 mm. In the case of
            small packages, a minimum size of type of 1.5 mm is required.
            <br />
            Warning statement are required on individual portions packs that
            have a surface area of 30cm2 or greater.
          </p>

          <h4>Further reading</h4>
          <i>Australia New Zealand Food Standards Code</i>
          <ul>
            <li>
              <a
                href="https://www.legislation.gov.au/Series/F2015L00386"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.1
              </a>
              Requirement to have labels or otherwise provide information
              <ul>
                <li>
                  See section 1.2.1—6 When the food for sale must bear a label
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Details/F2017C00418"
                target="_blank"
                rel="noopener"
              >
                Standard 1.2.3
              </a>
              Information requirements – warning statements, advisory statements
              and declarations
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Series/F2015L00466"
                target="_blank"
                rel="noopener"
              >
                Standard 2.6.3
              </a>
              Kava
            </li>
          </ul>
          <p>Food Standards Australia and New Zealand</p>
          <ul>
            <li>
              <a
                href="https://www.foodstandards.gov.au/code/userguide/Documents/Guide%20to%201.2.3%20-%20Warning%20and%20Advisory%20Statements.pdf"
                target="_blank"
                rel="noopener"
              >
                User Guide – Warning and Advisory Statements and Declarations
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
`;
