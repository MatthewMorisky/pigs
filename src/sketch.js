
function setup() {

	

	createCanvas(1000, 500); 	
	pig = new Pig();
	pauseMenu = new PauseMenu();
	skillsMenu = new SkillsMenu();
	expBar = new ExpBar();
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
	this.barriers = [
	  [100,100,true,81,15,"img/fence2.png"],
	  [400,30,false,81,15,"img/fence1.png"]

	];

	for (i = 0; i < this.barriers.length; i++) {
		this.barriers[i] = new Barrier(this.barriers[i][0], this.barriers[i][1],this.barriers[i][2], this.barriers[i][3], this.barriers[i][4], this.barriers[i][5])
	}

	
	//frameRate();

}

function draw() {
	if (!pauseMenu.isPaused) {
		background(60, 163, 92);
		push();
		translate(-pig.pos.x,-pig.pos.y);

			for (i = 0; i < this.bushes.length; i++) {
						this.bushes[i].exe();
					}

			for (i = 0; i < this.wolves.length; i++) {
				this.wolves[i].exe();
			}
			for (i = 0; i < this.barriers.length; i++) {
				this.barriers[i].exe();
			}
		pop();


		pig.exe();
		expBar.exe();
	}
	else{
		background(55)
		pauseMenu.exe();
		skillsMenu.exe();
	}
	

		
}
function keyPressed() {
	if (keyCode === 88) { // x
		if (pauseMenu.isPaused) {
			if (pauseMenu.isOpen) {
				pauseMenu.choiceMade();
			}
			else if (skillsMenu.isOpen) {
				skillsMenu.choiceMade();
			}
		}

		else {
		pig.isAttacking = true;
		}
	}
	if (keyCode === 49) { // 1
		pig.hasWeapon = !pig.hasWeapon;
	}
	if (keyCode === 32) { // SpaceBar
		if (!pauseMenu.isPaused) {
			pauseMenu.isPaused = !pauseMenu.isPaused;
		}
		else if (pauseMenu.isOpen) {
			pauseMenu.choiceMade();
		}
		else if (skillsMenu.isOpen) {
			skillsMenu.choiceMade();
		}
	}
	if (pauseMenu.isPaused) {
		if (keyCode === 27) { //Escape key
			pauseMenu.resetMenu();
		}
		if ((pauseMenu.isOpen) && (keyCode === UP_ARROW)) {
			 pauseMenu.goUp();
		}
		if ((pauseMenu.isOpen) && (keyCode === DOWN_ARROW)) {
			pauseMenu.goDown();
		}
		if ((skillsMenu.isOpen) && (keyCode === UP_ARROW)) {
			 skillsMenu.goUp();
		}
		if ((skillsMenu.isOpen) && (keyCode === DOWN_ARROW)) {
			 skillsMenu.goDown();
		}
		if ((skillsMenu.isOpen) && (keyCode === LEFT_ARROW)) {
			 skillsMenu.goLeft();
		}
		if ((skillsMenu.isOpen) && (keyCode === RIGHT_ARROW)) {
			 skillsMenu.goRight();
		}
	}
}

function keyReleased() {
	
}