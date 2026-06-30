/* eslint-disable */

(function () {
    if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
      valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
      return;
    }

    if (data.toConfirmEmail && data.email && data.email !== data.toConfirmEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
      valid = 'Please enter the same email as above.';
      return;
    }

    if(data.email && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input))){
      valid='Please enter a valid email address in the format of youremail@provider.com'
      return;
    }

    valid = true;

  })();
