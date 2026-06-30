/* eslint-disable */
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.consumeWithin && typeof data.directionsForUse.consumeWithinDaysOfOpening === 'undefined') {
    valid = "The number of days that the food must be consumed within after the package is opened must be entered.";
    return;
  } // Can`t be less than zero days.


  if (data && data.directionsForUse && data.directionsForUse.consumeWithin && data.directionsForUse.consumeWithinDaysOfOpening < 0) {
    valid = "The number of days that the food must be consumed within after the package is opened must be a number between 0 and 14 days.";
    return;
  } // Can`t be more than 14 days.


  if (data && data.directionsForUse && data.directionsForUse.consumeWithin && data.directionsForUse.consumeWithinDaysOfOpening > 14) {
    valid = "The number of days that the food must be consumed within after the package is opened must be a number between 0 and 14 days.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
