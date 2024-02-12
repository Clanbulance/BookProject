//create an array -> done 
// create a prototype  -> done
// create some manual books -> done
// Add manual book to site and create design for it
// create a visual for each book 
// create a button to add more books
// add a delete button to the books

// .prototype
const contentPlace = document.querySelector(".content");

const book = function(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new book("Thinking fast or thinking slow","Daniel Kahneman","643","not finished");
const book2 = new book("wrwrwrwr","JK.Bowling","543","read");

let myLibrary = [book1,book2];

myLibrary.forEach((elem) => {
    console.log(`${elem.title} has been created`)
})

const workArea = document.querySelector(".content");

// This function is creating all books from the array
const createBooks = function(array){
    contentPlace.innerHTML = `
    <div class="book" id="AddButton" onclick=createNewBook()>Click to Add a book</div>
    `
array.forEach((elem) =>{
let newBook=  document.createElement("div");
newBook.classList.add('book');

newBook.innerHTML = `
<div class="title">Title:</div>
<div class="titleValue">${elem.title}</div>
<div class="author">Author:</div>
<div class="authorValue">${elem.author}</div>
<div class="pages">Pages:</div>
<div class="pagesValue">${elem.pages}</div>
<div class="read">Read:</div>
<div class="readValue">${elem.read}</div>
<input type="button" class="button" onclick="removeItem(${myLibrary.indexOf(elem)})" id=${myLibrary.indexOf(elem)}} value="Remove book">
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
        console.log("submitted");
        let title = document.getElementById("titleInput").value; 
        let author = document.getElementById("authorInput").value; 
        let pages= document.getElementById("numberInput").value; 
        let read = document.getElementById("checkboxInput").value; 
        let newListing = new book(title,author,pages,read);
        console.log(newListing);
        myLibrary.push(newListing);
        console.log(myLibrary)
        createBooks(myLibrary);
        closeMenu();
        clearInputFields();
    })

const clearInputFields = function(){
    document.getElementById("titleInput").value = ""; 
    document.getElementById("authorInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("checkboxInput").value = "";
}


let setValue = function(){
    let chkbx =  document.getElementById("checkboxInput");
    if (chkbx.checked == true){
        chkbx.value = "read"
    } else {
        chkbx.value = "not finished"
    }
}

createBooks(myLibrary);

let booksRead = myLibrary.filter((elem) => elem.read === "read");
