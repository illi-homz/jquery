'use strict';

(function() {
  let sliderUl = $('div.slider').css('overflow', 'hidden').children('ul'),
      imgs = sliderUl.find('img'),
      imgWidth = imgs.first().width(),
      imgsLen = imgs.length,
      current = 1,
      totalImsWidth = imgWidth * imgsLen

  $('#slider-nav').show().find('button').on('click', function() {
    const direction = $(this).data('dir'),
          loc = imgWidth

    direction === 'next' ? ++current : --current

    if (current === 0) {
      current = imgsLen
    } else if (current > imgsLen) {
      current = 1
    }

    transition(sliderUl, loc)
  })

  function transition( container, loc ) {
    container.animate({
      'margin-left': `-${loc * (current - 1)}`
    })
  }
})()
