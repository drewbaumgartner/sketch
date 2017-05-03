$(document).ready(function(){

	buildGrid();

	$('#btnReset').click(function(){
		resetGrid();
	});

	$('.cell').hover(function(){
		$(this).css('background-color', '#000000');
	});
});

function buildGrid(){
	for(i = 0; i < 16; i++)
	{
		for(j = 0; j < 16; j++)
		{
			$("<div class='cell'></div>").appendTo(".container");
		}
	}
}

function resetGrid(){
	$('.cell').css('background-color', '#FFFFFF');
}