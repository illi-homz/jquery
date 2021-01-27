'use strict';

(function() {
  let content = [
    {
      title: 'My awesome blog post',
      thumbnamil: 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/news-listicle/image/2015/11/row_0804.jpg'
    },
    {
      title: 'My second awesome blog post',
      thumbnamil: 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/news-listicle/image/2015/11/row_0804.jpg'
    }
  ]

  let template = $.trim( $( '#blogTemplate' ).html() )
  let frag = ''

  $.each( content, function( index, obj ) {
    frag +=
      template.replace( /{{title}}/ig, obj.title )
              .replace( /{{thumbnamil}}/ig, obj.thumbnamil )
    $(document.body).append(frag)
  })

})()
