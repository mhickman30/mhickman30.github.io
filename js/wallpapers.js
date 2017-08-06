var firstName = "Matt Hickman";

function save() {
	console.log("Save");
	var canvas = document.getElementById("myCanvas");

	var img = canvas.toDataURL("image/png");
	var w = window.open("");
	w.document.write('<img src="' + img + '"/>');
	console.log("Written");
}

document.getElementById("one").onclick = function() {
	console.log("One");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("one");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
};

document.getElementById("two").onclick = function() {
	console.log("Two");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("two");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
};

document.getElementById("three").onclick = function() {
	console.log("Three");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("three");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
};

document.getElementById("four").onclick = function() {
	console.log("Four");
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("four");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
};







function downloadCanvas(link, canvasId, filename) {
	link.href = document.getElementById(canvasId).toDataURL();
	link.download = filename;
}

/**
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById("download").addEventListener(
	"click",
	function() {
		console.log("Download");
		downloadCanvas(this, "myCanvas", "test.png");
	},
	false
);
