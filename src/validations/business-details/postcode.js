/* eslint-disable */
(function () {
  // What does this do?
  strInput = `${  input}`;

  // Postcode must have 4 characters or or more.
  if (strInput.length < 4) {
    valid = "Postcode must have 4 characters or or more.";
    return;
  }

  // Postcode must have 10 characters or less.
  if (strInput.length > 10) {
    valid = "Postcode must have 10 characters or less.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
