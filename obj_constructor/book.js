function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = () => {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    // }
}
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
}
let bookOne = new Book("The Hobbit", "J.R.R. Tolkein", 295, false);
console.log(bookOne.info());
console.log(bookOne.__proto__);
console.log(Object.prototype.hasOwnProperty("valueOf"));
