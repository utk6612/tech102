
//generics

let carsArray =new Array<string>();
carsArray[0]=10;

function Swap<T>(x:T,y:T):void{
    let temp:T;
    temp=x;
    x=y;
    y=temp;
}

Swap<number>(10,20);
Swap<string>("hello","generics");

class Point<T>{
    x:T;
    y:T;
}

let point =new Point<number>();
//////////////////////////////////////////////////////////////////////////////////////////////////

interface Person{
    name:string;
    age:number;
    email?:string;
    printDetails:()=>void;
}

interface Employee extends Person{
    id:number;
    salary:number;
}

class Manager implements Employee{
    name:string;
    age:number;
    email:string;
    id:number;
    salary:number;
    printDetails(){

    }

}

class SeniorMgr extends Manager{

}

class Company<T extends Manager>{

}

let comp=new Company<SeniorMgr>();

let notAMgr=new Company<ActingAsManager>();//error
