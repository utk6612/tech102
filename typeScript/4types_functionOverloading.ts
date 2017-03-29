enum Category{
fiction,
inspirational
};

function GetAllBooks():any[]{
    let books:any[]=[
        {id:100,title:'Wings Of Fire',author:'APJ Kalam',category:Category.fiction},
        {id:101,title:'Playing It My Way',author:'Sachin Tendulkar',category:Category.inspirational}

    ];
    return books;
}
let allBooks=GetAllBooks();
//function overloading

function GetTitles(author:string):string[];
function GetTitles(id:number):string[];
function GetTitles(bookProperty:any){
    let booksToBeReturned:string[];

    if(typeof bookProperty==="string"){
        for(let book of allBooks){
            if(book.author === bookProperty){
                booksToBeReturned.push(book.title);
            }
        }
    }

    if(typeof bookProperty === "number"){
        for(let book of allBooks){
            if(book.id === bookProperty){
                booksToBeReturned.push(book.title);
            }
        }
    }

    return booksToBeReturned;
}

let details:string[]=GetTitles('APJ Kalam');
details.forEach((item)=>{
    console.log(item);
})

