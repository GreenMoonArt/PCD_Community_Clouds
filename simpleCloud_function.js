// simpleCloud p5js function

function simpleCloud()
{
  angleMode(DEGREES);

	translate(width/2, height/2)	; // set origin to center of canvas
	strokeWeight(2);
  var a = width * 2/3;
  var b = a/2;


  stroke(0);
  fill(255);
  // add small circles around ellipse perimeter
  for(var angle = 0; angle < 360; angle += 14) 
      {
        var x = a/2 * cos(angle);
  			var y = b/2 * sin(angle);

        // vary circle size based on position on larger ellipse
        // assumes a > b
        if( (angle >= 45 && angle <= 135) || (angle >= 225 && angle <= 315) )
        	{
          ellipse(x, y, a/8, a/8);
        	}
        else if( (angle >= 135 && angle <= 150) || ( angle >= 210 && angle <= 225 ) 
               		||  (angle >= 315 && angle <= 330) || ( angle >= 30 && angle <= 45 ) )
					{
          ellipse(x, y, a/10, a/10);
					}
        else
        	{
          ellipse(x, y, a/13, a/13);
        	}
			}

  	// draw larger ellipse with no border over smaller circles
  	// large ellipse will "erase" inner halves of smaller circles
  	stroke(255);
  	ellipse(0, 0, a, b);

}

//register(simpleCloud, "Simple Cloud", "GreenMoonArt");
