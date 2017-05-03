$(document).ready(function(){

	for(i = 0; i < 16; i++)
	{
		for(j = 0; j < 16; j++)
		{
			$("<div class='cell'></div>").appendTo(".container");
		}
	}

	$('.cell').hover(function(){
		$(this).css('background-color', '#000000');
	});
});