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
          id="about-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="about-food">
            <span class="title"> About food names </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Food names must correctly describe the food. For example, strawberry
            yoghurt must contain strawberries. If the yoghurt contains
            strawberry flavouring instead of the fruit, then the name would need
            to be strawberry-flavoured yoghurt.
          </p>
          <p>
            The Food Standards Code includes definitions for many foods, which
            includes what a food is made of. For example, a fruit juice cannot
            contain added water but a fruit drink can have water added.
          </p>
          <p>
            Some food have names that must be used (
            <a href="#">prescribed names</a>
            ). For example, ‘fermented processed meat – cooked’ or ‘infant
            formula’.
          </p>
          <p>
            The name of the food must not include words, statements, claims,
            pictures or graphics that represent a food in a way that is untrue,
            misleading or dishonest. For example, you cannot show a picture of
            honey on a yoghurt that does not contain honey.
          </p>
          <p>
            If the name of the food does not reflect its true nature, then you
            must include a description of the true nature on the label. For
            example, Luke’s Hot’s Sauce (
            <i>red chilli pepper sauce</i>
            ).
          </p>

          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 1.1.1</a>
              Structure of the Code and general provisions
            </li>
            <li>
              See section 1.1.1—13 for food sold with a specified name or
              representation
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="about-ingredients"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="about-ingredients">
            <span class="title"> Characterising ingredients </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>

        <div class="collapsing-section" id="id-panel-content-1">
          <p>A characterising ingredient or component of a food is:</p>
          <ul>
            <li>mentioned in the name of the food; or</li>
            <li>usually associated with name of the food by a consumer; or</li>
            <li>emphasised on the label of the food in words or pictures.</li>
          </ul>
          <p>
            If an ingredient is usually associated with the food (for example,
            fruit in Christmas pudding), or is highlighted on the label in
            words, pictures, or graphics, then it is a characterising
            ingredient. For example:
          </p>
          <ul>
            <li>
              Strawberries are a characterising ingredient in strawberry yogurt
            </li>
            <li>Meat is a characterising ingredient in a meat pie</li>
            <li>
              Honey is a characterising ingredient where a yoghurt label shows a
              picture of a pot of honey
            </li>
          </ul>
          <p>
            The amount of the characterising ingredients in the food must be
            written on the label as a percentage or, if declared in the
            nutrition information panel, as the average quantity per serving and
            per unit quantity.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 1.2.10</a>
              Information requirements – characterising ingredients and
              components of food.
            </li>
          </ul>
          <p>Food Standards Australia New Zealand</p>
          <ul>
            <li>
              <a href="#"> User Guide – Percentage labelling of food </a>
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="prescribed-names"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="prescribed-names">
            <span class="title"> Prescribed names </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            The following are considered prescribed names under the Food
            Standards Code and must be used when naming these foods.
          </p>
          <ul>
            <li>fermented manufactured meat – cooked</li>
            <li>fermented manufactured meat – heat treated</li>
            <li>fermented manufactured meat – not heat treated</li>
            <li>fermented processed meat – cooked</li>
            <li>fermented processed meat – heat treated</li>
            <li>fermented processed meat – not heat treated</li>
            <li>honey</li>
          </ul>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li><a href="#">Standard 2.2.1</a> Meat and meat products</li>
            <li><a href="#">Standard 2.8.2</a> Honey</li>
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
          id="bcr"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="bcr">
            <span class="title"> Breads, cereals and grains </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            There are rules for the use of wholegrain and wholemeal in the food
            name.
            <br />
            The names ‘shortbread’, ‘crispbread’ and ‘unleavened bread’ can be
            used for foods which are not ‘bread’, because a consumer understands
            that they are not ‘bread’ as defined in the Food Standards Code.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 1.1.1</a>
              -13 Food sold with a specified name or representation
            </li>
            <li>
              <a href="#">Standard 2.1.1</a>
              -Cereal and cereal products
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="choco-cocoa"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="choco-cocoa">
            <span class="title"> Chocolate and cocoa </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>When naming a food chocolate, it must be:</p>
          <ul>
            <li>made from cocoa bean products; and</li>
            <li>
              have no more than 50 g/kg of edible oils (other than cocoa butter
              or dairy fats); and
            </li>
            <li>
              be prepared from a minimum of 200 g/kg of cocoa bean products.
            </li>
          </ul>
          <p>
            When naming a food cocoa, it must be made from cocoa beans, from
            which a portion of the fat can have been removed. Cocoa can contain
            added salt or spices.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.10.4</a>
              Miscellaneous standards for other foods
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="alcohol-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="alcohol-food">
            <span class="title"> Food containing alcohol </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            A food containing alcohol must not be represented in a way that
            suggests the food is non-alcoholic.
            <br />
            For example:
          </p>
          <ul>
            <li>Rum balls</li>
            <li>Brandy custard</li>
            <li>Vanilla bean paste</li>
          </ul>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.7.1</a>
              Labelling of alcoholic beverages and food containing alcohol
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="fruit-veg"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="fruit-veg">
            <span class="title"> Fruit and vegetables </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is drink made from fruit or vegetables:</b>
            <br />
            There are naming rules for juice, juice blends and juice drinks.
            Please read the Food Standards Code to determine which one applies
            to your food.
            <br />
            <b>If the food is a jam:</b>
            <br />
            If you name a food jam, it must be made from no less than 400 g/kg
            of fruit. A jam can include conserve but it does not include
            marmalade.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a
                href="https://www.legislation.gov.au/Details/F2015L00459"
                target="_blank"
                rel="noopener"
                >Standard 2.3.2</a
              >
              Jam
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Series/F2015L00426"
                target="_blank"
                rel="noopener"
                >Standard 2.6.1</a
              >
              Fruit juice and vegetable juice
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="hemp-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="hemp-food">
            <span class="title"> Hemp food products </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is, or contains, allowed low THC hemp:</b>
            The label must not include the words ‘cannabis’, ‘marijuana’ or
            similar. The label cannot have pictures of any part of a cannabis
            plant other than the seed
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 1.4.4</a>
              Prohibited and restricted plants and fungi
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="honey-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="honey-food">
            <span class="title"> Honey and honey products </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Honey means the natural sweet substance produced by honey bees.
            <br />
            Food that is labelled as ‘honey’ must:
          </p>
          <ul>
            <li>be honey; and</li>
            <li>
              contain no less than 60% reducing sugars; and no more than 21%
              moisture.
            </li>
          </ul>
          The food name and description must contain the prescribed name of
          ‘honey’.
          <br />
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 1.2.2</a>
              Information requirements – food identification
            </li>
            <li>
              <a href="#">Schedule 2.8.2</a>
              Honey
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="jam-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="jam-food">
            <span class="title"> Jams </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            If you name a food jam, it must be made from no less than 400 g/kg
            of fruit.
            <br />
            A jam can include conserve, but does not include marmalade
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.3.2</a>
              Jam
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="kava-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="kava-food">
            <span class="title"> Kava and kava root </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Kava and kava root are allowed to be sold in Australia only if the
            food is:
          </p>
          <ul>
            <li>A drink made from kava root using cold water; or</li>
            <li>Dried or raw kava root.</li>
          </ul>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.6.3</a>
              Kava
            </li>
          </ul>
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
          <label for="meat-food">
            <span class="title"> Meat and meat products </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            There are naming rules for meat, including jerky, meat pies and
            sausages.
            <br />
            There are
            <a href="#"> prescribed names</a>
            for fermented manufactured meat.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li><a href="#">Standard 2.2.1</a> Meat and meat products</li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="dairy-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="dairy-food">
            <span class="title"> Milk, dairy and dairy alternatives </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            If your food is milk, dairy or dairy alternative, you need to read
            the Food Standards Code to identify the necessary naming format. For
            example, the ingredient name ‘soy’ in soy milk or soy ice cream
            indicates that these foods are not dairy products.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 1.1.1</a>
              Structure of the code and general provisions
            </li>
            <li>
              See section 1.1.1—13 for food sold with a specified name or
              representation
            </li>
            <li>
              <a href="#">Standard 2.5.1</a>
              Milk
            </li>
            <li>
              <a href="#">Standard 2.5.2</a>
              Cream
            </li>
            <li>
              <a href="#">Standard 2.5.3</a>
              Fermented milk products
            </li>
            <li>
              <a href="#">Standard 2.5.4</a>
              Cheese
            </li>
            <li>
              <a href="#">Standard 2.5.5</a>
              Butter
            </li>
            <li>
              <a href="#">Standard 2.5.6</a>
              Ice cream
            </li>
            <li>
              <a href="#">Standard 2.5.7</a>
              Dried milk, evaporated milk and condensed milk
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="non-alcoholic-drinks"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="non-alcoholic-drinks">
            <span class="title"> Non-alcoholic drinks </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is drink made from fruit or vegetables:</b>
            There are naming rules for juice, juice blends and juice drinks.
            Please read the Food Standards Code to determine which one applies
            to your food.
          </p>
          <p>
            <b>If the food is non-alcoholic or brewed soft drink:</b>
            Non-alcoholic drinks and brewed soft drinks (e.g.: fermented ginger
            beer or kombucha) must not suggest the product is an alcoholic
            beverage. There is a possible risk that brewed soft drinks may
            <a data-accordion-item="food-names-alcohol" class="accordion-btn">
              contain alcohol
            </a>
            which need extra labelling requirements. We recommend you seek
            professional advice to prepare your food label.
          </p>
          <p>
            <b>If the food is tea or coffee:</b>
            There are naming rules for coffee and tea. Please read the Food
            Standards Code to ensure your label is correct.
          </p>
          Coffee and tea include types that are:
          <ul>
            <li>caffeinated</li>
            <li>decaffeinated,</li>
            <li>instant or</li>
            <li>soluble</li>
          </ul>
          <p>
            <b>If your food is spring water or mineral water:</b>
            Spring and mineral water means ground water.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a
                href="https://www.legislation.gov.au/Series/F2015L00426"
                target="_blank"
                rel="noopener"
                >Standard 2.6.1</a
              >
              Fruit juice and vegetable juice
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Series/F2015L00465"
                target="_blank"
                rel="noopener"
                >Standard 2.6.2</a
              >
              Non-alcoholic beverages and brewed soft drinks
            </li>
            <li>
              <a
                href="https://www.legislation.gov.au/Series/F2015L00487"
                target="_blank"
                rel="noopener"
                >Standard 2.10.4</a
              >
              Miscellaneous standards for other foods
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="nuts-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="nuts-food">
            <span class="title"> Nuts and seeds </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Food that is sold as peanut butter must be a peanut based spread
            that has no less than 850 g/kg of peanuts.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.10.4</a>
              Miscellaneous standards for other foods
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="oils-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="oils-food">
            <span class="title"> Oils and margarine </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Margarine means an edible oil spread containing no less than 800
            g/kg of edible oils.
            <br />
            You can only name your food an oil spread or table margarine, if the
            food contain no less than 55 μg/kg of vitamin D.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.4.2</a>
              Edible oil spreads
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="salt-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="salt-food">
            <span class="title"> Salt and salt products </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Foods that are labelled salt or a salt product have special
            requirements. These products cannot make nutrition or health claim,
            must have extra information in the nutrition information panel and
            must be made from certain elements.
            <br />
            You need to read the Food Standards Code to ensure your label is
            correct.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.10.2</a>
              Salt and salt products
            </li>
            <li>
              <a href="#">Standard 2.10.4</a>
              Miscellaneous standards for other foods
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="sugar-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="sugar-food">
            <span class="title"> Miscellaneous standards for other foods </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Food that is sold as white sugar or a sugar must be purified
            crystallised sucrose and have no less than 99.7% sucrose when dry.
            <br />
            Food that is sold as icing must be a mixture of sugar and other
            foods for use as a coating and includes frosting, plastic icing and
            icing gel.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.8.1</a>
              Sugar and sugar products
            </li>
          </ul>
        </div>
      </article>

      <article>
        <input
          id="vinegar-food"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="vinegar-food">
            <span class="title"> Vinegar </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            A food that is sold as imitation vinegar or vinegar must contain no
            less than 40 g/kg of acetic acid.
          </p>
          <h4>Further reading</h4>
          <p>
            <i>Australia New Zealand Food Standards Code</i>
          </p>
          <ul>
            <li>
              <a href="#">Standard 2.10.1</a>
              Vinegar and related products
            </li>
          </ul>
        </div>
      </article>
    </section>
  </div>
`;
