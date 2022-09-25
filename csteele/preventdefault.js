// //262. FORM EVENTS AND PREVENT DEFAULT

const petsForm = document.querySelector('#shelterForm');
const input = document.querySelector('#petName');
const petList = document.querySelector('#pets');
petsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const petName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = petName;
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