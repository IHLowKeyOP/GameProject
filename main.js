function Game() {
  //Global Variables
  let CANVAS_WIDTH = window.innerWidth;
  let CANVAS_HEIGHT = window.innerHeight;

  let canvasElement = $(
    "<canvas width='" +
      CANVAS_WIDTH +
      "' height='" +
      CANVAS_HEIGHT +
      "'></canvas>"
  );
  let canvas = canvasElement.get(0).getContext("2d");
  canvasElement.appendTo("#game-board");
  let FPS = 60;
  let theP1 = new Player1();
  let theP2 = new Player2();
  let rock = new Asteroid();
  let rock2 = new Asteroid();
      rock2.x = ((CANVAS_WIDTH + 100) /2);
      rock2.height = 100;
      rock2.width = 100;
      rock2.img = "./img/ironhacklogo.png";
      
  let alertCount = 0;
  let health1 = document.getElementById("health1");
  let health2 = document.getElementById("health2");
  
  let tp = function rockTeleport(){
  if (rock.y +rock.height >= CANVAS_HEIGHT+100){
    rock.y = -100;
  }
}

let tp2 = function rock2Teleport(){
if (rock2.y+rock2.height <=-100) {
  rock2.y = CANVAS_HEIGHT+100;
}
}




  // GameLoop
  setInterval(function() {
    
    update();
    draw();
   
  }, 1000 / FPS);

  //Game actions
  function update() {
    tp();
    tp2();
    rock.y +=10;
    rock2.y -=10;
  
    health1.value = theP1.health;
    health2.value = theP2.health;

    //P2 shoot
    if (keydown.space) {
      theP2.shoot();
    }

    //P1 shoot
    if (keydown.r) {
      theP1.shoot();
    }

    //P2Move
    if (keydown.left && theP2.x > 0) {
      theP2.x -= theP2.spd;
    }
    if (keydown.right && theP2.x + theP2.width < CANVAS_WIDTH) {
      theP2.x += theP2.spd;
    }

    if (keydown.up && theP2.y > 0) {
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

    //P1Move
    if (keydown.a && theP1.x > 0) {
      theP1.x -= theP1.spd;
    }
    if (keydown.d && theP1.x + theP1.width < CANVAS_WIDTH) {
      theP1.x += theP1.spd;
    }

    if (keydown.w && theP1.y > 0) {
      theP1.y -= theP1.spd;
    }
    if (keydown.s && theP1.y + theP1.height + 25 < CANVAS_HEIGHT) {
      theP1.y += theP1.spd;
    }

    theP1.bullets.forEach(function(bullet) {
      bullet.update();
    });

    theP1.bullets = theP1.bullets.filter(function(bullet) {
      return bullet.active;
    });
    rockCollition();
    bulletCollisions();
  }

  //Collision Detection

  function collides(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
  

  

  var rockCollition = function() {
    if (collides(theP2, rock)) {
      theP2.receiveDamage();
      theP2.health - theP2.health;}
    if (collides(theP1, rock)) {
        theP1.receiveDamage();
        theP1.health - theP1.health;
    }
    if (collides(theP1, rock2)) {
      theP1.receiveDamage();
      theP1.health - theP1.health;}
      if (collides(theP2, rock2)) {
        theP2.receiveDamage();
        theP2.health - theP2.health;}
  };
  function bulletCollisions() {
    theP2.bullets.forEach(function(bullet) {
      if (collides(bullet, theP1)) {
        theP1.receiveDamage();
        bullet.active = false;
      }
      if(collides(bullet, rock)) {
        bullet.active = false; 
      }
      if(collides(bullet, rock2)) {
        bullet.active = false; 
      }
    });

    theP1.bullets.forEach(function(bullet) {
      if (collides(bullet, theP2)) {
        theP2.receiveDamage();
        bullet.active = false;
      }
      if(collides(bullet, rock)) {
        bullet.active = false; 
      }
      if(collides(bullet, rock2)) {
        bullet.active = false; 
      }
    });
  }

  playerCollisions = function(futurex, futurey) {
    if (
      futurex + this.width >= theP1.x &&
      futurex <= theP1.x + theP1.width &&
      futurey + this.height >= theP1.y &&
      futurey <= theP1.y + theP1.height
    ) {
      return false;
    }
    return true;
  };

  //  ASTERIED CONSTRUCTION FUNTION
  function Asteroid() {
    this.atk = 200;
    this.img = "./img/rock.png";
    this.spd = 12;
    this.width = 150;
    this.height = 150;
    this.x = ((CANVAS_WIDTH / 2) -200);
    this.y = 200;
  }
  Asteroid.prototype.drawRock = function() {
    var that = this;
    theImage2 = new Image();
    theImage2.src = that.img;
      canvas.drawImage(theImage2, that.x, that.y, that.width, that.height);

  };


  





  //Shooting Logic
  Player2.prototype.shoot = function() {
    var bulletPosition = theP2.midpoint();

    if (theP2.bullets.length < 1) {
      theP2.bullets.push(
        Bullet2({
          speed: 10,
          x: bulletPosition.x,
          y: bulletPosition.y
        })
      );
    }
  };

  Player1.prototype.shoot = function() {
    var bulletPosition = theP1.midpoint();

    if (theP1.bullets.length < 1) {
      theP1.bullets.push(
        Bullet({
          speed: 10,
          x: bulletPosition.x,
          y: bulletPosition.y
        })
      );
    }
    console.log("Pew Pew!");
  };

  //Bullet Logic
  //P1 Bullets
  function Bullet(I) {
    I.active = true;

    I.xVelocity = 30;
    I.yVelocity = 0;
    I.width = 40;
    I.height = 8;
    I.color = "#7FFF00";

    I.inBounds = function() {
      return (
        I.x >= 0 && I.x <= CANVAS_WIDTH && I.y >= 0 && I.y <= CANVAS_HEIGHT
      );
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

  //P2 Bullet
  function Bullet2(J) {
    J.active = true;

    J.xVelocity = -30;
    J.yVelocity = 0;
    J.width = 40;
    J.height = 10;
    J.color = "#ff0000";

    J.inBounds = function() {
      return (
        J.x >= 0 && J.x <= CANVAS_WIDTH && J.y >= 0 && J.y <= CANVAS_HEIGHT
      );
    };

    J.draw = function() {
      canvas.fillStyle = this.color;
      canvas.fillRect(this.x, this.y, this.width, this.height);
    };

    J.update = function() {
      J.x += J.xVelocity;
      J.y += J.yVelocity;

      J.active = J.active && J.inBounds();
    };

    return J;
  }

  //Motion protection via DOM function
  document.onkeydown = function(event) {
    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === " "
    ) {
      event.preventDefault();
    }
  };

  function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.fillStyle = "black";
    canvas.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    theP2.drawShip();
    theP1.drawShip();
    rock.drawRock();
    rock2.drawRock();
    theP2.bullets.forEach(function(bullet) {
      bullet.draw();
    });

    theP1.bullets.forEach(function(bullet) {
      bullet.draw();
    });
  }

  // Player2
  function Player2(spd, health, atk, name) {
    this.x = CANVAS_WIDTH - 100;
    this.y = 200;
    this.rockDamage = 200;
    this.width = 50;
    this.height = 85;
    this.img = "./img/newShip.PNG";
    this.spd = 10;
    this.health = 200;
    this.atk = 50;
    this.name = prompt("Player 2, what will your ship be named?");
    this.bullets = [];
    this.midpoint = function() {
      return {
        x: this.x + this.width / 2,
        y: (this.y -4 + this.height / 2)
      };
    };
  }

  function drawImageRot(img, x, y, width, height, deg) {}

  Player2.prototype.drawShip = function() {
    var that = this;
    theImage = new Image();
    theImage.src = that.img;
    // canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
    //Convert degrees to radian
    var rad = (270 * Math.PI) / 180;

    //Set the origin to the center of the image
    canvas.translate(that.x + that.width / 2, that.y + that.height / 2);

    //Rotate the canvas around the origin
    canvas.rotate(rad);

    //draw the image
    
    canvas.drawImage(
      theImage,
      (that.width / 2) * -1,
      (that.height / 2) * -1,
      that.width,
      that.height
    );

    //reset the canvas
    canvas.rotate(rad * -1);
    canvas.translate(
      (that.x + that.width / 2) * -1,
      (that.y + that.height / 2) * -1
    );
  };

  Player2.prototype.receiveDamage = function() {
    this.health -= theP1.atk;
    console.log(this.health);
    if (this.health <= 1) {
      declareVictor();
    }
  };



  
  //Player1

  function Player1(spd, health, atk, name) {
    this.x = 100;
    this.y = 200;
    this.width = 50;
    this.height = 85;
    this.img = "./img/newShip.PNG";
    this.spd = 10;
    this.health = 200;
    this.atk = 50;
    this.name = prompt("Player 1, what will your ship be named?");
    this.bullets = [];
    this.midpoint = function() {
      return {
        x: this.x + (this.width / 2 + 10),
        y: (this.y -4 + this.height / 2),
      };
    };
  }

  Player1.prototype.drawShip = function() {
    var that = this;
    theImage = new Image();
    theImage.src = that.img;
    // canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
    //Convert degrees to radian
    var rad = (90 * Math.PI) / 180;

    //Set the origin to the center of the image
    canvas.translate(that.x + that.width / 2, that.y + that.height / 2);

    //Rotate the canvas around the origin
    canvas.rotate(rad);

    //draw the image
    canvas.drawImage(
      theImage,
      (that.width / 2) * -1,
      (that.height / 2) * -1,
      that.width,
      that.height
    );

    //reset the canvas
    canvas.rotate(rad * -1);
    canvas.translate(
      (that.x + that.width / 2) * -1,
      (that.y + that.height / 2) * -1
    );
  };

  Player1.prototype.receiveDamage = function() {
    this.health -= theP2.atk;
    console.log(this.health);
    if (this.health <= 1) {
      declareVictor();
    }
  };

  declareVictor = function() {
    if (theP2.health <= 1 && theP1.health > 0 && alertCount === 0) {
      alert(`${theP2.name} has lost, and ${theP1.name} is victorious!`);
      alertCount++;
    } else if (theP1.health <= 0 && theP2.health > 0 && alertCount === 0) {
      alert(`${theP1.name} has lost, and ${theP2.name} is victorious!`);
      alertCount++;
    } else if (theP1.health <= 0 && theP2.health <= 0 && alertCount === 0) {
      alert(`Two ace pilots have eliminated each other in deep dark space.`);
      alertCount++;
    } else {
      console.log("OVERKILL");
    }
  };
}







document.getElementById("start-game-button").onclick = function() {
  console.log("Start Button Clicked!");
  $('.hideMe').toggle();
  Game();
};