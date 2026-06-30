/* eslint-disable */
(function () {
  if (data.statementsSummary.Alcohol && !input) {
    valid = "The food containing alcohol details must be entered when your food contains more than 1.15% alcohol by volume.";
    return;
  }

  if (data.statementsSummary.Alcohol && input.length > 1000) {
    valid = "The food containing alcohol details must have less than 1000 characters.";
    return;
  }
  // check for special characters
  if (/[|&;$"<>(){}+]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ " < > ( ){ } +';
    return;
  }
  valid = true;
})();
