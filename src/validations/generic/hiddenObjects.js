/* eslint-disable */

(function () {

  if (typeof input !== 'object') {
    value = 'This needs to be an object'
    return;
  }

  Object.keys(input).forEach((key) => {
      // check if not a valid character
    if (/[|;$%"<>{}+/]/.test(input[key])) {
      valid = 'Please do not use special characters e.g. not any of these | ; $ % " < >{ } + /';
      return;
    }
  })

  valid = true;
})();
