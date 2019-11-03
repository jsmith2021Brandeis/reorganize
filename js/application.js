$(function(){
	var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
	var img=new Image();
	img.src="images/Table.jpeg";
	ctx.drawImage(img,0, 0,60,60);
	
});

