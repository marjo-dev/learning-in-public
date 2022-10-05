// codewars 9/26
// Who likes it? (6 kyu: strings, fundamentals) 

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//using a simple if statement:
function likes(arr) {
  if (arr.length === 0) return 'no one likes this';
  if (arr.length === 1) return `${arr[0]} likes this`;
  if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  if (arr.length > 3) return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
}
//refactored by destructuring the array:
function like(names) {
  let [a, b, c, ...others] = names;
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return `${a} likes this`;
  if (names.length === 2) return `${a} and ${b} like this`;
  if (names.length === 3) return `${a}, ${b} and ${c} like this`;
  if (names.length > 3) return `${a}, ${b} and ${others.length + 1} others like this`;
}
//refactored with using rest parameters and switch case:
function likeThis(...arr) {
  switch (arr.length) {
    case 0: return `no one likes this`; break;
    case 1: return `${arr[0]} likes this`; break;
    case 2: return `${arr[0]} and ${arr[1]} like this`; break;
    case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; break;
    default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`; break;
  }
}
//testing:
console.log(likes(['socks', 'mittens']));
console.log(like(['chippy', 'seamus', 'perdy', 'ten', 'junior']));
console.log(likeThis('patches', 'ripley', 'roddy'));


// codewars 10/04
// Are they the "same"? (6 kyu: fundamentals)
// Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(arr1, arr2) {
  let squares = 0;
  if (arr1 === null || arr2 === null) return false;
  if (arr1.length === arr2.length) {
    arr1.sort(function compareNums(a, b) { return a - b });
    arr2.sort(function compareNums(a, b) { return a - b });
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] ** 2 === arr2[i]) squares++;
    } return squares === arr1.length ? true : false;
  } else return false;
}
// testing:
console.log(comp([1, 2, 3, 4], [1, 16, 4, 9]));
console.log(comp([1, 2, 3, 4], [1, 16, 9]));
console.log(comp([1, 2, 3, 4], null));


// codewars 10/05
// Count by X (8 kyu: arrays, fundamentals)
// Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
//   countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//   countBy(2,5) === [2,4,6,8,10]

function countBy(n, x) {
  let arr = [n];
  for (let i = 0; i < x; i++) {
    arr.push(arr[i] + n);
  } arr.pop();
  return arr;
}
// }
countBy(2, 5)
countBy(1, 10)