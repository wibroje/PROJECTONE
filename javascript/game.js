var canvas = document.getElementById("layer1");
var context = canvas.getContext("2d");


var sprite1 = new Image();
var sprite2 = new Image();

sprite1.onload = function() {
	context.drawImage(sprite1,50,650);
	context.drawImage(sprite2,800,650);
	};

sprite1.src = '../images/kitty1.png';
sprite2.src = '../images/kitty2.png';











