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
          id="ingredient-list"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="ingredient-list">
            <span class="title"> What is an ingredient list? </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            The ingredient list is a statement of ingredients that are used to
            make the food. The ingredient list must be shown on the label for
            most packaged food.
          </p>
          <p>
            Some packaged foods do not need an ingredient list. For example:
          </p>
          <ul>
            <li>Individual portion packs</li>
            <li>
              <a data-accordion-item="food-package" class="accordion-btn">
                Foods in small packages
              </a>
            </li>
            <li>
              <a
                data-accordion-item="one-ingredient"
                class="accordion-btn">
                Foods with one ingredient
              </a>
            </li>
            <li>
              Water that is packaged and labelled in accordance with
              <a
                href="https://www.legislation.gov.au/Series/F2015L00465"
                target="_blank"
                rel="noopener"
              >
                Standard 2.6.2
              </a>
              of the Food Standards Code. See
              <a data-accordion-item="non-alcoholic" class="accordion-btn">
                non-alcoholic drinks
              </a>
              in food with extra requirements for more information.
            </li>
            <li>
              Whole or cut fruit and vegetables in packaging that does not
              obscure its nature or quality.
            </li>
          </ul>

          <p>An ingredient is to be listed using either:</p>

          <ul>
            <li>the common name</li>
            <li>a name that describes the true nature of the ingredient</li>
            <li>
              a
              <a data-accordion-item="generic-name" class="accordion-btn">
                generic name
              </a>
              specified in the Food Standards Code.
            </li>
            <li>
                a
                <a href="#required-name"> required name </a>
                if the ingredient is, or contains, an allergen
            </li>
          </ul>
          <p>
            The ingredient name may also need a further description to ensure
            that the consumer is not misled about the nature of an ingredient.
            For example: if cheese powder is used as an ingredient, it should be
            listed as “cheese powder” instead of “cheese”.
          </p>
            <p>Ingredients that contain allergens must be identified in the ingredient list using a <a href="">required name</a>. Allergens include: <a href="">cereals</a> such as barley, oats and rye that contain gluten, <a href="">wheat</a>, <a href="">milk</a>, <a href="">egg</a>, <a href="">peanuts</a>, <a href="">tree nuts</a> (i.e.: almond, Brazil nut, cashew, hazelnut, macadamia, pecan, pine nut, pistachio, walnut), <a href="">fish</a>, <a href="">crustacea</a>, <a href="">mollusc</a>, <a href="">sesame seed</a>, <a href="">soybeans</a>, <a href="">lupin</a> and <a href="">sulphites</a>.
            </p>
          <p>
            There are requirements in the Food Standards Code for how
            ingredients are listed. You must:
          </p>
          <ul>
            <li>List ingredients in descending order of ingoing weight</li>
            <li>
              Declare all of the ingredients that make up a
              <a href="#comp-ingredient"> compound ingredient</a>, if it
              contributes 5% or more to the final food.
            </li>
            <li>Declare food additives including flavouring substances</li>
            <li>
              Define the percentage of a characterising ingredient and component
              in the food.
            </li>
            <li>
              Declare where
              <a href="#alt-ingredient"> alternative ingredients </a>
              are sometimes used to make the food.
            </li>
            <li>
                Declare allergens using the <a href="#required-names"> required names </a>and format the required name in bold text.
            </li>
          </ul>
          <p>
            Some ingredients are
            <a href="#exempt-ingredient"> exempt ingredients </a>
            that do not need to be included in the ingredient list.
          </p>
          <section>
            <p></p>
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
                Requirements to have labels or otherwise provide information
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/F2015L00397/latest/text "
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.3
                </a>
                  Information requirements – warning statements, advisory statements and declarations
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00398"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.10
                </a>
                Information requirements – characterising ingredients and
                components of food
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00402"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.3.3
                </a>
                Processing aids
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00477"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 7
                </a>
                Food additive class names (for statement of ingredients)
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00478"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 8
                </a>
                Food additive names and code numbers (for statement of
                ingredients)
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/F2015L00479/latest/text"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 9
                </a>
                  Mandatory advisory statements and declarations
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00480"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                Generic names of ingredients and conditions for their use
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00442"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 16
                </a>
                Types of substances that may be used as food additives
              </li>
            </ul>
            <p>Food Standards Australia and New Zealand</p>
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
          </section>
        </div>
      </article>

      <article>
        <input
          id="alt-ingredient"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="alt-ingredient">
            <span class="title"> Alternative ingredients </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            Where from time to time, a food ingredient or additive is replaced
            with another food or additive that serves the same function, both
            can be listed, provided it is clear that a substitute or alternative
            ingredient is being declared.
          </p>
          <p>
            For example, the statement of ingredients may read: safflower or
            sunflower oil.
          </p>
        </div>
      </article>

      <article>
        <input
          id="char-ingredient"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="char-ingredient">
            <span class="title"> Characterising ingredients </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            If you mention an ingredient, category of ingredients or a part of
            the food in the name on the label, then it becomes a characterising
            ingredient or component.
          </p>
          <p>
            If an ingredient is usually associated with the food (for example,
            fruit in Christmas pudding), or is emphasised on the label in words,
            pictures, or graphics) then it is a characterising ingredient.
          </p>
          <p>For example:</p>
          <ul>
            <li>
              Strawberries are a characterising ingredient in strawberry yogurt
            </li>
            <li>Meat is a characterising ingredient in a meat pie</li>
            <li>
              Honey is a characterising ingredient in a yoghurt with a picture
              of a pot of honey on the label
            </li>
          </ul>
          <p>
            The amount of the characterising ingredients in the food must be
            written on the label as a percentage or, if declared in the
            nutrition information panel, as the average quantity per serving and
            per unit quantity. For example, strawberry yoghurt ingredients must
            state
            <b>Strawberries (23%)</b>.
          </p>
          <p>
            If the amount of the characterising ingredient is less than 5%, then
            the proportion must be given to the nearest 0.5 decimal place, e.g.
            Banana (4.5%)
          </p>
          <p>The percentage information is not required for the following:</p>
          <ul>
            <li>
              prepared filled rolls, sandwiches, bagels or similar products
            </li>
            <li>
              food sold at a fundraising event, for example, cake stalls and
              school fetes
            </li>
            <li>food sold in small packages</li>
            <li>cured and/or dried meat flesh in whole cuts or pieces</li>
            <li>foods with one ingredient</li>
            <li>
              ingredient or category of ingredients that is used in small
              quantities for the purpose of flavouring, for example, herb and
              garlic bread
            </li>
          </ul>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00385"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.1.2
                </a>
                Definitions used throughout the Code
                <ul>
                  <li>
                    See section 1.1.2—4 Definition of characterising component
                    and characterising ingredient
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00386"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.1
                </a>
                Requirements to have labels or otherwise provide information
                <ul>
                  <li>
                    See section 1.2.1—9 Information requirements for food for
                    sale that is not required to bear a label
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00398"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.10
                </a>
                Information requirements – characterising ingredients and
                components of food.
              </li>
            </ul>
            <p>Food Standards Australia New Zealand</p>
            <ul>
              <li>
                <a
                  href="https://www.foodstandards.gov.au/code/userguide/pages/percentagelabelling.aspx"
                  target="_blank"
                  rel="noopener"
                >
                  User Guide – Percentage labelling of food
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="comp-ingredient"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="comp-ingredient">
            <span class="title"> Compound ingredients </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            A compound ingredient is an ingredient that contains two or more
            ingredients.
          </p>
          <p>For example:</p>
          <ul>
            <li>
              Tomato paste is an ingredient in a pre-made pizza base. The tomato
              paste is a <b>compound ingredient </b> as it is made up of the
              following ingredients: tomato, canola oil, olive oil, sugar, salt,
              citric acid (330), basil, oregano.
            </li>
            <li>
                Dark chocolate chips are used as an ingredient in chocolate chip muffins. The dark chocolate chips are a <b>compound ingredient</b> as they are made up of the following ingredients: sugar, cocoa mass, cocoa butter, natural vanilla flavour.
            </li>
          </ul>
          <p>
            If a food contains compound ingredients which contributes 5% or more
            to the final food, then all the foods and additives in that compound
            ingredient must be declared in the ingredient list.
          </p>
          <p>
            If a food contains compound ingredients which contribute less than
            5% to the final food, then only allergens and food additives must be
            listed.
          </p>
        </div>
      </article>

      <article>
        <input
          id="exempt-ingredient"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="exempt-ingredient">
            <span class="title"> Exempt ingredients </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>The ingredient list does not need to include:</p>
          <ul>
            <li>
              An ingredient which is completely removed during processing. For
              example: through evaporation.
            </li>
            <li>
              Added water that:
              <ul>
                <li>
                  is added to reconstitute dehydrated or concentrated
                  ingredients; or
                </li>
                <li>
                  forms part of broth, brine or syrup that is declared in the
                  statement of ingredients or is part of the name of the food;
                  or
                </li>
                <li>constitutes less than 5% of the food; or</li>
              </ul>
            </li>
            <li>
                A food or substance that is used as a processing aid – except in some circumstances (refer to <a href="#processing-aids">processing aids</a> section).
            </li>
            <li>
              An ingredient of a flavouring substance (additive) – except in
              some circumstances (refer to
              <a href="#food-additive"> food additives section</a>)
            </li>
          </ul>
          <p>
            The ingoing weight of water or an ingredient which is completely
            removed during processing must be calculated according to Standard
            1.2.4—5 of the Food Standards Code and added to the statement of
            ingredients in the order of descending weight.
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
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00402"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.3.3
                </a>
                Processing aids
              </li>
            </ul>
          </section>
        </div>
      </article>
      <article>
        <input
          id="food-additive"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="food-additive">
            <span class="title"> Food additives and flavours</span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If you are adding food additives:</b>
            <br />
              Food additives are substances added to foods to keep them fresh or to enhance their colour, flavour or texture. They may include food colourings, flavour enhancers (such as MSG) or a range of preservatives. Most food additives are listed on the product label, along with other ingredients, in descending order by weight (flavours are an exception and do not need to be identified).
          </p>
          <p>
              In most cases you can define the food additive with either its name or the code number. Refer to schedule 7 and schedule 8 for food additive class names and code numbers. 
              <br/>
              For example, cochineal may be listed as colour (cochineal) or colour (120).
          </p>
            <p>If the food additive or flavouring contains allergens: 
                <br/>
                The allergen must be declared in the ingredient list using the required name. For example: caramel can be listed as caramel [150a <b>milk</b>]. Monosodium L-glutamate (MSG) can be listed MSG (<b>wheat</b>).
            </p>
            <p><b>If you are adding vitamins and minerals:</b>
                <br/>
                Vitamins  and minerals are a specific type of food additive. The vitamin or mineral may be declared using the class name of ‘vitamin’ or ‘mineral’.
                <br>
                Claims may be made about the presence of vitamins or minerals in food. However, there are complex labelling requirements for making these claims that are not covered by Label Buster.
                <br>
                It is recommended that you seek professional advice from a food labelling consultant to prepare your food label.
            </p>

            <p><b>If the food is, or contains sulphites:</b>
                <br/>
                Sulphites must be declared in the ingredient list using the required name of ‘sulphites’ when added sulphites are in concentrations of 10mg/kg or more.
            </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00385"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.1.2
                </a>
                Definitions used throughout the Code
              </li>
                <li>
                    <a
                            href="www.legislation.gov.au/F2015L00397/latest/text"
                            target="_blank"
                            rel="noopener"
                    >
                        Standard 1.2.3
                    </a>
                    Information requirements – warning statements, advisory statements and declarations
                    <ul>
                        <li>
                            see 1.2.3 Division 3 Mandatory declarations
                        </li>
                    </ul>
                </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients
                <ul>
                  <li>
                    See section 1.2.4—7 Declaration of substances used as food
                    additives
                  </li>
                  <li>
                    See section 1.2.4—8 Declaration of vitamins and minerals
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00398"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.10
                </a>
                Information requirements – characterising ingredients and
                components of food.
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00396"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.3.1
                </a>
                Food additives
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00477"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 7
                </a>
                Food additive class names (for statement of ingredients)
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00478"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 8
                </a>
                Food additive names and code numbers (for statement of
                ingredients)
              </li>
                <li>
                    <a
                            href="https://www.legislation.gov.au/F2015L00479/latest/text"
                            target="_blank"
                            rel="noopener"
                    >
                        Schedule 9
                    </a>
                    Mandatory advisory statements and declarations
                </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00442"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 16
                </a>
                Types of substances that may be used as food additives
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00449"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 17
                </a>
                Vitamins and minerals
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="generic-name"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="generic-name">
            <span class="title"> Generic names </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>Generic names may be used in the ingredient list, instead of:</p>
          <ul>
            <li>a common name of an ingredient, or</li>
            <li>a name that describes the true nature of the ingredient.</li>
          </ul>
          <p>
            The following generic names of foods can be used without any
            specific conditions:
          </p>
          <ul>
            <li>cereals</li>
            <li>cheese</li>
            <li>cocoa butter</li>
            <li>crystallised fruit</li>
            <li>fruit</li>
            <li>gum bases</li>
            <li>herbs</li>
            <li>meat</li>
            <li>milk protein</li>
            <li>poultry meat</li>
            <li>spices</li>
            <li>vegetables</li>
          </ul>
          <p>
            For example, the term ‘fruit’ can be used in place of bananas or
            oranges.
          </p>
          <p>
            The following generic food names may only be used under specific
            conditions in the Food Standards Code:
          </p>
          <ul>
            <li>
              <a href="#oils-margarine"> fats or oils </a>
            </li>
            <li>
              <a href="#fish-seafood"> fish </a>
            </li>
            <li>
              <a href="#meat-prod"> offal </a>
            </li>
            <li>
              <a href="#bcr"> starch </a>
            </li>
            <li>
              <a href="#sugar-alt"> sugar </a>
            </li>
          </ul>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—4 Ingredients to be listed by common,
                    descriptive or generic name
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00480"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                Generic names of ingredients and conditions for their use
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="order-ingredient"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <label for="order-ingredient">
            <span class="title"> Order of ingredients </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            All ingredients must be listed in descending order of ingoing
            weight. This means that the ingredient with the greatest amount is
            listed first, then the ingredient with the second greatest amount
            and so on.
          </p>
          <p>
            For food that is intended to be returned to its original state by
            the addition of water (reconstitued), the ingredients may be listed
            in descending order of their weight in the reconstitued food. In
            this instance, it must be made clear on the label.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              To calculate and show the ingoing weight for water and other
              ingredients that disappear when cooked, read:
              <br />
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—5 Ingredients to be listed in descending
                    order of ingoing weight
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </article>

        <article>
            <input
                    id="order-ingredient"
                    type="checkbox"
                    name="tabs"
                    tabindex="-1"
                    aria-controls="id-panel-content-1"
                    aria-expanded="false"
                    role="checkbox"
            />
            <button class="acc-heading">
                <label for="processing-aids">
                    <span class="title"> Processing aids </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>
            <div class="collapsing-section" id="id-panel-content-1">
                <p>
                    A processing aid is a food or substance that is used during manufacture. For example, an antifoaming or clarifying agent. A processing aid is often an <a href="#exempt-ingredient">exempt ingredient</a>, which does not have to be included in the ingredient list.
                </p>
                <p>
                    However, if it contains an allergen, it must be included in the ingredient list using the words ‘processing aid’ followed by the <a href="#required-names">required name</a> of the allergen.
                </p>
                <p>
                    For example:
                </p>
                <ul>
                    <li>Processing aid (wheat)</li>
                    <li>Processing aid (wheat, egg)</li>
                </ul>
                <section>
                    <h4>Further reading</h4>
                    <p>
                        <i>Australia New Zealand Food Standards Code</i>
                    </p>
                    <ul>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00397/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Standard 1.2.3
                            </a>
                        </li>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00479/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Schedule 9
                            </a>
                            Mandatory advisory statements and declarations
                        </li>
                    </ul>
                    <p>Australian Standard Fish Names</p>
                    <ul>
                        <li>
                            A searchable database of Australian Standard Fish Names is
                            available at
                            <a
                                    href="http://www.fishnames.com.au"
                                    target="_blank"
                                    rel="noopener"
                            >
                                http://www.fishnames.com.au
                            </a>
                        </li>
                        <li>
                            Hard copies of the Australian Fish Names Standard (AS 5300) are
                            available from FRDC’s Online Shop at
                            <a
                                    href="https://infostore.saiglobal.com/en-au/Standards/AS-5300-2019-111200_SAIG_AS_AS_2741382/"
                                    target="_blank"
                                    rel="noopener"
                            >
                                https://infostore.saiglobal.com/en-au/Standards/AS-5300-2019-111200_SAIG_AS_AS_2741382/
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </article>

        <article>
            <input
                    id="order-ingredient"
                    type="checkbox"
                    name="tabs"
                    tabindex="-1"
                    aria-controls="id-panel-content-1"
                    aria-expanded="false"
                    role="checkbox"
            />
            <button class="acc-heading">
                <label for="required-names">
                    <span class="title"> Required names </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>
            <div class="collapsing-section" id="id-panel-content-1">
                <p>
                    Required names are to be used in the ingredient list and the separate summary statement to identify allergens in the food.
                </p>
                <ul>
                    <li>Fish, crustacea and molluscs must be separately declared in both the ingredient list and summary statement, using ‘fish’, ‘crustacean’ and ‘mollusc’ as required names.</li>
                    <li>The following tree nuts must be declared separately in the ingredient list and summary statement using the required name– ‘almond’, ‘Brazil nut’, ‘cashew’, ‘hazelnut’, ‘macadamia’, ‘pecan’, ‘pine nut’, ‘pistachio’, ‘walnut’.</li>
                    <li>‘Wheat’ must be used as the required name in the ingredient list and summary statement when wheat (or its hybrids) is present. If gluten is present, then ‘gluten’ must also be included in the summary statement.</li>
                    <li>‘Rye’, ‘barley’ and ‘oats’ (if they contain gluten) must be used as the required names in the ingredient list when these cereals (or their hybrids) are present. However, they must be declared as ‘gluten’ in the summary statement.</li>
                    <li>Soybean must be declared in the ingredient list as either ‘soy’, ‘soya’ or ‘soybean’ and in the summary statement as ‘soy’.</li>
                    <li>The required names for other allergens for use in the ingredient list and summary statement, are ‘sulphites’ (when added in concentrations of 10 mg/kg or more), ‘milk’, ‘egg’, ‘sesame’, ‘lupin’ and ‘peanut’.</li>
                    <li>The term ‘processing aid’ (or its plural) must be listed in the ingredient list in association with                                     the allergen/s it contains or is derived from, e.g. processing aids (wheat, egg).</li>
                </ul>
                <p>
                    The required name must be the same font size as all other ingredient names and printed in bold font type.
                </p>
                <p>The allergen may be present in the food as:</p>
                <ul>
                    <li>An ingredient</li>
                    <li>An ingredient of a compound ingredient</li>
                    <li>A substance used as a processing aid, or an ingredient or component of that substance.</li>
                    <li>A substance used as a food additive, or an ingredient or component of that substance.</li>
                </ul>
                <section>
                    <h4>Further reading</h4>
                    <p>
                        <i>Australia New Zealand Food Standards Code</i>
                    </p>
                    <ul>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00397/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Standard 1.2.3
                            </a>
                        </li>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00479/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Schedule 9
                            </a>
                            Mandatory advisory statements and declarations
                        </li>
                    </ul>
                    <p>Australian Standard Fish Names</p>
                    <ul>
                        <li>
                            A searchable database of Australian Standard Fish Names is
                            available at
                            <a
                                    href="http://www.fishnames.com.au"
                                    target="_blank"
                                    rel="noopener"
                            >
                                http://www.fishnames.com.au
                            </a>
                        </li>
                        <li>
                            Hard copies of the Australian Fish Names Standard (AS 5300) are
                            available from FRDC’s Online Shop at
                            <a
                                    href="https://infostore.saiglobal.com/en-au/Standards/AS-5300-2019-111200_SAIG_AS_AS_2741382/"
                                    target="_blank"
                                    rel="noopener"
                            >
                                https://infostore.saiglobal.com/en-au/Standards/AS-5300-2019-111200_SAIG_AS_AS_2741382/
                            </a>
                        </li>
                    </ul>
                </section>
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
          <img src="https://www.qld.gov.au/?a=145849" />
          <label for="bcr">
            <span class="title"> Breads, cereals and grains </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the ingredient is a cereal that is barley, oats, rye or a hybridised strain of barley, oats, rye:</b>
            <br/>The name of the cereal ingredient must be declared in the ingredient list using the <a href="#required-names">required name</a> ‘barley’, ‘oats’, ‘rye’ when:
          </p>
            <ul>
                <li>the cereal or its hybridised strain contains gluten and the cereal is used to make foods other than beer or spirits e.g. Oats are used as an ingredient to make a muesli bar. The ingredients list for the muesli bar is described as – <b>oats</b>, coconut, sultanas, sugar, honey, cinnamon.
                </li>
            </ul>
          <p>
            <b>If the ingredient is a cereal that is wheat or a hybridised strain of wheat:</b>
            <br/>The name of the cereal ingredient must be declared in the ingredient list using the required name ‘wheat’, other than when it is found in:
          </p>
            <ul>
              <li>beer or spirits</li>
              <li>alcohol distilled from wheat</li>
              <li>glucose syrups that are made from wheat starch and that:
                <ul>
                    <li>have been subject to a refining process that has removed gluten protein content to the lowest level that is reasonably achievable, not exceeding 20mg/kg.</li>
                </ul>
                  e.g. 1. If spelt is an ingredient, the required name ‘wheat’ must be used in the ingredient list i.e. spelt (<b>wheat</b>)
                  2. If triticale (a wheat rye hybrid) is an ingredient, the required names ‘wheat’ and ‘rye’ must be used in the ingredient list as – triticale (<b>wheat, rye</b>).
              </li>
            </ul>
          <p>
            <b>If the ingredient is starch:</b>
            <br/>The generic name of ‘starch’ may be used to describe an ingredient for any unmodified starch or any starch which has been modified by other means or enzymes.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
                <li>
                    <a
                            href="www.legislation.gov.au/F2015L00397/latest/text"
                            target="_blank"
                            rel="noopener"
                    >
                        Standard 1.2.3
                    </a> Information requirements – warning statements, advisory statements and declarations
                </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—4 Ingredients to be listed by common,
                    descriptive or generic name
                  </li>
                </ul>
              </li>
                <li>
                    <a
                            href="www.legislation.gov.au/F2015L00479/latest/text"
                            target="_blank"
                            rel="noopener"
                    >
                        Schedule 9
                    </a>
                    Mandatory advisory statements and declarations
                </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00480"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                Generic names of ingredients and conditions for their use
              </li>
            </ul>
          </section>
        </div>
      </article>
        
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
                <img src="https://www.qld.gov.au/?a=145849" />
                <label for="bcr">
                    <span class="title"> Eggs and egg products </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>
            <div class="collapsing-section" id="id-panel-content-1">
                <p>
                    <b>If the food is, or contains eggs:</b>
                    <br/>
                    Egg must be declared in the ingredient list using the <a href="#required-names">required name</a> of 'egg' or 'eggs'. For example: The ingredients list for egg noodles is described as -- <b>Wheat</b> flour, water, <b>eggs</b>, salt.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <p>
                        <i>Australia New Zealand Food Standards Code</i>
                    </p>
                    <ul>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00397/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Standard 1.2.3
                            </a> Information requirements – warning statements, advisory statements and declarations
                            <ul>
                                <li>See 1.2.3 Division 3 Mandatory declarations</li>
                            </ul>
                        </li>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00479/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Schedule 9
                            </a>
                            Mandatory advisory statements and declarations
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
            <b>If the food is, or contains crustacea:</b>
            <br />
              The name of the crustacea, followed by the required name ‘crustacean’ must be declared in the ingredient list.
              <br />
              e.g. crab (<b>crustacean</b>), crayfish (<b>crustacean</b>).
          </p>
          <p>
            <b>If the food is, or contains fish:</b>
            <br />
              The name of the crustacea, followed by the required name ‘fish’ must be declared in the ingredient list.
              <br />
              e.g. barramundi (<b>fish</b>), hake (<b>fish</b>).
          </p>
          <p>
            <b>If the food is, or contains molluscs:</b>
            <br />
              The name of the mollusc, followed by the required name ‘mollusc’ must be declared in the ingredient list.
              <br />
              e.g. oyster (<b>mollusc</b>), squid (<b>mollusc</b>).
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00397"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.3
                </a>
                Information requirements – warning statements, advisory
                statements and declarations
                <ul>
                  <li>
                    See section 1.2.3—4 Mandatory declaration of certain foods
                    or substances in food
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="www.legislation.gov.au/F2015L00479/latest/text"
                  target="_blank"
                  rel="noopener"
                >
                    Schedule 9
                </a>
                  Mandatory advisory statements and declarations
              </li>
                <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00480"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                Generic names of ingredients and conditions for their use
              </li>
            </ul>
            <p>Australian Standard Fish Names</p>
            <ul>
              <li>
                A searchable database of Australian Standard Fish Names is
                available at
                <a
                  href="http://www.fishnames.com.au"
                  target="_blank"
                  rel="noopener"
                >
                  http://www.fishnames.com.au
                </a>
              </li>
              <li>
                Hard copies of the Australian Fish Names Standard (AS 5300) are
                available from FRDC’s Online Shop at
                <a
                  href="https://infostore.saiglobal.com/en-au/Standards/AS-5300-2019-111200_SAIG_AS_AS_2741382/"
                  target="_blank"
                  rel="noopener"
                >
                  https://infostore.saiglobal.com/en-au/Standards/AS-5300-2019-111200_SAIG_AS_AS_2741382/
                </a>
              </li>
            </ul>
          </section>
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
          <img src="https://www.qld.gov.au/?a=145857" />
          <label for="fruit-veg">
            <span class="title"> Fruit and vegetables </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is a juice blend:</b>
            <br />
            The name and percentage of the of the juice in the blend must be
            included in the ingredients. For example: Tropical juice (Pineapple
            50%, mango 20%, oranges 10%, apple 10%, passionfruit 5%, peach puree
            5%)
          </p>
          <p>
            <b>If the food is an orange juice blend:</b>
            <br />
            Where an orange juice blend has less than 10% in total of:
          </p>
          <ul>
            <li>mandarin juice; or</li>
            <li>tangelo juice; or</li>
            <li>mandarin and tangelo juice</li>
          </ul>
          <p>
            the orange juice is not required to be labelled as a juice blend.
          </p>
          <section>
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
                >
                  Standard 2.6.1
                </a>
                Fruit juice and vegetable juice
              </li>
            </ul>
          </section>
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
                <img src="https://www.qld.gov.au/?a=145857" />
                <label for="fruit-veg">
                    <span class="title"> Legumes and pulses </span>
                    <span class="arrow"><i></i></span>
                </label>
            </button>
            <div class="collapsing-section" id="id-panel-content-1">
                <p>
                    <b>If the food is, or contains soy</b>
                    <br />
                    Soy must be declared in the ingredient list using the <a href="#required-names">required name</a> of either 'soy', 'soya', or 'soybean', except for:
                </p>
                <ul>
                    <li>soybean oil that has been degummed, neutralised, bleached and deodorised</li>
                    <li>soybean derivatives that are tocopherol or phytosterol</li>
                </ul>
                <p>
                    <b>If the food is, or contains lupin:</b>
                    <br />
                    Lupin must be declared in the ingredient list using the <a href="#required-names">required name</a> of 'lupin'.
                </p>
                <section>
                    <h4>Further reading</h4>
                    <p>
                        <i>Australia New Zealand Food Standards Code</i>
                    </p>
                    <ul>
                        <li>
                            <a
                                    href="https://www.legislation.gov.au/F2015L00397/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Standard 1.2.3
                            </a>
                            Information requirements -- warning statements, advisory statements and declarations
                            <ul>
                                <li>See 1.2.3 Division 3 mandatory declarations</li>
                            </ul>
                        </li>
                        <li>
                            <a
                                    href="www.legislation.gov.au/F2015L00479/latest/text"
                                    target="_blank"
                                    rel="noopener"
                            >
                                Schedule 9
                            </a>
                            Mandatory advisory statements and declarations
                        </li>
                    </ul>
                </section>
            </div>
        </article>
        
      <article>
        <input
          id="meat-prod"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145868" />
          <label for="meat-prod">
            <span class="title"> Meat and meat products </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is minced meat:</b>
            the maximum proportion of fat in the mince must be provided.
          </p>
          <p>
            <b>If the food contains offal:</b>
            <br />
            Offal includes blood, brain, heart, kidney, liver, pancreas, spleen,
            thymus, tongue and tripe, and excludes meat flesh, bone and bone
            marrow.
          </p>
          <p>
            For brain, heart, kidney, liver, tongue or tripe, the food name or
            description must be identified as either:
          </p>
          <ul>
            <li>offal</li>
            <li>the specific name of the type of offal</li>
          </ul>
          <p>
            For any other type of offal, the food name or description must be
            identified by the specific name of the type of offal.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—4 Ingredients to be listed by common,
                    descriptive or generic name
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00427"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 2.2.1
                </a>
                Meat and meat products.
                <ul>
                  <li>
                    See section 2.2.1—6 Statement indicating the presence of
                    offal
                  </li>
                  <li>See section 2.2.1—7 Proportion of fat in minced meat</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="milk-dairy"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145869" />
          <label for="milk-dairy">
            <span class="title"> Milk, dairy and dairy substitutes </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
            <p>Milk or food or ingredients containing milk must be identified in the ingredient list using the required name ‘milk’ (except when the food is alcohol distilled from whey).</p>
            <p>If the ingredient name contains the word ‘milk’ as a separate word, it meets the required name requirements, but the required name must be in <b>bold</b> type e.g. <b>milk</b> solids, <b>milk</b> protein.</p>
            <p>The required name must be a separate word. For example, buttermilk must be listed in the ingredient list as buttermilk (<b>milk</b>).</p>
            <p>If the ingredient name does not include the required name, then the required name must be provided with the ingredient name. For example: cheese (<b>milk</b>).</p>
            <p><b>The generic name of ‘milk solid’ may be used to describe an ingredient that is:</b></p>
          <ul>
            <li>Milk powder, skim milk powder or dried milk products; or</li>
            <li>Any 2 or more of the following ingredients:
                <ul>
                <li>whey</li>
                <li>whey powder</li>
                <li>whey proteins</li>
                <li>lactose</li>
                <li>caseinates</li>
                <li>milk proteins</li>
                <li>milk fat.</li>
              </ul>
            </li>
          </ul>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—4 Ingredients to be listed by common,
                    descriptive or generic name
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00480"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                Generic names of ingredients and conditions for their use
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="non-alcoholic"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145870" />
          <label for="non-alcoholic">
            <span class="title"> Non-alcoholic drinks </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is packaged water:</b>
            <br />
            The ingredients list is not required for a water that is packaged
            and labelled to the requirements of
            <a
              href="https://www.legislation.gov.au/Series/F2015L00465"
              target="_blank"
              rel="noopener"
            >
              Standard 2.6.2.
            </a>
          </p>
          <p>
            <b>If the food is a juice blend:</b>
            <br />
            The name and percentage of the of the juice in the blend must be
            included in the ingredients. For example: Tropical juice (Pineapple
            50%, mango 20%, oranges 10%, apple 10%, passionfruit 5%, peach puree
            5%)
          </p>
          <p>
            <b>If the food is an orange juice blend:</b>
            <br />
            Where an orange juice blend has less than 10% in total of:
          </p>
          <ul>
            <li>mandarin juice; or</li>
            <li>tangelo juice; or</li>
            <li>mandarin and tangelo juice</li>
          </ul>
          <p>
            the orange juice is not required to be labelled as a juice blend
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—2 Requirement for statement of ingredients
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00426"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 2.6.1
                </a>
                Fruit juice and vegetable juice
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00465"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 2.6.2
                </a>
                Non-alcoholic beverages and brewed soft drinks
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="nuts-seeds"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145872" />
          <label for="nuts-seeds">
            <span class="title"> Nuts and seeds </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is, or contains nuts:</b>
            <br />
              The name of the nut must be declared in the ingredient list using the required name for the nut:
          </p>
            <ul>
                <li>almond</li>
                <li>Brazil nut</li>
                <li>cashew</li>
                <li>hazelnut</li>
                <li>macadamia</li>
                <li>peanut</li>
                <li>pecan</li>
                <li>pine nut</li>
                <li>pistachio</li>
                <li>walnut.</li>
            </ul>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="www.legislation.gov.au/F2015L00397/latest/text"
                  target="_blank"
                  rel="noopener"
                >
                    Standard 1.2.3
                </a>
                  Information requirements – warning statements, advisory statements and declarations
                  <ul>
                  <li>
                      see 1.2.3 Division 3 Mandatory declarations
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="www.legislation.gov.au/F2015L00479/latest/text"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 9
                </a>
                  Mandatory advisory statements and declarations
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="oils-margarine"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145873" />
          <label for="oils-margarine">
            <span class="title"> Oils and margarine </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If using the generic name of fats or oils:</b>
            <br />
              The ingredient list must declare:
          </p>
          <ul>
            <li>whether the source is animal or vegetable</li>
            <li>if the food is a dairy product, including ice cream – the specific source of animal fats or oils.</li>
          </ul>
            <p>The generic name must not be used for diacylglycerol oil.</p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="www.legislation.gov.au/F2015L00461/latest/text "
                  target="_blank"
                  rel="noopener"
                >
                  Standard 2.4.2
                </a>
                Edible oil spreads
              </li>
              <li>
                <a
                  href="www.legislation.gov.au/F2015L00392/latest/text"
                  target="_blank"
                  rel="noopener"
                >
                    Standard 1.2.4 
                </a>
                  Information requirements – statement of ingredients
                <ul>
                  <li>see section 1.2.4 Ingredients to be listed by common, descriptive or generic name.</li>
                </ul>
              </li>
              <li>
                <a
                  href="www.legislation.gov.au/F2015L00480/latest/text"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                  Generic names of ingredients and conditions for their use
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="sugar-alt"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145881" />
          <label for="sugar-alt">
            <span class="title"> Sugar and sugar alternatives </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food is, or contains sugar:</b>
            <br />
            The name “sugars” must not be used in the ingredient list.
          </p>
          <p>
            <b
              >The generic name of sugar may be used to describe an ingredient
              that is:</b
            >
          </p>
          <ul>
            <li>white sugar</li>
            <li>white refined sugar</li>
            <li>caster sugar or castor sugar</li>
            <li>loaf sugar or cube sugar</li>
            <li>icing sugar</li>
            <li>coffee sugar</li>
            <li>coffee crystals</li>
            <li>raw sugar</li>
          </ul>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—4 Ingredients to be listed by common,
                    descriptive or generic name
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00480"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule 10
                </a>
                Generic names of ingredients and conditions for their use
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="food-package"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145879" />
          <label for="food-package">
            <span class="title"> Food in small packages </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b
              >If the food sold in a small package where the package has a
              surface area of less than 100 cm<sup>2</sup>:</b
            >
            <br />
            The ingredient list is not required is not required for food in
            small packages.
            <br />
            For example: A small a packet of chewing gum or a small bar of
            chocolate.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—2 Requirement for statement of ingredients
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </article>

      <article>
        <input
          id="one-ingredient"
          type="checkbox"
          name="tabs"
          tabindex="-1"
          aria-controls="id-panel-content-1"
          aria-expanded="false"
          role="checkbox"
        />
        <button class="acc-heading">
          <img src="https://www.qld.gov.au/?a=145874" />
          <label for="one-ingredient">
            <span class="title"> Food with one ingredient </span>
            <span class="arrow"><i></i></span>
          </label>
        </button>
        <div class="collapsing-section" id="id-panel-content-1">
          <p>
            <b>If the food has only one ingredient:</b>
            <br />
            the ingredient list is not required.
            <br />
            For example: A bag of rice, frozen corn kernels, apple juice.
          </p>
          <section>
            <h4>Further reading</h4>
            <p>
              <i>Australia New Zealand Food Standards Code</i>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.legislation.gov.au/Series/F2015L00392"
                  target="_blank"
                  rel="noopener"
                >
                  Standard 1.2.4
                </a>
                Information requirements – statement of ingredients.
                <ul>
                  <li>
                    See section 1.2.4—2 Requirement for statement of ingredients
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
