( function($) {

  'use strict';
  
  $( function() {
  
    //lazyload
    $( '.b-masonry__img' ).lazyload({
      effect : "fadeIn"
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));