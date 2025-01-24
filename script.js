const Library = document.querySelector(".library");
const dialogBox = document.querySelector("#addBook");
const closeForm  = document.querySelector("#closeForm");
const newBookButton = document.querySelector("#openForm");
const bookForm = document.querySelector("form#bookForm");
const titleInput = document.querySelector("input#title");
const authorInput = document.querySelector("input#author");
const pagesInput = document.querySelector("input#pages");
let books = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = false;
    this.info = function () {
        return "Title: " + title + " - Author: " + author + " - Pages: " + pageCount;
    }
    this.changeRead = function(){
        this.read = !this.read;
    }
}

function addToLibrary(newBook) {
    books.push(newBook);
    drawCard(newBook)
}

function drawCard(book) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("h2");
    const bookPages = document.createElement("h2");
    const checkBox = document.createElement("input");
    const boxLabel = document.createElement("label");
    const bookRead = document.createElement("div");
    const deleteBookButton = document.createElement("button");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pageCount + " Pages";

    checkBox.type = "checkbox";
    checkBox.id = "read";
    boxLabel.for = "read"
    boxLabel.textContent = "Finished?";
    deleteBookButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });

    deleteBookButton.id = "deleteBook";
    deleteBookButton.textContent = "Remove Book";

    bookRead.appendChild(boxLabel);
    bookRead.appendChild(checkBox);
    newCard.appendChild(bookTitle);
    newCard.appendChild(bookAuthor);
    newCard.appendChild(bookPages);
    newCard.appendChild(bookRead);
    newCard.appendChild(deleteBookButton);

    Library.appendChild(newCard);
}


addToLibrary(new Book("The Hobbit", "John Ronald Reuel Tolkien", 310));
newBookButton.addEventListener("click", () => dialogBox.showModal());
closeForm.addEventListener("click", (e) => {
    if(bookForm.checkValidity()) {
        addToLibrary(new Book(titleInput.value, authorInput.value, pagesInput.value));
        bookForm.reset();
        dialogBox.close();
    }
});

