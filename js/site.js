jQuery(function($) {
  $('html').addClass('hasjs');
  $('#submit').on("click", function(){
	
	if ($('#lateralus').is(':checked')){
		javascript:alert("Lateralus was the correct answer. You've been accepted to the mailing list.");
	} else {
		javascript:alert("We'll assume that album choice was a misclick.");
	}
  });
});