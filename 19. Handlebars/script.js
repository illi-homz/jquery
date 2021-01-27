'use strict';

(function() {
  const data = [
    {
      author: { name: 'Ilya', lastname: 'Gomza', age: 33 },
      tweet: 'Hello world',
      quote: "I'm super man"
    },
    {
      author: { name: 'Ivan', lastname: 'Ivanov' },
      tweet: '<b>Wyats</b> app'
    }
  ]

  Handlebars.registerHelper('fullname', function( author ) {
    return author.age
      ? `${author.name} ${author.lastname} - ${author.age}`
      : `${author.name} ${author.lastname}`
  })

  let template = Handlebars.compile( $('#template').html() )
  $('ul').append(template(data))
})()
