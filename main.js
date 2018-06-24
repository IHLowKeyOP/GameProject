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
      alert(`${this.ship1.name} has lost, and ${ship2.name} is victorious!`);
    } else if (ship2.health ===0 && ship1.health !==0){
      alert(`${ship2.name} has lost, and ${ship1.name} is victorious!`);
    } else {
      alert(`Two ace pilots have eliminated each other in deep dark space.`);
    }
  }
  

  






















































  document.getElementById('start-game-button').onclick = function () {
    console.log('Start Button Clicked!');
    theGame = new Game();
  }
  











});//END DOCUMENT READY FUNCTION




/* THE WORKSHOP: GIANNINI'S CODE IN PROGRESS WILL GO HERE






































//MOTION CONTROLS METHOD SET UP FOR SHIP
  //Rewrite this code for the motion controls method on the ship.
  // document.onkeydown = function (e) {
  //   if(theGame.checkLetter(e.key)){
  //     theGameCanvas.writeCorrectLetter(theGame.wordSoFar);
  //   } else{
  //     theGameCanvas.writeWrongLetter(e.key, theGame.errorsLeft);

  //     theGameCanvas.drawHangMan(shapes[9 - theGame.errorsLeft]);
  //   }


motion controls:


Player 1 Motion controls:

Left: q
Right:z
Forward:s
Back:a
Rotate counterclockwise:w
rotate clockwise:x
shooting: leftcapslock

Player 2 Motion controls:

Left:  left arrow 
Right: right arrow
Forward: forward arrow
Back: back arrow
Rotate counterclock: /
rotate clockwise: right shift
shoot: .......





















*/