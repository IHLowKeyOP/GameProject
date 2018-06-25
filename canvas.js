
// For Canvas, need to discover how canvas links to document
function GameCanvas(arg1) {
  this.ctx = document.getElementById('theCanvas').getContext('2d');
}


GameCanvas.prototype.createBoard = function () {
  $("canvas").css("background.color: white;")
  // this.ctx.clearRect(0, 0 , 1000, 700);
  this.ctx.fillStyle = '#FFF'
  this.ctx.fillRect(0,0,1000,700)
};


















































// $( document ).ready(function() {
  
//   console.log( "dom.js ready for action." );

//All DOM functions wrapped inside start-game-button function to not activate until game starts.



  
  //Spliced from hangman. Incorporating functionality for keys.
  // document.onkeydown = function (e) {
  //   if(theGame.checkLetter(e.key)){
  //     theGameCanvas.writeCorrectLetter(theGame.wordSoFar);
  //   } else{
  //     theGameCanvas.writeWrongLetter(e.key, theGame.errorsLeft);

  //     theGameCanvas.drawHangMan(shapes[9 - theGame.errorsLeft]);
  //   }
// });END DOCUMENT READY