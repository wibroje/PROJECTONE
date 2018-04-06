//canvas setup

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var gravity = 0;

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
	color: 'transparent',
	width: 50,
	height: 50,
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
   c.beginPath();
   c.translate(blueCat.position.x, blueCat.position.y);
   c.rotate(blueCat.angle);
   c.fillStyle = c.drawImage(kitty1,-10,0);
   c.fill();
   c.closePath();

    // Draw the flame if engine is on
    if(blueCat.jetpack)
    {
       //Add graphic for jetpack trail later
    }
    c.restore();
}

function drawPink() {
   c.save();
   c.drawImage(kitty2,800,600);
   c.rotate(pinkCat.angle);


    // Draw the flame if engine is on
    if(pinkCat.jetpack)
    {
       
    }
    c.restore();
}

function updateBlue()
{
    if(blueCat.rotatingRight)
    {
        blueCat.angle += Math.PI / 60;
    }
    else if(blueCat.rotatingLeft)
    {
        blueCat.angle -= Math.PI / 60;
    }

    if(blueCat.jetpack)
    {
        blueCat.position.x += Math.sin(blueCat.angle);
        blueCat.position.y -= Math.cos(blueCat.angle);
    }
}

function updatePink()
{
    if(pinkCat.rotatingRight)
    {
        pinkCat.angle += Math.PI / 60;
    }
    else if(pinkCat.rotatingLeft)
    {
        pinkCat.angle -= Math.PI / 60;
    }

    if(pinkCat.jetpack)
    {
        pinkCat.position.x += Math.sin(pinkCat.angle);
        pinkCat.position.y -= Math.cos(pinkCat.angle);
    }
    // pinkCat.velocity.y -= gravity;
}


function draw() {
	c.clearRect(0,0,canvas.width,canvas.height);
	updateBlue();

	updatePink();

	drawBackground();

	drawBlue();

	drawPink();

	requestAnimationFrame(draw);
}

//BLUE KEYS
//W: 87 A: 65 D: 68

//PINK KEYS 
//^: 38 <: 37 >: 39

function keyLetGo(event)
{
    switch(event.keyCode)
    {
        case 65:
            // Left  
            blueCat.rotatingLeft = false;
            break;
        case 68:
            // Right  
            blueCat.rotatingRight = false;
            break;
        case 87:
            // Up  
            blueCat.jetpack = false;
            break;

            case 37:
            // Left  
            pinkCat.rotatingLeft = false;
            break;
        case 39:
            // Right  
            pinkCat.rotatingRight = false;
            break;
        case 38:
            // Up  
            pinkCat.jetpack = false;
            break;
    }
}

document.addEventListener('keyup', keyLetGo);



function keyPressed(event)
{
    switch(event.keyCode)
    {
        case 65:
            // Left  
            blueCat.rotatingLeft = true;
            break;
        case 68:
            // Right  
            blueCat.rotatingRight = true;
            break;
        case 87:
            // Up  
            blueCat.jetpack = true;
            break;

        case 37:
            // Left  
            pinkCat.rotatingLeft = true;
            break;
        case 39:
            // Right  
            pinkCat.rotatingRight = true;
            break;
        case 38:
            // Up  
            pinkCat.jetpack = true;
            break;
    }
}

document.addEventListener('keydown', keyPressed);


draw();

	};


