// weird comment 
var theGame;
var theImage;

$( document ).ready(function() {
  var ctx = document.getElementById('theCanvas').getContext('2d');

  console.log( "main.js ready for action." );



  function Game(ship1, ship2, obstacles, powerups) {
    this.ship1 = {};
    this.ship2 = {};
    this.obstacles = [];
    this.powerups = [];
    // this.declareVictor HERE YOU WILL LINK METHOD for declaring the winner/loser. Reference hangman.
    //declareVictor text below.
  }

 

  //IN THE SHIP RECEIVEDAMAGE METHOD, INCLUDE THIS METHOD FOR THE GAME TO CHECK WHO RECEIVED DAMAGE.
  //this needs testing

  this
  Game.prototype.declareVictor = function(){
    if (this.ship1.health ===0 && this.ship2.health !==0) {
      alert(`${this.ship1.name} has lost, and ${this.ship2.name} is victorious!`);
    } else if (this.ship2.health ===0 && this.ship1.health !==0){
      alert(`${this.ship2.name} has lost, and ${this.ship1.name} is victorious!`);
    } else {
      alert(`Two ace pilots have eliminated each other in deep dark space.`);
    }
  }
  

  































/* THE WORKSHOP: GIANNINI'S CODE IN PROGRESS WILL GO HERE */


var spd = 10;
var health= 300;
var atk = 400;
var player1 = [];
var palyer2 = [];

//this ship is the balanced stat ship constructor
// This is the balanced ship with balanced stats

function Ship(spd, health, atk,name){
  // this.x = 475;
  // this.y = 590;
  // this.width = 50;
  // this.height = 85;
  // this.img = 'img/newShip.PNG';   
  this.spd = spd;
  this.health = health;
  this.atk = atk;
  this.name = prompt('What will your ship be named?');
  console.log(this);  
}


Ship.prototype.drawShip = function(){
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
  
  theImage.onload = function(){
    ctx.drawImage(theImage, that.x, that.y, that.width, that.height)
  }
}




// PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 PLAYER 1 
function Player1(spd, health, atk,){

  
}
Player1.prototype = Object.create(Ship.prototype);
Player1.prototype.constructor = Player1
Player1.prototype.spawn = 





















































// Car.prototype.move = function(whichKey, speed){
  //   ctx.clearRect(this.x, this.y, this.width, this.height);
  
  //     case 'ArrowLeft':
  //     if(this.canMove(this.x - speed, this.y)){
    //       this.x -=speed;
    //     }
    //     break;
    //     case 'ArrowRight': 
    //     if(this.canMove(this.x + speed, this.y)){
      //       this.x +=speed;
      //     }
      //     break;
      //     case 'ArrowUp':
      //     if(this.canMove(this.x, this.y -speed)){
        //       this.y -= speed;
        //     }
        //     break;
        //     case 'ArrowDown': 
        //     if(this.canMove(this.x, this.y + speed)){
          //       this.y +=speed;
          //     }
          //   }
          //   ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
          // }
          
          // Car.prototype.canMove = function(futurex, futurey){
            //   if(
              //     futurex + this.width >= currentGame.obstacle.x &&
              //      futurex <= currentGame.obstacle.x + currentGame.obstacle.width &&
              //      futurey + this.height >= currentGame.obstacle.y &&
              //      futurey <= currentGame.obstacle.y + currentGame.obstacle.height
              //     ){
                //       return false
                //     } else if(
                  //       futurex + this.width >= 500 ||
                  //       futurex <= 0 ||
                  //       futurey + this.height >= 700 ||
                  //       futurey <= 0
                  //     ){
                    //       return false
                    //     }
                    //     return true;
                    
                    // }
                    
                    
                    
                    
                    
                    
                    
function glassCannon(){
  spd = 25;
  health = 50;
  atk = 300;
  
}

// onclick insert ship type in to new ship function to give values 
function glassCannon(typ3,spd, health, atk,name){
  Ship.call(spd, health, atk, this)
  
  this.spd = 10;
  this.health = 25;
  this.atk = 200;
  
}

shipG1 = new glassCannon();
                    
                    
                  
                  //   switch(whichKey){
glassCannon.prototype = Object.create(Ship.prototype);
glassCannon.prototype.constructor = glassCannon;




// // ship.prototype.atk = function(amountOfDamage){
// //     return this.atk;
// // }

// // ship.prototype.receiveDamage= function(amountOfDamage){
// //     this.health -= damage;
// // }









// // ship.prototype.atk = function(amountOfDamage){
// //     return this.atk;
// // }

// // ship.prototype.receiveDamage= function(amountOfDamage){
// //     this.health -= damage;
// // }



// ship.prototype.atk = function(amountOfDamage){
//     return this.atk;
// }

// ship.prototype.receiveDamage= function(amountOfDamage){
//     this.health -= damage;
// }




















//MOTION CONTROLS METHOD SET UP FOR SHIP
 


// motion controls:


// Player 1 Motion controls:


// Left: q
// Right:z
// Forward:s
// Back:a
// Rotate counterclockwise:w
// rotate clockwise:x
// shooting: leftcapslock
// =======
// //DOM FUNCTIONS 
// document.getElementById('startGameButton').onclick = function(){
//   theGame = new Game();
  
//   console.log('you clicked the button')
// }


// Player 2 Motion controls:

// Left:  left arrow 
// Right: right arrow
// Forward: forward arrow
// Back: back arrow
// Rotate counterclock: /
// rotate clockwise: right shift
// shoot: .......


// DOM FUNCTIONS SHOULD STAY AT THE BOTTOM 
document.getElementById('start-game-button').onclick = function () {
  console.log('Start Button Clicked!');
  theGame = new Game();
  // Must discover how the canvas works
  theGameCanvas = new GameCanvas();
  theGameCanvas.createBoard();
  theShip = new Ship(); 
  theGame.ship1 = theShip;
  theGame.ship1.drawShip(); 
}




//Rewrite this code for the motion controls method on the ship.
document.onkeydown = function (e) {
//  theGame.ship.motion(e.code))
if (event.code === 'ArrowLeft'|| event.code ==='ArrowRight'|| event.code ==='ArrowUp'|| event.code ==='ArrowDown'
|| event.code === 'CapsLock'||event.code === 'ShiftRight'){
  event.preventDefault();
  console.log('no scrolling should occur here');
  }
}



});//END DOCUMENT READY FUNCTION













