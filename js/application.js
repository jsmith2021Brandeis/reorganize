var factor = 4;
var margin = factor;
var numRect = 0;
var numDoor = 0;
var numCloset = 0;

$(function(){
	
	createRoom(160, 120);
	createRect(3,3,10,10);
	createRect(20,20,30,30);
	
});

function createRoom(x, y){
		
		$('#canvas').html("");
		$('#canvas').append("<div class='room'></div>");
		$('#canvas > .room').css('height', y*factor).css('width', x*factor);
		$('#canvas').append("<div class='clear'></div>");
	
}

function createRect(width,height,xOffset,yOffset){
		
		numRect++;
		$('.room').append("<div class='rect-margin' id='rect-" + numRect + "'></div>");
	
		currRect = $('.room > #rect-' + numRect).css('position', 'relative');
		currRect.append("<div class='rect'></div>");
		currRect.children('.rect').append("<div class='info'></div>");
		currRect.css('height', height*factor).css('width', width*factor).css('padding', margin);
		currRect.css('left',xOffset);
		currRect.css('top',yOffset);

}