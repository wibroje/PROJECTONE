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



//BLUE CAT OBJECT
var blueCat = {
	position: {
		x: 100,
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

//PINK CAT OBJECT
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

//CREATING BLUE ON CANVAS
function drawBlue() {
   c.save();
   c.beginPath();
   c.translate(blueCat.position.x, blueCat.position.y);
   c.rotate(blueCat.angle);
   c.fillStyle = c.drawImage(kitty1,-24,-26.5);
   c.fill();
   c.closePath();

    //JETPACK GRAPHICS
    if(blueCat.jetpack)
    {
       //Add graphic for jetpack trail later
    }
    c.restore();
}

//CREATING PINK ON CANVAS
function drawPink() {
   c.save();
   c.drawImage(kitty2,800,600);
   c.rotate(pinkCat.angle);


    //""
    if(pinkCat.jetpack)
    {
       
    }
    c.restore();
}

////////////////////////////////////////////////
///v v v v v v v v v BALLY! v v v v v v v v v///
////////////////////////////////////////////////









////////////////////////////////////////////////
///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^///
////////////////////////////////////////////////






//UPDATE THE POSITION OF BLUE FPS
function updateBlue() {
//ROTATION
    if(blueCat.rotatingRight)
    {
        blueCat.angle += Math.PI / 60;
    }
    else if(blueCat.rotatingLeft)
    {
        blueCat.angle -= Math.PI / 60;
    }
//MOVING FORWARD
    if(blueCat.jetpack) {

        blueCat.position.x += Math.sin(blueCat.angle);
        blueCat.position.y -= Math.cos(blueCat.angle);

    }
}

//UPDATE THE POSITION OF PINK FPS
function updatePink() {
//ROTATION
    if(pinkCat.rotatingRight)
    {
        pinkCat.angle += Math.PI / 60;
    }
    else if(pinkCat.rotatingLeft)
    {
        pinkCat.angle -= Math.PI / 60;
    }
//MOVING FORWARD
    if(pinkCat.jetpack)
    {
        pinkCat.position.x += Math.sin(pinkCat.angle);
        pinkCat.position.y -= Math.cos(pinkCat.angle);
    }
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

function keyLetGo(event) {

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


