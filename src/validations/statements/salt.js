/* eslint-disable */
(function () {
  if (data.statementsSummary.salt_subs && !input) {
    valid = "The sodium and potassium content must be entered for reduced sodium salt mixtures and salt substitutes.";
    return;
  }

  if (data.statementsSummary.salt_subs  && input.length > 1000) {
    valid = "The sodium and potassium content details must have less than 1000 characters.";
    return;
  }
  // checK for special characters
  if (/[|&;$"<>(){}+]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ " < > ( ){ } +';
    return;
  }
  valid = true;
})();
