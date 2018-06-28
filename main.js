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

let theP1 = new Player1();
let alertCount = 0;



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



bulletCollisions();

}

//Collision Detection

function collides(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}

function bulletCollisions() {
  theP2.bullets.forEach(function(bullet) {
      if (collides(bullet, theP1)) {
        theP1.receiveDamage();
        bullet.active = false;
      }
  ;
  });
}



  playerCollisions = function(futurex, futurey){
    if(
      futurex + this.width >= theP1.x &&
       futurex <= theP1.x + theP1.width &&
       futurey + this.height >= theP1.y &&
       futurey <= theP1.y + theP1.height
      ){
        return false
  }
      return true
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
  theP1.drawShip();
}


// Player2
function Player2(spd, health, atk, name) {
  this.x = 800;
  this.y = 100;
  this.width = 50;
  this.height = 85;
  this.img = "./img/newShip.PNG";
  this.spd = 10;
  this.health = 1000;
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



//Player1


function Player1(spd, health, atk, name) {
  this.x = 500;
  this.y = 100;
  this.width = 50;
  this.height = 85;
  this.img = "./img/newShip.PNG";
  this.spd = 10;
  this.health = 1000;
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

Player1.prototype.drawShip = function() {
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
    canvas.drawImage(theImage, that.x, that.y, that.width, that.height);

};


Player1.prototype.receiveDamage = function() {
  this.health -= theP2.atk
  console.log(this.health);
  if (this.health <=1) {
    declareVictor();
  }
  
}


declareVictor = function() {
  if ((theP2.health <= 1 && theP1.health > 0) && alertCount ===0) {
    alert(
      `${theP2.name} has lost, and ${theP1.name} is victorious!`
    );
    alertCount ++
  } else if ((theP1.health <= 0 && theP2.health > 0) && alertCount ===0) {
    alert(
      `${theP1.name} has lost, and ${theP2.name} is victorious!`
    );
    alertCount ++;
  } else if ((theP1.health <= 0 && theP2.health <= 0) && (alertCount === 0)) {
    alert(`Two ace pilots have eliminated each other in deep dark space.`);
    alertCount++;
  } else {
    console.log('OVERKILL');
  }
};


// var something = (function() {
//   var executed = false;
//   return function() {
//       if (!executed) {
//           executed = true;
//           // do something
//       }
//   };
// })();
