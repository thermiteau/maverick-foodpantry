/* eslint-disable */
(function () {
  // The date mark must 20 characters or less.
  if (input.length > 20) {
    valid = "The date mark must 20 characters or less.";
    return;
  }

  // No value available
  if (!input) {
    valid = "Date must be entered when type of date mark is selected";
    return;
  }

  // check for special characters
  if (/[|&;$%"<>(){}+]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ % " < > ( ){ } +';
    return;
  }
  valid = true;
})();
