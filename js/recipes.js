$(document).ready(function() {


$('.all-secs').css( {'height': (  $(window).height() )  } );

$('.all-secs').hide();

$('#begin').show();

$('body').on('click', '.next', function() {
    
    $(this).parent().slideToggle();
    
   
    if ( $(this).parent().attr("id") != "meal" ) {
    	$(this).parent().next().slideToggle();
    } else {
        $('#begin').slideToggle();
    }
});

});