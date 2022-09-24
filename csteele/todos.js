let input = prompt('what would you like to do?')
const todos = ['learn js', 'cuddle kitties'];
const innerList = document.querySelector('#list');

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    } else if (input === 'new') {
        const newTodo = prompt('ok, add a new task');
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`);
        const addToList = innerList.appendChild(document.createElement('li'))
        addToList.innerText = newTodo;
    } else if (input === 'delete') {
        const index = parseInt(prompt(`enter index of item, choose from 0 to ${todos.length}`));
        if (!Number.isNaN(index) && index < todos.length) {
            console.log(`deleted ${todos[index]}`)
            todos.splice(index, 1);
        } else {
            console.log('invalid input');
        }
    }

    input = prompt('what would you like to do?')
}
console.log('ok you quit the app');



// // DEFINE YOUR FUNCTION BELOW:
// function capitalize(str) {
//     let first = str.slice(0, 1).toUpperCase();
//     console.log(first);
//     let theRest = str.slice(1);
//     return first + theRest;
// }

// console.log(capitalize('computer'));