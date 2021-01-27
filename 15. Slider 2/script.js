'use strict';

function Slider(container, nav) {
  this.container = container

  this.nav = nav.show()
  this.imgs = this.container.find('img')
  this.imgWidth = this.imgs.first().width()
  this.imgLength = this.imgs.length
  this.current = 0

  this.events.click.call(this)
}
Slider.prototype.transition = function(coords) {
  this.container.animate({
    'margin-left': coords || -(this.current * this.imgWidth)
  })
}
Slider.prototype.setCurrent = function(dir) {
  let pos = this.current
  pos += ~~(dir === 'next') || -1

  this.current = (pos < 0) ? this.imgLength - 1 : pos % this.imgLength

  return pos
}

Slider.prototype.events = {
  click: function() {
    const self = this
    this.nav.find('button').on('click', function() {
      self.setCurrent($(this).data('dir'))
      self.transition()
    })
  }
}

const container = $('div.slider').css('overflow', 'hidden').children('ul')
new Slider( container, $('#slider-nav') )



'use strict';

function Slider(container, nav) {
  this.container = container

  this.nav = nav.show()
  this.imgs = this.container.find('img')
  this.imgWidth = this.imgs.first().width()
  this.imgLength = this.imgs.length
  this.current = 0

  this.events.click.call(this)
}
Slider.prototype.transition = function(coords) {
  this.container.animate({
    'margin-left': coords || -(this.current * this.imgWidth)
  })
}
Slider.prototype.setCurrent = function(dir) {
  let pos = this.current
  pos += ~~(dir === 'next') || -1

  this.current = (pos < 0) ? this.imgLength - 1 : pos % this.imgLength

  return pos
}

Slider.prototype.events = {
  click: function() {
    const self = this
    this.nav.find('button').on('click', function() {
      self.setCurrent($(this).data('dir'))
      self.transition()
    })
  }
}

const container = $('div.slider').css('overflow', 'hidden').children('ul')
new Slider( container, $('#slider-nav') )
