/* eslint-disable */

// oven instructions time
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.cookFor && typeof data.directionsForUse.cookForTime === 'undefined') {
    valid = "The oven cooking time must be entered.";
    return;
  } // Time can't be zero


  if (data && data.directionsForUse && data.directionsForUse.cookFor && data.directionsForUse.cookForTime < 0) {
    valid = "The oven cooking time must be a number between 0 and 999 minutes.";
    return;
  } // Time can't be greater than 999 minutes


  if (data && data.directionsForUse && data.directionsForUse.cookFor && data.directionsForUse.cookForTime > 999) {
    valid = "The oven cooking time must be a number between 0 and 999 minutes.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
