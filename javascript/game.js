//canvas setup

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var gravity = .3;

var kitty1 = new Image();
var kitty2 = new Image();
kitty1.src = '../images/kitty1.png';
kitty2.src = '../images/kitty2.png';
window.onload = function() {

function drawBackground(){

    canvas.width = 900;
    canvas.height = 700;
    document.body.appendChild(canvas);

    c.fillStyle = "tan";
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

};

//BLUE CAT OBJECT
var blueCat = {
    width: 48,
    height: 53,
	speed: 7,
	position: {
		x: 50,
		y: 600
	},
	velocity: {
		x: 0,
		y: 0
	},
	gravity: 0,
	angle: Math.PI * 2,
	jetpack: false,
	rotatingLeft: false,
	rotatingRight: false,
    rad: 25

};

//PINK CAT OBJECT
var pinkCat = {
    width: 48,
    height: 53,
	speed: 7,
	position: {
		x: 850,
		y: 600
	},
	velocity: {
		x: 0,
		y: 0
	},
	gravity: 0,
	angle: Math.PI * 2,
	jetpack: false,
	rotatingLeft: false,
	rotatingRight: false
};

var leftHoop = {
    x: 60,
    y: 340,
    width: 80,
    height: 5
}

var rightHoop = {
    x: 740,
    y: 340,
    width: 80,
    height: 5
}
function drawHoops() {

c.beginPath();
    c.fillStyle = 'crimson';
    c.rect(60,340,80,5);
    c.fill();
    c.closePath();

    c.beginPath();
    c.fillStyle = 'crimson';
    c.rect(760,340,80,5);
    c.fill();
    c.closePath();

}



//CREATING BLUE ON CANVAS
function drawBlue() {
   c.save();
   c.beginPath();
   c.arc(blueCat.x, blueCat.y, rad, 0, Math.PI * 2, false);
   c.translate(blueCat.position.x, blueCat.position.y);
   c.rotate(blueCat.angle);
   c.fillStyle = c.drawImage(kitty1,-24,-26.5);
   c.fill();
   c.closePath();

    //JETPACK GRAPHICS
    if(blueCat.jetpack) {

        c.beginPath();
        c.moveTo(blueCat.width * -0.5, blueCat.height * 0.5);
        c.lineTo(blueCat.width * 0.5, blueCat.height * 0.5);
        c.lineTo(0, blueCat.height * 0.5 + Math.random() * 60);
        c.lineTo(blueCat.width * -0.5, blueCat.height * 0.5);
        c.closePath();
        c.fillStyle = "grey";
        c.fill();

        c.beginPath();
        c.moveTo(blueCat.width * -0.5, blueCat.height * 0.5);
        c.lineTo(blueCat.width * 0.5, blueCat.height * 0.5);
        c.lineTo(0, blueCat.height * 0.5 + Math.random() * 30);
        c.lineTo(blueCat.width * -0.5, blueCat.height * 0.5);
        c.closePath();
        c.fillStyle = "orange";
        c.fill();

        c.beginPath();
        c.moveTo(blueCat.width * -0.5, blueCat.height * 0.5);
        c.lineTo(blueCat.width * 0.5, blueCat.height * 0.5);
        c.lineTo(0, blueCat.height * 0.5 + Math.random() * 15);
        c.lineTo(blueCat.width * -0.5, blueCat.height * 0.5);
        c.closePath();
        c.fillStyle = "white";
        c.fill();
    }
    c.restore();
}

//CREATING PINK ON CANVAS
function drawPink() {
   c.save();
   c.beginPath();
   c.translate(pinkCat.position.x, pinkCat.position.y);
   c.rotate(pinkCat.angle);
   c.fillStyle = c.drawImage(kitty2,-24,-26.5);
   c.fill();
   c.closePath();

    //""
    if(pinkCat.jetpack)
    {
        c.beginPath();
        c.moveTo(pinkCat.width * -0.5, pinkCat.height * 0.5);
        c.lineTo(pinkCat.width * 0.5, pinkCat.height * 0.5);
        c.lineTo(0, pinkCat.height * 0.5 + Math.random() * 60);
        c.lineTo(pinkCat.width * -0.5, pinkCat.height * 0.5);
        c.closePath();
        c.fillStyle = "grey";
        c.fill();

        c.beginPath();
        c.moveTo(pinkCat.width * -0.5, pinkCat.height * 0.5);
        c.lineTo(pinkCat.width * 0.5, pinkCat.height * 0.5);
        c.lineTo(0, pinkCat.height * 0.5 + Math.random() * 30);
        c.lineTo(pinkCat.width * -0.5, pinkCat.height * 0.5);
        c.closePath();
        c.fillStyle = "orange";
        c.fill();

        c.beginPath();
        c.moveTo(pinkCat.width * -0.5, pinkCat.height * 0.5);
        c.lineTo(pinkCat.width * 0.5, pinkCat.height * 0.5);
        c.lineTo(0, pinkCat.height * 0.5 + Math.random() * 15);
        c.lineTo(pinkCat.width * -0.5, pinkCat.height * 0.5);
        c.closePath();
        c.fillStyle = "white";
        c.fill();

    }
    c.restore();

}

////////////////////////////////////////////////
///v v v v v v v v v BALLY! v v v v v v v v v///
////////////////////////////////////////////////

var p = { x: 440, y: 340 };
var velo = 1,
corner = 90,
rad = 30;
var ball = { x: p.x, y: p.y };
var moveX = Math.cos(Math.PI / 180 * corner) * velo;
var moveY = Math.sin(Math.PI / 180 * corner) * velo;

function drawBall() {

    if (ball.x > canvas.width - rad || ball.x < rad) moveX = -moveX;
    if (ball.y > 650 - rad || ball.y < rad) moveY = -moveY;

    ball.x += moveX;
    ball.y += moveY +=gravity;

    c.beginPath();
    c.fillStyle = 'orange';
    c.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();

    }


////////////////////////////////////////////////
///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^///
////////////////////////////////////////////////

function drawBackboard() {

    c.beginPath();
    c.fillStyle = 'white';
    c.rect(50,220,10,140);
    c.fill();
    c.closePath();

    c.beginPath();
    c.fillStyle = 'white';
    c.rect(840,220,10,140);
    c.fill();
    c.closePath();

    c.beginPath();
    c.fillStyle = 'crimson';
    c.rect(60,340,80,5);
    c.fill();
    c.closePath();

    c.beginPath();
    c.fillStyle = 'crimson';
    c.rect(760,340,80,5);
    c.fill();
    c.closePath();
}


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

        blueCat.position.x += blueCat.speed * Math.sin(blueCat.angle);
        blueCat.position.y -= blueCat.speed * Math.cos(blueCat.angle);

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
    if(pinkCat.jetpack) {

        pinkCat.position.x += pinkCat.speed * Math.sin(pinkCat.angle);
        pinkCat.position.y -= pinkCat.speed * Math.cos(pinkCat.angle);
  
}

}
//////////////////////////////

