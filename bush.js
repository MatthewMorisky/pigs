function Bush() {
	this.x = 250;
	this.y = 400;
	this.radius = 60;
	this.fruitCount = 0;
	this.maxFruit = 10;
	this.fruitDelay = 0;
	var fruit = new Array(this.maxFruit);


	this.exe = function() {
		this.update();
		this.show();
		if (this.fruitCount > 0) {
			for (i = 0; i < this.fruitCount; i++) {

				fruit[i].exe();
			}
		}
	}


	this.update = function() {

		if (this.fruitCount < this.maxFruit)	{
			if (this.fruitDelay > this.fruitCount*60) {
				fruit[this.fruitCount] = new Fruit(this.x, this.y, this.radius);
				this.fruitCount++;
				this.fruitDelay = 0;
			}
			else {
				this.fruitDelay++
			}
		}
	}

	this.show = function() {
		translate(-pig.pos.x,-pig.pos.y);
		fill(4, 109, 1);
			
		ellipse(this.x, this.y, this.radius*2, this.radius);
	}


}
