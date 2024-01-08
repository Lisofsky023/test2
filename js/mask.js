document.addEventListener('DOMContentLoaded', function() {
  var phoneInput = document.querySelector('.form__number');

  phoneInput.addEventListener('input', function() {
      var number = this.value.replace(/[^\d]/g, '');
      if (number.length > 11) {
          number = number.slice(0, 11);
      }
      if (number.length < 2) {
          number = '7';
      }
      this.value = '+' + number.slice(0, 1) + ' ' + number.slice(1, 4) + ' ' + number.slice(4, 7) + ' ' + number.slice(7, 9) + ' ' + number.slice(9, 11);
  });
});

