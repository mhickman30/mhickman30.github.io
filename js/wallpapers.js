var firstName = "Matt Hickman";
var aye = document.getElementById("downlink");

document.onload = function() {
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
  //ctx.fillText(firstName, 316, 566);
  //aye.href = "/images/wallpapers/CapeTownWallpaper.png";
  console.log("href changed to /images/wallpapers/CapeTownWallpaper.png");
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
  //ctx.fillText(firstName, 316, 566);
  //aye.href = "/images/wallpapers/ShanghaiWallpaper.png"
  console.log("href changed to /images/wallpapers/ShanghaiWallpaper.png");
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
  //ctx.fillText(firstName, 316, 566);
  //aye.href = "/images/wallpapers/KyotoWallpaper.png";
  console.log("href changed to /images/wallpapers/KyotoWallpaper.png");
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
  //ctx.fillText(firstName, 316, 566);
  //aye.href = "/images/wallpapers/PortlandWallpaper.PNG";
  console.log("href changed to /images/wallpapers/PortlandWallpaper.PNG");
};
