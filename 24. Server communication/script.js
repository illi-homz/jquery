'use strict';

(function() {
  $.ajax({
    type: 'GET',
    url: 'https://stackoverflow.com',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    crossDomain: false,
    success: function( data ) {
      console.log(data)
    }
  })
})()
