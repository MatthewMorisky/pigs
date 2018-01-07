function Fruit(bushX,bushY, bushR, fruitNum) {

	this.x = random(bushX - bushR, bushX + bushR);
	this.y = random(bushY - bushR/2, bushY + bushR/2);
	this.radius = 20;
	this.isEaten = false;
	this.pigDistance = 0;
	



	this.exe = function() {

		if (this.isEaten) {
			this.hideCounter++;
			if (this.hideCounter > 320) {
				this.isEaten = false;
			}
		}
		else {
		this.show();
		this.distanceCheck();
		}
	
		
		
	}
		

	this.show = function() {
		
		fill(229, 18, 18);

		ellipse(this.x, this.y, this.radius, this.radius);
		
		
	}
	this.distanceUpdate = function() {
		this.pigDistance = sqrt(sq(pig.pos.x - this.x + width/2) + sq(pig.pos.y - this.y + height/2));
		
	}
	this.distanceCheck = function() {
			if (pig.isAttacking) {
			this.distanceUpdate();
			if (this.pigDistance < 20) {
				this.getEaten();
			}

		}
	}

	this.getEaten = function() {
		this.isEaten = true;
		this.hideCounter = 0;
		this.x = random(bushX - bushR, bushX + bushR);
		this.y = random(bushY - bushR/2, bushY + bushR/2);
		if (expBar.isLevelingUp) {
			expBar.expHold+= 100;
		}
		else expBar.exp += 100;
	}
}