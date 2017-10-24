$(function(){
	$('#two').hide();
	$('body').click(function(){
		$('.contain').slideUp(500);
		$('#two').show(500);
	});
	$('#two .container .back').click(function(){
		$('.contain').show(500);
		$('#two').fadeOut(500);
	})
})
