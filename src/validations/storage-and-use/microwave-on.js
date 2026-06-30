/* eslint-disable */

// Microwave instructions power
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && data.directionsForUse.microwavePower === '') {
    valid = "The microwave cooking temperature must be entered.";
    return;
  } // Maximum length 100 characters

  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && data.directionsForUse.microwavePower.length > 100) {
    valid = " The microwave cooking temperature must have less than 100 characters.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }


  valid = true;
})();
