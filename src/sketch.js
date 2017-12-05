
function setup() {

	createCanvas(1000, 500); 	
	pig = new Pig();
	this.bushes = [
	  [400, 250],
	  [250,200],
	  [200, 500],
	  [40,200]

	];
	for (i = 0; i < this.bushes.length; i++) {
		this.bushes[i] = new Bush(this.bushes[i][0], this.bushes[i][1])
	}
	this.wolves = [
	  [100,100],
	  [400,30]

	];

	for (i = 0; i < this.wolves.length; i++) {
		this.wolves[i] = new Wolf(this.wolves[i][0], this.wolves[i][1])
	}

	
	//frameRate();

}

function draw() {
	background(60, 163, 92);

	push();
	translate(-pig.pos.x,-pig.pos.y);

		for (i = 0; i < this.bushes.length; i++) {
					this.bushes[i].exe();
				}

		for (i = 0; i < this.wolves.length; i++) {
			this.wolves[i].exe();
		}
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