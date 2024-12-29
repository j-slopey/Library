function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    function info(){
        return "Title: " + " Author: " + " Pages: " + pageCount;
    }
}
theHobbit = new Book("The Hobbit", "John Ronald Reuel Tolkien", 310);
console.log(theHobbit.author)