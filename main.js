

//Global variables
var blah;
var blah2;
var theGame;
var theImage;



  var ctx = document.getElementById("theCanvas").getContext("2d");
  console.log("main.js ready for action.");
  function Game(ship1, ship2, obstacles, powerups) {
    this.obstacles = [];
    this.powerups = [];
    // this.declareVictor HERE YOU WILL LINK METHOD for declaring the winner/loser. Reference hangman.
    //declareVictor text below.
  }

  //Declare Victor Method. Activate via receive damage method to trigger when someone's health = 0;
  Game.prototype.declareVictor = function() {
    if (this.Player1.health === 0 && this.Player2.health !== 0) {
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

  
  // Player2
  function Player2(spd, health, atk, name) {
    this.x = 800;
    this.y = 100;
    this.width = 50;
    this.height = 85;
    this.img = "img/newShip.PNG";
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
    theImage.onload = function() {
      ctx.drawImage(theImage, that.x, that.y, that.width, that.height);
    };
  };


  //Start Player 2 Motion Controls

  Player2.prototype.move = function(whichKey, speed){
    ctx.clearRect(this.x, this.y, this.width, this.height);
  
    switch(whichKey){
      case 'ArrowLeft':
      if(this.canMove(this.x - speed, this.y)){
        this.x -=speed;
        console.log(this);
      }
      break;
      case 'ArrowRight': 
      if(this.canMove(this.x + speed, this.y)){
        this.x +=speed;
        console.log(this);
      }
      break;
      case 'ArrowUp':
      if(this.canMove(this.x, this.y -speed)){
        this.y -= speed;
        console.log(this);
      }
      break;
      case 'ArrowDown': 
      if(this.canMove(this.x, this.y + speed)){
        this.y +=speed;
        console.log(this);
      }
      break;
    }
    ctx.fillStyle = '#FFF'
    ctx.fillRect(0,0,1000,700)
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
    
  }



  //CAN MOVE: This will set up so that if this touches any obstacle/weapon, something triggered;
  //If a powerup, set a prototype to change stats.
  //If an asteroid/powerdown/bullet/enemy ship, trigger a prototype to receive damage/lose stats.
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
//End Player 2 motion controls



Player2.prototype.pewPew = function () {
  console.log('pewpew!')
}






  // DOM FUNCTIONS SHOULD STAY AT THE BOTTOM
  document.getElementById("start-game-button").onclick = function() {
    console.log("Start Button Clicked!");
    theGame = new Game();
    theGameCanvas = new GameCanvas();
    theGameCanvas.createBoard();
    theP2 = new Player2();
    theGame.Player2 = theP2;
    theGame.Player2.drawShip();
  };


  document.onkeydown = function(event) {
    clearInterval(blah);
    clearInterval(blah2);
    if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'){
      event.preventDefault();

       blah = setInterval(function(){
        theP2.move(event.key, 8);
      }, 0);
      
      
    } if (event.key === '.') {
      blah2 = setInterval(function(){
        theP2.pewPew();
      },10);
    }
    
  }

  document.onkeyup = function(){
    clearInterval(blah);
    clearInterval(blah2)
  }
  


