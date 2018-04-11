# PROJECTONE
Project 1 for WDI7

-Instructions:
Player one controls the blue cat using: 
'W' to accelerate forward
'A' to rotate left and 'D' to rotate right
Player two controls the pink cat using:
'Up arrow' to accelerate forward
'Left arrow' to rotate left and 'Right arrow' to rotate right
The objective is the hit the grav-ball into the other players basket. Doing so will yield a point and the grav-ball and playerwill be reset to battle again. The first player to ten points wins the game!

-Initial Thoughts:
Wanted to make a game where two cats face off and try to score baskets against each other.
Had only played around with canvas for a bit, super nervous approaching it.

-Process:
Started out on creating the game before peripheral pages and styling.
Drew a background, made images for the cats.
Began to animate them; I used game logic similar to Atari's Lunar Lander.
Next I began to draw the hoops and the ball.
I borrowed some starter code for the ball, which made it float from the top corner and bounce off all of the 'walls'.
I tweaked the ball object so that it would start in the middle and gave it a counter-force(gravity) so it would drop and bounce.

Adding collision was the next step.
I started with the map boundaries.
After some research I determined an algorithm for distance between moving objects, and this is how I got my players to move the ball.
I tweaked the ball reaction for about three hours. Unfortunately I wasn't able to get super accurate position-based physics like I imagined, but for the sake of the gameplay, my final movement properties worked pretty well.
After I got the players and ball interacting I had to create the hoops and their hitboxes.
After I got the ball to register when falling into the hoop from above, I added blocking hitboxes to the edge of the rims and the bottoms of the hoops.
I could spend hours tweaking and adding micro-hitboxes, and the hitboxes are still fairly buggy, but they are good enough and almost always work as intended.

Added sound.
Added a reset ball and position functionality for after a player scores.

-Blockers:
Once I finished creating my images, I was stuck on animating everything, positioning the images in the actual moving objects. After much tweaking and worrying, I overcame this and started snowballing until I got to collision detection.
Collision didn't take forever to figure out but it did require a lot of heavy thought and even more tweaking. 

-Left Undone:
Reset game button.
Smoother hitbox detection.
I would like to go back in and redo the character hitboxes into circle objects so I can implement position-based physics. This would also require different algorithms for ball movement.

-Tech:
HTML Canvas and Javascript/ jQuery
I chose not to use libraries because I wanted a challenge

Thanks for looking, hope you enjoy the game.
