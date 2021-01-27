'use strict';

(function() {
  const content = $('div.content').hide();

  jQuery.fn.flash = function( speed, easing, callback ) {
    return $(this).slideDown(speed).delay(2000).slideUp(speed)
    // return this.animate( props, speed, easing, callback );
  };

  $('h1').on('click', function() {
    content.flash(1000)
  })
})()
