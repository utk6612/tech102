var Category;
(function (Category) {
    Category[Category["fiction"] = 0] = "fiction";
    Category[Category["inspirational"] = 1] = "inspirational";
})(Category || (Category = {}));
;
function GetAllBooks() {
    var books = [
        { id: 100, title: 'Wings Of Fire', author: 'APJ Kalam', category: Category.fiction },
        { id: 101, title: 'Playing It My Way', author: 'Sachin Tendulkar', category: Category.inspirational }
    ];
    return books;
}
var allBooks = GetAllBooks();
function GetTitles(bookProperty) {
    var booksToBeReturned;
    if (typeof bookProperty === "string") {
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var book = allBooks_1[_i];
            if (book.author === bookProperty) {
                booksToBeReturned.push(book.title);
            }
        }
    }
    if (typeof bookProperty === "number") {
        for (var _a = 0, allBooks_2 = allBooks; _a < allBooks_2.length; _a++) {
            var book = allBooks_2[_a];
            if (book.id === bookProperty) {
                booksToBeReturned.push(book.title);
            }
        }
    }
    return booksToBeReturned;
}
var details = GetTitles('APJ Kalam');
details.forEach(function (item) {
    console.log(item);
});
