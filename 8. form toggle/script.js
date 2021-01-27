'use strict';

(function() {
  $('html').addClass('js');

  let contactForm = {
    container: $('#contact'),

    config: {
      effect: 'slideToggle',
      speed: 500
    },

    init(config) {
      $.extend(contactForm.config, config)

      $('<button></button>', {
        text: 'Contact Me'
      })
        .insertAfter( 'article:first' )
        .on('click', this.show )
    },

    show() {
      const cf = contactForm,
          container = cf.container,
          config = cf.config

      if (container.is(':hidden')) {
        contactForm.close.call(container);
        container[config.effect](config.speed);
      }
    },
    close() {
      let $this = $(this)

      if ($this.find('span.close').length) return;

      $('<span class="close">x</span>')
        .prependTo(this)
        .on('click', function() {
          $this[contactForm.config.effect](contactForm.config.speed)
        })
   }
  };

  contactForm.init({
    effect: 'slideToggle',
    speed: 300
  });
})();
