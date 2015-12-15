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
    	document.getElementById("taste1").checked = false;
    	$('#quiz').hide();
		$("#result1").slideToggle();
	
	} else if (checkedButton == "salty") {
		document.getElementById("taste2").checked = false;
		$('#quiz').hide();
		$("#result2").slideToggle();
		
	} else if (checkedButton == "sweetnsalty") {
		document.getElementById("taste3").checked = false;
		$('#quiz').hide();
		$("#result3").slideToggle();
		
	} else if (checkedButton == "neutral") {
		document.getElementById("taste4").checked = false;
		$('#quiz').hide();
		$("#result4").slideToggle();
	
    } else if (checkedButton == "surpriseme") {
    	document.getElementById("taste5").checked = false;
		$('#quiz').hide();
		$("#result5").slideToggle();
	
    }
    
    	
});

   
    
}); 

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

