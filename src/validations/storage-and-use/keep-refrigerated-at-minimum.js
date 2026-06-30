/* eslint-disable */

(function () {
  // Minimum can`t be left blank
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && typeof data.storageConditions.keepRefrigeratedAtMinimum === 'undefined') {
    valid = "The keep refrigerated from temperature must be entered when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  // Minimum can`t be greater than maximum
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt &&  data.storageConditions.keepRefrigeratedAtMinimum && data.storageConditions.keepRefrigeratedAtMaximum && data.storageConditions.keepRefrigeratedAtMinimum >= data.storageConditions.keepRefrigeratedAtMaximum) {
    valid = "The keep refrigerated from temperature must lower than the keep refrigerated to temperature when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  // Minimum can`t be 30 and above or 0 and below.
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMinimum < 0) {
    valid = "The keep refrigerated from temperature must be a number between 0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMinimum > 30) {
    valid = "The keep refrigerated from temperature must be a number between 0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified temperature range.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
