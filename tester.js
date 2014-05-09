	$('.test').mouseenter(function(e) { 
		console.log("Hola");
		var color = $(this).css("color"),
		back = $(this).css("background"),
		font = $(this).css("font-size");

		$('#mns').bigCSS("display","block");
		$('#mns').bigCSS("left",e.pageX);
		$('#mns').bigCSS("top",e.pageY);
		$('#mns').bigCSS("z-index","999");
		$('#mns').html("<b>Color:</b>"+color+"<hr><b>Back:</b>"+back+"<hr><b>font:</b>"+font+"<hr>");
	}).mouseleave(function() {
		$('#mns').bigCSS("display","none");
	});
