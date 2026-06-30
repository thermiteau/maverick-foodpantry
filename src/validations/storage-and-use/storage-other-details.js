/* eslint-disable */

// Other please enter
(() => {
  // Can`t be left blank
  if (data.storageConditions.otherPleaseEnter && !input) {
    valid = `The other storage condition details must be entered when other is
      selected as a storage condition.`;
    return;
  }
  if (data.storageConditions.otherPleaseEnter && input.length > 1000) {
    valid = `The other storage condition details must have less than 1000
      characters.`;
    return;
  }

  // check for special characters
  if (/[|&;$%"<>(){/}+]/.test(input)) {
    valid = 'Please do not use special characters e.g. not any of these | & ; $ % " < > ( ){ } + /';
    return;
  }

  valid = true;
})();
