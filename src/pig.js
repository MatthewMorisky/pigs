function Pig() {
	this.pos = createVector(0,0);
	this.velocity = createVector(0,0);
	this.radius = 20;
	this.heading = 0;
	this.img = loadImage("img/pig.png");
	
	this.hasWeapon = false;
	this.weaponCount = 0;
	this.weaponAngle = 0;
	this.isAttacking = false;
	
	



	this.exe = function() {
		this.update();
		this.show();
	
		if (this.isAttacking) {
			this.attack();
			if (this.hasWeapon) {
				this.move();
			}
		}
		else {
			this.move();
			}
		
	}
	this.move = function() {

		if (keyIsDown(UP_ARROW)) {
			this.thrust();
		}
		else if (keyIsDown(DOWN_ARROW)) {
			this.backThrust();
		}

		if ( (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) ) && !( (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW) ) ) ) {
			if (keyIsDown(LEFT_ARROW)) {
				this.turn(-.07);
			}
			else if (keyIsDown(RIGHT_ARROW)) {
				this.turn(.07);
			}
		}
		else {
			this.turn(0);
		}
	}
	this.attack = function() {
		if (this.hasWeapon) {
			this.weaponCount = this.weaponCount + .4
			if (this.weaponCount > 12.8) {
				this.isAttacking = false;
				this.weaponCount = 0;
			}
			this.weaponAngle = -PI/7 * Math.sin(this.weaponCount);

		}
		else {
			if (this.weaponCount >= 2*PI) {
				this.isAttacking = false;
				this.weaponCount = 0;
			}
			var force = p5.Vector.fromAngle(this.heading);
			force.mult(.9*Math.sin(this.weaponCount));
			this.velocity.add(force);
			this.weaponCount = this.weaponCount + .3;
		}
	}

	this.update = function() {
		
		this.pos.add(this.velocity);
		this.velocity.mult(.90);
	}

	this.turn = function(rotation) {
		this.heading += rotation;
	}

	this.thrust = function() {

		var force = p5.Vector.fromAngle(this.heading);
		force.mult(.4);
		this.velocity.add(force);
		
	}
	this.backThrust = function() {

		var force = p5.Vector.fromAngle(this.heading);
		force.mult(-0.13);
		this.velocity.add(force);
		
	}
	this.show = function() {
		push();
		fill(244, 66, 146);
		translate(width/2, height/2);
		rotate(this.heading + PI/2);
		image(this.img, 0, 0);
		triangle(-this.radius, this.radius, this.radius, this.radius, 0, -this.radius);
		if (this.hasWeapon) {
			fill(178, 110, 16);
			rotate(this.weaponAngle);
			rect(-25, -5, 10, -80);
		}
		pop();


	}
}