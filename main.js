// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "main.js ready for action." );

  var theGame = new Game()
  var health = 300;
  var atk = 300;
  var namePlayer1 = prompt('What is the name of your ship');
  var namePlayer1 = prompt('What is the name of your ship');

  

  function Player (namePlayer1,namePlayer2, health, atk,){
    this.health= health;
    this.atk = atk;
}
// Var player function
  
Player.prototype.atk = function(){
  return this.atk
}

Player.prototype.health = function(){
  return this.health
}



























//DOM FUNCTIONS 
document.getElementById('startGameButton').onclick = function(){
  theGame = new Game();
  
  console.log('you clicked the button')
}






























});//END DOCUMENT READY FUNCTION