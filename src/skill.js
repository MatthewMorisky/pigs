function Skill(x, y, img, selectedImg, description) {
	
	this.x = x;
	this.y = y;
	this.img = loadImage(img);
	this.selectedImg = loadImage(selectedImg);


	this.exe = function() {
		this.draw();
	}

	this.draw = function() {
		fill(0);
		rect(this.x, this.y, 40, 40);
	}
	this.hover = function() {
		push();
		stroke(0, 0, 255);
		strokeWeight(5);
		fill(0);
		rect(this.x, this.y, 40, 40);
		pop();
	}
}