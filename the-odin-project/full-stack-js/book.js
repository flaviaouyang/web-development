function book(title, author, page, haveRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.info = function() {
            if (haveRead) {
            return title + ' by ' + author + ', ' + page + ' pages, read';
        } else {
            return title + ' by ' + author + ', ' + page + ' pages, not read yet';
        }
    }
}

const theOutsider= new book ("The Outsider", "Albert Camus", "250", true);
console.log(theOutsider.author);
console.log(theOutsider.info());
const bellJar = new book ("The bell jar", "Sylvia Plath", "500", false);
console.log(bellJar.info());
