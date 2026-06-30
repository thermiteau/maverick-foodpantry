/* eslint-disable */
(function () {
  // The ingredients field must have atleast one ingredient
if (input === "") {
  valid = "Please enter at least one ingredient to the ingredients list.";
  return;
}

// The ingredients field character shouldn't exceed 250 characters
if (input.length > 250) {
  valid = "The ingredient must have 250 characters or less.";
  return;
}
  // checK for special characters
if (/[|&;$">{}+/]/.test(input)) {
  valid = 'Please do not use special characters e.g. not any of these | & ; $ " > { } + /';
  return;
}
valid = true;
})();
