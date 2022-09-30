// codewars 9/26
// Who likes it? (6 kyu: strings, fundamentals) 

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//I used a simple if... else statement for this. plan to refactor using switch statements or a spread operator later
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

function likeThis(arr) {
  switch (arr.length) {
    case 0: return `no one likes this`; break;
    case 1: return `${arr[0]} likes this`; break;
    case 2: return `${arr[0]} and ${arr[1]} like this`; break;
    case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; break;
    default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`; break;
  }
}

//testing:
console.log(likes(['socks', 'mittens', 'chippy', 'seamus', 'perdy']));
console.log(likeThis(['patches', 'ripley', 'junior']));