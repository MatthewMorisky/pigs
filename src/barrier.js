function Barrier(x, y, isVertical, length, imgOffset, img) {
	this.img = loadImage(img);


	this.exe = function() {
		this.show();
		this.collisionCheck();
	}

	this.show = function() {
		fill(255);
		
		if (isVertical) {
			image(this.img, x - imgOffset, y);
			//rect(x,y,4,length);
			
		}
		else {
			image(this.img, x, y - imgOffset);
			//rect(x,y,length,4);
		}
	}
	this.collisionCheck = function() {
		if (isVertical) {
			if ((pig.pos.x < (x - width/2)) && (pig.pos.y > (y - height/2)) && (pig.pos.y < (y + length - height/2))) {
				//console.log('isLeft');
				
				if ((x - width/2) - pig.pos.x < 20)
					pig.pos.x-= 4;
			}

			else if ((pig.pos.y > (y - height/2)) && (pig.pos.y < (y + length - height/2))) {
				//console.log('isRight');

				if (pig.pos.x - (x - width/2) < 20)
					pig.pos.x+= 4;
			}
		}
		else {
			if (pig.pos.y < (y - height/2) && (pig.pos.x > (x - width/2)) && (pig.pos.x < (x + length - width/2))) {
				//console.log('isAbove');
				if ((y - height/2) - pig.pos.y < 20)
					pig.pos.y-= 4;
			}

			else if ((pig.pos.x > (x - width/2)) && (pig.pos.x < (x + length - width/2))){ 
				//console.log('isBelow');
				if (pig.pos.y - (y - height/2) < 20)
					pig.pos.y+= 4;
			}
		}
	}
}