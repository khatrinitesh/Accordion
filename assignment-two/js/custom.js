$(document).ready(function(){
	/****** ACCORDION ******/
	
	// $('.acc_block .acc_body:first').show();
	// $('.acc_block h3:first').addClass('arrow_down');

	$(".acc_head").click(function(){
		if($(this).is(":visible"))
		{
			$(".acc_block .acc_body").slideUp(500);
			$(".acc_block h3").addClass('arrow_up').removeClass('arrow_down');
		}
		if($(this).next(".acc_body").is(":visible"))
		{
			$(this).next('.acc_block .acc_body').slideUp(500);
			$(this).children('.acc_block h3').addClass('arrow_up').removeClass('arrow_down');
		}
		else
		{
			$(this).next('.acc_block .acc_body').slideDown(500);
			$(this).children('.acc_block h3').addClass('arrow_down').removeClass('arrow_up');;
		}
	});
});