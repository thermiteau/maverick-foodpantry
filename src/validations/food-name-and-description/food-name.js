/* eslint-disable */
(function () {
  // The food name must have 100 characters or less.
  if (input.length > 100) {
    valid = "The food name must have 100 characters or less.";
    return;
  }
  // check for special characters
  if (/[|;$%"<>{}+/]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | ; $ % " < > { } + /';
    return;
  }
  valid = true;
})();
