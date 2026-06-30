/* eslint-disable */
(function () {
  // Business name must have 250 characters or less.
  if (input.length > 250) {
    valid = "Business name must have 250 characters or less.";
    return;
  }
  // check for special characters
  if (/[|;$%"<>{}+/]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | ; $ % " < >{ } + /';
    return;
  }
  valid = true;
})();
