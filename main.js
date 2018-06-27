//Notes: I need to figure out how to use hotkeys


//Global Variables
let CANVAS_WIDTH = 1000;
let CANVAS_HEIGHT = 700;
let canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
let canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#game-board');
let FPS = 60;
let textX = 50;
let textY = 50;
let theP2 = new Player2();


// GameLoop
setInterval(function() {
  update();
  draw();
}, 1000/FPS);


//Game actions
function update(){ 
  //P2 shoot
  if(keydown.space) {
    theP2.shoot();
  }


  //P2 motion
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


theP2.bullets.forEach(function(bullet) {
  bullet.update();
});

theP2.bullets = theP2.bullets.filter(function(bullet) {
  return bullet.active;
});


}

//Motion Detection
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

//Shooting Logic
Player2.prototype.shoot = function () {
  var bulletPosition = theP2.midpoint();

  theP2.bullets.push(Bullet({
    speed: 5,
    x: bulletPosition.x,
    y: bulletPosition.y
  }));
  console.log('Pew Pew!')
}

//Bullet Logic 

function Bullet(I) {
  I.active = true;

  I.xVelocity = 0;
  I.yVelocity = -I.speed;
  I.width = 3;
  I.height = 6;
  I.color = "#000";

  I.inBounds = function() {
    return I.x >= 0 && I.x <= CANVAS_WIDTH &&
      I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  I.draw = function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
}


// player.shoot = function() {
//   
// };





//Motion protection via DOM function
document.onkeydown = function(event) {
  
  if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'||event.key === ' '){
    event.preventDefault();}}
    




function draw() {
  canvas.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.fillStyle = "white";
  canvas.fillRect(0, 0, 1000,700);
  theP2.drawShip();
  theP2.bullets.forEach(function(bullet) {
    bullet.draw();
  });
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
  this.bullets = [];
  this.midpoint = function() {
    return {
      x: this.x + this.width/2,
      y: this.y + this.height/2
    };
  };
}

Player2.prototype.drawShip = function() {
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
    canvas.drawImage(theImage, that.x, that.y, that.width, that.height);

};