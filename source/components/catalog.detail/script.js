( function($) {

  'use strict';
  
  $( function() {
  
    $( '.b-catalog-detail .fotorama' ).fotorama({
      thumbwidth: '100px',
      thumbheight: '100px'
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));