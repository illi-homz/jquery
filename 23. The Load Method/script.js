'use strict';

(function() {
  const wrap = $('.wrap')
  $('a').on('click', function( e ) {
    const href = $(this).attr('href')

    wrap.load(href + ' .container')
    e.preventDefault()
  })
})()
