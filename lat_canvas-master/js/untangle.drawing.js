if (untangleGame === undefined) {
var untangleGame = {};
}

function randWarna() {
	var r=20*Math.random()|10,
	    g=100*Math.random()|5,
	    b=200*Math.random()|10;
	return 'rgb(' + r +',' + g + ',' + b + ')';
}
untangleGame.drawCircle = function(x, y, radius) {
var ctx = untangleGame.ctx;
ctx.fillStyle = randWarna();
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI*2, true);
ctx.closePath();
ctx.fill();
};