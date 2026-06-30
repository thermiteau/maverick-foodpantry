/* eslint-disable */
// oven instructions temperature
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.cookFor && typeof data.directionsForUse.cookForTimeAtTemperature === 'undefined') {
    valid = "The oven cooking temperature must be entered.";
    return;
  } // Can`t be less than zero minutes.


  if (data && data.directionsForUse && data.directionsForUse.cookFor && data.directionsForUse.cookForTimeAtTemperature < 0) {
    valid = "The oven cooking temperature must be a number between 0 and 999 \xB0C.";
    return;
  } // Can`t be greater than 1000 minutes


  if (data && data.directionsForUse && data.directionsForUse.cookFor && data.directionsForUse.cookForTimeAtTemperature > 999) {
    valid = "The oven cooking temperature must be a number between 0 and 999 \xB0C.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
