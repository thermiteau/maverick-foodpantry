/* eslint-disable */

// Microwave instructions time
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && data.directionsForUse.microwaveOnPowerForMinutes === '') {
    valid = "The microwave cooking time must be entered.";
    return;
  } // Can`t be less than zero minutes.
  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && data.directionsForUse.microwaveOnPowerForMinutes.length > 100) {
    valid = "The microwave cooking time must have less than 100 characters. ";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
