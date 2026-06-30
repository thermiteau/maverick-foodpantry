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
          id="what-date-mark"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="what-date-mark">
            <span class="title"> What is a date mark? </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            A date mark is a guide to how long a food will last. All packaged
            food with a shelf life of two years or less must show a date mark,
            except for individual portions of ice cream or ice confection.
          </p>
          <p>Shelf life refers to the length of time a food remains:</p>
          <ul>
            <li>safe to eat</li>
            <li>looks, smells and tastes ok, and</li>
            <li>
              retains any specific qualities for which claims have been made.
            </li>
          </ul>

          <p>
            A
            <a data-accordion-item="use-by-date" class="accordion-btn">
              use-by date
            </a>
            is required when a food becomes unsafe to eat. Food cannot be sold
            and should not be eaten after its
            <a data-accordion-item="use-by-date" class="accordion-btn">
              use-by date</a
            >. A food can be eaten past its
            <a
              data-accordion-item="best-before-date"
              class="accordion-btn"
            >
              best-before date</a>, but may not look, smell or taste the same as when it was fresh.
            Bread with a shelf life of less than 7 days, can be date marked with
            a
            <a
              data-accordion-item="baked-for-on-date"
              class="accordion-btn"
            >
              baked-on or baked-for date.
            </a>
          </p>

          <p>
            It may be necessary to seek expert advice from a food testing
            laboratory:
          </p>
          <ul>
            <li>to determine your food’s shelf life</li>
            <li>
              to determine what type of date mark is required for your food.
            </li>
          </ul>
          <p>
            The Food Standards Code gives rules for the
            <a data-accordion-item="date-format" class="accordion-btn">
              format of the date mark
            </a>
            (how it appears on label). The day and month are required for a food
            with a shelf life of 3 months or less, whereas the month and year
            are required for a food with a longer shelf life.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="baked-for-on-date"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="baked-for-on-date">
            <span class="title"> Baked-on and baked-for dates </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            The label on a package of bread with a shelf life of less than 7
            days may be date marked with a baked-on date or a baked-for date
            instead of a
            <a href="#best-before-date"> best-before date. </a>
          </p>
          <p>The baked-on date means the date on which the bread was baked.</p>
          The baked-for date means:
          <ul>
            <li>
              If the time at which the bread was baked is before midday – the
              baked-on date
            </li>
            <li>
              If the time at which the bread was baked is after midday – the day
              after the baked-on date. Bread that is baked after midday on one
              day may have a baked-for date of the following day. The baked-for
              date must not be later than 12 hours after the time the bread was
              baked.
            </li>
          </ul>
          <p>
            The words ‘Baked On’ or ‘Baked For’, or the shortened terms, ‘Bkd
            On’ or ‘Bkd For’, must be included on the label followed by the
            date, for example, Bkd On 15 Apr.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>Queensland Health publication</p>
            <ul>
              <li>
                <a
                  href="https://www.publications.qld.gov.au/dataset/food-labelling/resource/50bf4dcb-48fe-4321-8866-dfbb36a56259"
                  target="_blank"
                  rel="noopener"
                >
                  Bread and Bakery Products
                </a>
              </li>
            </ul>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="best-before-date"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="best-before-date">
            <span class="title"> Best-before dates </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            A best-before date is the last date on which you can expect a food
            to look, smell and taste fresh, and to keep any property for which a
            claim has been made. This is on the condition that the food has been
            stored according to any storage conditions on the label and the
            package is unopened.
          </p>
          <p>
            A food that has passed its best-before date will still be safe to
            eat.
          </p>
          <p>
            The words ‘Best Before’ must be included on the label followed by
            the date, or a direction provided about where the date is located.
            For example:
          </p>
          <ul>
            <li>Best Before 23 Dec 2021</li>
            <li>Best Before – see base of can</li>
          </ul>
          <p>
            Foods may be sold after the best-before date if the food has not
            spoiled and complies with any other applicable legislation.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="date-format"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="date-format">
            <span class="title"> Date mark formats </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            The day, month and year must be written so that it is clear which
            number refers to the day, the month or the year.
          </p>
          <p>The month can be expressed in either:</p>
          <ul>
            <li>numerical form, e.g. 01 for January; or</li>
            <li>
              in letters, which can be upper case, e.g. JAN or JANUARY, or lower
              case, e.g. Jan or January.
            </li>
          </ul>
          <p>The year can be expressed in numerical form using either:</p>
          <ul>
            <li>2 digits, e.g. 21; or</li>
            <li>4 digits, e.g. 2021.</li>
          </ul>
          <p>
            The date format depends on the shelf life of the food. The day and
            month (e.g. 15/03/2020) are required for a food with a shelf life of
            3 months or less. The month and year (e.g.: Apr 2021) are required
            for a food with a longer shelf life.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="lot-identification"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="lot-identification">
            <span class="title"> Lot identification </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Lot identification means a number or other information that
            identifies the premises where the food was prepared or packed, and
            the batch the food is part of. This may be useful when several
            batches of the same food are prepared, manufactured or packed on the
            same day. There is no set format for lot identification.
          </p>
          <p>
            It is not always necessary to include a lot identification on a
            label if a date mark, business name and address can identify the
            food. If date marking is not required, lot identification must be
            added so that the food can be identified.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00389"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.2
                </a>
                Information requirements – food identification
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="use-by-date"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="use-by-date">
            <span class="title"> Use-by dates </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            The use-by date is the date after which the food should not be eaten
            because it is no longer safe, provided it has been stored according
            to any stated storage conditions on the label and the package is
            unopened.
          </p>
          <p>
            For example, milk is usually labelled with a use-by date because it
            may become unsafe before it becomes rancid, bitter, or separates.
          </p>
          <p>
            You will need to determine the shelf life of your food to work out
            how long it can be safely stored. It is recommended you seek
            professional advice from a food testing laboratory.
          </p>
          <p>
            The words ‘Use By’ must be included on the label followed by the
            date. For example, Use By 23 Dec 2021.
          </p>
          <p>
            Food cannot be sold and should not be eaten after the use-by date.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
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
          id="small-package"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145879" />
          <label for="small-package">
            <span class="title"> Food in small packages </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            If the food is sold in a small package where the package has a
            surface area of less than 100 cm<sup>2</sup> only a use-by date
            needs to be included. For example: A small bar of chocolate.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="ice-confection"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145862" />
          <label for="ice-confection">
            <span class="title"> Ice cream or ice confection </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            If the food is a single serve of ice cream or ice confection no date
            marking information is required.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00401"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.5
                </a>
                Information requirements – date marking of food for sale
              </li>
            </ul>
          </section>
        </div>
      </article>
    </section>
  </div>
`;
