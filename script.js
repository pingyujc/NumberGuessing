function startgame(){

    // generate a random number between 0 and 100
    const ans = Math.floor(Math.random() * 101);

    // get references to the HTML elements
    const tries = document.getElementById('tries');
    const guessInput = document.getElementById('guess-input');
    const guessBtn = document.getElementById('guess-btn');
    const result = document.getElementById('result');
    const correctNum_text = document.getElementById('ans-h1');
    const correctNum = document.getElementById('ans');
    const againBtn = document.getElementById('tryAgain');


    // set up game variables
    let count = 1;
    let correct = false;
    let remainingTries = 5; // how many more tries they have

    // event listener for the guess button
    guessBtn.addEventListener('click', function() {
        // get the user's guess
        const guess = parseInt(guessInput.value);
        remainingTries --;

        // check if the guess is correct
        if (guess === ans) {
            result.innerHTML = 'CONGRATS!!! YOU GOT THE RIGHT NUMBER!';
            correct = true;
            againBtn.style.display = 'block'; // will show the try again button

        } else if (guess < ans) {
            result.innerHTML = 'Wrong! The number is bigger than your guess';
            tries.innerHTML = remainingTries;
        } else {
            result.innerHTML = 'Wrong! The number is smaller than your guess.';
            tries.innerHTML = remainingTries;
        }

        // check if the game is over
        if (count >= 5 || correct) {
            guessInput.disabled = true;
            guessBtn.disabled = true;
            if (!correct) {
                correctNum_text.style.display = 'block';
                result.innerHTML = 'You have lost.';
                correctNum.innerHTML = ans;
            }
        }

        if(count == 5){
            againBtn.style.display = 'block';
        }

        // increment the count
        count++;        
    });

    // event listener for the guess button
    againBtn.addEventListener('click', function() {
        // clear everything, restart the game;
        guessInput.disabled = false;
        guessBtn.disabled = false;
        againBtn.style.display = 'none';
        correctNum_text.style.display = 'none';
        result.innerHTML = '';
        count = 1;
        correct = false;
        remainingTries = 5; // how many more tries they have
        tries.innerHTML = remainingTries;
        startgame();
    });


}

startgame();