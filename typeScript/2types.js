var Category;
(function (Category) {
    Category[Category["fiction"] = 0] = "fiction";
    Category[Category["inspirational"] = 1] = "inspirational";
})(Category || (Category = {}));
function GetAllBooks() {
    var books = [
        { id: 100, title: 'Wings Of Fire', author: 'APJ Kalam', category: Category.fiction },
        { id: 101, title: 'Playing It My Way', author: 'Sachin Tendulkar', category: Category.inspirational }
    ];
    return books;
}
function GetBooksByCategory(catFilter) {
    var books = GetAllBooks();
    var booklist = [];
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var det = books_1[_i];
        if (det.category === catFilter)
            booklist.push(det.title);
    }
    return booklist;
}
var fictionBooks = GetBooksByCategory(Category.fiction);
fictionBooks.forEach(function (title) {
    console.log(title);
});
// Using Arrow Functions
fictionBooks.forEach(function (title) {
    console.log(title);
});
