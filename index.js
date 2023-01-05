// 1. Maintain array of objects
// each bookmark is an object
// each bookmark has one key(bookmark) and one value(url)


const arr = [
    // {
    // bookmark: "google",
    // link: "www.google.com"
    // },
    // {
    // bookmark: "weather",
    // link: "www.weather.com"
    // }
];


// 2. Re-render entire list each time new bookmark is submitted
// each time user clicks submit a new bookmark is added to the array

const button = document.querySelector('#add_bookmark')
console.log(button)


const body = document.querySelector('body')

const listMaker = (user) => {
    // make HTML list items
    const container = document.querySelector('#saved_bookmarks');
    const listItem = document.createElement('li');
    const bookmark = document.createElement('h3');
    const link = document.createElement('h4');
    // add content to them
    bookmark.innerHTML = user.bookmark;
    link.innerHTML = user.link;
    // combine them
    listItem.append(bookmark, link);
    container.append(listItem);

    return container
}

function addBookmark(bookmark, link) {
    let obj = { bookmark, link }
    arr.push(obj)
    return obj
}

// addBookmark('amazon', 'www.amazon.com')

// console.log(addBookmark('pitchfork', 'www.pitchfork.com'))


const bookmarkInput = document.querySelector('#bookmark_name');
const linkInput = document.querySelector('#link');

button.addEventListener('click', function (event) {
    event.preventDefault();
    addBookmark(bookmarkInput.value, linkInput.value)

    populateArray()

    console.log("hello world")
})

function populateArray() {
    const mappingVar = arr.map((object) => {
        const eachObject = listMaker(object);
        body.append(eachObject)
    })
    return mappingVar
}




// 3. Use map to add bookmark data to DOM elements
// arr.map to invoke function

// arr.map((element) => {
//     const newBookmark = listMaker(element);
//     body.append(newBookmark)
// })

