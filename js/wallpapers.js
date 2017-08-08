var firstName = "Matt Hickman";
var aye = document.getElementById("downlink");

document.onload = function(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("one");
	ctx.drawImage(img, 0, 0, 324, 576);
	ctx.font = "18px Dancing Script";
	ctx.fillStyle = "white";
	ctx.textAlign = "right";
	ctx.fillText(firstName, 316, 566);
};

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
	aye.href = "/images/wallpapers/IMG_9238-signed.png";
	console.log("href changed to /images/wallpapers/IMG_9238-signed.png");
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
	aye.href = "/images/wallpapers/IMG_9304-signed.png"
	console.log("href changed to /images/wallpapers/IMG_9304-signed.png");
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
	aye.href = "/images/wallpapers/MDH_5098-signed.png";
	console.log("href changed to /images/wallpapers/MDH_5098-signed.png");
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
	aye.href = "/images/wallpapers/MDH_8479-signed.png";
	console.log("href changed to /images/wallpapers/MDH_8479-signed.png");
};
