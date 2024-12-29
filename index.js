function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.info =  function () {
        return "Title: " + title + " - Author: " + author + " - Pages: " + pageCount;
    }
}
theHobbit = new Book("The Hobbit", "John Ronald Reuel Tolkien", 310);
console.log(theHobbit.info())