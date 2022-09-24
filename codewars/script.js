//Here is a collection of solutions to some codewars problem sets done around September '22


// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i <= arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i]
//         //return min; // fix me!
//     }
//     return [min, max];
// }
// let sampleArr = [2, -1, 5, 1, 3];
// console.log(minMax(sampleArr));

// function fizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {
//         let output = '';
//         if (i % 3 == 0) output = 'fizz';
//         if (i % 5 == 0) output = 'buzz';
//         if (i % 3 == 0 && i % 5 == 0) output = 'fizzbuzz';
//         console.log(output || i);
//     }
// }
// fizzBuzz(15);

// for (let n = 1; n <= 100; n++) {
//     if (n % 15 == 0) console.log('fizzbuzz');
//     else if (n % 3 == 0) console.log('fizz');
//     else if (n % 5 == 0) console.log('buzz');
//     else console.log(n);
// }


const highAndLow = numbers => {
    let nums = numbers.split(' ').map(Number);
    // let strNums = nums.toString();
    // return typeof nums;
    let min = nums[0];
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
        if (nums[i] > max) max = nums[i];
    }
    console.log(nums);
    return `${max} ${min}`
}
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));


let number = 0;
while (number < 12) {
    number += 2;
    console.log(number);
    //number += 2;
}

for (let numbo = 2; numbo <= 12; numbo += 2) {
    console.log('the square is ', numbo);
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter += 1;
}
console.log(result);

let product = 1;
for (let i = 0; i < 10; i++) {
    product = product * 2;
}
console.log(product);

// let yourName;
// do { //do this code block while the condition is met
//     yourName = prompt('what is your name?');
// } while (!yourName);

// let yourAge;
// while (!yourAge) {
//     yourAge = Number(prompt('how old are you?'));
// }

// alert(`your name is ${yourName} and you are ${yourAge} years old!`);

function squareSum(numero) {
    let square = [];
    let sum = 0;
    for (let i = 0; i < numero.length; i++) {
        square.push(numero[i] * numero[i]);
    }
    for (let i = 0; i < square.length; i++) {
        sum += square[i];
    } return sum;

}
console.log(squareSum([0]));


// function isIsogram(str) {
//     let dupes = 0;
//     function dupeOr(letter) {
//         for (i = 1; i < str.length; i++) {
//             letter === str.charAt(i).toLowerCase() ? dupes += 1 : dupes += 0;
//         }
//     }
//     for (let i = 0; i < str.length; i++) {
//         dupeOr(str.charAt(i).toLowerCase);
//         return dupes
//         //return dupes === 0 ? true : false;
//     } //return dupes
// }


// function isIsogram(str) {
//     let letter = str.charAt(0).toLowerCase();
//     //let letter = '';
//     let dupes = 0;
//     for (let i = 0; i < str.length; i++) {
//         letter = str.charAt(i).toLowerCase();
//         for (i = 1; i < str.length; i++) {
//             letter === str.charAt(i).toLowerCase() ? dupes += 1 : dupes += 0;
//         } //return letter
//     }
//     //return dupes === 0 ? true : false;
//     return dupes
// }
const makeNegative = num => { return num <= 0 ? num : -num }
console.log('make negative', makeNegative(-42))


function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] === 'x' ? x += 1 : x += 0;
        str[i] === 'o' ? o += 1 : o += 0;
    } return x == o ? true : false;
}
console.log('are there equal x and o?', XO('xxxOoom'));


function betterThanAverage(classPoints, yourPoints) {
    var classTotal = 0;
    for (let i = 0; i < classPoints.length; i++) {
        classTotal += classPoints[i];
    } console.log(`them: ${classTotal}, me: ${yourPoints}`);
    return yourPoints > (classTotal / classPoints.length);
}
const q = 'am i better than average?'
console.log(q, betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

function isIsogram(str) {
    let dupes = 0;
    for (let i = 0; i < str.length; i++) {
        for (let c = i + 1; c < str.length; c++) {
            str[i].toLowerCase() === str[c].toLowerCase() ? dupes += 1 : dupes += 0;
        }
    } console.log(`there are ${dupes} duplicate letters... is "${str}" an isogram?`);
    return dupes === 0 ? true : false;
}
console.log(isIsogram("dupes here or nah?"));


function toAlternatingCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        str[i] === str[i].toLowerCase() ? newStr += str[i].toUpperCase() : newStr += str[i].toLowerCase();
        // if (str[i] == str[i].toLowerCase()) {
        //     newStr += str.charAt(i).toUpperCase();
        // } else {
        //     newStr += str.charAt(i).toLowerCase();
        // }
    }
    return newStr;
}
console.log(toAlternatingCase('HELLO world \nhow do YOU DO'))

