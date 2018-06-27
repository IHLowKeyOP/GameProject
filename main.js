

let CANVAS_WIDTH = 1000;
let CANVAS_HEIGHT = 700;
let canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
let canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#game-board');
let FPS = 60;
let textX = 50;
let textY = 50;
let theP2 = new Player2();


setInterval(function() {
  update();
  draw();
}, 1000/FPS);


function update(){ 

  if(keydown.left) {
    theP2.x -= 30;
  }
  if (keydown.right) {
    theP2.x += 30;
  }


if(keydown.up) {
  theP2.y -= 30;
}
if (keydown.down) {
  theP2.y += 30;
}

}

Player2.prototype.canMove = function(futurex, futurey){
  if(
      futurex + this.width >= 1000 ||
      futurex <= 0 ||
      futurey + this.height >= 700 ||
      futurey <= 0
    ){
      return false
    }
    return true;

}




document.onkeydown = function(event) {
  
  if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'){
    event.preventDefault();}}
    




function draw() {
  canvas.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.fillStyle = "white";
  canvas.fillRect(0, 0, 1000,700);
  theP2.drawShip();
}


// Player2
function Player2(spd, health, atk, name) {
  this.x = 800;
  this.y = 100;
  this.width = 50;
  this.height = 85;
  this.img = "./img/newShip.PNG";
  this.spd = 25;
  this.health = 100;
  this.atk = 10;
  // this.name = prompt("Player 2, what will your ship be named?");
  console.log(this);
}

Player2.prototype.drawShip = function() {
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
    canvas.drawImage(theImage, that.x, that.y, that.width, that.height);

};