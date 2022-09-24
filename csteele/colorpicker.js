//COLOR PICKER FROM SCRATCH:
const button = document.querySelector('#color');
const h1 = document.querySelector('h1');
const ul = document.querySelector('ul')

const r = () => Math.floor(Math.random() * 256);
const g = () => Math.floor(Math.random() * 256);
const b = () => Math.floor(Math.random() * 256);

button.addEventListener('click', () => {
    const newColor = `rgb(${r()}, ${g()}, ${b()})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    const li = ul.appendChild(document.createElement('li'));
    li.innerText = `${newColor}`
})
// const randColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`
// }
