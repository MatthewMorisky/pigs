
function setup() {

	createCanvas(500, 500); 	
	pig = new Pig();
	bush = new Bush(250, 400);
	bush1 = new Bush(400, 250);
	wolf = new Wolf(100,100);
	wolf1 = new Wolf(400,30);
	//frameRate();

}

function draw() {
	background(60, 163, 92);

	push();
	translate(-pig.pos.x,-pig.pos.y);
		bush.exe();
		bush1.exe();
		wolf.exe();
		wolf1.exe();
	pop();


	pig.exe();
	
	

		
}
function keyPressed() {
	if (keyCode === 88) { // x
		pig.isAttacking = true;
		}
	if (keyCode === 49) { // 1
		pig.hasWeapon = !pig.hasWeapon;
	}
}

function keyReleased() {
	
}