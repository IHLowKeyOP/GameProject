//Notes: I need to figure out how to use hotkeys
//Global Variables
let CANVAS_WIDTH =  window.innerWidth;
let CANVAS_HEIGHT = window.innerHeight;
let canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas>");
let canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('#game-board');
let FPS = 60;
let theP2 = new Player2();
// Rate of fire
setInterval(function() {
  if(keydown.space) {
    theP2.shoot();
    
  }
}, 200);

// GameLoop
setInterval(function() {

  update();
  draw();
}, 1000/FPS);


//Game actions
function update(){ 
  //P2 shoot
  



  if(keydown.left && theP2.x > 0) {
    theP2.x -= theP2.spd;
  }
  if (keydown.right && theP2.x + theP2.width  < CANVAS_WIDTH) {
    theP2.x += theP2.spd;
  }


if(keydown.up && theP2.y > 0) {
  theP2.y -= theP2.spd;
}
if (keydown.down && theP2.y + theP2.height + 25 < CANVAS_HEIGHT) {
  theP2.y += theP2.spd;
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
      futurex + this.width >= CANVAS_WIDTH ||
      futurex <= 0 ||
      futurey + this.height >= CANVAS_HEIGHT ||
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
    speed: 15,
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




//Motion protection via DOM function
document.onkeydown = function(event) {
  
  if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'||event.key === ' '){
    event.preventDefault();}}
    




function draw() {
  canvas.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.fillStyle = "white";
  canvas.fillRect(0, 0, CANVAS_WIDTH,CANVAS_HEIGHT);
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
  this.spd = 10;
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