

function Print(pages:number,author:string,typeOfPrint:string='Color'){

}

Print(1000,'Ram');
//It is mandatory to pass the arguments in typescript 
//Otherwise it will show an error.


function Print2(pages:number,author:string,typeOfPrint?:string){

}

// ? reperesents optional parameter.
// required parameter must be written first 
//optional parameters should be written at last.

function Print3(pages:number,...restOfArguments:any[]){
    console.log(pages,restOfArguments[0],restOfArguments[1]);
}
//restOfArguments is by default optional

Print3(100,'JF Kennedy',1000)