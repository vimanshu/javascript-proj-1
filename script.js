'use strict';
// DOM Manipulation
// structured representation of HTML documents in a tree like structure.

console.log(document.querySelector('.message').textContent);

// manipulated message using dom
//document.querySelector('.message').textContent = 'Correct Number 🥳!!'

// select .number and .score

//document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// select .guess
// input field we use value property
//document.querySelector('.guess').value=10;

// handling of a click of a button

// we use a event listener
// certain event to happen and react to it

// for example a click
// selecting .btn-check

// write a function generate random number b/w 1 and 20 
let guess_num=Math.floor((Math.random()*20)+1);
console.log(guess_num);
let score =Number(document.querySelector('.score').textContent);


document.querySelector('.btn-check').addEventListener(
    'click', // name of the event, function to handle the event
    function(){
        // what should happen, like reacting to the click
        //console.log(document.querySelector('.guess').value);
         const user_guess = Number(document.querySelector('.guess').value);
        //  const guess_num = document.querySelector('.number').textContent;

        if (score === 0){
            document.querySelector('.message') = 'You Lost 😭';
        }
        if (user_guess === guess_num){
            // add a green background
            document.querySelector('body').style.
            backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';


            document.querySelector('.number').textContent = guess_num; 
            document.querySelector('.message').textContent = 'correct guess 🥳';
            // update high score
           //    const score =document.querySelector('.score').textContent;
            
            
            document.querySelector('.highscore').textContent = score;
            const highscore = document.querySelector('.highscore').textContent;
            

        } 
        else if (user_guess < guess_num){
            score = score-1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'too low 📉';
        }
        else{
            score =score-1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'too high 📈';
        }
        
    }

);


// functionality for the replay button

document.querySelector('.replay').addEventListener(
    'click',
    function(){
        // set every thing back to normal and keeping only the high score 
        // reset the guess num
        
        document.querySelector('.score').textContent = 20;
        // clear the input
        document.querySelector('.guess').value = '';
        // put the initial backround
        document.querySelector('body').style.backgroundColor = 'bisque';
        // put up the question mark
        document.querySelector('.number').textContent = '?';
        guess_num = Math.floor(Math.random()*20)+1

    }
)


// manipulation of css using dom






