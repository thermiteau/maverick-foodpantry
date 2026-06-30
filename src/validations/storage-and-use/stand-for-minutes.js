/* eslint-disable */

// allow to stand for
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.allowToStandFor && typeof data.directionsForUse.allowToStandForMinutesBeforeServing === 'undefined') {
    valid = "The time to stand before serving the food must be entered.";
    return;
  } // Can`t be less than zero minutes.


  if (data && data.directionsForUse && data.directionsForUse.allowToStandFor && data.directionsForUse.allowToStandForMinutesBeforeServing < 0) {
    valid = "The time to stand before serving food must be a number between 0 and 999 minutes.";
    return;
  } // Can`t be greater than 1000 minutes


  if (data && data.directionsForUse && data.directionsForUse.allowToStandFor && data.directionsForUse.allowToStandForMinutesBeforeServing > 999) {
    valid = "The time to stand before serving food must be a number between 0 and 999 minutes.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
