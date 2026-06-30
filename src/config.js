export const configuration = {
  form: {
    baseElement: window,
    queryElement: document,
    formioConfig: {
      showCancel: false,
      showPrevious: false,
      showNext: false,
      showSubmit: false,
      hooks: {
        beforeSubmit: (submission, next) => {
          // eslint-disable-next-line no-param-reassign
          submission.data.formEnv = window.formEnv;
          next();
        },
      },
    },
    adminEmail: '',
    adminField: 'adminEmail',
    emailField: 'toConfirmEmail',
    emailConfirmField: 'email',
    endpoint: 'submission',
    pdfEndpoint: 'labelBusterPdf',
    downloadPDF: false,
    // eslint-disable-next-line max-len
    pdfDownloadName: data => `Label Buster summary - Label Buster Foods ${data.foodName}`,
    selector: '#formio',
    title: 'Label Buster',
    clearStorageOnCancel: true,
  },
  scroll: {
    target: 0,
    type: 'auto',
    focusTarget: '#focusTarget',
  },
  terms: {
    title: 'terms of use',
    termsStorageType: localStorage,
    termsStorageName: 'lbtermsAndConditions',
    skipIfTermsAlreadyAccepted: true,
    dataName: 'lbtermsAndConditions',
  },
  buttons: {
    overwriteFirstButton: true,
    overwriteValue: 'Start',
    showButtonsOnLast: true,
    confirmOnCancel: true,
    css: {
      base: 'qg-btn',
      previous: 'btn-default',
      next: 'btn-primary',
      cancel: 'btn-link',
    },
  },
  confirmation: {
    title: 'Are you sure you want to leave?',
    closeXButton: '<i class="fa fa-times"></i>',
    description: 'Your progress will not be saved',
    continueButtonText: 'No, stay',
    continueButtonCssClass: 'qg-btn btn-primary',
    leaveButtonText: 'Yes, leave',
    leaveButtonCssClass: 'qg-btn btn-link',
  },
  navigation: {
    baseClass: 'qg-btn btn-link',
    skipFirstNavStep: true,
  },
  storage: {
    type: localStorage,
    name: 'lbcompleted',
  },
  extraTriggersOnActions: {
  },
  helpGuide: {
    initialState: 'onboarding',
    overwriteMobileStateWith: false,
    mobileSize: 991,
  },
};
