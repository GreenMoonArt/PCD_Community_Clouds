
var delayTime = 0;
var a = 0;
var b = 0;


function setup() { 
  createCanvas(600, 600);
  angleMode(DEGREES);

  a = width / 2;   		// major (horizontal) axis
	b = a / 2;				 	// minor (vertical) axis

  delayTime = millis();
} 


function draw() { 
  background(220);
  translate(width/2, height/2)	; // set origin to center of canvas
	strokeWeight(2);

  	//var perimeter = 2 * PI * sqrt( (a^2 + b^2) / 2 );

  	stroke(0);
  	fill(255);
  	// add small circles around ellipse perimeter
  	for(var i = 0; i < 360; i += 14) 
      {
        var x = a/2 * cos(i);
  			var y = b/2 * sin(i);

        // vary circle size based on position on larger ellipse
        // assumes a > b
        if( (i >= 45 && i <= 135) || (i >= 225 && i <= 315) )
        	{
          ellipse(x, y, a/8, a/8);
        	}
        else if( (i >= 135 && i <= 150) || ( i >= 210 && i <= 225 ) 
               		||  (i >= 315 && i <= 330) || ( i >= 30 && i <= 45 ) )
					{
          ellipse(x, y, a/10, a/10);
					}
        else
        	{
          ellipse(x, y, a/13, a/13);
        	}

			}

  	// draw large ellipse with no border over smaller circles
  	// large ellipse will "erase" inner halves of smaller circles
  	stroke(255);
  	ellipse(0, 0, a, b);

	if (mouseIsPressed)
  {
  	// periodically increase the size of ellipse 
  	if (millis() - delayTime >= 100)
    	{ 
        a *= 1.1;
  			b *= 1.1;
        delayTime = millis();
      }
  }

  	// if cloud is off the screen, start over again
  	if ( a > 2* width || b > 2 * height)
    	{
      	a = width / 20;
        b = a / 2;
    	}

  fill(50);
  text("Hold in mouse button to move cloud", -width/2 * 0.9, height/2 * 0.9);
}
