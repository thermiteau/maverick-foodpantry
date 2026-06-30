/* eslint-disable class-methods-use-this */
/**
 * @desc class to re-apply the styles to formio elements as they go missing
 */
export class ReapplySelected {
  /**
   * @param {Array} types the array of types to re-apply
   */
  reapply(types) {
    if (types.indexOf('radio') !== -1) {
      this._reapplyRadios();
    }
  }

  /**
   * @desc reaplly radio buttons
   */
  _reapplyRadios() {
    const radioContainers = document.querySelectorAll(
      '.form-radio.radio .form-check',
    );
    radioContainers.forEach((container) => {
      const containerInput = container.querySelector('input');
      if (containerInput.checked) {
        container.classList.add('radio-selected');
      }
    });
  }
}
