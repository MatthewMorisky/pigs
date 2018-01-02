function ExpBar() {
	this.exp = 0

	this.exe = function() {

		this.show();
	}


	this.show = function() {
		textSize(32);
		textAlign(CENTER);
		text('Fruit Eaten: ' + expBar.exp, width/2, height - 20);
	}

	
}