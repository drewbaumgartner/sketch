var cellSize = 16;
var gridSize = 512;

$(document).ready(function(){

	buildGrid(cellSize);

	$('#btnReset').click(function(){
		resetGrid();
	});

	$('#btnSize').click(function(){
		sizeGrid();
	});

});

function buildGrid(size){

	for(i = 0; i < size; i++)
	{
		for(j = 0; j < size; j++)
		{
			$("<div class='cell'></div>").appendTo(".grid");
		}
	}
	$('.cell').width(gridSize/size);
	$('.cell').height(gridSize/size);

	$('.cell').hover(function(){
		$(this).css('background-color', '#000000');
	});
}

function resetGrid(){
	// Reset each cell to the default color of white
	$('.cell').css('background-color', '#FFFFFF');
}

function sizeGrid(){
	var size = prompt("Please enter the size of the grid.  For example, a size of 4 would give a 4x4 grid.");

	if(isNaN(size))
	{
		alert("The size is not a number!");
		sizeGrid();
	}
	else if(size > 64)
	{
		size = 64;
	}
	else if(size < 1)
	{
		size = 1;
	}

	$('.cell').remove();

	buildGrid(size);
}

