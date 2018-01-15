function SkillsMenu() {
	this.isOpen = false;
	this.backSelected = false;
	this.quitSelected = false;
	this.selectionX = 0;
	this.selectionY = 0;
	this.skills = [
	  [[1225/3, 117, "null", "null", "Trample"], [1400/3, 117, "null", "null", "TBD"], [1575/3, 117, "null", "null", "TBD"], [1750/3, 117, "null", "null", "TBD"], [1925/3, 117, "null", "null", "TBD"]],//Strength
	  [[1225/3, 192, "null", "null", "Trample"], [1400/3, 192, "null", "null", "TBD"], [1575/3, 192, "null", "null", "TBD"], [1750/3, 192, "null", "null", "TBD"], [1925/3, 192, "null", "null", "TBD"]],//Charisma
	  [[1225/3, 267, "null", "null", "Trample"], [1400/3, 267, "null", "null", "TBD"], [1575/3, 267, "null", "null", "TBD"], [1750/3, 267, "null", "null", "TBD"], [1925/3, 267, "null", "null", "TBD"]],//Intellect
	  [[1225/3, 342, "null", "null", "Trample"], [1400/3, 342, "null", "null", "TBD"], [1575/3, 342, "null", "null", "TBD"], [1750/3, 342, "null", "null", "TBD"], [1925/3, 342, "null", "null", "TBD"]] //Agility
	];
	for (i = 0; i < this.skills.length; i++) {
		for (j = 0; j < this.skills[i].length; j++) {
			this.skills[i][j] = new Skill(this.skills[i][j][0], this.skills[i][j][1], this.skills[i][j][2], this.skills[i][j][3], this.skills[i][j][4]);
		}
	}

	

	this.exe = function() {
		if (this.isOpen) {
			this.draw();
			for (i = 0; i < this.skills.length; i++) {
				for (j = 0; j < this.skills[i].length; j++) {
					this.skills[i][j].exe();
				}
			}
			if ((!this.backSelected) &&  (!this.quitSelected)) {
				this.skills[this.selectionY][this.selectionX].hover();
			}
		}
	}


	this.draw = function() {

		// Graphic Elements
		push()
		fill(244,182,66);
		rect(width/4,10,width/2,height-20); //Menu inclosure

		strokeWeight(5)
		fill(244,182,66)
		rect(300, 100, 400, 300); // Outside Box

		line(300, 175, 700, 175);
		line(300, 250, 700, 250);
		line(300, 325, 700, 325); //Horizontal Lines

		line(390, 100, 390, 400); //Vertical Splitter

		textAlign(CENTER);
		textSize(18);
		fill(0);
		text('Strength', 345, 165);
		text('Charisma', 345, 240);
		text('Intellect', 345, 315);
		text('Agility', 345, 390);
		//Text Elements
		fill(0);
		textSize(64);
		textAlign(CENTER);
		text('Skills',width/2,80); // Heading
		

		

		pauseMenu.resetText();
		if (this.backSelected) {
			pauseMenu.hoverText();
		}
		text('Back',width/2,430);
		pauseMenu.resetText();

		if (this.quitSelected) {
			pauseMenu.hoverText();
		}
		text('Quit',width/2,470);
		pauseMenu.resetText();
		


		pop();
	}
	this.goUp = function() {
		if (this.backSelected) {
			this.backSelected = false;
		}
		else if (this.quitSelected) {
			this.backSelected = true;
			this.quitSelected = false;
		}
		else if (this.selectionY > 0) {
			this.selectionY -= 1;
		}

	}
	this.goDown = function() {
		
		if ((this.selectionY == 3) && (!this.backSelected) && (!this.quitSelected)) {
			this.backSelected = true;
		}
		else if (this.backSelected) {
			this.quitSelected = true;
			this.backSelected = false;
		}

		else if (this.selectionY < 3) {
			this.selectionY += 1;
		}
		
	}
	this.goLeft = function() {
		if (this.selectionX > 0) {
			this.selectionX -= 1;
		}

	}
	this.goRight = function() {
		if (this.selectionX < 4) {
			this.selectionX += 1;
		}

	}

	this.choiceMade = function() {
		if (this.backSelected) {
			this.isOpen = false;
			pauseMenu.isOpen = true;
			
		}

		else if (this.quitSelected) {
			pauseMenu.resetMenu();
		}
	}
}