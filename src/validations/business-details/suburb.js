/* eslint-disable */
(function () {
  // Suburb, town or city must have 100 characters or less.
  if (input.length > 250) {
    valid = "Suburb, town or city must have 100 characters or less.";
    return;
  }
  // check for special characters
  if (/[|&;$%"<>(){}+]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ % " < > ( ){ } +';
    return;
  }
  valid = true;
})();
