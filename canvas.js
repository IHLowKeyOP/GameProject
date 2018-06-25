
// For Canvas, need to discover how canvas links to document
// function theGameCanvas(secretWord) {
//   this.ctx = document.getElementById('something').getContext('2d');
// }


// theGameCanvas.prototype.createBoard = function () {
//   this.ctx.clearRect(0,0,1200,800);
// };


















































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