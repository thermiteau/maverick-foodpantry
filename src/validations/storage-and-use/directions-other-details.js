/* eslint-disable */

// other directions for use
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && !input) {
    valid = "The other directions for use details must be entered when other is selected as a direction for use.";
    return;
  }

  if (data && data.directionsForUse && input.length > 1000) {
    valid = "The other directions for use details must have less than 1000 characters.";
    return;
  }

  // check for special characters
  if (/[|&;$%"<>(){/}+]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ % " < > ( ){ } + /';
    return;
  }

  valid = true;
})();
