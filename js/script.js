var html = '';
var redColor;
var greenColor;
var blueColor;
var rgbColor;

function getRandomColorValue(){
	return Math.floor(Math.random() * 256);
}

function getRandomRGB (){
	var theRGB;
	theRGB = 'rgb(';
	for (var i = 0; i < 3; i++) {
		theRGB += getRandomColorValue();
		if (i != 2) {
			theRGB += ',';
		};
	};
	theRGB +=')';
	
	console.log(theRGB);

	return theRGB;
}


for (var i = 0; i < 10; i++) {
	// redColor = Math.floor(Math.random() * 256 );
	// greenColor = Math.floor(Math.random() * 256 );
	// blueColor = Math.floor(Math.random() * 256 );
	// rgbColor = 'rgb(' + redColor + ',' + greenColor + ',' + blueColor + ')';
	rgbColor = getRandomRGB();
	html += '<div style="background-color:' + rgbColor + '"></div>';
};



document.write(html);