'use strict';

(function() {
  let box = $('div.box'),
    w = $(window).width() / 2  - box.outerWidth() / 2,
    h = $(window).height() / 2  - box.outerHeight() / 2

  $('button').on('click', function() {
    // box.animate({
    //   'font-size': '+=5',
    //   width: '+=300'
    // }, 500,  'swing', function() {
    //   console.log('completed')
    // })
    ///////////////////
    // box.animate({
    //   fontSize: '+=5',
    //   width: '+=300'
    // }, { duration: 500 })
    //   .animate({'top': 500, 'left': 200}, {
    //     duration: 3000,
    //     queue: false
    //   })
    ////////////////////
    box.animate({
      'left': w,
      'top': h
    }, 300).css({
      'position': 'absolute'
    })
  })
})()
