document.addEventListener('DOMContentLoaded', function() {

  const triggers = document.querySelectorAll('.works__trigger');
  const checkboxLists = document.querySelectorAll('.works__checkbox-list');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      trigger.classList.toggle('active');
      const checkboxList = trigger.nextElementSibling;

      checkboxList.style.display = trigger.classList.contains('active') ? 'block' : 'none';

      triggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.classList.remove('active');
          otherTrigger.nextElementSibling.style.display = 'none';
        }
      });

      event.stopPropagation();
    });
  });

  checkboxLists.forEach(list => {
    list.addEventListener('click', event => {
      event.stopPropagation();
    });
  });

  document.addEventListener('click', () => {
    triggers.forEach(trigger => {
      trigger.classList.remove('active');
      trigger.nextElementSibling.style.display = 'none';
    });
  });

  function sliderWorks() {
    $(".works__card-slider").each(function (index) {
        var $status = $(this).find(".pagination");
        $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1
            if (i < 10) {
                $status.html(`<span>0${i}</span> <span>${slick.slideCount}</span>`)
            } else {
                $status.html(`<span>${i}</span> <span>${slick.slideCount}</span>`)
            }
        });

        $('.big-slider', $(this)).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: $(this).find('.small-slider__wrapper')
        });
        $('.small-slider__wrapper', $(this)).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: $(this).find('.big-slider'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 3,
                    }
                },
            ]
        });

    });
  }

  $(document).ready(function () {
    sliderWorks()
  });
  
});