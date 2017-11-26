function Fruit(bushX,bushY, bushR) {

	this.x = random(bushX - bushR, bushX + bushR);
	this.y = random(bushY - bushR/2, bushY + bushR/2);
	this.radius = 20;

	this.locationPicked = false;
	



	this.exe = function() {
		//this.update();
		this.show();
		/*if (!this.locationPicked) {
			this.pickLocation();
		}
		*/
	}
	/*
	this.pickLocation = function() {
		this.x = random(bushX - bushR, bushX + bushR);
		this.y = random(bushY - bushR/2, bushY + bushR/2);
		if (bush.fruitCount > 1) {
			for (i = 0; i < bush.fruitCount - 1; i++) {
				var d = dist(this.x, this.y, fruit[i].x, fruit[i].y);
				if  (d < 20) {
					this.pickLocation();
				}
			}
		}
		this.locationPicked = true;
	}
	*/

	this.show = function() {
		fill(229, 18, 18);

		ellipse(this.x, this.y, this.radius, this.radius);
	}

}