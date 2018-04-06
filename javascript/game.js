//canvas setup

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var kitty1 = new Image();
var kitty2 = new Image();
kitty1.src = '../images/kitty1.png';
kitty2.src = '../images/kitty2.png';
window.onload = function() {
    
function drawBackground(){

    canvas.width = 900;
    canvas.height = 700;
    document.body.appendChild(canvas);

    c.fillStyle = "grey";
    c.fillRect(0,0,canvas.width,canvas.height);

    c.fillStyle = "skyblue";
    c.fillRect(0,0,900,600);

    c.beginPath();
	c.strokeStyle = 'white';
	c.moveTo(0, 600);
	c.lineTo(900, 600);
	c.stroke();
	
	c.beginPath();
	c.strokeStyle = 'black';
	c.fillStyle = 'black';
	c.moveTo(5, 650);
	c.lineTo(5, 355);
	c.lineTo(10, 345);
	c.lineTo(50, 325);
	c.lineTo(50, 345);
	c.lineTo(20, 360);
	c.lineTo(20, 650);
	c.lineTo(5, 650);
	c.stroke();
	c.fill();

	c.beginPath();
	c.strokeStyle = 'black';
	c.fillStyle = 'black';
	c.moveTo(895, 650);
	c.lineTo(895, 355);
	c.lineTo(890, 345);
	c.lineTo(850, 325);
	c.lineTo(850, 345);
	c.lineTo(880, 360);
	c.lineTo(880, 650);
	c.lineTo(895, 650);
	c.stroke();
	c.fill();

}


//GRAB THIS AND PUT IN DRAW FUNCTION



//OBJECT DESCRIPTIONS
var blueCat = {
	position: {
		x: 50,
		y: 600
	},
	velocity: {
		x: 0,
		y: 0
	},
	gravity: 0,
	angle: Math.PI / 2,
	jetpack: false,
	rotatingLeft: false,
	rotatingRight: false

};

var pinkCat = {
	position: {
		x: 850,
		y: 600
	},
	velocity: {
		x: 0,
		y: 0
	},
	gravity: 0,
	angle: Math.PI / 2,
	jetpack: false,
	rotatingLeft: false,
	rotatingRight: false
};


//PUT THIS IN DRAW FUNCTION
function drawBlue() {
   c.save();
   c.drawImage(kitty1,50,600);

    // Draw the flame if engine is on
    if(drawBlue.jetpack)
    {
        c.beginPath();
        c.moveTo(drawBlue.width * -0.5, drawBlue.height * 0.5);
        c.lineTo(drawBlue.width * 0.5, drawBlue.height * 0.5);
        c.lineTo(0, drawBlue.height * 0.5 + Math.random() * 10);
        c.lineTo(drawBlue.width * -0.5, drawBlue.height * 0.5);
        c.closePath();
        c.fillStyle = "orange";
        c.fill();
    }
    c.restore();
}

function drawPink() {
   c.save();
   c.drawImage(kitty2,800,600);

    // Draw the flame if engine is on
    if(drawPink.jetpack)
    {
        c.beginPath();
        c.moveTo(drawPink.width * -0.5, drawPink.height * 0.5);
        c.lineTo(drawPink.width * 0.5, drawPink.height * 0.5);
        c.lineTo(0, drawPink.height * 0.5 + Math.random() * 10);
        c.lineTo(drawPink.width * -0.5, drawPink.height * 0.5);
        c.closePath();
        c.fillStyle = "orange";
        c.fill();
    }
    c.restore();
}





function draw() {
	c.clearRect(0,0,canvas.width,canvas.height);

	drawBackground();

	drawBlue();

	drawPink();
}

//BLUE KEYS
//W: 87 A: 65 D: 68

//PINK KEYS 
//^: 38 <: 37 >: 39


// function move(e) {
// 	if(e.keyCode==)
// }
	
// document.addEventListener('keydown', keyPressed);

draw();

	};


