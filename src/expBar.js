function ExpBar() {
	this.MAX_FILL = width/3 - 5
	this.exp = 0;
	this.expHold = 0;
	this.lvl = 1;
	this.skillPoints = 0;

	this.barFill = 0;
	this.isLevelingUp = false

	this.exe = function() {

		this.show();
		if (this.isLevelingUp){
			this.levelUp();
		}
		else {
			this.calcBarFill();
		}
		this.fillBar();
	}


	this.show = function() {
		push();
		
		fill(255);
		rect(width/3, height - 40, width/3, 20);
		fill(27, 115, 247);
		noStroke();
		rect(width/3 + 3, height - 38, this.barFill, 17);
		textSize(16);
		textAlign(LEFT);
		textStyle(BOLD);
		fill(0);
		text('Exp: ' + this.exp, width/3 + 3, height - 24);
		textAlign(RIGHT);
		text('Level: ' + this.lvl, 2* width/3 - 3, height - 24);
		pop();

	}
	this.calcBarFill = function() {
		if (this.exp > this.maxExp) {
			this.isLevelingUp = true;
		}
		this.maxExp = this.lvl * 2000;

		
	}
	this.levelUp = function() {
		if (this.exp > this.expHold) {
			this.exp-=(this.maxExp * .01);
		}
		else {
			this.isLevelingUp = false;
			this.lvl++;
			this.skillPoints++;
			this.exp = this.expHold;
			this.expHold = 0;
		}
		
	}
	this.fillBar = function() {
		this.barFill = constrain((this.exp / this.maxExp),0,1) * (this.MAX_FILL);
	}
	
}