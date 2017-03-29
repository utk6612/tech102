function Print(pages, author, typeOfPrint) {
    if (typeOfPrint === void 0) { typeOfPrint = 'Color'; }
}
Print(1000, 'Ram');
//It is mandatory to pass the arguments in typescript 
//Otherwise it will show an error.
function Print2(pages, author, typeOfPrint) {
}
// ? reperesents optional parameter.
// required parameter must be written first 
//optional parameters should be written at last.
function Print3(pages) {
    var restOfArguments = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfArguments[_i - 1] = arguments[_i];
    }
    console.log(pages, restOfArguments[0], restOfArguments[1]);
}
//restOfArguments is by default optional
Print3(100, 'JF Kennedy', 1000);
