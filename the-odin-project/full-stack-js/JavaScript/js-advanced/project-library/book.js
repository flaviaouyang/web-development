// the array that will be used to store all books
let Library = [];

class Book {
    constructor(title, author, page, haveRead) {
        this.title = title;
        this.author = author;
        this.page = page;
        this.info = function () {
            if (haveRead) {
                return title + ' by ' + author + ', ' + page + ' pages, read';
            } else {
                return title + ' by ' + author + ', ' + page + ' pages, not read yet';
            }
        };
    }
}

function addBookToLibrary() {
    
}
