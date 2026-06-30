/* eslint-disable */
(function () {
  if (data.statementsSummary.edible_oil && !input) {
    valid = "The process for making edible oil must be entered for food that is an edible oil.";
    return;
  }

  if (data.statementsSummary.edible_oil  && input.length > 1000) {
    valid = "The edible oil details must have less than 1000 characters.";
    return;
  }
  // check for special characters
  if (/[|&;$%"<>{}+/]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ % " < > { } + /';
    return;
  }
  valid = true;
})();
