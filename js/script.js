
 //assigns a random number beween 1 & 1oo 
 let randomNum = Math.floor(Math.random() * 100) + 1;

 // stores references to the .results paragraphs, will be used to insert values into the paragraphs
 const guesses = document.querySelector('.guesses');
 const lastResult = document.querySelector('.lastResult');
 const hiOrLow = document.querySelector('.hiOrLow');
 
 // stores references to the input and submit button, 
 const guessSubmit = document.querySelector('.guessSubmit');
 const guessField = document.querySelector('.guessField');
 
 
 
 let guessCount = 1;
 let resetButton;
 
 
 checkGuess = ()=> {
     const userGuess = Number(guessField.value);
     if (guessCount === 1) {
         guesses.textContent = 'Previous Guesses:';     
     }
     guesses.textContent += userGuess + ' ';
 
     if (userGuess === randomNum)  {
         lastResult.textContent = 'Awesome, You Got It!';
         lastResult.style.backgroundColor = 'green'
         hiOrLow.textContent = '';
         setGameOver();
     } else if (guessCount === 10) {
         lastResult.textContent = `No More Guesses !!!Game Over!!!`;
         hiOrLow.textContent = '';   
     }else{
         lastResult.textContent = 'Wrong Answer, Try Again!';
         lastResult.style.backgroundColor = 'red';
         if (userGuess < randomNum) {
             hiOrLow.textContent = 'Your Guess was too low';
             
         }else if (userGuess > randomNum) {
             hiOrLow.textContent = 'Your Guess was too high';   
         }
     }
 
     guessCount ++;
     guessField.textContent = '';
     guessField.focus();
 };
 
 guessSubmit.addEventListener('click', checkGuess);
 
 
 //defining game over function
 setGameOver = () => {
     guessField.disable = true;
     guessSubmit.disable = true;
     resetButton = document.createElement('button');// creating a new html element(a button) using the DOM 
     resetButton.textContent = 'Start New Game'; //
     document.body.append(resetButton); // adding that button to the bottom of my existing HTML
     resetButton.addEventListener('click', resetGame); // add an event listener to it to run a resetGame function, that I will define next!
 }




//  Defining the resetGame Function, Adding Reset Button and resetting game
 resetGame = () => {
     guessCount = 1

     const resetParas = document.querySelectorAll('.results p'); //selecting/referencing all child paragraphs in results

     for(const resetpara of resetparas) { //looping through paragraphs in results 
         resetpara.textContent = '';
     } 
     
     resetButton.parentNode.removechild(resetButton); // removing reset button that was previously added

     
     guessSubmit.disable = false;
     guessField.disable = fase;
     guessField.value = ''; 
     guessField.focus();

     lastResult.style.backgroundColor = 'white'

     randomNum = Math.floor(Math.random() * 100 ) + 1;
 }