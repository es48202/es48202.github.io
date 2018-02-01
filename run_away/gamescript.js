/*

Run Away!

a simple game for shits and giggles.

Use your arrow keys to evade the red dots.

and if anyone knows how to add the .png image to the enemies I would greatly appreciate the help!

*/
var canvas = document.getElementById("first");
var context = canvas.getContext("2d");
var img = document.getElementById("sprite");


var keys = [];
var speed = 3.6;
var width = 500;
var height = 500;
var eSpeed = 2.3;

var player = {
	x: width/2,
	y: height/2,
	r: 15
}
var enemy = {
	x: Math.random()*width,
	y: Math.random()*height,
	r: 9
}

var enemyTwo = {
	x: Math.random()*width,
	y: Math.random()*height,
	r: 9
}

var score=10;

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e) {
	delete keys[e.keyCode];
}, false);

function game(){
	update();
	render();
}

function update(){
	setKeys();
	
	playerControl();
	
	enemyMove();
	
	var dx = player.x - enemy.x;
	var dy = player.y - enemy.y;
	var distance = Math.sqrt(dx * dx + dy * dy);
	
	if(distance < player.r + enemy.r){
		process();
	}
	
	var tx = player.x - enemyTwo.x;
	var ty = player.y - enemyTwo.y;
	var distanceTwo = Math.sqrt(tx * tx + ty * ty);
	
	if(distanceTwo < player.r + enemyTwo.r){
		processTwo();
	}
	
	var dtx = enemy.x - enemyTwo.x;
	var dty = enemy.y - enemyTwo.y;
	var distanceThree = Math.sqrt(dtx * dtx + dty * dty);
	
	if(distanceThree < enemy.r + enemyTwo.r){
		processThree();
	}
	
	enemyTwoMove();
	
	if(score == 0) document.write("Game Over");
	if(score == 20) document.write("You Win!");

}

function render(){
	
	context.clearRect(0,0,width,height);
	
	context.drawImage(img, player.x - player.r, player.y - player.r);
	
	enemyRend();
	
	context.beginPath();
	context.fillStyle = "red";
	context.arc(enemyTwo.x, enemyTwo.y, enemyTwo.r, 0, Math.PI*2);
	context.fill();
	context.closePath();
	
	context.font = "bold 30px verdana"
	context.fillText(score, 10, 30);
}

function setKeys(){
	if(keys[38]) player.y-=speed;
	if(keys[40]) player.y+=speed;
	if(keys[37]) player.x-=speed;
	if(keys[39]) player.x+=speed;
	if(keys[83]) speed=speed*1.0225;
}

function enemyRend(){
	context.beginPath();
	context.fillStyle = "red";
	context.arc(enemy.x, enemy.y, enemy.r, 0, Math.PI*2);
	context.fill();
	context.closePath();
}

function playerControl(){
	if(player.x - player.r <= 1) player.x = 1 + player.r;
	if(player.x + player.r > width) player.x = width - player.r;
	if(player.y - player.r <= 1) player.y = 1 + player.r;
	if(player.y + player.r > width) player.y = width - player.r;
}

function enemyMove(){
		if(enemy.x < player.x && enemy.y > player.y) {
			enemy.x = enemy.x + eSpeed;
			enemy.y = enemy.y - eSpeed;
		}
		if(enemy.x > player.x && enemy.y > player.y) {
			enemy.x = enemy.x - eSpeed;
			enemy.y = enemy.y - eSpeed;
		}
		if(enemy.x < player.x && enemy.y < player.y) {
			enemy.x = enemy.x + eSpeed;
			enemy.y = enemy.y + eSpeed;
		}
		if(enemy.x > player.x && enemy.y < player.y) {
			enemy.x = enemy.x - eSpeed;
			enemy.y = enemy.y + eSpeed;
		}
}

function enemyTwoMove(){
		if(enemyTwo.x < player.x && enemyTwo.y > player.y) {
			enemyTwo.x = enemyTwo.x + eSpeed;
			enemyTwo.y = enemyTwo.y - eSpeed;
		}
		if(enemyTwo.x > player.x && enemyTwo.y > player.y) {
			enemyTwo.x = enemyTwo.x - eSpeed;
			enemyTwo.y = enemyTwo.y - eSpeed;
		}
		if(enemyTwo.x < player.x && enemyTwo.y < player.y) {
			enemyTwo.x = enemyTwo.x + eSpeed;
			enemyTwo.y = enemyTwo.y + eSpeed;
		}
		if(enemyTwo.x > player.x && enemyTwo.y < player.y) {
			enemyTwo.x = enemyTwo.x - eSpeed;
			enemyTwo.y = enemyTwo.y + eSpeed;
		}
}

function process(){
	score--;
	enemy.x = Math.random()*width;
	enemy.y = Math.random()*height;
}

function processTwo(){
	score--;
	enemyTwo.x = Math.random()*width;
	enemyTwo.y = Math.random()*height;
}

function processThree(){
	score++;
	enemy.x = Math.random()*width;
	enemy.y = Math.random()*height;
	enemyTwo.x = Math.random()*width;
	enemyTwo.y = Math.random()*height;
}

setInterval(function(){
	game();
},1000/30);

/*

Run Away!
created by Thomas Simpson
Copyright 2016

*/
