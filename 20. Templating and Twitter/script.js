'use strict';

(function() {
  const Twitter = {
    init( config ) {
      this.url = 'https://jsonplaceholder.typicode.com/posts/'

      this.template = config.template
      this.container = config.container
      this.fetch()
    },
    attachTemplate() {
      const self = this
      const template = Handlebars.compile(this.template)
      const html = template(this.tweets)

      $(this.container).append(html)
    },
    fetch() {
      const self = this
      $.getJSON(this.url, function( data ) {
        self.tweets = $.map(data, function(obj) {
          return {
            user: obj.userId,
            title: obj.title,
            body: obj.body
          }
        })
        self.attachTemplate()
      })
    }
  }

  const config = {
    template: $('#tweets-template').html(),
    container: $('ul.tweets')
  }

  Twitter.init( config )
})()