// change a string ('a big boy') so it outputs as ('A Big Boy')
function toJadenCase(str) {
    let arr = str.split(' ');
    let newArr = arr.map(letter => {
        return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
    })
    return newArr.join(' ');
}
console.log(toJadenCase('chippy is a very big boy'));

/*
-input n is the row, and there are n number of elements to sum up
-n is the array length
-define n as an array of numbers and x = 1
-reduce array to find sum
*/
// function rowSumOddNumbers(n) {
//     // TODO
//     //    let x = 1;
//     if (n > 1) {
//         for (let x = 1; x <= n; x++) {
//             for (let y = x + 2; y <= n; y++) {
//                 y += 2;
//                 return y;
//             } //return y
//         }
//     } else return 1;
// }
// console.log(rowSumOddNumbers(2))

function odds(n) {
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let x = 1;
    let y = x + 2;
    let a = (n * (n - 1) + 1);
    for (let i = 0; i < n; i++) {
        arr[i] = y + 2 * i
    }
    for (let i = 0; i < n; i++) {
        let z = y * n + 1
        arr2[i] = (z += n + 2 * i) - n
    }
    for (let i = 0; i < n; i++) {
        arr3[i] = a + 2 * i
    }
    // for (let i = 1; i < n; i++) {
    //     arr2.push(arr[i] + 2 * y)
    // }
    console.log(arr3, arr, arr2);//.reduce((a, b) => a + b)
}

function sumOdd(n) {
    //create an array where #of elements is n:
    let arr = [];
    //determine the value of 1st element in array:
    let a = (n * (n - 1) + 1);
    //push elements into array. array count starts at 0, so array length is n-1, which is the # of iterations the loop will run for:
    for (let i = 0; i < n; i++) {
        arr[i] = a + 2 * i
    } console.log(arr);
    //return the value of the array sum using array.reduce()
    return arr.reduce((a, b) => a + b)
}
console.log(sumOdd(1))
console.log(sumOdd(2));
console.log(sumOdd(3))
console.log(sumOdd(4))
console.log(sumOdd(5))


/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0
*/

function sumArray(array) {
    if (array == null || array.length < 3) return 0;
    array.sort(function (a, b) { return a - b });
    console.log(array)
    array.shift();
    array.pop();
    console.log(array);
    return array.reduce((a, b) => a + b)
}
console.log(sumArray([3, 5, 8]))


function find_average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length
}
console.log(find_average([13, 84]));


// function solution(str, ending) {
//     let reversEnd = ending.split('').reverse().join('');
//     let reverseStr = str.split('').reverse().join('');
//     let arr = [];
//     console.log(reversEnd, reverseStr);
//     for (let i = 0; i < reversEnd.length; i++) {
//         if (reversEnd[i] === reverseStr[i]) arr += reversEnd[i];
//     } console.log(arr);
//     return (arr.length == reversEnd.length) ? true : false;
// }

// console.log(solution('abc', 'abc'));


function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 == 0) return 'I love you';
    if (nbPetals % 6 == 1) return 'a little'
    if (nbPetals % 6 == 2) return 'a lot'
    if (nbPetals % 6 == 3) return 'passionately'
    if (nbPetals % 6 == 4) return 'madly'
    if (nbPetals % 6 == 5) return 'not at all'
}
console.log(howMuchILoveYou(22))


function digitize(n) {
    //code here
    return n.toString().split('').reverse()
}
console.log(digitize(35231));


// complete the function
function solution(string) {
    let newStr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) newStr.push(string[i])
        if (string[i] === string[i].toUpperCase()) newStr.push(' ' + string[i])
    }
    return newStr.join('');
}

console.log(solution('camelCasing'));

function dupesHere(str) {
    let dupes = 0;
    for (let i = 0; i < str.length; i++) {
        for (let c = i + 1; c < str.length; c++) {
            if (str[i].toLowerCase() === str[c].toLowerCase()) dupes += 1;
        }
    } console.log(`there are [${dupes}] duplicate letters... is "${str}" an isogram?`);
    for (let i = 0; i < dupes.length; i++) {
        for (let c = i + 1; c < dupes.length; c++) {
            if (dupes[i] === dupes[c]) dupes -= 1;
        }
    }
    return dupes
    //return dupes === 0 ? true : false;
}
console.log(dupesHere('daamned'))


const getRepeatedChars = (str) => {
    let result = [];
    str.map(each => {
        let repeatedChars = 0;
        for (let i = 0; i < each.length - 1; i++) {
            if (each[i] === each[i + 1] && each[i] !== each[i - 1]) {
                repeatedChars += 1;
            }
        }

        result.push(repeatedChars);
    });

    return result;
};
console.log(getRepeatedChars(["indivisibility"]))


function removeDuplicates(text) {
    let arr = text.split('');
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates('indivisibility'));


