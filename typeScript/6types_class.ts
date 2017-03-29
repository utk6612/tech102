

class Car{
    private id:number; // this is private
    name:string; // by default every thing is public
    speed:number;
    // In es6 we define parametrs in constructor
    //but in typescript we can define outside also
    constructor();
    constructor(theld:number,theName:string,theSpeed:number);    
    //In contructor overloading we have define arguments as optional in default constructor
    //But the theld,theName and theSpeed are not optional. It is only for definition.
    constructor(theld?:any,theName?:any,theSpeed?:any){
    this.id=theld;//initailization
    this.name=theName;
    this.speed=theSpeed;
}

    Accelerate(){
        console.log(`The car ${this.name} is running @ ${this.speed} kmph`)
    }
}

let c =new Car();
//console.log(c.Accelerate);


class Car2{
    constructor(private id:number,private name:string){//for private variables

    }
}


class Car3{
    private id: number;
    name:string;
    speed:number;
    constructor(theld:number,theName:string,theSpeed:number){
        this.id=theld;
        this.name=theName;
        this.speed=theSpeed;
        console.log("Within Car3");
    }
}

class JamesBondCar extends Car3{
    useNitro:boolean;
    constructor(theld:number,theName:string,theSpeed:number,useNitro:boolean){
        super(theld,theName,theSpeed);
        this.useNitro=useNitro;
        console.log("Within James Bond");
    }
}

let James=new JamesBondCar(1,"Lambo",235,true);

//both parent and derived class should have constructor if one them has.
//otherwise both should not have.

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