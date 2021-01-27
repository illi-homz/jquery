'use strict';

(function($) {
  let o = $( {} )
  $.each({
    trigger: 'publish',
    on: 'subscribe',
    off: 'unsubscribe'
  }, function( key, val ) {
    jQuery[val] = function() {
      o[key].apply( o, arguments )
    }
  })
})(jQuery)

$.getJSON('https://jsonplaceholder.typicode.com/posts/', function( results ) {
  $.publish('twitter/results', [results])
})

$.subscribe( 'twitter/results', function( event, results ) {
  $('#foo').append($('<ul></ul>', {
    html: $.map(results, function( obj, i ) {
      return '<li>' + obj.title + '</li>'
    })
  }))
})