// const toFindDuplicates = arry => arry.filter((item, index) => arr.indexOf(item) !== index)
// const duplicateElementa = tofindDuplicates(arry);
// console.log(duplicateElements);

// Output: [1, 3]

function duplicateCount(text) {
    text = text.toLowerCase();
    let arr = text.split('');
    console.log(text);
    let newArr = arr.filter((item, index) => arr.indexOf(item) !== index);
    let result = [];
    newArr.forEach(element => {
        if (!result.includes(element)) result.push(element);
    })
    console.log(newArr, result);
    return result.length;
}

console.log(duplicateCount('Bndivisibilities'));


function digPow(n, p) {
    n = n.toString();
    let arrayN = n.split('');
    let arrayP = [];

    for (let i = 0; i < arrayN.length; i++) {
        arrayP.push(arrayN[i] ** (p + i))
    }

    let total = arrayP.reduce((a, b) => a + b)
    console.log(total, n);
    if (total < n) return -1
    else return total / n

}

console.log(digPow(81, 2));

function giveChange(n) {
    let arr = []
    if (n >= 100) {
        arr.push((Math.floor(n / 100)));
        while (n >= 100) n -= 100;
    } else arr.push(0);

    if (n >= 50) {
        arr.push((Math.floor(n / 50)));
        while (n >= 50) n -= 50;
    } else arr.push(0);

    if (n >= 20) {
        arr.push((Math.floor(n / 20)))
        while (n >= 20) n -= 20;
    } else arr.push(0);

    if (n >= 10) {
        arr.push((Math.floor(n / 10)))
        while (n >= 10) n -= 10;
    } else arr.push(0);

    if (n >= 5) {
        arr.push((Math.floor(n / 5)))
        while (n >= 5) n -= 5;
    } else arr.push(0);

    if (n >= 1) {
        arr.push((Math.floor(n / 1)))
        while (n >= 1) n -= 1;
    } else arr.push(0);

    return arr.reverse();
}
console.log(giveChange(217));


function printerError(s) {
    console.log(s)
    let strArr = s.split(''), count = 0, arr = [],
        errors = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i <= errors.length; i++) {
        strArr.forEach(element => {
            if (element == errors[i]) {
                count += 1;
                arr.push(errors[i]);
            }
        });
    } console.log(arr);
    return `${count}/${s.length}`;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));


function old(dad, son) {
    let count = 0;
    console.log(`dad's age is ${dad}, son's age is ${son}`);
    // for (let i = 1; i <= son; i++) {
    //     if (dad > i * 2) count++
    // }
    if (dad < son * 2) {
        count = son * 2 - dad;
    } else {
        while (dad > son * 2) {
            count++
            dad++;
            son++;
        }
    } console.log(dad, son);

    return count;
}
console.log(old(29, 0));


function arrayDiff(a, b) {
    console.log(a, b);
    let arr = [];
    if (b.length == 0) return a;
    else {
        for (let i = 0; i < b.length; i++) {
            a.forEach(element => {
                if (element != b[i]) {
                    //a.pop(a[i]);
                    arr.push(element);
                }
            })
        }
    } console.log(a, arr)

}
//console.log(arrayDiff([1, 2], [1]))
arrayDiff([1, 2, 2, 3], [1, 3])

function filter(a, b) {
    console.log(a, b);
    if (b.length == 0) console.log(a);
    else console.log(a.filter(n => !b.includes(n)));
}
filter([1, 2, 2], [2])


// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    let first = str.slice(0, 1).toUpperCase();
    console.log(first);
    let theRest = str.slice(1);
    return first + theRest;
}

console.log(capitalize('computer'));

/*
function century(year) {
    if (year <= 100) return 1;
    if (100 < year && year <= 200) return 2;
    if (200 < year && year <= 300) return 3;
    if (300 < year && year <= 400) return 4;
    if (400 < year && year <= 500) return 5;
    if (500 < year && year <= 600) return 6;
    if (600 < year && year <= 700) return 7;
    if (700 < year && year <= 800) return 8;
    if (800 < year && year <= 900) return 9;
    if (900 < year && year <= 1000) return 10;
    if (1000 < year && year <= 1100) return 11;
    if (1100 < year && year <= 1200) return 12;
    if (1200 < year && year <= 1300) return 13;
    if (1300 < year && year <= 1400) return 14;
    if (1400 < year && year <= 1500) return 15;
    if (1500 < year && year <= 1600) return 16;
    if (1600 < year && year <= 1700) return 17;
    if (1700 < year && year <= 1800) return 18;
    if (1800 < year && year <= 1900) return 19;
    if (1900 < year && year <= 2000) return 20;
    if (2000 < year && year <= 2100) return 21;
}

console.log(century(1705));
*/


//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
