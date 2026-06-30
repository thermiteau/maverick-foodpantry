/* eslint-disable */

// Once thawed
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.onceThawedUseWithin && typeof data.directionsForUse.onceThawedUseWithinHours === 'undefined') {
    valid = "The number of hours that the food must be consumed within after the food has been thawed must be entered.";
    return;
  } // Can`t be less than zero days.


  if (data && data.directionsForUse && data.directionsForUse.onceThawedUseWithin && data.directionsForUse.onceThawedUseWithinHours < 0) {
    valid = "The number of hours that the food must be consumed within after the food has been thawed must be a number between 0 and 100 hours.";
    return;
  } // Can`t be more than 14 days.


  if (data && data.directionsForUse && data.directionsForUse.onceThawedUseWithin && data.directionsForUse.onceThawedUseWithinHours > 100) {
    valid = "The number of hours that the food must be consumed within after the food has been thawed must be a number between 0 and 100 hours.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
