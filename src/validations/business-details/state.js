/* eslint-disable */
(function () {
  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }
  return true;
})();
