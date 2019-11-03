//Jacob Smith WHACK Hackathon 11/2/2019 1:04 AM
//Simple application to draw four chairs around a table
offset=3;//for border

$(function(){
	//get canvas object
	var canvas = document.getElementById("room");
	var ctx = canvas.getContext("2d");
	//draw outline of canvas
	canvas.width=800;
	canvas.height=400;
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	tableLength=200;
	tableWidth=200;


	//draw furniture around room
	drawImage(offset+tableWidth/8,offset+tableLength/8,tableWidth,tableLength,"images/TableSide.jpg",ctx);
	chairPath="images/ChairSide.jpg";
	chairLength=50
	chairWidth=50
	//top chair going clockwise
	drawImage(offset+tableWidth/2,offset,chairWidth,chairLength,chairPath,ctx);
	drawImage(offset+tableWidth,offset+tableLength/2,chairWidth,chairLength,chairPath,ctx)
	drawImage(offset+tableWidth/2,offset+tableLength,chairWidth,chairLength,chairPath,ctx)
	drawImage(offset,offset+tableLength/2,chairWidth,chairLength,chairPath,ctx);

});

//draw an image given dimensions and path
function drawImage(width,height,xOffset,yOffset,path,canvas){
	var img=new Image();
	img.src=path;
	canvas.drawImage(img,width, height,xOffset,yOffset);
}