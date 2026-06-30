export class Environment {
  /**
   * @param {String} environment overwritten environment
   * @param {Object} base overwrite window to get location
   */
  constructor(environment = '', base = window.location.href) {
    let selectedEnvironment = 'production';
    if (!environment) {
      if (base.includes('localhost')) {
        selectedEnvironment = 'development';
      }
      if (base.includes('dev')) {
        selectedEnvironment = 'development';
      }
      if (base.includes('uat')) {
        selectedEnvironment = 'uat';
      }
    } else {
      selectedEnvironment = environment;
    }

    this.form = {};
    this.scroll = {};
    this.terms = {};
    this.buttons = {};
    this.confirmation = {};
    this.navigation = {};
    this.storage = {};
    this.extraTriggersOnActions = {};
    this.helpGuide = {};

    switch (selectedEnvironment) {
      case 'development': {
        this.flag = 'dev';
        // eslint-disable-next-line max-len
        this.form.location = 'https://api.forms.platforms.qld.gov.au/dev-tzkqydhwrjrviss/labelbuster';
        // eslint-disable-next-line max-len
        this.form.baseLocation = 'https://api.forms.platforms.qld.gov.au/dev-tzkqydhwrjrviss/';
        this.form.adminEmail = 'FoodPantryDefects@DSITIAQLD.onmicrosoft.com';
        break;
      }
      case 'uat': {
        this.flag = 'uat';
        // eslint-disable-next-line max-len
        this.form.location = 'https://api.forms.platforms.qld.gov.au/uat-tzkqydhwrjrviss/labelbuster';
        // eslint-disable-next-line max-len
        this.form.baseLocation = 'https://api.forms.platforms.qld.gov.au/uat-tzkqydhwrjrviss/';
        this.form.adminEmail = 'foodpantry@health.qld.gov.au';
        break;
      }
      default: {
        this.flag = 'prod';
        // eslint-disable-next-line max-len
        this.form.location = 'https://api.forms.platforms.qld.gov.au/tzkqydhwrjrviss/labelbuster';
        // eslint-disable-next-line max-len
        this.form.baseLocation = 'https://api.forms.platforms.qld.gov.au/tzkqydhwrjrviss/';
        this.form.adminEmail = 'foodsafety@health.qld.gov.au';
        break;
      }
    }
  }
}
