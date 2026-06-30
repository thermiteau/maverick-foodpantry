/* eslint-disable */

(function () {
  // Maximum can`t be left blank
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && typeof data.storageConditions.keepRefrigeratedAtMaximum === 'undefined') {
    valid = "The keep refrigerated to temperature must be entered when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  // Maximum can`t be greater than or equal to the minimum.
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt &&  data.storageConditions.keepRefrigeratedAtMinimum && data.storageConditions.keepRefrigeratedAtMaximum && data.storageConditions.keepRefrigeratedAtMinimum >= data.storageConditions.keepRefrigeratedAtMaximum) {
    valid = "The keep refrigerated to temperature must higher than the keep refrigerated from temperature when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  // Maximum can`t be zero or below / 30 or above.
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMaxmium < 0 ) {
    valid = "The keep refrigerated from temperature must be a number between 0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMaximum > 30) {
    valid = "The keep refrigerated from temperature must be a number between 0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
