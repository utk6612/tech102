
interface Person{
    name:string;
    age:number;
    email?:string;
    printDetails:()=>void;
}
let p:Person;
p={
    name:'Utkarsh',
    age:22,
    printDetails:()=>{return (p.name+""+p.age)}
};

console.log(p.printDetails());