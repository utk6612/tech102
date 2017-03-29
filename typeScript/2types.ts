enum Category{
fiction,
inspirational
}

function GetAllBooks():any[]{
    let books:any[]=[
        {id:100,title:'Wings Of Fire',author:'APJ Kalam',category:Category.fiction},
        {id:101,title:'Playing It My Way',author:'Sachin Tendulkar',category:Category.inspirational}

    ];
    return books;
}


function GetBooksByCategory(catFilter:Category):string[]{
    let books=GetAllBooks();
    let booklist:string[]=[];
    for(let det of books){
        if(det.category===catFilter)
            booklist.push(det.title)
    }
    return booklist
}

let fictionBooks:string[]=GetBooksByCategory(Category.fiction);


fictionBooks.forEach(function(title){
    console.log(title);
})

// Using Arrow Functions

fictionBooks.forEach((title)=>{
    console.log(title);
})