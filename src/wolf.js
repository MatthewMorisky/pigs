function Wolf(x, y) {
	this.pos = createVector(x, y);
	this.velocity = createVector(0,0);
	this.radius = 25;
	this.heading = PI/2;
	this.turnSpeed = PI/64;
	this.targetHeading = 0;
	this.pursuitRadius = 150;
	this.img = loadImage("img/wolf.png");
	
	this.deltaX = (pig.pos.x + (width/2)) - this.pos.x;
	this.deltaY = (this.pos.y - (height/2)) - pig.pos.y;


	this.patrolTime = 0;
	this.patrolCycle = 60;

	this.exe = function() {
		this.update();
		this.draw();
		
		if (this.distFromPig < this.pursuitRadius) {
			this.findTarget();
			this.pursuit();
		}
		else {
			this.patrol();
		}
	}
	this.update = function() {

		this.deltaX = (pig.pos.x + (width/2)) - this.pos.x;
		this.deltaY = (this.pos.y - (height/2)) - pig.pos.y;

		this.distFromPig = Math.sqrt(this.deltaX * this.deltaX + this.deltaY * this.deltaY);

		var force = p5.Vector.fromAngle(this.heading);
			force.mult(.22);
			this.velocity.add(force);
		
		this.pos.add(this.velocity);
		this.velocity.mult(.90);
	}

	this.draw = function() {
		push();
		noFill();
		
		translate(this.pos.x, this.pos.y);
		rotate(this.heading + PI/2);
		image(this.img, -this.radius, -this.radius);
		triangle(-this.radius, this.radius, this.radius, this.radius, 0, -this.radius);
		pop();
	}

	this.findTarget = function() {
				
		
		if ((this.deltaX > 0) && (this.deltaY > 0)) {
			this.targetHeading = Math.atan(this.deltaX/this.deltaY) + 3*PI/2;
		}
		else if ((this.deltaX <= 0) && (this.deltaY <= 0)) {
			this.targetHeading = Math.atan(-this.deltaX/-this.deltaY) + PI/2;
		}

		else if ((this.deltaX > 0) && (this.deltaY <= 0)) {
			this.targetHeading = -Math.atan(this.deltaX/-this.deltaY) + PI/2;
		}

		else if ((this.deltaX <= 0) && (this.deltaY > 0)) {
			this.targetHeading = -Math.atan(this.deltaX/-this.deltaY) + 3*PI/2;
		}
	}

	this.pursuit = function() {
		if (this.targetHeading > this.heading) {
			this.heading += this.turnSpeed * 4;
		}
		else {
			this.heading -= this.turnSpeed * 4;
		}

	}

	this.patrol = function() {
		if (this.patrolTime > this.patrolCycle) {
			this.heading += this.turnSpeed;
			this.patrolTime++;
			if (this.patrolTime > this.patrolCycle + 64) this.patrolTime = 0;
			
		}
		else this.patrolTime++;
	

	}

}