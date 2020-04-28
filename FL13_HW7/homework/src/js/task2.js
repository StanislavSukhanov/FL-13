// Your code goes here
let start = confirm('Do you want to play a game?');
let maxAttempts = 3;
let attempts = 0;
let round = 1;
let min = 0;
let max = 5 * round + 1;
let rouletteNumber = Math.floor(Math.random() * (+max - +min)) + +min;
let prizes = [100, 50, 25];
let prize = 0;

do {
    if (!start) {
        alert('You did not become a billionaire, but can.');
    } else {
        for (attempts; attempts < maxAttempts;) {
            let userNumber = parseInt(getNumberAndDetails());
            if (isNaN(userNumber)) {
                continue;
            }
            if (userNumber !== rouletteNumber) {
                attempts++;
                continue;
            }
            prize += prizes[attempts];
            let shouldContinue= confirm(`Congratulation, you won! Your prize is: ${prize} $. Do you want to continue?`);
            if (!shouldContinue) {
                break;
            } else {
                attempts = 0;
                round++;
                prizes = prizes.map(prize => prize * 2);
                max = 5 * round + 1;
                rouletteNumber = Math.floor(Math.random() * (+max - +min)) + +min;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
        // resetting variables;
        attempts = 0;
        prize = 0;
        round = 1;
        max = 5 * round + 1;
        prizes = [100, 50, 25];
        rouletteNumber = Math.floor(Math.random() * (+max - +min)) + +min;
        shouldGameContinue();
    }
} while (start);

function shouldGameContinue() {
    start = confirm(`Do you want to play a game again?`)
}

function showDetails() {
    return `Choose a roulette pocket number from 0 ${max - 1}
             Attempts left: ${3 - attempts}
             Total prize: ${prize} $
             Possible prize on current attempt: ${prizes[attempts]}`;
}

function getNumberAndDetails() {
   return prompt(showDetails());
}
