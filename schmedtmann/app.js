// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

//Test data 1:
// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

//Test data 2:
const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76

const bmiMark = massMark / heightMark ** 2
const bmiJohn = massJohn / heightJohn ** 2
console.log(bmiMark, bmiJohn)

const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const averageDolphin = (96 + 108 + 89) / 3
// const averageKoala = (88 + 91 + 110) / 3

// if(averageDolphin > averageKoala) {
//     console.log(`Dolphins win with ${averageDolphin} points while Koalas only had ${averageKoala} points`)
// } else if(averageDolphin === averageKoala){
//     console.log(`It's a tie with both teams scoring ${averageDolphin} and ${averageKoala} respectively`)
// } else {    
//     console.log(`Koalas win with ${averageKoala} points while Dolphins only had ${averageDolphin} points`)
// }

//Data Bonus 1:
// const averageDolphin = (97 + 112 + 101) / 3
// const averageKoala = (109 + 95 + 123) / 3

//Data Bonus 2:
const averageDolphin = (97 + 112 + 90) / 3
const averageKoala = (97 + 112 + 100) / 3

console.log(averageDolphin, averageKoala)

if (averageDolphin > averageKoala && averageDolphin >= 100) {
    console.log(`Dolphins win with ${averageDolphin} points while Koalas only had ${averageKoala} points`)
} else if (averageDolphin === averageKoala && averageDolphin >= 100 && averageKoala >= 100) {
    console.log(`It's a tie with both teams scoring ${averageDolphin} and ${averageKoala} respectively`)
} else if (averageKoala > averageDolphin && averageKoala >= 100) {
    console.log(`Koalas win with ${averageKoala} points while Dolphins only had ${averageDolphin} points`)
} else {
    console.log('No one scored over 100 points. No one wins the trophy')
}


//JS lecture about switch statements, convert switch code block to if/else statements

const day = 'sunday'

if (day === 'monday') {
    console.log('do thing1')
    console.log('do thing 1.1')
} else if (day === 'tuesday') {
    console.log('do thing2')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('do things 3 and 4')
} else if (day === 'friday') {
    console.log('do thing 5')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend!')
} else {
    console.log('not a valid day')
}

//TERNARY OPERATORS has 3 parts- condition, if part and else part
//also note the difference between statements (eg. if/else) and expressions (operators). expressions have value which can be inserted into template literals

const age = 23;
age >= 18 ? console.log('I like wine') : console.log('I like water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)


//CODING CHALLENGE 4:
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .20);
// console.log(tip)
// console.log(`The bill was ${bill}, the tip would be ${tip} and the total value ${bill + tip}`)



//CHALLENGES SECTION 2:
//CODING CHALLENGE 1

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3

// //test data 1: (use let keyword instead of const so we can reassign the values later)
// let avgD = calcAverage(44, 23, 71)
// let avgK = calcAverage(65, 54, 49)
// console.log(avgD, avgK)

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} to ${avgKoalas})`)
//     } else if (avgKoalas >= 2* avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} to ${avgDolphins})`)
//     } else {
//         console.log('No one wins :(')
//     }
// }

// checkWinner (avgD, avgK)

// //test data 2: reassigning values, no need for let or const because they're already declared
// avgD = calcAverage(85, 54, 41)
// avgK = calcAverage(23, 34, 27)
// console.log(avgD, avgK)

// checkWinner(avgD, avgK)


//CODING CHALLENGE 2

//function expression version:
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
// }

// arrow function version:
//const calcTip = bill => bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .20);

//console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], + bills[2] + tips[2]];
// console.log(totals);


//CODING CHALLENGE 3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

const john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2) //don't even need () because of order of precedence, exponents are evaluated first
        return this.BMI
    }
}

mark.calcBMI()
john.calcBMI() //need to call these functions first before getting a returned value , otherwise the this.BMI property will be undefined

console.log(mark.BMI, john.BMI)

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${[Math.round(mark.BMI)]}) is higher than ${john.fullName}'s (${[Math.round(john.BMI)]})!`)
} else {
    console.log(`${john.fullName}'s BMI (${[Math.round(john.BMI)]}) is higher than ${mark.fullName}'s (${[Math.round(mark.BMI)]})!`)
}


// CODING CHALLENGE 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .20);

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i])
}

console.log(bills, tips, totals);

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(bills), calcAverage(tips));
console.log(`The average cost of your vacation dinners is $${calcAverage(totals)}, stop being so bougie!`)


// SECTION 3 CODING CHALLENGE 1

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

/* given the above arrays, create a function that prints the string: '... 17°C in 1 day ... 21°C in 2 days ... 23°C in 3 days ...'
- take each element from the array and insert them into a string in order - use template literals in a for loop - MISSING THE TURN ARRAY INTO STRING STEP (the simplest and most important step). 
- each day would need their own dynamic variable to be inserted into the string - put them in a new array <---- actually incorrect
- we can just use a dynamic template literal in the string that prints the index of the arr[i] which is wayyy simpler
*/

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `
    }
    console.log('... ' + str)
};

printForecast(temp1);
printForecast(temp2);

function century(year) {
    return Math.ceil(year * .01)
}

console.log(century(1991));