setTimeout( function() {
  var promoTextHeight = $( '.b-promo-block__text' ).height();
  var promoImgHeight = $( '.b-promo-block__img' ).height();
  var promoDecorHeight = '100%';

  if (  promoTextHeight > promoImgHeight ){
    promoDecorHeight = $( '.b-promo-block' ).height() - promoTextHeight + promoImgHeight;
    $( '.b-promo-block__decor' ).css({ height: promoDecorHeight + 'px' });
  }
}, 100 );

