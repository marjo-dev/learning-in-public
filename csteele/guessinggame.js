// simple guessing game in console:
let max = parseInt(prompt('Enter the max number'));
while (!max) {
    max = parseInt(prompt('Enter a valid number'));
}
const targetNum = Math.trunc(Math.random() * max) + 1;

let guess = parseInt(prompt('enter your first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('too high');
    } else {
        guess = prompt('too low');
    }
}
if (guess === 'q') {
    alert(`you quit too early. the number is ${targetNum}`);
    console.log(`you quit too early. the number is ${targetNum}`);
} else {
    alert(`${targetNum} is correct! it took you ${attempts} guesses`);
    console.log(`${targetNum} is correct! it took you ${attempts} guesses`);
}
// guessing game end

