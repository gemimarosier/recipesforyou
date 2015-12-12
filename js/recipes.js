$(document).ready(function() {


// $('.all-secs').css( {'height': (  $(window).height() )  } );

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

$('body').on('click', '#submit', function() {

	var radioButtons = document.getElementsByName("taste");

for ( var i in radioButtons ) {       
        if ( radioButtons[i].checked ) {
            var checkedButton = radioButtons[i].value;
            break;
        }
    }
    if (checkedButton == "sweet") {
    	$('#quiz').hide();
		$("#result1").slideToggle();
	
	} else if (checkedButton == "salty") {
		$('#quiz').hide();
		$("#result2").slideToggle();
		
	} else if (checkedButton == "sweetnsalty") {
		$('#quiz').hide();
		$("#result3").slideToggle();
		
	} else if (checkedButton == "neutral") {
		$('#quiz').hide();
		$("#result4").slideToggle();
	
    } else if (checkedButton == "surpriseme") {
		$('#quiz').hide();
		$("#result5").slideToggle();
	
    }
});


/* $('body').on('click', '#submit', function() {
    
  
	if ($( "#taste1" ).prop( "checked", true )) {
		$('#quiz').hide();
		$("#result1").slideToggle();
		
			
	} else if ( $("#taste2").prop("checked", true)) {
		$('#quiz').hide();
		$("result2").slideToggle();
		
	} else if ( $("#taste3").prop("checked", true)) {
		$('#quiz').hide();
		$("result3").slideToggle();
	
	} else if ( $("#taste4").prop("checked", true)) {
		$('#quiz').hide();
		$("result4").slideToggle();
		
	} else if ( $("#taste5").prop("checked", true)) {
		$('#quiz').hide();
		$("result5").slideToggle();
	 
	};

    
   
    
}); */

$('.box').hide();

$('.s1').on('click', function() {
		$('.one').slideToggle('fast');
	});
	$('.s2').on('click', function() {
		$('.two').slideToggle('fast');
	});
	$('.s3').on('click', function() {
		$('.three').slideToggle('fast');
});
	


$('body').on('click', '.done', function() {
		$('.all-secs').hide();
		$("#meal").slideToggle();
		
});	


//$('body').on('click', '.submit', function() {
    
  
//	if ($( "#sweet" ).prop( "checked", true )) {
//		$("#result1").slideToggle();		
			
//	} else if ( $("#salty").prop("checked", true)) {
//		$(this).find("#result2").slideToggle();
	
	
//	};

//if ($( "#sweet" ).prop( "checked", true )) {
		/*$(this).parent().slideToggle();*/
		
	//} else {
	//};  








});

