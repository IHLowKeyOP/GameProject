// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "main.js ready for action." );


  function Game(ship1, ship2, obstacles, powerups) {
    this.ship1 = {};
    this.ship2 = {};
    this.obstacles = [];
    this.powerups = [];
    this.celebrateActivation = function(){
      console.log('the game is running!');
    };
  }

 
  


























































  document.getElementById('start-game-button').onclick = function () {
    console.log('Start Button Clicked!');
    var theGame = new Game();
    theGame.celebrateActivation();
  }
  
  









});//END DOCUMENT READY FUNCTION