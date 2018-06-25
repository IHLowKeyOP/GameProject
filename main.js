var theGame 

$( document ).ready(function() {
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
  

  






















































  document.getElementById('start-game-button').onclick = function () {
    console.log('Start Button Clicked!');
    theGame = new Game();
    // Must discover how the canvas works
    theGameCanvas = new GameCanvas();
    theGameCanvas.createBoard();
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




/* THE WORKSHOP: GIANNINI'S CODE IN PROGRESS WILL GO HERE */







var spd = 10;
var health= 300;
var atk = 400;

//this ship is the balanced stat ship
function Ship(typ3,spd, health, atk,name){
  this.spd = spd;
  this.health = health;
  this.atk = atk;
  this.name = prompt('What will your ship be named?');
  this.typ3 = "Banshee";

}

function glassCannon(){
  spd = 25;
  health = 50;
  atk = 300;
}

// onclick insert ship type in to new ship function to give values 
 function glassCannon(typ3,spd, health, atk,name){
      Ship.call(this, spd, health, atk, this)

      this.spd = 10;
      this.health = 25;
      this.atk = 200;
      
  }

shipG1 = new glassCannon();


glassCannon.prototype = Object.create(Ship.prototype);
glassCannon.prototype.constructor = glassCannon;

console.log(shipG1)


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




















