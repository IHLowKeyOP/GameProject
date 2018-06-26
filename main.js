//Global variables
var blah;
var theGame;
var theImage;



//Document Ready function for loading
$(document).ready(function() {
  var ctx = document.getElementById("theCanvas").getContext("2d");
  console.log("main.js ready for action.");
  function Game(ship1, ship2, obstacles, powerups) {
    this.ship1 = {};
    this.ship2 = {};
    this.obstacles = [];
    this.powerups = [];
    // this.declareVictor HERE YOU WILL LINK METHOD for declaring the winner/loser. Reference hangman.
    //declareVictor text below.
  }

  //Declare Victor Method. Activate via receive damage method to trigger when someone's health = 0;
  Game.prototype.declareVictor = function() {
    if (this.ship1.health === 0 && this.ship2.health !== 0) {
      alert(
        `${this.ship1.name} has lost, and ${this.ship2.name} is victorious!`
      );
    } else if (this.ship2.health === 0 && this.ship1.health !== 0) {
      alert(
        `${this.ship2.name} has lost, and ${this.ship1.name} is victorious!`
      );
    } else {
      alert(`Two ace pilots have eliminated each other in deep dark space.`);
    }
  };


// Player 1
  function Player1(spd, health, atk, name) {
    this.x = 475;
    this.y = 590;
    this.width = 50;
    this.height = 85;
    this.img = "img/newShip.PNG";
    this.spd = spd;
    this.health = health;
    this.atk = atk;
    // this.name = prompt("Player 1, what will your ship be named?");
    console.log(this);
  }

  Player1.prototype.drawShip = function() {
    var that = this;
    theImage = new Image();
    theImage.src = that.img;
    theImage.onload = function() {
      ctx.drawImage(theImage, that.x, that.y, that.width, that.height);
    };
  };
  
  
  // Player2
  function Player2(spd, health, atk, name) {
    this.x = 800;
    this.y = 100;
    this.width = 50;
    this.height = 85;
    this.img = "img/newShip.PNG";
    this.spd = 25;
    this.health = health;
    this.atk = atk;
    // this.name = prompt("Player 2, what will your ship be named?");
    console.log(this);
  }


  Player2.prototype.drawShip = function() {
    var that = this;
    theImage = new Image();
    theImage.src = that.img;
    theImage.onload = function() {
      ctx.drawImage(theImage, that.x, that.y, that.width, that.height);
    };
  };


  //Start Player 2 Motion Controls
  document.onkeydown = function(event) {
    ctx.clearRect(theP2.x, theP2.y, theP2.width, theP2.height);
    if (event.key === "ArrowLeft") {
      theP2.x -= theP2.spd;
      console.log(theP2);
    } else if (event.key === "ArrowRight") {
      theP2.x += theP2.spd;
      console.log("right");
    } else if (event.key === "ArrowUp") {
      theP2.y -= theP2.spd;
      console.log("up");
    } else if (event.key === "ArrowDown") {
      theP2.y += theP2.spd;
      console.log("down");
    }
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0,0,1000,700);

    ctx.drawImage(theImage, theP2.x, theP2.y, theP2.width, theP2.height);
    {
      event.preventDefault();
      blah = setInterval(function() {
        Player2.prototype.controls(event.key, 1);
      }, 10);
    }
  };
  Player2.prototype.controls = function(whichCode, speed) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
    switch (whichCode) {
      case "ArrowLeft":
        {
          this.x -= this.spd;
          console.log();
        }
        break;
      case "ArrowRight":
        {
          this.x += this.spd;
          console.log("right");
        }
        break;
      case "ArrowUp":
        {
          this.y -= this.spd;
          console.log("up");
        }
        break;
      case "ArrowDown": {
        this.y += this.spd;
        console.log("down");
      }
    }
  };
  // End Player 2 motion controls








  // DOM FUNCTIONS SHOULD STAY AT THE BOTTOM
  document.getElementById("start-game-button").onclick = function() {
    console.log("Start Button Clicked!");
    theGame = new Game();
    // Must discover how the canvas works
    theGameCanvas = new GameCanvas();
    theGameCanvas.createBoard();
    theP1 = new Player1();
    theP2 = new Player2();
    theP1.drawShip();
    theP2.drawShip();
  };
  

  Player2.prototype.controls();
}); //END DOCUMENT READY FUNCTION

