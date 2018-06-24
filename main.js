// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "main.js ready for action." );




// var spd = 10;
// var health= 300;
// var atk = 400;

// //this ship is the balanced stat ship
// function Ship(typ3,spd, health, atk,name){
//   this.spd = spd;
//   this.health = health;
//   this.atk = atk;
//   this.name = prompt('What is the name of your ship');
//   this.typ3 = "red";

// }

// function glassCannon(){
//   spd = 25;
//   health = 50;
//   atk = 300;
// }

// // onclick insert ship type in to new ship function to give values 
//  function glassCannon(typ3,spd, health, atk,name){
//       Ship.call(this, spd, health, atk, this)

//       this.spd = 100;
//       this.health = 1 ;
//       this.atk = 59900;
      
//   }e

// shipG1 = new glassCannon();


// glassCannon.prototype = Object.create(Ship.prototype);
// glassCannon.prototype.constructor = glassCannon;

// console.log(shipG1)


// // ship.prototype.atk = function(amountOfDamage){
// //     return this.atk;
// // }

// // ship.prototype.receiveDamage= function(amountOfDamage){
// //     this.health -= damage;
// // }

























//DOM FUNCTIONS 
document.getElementById('startGameButton').onclick = function(){
  theGame = new Game();
  
  console.log('you clicked the button')
}






























});//END DOCUMENT READY FUNCTION