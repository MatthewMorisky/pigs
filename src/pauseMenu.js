function PauseMenu() {
	this.isPaused = false;
	this.invSelected = true;
	this.skillSelected = false;
	this.quitSelected = false;
	this.isOpen = true;
	



	this.exe = function() {
		if (this.isOpen) {
			this.draw();
		}
		
	}
	this.draw = function() {
		push()
		fill(244,182,66);
		rect(width/4,10,width/2,height-20);
		fill(0);
		textSize(64);
		textAlign(CENTER);
		text('Paused',width/2,120);

		this.resetText();

		if (this.invSelected) {
			this.hoverText();
		}
		text('Inventory',width/2, height/2 - 40);
		this.resetText();
		
		if (this.skillSelected) {
			this.hoverText();
		}
		text('Skills(' + expBar.skillPoints + ')',width/2,height/2);
		this.resetText();

		if (this.quitSelected) {
			this.hoverText();
		}
		text('Quit',width/2,height/2 + 40);
		this.resetText();
		pop();
	}



	this.hoverText = function() {
		textSize(40);
		fill(255);
	}

	this.resetText = function() {
		//base Cases
		textSize(32);
		fill(0);
	}
	this.goUp = function() {

		if (this.invSelected) {
			this.quitSelected = true;
			this.invSelected = false;
		}
		else if (this.skillSelected) {
			this.invSelected = true;
			this.skillSelected = false;
		}
		else if (this.quitSelected) {
			this.skillSelected = true;
			this.quitSelected = false;
		}
	}

	this.goDown = function() {

		if (this.invSelected) {
			this.skillSelected = true;
			this.invSelected = false;
		}
		else if (this.skillSelected) {
			this.quitSelected = true;
			this.skillSelected = false;
		}
		else if (this.quitSelected) {
			this.invSelected = true;
			this.quitSelected = false;
		}
	}

	this.choiceMade = function() {
		if (this.invSelected) {
			//console.log("inv");
		}
		else if (this.skillSelected) {
			skillsMenu.isOpen = true;
			this.isOpen = false;

		}
		else if (this.quitSelected) {
			this.resetMenu();
		}
	}
	this.resetMenu = function() {
		this.isPaused = false;

		this.invSelected = true;
		this.skillSelected = false;
		this.quitSelected = false;

		this.isOpen = true;
		skillsMenu.isOpen = false;

	}    
}