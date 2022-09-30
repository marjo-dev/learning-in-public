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
//refactored using the rest params syntax:
function like(names) {
  let [a, b, c, ...others] = names;
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return `${a} likes this`;
  if (names.length === 2) return `${a} and ${b} like this`;
  if (names.length === 3) return `${a}, ${b} and ${c} like this`;
  if (names.length > 3) return `${a}, ${b} and ${others.length + 1} others like this`;
}

//testing:
console.log(likes(['socks', 'mittens', 'chippy', 'seamus', 'perdy']));
console.log(likeThis('patches', 'ripley', 'roddy', 'junior'));
console.log(like(['chippy', 'seamus', 'perdy']));