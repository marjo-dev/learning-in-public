// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log('~~~~~~~2.1 TRIANGLE LOOP~~~~~~~');
let hash = '';

for (let i = 0; i <= 7; i++) {
    console.log(hash += '#');
}

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// In the interest of space I just set the count to 30 instead of 100
console.log('~~~~~~~2.2 FIZZBUZZ~~~~~~~');
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

//I made it into a function that takes in the size of the chessboard as arguments
//maybe make the arguments taken from user input
console.log('~~~~~~~2.3 CHESSBOARD~~~~~~~');
const chessBoard = (xSize, ySize) => {
    let printThis = '';
    for (let y = 0; y < ySize; y++) { //building on the vertical axis
        for (let x = 0; x < xSize; x++) { //building on horizontal axis, this loops x number of times for each y iteration
            if ((x + y) % 2 == 0) {
                printThis += ' ';
            } else {
                printThis += '#';
            }
        }
        printThis += '\n'; //after each y iteration before the next one, this line of code runs
    }
    console.log(printThis);
}
chessBoard(20, 8)

//Minimum
// Write a function min that takes two arguments and returns their minimum.
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
console.log('~~~~~~~3.1 MINIMUM~~~~~~~');
function min(a, b) {
    //easy version using a built in method: return Math.min(a,b)
    return a > b ? b : a;
}
console.log(min(0, 10), min(0, -10)); //test cases