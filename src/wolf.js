function Wolf(x, y) {
	this.pos = createVector(x, y);
	this.velocity = createVector(0,0);
	this.radius = 25;
	this.heading = PI/2;
	this.turnSpeed = PI/64;
	this.targetHeading = 0;
	this.pursuitRadius = 200;
	this.img = loadImage("img/wolf.png");
	
	this.deltaX = (pig.pos.x + (width/2)) - this.pos.x;
	this.deltaY = (this.pos.y - (height/2)) - pig.pos.y;


	this.patrolTime = 0;
	this.patrolCycle = 60;

	this.exe = function() {
		this.update();
		this.draw();
		this.headingReset()
		
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
			force.mult(.17);
			this.velocity.add(force);
		
		this.pos.add(this.velocity);
		this.velocity.mult(.90);
	}

	this.draw = function() {
		push();
		//noFill();
		//fill(55);
		translate(this.pos.x, this.pos.y);
		rotate(this.heading + PI/2);
		image(this.img, -this.radius, -this.radius);
		//triangle(-this.radius, this.radius, this.radius, this.radius, 0, -this.radius);
		pop();
	}

	this.headingReset = function() {
		if (this.heading < 0) {
			this.heading = 2*PI;
		}
		if (this.heading > 2*PI)  {
			this.heading = 0;
		}
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
		

		if (this.targetHeading - this.heading > PI) {
			this.turnRight();
		}
		else if (this.heading - this.targetHeading > PI) {
			this.turnLeft();
		}
		else if (this.targetHeading > this.heading) {
			this.turnLeft();
		}
		else {
			this.turnRight();
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
	this.turnRight = function() {
		this.heading -= this.turnSpeed;
	}
	this.turnLeft = function() {
		this.heading += this.turnSpeed;
	}

}