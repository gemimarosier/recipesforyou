$(document).ready(function() {


$('.all-secs').css( {'height': (  $(window).height() )  } );

$('.all-secs').hide();

$('#begin').show();

$('body').on('click', '.all-secs', function() {
    
    $(this).slideToggle();
    
   
    if ( $(this).attr("id") != "meal" ) {
    	$(this).next().slideToggle();
    } else {
        $('#begin').slideToggle();
    }
});

});