let CANVAS_WIDTH =  window.innerWidth;
let CANVAS_HEIGHT = window.innerHeight;
let canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
let canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#game-board');
let FPS = 60;
let theP2 = new Player2();


setInterval(function() {
  update();
  draw();
}, 1000/FPS);


function update(){ 

  if(keydown.left && theP2.x > 0) {
    theP2.x -= theP2.spd;
  }
  if (keydown.right && theP2.x + theP2.width  < CANVAS_WIDTH) {
    theP2.x += theP2.spd;
  }


if(keydown.up && theP2.y > 0) {
  theP2.y -= theP2.spd;
}
if (keydown.down && (theP2.y + theP2.height + 25  ) < CANVAS_HEIGHT) {
  theP2.y += theP2.spd;
}

}

Player2.prototype.canMove = function(futurex, futurey){
  if(
      futurex + this.width >= CANVAS_WIDTH ||
      futurex <= 0 ||
      futurey + this.height >= CANVAS_HEIGHT ||
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
  canvas.fillRect(0, 0, CANVAS_WIDTH,CANVAS_HEIGHT);
  theP2.drawShip();
}


// Player2
function Player2(spd, health, atk, name) {
  this.x = 800;
  this.y = 100;
  this.width = 50;
  this.height = 85;
  this.img = "./img/newShip.PNG";
  this.spd = 10;
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