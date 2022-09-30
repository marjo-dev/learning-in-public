// //265. INPUT AND CHANGE EVENTS EXERCISE
// The h2 should start with the text "Enter Your Username"
// Whenever an input event is fired on the <input> element, update the <h2> so that it displays "Welcome, " plus the current value from the text input.  Take a look at the gif below to see how it should work.
// If the <input> goes back to being empty, update the <h2> so that it once again says "Enter Your Username"
const inputChange = document.querySelector('#username');
const h2 = document.querySelector('#change');
inputChange.addEventListener('input', function (e) {
    if (inputChange.value === '') {
        h2.innerText = 'Enter Your Username'
    } else h2.innerText = 'Welcome, ' + inputChange.value;
})

// //262. FORM EVENTS AND PREVENT DEFAULT

const petsForm = document.querySelector('#shelterForm');
const input = document.querySelector('#petName');
const petList = document.querySelector('#pets');
petsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const petName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = petName + ' 🐾 ';
    petList.append(newLI);
    console.log('SUBMITTED THE FORM!', input.value);
    input.value = '';
});

//Tweet form example:
const tweetForm = document.querySelector('#tweetForm');
// const userInput = document.querySelectorAll('input[0]');
// const tweetInput = document.querySelectorAll('input[1]');
const tweetList = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(nameInput.value, tweetInput.value);
    nameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`: ${tweet}`)
    // newTweet.innerText = `${userName} says ${userTweet}`
    tweetList.append(newTweet);
}

// Form event coding exercise#61 from lecture 264:
const form = document.querySelector('#grocery');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const product = form.elements.product;
    const qty = form.elements.qty;

    const fragment = document.createDocumentFragment();
    const li = fragment
        .appendChild(document.createElement('ul'))
        .appendChild(document.createElement('li'));
    li.textContent = `${qty.value} ${product.value}`;
    document.body.appendChild(fragment);

    product.value = '';
    qty.value = '';
});