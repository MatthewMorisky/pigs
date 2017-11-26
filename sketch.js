
function setup() {

	createCanvas(500, 500); 	
	pig = new Pig();
	bush = new Bush();
	//frameRate(1);

}

function draw() {
	background(60, 163, 92);
	bush.exe();
	pig.exe();


		
}
function keyPressed() {
	if (keyCode === 32) { //Spacebar
		pig.isAttacking = true;
		}
	if (keyCode === 49) {
		pig.hasWeapon = !pig.hasWeapon;
	}
}

function keyReleased() {
	
}