function library() {
    let bookArray = [];

    function addBook(book) {
        bookArray.push(book);
    }

    function viewBooks() {
        return bookArray;
    }

    function removeBook(bookNumber) {
        if(bookNumber >= bookArray.length) {
            throw new Error("No such book!!!");
        }

        bookArray.splice(bookNumber, 1);
    }

    return { addBook, viewBooks, removeBook }
}

function book(title, pages, author, read) {

    function info() {
        return `${title} by ${author}, ${pages}, ${read ? "already read" : "not read yet"}`;
    }

    function toggleReadState() {
        read = !read;
    }
    return {title, pages, author, read, toggleReadState, info};
}

const hobbit = book("Hobbit", "J.R.R Tolkein", "295", false);
const narnia = book("Narnia", "C.S. Lewis", "295", true);
const harryPotter = book("Harry Potter", "J.K. Rowling", "295", false);
const godan = book("Godan", "Munsi Prem Chand", "295", false);

const newLibrary = library();
newLibrary.addBook(hobbit);
newLibrary.addBook(godan);
newLibrary.addBook(narnia);
newLibrary.addBook(harryPotter);
console.log(newLibrary.viewBooks());
newLibrary.removeBook(5);
console.log(newLibrary.viewBooks());
