//create an array -> done 
// create a prototype  -> done
// create some manual books -> done
// Add manual book to site and create design for it
// create a visual for each book 
// create a button to add more books
// add a delete button to the books

// .prototype
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
<input type="button" class="button" onclick="removeItem">

`
workArea.appendChild(newBook);
})}



createBooks(myLibrary);

