//create an array -> done 
// create a prototype  -> done
// create some manual books -> done
// Add manual book to site and create design for it
// create a visual for each book 
// create a button to add more books
// add a delete button to the books

// .prototype
const contentPlace = document.querySelector(".content");

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new book("Thinking fast or thinking slow","Daniel Kahneman","643","notread");
const book2 = new book("wrwrwrwr","JK.Bowling","543","read");

let myLibrary = [book1,book2];

myLibrary.forEach(book = function(book){
    console.log(`${book.title} has been created`)
})

const workArea = document.querySelector(".content");

// This function is creating all books from the array
const createBooks = function(array){
array.forEach(book = function(book){
let newBook=  document.createElement("div");
newBook.classList.add('book');

newBook.innerHTML = `
<div class="title">Title:</div>
<div class="titleValue">${book.title}</div>
<div class="author">Author:</div>
<div class="authorValue">${book.author}</div>
<div class="pages">Pages:</div>
<div class="pagesValue">${book.pages}</div>
<div class="read">Read:</div>
<div class="readValue">${book.read}</div>
<input type="button" class="button" onclick="removeItem(${myLibrary.indexOf(book)})" id=${myLibrary.indexOf(book)}} value="Remove book">
`

workArea.appendChild(newBook);
})}

function removeItem(e){
    console.log(`Deleting ${e} from array`);
    delete myLibrary[e];
    contentPlace.innerHTML = `
    <div class="book" id="AddButton" onclick=createNewBook()>Click to Add a book</div>
    `
    console.log(`Array is now ${myLibrary}`)
    createBooks(myLibrary)
}

let createNewBook = function(){
    console.log("Lets get a new book");
    document.querySelector(".hiddenPopUp").style.display = "flex"
    contentPlace.style.opacity = "50%"
}

let closeMenu = function(){
    document.querySelector(".hiddenPopUp").style.display = "none";
    contentPlace.style.opacity = "100%"
}

document.getElementById('submit-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        console.log("submitted")
        closeMenu();
    })



createBooks(myLibrary);

