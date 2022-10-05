// codewars 9/26
// Who likes it? (6 kyu: strings, fundamentals) 

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//using a simple if... else statement:
function likes(arr) {
  if (arr.length === 0) {
    return 'no one likes this';
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else if (arr.length > 3) {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
}
//refactored using switch case:
function likeThis(...arr) {
  switch (arr.length) {
    case 0: return `no one likes this`; break;
    case 1: return `${arr[0]} likes this`; break;
    case 2: return `${arr[0]} and ${arr[1]} like this`; break;
    case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; break;
    default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`; break;
  }
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

//testing:
console.log(likes(['socks', 'mittens']));
console.log(likeThis('patches', 'ripley', 'roddy'));
console.log(like(['chippy', 'seamus', 'perdy', 'ten', 'junior']));


// codewars 10/04
// Are they the "same"? (fundamentals)
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

console.log(comp([1, 2, 3, 4], [1, 16, 4, 9]));
console.log(comp([1, 2, 3, 4], [1, 16, 9]));
console.log(comp([1, 2, 3, 4], null));