//COLLISION ZONE

//////////////////////////////

function dist(x1, y1, x2, y2) {
    let xDist = x2-x1;
    let yDist = y2-y1;

    return Math.pow(xDist, 2) + Math.pow(yDist, 2);
} 


function playCats() {
    if (dist(blueCat.position.x, blueCat.position.y, ball.x, ball.y) < blueCat.position.x + blueCat.position.y + ball.x + ball.y) {
        moveX += 1;
        moveY -= 1;
        
    }
    if (dist(pinkCat.position.x, pinkCat.position.y, ball.x, ball.y) < pinkCat.position.x + pinkCat.position.y + ball.x + ball.y) {
        moveX -= 1;
        moveY -= 1;
    }
}




//////////////////////////////

//MAP COLLISION

//////////////////////////////
function boxIn() {

    if (ball.y > 640) {
        moveY += 1;
    }
    
    if (blueCat.position.x < 24) {
        blueCat.position.x = 24;
    }
    if (blueCat.position.y < 0) {
        blueCat.position.y = 0;
    }
    if (blueCat.position.x > 900) {
        blueCat.position.x = 900;
    }
    if (blueCat.position.y > 650) {
        blueCat.position.y = 650;
    }
    if (pinkCat.position.x < 0) {
        pinkCat.position.x = 0;
    }
    if (pinkCat.position.y < 0) {
        pinkCat.position.y = 0;
    }
    if (pinkCat.position.x > 900) {
        pinkCat.position.x = 900;
    }
    if (pinkCat.position.y > 650) {
        pinkCat.position.y = 650;
    }

}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function score() {

    if (ball.y < 360 && ball.y > 320 && ball.x > 60 && ball.x < 140) {
        wait(7000);
        location.reload();
    }

    if (ball.y < 360 && ball.y > 320 && ball.x > 760 && ball.x < 840) {
        wait(7000);
        location.reload();
    }
}


function draw() {
	c.clearRect(0,0,canvas.width,canvas.height);

    updateBlue();

    updatePink();

    drawBackground();

    drawBlue();

    drawPink();

    drawBall();

    drawBackboard();

    drawHoops();

    boxIn();

    playCats();

    score();

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


