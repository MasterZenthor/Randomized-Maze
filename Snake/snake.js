function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
  this.total = 0;
  this.tail = [];


    this.eat = function(pos){
      var d = dist(this.x, this.y, pos.x, pos.y);
      if(d < 1){
        this.total++;
        return true;
      } else{
        return false;
      }
    }

    this.dir = function(x, y){
        /*
          This if statement disallows the direction to
          be changed to the opposite of the reverse direction

                 x   y
          up     0  -1  // allow change to left or right 1,0
          down   0   1
          left  -1   0  // allow change to up or down 0,1
          right  1   0

          we can check if a reverse happens by seeing if the absolute
          values of x and y change from current direction to new direction
        */
        if (Math.abs(x) === Math.abs(this.xspeed) &&
            Math.abs(y) === Math.abs(this.yspeed))
        {
          /*
            if we reach this return statement,
            we leave the function before the xspeed and yspeed
            are updated
          */
          return
        }

        this.xspeed = x;
        this.yspeed = y;
    }
    this.death = function() {
      for(var i = 0; i < this.tail.length; i++){
        var pos = this.tail[i];
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
          this.total = 0;
          this.tail = [];
        }
      }
    }

  this.update = function() {
    if(this.total === this.tail.length){
    for(var i = 0; i < this.tail.length-1; i++){
      this.tail[i] = this.tail[i+1];
    }
  }

    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

	this.show = function () {
    fill(255);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
		rect(this.x, this.y, scl, scl);

	}
}
