function Fruit(bushX,bushY, bushR, fruitNum) {

	this.x = random(bushX - bushR, bushX + bushR);
	this.y = random(bushY - bushR/2, bushY + bushR/2);
	this.radius = 20;

	this.locationPicked = false;
	



	this.exe = function() {
		
		this.show();
	}
		

	this.show = function() {
		
		fill(229, 18, 18);

		ellipse(this.x, this.y, this.radius, this.radius);
	}

}