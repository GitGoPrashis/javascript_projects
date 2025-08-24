
// for generating the random number guessing
const minNumber = 1;
const maxNumber = 100;

const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1))
// console.log(answer);

let attempt = 0;
let guess;
let running = true;


while (running) {

    guess = window.prompt(`Guess a number between ${minNumber} to ${maxNumber}`)
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minNumber || guess > maxNumber) {
        window.alert("Please enter a valid number");
    }
    else {
        attempt++;
        if(guess < answer){
            window.alert("It's too Low! Try Again..");
        }
        else if(guess > answer){
            window.alert("Its Too High ! Try Again..");
        }
        else{
            window.alert(`Its Correct. The answer is ${answer}. Its took you ${attempt} attempts.`)
            running = false;
        }

    }


}