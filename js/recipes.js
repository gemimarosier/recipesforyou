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

$('body').on('click', '.submit', function() {
    
  
	if ($( "#sweet" ).prop( "checked", true )) {
		$("#result1").show();		
	} else if ( $("#salty").prop("checked", true)) {
		$("#result2").show();
	
	
	};

    
   
    
});



//if ($( "#sweet" ).prop( "checked", true )) {
		/*$(this).parent().slideToggle();*/
		
	//} else {
	//};  








});

