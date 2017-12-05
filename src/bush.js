function Bush(x, y) {
	this.x = x;
	this.y = y;
	this.radius = 60;
	
	this.maxFruit = 3;
	this.fruitDelay = 0;
	this.fruits = [];
	this.img = loadImage("img/bush.png");
	

	this.exe = function() {
		this.update();
		this.show();
		for (var i = 0, len = this.fruits.length; i < len; i++) {
			this.fruits[i].show();
		}



	}


	this.update = function() {
		if ((this.fruits.length < this.maxFruit) && (this.fruitDelay > 60)) {
			this.fruits.push(new Fruit(this.x, this.y, this.radius, this.fruits.length));
			this.fruitDelay = 0;
		}
		else this.fruitDelay++;
	}

	this.show = function() {
		
		noFill();
		image(this.img, this.x -this.radius, this.y -this.radius/2);
		ellipse(this.x, this.y, this.radius*2, this.radius);
		
	}


}
