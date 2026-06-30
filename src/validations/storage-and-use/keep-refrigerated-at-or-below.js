/* eslint-disable */

(function () {
  // Can not be below zero
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAtOrBelow && (data.storageConditions.keepRefrigeratedAtOrBelowTemperature < 0 || data.storageConditions.keepRefrigeratedAtOrBelowTemperature > 30)) {
    valid = "The keep refrigerated below temperature must a number be between   0 \xB0C and 30 \xB0C when the food is to be refrigerated below a specified temperature.";
    return;
  } // Can not be above 30

  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAtOrBelow && data.storageConditions.keepRefrigeratedAtOrBelowTemperature > 30) {
    valid = "The keep refrigerated below temperature must a number be between   0 \xB0C and 30 \xB0C when the food is to be refrigerated below a specified temperature.";
    return;
  }

  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAtOrBelow && typeof data.storageConditions.keepRefrigeratedAtOrBelowTemperature === 'undefined') {
    valid = "The keep refrigerated below temperature must a number be between 0 \xB0C and 30 \xB0C when the food is to be refrigerated below a specified temperature.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
