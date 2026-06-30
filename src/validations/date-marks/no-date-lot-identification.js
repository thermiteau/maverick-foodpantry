/* eslint-disable */
(function () {
    // The lot idenfication must have 100 characters or less.

    if (input.length > 100) {
      valid = "The lot idenfication must have 100 characters or less.";
      return;
    }

    if (!input) {
      valid = "The lot idenfication is mandatory";
      return;
    }

    // check for special characters
    if (/[&;$%"<>(){}+]/.test(input)) {
      valid = 'Please do not use special characters e.g. not any of these & ; $ % " < > ( ){ } +';
      return;
    }

    valid = true;
  })();
